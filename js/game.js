function clear(el){
  while(el.firstChild && el.removeChild(el.firstChild));
}

function appendParsed(elem, raw){
  let newLineArray = raw.split("//");
  for (var i = 0; i < newLineArray.length; i++) {
    let line = newLineArray[i];
    line = line.replace(/\[(.*)\]/gi, (m, m1)=>{return "["+m1.replace(/ /g, "%--%")+"]"});
    let wordArray = line.split(" ");
    let textnode = "";
    for (var j = 0; j < wordArray.length; j++) {
      let word = wordArray[j];
      let flagmatch = word.match(/(.*)<<(.*?)>>(.*)/i);
      if(flagmatch !== null){
        word = flagmatch[1];
        word += g.readFlag(flagmatch[2]);
        word += flagmatch[3];
      }
      let tagmatch = word.match(/\[(.*)\]/);
      let rayamatch = word.match(/(Rayas?)(.*)/i);
      let patsimatch = word.match(/(Patsie?s?)(.*)/i);
      if(tagmatch !== null){
        elem.appendChild(document.createTextNode(textnode));
        textnode = " ";
        let span = document.createElement("span");
        span.classList.add("tagspan");
        span.appendChild(document.createTextNode("["));
        let innerSpan = document.createElement("span");

        if(tagmatch[1] == "Raya" || tagmatch[1] == "raya"){
          innerSpan.classList.add("rayaspan");
          innerSpan.appendChild(document.createTextNode(g.teller.name));
        }else if(tagmatch[1] == "Patsi"){
          innerSpan.classList.add("patsispan");
          innerSpan.appendChild(document.createTextNode("Patsi"));
        }else{
          innerSpan.appendChild(document.createTextNode(tagmatch[1].replace("%--%", " ")));
        }
        span.append(innerSpan);
        span.appendChild(document.createTextNode("]"));
        elem.appendChild(span);
      }else if(rayamatch !== null){
        elem.appendChild(document.createTextNode(textnode));
        textnode = " ";
        if(rayamatch.length == 3){
          textnode = rayamatch[2]+" ";
        }
        let span = document.createElement("span");
        span.classList.add("rayaspan");
        span.appendChild(document.createTextNode(g.teller.name))
        elem.appendChild(span);
      }else if(patsimatch !== null){
        elem.appendChild(document.createTextNode(textnode));
        textnode = " ";
        if(patsimatch.length == 3){
          textnode = patsimatch[2]+" ";
        }
        let span = document.createElement("span");
        span.classList.add("patsispan");
        span.appendChild(document.createTextNode(patsimatch[1]))
        elem.appendChild(span);
      }else{
        textnode += word+" ";
      }
    }
    elem.appendChild(document.createTextNode(textnode));
    elem.appendChild(document.createElement("br"));
  }
}

class Sprite{
  constructor(src, img, xStart, xEnd, yStart, yEnd){
    this.src = src;
    this.img = img;
    this.xStart = xStart;
    this.xEnd = xEnd;
    this.yStart = yStart;
    this.yEnd = yEnd;
    this.width = xEnd-xStart;
    this.height = yEnd-yStart;
  }
}

class Drawable{
  constructor() {
    this.root = null;
    this.bindnames = [];
    this.bindings = {};
    this.bindelements = {};
    this.lastStates = {};
  }
  newBinding(containerId, container, updateFunction){
    this.bindings[containerId] = updateFunction;
    this.bindelements[containerId] = container;
    this.bindnames.push(containerId);
    return containerId;
  }
  getRoot(){
    return this.root;
  }
  saveStates(){}
  update(only){
    if(only !== undefined && only !== null){
      if(this.bindings.hasOwnProperty(only)){
        let elem = this.bindelements[only];
        clear(elem);
        this.bindings[only](elem);
      }
      return;
    }
    //console.log(this);
    for (var id in this.bindings) {
      if (this.bindings.hasOwnProperty(id)) {
        let elem = this.bindelements[id];
        clear(elem);
        this.bindings[id](elem);
      }
    }
  }
}

class Game {
  constructor() {
    this.root = null;
    this.teller = new Character("<Name>"/**"Raya"**/);
    this.patsi = new Character("Patsi");

    this.locations = new Locations();
    this.location = null;

    this.events = new Events();
    this.event = null;

    this.eventLocked = false;

    this.sprites = SPRITES;

    this.flags = {};
  }

  hasFlag(name){
    return (this.flags[name] !== undefined && this.flags[name] !== null);
  }

  writeFlag(name, val){
    this.flags[name] = val;
  }

  readFlag(name){
    return this.flags[name];
  }

  incFlag(name){
    this.flags[name]++;
  }

  decFlag(name){
    this.flags[name]--;
  }

  incBy(name, val){
    this.flags[name] += val;
  }

  e(){return this.event;}
  l(){return this.location;}

  getSpriteData(set, variant){
    return this.sprites[set][variant];
  }

  start(){
    this.initialize();
    this.play("entry", "entry");
  }

  stop(){
  }

  initialize(){
    this.root = document.createElement("div");
    this.root.id = "root";
    this.root.classList.add("container")
    document.body.appendChild(this.root);

    this.teller.appendProperties(["Spaß", "Vertrauen", "Erfahrung", "Gelassenheit", "Leidenschaft"],["spa", "vrt", "erf", "gel", "lds"],[2, 2, 2, 2, 2]);
    this.teller.getRoot().classList.add("teller");
    this.root.appendChild(this.teller.getRoot());

    this.patsi.appendProperties(["Vorsicht", "Begeisterung", "Geschwindigkeit", "Zeit", "Wahrnehmung", "Produktivität"],["vors", "bege", "ges", "zeit", "wahr", "prod"],[4, 4, 4, 4, 4, 4]);
    this.patsi.getRoot().classList.add("patsi");
    this.root.appendChild(this.patsi.getRoot());
  }

  lockEvent(){
    this.eventLocked = true;
  }

  unlockEvent(){
    this.eventLocked = false;
  }

  eventIsLocked(){
    return this.eventLocked;
  }

  updateLocation(state){
    if(this.location === null){
      this.location = this.locations.get(this.currentLocation);
      this.root.appendChild(this.location.getRoot());
    }
    else if(this.location.name != this.currentLocation){
      if(state === null || state === undefined){state = 0;}
      let oldElem = this.location.getRoot();
      this.location = this.locations.get(this.currentLocation);
      let newElem = this.location.getRoot();
      this.root.replaceChild(newElem, oldElem);
    }
    this.location.applyState();
    this.location.update();
  }

  updateEvent(seg){
    if(this.event === null){
      this.event = this.events.get(this.currentEvent);
      this.root.appendChild(this.event.getRoot());
    }
    else if(this.event.name != this.currentEvent){
      if(seg === null || seg === undefined){seg = 0;}
      let oldElem = this.event.getRoot();
      this.event = this.events.get(this.currentEvent);
      let newElem = this.event.getRoot();
      this.root.replaceChild(newElem, oldElem);
    }
    if(seg !== null && seg !== undefined){
      this.event.continueWith(seg);
    }else this.event.update();
  }

  play(loc, evt, seg, state){
    this.currentLocation = loc;
    this.currentEvent = evt;
    this.updateLocation(state);
    this.updateEvent(seg);
  }

}

var g = null;
function buildGame() {
    g = new Game();
    setup();
    g.start();
}
