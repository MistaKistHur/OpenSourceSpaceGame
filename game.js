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
		this.baseHealth = '275000' + 25%; 	// Plus should be green on the bar (UseGradient.)
		this.baseShields = '148000' + 22%;
		this.multiplier = [];					
		this.artifacts = [];			// Artifacts have special properties on fleets, research, intel & wellbeing.
		this.weapons = [];			// create various different weapons classes.
		this.bonuses = [];
		this.anims = ["idle","move","turbo","warp",
			      "escort","guard","rotate","freeze",
			      "morph","implode","explode","fire",
			      "special","pickup","damage","unload"];
		this.assetsPath = '..assets/crafts';
	}
	function Morph(){	// ::>> Changes all these to fatArrow syntax when functionality is complete.
		// Animate Morphology.
	}
	function Hibernate(){
		// Activate shields, partial invisibility to other crafts(based on probability).
		// Replenish foodz, energyz, shields etc. Crew Mentality += better. research++
	}
	function Warp(){
		// Needs a target destination, warp counter, eta to arrival, reactor strength.
	}
	function Guard(){
		// Activate force field, which absorbs surrounding crafts/bases.
		// resources -= 5%
	}
	function Escort(){
		// link and increase speed of target ships/fleets.
		// resources -= 8%
	
	}

}
class Fleets{
	constructor(){
		this.formation = formation;
		this.formationDragReduction = SumNumb;
		this.fleetStrength = null;
		this.captain = captain;
		this.mercinaries = []; 		// A crew of editable soldiers to marshal & maintain your fleets
		this.multiplier = [];	        // ^ aswell as being the active commanders during fleet battles.
		this.bonuses = [];
	}
}
class Drones{		// ::>> Drones & Mechs for vaious different missions, recon, spying, sabotage...
	constructor(){
		this.target = [];  // Up 2 8 targets.
		this.objective = objective;
		// ^ Objective will be one of many tasks depending on the drone deployed.
	}
}
class SpaceNodes{	// ::>> These will be bases, planets, docking Station & fuel outlets.
	constructor(){
		this.owner;		// ::>> Usr.	
		this.objectAlliance;	// ::>  OverAll dedication
		this.allegance;		// ::>
		this.health;
		this.mainPurpose;	// ::>> is Base? Fuel Station? Asteroid? Artifact? Planet? etc
		this.secPurpose;		// ::>> hidden Agenda only visible to Usr, Crew, Maybe Alliance
		this.details = {			// ::>> eg. Could be [base + fuelling station], [asteroid + intel station].. only idea atm.
			resources: null,
			health: null,
			shields: null,
			visibility: 0 || 1,
			address: '',	// Some vector.
			defenses: {};
			
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
