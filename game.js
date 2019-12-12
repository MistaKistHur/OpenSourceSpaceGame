// ::>>.Notes.......
// ::>>.
class Game{
	constructor(){

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,  0.1, 1000);
		this.renderer = new THREE.WebGlRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(this.renderer.domElement);
			// const geometry = new THREE.BoxGeometry(1,1,1); Could use the box as the viewport.. Mapped inside.
			const light = new THREE.DirectionalLight(0xffffff); // White light.
			      light.position.set(0,20,10);
			const ambient = new THREE.AmbientLight(0x707070);	// Soft White.
			const material = new THREE.MeshPhongMaterial({ color:0x00aaff });

			this.cube = new THREE.Mesh( geometry, material );
			this.scene.add(this.cube);
			this.scene.add(light);
			this.scene.add(ambient);

			this.camera.position.z = 3;
	        // Load the background texture ::>> Spliced this code block in from ThisIsSparta's answer - https://stackoverflow.com/questions/19865537/three-js-set-background-image
		// How to add BG img/texture to a scene .animate(Opacities)& build nebulaes, particles, debri ontop....
		        var texture1 = THREE.ImageUtils.loadTexture( 'spaceBg1.png' );	//Change to WepP if possible.
		        var texture2 = THREE.ImageUtils.loadTexture( 'spaceBg2.png' );
		        var texture3 = THREE.ImageUtils.loadTexture( 'spaceBg3.png' );
		        var backgroundMesh = new THREE.Mesh(
		            new THREE.PlaneGeometry(2, 2, 0),
		            new THREE.MeshBasicMaterial({
		                map: texture
		            }));

		        backgroundMesh .material.depthTest = false;
		        backgroundMesh .material.depthWrite = false;

		        // Create your background scene
			        var backgroundScene = new THREE.Scene();
			        var backgroundCamera = new THREE.Camera();
			        backgroundScene .add(backgroundCamera);
			        backgroundScene .add(backgroundMesh);
			        // ::>> End Splice[Code Block]
			this.animate();
	}
	animate() {
		const game = this;
		requestAnimationFrame(()=>{game.animate();});

		this.renderer.render(this.scene, this.camera);
	}
}
/* ::>> Example Code Reference Only[RenderPlanets Texture - https://observablehq.com/@mourner/3d-planets-with-three-js]
{
  const renderer = new THREE.WebGLRenderer();
  const size = Math.min(width, 600);
  renderer.setSize(size, size); renderer.setPixelRatio(devicePixelRatio);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000).translateZ(2.8);
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 1.12; controls.maxDistance = 10;

  const scene = new THREE.Scene();
  const map = await loadTexture(`https://solartextures.b-cdn.net/2k_${planet}.jpg`);
  scene.add(new THREE.Mesh(new THREE.SphereBufferGeometry(1, 32, 32), new THREE.MeshBasicMaterial({map})));

  renderer.render(scene, camera);
  controls.addEventListener("change", () => renderer.render(scene, camera));
  invalidation.then(() => (controls.dispose(), renderer.dispose()));

  return renderer.domElement;
}
loadTexture = ƒ(url)
loadTexture = {
  const loader = new THREE.TextureLoader();
  return url => new Promise(resolve => loader.load(url, resolve));
}

3D planets with Three.js

A minimal Three.js example of a textured sphere with controls. Textures source
loadTexture = ƒ(url)
THREE =


  Object {ACESFilmicToneMapping: 5, AddEquation: 100, AddOperation: 2, AdditiveBlending: 2, AlphaFormat: 1021, AlwaysDepth: 1, AlwaysStencilFunc: 519, AmbientLight: ƒ(a, b), AmbientLightProbe: ƒ(a, b), AnimationClip: ƒ(a, b, c), AnimationLoader: ƒ(a), AnimationMixer: ƒ(a), AnimationObjectGroup: ƒ(), AnimationUtils: Object, ArcCurve: ƒ(a, b, c, d, e, f), ArrayCamera: ƒ(a), ArrowHelper: ƒ(a, b, c, d, e, f), Audio: ƒ(a), AudioAnalyser: ƒ(a, b), AudioContext: Object, …}
*/




