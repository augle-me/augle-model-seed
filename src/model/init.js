import { CircleBufferGeometry, MeshBasicMaterial, Mesh } from 'three';
var __auglemodel = {
  "com.augle.box" : class MyBox extends Mesh {
    constructor (config, geometry, material) {
      super(geometry, material);
      this.geometry = new CircleBufferGeometry(  5, 32 );
      this.material = new MeshBasicMaterial({color: "#0fff0f"});
    }
  }
}

export {__auglemodel as default};