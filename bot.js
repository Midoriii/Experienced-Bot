var Discord = require('discord.js');
var config = require('./config.json');
var leftko = require('./l4d2.js');
const fetch = require("node-fetch");

// Initialize Discord Bot
const bot = new Discord.Client();

bot.login(config.token);



// Simple odpovedi
const response = {
	"perfection": "https://www.youtube.com/watch?v=xzTG_1Xun54",
    "golf": "@everyone It is a good day to golf!",
	"trousi": "https://uploads.disquscdn.com/images/d880f9ad2200e904da6adce157b7b5c6bf2cc45ce45e173a1fec5ad8c08b1e6d.gif",
    "leftko": "@everyone Kundy: Čas Leftka!",
	"age": "@everyone Dáme Age? <:rosy:378362108481634315>",
	"ow": "@everyone You must always answer the call!",
    "dpd": "http://i559.photobucket.com/albums/ss32/VincentZ24/234d48ca-d237-46f9-bf14-03c8081a6571_zpskwney0z5.jpg",
    "wololo": "https://www.youtube.com/watch?v=BV_d7RDYdzw",
	"devil": "https://www.youtube.com/watch?v=lChZmZXXluI",
    "friday": "https://www.youtube.com/watch?v=ceOTj2Jr8bk",
	"rosy": "https://www.youtube.com/watch?v=bPoQDrOY_zo",
    "hentai": "https://www.youtube.com/watch?v=1ER67r8OCW8",
    "pong": "https://www.youtube.com/watch?v=43vC9RbL3rE",
    "shaq": "https://www.youtube.com/watch?v=DSlphvKLTlE",
    "tusken": "https://i.imgur.com/A7s55oP.gif",
    "anthem": "https://www.youtube.com/watch?v=vTlvogPLLwc",
    "olyasha": "https://www.youtube.com/watch?v=F-SZiGdRC64",
    "nippontradamus": "https://www.youtube.com/watch?v=b7dmM-QMkmg",
    "unreal": "https://www.youtube.com/watch?v=3bvPTxPSufs",
    "#1": "https://www.youtube.com/watch?v=Tw82bhRQswk",
    "lost": "https://www.youtube.com/watch?v=M1DcD8e55YY",
    "butterfly": "https://www.youtube.com/watch?v=u7XWIXQVMDU",
	"wwe": "https://clips.twitch.tv/PeppyRefinedOrangeNomNom",
	"miracle": "https://www.youtube.com/watch?v=xBLkM77jjCM",
    "snout": "https://www.youtube.com/watch?v=JOFWQFkBAnw",
	"fiiii" : "https://clips.twitch.tv/FriendlyUglyTruffleDancingBaby",
	"fakenews" : "http://i559.photobucket.com/albums/ss32/VincentZ24/babis_zpsujgggvco.jpg",
    "help": "```css\n The ting goes .. weather | perfection | anthem | age | david | golf | leftko | marjamaki | winnable? | fakenews | devil | wololo | fiiii | wwe | miracle | dpd | ow | skill | trousi | snout | unreal | #1 | lost | butterfly | friday | hentai | pong | shaq | tusken | olyasha | nippontradamus | zkusenost | l4map | course | lauren \n```",
}

