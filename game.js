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
class UserAgent{	// ::>> May move these to there own seperate modules[.All of the below Classes.]..
	constructor(){
		
	}
}
class Levels{
	constructor(){
		
	}	
}
class Crafts{
	constructor(){
		this.baseHealth = '27500';
		this.baseShields = '1480';
		this.multiplier = [];		
		this.artifacts = [];
		this.weapons = [];
		this.bonuses = [];
	}
	function Morph(){	// ::>> Changes all these to fatArrow syntax when functionality is complete.
		// Animate Morphology.
	}
	function Hibernate(){
		// Activate shields, partial invisibility to other crafts(based on probability).
	}
	function Warp(){
		// Needs a target destination, warp counter, eta to arrival, reactor strength.
	}
	function Guard(){
		// Activate force field, which absorbs surrounding crafts/bases.
	}
	function Escort(){
		// link and increase speed of target ships/fleets.
	
	}

}
class Fleets{
	constructor(){
		this.formation = formation;
		this.formationDragReduction = SumNumb;
		this.fleetStrength = null;
		this.captain = captain;
		this.mercinaries = [];
		this.multiplier = [];	
		this.bonuses = [];
	}
}
class Drones{		// ::>> Drones & Mechs for vaious different missions, recon, spying, sabotage...
	constructor(){
		this.target = [];  // Up 2 8 targets.
		this.objective = objective;
	}
}
class SpaceNodes{	// ::>> These will be bases, planets, docking Station & fuel outlets.
	constructor(){
		this.owner;	
		this.objectAlliance;
		this.allegance;
		this.health;
		this.mainPurpose;
		this.secPurpose;
		this.details = {
			// Some metrics in here.
		};
		this.stats = [];
	}
}

// ::>> Game Controls.

// ::>> Touch Controls.

// ::>> User Actions.

// ::>> Resources.

// ::>> Scoring.

// ::>> Notes...