class UserAgent{	// ::>> May move these to there own seperate modules[.All of the below Classes.]..
	constructor(){
		this.uid.
		this.guid;
		this.cookie.
		this.hashishCookie = rand(32); //Random Bites. was gonna use bin2hex(); but think thats a php script.
		this.spaceCookie = rand(64);
		this.usrname = '';
		this.email = '';
		this.faction = '';
		this.alliance = '';
	}
}
class UiControls{
	constructor(){
		// ::>> Create Screen Controls in here
		// ::>> Tilt, pan, zoom, center, split-view etc

		// ::>> Touch.

		// :;>> GamePad.
	}
}
class Levels{
	constructor(){
		this.levelNo = LevelNo;
		this.levelMap = LevelMap;
		this.levelAsset = [];			// Json file probably, or multiple..
		this.levelState = LevelState;
		this.levelHardness = Hardness;
		this.levelProgress = Progress;
	}
	prefetchAssets(){
		// ::>> Fetch Assets & Dependancies...
	}
	buildMap(){
		// ::>> Create Matrices.
		// ::>> Layout vectors.
		// ::>> Add Textures & Assets.
	}
	populateMap(){
		// ::>> Fetch Server info for players
	}
	buildLevel(){
		// ::>> Combine Everything.
	}
	clearLevel(){
		// ::>> To do after Completion.
	}
}
// ::>>. Faction list: Venutians, Pliedians, Reepers, Siarians, Lerchers, Butanites, Corealians, Neptunians, 
// ::>>. Sectors.>
// ::>>. StarSystems.>
// ::>>. Tech-tiers.>
// ::>>. Artifacts.>
// ::>>. Build a research Tree.>
// ::>>. Hidden Levels/missions.> Psychadelic World, Fractal Sector, Weird Physics, Market Mission.

class Crafts{
	constructor(){
		this.baseHealth = '275000' + 25%; 	// ::>> Plus should be green on the bar (UseGradient.)
		this.baseShields = '148000' + 22%;
		this.multiplier = [];
		this.artifacts = [];		// ::>> Artifacts have special properties on fleets, research, intel & wellbeing.
		this.weapons = [];			// ::>> create various different weapons classes.
		this.bonuses = [];
		this.speed = null;
		this.anims = ["idle","move","turbo","warp",
			      "escort","guard","rotate","freeze",
			      "morph","implode","explode","fire",
			      "special","pickup","damage","unload"];
		this.assetsPath = '..assets/crafts';
	}
	function Morph(){	// ::>> Changes all these to fatArrow syntax when functionality is complete.
		// ::>> Animate Morphology.
	}
	function Hibernate(){
		// ::>> Activate shields, partial invisibility to other crafts(based on probability).
		// ::>> Replenish foodz, energyz, shields etc. Crew Mentality += better. research++
	}
	function SpawnShield(){

	}
	function Warp(){
		// ::>> Needs a target destination, warp counter, eta to arrival, reactor strength.
	}
	function Guard(){
		// ::>> Activate force field, which absorbs surrounding crafts/bases.
		// ::>> resources -= 5%
	}
	function Escort(){
		// ::>> link and increase speed of target ships/fleets. speed[+=%33.]
		// ::>> resources -= 8%

	}

}
class Fleets{
	constructor(){
		this.formation = formation;
		this.formationDragReduction = SumNumb; 		// increased speed bonus.
		this.fleetStrength = null;      // bonus for stacking certain types. 
		this.captain = captain;
		this.mercinaries = []; 		// ::>> A crew of editable soldiers to marshal & maintain your fleets
		this.multiplier = [];	        // ::>> ^ aswell as being the active commanders during fleet battles.
		this.bonuses = [];
	}
	// mercinaries.push();
	// mercinaries.pop();
	// how would u re-arrange them & give them different duties.
	
