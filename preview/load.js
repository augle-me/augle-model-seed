import {Mesh, WebGLRenderer, Scene, PerspectiveCamera} from 'three';
var path = require('path');
var manifest = require('../src/manifest.json');
var mainFiles = require.context('../src/', true, /\.js$/);

//console.log('../'+data.manifest);
var scene = new Scene();
var camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
let model = mainFiles(manifest.main).model;
if(model instanceof Mesh){
  scene.add(model);
}
//scene.add();

camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );
  if(model){
    model.rotation.x += 0.1;
    model.rotation.y += 0.1;
  }
  renderer.render(scene, camera);
};

render();