class Location extends Drawable{
  constructor(name, states) {
    super();
    this.root = document.createElement("div");
    this.root.id = "Location_"+name;
    this.root.classList.add("container");
    this.root.classList.add("location");
    this.root.classList.add("root");
    this.name = name;

    this.currentState = 0;

    this.states = states;
    this.state = this.states[this.currentState];

    this.canvas = null;
    this.context = null;
  }

  show(state){
    //console.log("I show..."+state);
    this.currentState = state;
    this.state = this.states[this.currentState];
    this.applyState();
  }

  applyState(){
    this.state(this);
  }

  createCanvas(){
    this.canvas = document.createElement("canvas");
    this.canvas.classList.add("location");
    this.canvas.width = 768;
    this.canvas.height = 512;
    this.context = this.canvas.getContext("2d");
    this.context.imageSmoothingEnabled = false;
    this.clearCanvas();
    this.root.appendChild(this.canvas);
  }

  clearCanvas(){
    if(this.canvas === null || this.context === null) return false;
    this.context.fillStyle = "rgb(0,0,0)";
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
    return true;
  }

  putSpriteAt(set, variant, xPos, yPos, size, handle){
    if(this.canvas === null || this.context === null) return false;
    let sprite = g.getSpriteData(set, variant);
    let sz = size * this.canvas.width;
    let xp = xPos * this.canvas.width;
    let yp = yPos * this.canvas.height;
    let xS = xp;
    let xE = xp;
    let yS = yp;
    let yE = yp;
    if(handle.charAt(0) == "c"){xS -= sz/2; xE += sz/2}
    else if(handle.charAt(0) == "r"){xS -= sz;}
    else{xE += sz;}
    if(handle.charAt(1) == "c"){yS -= sz/2; yE += sz/2;}
    else if(handle.charAt(1) == "b"){yS -= sz;}
    else{yE += sz;}
    this.context.drawImage(sprite.img, sprite.xStart, sprite.yStart, sprite.width, sprite.height, xS, yS, sz, sz);
    return true;
  }
}

class Locations {
  constructor() {
    this.list = LOCATIONS;
  }

  get(name){
    return this.list[name];
  }
}
