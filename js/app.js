const input = {
	"things":["Shadows","Night","the Sea","the Moon","Stars",
				"the Sun","Kittens","Fear","Courage","Dancing",
				"the Internet","Unicorns","Dolphins","Mermaids","Upstairs",
				"Foxes","Puppies","Chairs","Trees","Plants",
				"Flowers","Music","Singing","Painting","Song",
				"Sparkles","Jewels","Intelligence","Smarts","Dragons",
				"Wolves","Shoes","Bravery","Honesty","Empathy",
				"Compassion","Wisdon","Knowledge","Cats","Storms",
				"Lightning","Thunder","Rain","Snow","Clouds",
				"Wind","the Earth","the Universe","the Galaxy","the Piano",
				"the Sky","the Land","the Realm","the oceans","cookies",
				"cakes","pies","macarons","pizza","parties"],
	"role":["Defender","Champion","Scion","Empress","Sorceress",
			"Master","Mistress","Boss","CEO","President",
			"Prime Minister","DJ","Knight","Dame","Duchess",
			"Baroness","Countess","Manager","Singer","Drummer",
			"Muse","Siren","Painter","Crafter","Creator",
			"Accountant","Chancellor","Jedi","Teacher","Jedi Master",
			"Tutor"],
	"origin":[" is the Queen of #things#, #role# of #things#, and #role# of #things#."]
};



const app = new Vue({
	el:'#app',
	data: {
		grammar:null,
		name:'',
		result:''
	},
	methods:{
		makeQueen() {
			if(this.name === '') return;
			this.result = this.name + grammar.flatten('#origin#');
			window.location.hash = this.name;
		}
	},
	mounted() {
		grammar = tracery.createGrammar(input);
		grammar.addModifiers(baseEngModifiers);
		if(window.location.hash && window.location.hash.length > 1) {
			//remove # 
			this.name = window.location.hash.substring(1);
			this.makeQueen();
		}
	}
});