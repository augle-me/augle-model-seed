# augle-model-seed
This is seed project to create models and build to generate `.arpk` package file.

## Getting Started

### Checkout the project and install

```
git clone https://github.com/augle-me/augle-model-seed
cd augle-model-seed
npm install
```

### Quick start, to created `.arpk` release file run

```
npm run build
```
**Important Note** : this command will create `arpk` file with dummy model

Above command creates the `.arpk` file in `dist/` folder. You can start uploading it to developer portal for store publishing.

### Developing the model with live reload.

 ```
 npm run preview
 ```

Above commend will open the window and shows the default model. You can starting play will your source files to see the changes with live reload.


## In Depth

1. Default Source code Directory Structure
2. Previewing
3. arpk.config.json
4. manifest.json

### 1. Default Source code Directory Structure

This is base structure of the project that works with the current configurations. However, you can change it, if you know how to change the configurations to build `.arpk` file.

```
augle-model-seed/
├──src/                     * Model folder, contain model related files
|    ├──model/              * Model files can be grouped in this folder
|    |  └──init.js          * Main model file
|    └──manifest.json       * Model related metadata file, VERY IMPORTENT for releasing the model to public
├──preview/                 * Preview folder, Used for previewing the model for development
|    ├──load.js             * load file for loading model (model under src/ folder)
|    └──index.html          * index file
├──temp/                    * temp build files ( Nothing much to know, building byproducts, you can ignore)
├──dist/                    * when you run > npm run build, .arpk file will we placed in this folder
├──arpk.config.json         * build configuration file, for .arpk build
├──gulpfile.js
├──webpack.config.js
└──package.json
```

### 2. Previewing

while developing the model, you can preview it in the browser using the command `npm run preview`. When files under the `src/` changes then preview get updated in the browser.

Files under `preview/` folder will be used to show the preview, these files don't go into `.arpk` file. Previewing feature is available to speed up the development process.

### 3. arpk.config.json files

arpk.config.json file is very important for building the release `.arpk` file. it has the configurations about where to get the model related files and manifest.json.

It has to main properties, manifest file location and model files location.
```
{
   "manifest": "src/manifest.json",
   "files": ["src/**", "!src/manifest.json"]
}
```
If manifest file is placed with in the same folder as model files we have here `src/` then we have to remove the manifest from the files property using ! Operator in front of manifest file path.

Moving this file to other location is not recommended. In case if you would like to move, to new location then, change the reference of this in `gulpfile.js`.

### 4. manifest.json

You can publish any number of version for the same model when you published to the store. For that, you need to change few things in the manifest.json. Augle uses this file to identify the version of the model. You cannot have same `verCode` to different release.

Sample manifest.json looks like this
```
{
   "main": "./model/init.js",
   "verCode": 1,
   "version": "1.0.0"
}
```

Properties `main`, `verCode` and `version` all three are required, However, only `verCode` has to be change for different release version. you can also change `main`, `version` how ever it’s not mandatory.

Changing `version` property for each release using semver format, is helpful to the user whole is using your model

Changing `main` property completely up to you, it should point to model entry file, and it is always relating manifest.json file, that entry file should export an object which is extending THREE.Mesh class.