// Lauren
var lauren = ["https://media.giphy.com/media/8mxAJbwJjz1Fm/giphy.gif", "https://media.giphy.com/media/pTURcLj8F8Es8/giphy.gif", "http://gifimage.net/wp-content/uploads/2017/08/lauren-mayberry-gif-16.gif", "http://gifimage.net/wp-content/uploads/2017/08/lauren-mayberry-gif-5.gif", "http://gifimage.net/wp-content/uploads/2017/08/lauren-mayberry-gif-2.gif", "https://media.giphy.com/media/yqjHHcx3t6nxC/giphy.gif", "https://media.giphy.com/media/ASERo2T54DtGU/giphy.gif", "http://i.imgur.com/uRPSPUm.gif", "http://68.media.tumblr.com/4e6386d812032b91c73953f826fbd499/tumblr_inline_n9s1sjNEYP1rt2432.gif", "http://gifimage.net/wp-content/uploads/2017/08/lauren-mayberry-gif-26.gif", "http://25.media.tumblr.com/f61005dce8c7e20ff73169d5d338ea9a/tumblr_mskkq34J291sh5mxqo1_250.gif"];
// Zkusenost
var experience = ["Bájná nezkušenost!", "Hrubá nezkušenost!", "Nezkušeně..", "Přiměřeně zkušeně..", "Zkušeně!", "Velmi zkušeně!", "Stařecká zkušenost!", "Zkušenost prastarých!", "Mladická nezkušenost..", "Tak decentně zkušeně..", "Mistrovská zkušenost!", "Mýtická zkušenost!", "Řádně zkušeně!", "You require more experience!"];
// Golf courses
var courses = ["Forest", "Oasis", "Twilight", "Haunted", "Candyland", "Ancient", "Pirate", "Space", "Volcanic"];
// Games he plays
var games = ["Hearthstone", "Slay the Spire", "Pukki Party", "PUBG", "Overwatch", "Your Mom", "Warhammer End Times Vermintide", "IRL", "FIFA 24", "osu!", "Golf With Your Friends", "Left 4 Dead 2", "PAYDAY 2", "Counter-Strike: Source"];
// Skill predictions
var skill = ["Gaming prodigy!", "Můžeš buď zpívat, nebo vyhrávat.", "Cup soup killer!", "Gaming beggar!", "Slow reflexes will haunt you.", "Backpacksen", "Straight up garbage.", "Don't even bother playing...", "Slight chance of real skills.", "TRYHARD", "Championsen!", "You're gonna be miracle rogue!", "Hanzo instapick", "Maisterious!", "Chicken dinner.", "20 APM God", "Yasuo instalock", "Vodyani scum...", "Mysterious golfer!", "Klasická Matsudovka", "Klasická Ducovka", "Klasická Mílovka"];
// Endless
var endless = ["Umbral Choir", "Vodyani", "Vaulters", "Unfallen", "Riftborn", "Horatio", "The United Empire", "Lumeris", "Cravers", "Sophons", "Hissio", "Nakalim"];
// Marjamaki
var marjamaki = ["https://i.imgur.com/VBhk6fX.jpg", "https://imgur.com/CJoYpnf", "https://imgur.com/JvMcBDV", "https://imgur.com/zlPpgfx", "https://imgur.com/NxcOBSr", "https://imgur.com/oXqHB2t", "https://imgur.com/RLaplQD", "https://imgur.com/67YfTHW", "https://imgur.com/XHlFb8H", "https://imgur.com/GFSbLJF", "https://imgur.com/C8Ds4Qd", "https://imgur.com/vPZpd1Q", "https://imgur.com/iDroYXN", "https://imgur.com/nV2MUJ5", "https://imgur.com/b6omH3B", "https://imgur.com/8v0PgMy", "https://imgur.com/VsQAx2A", "https://imgur.com/ahaZyG0", "https://imgur.com/kHvU31m", "https://imgur.com/s3YLNR8", "https://imgur.com/ZCXF6on", "https://imgur.com/WKQ6YSf", "https://imgur.com/6pNR6MB", "https://imgur.com/tPBfZjI", "https://imgur.com/IYfirzw", "https://imgur.com/3W7PvNc", "https://imgur.com/Wj4tgZy", "https://imgur.com/P3G6t4j", "https://imgur.com/AsysU3l", "https://imgur.com/9SZTbW2", "https://imgur.com/t1eAOVb", "https://imgur.com/Oy5uW3T", "https://imgur.com/4BZeoXx", "https://imgur.com/QoLrP5O", "https://imgur.com/aMqZmIa", "https://imgur.com/Pnl3gJC", "https://imgur.com/wPdfRS9", "https://imgur.com/RFJ1SFz", "https://imgur.com/vrJRJr5", "https://imgur.com/gVeADaS", "https://imgur.com/SdRt8ZC", "https://imgur.com/QVOb5rP", "https://imgur.com/3rXGPhm", "https://imgur.com/7mbFQvj"];
// Winanble ?
var winnable = ["FF at 15 that shit is done.", "winnable .. Winnable .. WINNABLE", "Anything is possible, anything is WINNABLE, I proved it .. we play ON", "Bitch come on .. I'm Shanks fucking 1", "WINNABLE", "I'm not gonna fucking lose, period", "You have no mana bitch, YOU HAVE NO MANA", "GG bitch", "EZ4ENCE"]

