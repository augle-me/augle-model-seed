import {BoxGeometry, MeshBasicMaterial, Mesh} from 'three';
class MyBox extends Mesh{

	constructor (geometry, material) {
      super(geometry, material);
		this.geometry = new BoxGeometry( 1, 1, 1 );
		this.material = new MeshBasicMaterial( { color: 0x00ffff } );
    }
}

export var model = new MyBox();