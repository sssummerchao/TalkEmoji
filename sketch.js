let emoji = [];
let speechRec;
let x;
let y;
let xpos;
let row = 0;
let col = 0;
let rtn;
let paragraphWidth = 5

let stepX = 100;
let stepY = 100;
let c1, c2;
let dictionary;
var canvas;

// function preload() {

//   fontBold = loadFont('IvyMode-Bold.ttf');
// }
// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);

// }

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.position(windowWidth/2-110,0);
  // if you want browser's native language: let lang = navigator.language || 'en-US'; 
  let lang = 'en-US';
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = false;

  speechRec.start(continuous, interim);


}


function draw() {
  // windowResized();
  background(0,0);
  // c1 = color(78, 101, 255);
  // c2 = color(146, 239, 253);

  // for (let y = 0; y < height; y++) {
  //     n = map(y, 0, height, 0, 1);
  //     let newc = lerpColor(c1, c2, n);
  //     stroke(newc);
  //     line(0, y, width, y);
  // }
  // push();
  // textSize(60);
  // textFont(fontBold);
  // noStroke();
  // fill(255);
  // text("Say something in emoji!", 30, 80);
  // pop();
  displayString();
  displayString(toggleSound);

}

// function keyPressed() {
//   emoji.push('\n')
// }