// Urazky
var hate = ["Certifikovaný kozomrd ^", "Tenhle týpek holduje konině ^", "This guy paid 300$ for fisting ^", "Fuck this dude ^", "Tak hele ty čůráčku .. !", "Tak to by mohl říct jen koňomrd", "Drž hubu ty prasomrde", "Přestaň laskavě mlít ta hovna", "Kliď se ty nuzáku"];
// Fakta
var facts = ["Emus and kangaroos cannot walk backwards, and are on the Australian coat of arms for that reason.","The shape of plant collenchyma’s cells and the shape of the bubbles in beer foam are the same - they are orthotetrachidecahedrons.","The phrase rule of thumb is derived from an old English law, which stated that you couldn't beat your wife with anything wider than your thumb.","Statues in parks: If the horse has both front legs in the air, the person died in battle; if the horse has one front leg in the air, the person died as a result of wounds received in battle; if the horse has all four legs on the ground, the person died of natural causes.","Firehouses have circular stairways originating from the old days when the engines were pulled by horses. The horses were stabled on the ground floor and figured out how to walk up straight staircases.","Intelligent people have more zinc and copper in their hair.","Average number of days a West German goes without washing his underwear: 7","The first CD pressed in the US was Bruce Springsteen's 'Born in the USA'","The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.","Valentine Tapley from Pike County, Missouri  grew chin whiskers attaining a length of twelve feet six inches from 1860 until his death 1910, protesting Abraham Lincoln's election to the presidency.","Celery has negative calories! It takes more calories to eat a piece of celery than the celery has in it.","In eighteenth-century English gambling dens, there was an employee whose only job was to swallow the dice if there was a police raid.","Only female mosquito’s' bite and most are attracted to the color blue twice as much as to any other color.","The plastic things on the end of shoelaces are called aglets.","Each of us generates about 3.5 pounds of rubbish a day, most of it paper. In Dave's case, it's mostly the shit he talks.","Most collect calls are made on father's day.","A person cannot taste food unless it is mixed with saliva. For example, if a strong-tasting substance like salt is placed on a dry tongue, the taste buds will not be able to taste it. As soon as a drop of saliva is added and the salt is dissolved, however, a definite taste sensation results. This is true for all foods.","Because of the rotation of the earth, an object can be thrown farther if it is thrown west.","A 'jiffy' is a unit of time for 1/100th of a second.","The very first bomb dropped by the Allies on Berlin during World War II Killed the only elephant in the Berlin Zoo.","The citrus soda 7-UP was created in 1929; '7' was selected after the original 7-ounce containers and 'UP' for the direction of the bubbles.","To escape the grip of a crocodile's jaws, push your thumbs into its eyeballs - it will let you go instantly.","A pig's orgasm lasts for 30 minutes."];

//Weather API key
var key = "c991ddf2d15569276661dba2e7fb09bb";

// Ready function
bot.on('ready', function (evt) {
    console.log('I am ready!');
    var answer = Math.floor((Math.random() * games.length));
    bot.user.setStatus("dnd");  //Do not disturb
    bot.user.setGame(games[answer]);  //Co hraje
    console.log('All set!');
});

