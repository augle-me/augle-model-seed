import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
export var __auglemodel = class MyBox extends Mesh {
  constructor (config, geometry, material) {
    super(geometry, material);
    this.geometry = new BoxGeometry(10, 10, 20);
    this.material = new MeshBasicMaterial({color: 0xff0000});
  }
}