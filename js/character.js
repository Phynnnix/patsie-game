class Character extends Drawable {
  constructor(name) {
    super();
    this.root = document.createElement("div");
    this.root.id = "Character_"+name;
    this.root.classList.add("container");
    this.root.classList.add("root");
    this.root.classList.add("character");
    this.table = document.createElement("table");
    this.table.classList.add("character");
    this.title = document.createElement("h1");
    this.title.appendChild(document.createTextNode(name));
    this.root.appendChild(this.title);
    this.root.appendChild(this.table);
    this.name = name;
    this.shorts = {};

    this.hide();
  }

  appendProperties(names, shorts, values){
    if(names.length != shorts.length) return false;
    if(names.length != values.length) return false;
    for (var i = 0; i < names.length; i++) {
      let name = names[i];
      let short = shorts[i];
      let value = values[i];
      let row = this.table.insertRow(this.table.rows.length);
      row.id = "Character_"+this.name+"_Row_"+short;
      let descCell = row.insertCell(0);
      descCell.appendChild(document.createTextNode(name));
      let valCell = row.insertCell(1);
      valCell.appendChild(document.createTextNode(value));
      valCell.id = "Character_"+this.name+"_Val_"+short;
      this[short] = value;
      this.newBinding(valCell.id, valCell, (elem)=>{elem.appendChild(document.createTextNode(this[short]));});
    }
    return true;
  }

  getProperty(short){
    return this[short];
  }

  addToProperties(shorts, values){
    if(shorts.length != values.length) return false;
    for (var i = 0; i < shorts.length; i++) {
      this[shorts[i]] += values[i];
    }
    this.update();
    return true;
  }

  setProperties(shorts, values){
    if(shorts.length != values.length) return false;
    for (var i = 0; i < shorts.length; i++) {
      this[shorts[i]] = values[i];
    }
    this.update();
    return true;
  }

  show(){
    this.root.classList.remove("invisible");
  }

  hide(){
    this.root.classList.add("invisible");
  }
}