// Odpovedi na zpravy
bot.on('message', message => {
    //Na zpravy bez prefixu a od botu nereaguje .. vetsinou
    if ((!message.content.startsWith(config.prefix) && !message.content.startsWith(config.alt_prefix)) || message.author.bot) {
		// Obcas neco zavali
		var chosen_number = Math.floor((Math.random() * 400.0));
		// Debugging
		console.log(chosen_number);
		if (1 >= chosen_number){
			if (7 <= Math.floor((Math.random() * 10.0))){
				var answer = Math.floor((Math.random() * hate.length));
				return message.channel.send(hate[answer]);
			}
			else{
				var answer = Math.floor((Math.random() * facts.length));
				return message.channel.send(facts[answer]);
			}
		}
		else {
			return;
		}
	}

    //Argumenty a Command
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	var target = "";

	while(args.length > 0){
		target += "+" + args.shift().toLowerCase();
	}
	

    //Shutdown
    if (command === "bye" && message.author.id == config.authorID) {
        message.reply("I'm gone.");
        return bot.destroy();
    }

    //Poslat Rosiho dom
    if (message.author.id == config.RosiID && 2 >= Math.floor((Math.random() * 10.0))) {
        return message.reply("Kalvinismus!");
    }
	
	//Poslat Rosiho dom znova
    if (message.author.id == config.RosiID && 3 >= Math.floor((Math.random() * 10.0))) {
        return message.channel.send("Age? <:rosy:378362108481634315>");
    }

    //Simple responses
    if(response[command]){
        return message.channel.send(response[command]);
    }

    //Zkusene
    if (command === "zkusene") {
        let member = message.mentions.members.first();
        if (member) {
            return message.channel.send("Zkušeně " + "<@" + member.id + ">" + "!");
        }
        else {
            return message.channel.send("Zkušeně!");
        }

    }

    //Nezkusene
    else if (command === "nezkusene") {
        let member = message.mentions.members.first();
        if (member) {
            return message.channel.send("Nezkušeně " + "<@" + member.id + ">" + "..");
        } else {
            return message.channel.send("Nezkušeně..");
        }
    }

    //Ohodnoti zkusenost
    else if (command === "zkusenost") {
        var answer = Math.floor((Math.random() * experience.length));
        return message.reply(experience[answer]);
    }

    //Vybere nahodne golf course
    else if (command === "course") {
        var answer = Math.floor((Math.random() * courses.length));
        return message.reply("Time for " + courses[answer] + "!");
    }

    //Vybere nahodne mapu do leftka
    else if (command === "l4map") {
        var answer = Math.floor((Math.random() * leftko.maps.length));
        return message.reply(leftko.maps[answer]);
    }

    //Vybere nahodnou Lauren
    else if (command === "lauren") {
        var answer = Math.floor((Math.random() * lauren.length));
        return message.reply(lauren[answer]);
    }
	
	//Vybere nahodneho Marjamakiho
    else if (command === "marjahehe") {
        var answer = Math.floor((Math.random() * marjamaki.length));
        return message.reply(marjamaki[answer]);
    }
	
	//Je to winnable ?!
    else if (command === "winnable?") {
        var answer = Math.floor((Math.random() * winnable.length));
        return message.channel.send(winnable[answer]);
    }
	
	//Vybere nahodnou frakci Endless
    else if (command === "endless") {
        var answer = Math.floor((Math.random() * endless.length));
		if(answer == 0){
			return message.reply(endless[answer] + ", you cancerous shit.");
		}
		else{
			return message.reply(endless[answer]);
		}
    }
	
	//Vybere nahodnej gaming prediction
    else if (command === "skill") {
        var answer = Math.floor((Math.random() * skill.length));
        return message.reply(" your gaming skill prediction for today is: " + skill[answer]);
    }
	
	//Posli weather forecast
	else if (command === "weather" && target !== ""){
		fetch('https://api.openweathermap.org/data/2.5/weather?q=' + target + '&appid=' + key)  
		.then(res => res.json())
		.then(data => {
			if(data.cod === '404'){
				return message.reply("No such place you fool");
			}
			else{
				var city = data.name;
				var description = data.weather[0].description;
				var celsius = Math.round(parseFloat(data.main.temp)-273.15);
				var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
				var wind = data.wind.speed;
				var wind_direction = windDirection(data.wind.deg);
				var pressure = data.main.pressure;
				var humidity = data.main.humidity;
				var sunrise = msToHMS(data.sys.sunrise);
				var sunset = msToHMS(data.sys.sunset);
				
				return message.reply("\n" + city + "\n" + description + "\n" + celsius + "°C" + "  or  " + fahrenheit + "°F" + "\n" + 
											"Wind: " + wind + " m/s,   " + wind_direction + "\n" + "Pressure: " + pressure + " hPa" +
											"\n" + "Humidity: " + humidity + " %\n" + "Sunrise: " + sunrise + " UTC\n" + "Sunset: " + sunset + " UTC");
			}
		})
		.catch(err => {
		});
	}

    //Jinak dostanou Forse
    else {
        return message.channel.send("<:forsenE:429605360773627904>");
    }
});


function msToHMS( ms ) {
    // Create a new JavaScript Date object based on the timestamp
	// multiplied by 1000 so that the argument is in milliseconds, not seconds.
	var date = new Date(ms*1000);
	// Hours part from the timestamp
	var hours = date.getHours();
	// Minutes part from the timestamp
	var minutes = "0" + date.getMinutes();
	// Seconds part from the timestamp
	var seconds = "0" + date.getSeconds();

	// Will display time in 10:30:23 format
	return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

function windDirection(degree){
    if (degree>337.5) {return 'N';}
	if (degree>292.5) {return 'NW';}	
    if(degree>247.5) {return 'W';}
    if(degree>202.5) {return 'SW';}
    if(degree>157.5) {return 'S';}
    if(degree>122.5) {return 'SE';}
    if(degree>67.5) {return 'E';}
    if(degree>22.5){return 'NE';}
    return 'N';
}