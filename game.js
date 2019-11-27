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
		this.formationDragReduction = SumNumb;
		this.fleetStrength = null;
		this.captain = captain;
		this.mercinaries = []; 		// ::>> A crew of editable soldiers[28] to marshal & maintain your fleets.[880 lesser soldiers/aliens]
		this.multiplier = [];	        // ::>> ^ aswell as being the active commanders during fleet battles.
		this.bonuses = [];
	}
}
class Drones{					// ::>> Drones & Mechs for vaious different missions, recon, spying, sabotage...
	constructor(){
		this.target = [];  		// Up 2 8 targets.
		this.objective = objective;
		// ::>> ^ Objective will be one of many tasks depending on the drone deployed.
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
class Weapons{

}
/* BluePrints for the various Different Nodes to go in here, maybe split and import. */
/* Not sure if react would be better.... */

class Base extends SpaceNodes{
	constructor(usr,add,active,state,plasma,magneto){
	
	}
}
class Mine extends SpaceNodes{
	constructor(){
	
	}
}
class World extends SpaceNodes{
	constructor(){
	
	}
}
class WarpNode extends SpaceNodes{
	constructor(){
	
	}
}
class JunkYard extends SpaceNodes{
	constructor(){
	
	}
}
class RebelHQ extends SpaceNodes{
	constructor(){
	
	}
}
class SpaceJunk extends SpaceNodes{
	constructor(){
	
	}
}
class TradeCenter extends SpaceNodes{
	constructor(){
	
	}
}
class AlienOutpost extends SpaceNodes{
	constructor(){
	
	}
}
class RebelOutPost extends SpaceNodes{
	constructor(){
	
	}
}
class IntelStation extends SpaceNodes{
	constructor(){
	
	}
}
class AlienBizarre extends SpaceNodes{
	constructor(){
	
	}
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