function gotSpeech() {
  if (speechRec.resultValue) {
    emoji.push('\n')
    // tokenize the string
    let tokens = speechRec.resultString.split(" ");
    console.log(speechRec);

    // go over each word in tokens and compare with your dictionary
    for (let i = 0; i < tokens.length; i++) {
      const word = tokens[i];

      // createP(tokens);
      if (word == "love" || word == "heart" || word == "like"|| word == "stan") {
        emoji.push("❤️");
      }
      if (word == "happy" || word == "yay" || word == "glad" || word == "joy"|| word == "EA") {
        let lists = ["😄", "😊"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "hello" || word == "hi" || word == "hi there" || word == "Sup" || word == "howdy" || word == "welcome" || word == "hey"|| word == "Hello"|| word == "Hi"|| word == "Hey") {
        let lists = ["🙌", "👋", "💁‍♀️"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "soon") {
        emoji.push("🔜");
      }
      if (word == "mood") {
        emoji.push("😩");
      }
      if (word == "eye"|| word == "eyes"|| word == "see"|| word == "look"|| word == "observe"|| word == "watch") {
        emoji.push("👁");
      }
      if (word == "foot"|| word == "feet") {
        emoji.push("🦶");
      }
      if (word == "leg"|| word == "legs") {
        emoji.push("🦵");
      }
      if (word == "rainbow"|| word == "gay"|| word == "LGBT"|| word == "LGBTQ"|| word == "LGBTQI"|| word == "LGBTQIA"|| word == "queer"|| word == "bi"|| word == "bisexual"|| word == "lesbian"|| word == "ally"|| word == "queer"|| word == "transgender"|| word == "asexual"|| word == "drag"|| word == "homosexual"|| word == "pansexual"|| word == "pride") {
        emoji.push("🏳️‍🌈");
      }
      if (word == "taiwan"|| word == "Taiwan") {
        emoji.push("🇹🇼");
      }
      if (word == "Japan") {
        emoji.push("🇯🇵");
      }
      if (word == "Andorra") {
        emoji.push("🇦🇩");
      }
      if (word == "Emirates") {
        emoji.push("🇦🇪");
      }
      if (word == "Afghanistan") {
        emoji.push("🇦🇫");
      }
      if (word == "Antigua"|| word == "Barbuda") {
        emoji.push("🇦🇬");
      }
      if (word == "Anguilla") {
        emoji.push("🇦🇮");
      }
      if (word == "Albania") {
        emoji.push("🇦🇱");
      }
      if (word == "Angola") {
        emoji.push("🇦🇴");
      }
      if (word == "Antarctica") {
        emoji.push("🇦🇶");
      }
      if (word == "Argentina") {
        emoji.push("🇦🇷");
      }
      if (word == "Austria") {
        emoji.push("🇦🇹");
      }
      if (word == "Australia") {
        emoji.push("🇦🇺");
      }
      if (word == "Aruba") {
        emoji.push("🇦🇼");
      }
      if (word == "Azerbaijan") {
        emoji.push("🇦🇿");
      }
      if (word == "Barbados") {
        emoji.push("🇧🇧");
      }
      if (word == "Bosnia") {
        emoji.push("🇧🇦");
      }
      if (word == "Bangladesh") {
        emoji.push("🇧🇩");
      }
      if (word == "Belgium") {
        emoji.push("🇧🇪");
      }
      if (word == "Bulgaria") {
        emoji.push("🇧🇬");
      }
      if (word == "Burkina") {
        emoji.push("🇧🇫");
      }
      if (word == "Bahrain") {
        emoji.push("🇧🇭");
      }
      if (word == "Burundi") {
        emoji.push("🇧🇮");
      }
      if (word == "Benin") {
        emoji.push("🇧🇯");
      }
      if (word == "Bolivia") {
        emoji.push("🇧🇴");
      }
      if (word == "Brazil") {
        emoji.push("🇧🇷");
      }
      if (word == "Bahamas") {
        emoji.push("🇧🇸");
      }
      if (word == "Bouvet") {
        emoji.push("🇧🇻");
      }
      if (word == "Botswana") {
        emoji.push("🇧🇼");
      }
      if (word == "Belarus") {
        emoji.push("🇧🇾");
      }
      if (word == "Canada") {
        emoji.push("🇨🇦");
      }
      if (word == "Congo") {
        emoji.push("🇨🇬");
      }
      if (word == "Switzerland") {
        emoji.push("🇨🇭");
      }
      if (word == "Chile") {
        emoji.push("🇨🇱");
      }
      if (word == "China") {
        emoji.push("🇨🇳");
      }
      if (word == "Colombia") {
        emoji.push("🇨🇴");
      }
      if (word == "Costa") {
        emoji.push("🇨🇷");
      }
      if (word == "Cuba") {
        emoji.push("🇨🇺");
      }
      if (word == "Czech") {
        emoji.push("🇨🇿");
      }
      if (word == "Germany") {
        emoji.push("🇩🇪");
      }
      if (word == "Denmark") {
        emoji.push("🇩🇰");
      }
      if (word == "Dominica") {
        emoji.push("🇩🇲");
      }
      if (word == "Ecuador") {
        emoji.push("🇪🇨");
      }
      if (word == "Egypt") {
        emoji.push("🇪🇬");
      }
      if (word == "Spain") {
        emoji.push("🇪🇸");
      }
      if (word == "France") {
        emoji.push("🇫🇷");
      }
      if (word == "UK") {
        emoji.push("🇬🇧");
      }
      if (word == "Greece") {
        emoji.push("🇬🇷");
      }
      if (word == "Guatemala") {
        emoji.push("🇬🇹");
      }
      if (word == "Hong") {
        emoji.push("🇭🇰");
      }
      if (word == "Croatia") {
        emoji.push("🇭🇷");
      }
      if (word == "Indonesia") {
        emoji.push("🇮🇩");
      }
      if (word == "Ireland") {
        emoji.push("🇮🇪");
      }
      if (word == "Israel") {
        emoji.push("🇮🇱");
      }
      if (word == "India") {
        emoji.push("🇮🇳");
      }
      if (word == "Iraq") {
        emoji.push("🇮🇶");
      }
      if (word == "Iran") {
        emoji.push("🇮🇷");
      }
      if (word == "Italy") {
        emoji.push("🇮🇹");
      }
      if (word == "Jamaica") {
        emoji.push("🇯🇲");
      }
      if (word == "Kenya") {
        emoji.push("🇰🇪");
      }
      if (word == "Cambodia") {
        emoji.push("🇰🇭");
      }
      if (word == "Korea") {
        emoji.push("🇰🇷");
      }
      if (word == "Lao") {
        emoji.push("🇱🇦");
      }
      if (word == "Myanmar") {
        emoji.push("🇲🇲");
      }
      if (word == "Mongolia") {
        emoji.push("🇲🇳");
      }
      if (word == "Macao") {
        emoji.push("🇲🇴");
      }
      if (word == "Mexico") {
        emoji.push("🇲🇽");
      }
      if (word == "Malaysia") {
        emoji.push("🇲🇾");
      }
      if (word == "Nigeria") {
        emoji.push("🇳🇬");
      }
      if (word == "Netherlands") {
        emoji.push("🇳🇱");
      }
      if (word == "Norway") {
        emoji.push("🇳🇴");
      }
      if (word == "Zealand") {
        emoji.push("🇳🇿");
      }
      if (word == "Peru") {
        emoji.push("🇵🇪");
      }
      if (word == "Philippines") {
        emoji.push("🇵🇭");
      }
      if (word == "Pakistan") {
        emoji.push("🇵🇰");
      }
      if (word == "Poland") {
        emoji.push("🇵🇱");
      }
      if (word == "Puerto") {
        emoji.push("🇵🇷");
      }
      if (word == "Portugal") {
        emoji.push("🇵🇹");
      }
      if (word == "Qatar") {
        emoji.push("🇶🇦");
      }
      if (word == "Romania") {
        emoji.push("🇷🇴");
      }
      if (word == "Russia") {
        emoji.push("🇷🇺");
      }
      if (word == "Saudi") {
        emoji.push("🇸🇦");
      }
      if (word == "Sweden") {
        emoji.push("🇸🇪");
      }
      if (word == "Singapore") {
        emoji.push("🇸🇬");
      }
      if (word == "Slovenia") {
        emoji.push("🇸🇮");
      }
      if (word == "Slovakia") {
        emoji.push("🇸🇰");
      }
      if (word == "Thailand") {
        emoji.push("🇹🇭");
      }
      if (word == "Turkey") {
        emoji.push("🇹🇷");
      }
      if (word == "Ukraine") {
        emoji.push("🇺🇦");
      }
      if (word == "States"|| word == "America"|| word == "Americans"|| word == "USA") {
        emoji.push("🇺🇸");
      }
      if (word == "Vietnam") {
        emoji.push("🇻🇳");
      }

      if (word == "hungry"|| word == "hangry") {
        emoji.push("🤤");
      }
      if (word == "arm"|| word == "arms") {
        emoji.push("💪");
      }
      if (word == "dance"|| word == "dances"|| word == "danced"|| word == "sway"|| word == "disco"|| word == "bop"|| word == "whirl"|| word == "twirl") {
        emoji.push("💃");
      }
      if (word == "face"|| word == "faces"|| word == "skin") {
        emoji.push("👩‍🦲");
      }
      if (word == "face"|| word == "faces"|| word == "skin") {
        emoji.push("👩‍🦲");
      }
      if (word == "chat"|| word == "chats"|| word == "text"|| word == "texts"|| word == "texting"|| word == "chatting"|| word == "message"|| word == "messages"|| word == "messaging"|| word == "communication"|| word == "communications"|| word == "conversation"| word == "conversations") {
        emoji.push("💬");
      }
      if (word == "speak"|| word == "speaks"|| word == "talk"|| word == "talks"|| word == "talked"|| word == "spoke"|| word == "tell"|| word == "tells"|| word == "voice"|| word == "voices"|| word == "speaking"|| word == "talking"|| word == "telling"|| word == "express"|| word == "expressing"|| word == "expressed"|| word == "communicate"|| word == "communicates"|| word == "communicated"|| word == "vocalize"|| word == "vocalized") {
        emoji.push("🗣");
      }
      if (word == "walk"|| word == "walks"|| word == "walked"|| word == "walking"|| word == "stroll"|| word == "strolls"|| word == "strolled"|| word == "strolling"|| word == "stride") {
        emoji.push("🚶‍♀️");
      }
      if (word == "run"|| word == "ran"|| word == "running"|| word == "sprinting"|| word == "sprint"|| word == "sprints"|| word == "rush"|| word == "race"|| word == "speed"|| word == "hurry"|| word == "jog"|| word == "jogging"|| word == "dash") {
        emoji.push("🏃‍♀️");
      }
      if (word == "tooth"|| word == "teeth"|| word == "fang"|| word == "fangs"|| word == "incisors"|| word == "canines"|| word == "premolars"|| word == "molars") {
        emoji.push("🦷");
      }
      if (word == "brain"|| word == "IQ"|| word == "smart"|| word == "brains"|| word == "clever"|| word == "intelligent"|| word == "brilliant"|| word == "wise"|| word == "shrewd"|| word == "agile") {
        emoji.push("🧠");
      }
      if (word == "ear"|| word == "ears"|| word == "hear"|| word == "listen"|| word == "heard"|| word == "hearing") {
        emoji.push("👂");
      }
      if (word == "smell"|| word == "nose"|| word == "noses"|| word == "scent"|| word == "inhale"|| word == "breathe"|| word == "sniff") {
        emoji.push("👃");
      }
      if (word == "pray"|| word == "Pray"|| word == "please"|| word == "Please") {
        emoji.push("🙏");
      }  
      if (word == "funny"|| word == "Funny"|| word == "laugh"|| word == "Laugh"|| word == "Haha"|| word == "haha") {
        let lists = ["🤣", "😂", "😆"];
        let list = random(lists);
        emoji.push(list);
      }   
      if (word == "sick"|| word == "Sick"|| word == "ill"|| word == "Ill"|| word == "haha") {
        let lists = ["🤧", "😷", "🤒"];
        let list = random(lists);
        emoji.push(list);
      } 
      if (word == "puke"|| word == "Puke"|| word == "ew"|| word == "Ew"|| word == "nauseous"|| word == "Nauseous"|| word == "vomit"|| word == "Vomit"|| word == "barf"|| word == "Barf"|| word == "disgusting"|| word == "Disgusting"|| word == "gross"|| word == "nasty"|| word == "dirty"|| word == "filthy"|| word == "smelly"|| word == "gruesome"|| word == "obnoxious"|| word == "yucky"|| word == "shabby"|| word == "stink"|| word == "reek"|| word == "stinky") {
        let lists = ["🤢", "🤮"];
        let list = random(lists);
        emoji.push(list);
      } 
      if (word == "dizzy"|| word == "faint"|| word == "coma"|| word == "collapse"|| word == "blackout"|| word == "weak"|| word == "giddy") {
        emoji.push("😵");       
      } 
      if (word == "peace"|| word == "Peace"|| word == "cool"|| word == "Cool") {
        emoji.push("✌️");       
      } 

      if (word == "corona" || word == "covid") {
        emoji.push("🦠");
      }
      if (word == "phone" || word == "iphone") {
        emoji.push("📱");
      }
      if (word == "laptop" || word == "macbook" || word == "computer"|| word == "mac") {
        emoji.push("💻");
      }
      if (word == "car" || word == "drive" ) {
        emoji.push("🚗");
      }
      if (word == "dog" || word == "puppy" || word == "pup"||word == "Dog" || word == "Puppy" || word == "Pup"|| word == "doggy"|| word == "Doggy"|| word == "doggo"|| word == "Doggo") {
        let lists = ["🐶", "🦮", "🐩"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "cat" || word == "Cat" || word == "kitty"||word == "Kitty" || word == "kitten" || word == "Kitten"|| word == "puss"|| word == "Pussy"|| word == "pussy"|| word == "Puss") {
        let lists = ["🐱", "🐈", "😺"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "bear" || word == "Bear" || word == "bruin"||word == "Bruin") {
        emoji.push("🐻");
      }   
      if (word == "panda" || word == "Panda") {
        emoji.push("🐼");
      }  
      if (word == "koala" || word == "Koala") {
        emoji.push("🐨");
      }  
      if (word == "soccer" || word == "soccers") {
        emoji.push("⚽️");
      } 
      if (word == "basketball" || word == "basketballs"|| word == "baller"|| word == "ballers") {
        emoji.push("🏀");
      } 
      if (word == "football" || word == "footballs") {
        emoji.push("🏈");
      }  
      if (word == "baseball" || word == "baseballs") {
        emoji.push("⚾️");
      }     
      if (word == "tennis") {
        emoji.push("🎾");
      }  
      if (word == "volleyball" || word == "volleyballs") {
        emoji.push("🏐");
      } 
      if (word == "ping"|| word == "pong") {
        emoji.push("🏓");
      } 
      if (word == "badminton"|| word == "badmintons") {
        emoji.push("🏸");
      } 
      if (word == "hockey"|| word == "hockeys") {
        emoji.push("🏒");
      } 
      if (word == "lacrosse") {
        emoji.push("🥍");
      } 
      if (word == "fishing") {
        emoji.push("🎣");
      } 
      if (word == "boxing") {
        emoji.push("🥊");
      } 
      if (word == "skateboard"|| word == "skateboards"|| word == "skater"|| word == "skaters") {
        emoji.push("🛹");
      } 
      if (word == "ski"|| word == "skiing") {
        emoji.push("⛷");
      }
      if (word == "skate"|| word == "skating") {
        emoji.push("⛸");
      } 
      if (word == "lift"|| word == "lifting"|| word == "weightlifting"|| word == "powerlifting"|| word == "workout") {
        emoji.push("🏋️‍♀️");
      } 
      if (word == "snowboard"|| word == "snowboarding") {
        emoji.push("🏂");
      } 
      if (word == "swim"|| word == "swims"|| word == "swimming") {
        emoji.push("🏊‍♀️");
      } 
      if (word == "golf"|| word == "golfing") {
        emoji.push("⛳️");
      } 
      if (word == "yoga"|| word == "fitness") {
        emoji.push("🧘‍♀️");
      } 
      if (word == "biking") {
        emoji.push("🚴‍♀️");
      } 
      if (word == "saxophone"|| word == "jazz") {
        emoji.push("🎷");
      } 
      if (word == "violin"|| word == "violins") {
        emoji.push("🎻");
      } 
      if (word == "guitar"|| word == "guitars"|| word == "rock") {
        emoji.push("🎸");
      } 
      if (word == "game"|| word == "games"|| word == "gaming"|| word == "PS4") {
        emoji.push("🎮");
      } 
      if (word == "graduation"|| word == "graduations"|| word == "graduate"|| word == "graduated") {
        emoji.push("🎓");
      } 
      if (word == "job"|| word == "jobs"|| word == "occupation"|| word == "occupations"|| word == "career"|| word == "careers"|| word == "profession"|| word == "professions"|| word == "work"|| word == "works"|| word == "working"|| word == "business"|| word == "businesses"|| word == "office"|| word == "offices") {
        emoji.push("💼");
      } 
      if (word == "paint"|| word == "painting"|| word == "art"|| word == "arts"|| word == "draw"|| word == "draws"|| word == "drawing"|| word == "paints"|| word == "artist"|| word == "artists") {
        emoji.push("🎨");
      } 
      if (word == "film"|| word == "films"|| word == "filming"|| word == "movie"|| word == "movies") {
        emoji.push("🎬");
      }
      if (word == "music"|| word == "tune"|| word == "tunes") {
        emoji.push("🎼");
      }
      if (word == "piano"|| word == "pianos"|| word == "keyboard") {
        emoji.push("🎹");
      }
      if (word == "drum"|| word == "drums"|| word == "drumming") {
        emoji.push("🥁");
      }
      if (word == "surf"|| word == "surfs"|| word == "surfing") {
        emoji.push("🏄‍♂️");
      }
      if (word == "climb"|| word == "climbs"|| word == "climbing") {
        emoji.push("🧗");
      } 
      if (word == "tiger" || word == "Tiger"|| word == "lynx"|| word == "Lynx"|| word == "Jaguar"|| word == "jaguar"|| word == "leopard"|| word == "Leopard") {
        emoji.push("🐯");
      }     
      if (word == "lion" || word == "Lion") {
        emoji.push("🦁");
      }           
      if (word == "cow" || word == "Cow"|| word == "cattle"|| word == "Cattle"|| word == "bull"|| word == "Bull"|| word == "ox"|| word == "Ox") {
        let lists = ["🐮", "🐄", "🐃", "🐂"];
        let list = random(lists);
        emoji.push(list);
      }  
      if (word == "pig" || word == "Pig"|| word == "piggy"|| word == "Piggy"|| word == "swine"|| word == "Swine"|| word == "boar"|| word == "Boar"|| word == "hog"|| word == "Hog") {
        let lists = ["🐷", "🐽", "🐖"];
        let list = random(lists);
        emoji.push(list);
      }        
      if (word == "monkey" || word == "Monkey"|| word == "chimpanzee"|| word == "Chimpanzee"|| word == "gorilla"|| word == "Gorilla") {
        let lists = ["🐵", "🐒", "🙉"];
        let list = random(lists);
        emoji.push(list);
      }  
      if (word == "chicken" || word == "Chicken"|| word == "chick"|| word == "Chick"|| word == "cock"|| word == "Cock"|| word == "duck"|| word == "Duck") {
        let lists = ["🐔", "🐤", "🐥", "🐓"];
        let list = random(lists);
        emoji.push(list);
      }      
      if (word == "bird" || word == "Bird"|| word == "birdie"|| word == "Birdie") {
        let lists = ["🦜", "🦅", "🦢", "🕊"];
        let list = random(lists);
        emoji.push(list);
      }  
      if (word == "bug" || word == "Bug"|| word == "insect"|| word == "Insect"|| word == "pest"|| word == "Pest") {
        let lists = ["🐛", "🐞", "🦟", "🐜"];
        let list = random(lists);
        emoji.push(list);
      }   
      if (word == "spider" || word == "Spider") {
        let lists = ["🕷", "🕸"];
        let list = random(lists);
        emoji.push(list);
      }   
      if (word == "snake" || word == "Snake"||word == "viper" || word == "Viper") {
        emoji.push("🐍");
      }  
      if (word == "spider" || word == "Spider") {
        let lists = ["🕷", "🕸"];
        let list = random(lists);
        emoji.push(list)
      }       
      if (word == "bike") {
        emoji.push("🚲");
      }
      if (word == "truck" || word == "van") {
        emoji.push("🚐");
      }
      if (word == "hump" || word == "camel") {
        emoji.push("🐪");
      }
      if (word == "break" || word == "breaks"|| word == "broke") {
        emoji.push("🔨");
      }
      if (word == "mr" || word == "Mr"|| word == "mister") {
        emoji.push("🤵");
      }
      if (word == "ms" || word == "Ms"|| word == "mrs"|| word == "Mrs") {
        emoji.push("💁‍♀️");
      }
      if (word == "genital" || word == "genitals"|| word == "porn"|| word == "porns") {
        emoji.push("🔞");
      }

      if (word == "lick" || word == "suck"|| word == "horny") {
        emoji.push("👅");
      }
      if (word == "wet" || word == "hard"|| word == "drool"|| word == "masturbate"|| word == "orgasm"|| word == "cum"|| word == " ejaculation") {
        emoji.push("💦");
      }
      if (word == "kiss" || word == "Kiss"|| word == "peck"|| word == "smooch"|| word == "snog"|| word == "flirt"|| word == "sex") {
        emoji.push("💋");
      }
      if (word == "baby" || word == "babe"|| word == "bae"|| word == "sweetheart"|| word == "boo"|| word == "b"|| word == "B") {
        let lists = ["🥺", "🥰", "👶"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "friend" || word == "friends"|| word == "mate"|| word == "mates"|| word == "partner"|| word == "partners"|| word == "fellow"|| word == "fellows"|| word == "buddy"|| word == "buddies"|| word == "guys"|| word == "pal"|| word == "cousin"|| word == "consins"|| word == "sidekick"|| word == "roommate"|| word == "roommates"|| word == "colleague"|| word == "colleagues"|| word == "companion"|| word == "companions"|| word == "neighbor"|| word == "neighbors"|| word == "pals"|| word == "peeps"|| word == "folks"|| word == "gang"|| word == "gangs"|| word == "crew"|| word == "squad"|| word == "y'all"|| word == "yall") {
        let lists = ["👭", "🧑‍🤝‍🧑"];
        let list = random(lists);
        emoji.push(list);
      }

      if (word == "amigo" || word == "amigos"|| word == "bestie"|| word == "fam"|| word == "dude"|| word == "homeboy"|| word == "homeboys"|| word == "homie"|| word == "homies"|| word == "BFF") {
        emoji.push("👯");
      }

      if (word == "girls" || word == "girl"|| word == "sisters"|| word == "sister"|| word == "bitch"|| word == "bitches"|| word == "homegirls"|| word == "homegirl"|| word == "girlfriends"|| word == "sis"|| word == "sista") {
        let lists = ["👯‍♀️", "👩", "👭"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "boy" || word == "boys"|| word == "fella"|| word == "fellas"|| word == "dudes"|| word == "guy"|| word == "bro"|| word == "bros"|| word == "bud") {
        let lists = ["👯‍♂️", "👨", "👬"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "vagina" || word == "fanny"|| word == "vigina" || word == "vulva") {
        emoji.push("🌮");
      }
      if (word == "finger" || word == "fingering"|| word == "point"|| word == "fingers") {
        let lists = ["👉", "☝️"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "touch" || word == "grab"|| word == "feel"|| word == "stroke"|| word == "rub"|| word == "hand") {
        let lists = ["🖐", "🤚"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "dead" || word == "death"|| word == "shade"|| word == "shady"|| word == "badass") {
        let lists = ["💀", "☠️"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "fire" || word == "lit"|| word == "litty") {
        emoji.push("🔥");
      }
      if (word == "emoji" || word == "emojis") {
        emoji.push("😀");
      }

      if (word == "spicy" || word == "hot"|| word == "heat"|| word == "steaming"|| word == "pipping"|| word == "hottie"|| word == "sexy"|| word == "smoking"|| word == "banging"|| word == "foxy") {
        let lists = ["🌶", "🔥", "🥵"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "beautiful" || word == "attractive"|| word == "pretty"|| word == "lovely"|| word == "charming"|| word == "gorgeous"|| word == "stunning"|| word == "enchanting"|| word == "appealing"|| word == "adorable"|| word == "elegant"|| word == "radiant"|| word == "beauty"|| word == "dreamy"|| word == "fabulous"|| word == "glorious"|| word == "slay"|| word == "snatched") {
        let lists = ["🥰", "💃", "🤩"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "hug" || word == "cuddle"|| word == "embrace"|| word == "snuggle"|| word == "hold"|| word == "cute") {
        emoji.push("🤗");
      }
      if (word == "bone" || word == "cuddle"|| word == "embrace"|| word == "snuggle"|| word == "hold") {
        emoji.push("🦴");
      }
      if (word == "butt" || word == "peach"|| word == "peaches"|| word == "apricot"|| word == "apricots"|| word == "nectarine"|| word == "nectarines"|| word == "buttocks"|| word == "booty"|| word == "ass"|| word == "arse"|| word == "bum"|| word == "tush"|| word == "rump"|| word == "derriere") {
        emoji.push("🍑");
      }
      if (word == "penis" || word == "dick"|| word == "eggplant"|| word == "joystick"|| word == "dong"|| word == "wiener"|| word == "weenie"|| word == "pecker") {
        emoji.push("🍆");
      }
      if (word == "bus") {
        emoji.push("🚌");
      }
      if (word == "salty"|| word == "bitter") {
        emoji.push("😠");
      }

      if (word == "God"|| word == "god"|| word == "angel"|| word == "Angel"|| word == "goddess"|| word == "Goddess"|| word == "deity"|| word == "Deity"|| word == "divine"|| word == "Divine"|| word == "holy"|| word == "Holy"|| word == "sacred"|| word == "Sacred"|| word == "bless"|| word == "Bless"|| word == "blessed"|| word == "Blessed"|| word == "religious"|| word == "Religious"|| word == "saint"|| word == "Saint"|| word == "spiritual"|| word == "Spiritual") {
        let lists = ["😇", "👼", "🔱"];
        let list = random(lists);
        emoji.push(list);
      }

      if (word == "church"|| word == "Church") {
        let lists = ["⛪️", "💒"];
        let list = random(lists);
        emoji.push(list);
      }

      if (word == "train") {
        let lists = ["🚂", "🚆", "🚅", "🚆"];
        let list = random(lists);
        emoji.push(list);
      }
      // if (word == "plane" || word == "fly") {
      //   let lists = ["✈️", "🛩"];
      //   let list = random(lists);
      //   emoji.push(list);
      // }

      if (word == "plane" || word == "fly") {
        let lists = ["✈️", "🛩"];
        let list = random(lists);
        emoji.push(list);
      }

      if (word == "one" || word == "1") {
        emoji.push("1️⃣");
      }
      if (word == "two" || word == "2" || word == "twenty") {
        emoji.push("2️⃣");
      }
      if (word == "three" || word == "3" || word == "thirty") {
        emoji.push("3️⃣");
      }
      if (word == "four" || word == "4" || word == "fourty") {
        emoji.push("4️⃣");
      }
      if (word == "five" || word == "5" || word == "fifty") {
        emoji.push("5️⃣");
      }
      if (word == "six" || word == "6" || word == "sixty") {
        emoji.push("6️⃣");
      }
      if (word == "seven" || word == "7" || word == "seventy") {
        emoji.push("7️⃣");
      }
      if (word == "eight" || word == "8" || word == "eighty") {
        emoji.push("8️⃣");
      }
      if (word == "nine" || word == "9" || word == "ninety") {
        emoji.push("9️⃣");
      }
      if (word == "ten" || word == "10") {
        emoji.push("🔟");
      }
      if (word == "eleven" || word == "11") {
        emoji.push("1️⃣1️⃣");
      }
      if (word == "cap" || word == "hat"|| word == "hats"|| word == "caps") {
        emoji.push("🧢");
      }
      if (word == "fine" || word == "nice" || word == "well" || word == "okay"|| word == "bet") {
        let lists = ["👌", "👍", "🙌"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "good" || word == "great" || word == "excellent" || word == "honest" || word == "amazing"|| word == "magnificent"|| word == "marvelous"|| word == "spectacular"|| word == "wonderful") {
        let lists = ["🌟", "🎉"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "shocking" || word == "wow"|| word == "breathtaking"|| word == "shook"|| word == "shooketh"|| word == "gosh"|| word == "damn") {
        let lists = ["😧", "😦", "🤯"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "difficult" || word == "hard"|| word == "tough"|| word == "painful"|| word == "tiring"|| word == "demanding"|| word == "challenging"|| word == "troublesome"|| word == "ugly") {
        let lists = ["😖", "😣", "😫"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "sad" || word == "upset" || word == "depress" || word == "depressing" || word == "sorry" || word == "heartbroken" || word == "tear" || word == "cry" || word == "unpleasant") {
        let lists = ["😭", "😢", "😔", "😰", "😿"];
        let list = random(lists);
        emoji.push(list);
      }

      if (word == "bad" || word == "poor"|| word == "awful"|| word == "terrible"|| word == "pathetic"|| word == "worthless"|| word == "miserable"|| word == "dreadful"|| word == "junky"|| word == "sucks"|| word == "wicked") {
        let lists = ["👹", "☹️","👎"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "poop" || word == "nonsense"|| word == "rubbish"|| word == "gibberish" ||  word == "shit"|| word == "crap"|| word == "shite"|| word == "poo"|| word == "bullshit"|| word == "turd") {
        emoji.push("💩");
      }

      if (word == "garbage") {
        emoji.push("🗑️");
      }

      if (word == "breakfast"|| word == "buffet") {
        emoji.push("🍳");
      }
      if (word == "lunch"|| word == "meal"|| word == "meals") {
        emoji.push("🍔");
      }
      if (word == "dinner") {
        emoji.push("🍷");
      }
      if (word == "hotdog") {
        emoji.push("🌭");
      }
      if (word == "burger"|| word == "burgers") {
        emoji.push("🍔");
      }
      if (word == "fries") {
        emoji.push("🍟");
      }
      if (word == "pizza") {
        emoji.push("🍕");
      }
      if (word == "bowl") {
        emoji.push("🥙");
      }
      if (word == "burrito"|| word == "wraps"|| word == "wrap") {
        emoji.push("🌯");
      }
      if (word == "bacon"|| word == "bacons") {
        emoji.push("🥓");
      }
      if (word == "apple"|| word == "apples") {
        emoji.push("🍎");
      }
      if (word == "pear"|| word == "pears") {
        emoji.push("🍐");
      }
      if (word == "oranges"|| word == "orange"|| word == "tangerine"|| word == "tangerines"|| word == "citrus"|| word == "mandarin"|| word == "mandarins"|| word == "clementine"|| word == "clementines") {
        emoji.push("🍊");
      }
      if (word == "lemon"|| word == "lemons"|| word == "citron") {
        emoji.push("🍋");
      }
      if (word == "banana"|| word == "bananas") {
        emoji.push("🍌");
      }
      if (word == "watermelon"|| word == "watermelons") {
        emoji.push("🍉");
      }
      if (word == "grape"|| word == "grapes"|| word == "berries"|| word == "berry") {
        emoji.push("🍇");
      }
      if (word == "strawberry"|| word == "strawberries") {
        emoji.push("🍓");
      }
      if (word == "cherry"|| word == "cherries") {
        emoji.push("🍒");
      }
      if (word == "mango"|| word == "mangoes") {
        emoji.push("🥭");
      }
      if (word == "pineapple"|| word == "pineapples") {
        emoji.push("🍍");
      }
      if (word == "coconut"|| word == "coconuts") {
        emoji.push("🥥");
      }
      if (word == "kiwi"|| word == "kiwis") {
        emoji.push("🥝");
      }
      if (word == "tomato"|| word == "tomatoes") {
        emoji.push("🍅");
      }
      if (word == "avocado"|| word == "avocadoes") {
        emoji.push("🥑");
      }
      if (word == "broccoli"|| word == "broccolis") {
        emoji.push("🥦");
      }
      if (word == "carrots"|| word == "carrot") {
        emoji.push("🥕");
      }

      if (word == "garlic"|| word == "garlics") {
        emoji.push("🧄");
      }
      if (word == "bagel"|| word == "bagels") {
        emoji.push("🥯");
      }
      if (word == "toast"|| word == "toasts") {
        emoji.push("🍞");
      }
      if (word == "cheese"|| word == "cheeses"|| word == "cheddar") {
        emoji.push("🧀");
      }

      if (word == "bread"|| word == "breads"|| word == "baguette"|| word == "baguettes") {
        emoji.push("🥖");
      }
      if (word == "yam"|| word == "yams") {
        emoji.push("🍠");
      }
      if (word == "egg"|| word == "eggs") {
        emoji.push("🍳");
      }
      if (word == "onion"|| word == "onions"|| word == "shallot"|| word == "shallots") {
        emoji.push("🧅");
      }
      if (word == "potato"|| word == "potatos"|| word == "root"|| word == "roots") {
        emoji.push("🥔");
      }
      if (word == "cabbage"|| word == "cabbages"|| word == "lettuces"|| word == "lettuce"|| word == "leaf"|| word == "leaves"|| word == "kale"|| word == "kales"|| word == "spinach"|| word == "spinaches"|| word == "vegetables"|| word == "vegetable") {
        emoji.push("🥬");
      }
      if (word == "cucumber"|| word == "cucumbers") {
        emoji.push("🥒");
      }
      if (word == "corn"|| word == "corns"|| word == "sweetcorns"|| word == "sweetcorn"|| word == "cob"|| word == "cobs") {
        emoji.push("🌽");
      }
      if (word == "melon"|| word == "melons"|| word == "honeydew"|| word == "honeydews"|| word == "cantaloupe"|| word == "cantaloupes") {
        emoji.push("🍈");
      }
      if (word == "steak"|| word == "steaks"|| word == "meat") {
        emoji.push("🥩");
      }
      if (word == "taco"|| word == "tacos"|| word == "quesadilla"|| word == "salsa"|| word == "chili"|| word == "guacamole") {
        emoji.push("🌮");
      }
      if (word == "sandwich"|| word == "sandwichs"|| word == "sub"|| word == "club") {
        emoji.push("🥪");
      }
      if (word == "salad"|| word == "salads"|| word == "greens"|| word == "coleslaw"|| word == "lettuce") {
        emoji.push("🥗");
      }
      if (word == "dessert"|| word == "desserts"|| word == "cake"|| word == "cakes"|| word == "cupcakes"|| word == "cupcake"|| word == "sweet") {
        emoji.push("🧁🍰");
      }
      if (word == "candy"|| word == "candies"|| word == "lolly"|| word == "sugar") {
        emoji.push("🍬");
      }
      if (word == "chocolate"|| word == "cocoa"|| word == "fudge") {
        emoji.push("🍫");
      }
      if (word == "pie"|| word == "pies"|| word == "pastry"|| word == "pastries"|| word == "tart"|| word == "tarts") {
        emoji.push("🥧");
      }
      if (word == "donut"|| word == "donuts"|| word == "doughnut"|| word == "doughnuts") {
        emoji.push("🍩");
      }
      if (word == "cookie"|| word == "cookies"|| word == "biscuit"|| word == "biscuits"|| word == "cracker"|| word == "crackers") {
        emoji.push("🍪");
      }
      if (word == "rice"|| word == "grain"|| word == "grains") {
        emoji.push("🍚");
      }
      if (word == "milk"|| word == "skim") {
        emoji.push("🥛");
      }
      if (word == "tea"|| word == "gossip"|| word == "cha"|| word == "teas"|| word == "cup"|| word == "cups"|| word == "cuppa") {
        emoji.push("🍵");       
      } 
      if (word == "beer"|| word == "beers"|| word == "ale"|| word == "pint"|| word == "brewski"|| word == "brew") {
        emoji.push("🍺");
      }
      if (word == "cheers"|| word == "champagne") {
        emoji.push("🥂");
      }
      if (word == "wine"|| word == "burgundy") {
        emoji.push("🍷");
      }
      if (word == "rum"|| word == "whiskey"|| word == "scotch"|| word == "bourbon"|| word == "tequila"|| word == "brandy") {
        emoji.push("🥃");
      }
      if (word == "martini"|| word == "vodka"|| word == "gin") {
        emoji.push("🍸");
      }
      if (word == "cocktail"|| word == "cocktails"|| word == "booze"|| word == "liquor"|| word == "liquid"|| word == "alcohol"|| word == "liqueur") {
        emoji.push("🍹");
      }
      if (word == "drink"|| word == "beverage"|| word == "beverages"|| word == "drinks") {
        emoji.push("🥤");
      }
      
      if (word == "milk") {
        emoji.push("🥛");
      }
      if (word == "cream") {
        emoji.push("🍦");
      }
      if (word == "chopsticks"|| word == "chopstick") {
        emoji.push("🥢");
      }
      if (word == "pasta"|| word == "gnocchi"|| word == "linguine"|| word == "macaroni"|| word == "spaghetti"|| word == "ravioli"|| word == "fettuccini"|| word == "lasagna") {
        emoji.push("🍝");
      }
      if (word == "ramen"|| word == "noodles"|| word == "noodle"|| word == "udon") {
        emoji.push("🍜");
      }
      if (word == "curry"|| word == "masala") {
        emoji.push("🍛");
      } 
      if (word == "sushi"|| word == "sashimi"|| word == "nigiri") {
        emoji.push("🍣");
      } 
      if (word == "bento"|| word == "lunchbox") {
        emoji.push("🍱");
      } 
      if (word == "dumpling"|| word == "dumplings"|| word == "gyoza"|| word == "potsticker"|| word == "potstickers"|| word == "wonton"|| word == "wontons") {
        emoji.push("🥟");
      } 
      if (word == "shrimp"|| word == "shrimps") {
        emoji.push("🍤");
      } 
      if (word == "coffee"|| word == "caffeine"|| word == "espresso"|| word == "café"|| word == "grind"|| word == "Starbucks"|| word == "starbucks") {
        emoji.push("☕️");
      }
      if (word == "food"|| word == "eat"|| word == "eats"|| word == "ate"|| word == "feed") {
        let lists = ["🍽", "🍴"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "morning"|| word == "day"|| word == "dawn") {
        emoji.push("🏞");
      }

      if (word == "afternoon"|| word == "sunrise"|| word == "midday"|| word == "teatime") {
        let lists = ["🌄", "🌆"];
        let list = random(lists);
        emoji.push(list);
      }

      if (word == "evening"|| word == "dusk"|| word == "night"|| word == "sunset"|| word == "eve") {
        let lists = ["🌠", "🌃", "🌉"];
        let list = random(lists);
        emoji.push(list);
      }

      if (word == "bloody"|| word == "f***"|| word == "bollocks"|| word == "prick"|| word == "twat"|| word == "dickhead"|| word == "bastard"|| word == "motherfucker"|| word == "mofo"|| word == "wanker"|| word == "mofo"|| word == "cunt"|| word == "eff"|| word == "effing"|| word == "piss"|| word == "whore"|| word == "slut"|| word == "profanity"|| word == "curse"|| word == "cuss"|| word == "cussing"|| word == "swearing"|| word == "slutty"|| word == "hell") {
        let lists = ["🤬", "🖕"];
        let list = random(lists);
        emoji.push(list);
      }

      if (word == "no" || word == "stop" || word == "nay" || word == "nah" || word == "never" || word == "don't" || word == "not" || word == "no way" || word == "hate") {
        let lists = ["❌", "🚫", "⛔️"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "angry" || word == "pissed" || word == "annoyed" || word == "mad"|| word == "rude"|| word == "offended"|| word == "offensive"|| word == "insulting"|| word == "hurtful"|| word == "disrespectful"|| word == "annoying"|| word == "irritating"|| word == "aggressive"|| word == "provocative"|| word == "humiliating"|| word == "attack"|| word == "attacking") {
        let lists = ["😡", "😾", "🤬", "👿", "😠", "💢"];
        let list = random(lists);
        emoji.push(list);
      }
      if (word == "what" || word == "huh" || word == "why" || word == "who" || word == "how" || word == "when" || word == "where"||word == "What" || word == "Huh" || word == "Why" || word == "Who" || word == "How" || word == "When" || word == "Where") {
        let lists = ["❓", "❔", "🤷‍♀️", "🤷", "🤷‍♂️"];
        let list = random(lists);
        emoji.push(list);
      }
       if (word == "bye" || word == "Bye" || word == "goodbye" || word == "Goodbye"|| word == "ciao"|| word == "Godspeed"|| word == "godspeed"|| word == "farewell"|| word == "later"|| word == "adios") {
        let lists = ["🙋‍♀️", "🙋", "🙋‍♂️"];
        let list = random(lists);
        emoji.push(list);
      }
      
      
      
console.log(word);
      console.log(emoji);
    }
  }
}

function displayString() {
  textSize(80);
  let rowCount = 0;
  let colCount = 0;
  for (let j = 0; j < emoji.length; j++) {
      let pos = getPos(paragraphWidth, j, emoji[j], rowCount, colCount);
      let xPos = 20 + colCount * stepX;
      let yPos = 50 + rowCount * stepY;
      rowCount = pos.rowCount;
      colCount = pos.colCount;

      //text(pos.x, width - 500, colCount * stepY);
      //text(pos.y, width - 200, rowCount * stepY);
      text(emoji[j], xPos, yPos);
      if(yPos > windowHeight){
        // emoji.push(emoji[0]);
        emoji.splice(0, emoji.lastIndexOf('\n'));
    
        clear();
        background(0,0);
      }
      
  }
}

function toggleSound() {
  if (sound.isPlaying()) {
      sound.stop();

  } else {

      sound.play();
  }


}

function getPos(colWidth, pos, char, rowCount, colCount) {
  rtn = new Object();
  rtn.x = undefined;
  rtn.y = undefined;
  rtn.rowCount = rowCount;
  rtn.colCount = colCount


  if (char === '\n') {
      rtn.rowCount++;
      rtn.colCount = 0;
  } else if (colCount != 0 && colCount % colWidth == 0) {
      //row = pos / colWidth;
      rtn.rowCount++;
      rtn.colCount = 0;
  } else {
      rtn.colCount++;
  }




  col = Math.abs(colCount - (colWidth * row));
  row = rtn.rowCount;

  rtn.y = row;
  rtn.x = col;

  return rtn;
}

// function windowResized() {
//   const css = getComputedStyle(canvas.parentElement),
//       marginWidth = round(float(css.marginLeft) + float(css.marginRight)),
//       marginHeight = round(float(css.marginTop) + float(css.marginBottom)),
//       w = windowWidth - marginWidth,
//       h = windowHeight - marginHeight;

//   resizeCanvas(w, h, true);
// }