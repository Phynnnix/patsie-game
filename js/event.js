class Event extends Drawable{
  constructor(name, eventdescription) {
    super();
    let evt = this;
    this.root = document.createElement("div");
    this.root.id = "Event_"+name;
    this.root.classList.add("container");
    this.root.classList.add("event");
    this.root.classList.add("root");
    this.name = name;

    this.currentSegment = 0;
    this.textSegments = [];
    this.decisionSegments = [];
    this.additionalText = null;

    for (var i = 0; i < eventdescription.length; i++) {
      this.textSegments.push(eventdescription[i]["text"]);
      this.decisionSegments.push(eventdescription[i]["decision"])
    }

    let textContainer = document.createElement("div");
    textContainer.id = "Event_Text_"+name;
    textContainer.classList.add("event");
    textContainer.classList.add("text");
    this.newBinding("Event_Text_"+name, textContainer, (elem)=>{
      let raw = evt.textSegments[evt.currentSegment];
      appendParsed(elem, raw);
    });
    this.root.appendChild(textContainer);

    let additionalContainer = document.createElement("div");
    additionalContainer.id = "Event_Addition_"+name;
    additionalContainer.classList.add("event");
    additionalContainer.classList.add("addition");
    this.newBinding("Event_Addition_"+name, additionalContainer, (elem)=>{
      if(evt.additionalText !== null && evt.additionalText !== undefined) appendParsed(elem, evt.additionalText);
    });
    this.root.appendChild(additionalContainer);

    let buttonContainer = document.createElement("div");
    buttonContainer.id = "Event_Buttons";
    buttonContainer.classList.add("event");
    buttonContainer.classList.add("buttons");
    buttonContainer.classList.add("container");
    this.newBinding("Event_Buttons", buttonContainer, (elem)=>{
      let decisionList = evt.decisionSegments[evt.currentSegment];
      if(decisionList.length == 0){
        elem.appendChild(document.createTextNode("Klicke hier zum fortsetzen!"));
        elem.appendChild(document.createElement("br"));
        elem.appendChild(document.createTextNode('> >'));
        elem.onclick = () => {if(g.eventIsLocked()) return;
                              elem.classList.remove("clickable");
                              evt.continueWith();};
        elem.classList.add("clickable");
      }else{
        //console.log(elem);
        elem.onclick = '';
        elem.removeAttribute("onclick");
        for (var i = 0; i < decisionList.length; i++) {
          elem.appendChild(decisionList[i].getRoot());
        }
      }
    });
    this.root.appendChild(buttonContainer);
  }

  alsoSay(txt){
    this.additionalText = txt;
    this.update(this.bindnames[1]);
  }

  continueWith(seg){
    //console.log("next is..."+seg);
    this.additionalText = null;
    if(seg !== null && seg !== undefined){
      this.currentSegment = seg;
    }else{this.currentSegment += 1;}
    if(this.currentSegment >= this.textSegments.length){
      g.play("error", "error");
    } else {
      this.update(this.bindnames[0]);
      this.update(this.bindnames[2]);
    }
  }

}

class EventButton{
  constructor(txt, creationFnct, clickFnct, recreatable){
    this.root = document.createElement("div");
    this.root.classList.add("event");
    this.root.classList.add("button");
    this.root.classList.add("clickable");
    this.root.appendChild(document.createTextNode(txt));
    this.root.onclick = (e) => { if(g.eventIsLocked()) return;
                                e.preventDefault();
                                e.stopPropagation();
                                clickFnct(e);}
    this.cf = creationFnct;
    this.created = false;
    this.recreatable = recreatable;
    if(this.recreatable === undefined || this.recreatable === null){
      this.recreatable = false;
    }
  }

  letRecreate(){this.created = false;};

  changeText(txt){
    clear(this.root);
    this.appendText(txt);
  }

  appendText(txt){
    this.root.appendChild(document.createTextNode(txt));
  }

  getRoot(){
    if(!this.created || this.recreatable){
      this.cf(this);
      this.created = true;
    }
    return this.root;
  }
}

class Events {
  constructor() {
    this.list = EVENTS;
  }

  get(name, obj){
    if(obj === null || obj === undefined) return this.list[name];
    else if(obj[0] == "dec") return this.list[name].decisionSegments[obj[1]];
    else if(obj[0] == "txt") return this.list[name].textSegments[obj[1]];
    else if(obj[0] == "btn") return this.list[name].decisionSegments[obj[1]][obj[2]];
  }
}