	// multipler values. => 4, 8, 16, 32, 64.
}
class Drones{					// ::>> Drones & Mechs for vaious different missions, recon, spying, sabotage...
	constructor(){
		this.target = [];  		// Up 2 8 targets. 
		this.objective = objective;
		this.special = special;
		// ::>> ^ Objective will be one of many tasks depending on the drone deployed.
		// Spider Mech Drones, Squid Canons, Octopussy miners, Alien Mech, Nano bot Swarm, Shapeshifters[intel], 
	}
}
class SpaceNodes{				// ::>> These will be bases, planets, docking Station & fuel outlets.
	constructor(){
		this.owner;				// ::>> Usr.
		this.objectAlliance;	// ::>  OverAll dedication
		this.allegance;			// ::>
		this.health;
		this.mainPurpose;		// ::>> is Base? Fuel Station? Asteroid? Artifact? Planet? etc
		this.secPurpose;		// ::>> hidden Agenda only visible to Usr, Crew, Maybe Alliance
		this.details = {		// ::>> eg. Could be [base + fuelling station], [asteroid + intel station].. only idea atm.
			resources: null,
			health: null,
			shields: null,
			visibility: 0 || 1,
			address: '',		// ::>> Some vector. unique location marker.
			defenses: {}

			// ::>> Some metrics in here.
		};
		this.stats = [];
	}
}
class Weapon{
	constructor(){
	this.name = name;
	this.w_class = w_class;
	this.rounds = rounds; 		// ::>> 1 round = 28 pulses, bullets or projectiles.
	this.damage = undefined;	// ::>> make weapons modular & upgradable the same as all other assets.
	this.mag = undefined;
	this.damage_bonus = undefined;
	this.multiplier = null;
	this.parts = 7;
	this.cost = undefined;
	this.ammoCst = undefined;
	this.heatSign = '';		// ::>> increased heat signiture means enemy targeting is incrementally better.
	}
	function trackNtrace(){
		if(){			// ::>> logic to track nearest target, sttrongest/weakest or optimal...
		} else{
		   }
		switch(){
		
		}			// ::>> Ui needs btn to give user control or hand-over control to Ai.
	}
	function prime(){
	
	}	
	function blitz(){
	
	}	
	function hellfire(){
	
	}	
	
	
}
/* BluePrints for the various Different Nodes to go in here, maybe split and import. */
/* Not sure if react would be better.... */
class World extends SpaceNodes{

}

class Base extends SpaceNodes{

}

class Mine extends SpaceNodes{

}
class TradeCenter extends SpaceNodes{

}
class AlienOutpost extends SpaceNodes{

}

class WarpNode extends SpaceNodes{

}
class SpaceJunk extends SpaceNodes{

}
class JunkYard extends SpaceNodes{

}
class RebelHQ extends SpaceNodes{

}
class Rebel extends SpaceNodes{

}
class IntelStation extends SpaceNodes{
	
}
class AlienBizarre extends SpaceNodes{
	constructor(){
		this.sector = sector;
		this.mrktId = marktGuid;
		this.pos = []; 				// ::>> Some vector co-ordinates. maybe json file.
		this.open = undefined;
		this.currency = mrkt_cur;
		this.marshalls = mrkt_faction_ownr;	// ::>> Different markets will be governed by various factions
		this.tax_rt = tax_rate;
		this.times = times; 			// ::>> opening hours of the markets.
		this.docking_fee = 50; 			// ::>> base fee to enter or trade at market.
		
	}
	function check_credent(){
							// ::>> check if usr allowed or has any current bans.
							// ::>> can access stelth by drone but only purchase.
							// ::>> may loose drone.
	}
	function populate(){
	
	}
	function expel(){
	
	}
	function mutany(){
	
	}
}

	function Auto_save(){
		// new request every 8 minutes.
		// 
	}
	function UsrSav(){
		// Ui btn.
	}
// ::>> Game Controls.

// ::>> Touch Controls.

// ::>> User Actions.

// ::>> Resources.

// ::>> Scoring.

// ::>> Notes...


// Animate space scene background by mixing opacity of 3/4 hd space backdrops, with nebula, clouds, particle effect.
// Add orbital controls.
// Add skins
//

// Events to be moved to a seperate file
/*
	D forcefield  = key 68
	S Move Left   = key 83
	F Move Right  = Key 70
	E Roll left   = key 69
	R Roll Right  = key 82 
	Z Weapons     = key 90
	X Weapons     = key 88 
	
	::>> Touch Actions
	::>> Control Pad ie ps/xbox etc...
	::>> Mouse Actions.
		- scroll
		- left 
		- right
		- middle

*/


