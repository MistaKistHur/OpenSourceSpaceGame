// ::>>.Notes.......
class Game{
	constructor(){
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,  0.1, 1000);
		this.renderer = new THREE.WebGlRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(this.renderer.domElement);
			const geometry = new THREE.BoxGeometry(1,1,1);
			const light = new THREE.DirectionalLight(0xffffff); // White light.
			      light.position.set(0,20,10);
			const ambient = new THREE.AmbientLight(0x707070);	// Soft White.
			const material = new THREE.MeshPhongMaterial({ color:0x00aaff });

			this.cube = new THREE.Mesh( geometry, material );
			this.scene.add(this.cube);
			this.scene.add(light);
			this.scene.add(ambient);

			this.camera.position.z = 3;
			this.animate();
	}
	animate() {
		const game = this;
		requestAnimationFrame(()=>{game.animate();});

		this.renderer.render(this.scene, this.camera);
	}
}

// ::>> Game Controls.

// ::>> Touch Controls.

// ::>> User Actions.

// ::>> Resources.

// ::>> Scoring.

// ::>> Notes...
