SPRITES = {};
EVENTS = {};
LOCATIONS = {};
function setup(){
  let spritesize = 16;
  let imgsrc = "assets/sprites/character/raya/raya.png";
  let img = new Image();
  img.src = imgsrc;
  SPRITES["raya"] = {"neutral": new Sprite(imgsrc, img, 0, spritesize, 0, spritesize),
                          "question": new Sprite(imgsrc, img, spritesize, 2*spritesize, 0, spritesize),
                          "answer": new Sprite(imgsrc, img, 2*spritesize, 3*spritesize, 0, spritesize),
                          "hi": new Sprite(imgsrc, img, 3*spritesize, 4*spritesize, 0, spritesize),
                          "angry": new Sprite(imgsrc, img, 4*spritesize, 5*spritesize, 0, spritesize),
                          "shout": new Sprite(imgsrc, img, 5*spritesize, 6*spritesize, 0, spritesize),
                          "yawn": new Sprite(imgsrc, img, 6*spritesize, 7*spritesize, 0, spritesize),
                          "cry": new Sprite(imgsrc, img, 7*spritesize, 8*spritesize, 0, spritesize),
                          "right": new Sprite(imgsrc, img, 8*spritesize, 9*spritesize, 0, spritesize),
                          "left": new Sprite(imgsrc, img, 9*spritesize, 10*spritesize, 0, spritesize)};
  imgsrc = "assets/sprites/character/patsis/patsiblue.png";
  img = new Image();
  img.src = imgsrc;
  SPRITES["patsiblue"] = {"neutral": new Sprite(imgsrc, img, 0, spritesize, 0, spritesize),
                          "question": new Sprite(imgsrc, img, spritesize, 2*spritesize, 0, spritesize),
                          "answer": new Sprite(imgsrc, img, 2*spritesize, 3*spritesize, 0, spritesize),
                          "hi": new Sprite(imgsrc, img, 3*spritesize, 4*spritesize, 0, spritesize),
                          "angry": new Sprite(imgsrc, img, 4*spritesize, 5*spritesize, 0, spritesize),
                          "shout": new Sprite(imgsrc, img, 5*spritesize, 6*spritesize, 0, spritesize),
                          "yawn": new Sprite(imgsrc, img, 6*spritesize, 7*spritesize, 0, spritesize),
                          "cry": new Sprite(imgsrc, img, 7*spritesize, 8*spritesize, 0, spritesize),
                          "right": new Sprite(imgsrc, img, 8*spritesize, 9*spritesize, 0, spritesize),
                          "left": new Sprite(imgsrc, img, 9*spritesize, 10*spritesize, 0, spritesize)};

  imgsrc = "assets/sprites/objects/car.png";
  img = new Image();
  img.src = imgsrc;
  SPRITES["car"] = {"0": new Sprite(imgsrc, img, 0, spritesize, 0, spritesize),
                          "1": new Sprite(imgsrc, img, spritesize, 2*spritesize, 0, spritesize),
                          "2": new Sprite(imgsrc, img, 2*spritesize, 3*spritesize, 0, spritesize),
                          "3": new Sprite(imgsrc, img, 3*spritesize, 4*spritesize, 0, spritesize),
                          "4": new Sprite(imgsrc, img, 4*spritesize, 5*spritesize, 0, spritesize),
                          "5": new Sprite(imgsrc, img, 5*spritesize, 6*spritesize, 0, spritesize),
                          "6": new Sprite(imgsrc, img, 6*spritesize, 7*spritesize, 0, spritesize),
                          "7": new Sprite(imgsrc, img, 7*spritesize, 8*spritesize, 0, spritesize),
                          "8": new Sprite(imgsrc, img, 8*spritesize, 9*spritesize, 0, spritesize),
                          "tilt": new Sprite(imgsrc, img, 9*spritesize, 10*spritesize, 0, spritesize)};
  imgsrc = "assets/sprites/objects/othercar.png";
  img = new Image();
  img.src = imgsrc;
  SPRITES["othercar"] = {"0": new Sprite(imgsrc, img, 0, spritesize, 0, spritesize),
                          "1": new Sprite(imgsrc, img, spritesize, 2*spritesize, 0, spritesize),
                          "2": new Sprite(imgsrc, img, 2*spritesize, 3*spritesize, 0, spritesize),
                          "3": new Sprite(imgsrc, img, 3*spritesize, 4*spritesize, 0, spritesize),
                          "4": new Sprite(imgsrc, img, 4*spritesize, 5*spritesize, 0, spritesize),
                          "5": new Sprite(imgsrc, img, 5*spritesize, 6*spritesize, 0, spritesize),
                          "6": new Sprite(imgsrc, img, 6*spritesize, 7*spritesize, 0, spritesize),
                          "7": new Sprite(imgsrc, img, 7*spritesize, 8*spritesize, 0, spritesize),
                          "8": new Sprite(imgsrc, img, 8*spritesize, 9*spritesize, 0, spritesize),
                          "tilt": new Sprite(imgsrc, img, 9*spritesize, 10*spritesize, 0, spritesize)};
  imgsrc = "assets/sprites/objects/castle.png";
  img = new Image();
  img.src = imgsrc;
  SPRITES["castle"] = {"ground": new Sprite(imgsrc, img, 0, spritesize, 0, spritesize),
                          "castlebase": new Sprite(imgsrc, img, spritesize, 2*spritesize, 0, spritesize),
                          "castlecenter": new Sprite(imgsrc, img, 2*spritesize, 3*spritesize, 0, spritesize),
                          "castletop": new Sprite(imgsrc, img, 3*spritesize, 4*spritesize, 0, spritesize),
                          "towerbase": new Sprite(imgsrc, img, 4*spritesize, 5*spritesize, 0, spritesize),
                          "towertop": new Sprite(imgsrc, img, 5*spritesize, 6*spritesize, 0, spritesize),
                          "chain": new Sprite(imgsrc, img, 6*spritesize, 7*spritesize, 0, spritesize),
                          "ball": new Sprite(imgsrc, img, 7*spritesize, 8*spritesize, 0, spritesize),
                          "ruins": new Sprite(imgsrc, img, 8*spritesize, 9*spritesize, 0, spritesize),
                          "cracks": new Sprite(imgsrc, img, 9*spritesize, 10*spritesize, 0, spritesize)};
  imgsrc = "assets/sprites/objects/walk.png";
  img = new Image();
  img.src = imgsrc;
  SPRITES["walk"] = {"tree": new Sprite(imgsrc, img, 0, spritesize, 0, spritesize),
                          "fir": new Sprite(imgsrc, img, spritesize, 2*spritesize, 0, spritesize),
                          "path": new Sprite(imgsrc, img, 2*spritesize, 3*spritesize, 0, spritesize),
                          "split": new Sprite(imgsrc, img, 3*spritesize, 4*spritesize, 0, spritesize),
                          "sign": new Sprite(imgsrc, img, 4*spritesize, 5*spritesize, 0, spritesize),
                          "bush": new Sprite(imgsrc, img, 5*spritesize, 6*spritesize, 0, spritesize),
                          "bottle": new Sprite(imgsrc, img, 6*spritesize, 7*spritesize, 0, spritesize),
                          "bench": new Sprite(imgsrc, img, 7*spritesize, 8*spritesize, 0, spritesize),
                          "mouse": new Sprite(imgsrc, img, 8*spritesize, 9*spritesize, 0, spritesize),
                          "sun": new Sprite(imgsrc, img, 9*spritesize, 10*spritesize, 0, spritesize)};
  imgsrc = "assets/sprites/objects/door.png";
  img = new Image();
  img.src = imgsrc;
  SPRITES["door"] = {"closed": new Sprite(imgsrc, img, 0, spritesize, 0, spritesize),
                          "detail": new Sprite(imgsrc, img, spritesize, 2*spritesize, 0, spritesize),
                          "nokey": new Sprite(imgsrc, img, 2*spritesize, 3*spritesize, 0, spritesize),
                          "paperunder": new Sprite(imgsrc, img, 3*spritesize, 4*spritesize, 0, spritesize),
                          "keyonpaper": new Sprite(imgsrc, img, 4*spritesize, 5*spritesize, 0, spritesize),
                          "keyotherside": new Sprite(imgsrc, img, 5*spritesize, 6*spritesize, 0, spritesize),
                          "coinotherside": new Sprite(imgsrc, img, 6*spritesize, 7*spritesize, 0, spritesize),
                          "key": new Sprite(imgsrc, img, 7*spritesize, 8*spritesize, 0, spritesize),
                          "coin": new Sprite(imgsrc, img, 8*spritesize, 9*spritesize, 0, spritesize),
                          "paper": new Sprite(imgsrc, img, 9*spritesize, 10*spritesize, 0, spritesize)};

  EVENTS["entry"] = new Event("entry", [
      {"text":"<...Reise beginnen?...>",
        "decision":[new EventButton("Ja, leg los!", ()=>{},
          ()=>{g.e().continueWith(2), g.l().show(1);}),
                    new EventButton("nein, noch nicht.", ()=>{},
          ()=>{g.e().continueWith(1)})]},
      {"text":"<...vielleicht jetzt?...>",
        "decision":[new EventButton("Ok", ()=>{},
          ()=>{g.e().continueWith(2); g.l().show(1);}),
                    new EventButton("ne, immer noch nicht...", ()=>{},
          ()=>{})]},
      {"text":"[???]//Hallo! Mein Name ist Raya!",
        "decision":[]},
      {"text":"[Raya]//Ich bin ein ganz normaler Mensch in einer Welt in der wir mit spannenden Kreaturen, den Patsies, zusammenleben!",
        "decision":[new EventButton("Ich will mehr wissen!", ()=>{},
          ()=>{g.e().continueWith(4); g.l().show(2);}),
                    new EventButton("Was machen diese Patsies so?", ()=>{},
          ()=>{g.e().continueWith(4); g.l().show(2);})]},
      {"text":"[Raya]//Patsies sind sonderbare Kreaturen! Sie sind ein bisschen wie nette Drachen. Sie sind groß und stark und kümmern sich um uns Menschen. Ihr Ziel ist es, dass es ihrem Menschen gut geht. Rechts von mir seht ihr einen Patsi.",
        "decision":[]},
      {"text":"[Raya]//Ich bin gerade erst neu in diese Welt gezogen, mit dem Kolonisationsschiff Uteria Variante 4N-Y4. Ich versuche mich hier einzuleben und die Patsies helfen mir dabei. Gerade heute hat mir ein neues Patsi angeboten, mir zu helfen.",
        "decision":[new EventButton("Was hat das mit mir zu tun?", ()=>{},
          ()=>{g.e().continueWith(6); g.l().show(3);}),
                    new EventButton("Und was soll ich machen?", ()=>{},
          ()=>{g.e().continueWith(6); g.l().show(3);})]},
      {"text":"[Mysteriöse Stimme]//Du schlüpft in die Rolle eines Patsies. Bitte hilf, dass sich Raya in der wundersamen Welt der Patsies gut einleben kann. Dazu musst du Entscheidungen treffen, die Raya bei ihren Vorhaben unterstützen und sie vor Unheil bewahren.",
        "decision":[new EventButton("Klar. Und weiter?", ()=>{},
          ()=>{g.teller.show(); g.e().continueWith(7);})]},
      {"text":"[Mysteriöse Stimme]//Du begleitest Raya bei ihren Abenteuern. Links siehst du ihre Bedürfnisse, die dir hoffentlich helfen sie zu unterstützen.",
        "decision":[new EventButton("Klingt einfach...", ()=>{},
          ()=>{g.patsi.show(); g.e().continueWith(8);})]},
      {"text":"[Mysteriöse Stimme]//Rechts siehst du deine Erfahrungswerte. Diese ändern sich durch deine Entscheidungen. In kritischen Situationen verhälst du dich instinktiv nach deinen Werten.",
        "decision":[]},
      {"text":"[Mysteriöse Stimme]//Viel Spaß :)",
        "decision":[new EventButton("Danke?", ()=>{},
          ()=>{g.patsi.addToProperties(["vors", "bege", "zeit"],[4, -1, 3]); g.l().show(4); g.e().continueWith(10);}),
                    new EventButton("Ok cool!", ()=>{},
          ()=>{g.patsi.addToProperties(["vors", "bege", "zeit"],[-1, 4, 4]); g.l().show(4); g.e().continueWith(10);})]},
      {"text":"[Raya]//HAAALLOOOOO?!",
        "decision":[]},
      {"text":"[Raya]//Wo warst du gerade? Komm schon, wir wollen los! Meine Burg baut sich nicht von allein. Und wir haben ein Wagenrennen zu gewinnen. Was wollen wir zuerst machen?",
        "decision":[new EventButton("<Zum Burgbauplatz>", ()=>{},
          ()=>{g.play("castle", "castle", 0);}),
                    new EventButton("<Zur Rennstrecke>", ()=>{},
          ()=>{g.play("race", "race", 0);})
        ]},
      ]);
  EVENTS["race"] = new Event("race", [
        {"text":"<Bei der Rennstrecke>//Ihr seid an der Rennstrecke angekommen. Schwieriges Terrain, der Boden ist aus Geröll, die Strecke ist 100 Patsimeter lang! Die Ränder werden von Ents bewacht, es treten noch 9 weitere Wagenfahrer mit ihren Patsies auf dieser Strecke an.",
          "decision":[]},
        {"text":"[Raya]//Ich kenne mich mit dieser Rennstrecke noch nicht gut aus. Bitte bestimm du dieses mal das Tempo. Sei vorsichtig, dass der Wagen nicht aus der Bahn gerät. Aber wenn wir zu langsam sind bleiben wir so weit zurück. Außerdem ist das dann ja kein richtiges Rennen und ziemlich langweilig.",
          "decision":[new EventButton("<schneller>", ()=>{g.writeFlag("race_speed", 0); g.writeFlag("race_pos", 0); g.writeFlag("race_round", 1); g.writeFlag("race_falls", 0); g.e().alsoSay("Strecke: 0//Position: 10");},
            ()=>{
              let sp = g.readFlag("race_speed"); let pos = g.readFlag("race_pos"); let pp = 10; sp += 1;
              g.incFlag("race_speed"); g.incFlag("race_round");
              let fallspeed = 6+Math.floor(Math.random()*8);
              let also = "";
              if(sp >= fallspeed){
                g.writeFlag("race_speed", 0);
                g.incFlag("race_falls");
                g.patsi.addToProperties(["vors", "ges"],[-3, 1]);
                g.teller.addToProperties(["erf"],[3]);
                also = "Autsch!! Du und Raya seid gestürzt! Es ist nichts schlimmes passiert.";
                g.l().show(12);
              }else{
                g.incBy("race_pos", sp);
                g.patsi.addToProperties(["ges"],[2]);
                also = "Du gibst Gas und ihr werdet schneller!";
                if(sp < 8){g.l().show(sp)}
                else{g.l().show(8)}
              }
              sp = g.readFlag("race_speed");
              pos = g.readFlag("race_pos");
              for (var i = 0; i < 9; i++) {
                let ipos = (2 + Math.floor(0.5 * i)) * g.readFlag("race_round");
                if(pos > ipos) pp--;
              }
              if(pos >= 100){
                g.patsi.addToProperties(["ges","bege","vors", "zeit"],[Math.floor(250/g.readFlag("race_round")),12-pp,10-g.readFlag("race_falls"),1]);
                g.writeFlag("race_win_pos", pp);
                g.l().show(13);
                g.e().continueWith();
                //win. jump to next segment
              }else if(sp > 5){
                also += "//Raya hat viel Spaß an der schnellen Fahrt.";
                g.teller.addToProperties(["spa", "vrt", "gel", "erf"],[2, 3-g.readFlag("race_falls"), 1, 1]);
              }else{
                also += "//Raya ist entspannt";
                g.teller.addToProperties(["spa", "vrt", "gel", "erf"],[1, 4-g.readFlag("race_falls"), 2, 1]);
              }
              also += "//Strecke: "+pos+"//Position: "+pp;
              g.e().alsoSay(also);
            }),
                      new EventButton("<weiter>", ()=>{},
            ()=>{
              let sp = g.readFlag("race_speed"); let pos = g.readFlag("race_pos"); let pp = 10;
              g.incFlag("race_round");
              let fallspeed = 6+Math.floor(Math.random()*8);
              let also = "";
              if(sp == 0){
                also = "Du bleibst stehen... irgendwann müsst ihr aber schon vorankommen.";
                g.l().show(9);
              }else if(sp >= fallspeed){
                g.writeFlag("race_speed", 0);
                g.incFlag("race_falls");
                g.patsi.addToProperties(["vors"],[-2]);
                g.teller.addToProperties(["erf"],[3]);
                also = "Autsch!! Du und Raya seid gestürzt! Es ist nichts schlimmes passiert.";
                g.l().show(12);
              }else{
                g.incBy("race_pos", sp);
                g.patsi.addToProperties(["vors", "ges", "zeit"],[6-sp,sp-4,(sp<5?1:0)]);
                also = "Ihr bewegt euch weiterhin so schnell fort wie zuvor.";
                if(sp < 8){g.l().show(sp)}
                else{g.l().show(8)}
              }
              pos = g.readFlag("race_pos");
              sp = g.readFlag("race_speed");
              for (var i = 0; i < 9; i++) {
                let ipos = (2 + Math.floor(0.5 * i)) * g.readFlag("race_round");
                if(pos > ipos) pp--;
              }
              if(pos >= 100){
                g.patsi.addToProperties(["ges","bege","vors", "zeit"],[Math.floor(250/g.readFlag("race_round")),12-pp,10-g.readFlag("race_falls"),1]);
                g.writeFlag("race_win_pos", pp);
                g.l().show(13);
                g.e().continueWith();
                //win. jump to next segment
              }else if(sp > 5){
                also += "//Raya hat viel Spaß an der schnellen Fahrt.";
                g.teller.addToProperties(["spa", "vrt", "gel", "erf"],[2, 3-g.readFlag("race_falls"), 1, 1]);
              }else if(sp < 3){
                also += "//Raya langweilt sich etwas...";
                g.teller.addToProperties(["vrt", "gel", "erf"],[3-g.readFlag("race_falls"), 2, 1]);
              }else{
                also += "//Raya ist entspannt";
                g.teller.addToProperties(["spa", "vrt", "gel", "erf"],[1, 4-g.readFlag("race_falls"), 2, 1]);
              }
              also += "//Strecke: "+pos+"//Position: "+pp;
              g.e().alsoSay(also);
            }),
                      new EventButton("<langsamer>", ()=>{},
            ()=>{
              let sp = g.readFlag("race_speed"); let pos = g.readFlag("race_pos"); let pp = 10;
              g.incFlag("race_round");
              let also = "";
              if(sp == 0){
                also += "noch langsamer gehts nicht...";
                g.l().show(9);
              }else{
                sp -= 1;
                if(sp < 3){g.l().show(9+sp)}
                else if(sp < 8){g.l().show(sp)}
                else{g.l().show(8)}
                g.decFlag("race_speed");
                g.incBy("race_pos", sp);
                g.patsi.addToProperties(["vors", "zeit"],[Math.max(2, 10-sp),(sp<3?2:1)]);
                also += "Du bremst etwas ab...";
                pos = g.readFlag("race_pos");
                for (var i = 0; i < 9; i++) {
                  let ipos = (2 + Math.floor(0.5 * i)) * g.readFlag("race_round");
                  if(pos > ipos) pp--;
                }
                if(pos >= 100){
                  g.patsi.addToProperties(["ges","bege","vors", "zeit"],[Math.floor(250/g.readFlag("race_round")),12-pp,10-g.readFlag("race_falls"),1]);
                  g.writeFlag("race_win_pos", pp);
                  g.l().show(13);
                  g.e().continueWith();
                }else if(sp > 6){
                  also += "//Raya hat viel Spaß an der schnellen Fahrt.";
                  g.teller.addToProperties(["spa", "vrt", "gel", "erf"],[2, 3-g.readFlag("race_falls"), 1, 1]);
                }else if(sp < 3){
                  also += "//Raya langweilt sich etwas...";
                  g.teller.addToProperties(["vrt", "gel", "erf"],[3-g.readFlag("race_falls"), 2, 1]);
                }else{
                  also += "//Raya ist entspannt";
                  g.teller.addToProperties(["spa", "vrt", "gel", "erf"],[1, 4-g.readFlag("race_falls"), 2, 1]);
                }
              }
              also += "//Strecke: "+pos+"//Position: "+pp;
              g.e().alsoSay(also);
            }),
          ]},
          {"text":"Du hast es geschafft! Ihr habt das Rennen auf dem <<race_win_pos>>ten Platz beendet und seid dabei <<race_falls>> Mal gestürzt.",
            "decision":[new EventButton("...Reise fortsetzen...", ()=>{g.writeFlag("race_done", true)},
            ()=>{if(g.readFlag("castle_done") === true){g.e().continueWith()}else{g.e().continueWith(g.e().currentSegment +2);}})]},
          {"text":"Ihr habt vorerst alles erledigt und geht nach Hause um neue Pläne zu schmieden.",
            "decision":[new EventButton("...zurück gehen...", ()=>{}, ()=>{g.play("second", "second", 0);})]},
          {"text":"Ihr habt das Rennen erledigt und brecht nun zum Burgbauplatz auf.",
            "decision":[new EventButton("...zum Burgbauplatz...", ()=>{}, ()=>{g.play("castle", "castle", 0);})]},
      ]);

  let t = (j,i,k)=>{return j*12+i*2+k;};
  let by = (j,i,k)=>{return j*12+i*2+k+11;};
  let br = (j)=>{return 2*j+2}
  let castleevts = [
        {"text":"[Raya]//Das hier ist mein Land. Hier möchte ich meine Burg errichten! Außerdem benötige ich zwei Türme für meine Burg. Ich möchte möglichst bald einziehen können, aber die Burg muss auch stabil sein. Bekommt sie zu viele Risse müssen wir sie einreißen und neu bauen.",
          "decision":[new EventButton("Lass uns loslegen!", ()=>{g.writeFlag("castle_round", 0); g.writeFlag("castle_cons_cracks", 0); g.writeFlag("castle_breaks", 0);  g.writeFlag("castle_cons_build", 0); g.writeFlag("castle_fixes", 0);}, ()=>{g.e().continueWith()})]},
        {"text":"[Raya]//Womit soll ich anfangen?",
          "decision":[
            new EventButton("Turmfundament", ()=>{ g.l().show(0);},
            ()=>{g.incFlag("castle_cons_build"); g.e().continueWith(by(0,1,0));}, true),
            new EventButton("Burgfundament", ()=>{},
            ()=>{g.incFlag("castle_cons_build"); g.e().continueWith(by(1,0,0));}),
        ]},
        {"text":"[Raya]//Huch? Sind da etwa Risse in der Burg?...", // show 48; 2
          "decision":[
            new EventButton("Stimmt, ich sehe sie auch...", ()=>{g.l().show(48);},
            ()=>{ g.e().continueWith();}, true),
        ]},
        {"text":"[Raya]//Dann müssen wir sie abreißen und neu bauen!", // show 49; 3
          "decision":[
            new EventButton("Oje!", ()=>{g.l().show(49);},
            ()=>{g.e().continueWith(10);}, true),
        ]},
        {"text":"[Raya]//Huch? Sind da etwa Risse in der Burg?...", // show 50; 4
          "decision":[
            new EventButton("Stimmt, ich sehe sie auch...", ()=>{g.l().show(50);},
            ()=>{g.e().continueWith();}, true),
        ]},
        {"text":"[Raya]//Dann müssen wir sie abreißen und neu bauen!", // show 51; 5
          "decision":[
            new EventButton("Oje!", ()=>{g.l().show(51);},
            ()=>{g.e().continueWith(10);}, true),
        ]},
        {"text":"[Raya]//Huch? Sind da etwa Risse in der Burg?...", // show 52; 6
          "decision":[
            new EventButton("Stimmt, ich sehe sie auch...", ()=>{g.l().show(52);},
            ()=>{g.e().continueWith();}),
        ]},
        {"text":"[Raya]//Dann müssen wir sie abreißen und neu bauen!", // show 53; 7
          "decision":[
            new EventButton("Oje!", ()=>{g.l().show(53);},
            ()=>{g.e().continueWith(10);}, true),
        ]},
        {"text":"[Raya]//Huch? Sind da etwa Risse in der Burg?...", // show 54; 8
          "decision":[
            new EventButton("Stimmt, ich sehe sie auch...", ()=>{g.l().show(54);},
            ()=>{g.e().continueWith();}, true),
        ]},
        {"text":"[Raya]//Dann müssen wir sie abreißen und neu bauen!", // show 55; 9
          "decision":[
            new EventButton("Oje!", ()=>{g.l().show(55);},
            ()=>{g.e().continueWith(10);}, true),
        ]},
        {"text":"[Raya]//Okay, dann lass uns von vorn beginnen!", // show 56; 10
          "decision":[
            new EventButton("Alles klar!", ()=>{g.l().show(56);},
            ()=>{g.patsi.addToProperties(["vors", "wahr", "prod"], [-3,-1 * g.readFlag("castle_cons_cracks"), -3]); g.incFlag("castle_breaks"); g.writeFlag("castle_cons_cracks", 0); g.e().continueWith(1);}, true),
        ]},];
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 6; i++) {
      for (let k = 0; k < 2; k++) {
        let predone = false;
        let evt = {"text":"[Raya]//Und was nun?", "decision": []};
        if(j == 0){
          if(predone)
            evt.decision.push(new EventButton("Burgfundament", ()=>{}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod", "wahr", "zeit"],[(k==0?1:-1),(k==0?5:8),(k==0?4:-1),(k==0?1:-1)]); if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j+1,i,k)); else g.e().continueWith((k==0?by(j+1,i,1):br(j)));}));
          else{
            evt.decision.push(new EventButton("Burgfundament", ()=>{g.l().show(t(j,i,k));; g.incFlag("castle_round");}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod","wahr", "zeit"],[(k==0?1:-1),(k==0?5:8),(k==0?4:-1),(k==0?1:-1)]); if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j+1,i,k)); else g.e().continueWith((k==0?by(j+1,i,1):br(j)));}, true));
            predone = true;
          }
        }else if(j == 1){
          if(predone)
            evt.decision.push(new EventButton("Burgmitte", ()=>{}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod","wahr", "zeit"],[(k==0?1:-1),(k==0?5:8),(k==0?4:-1),(k==0?1:-1)]); if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j+1,i,k)); else g.e().continueWith((k==0?by(j+1,i,1):br(j)));}));
          else{
            evt.decision.push(new EventButton("Burgmitte", ()=>{g.l().show(t(j,i,k));; g.incFlag("castle_round");}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod","wahr", "zeit"],[(k==0?1:-1),(k==0?5:8),(k==0?4:-1),(k==0?1:-1)]); if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j+1,i,k)); else g.e().continueWith((k==0?by(j+1,i,1):br(j)));}, true));
            predone = true;
          }
        }else if(j == 2){
          if(predone)
            evt.decision.push(new EventButton("Burgspitze", ()=>{}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod", "wahr", "zeit"],[(k==0?1:-1),(k==0?5:8),(k==0?4:-1),(k==0?1:-1)]); if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j+1,i,k)); else g.e().continueWith((k==0?by(j+1,i,1):br(j)));}));
          else{
            evt.decision.push(new EventButton("Burgspitze", ()=>{g.l().show(t(j,i,k));; g.incFlag("castle_round");}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod","wahr", "zeit"],[(k==0?1:-1),(k==0?5:8),(k==0?4:-1),(k==0?1:-1)]); if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j+1,i,k)); else g.e().continueWith((k==0?by(j+1,i,1):br(j)));}, true));
            predone = true;
          }
        }

        if(i < 2 || i == 3){
            if(predone)
              evt.decision.push(new EventButton("Turmfundament",
                ()=>{}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod", "wahr", "zeit"],[(k==0?1:-1),(k==0?4:6), (k==0?4:-1),(k==0?1:-1)]);
                if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j,i+1,k)); else g.e().continueWith((k==0?by(j,i+1,1):br(j)));}));
            else{
              evt.decision.push(new EventButton("Turmfundament",
                ()=>{g.l().show(t(j,i,k)); g.incFlag("castle_round");}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod", "wahr", "zeit"],[(k==0?1:-1),(k==0?4:6),(k==0?4:-1),(k==0?1:-1)]);
                if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j,i+1,k)); else g.e().continueWith((k==0?by(j,i+1,1):br(j)));}, true));
              predone = true;
            }
        }
        if(i == 1 || i == 2 || i == 4){
            if(predone)
              evt.decision.push(new EventButton("Turmspitze",
                ()=>{}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod", "wahr", "zeit"],[(k==0?1:-1),(k==0?4:6),(k==0?4:-1),(k==0?1:-1)]);
                if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j,Math.min(i+2,5),k)); else g.e().continueWith((k==0?by(j,Math.min(i+2,5),1):br(j)));}, true));
            else{
              evt.decision.push(new EventButton("Turmspitze",
                ()=>{g.l().show(t(j,i,k)); g.incFlag("castle_round");}, ()=>{g.incBy("castle_cons_cracks", k); g.incFlag("castle_cons_build"); g.patsi.addToProperties(["vors", "prod", "wahr", "zeit"],[(k==0?1:-1),(k==0?4:6),(k==0?4:-1),(k==0?1:-1)]);
                if((g.readFlag("castle_cons_build")-(k==0?-4:0))/10.0 < Math.random()) g.e().continueWith(by(j,Math.min(i+2,5),k)); else g.e().continueWith((k==0?by(j,Math.min(i+2,5),1):br(j)));}, true));
              predone = true;
            }
        }

        if(!(j==3 && i==5) && k==1){
          evt.decision.push(new EventButton("Reparatur", ()=>{},
          ()=>{g.incFlag("castle_fixes"); g.writeFlag("castle_cons_build", 0); g.patsi.addToProperties(["vors", "prod", "wahr", "zeit"],[4,-1,7-g.readFlag("castle_cons_cracks"),1]); g.writeFlag("castle_cons_cracks", 0); g.e().continueWith(by(j,i,0))}));
        }

        if(j==3 && i==5){
          evt.text = "[Raya]//Es hat geklappt! Die Burg ist fertig!";
          evt.decision.push(new EventButton("Puh! Geschafft!", ()=>{g.l().show(t(j,i,k));},
          ()=>{g.e().continueWith(by(j,i,1)+1)}, true));
        }
        castleevts.push(evt);
      }
    }
  }
  castleevts.push(
    {"text":"Prima! Die Burg für Raya ist gebaut. Ihr musstet sie insgesamt nur <<castle_breaks>> mal einreißen. Ihr habt <<castle_round>> Patsiminuten benötigt und dabei <<castle_fixes>> mal die Burg repariert.",
    "decision":[new EventButton("...Reise fortsetzen...",
      ()=>{g.writeFlag("castle_done", true); g.teller.addToProperties(["spa", "vrt", "gel", "erf"],[(8-g.readFlag("castle_fixes")-g.readFlag("castle_breaks"))+(g.readFlag("castle_breaks")==0?3:0),10-2*g.readFlag("castle_breaks"),4+g.readFlag("castle_fixes")+Math.floor(g.readFlag("castle_round")/3), g.readFlag("castle_round")+2*g.readFlag("castle_fixes")+4*g.readFlag("castle_breaks")]);},
      ()=>{if(g.readFlag("race_done") === true){g.e().continueWith()}else{g.e().continueWith(g.e().currentSegment +2);}})]},
  );
  castleevts.push({"text":"Ihr habt vorerst alles erledigt und geht nach Hause um neue Pläne zu schmieden.",
    "decision":[new EventButton("...zurück gehen...", ()=>{}, ()=>{g.play("second", "second", 0);})]}
  );
  castleevts.push({"text":"Ihr habt die Burg errichtet und brecht nun zum waghalsigen Wagenrennen des Wahnsinns auf.",
    "decision":[new EventButton("...zum Wagenrennen...", ()=>{}, ()=>{g.play("race", "race", 0);})]}
  );
  //0   1    2   3   4    5
  //    x   xx   X   Xx   XX
  EVENTS["castle"] = new Event("castle", castleevts);
  EVENTS["second"] = new Event("second", [
        {"text":"Du fährst mit Raya zurück zu ihrem Zuhause. Die Unternehmungen haben Raya gefallen, sie findet sich nun schon viel besser auf dem Planeten der Patsies zurecht.",
          "decision":[]},
        {"text":"Euch kommt plötzlich viel zu schnell ein anderes Fahrzeug entgegen!",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(1)}, ()=>{
            if(g.patsi.getProperty("vors") > g.patsi.getProperty("ges") && g.patsi.getProperty("vors") > g.patsi.getProperty("wahr")) g.e().continueWith(7);
            else if(g.patsi.getProperty("wahr") > g.patsi.getProperty("ges") && g.patsi.getProperty("wahr") > g.patsi.getProperty("vors")) g.e().continueWith(2);
            else g.e().continueWith(4);
          })]},
        {"text":"Dank deiner sehr guten Wahrnehmung siehst du das andere Fahrzeug sehr früh.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(2)}, ()=>{g.e().continueWith()})]},
        {"text":"Du weichst mit moderater Geschwindigkeit rechtzeitig aus.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(3)}, ()=>{g.e().continueWith(12)})]},
        {"text":"Du kommst dem anderen Fahrzeug immer näher.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(4)}, ()=>{g.e().continueWith()})]},
        {"text":"Kurz bevor ihr zusammenstoßt bemerkst du das andere Fahrzeug.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(5)}, ()=>{g.e().continueWith()})]},
        {"text":"Dank deiner schnellen Reaktionssgabe und Geschwindigkeit weichst du dem anderen Fahrzeug schnell aus. Raya ist etwas erschreckt aber es geht ihr gut, du bist etwas wütend auf das andere Fahrzeug, dass dich gar nicht so hätte schneiden dürfen.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(6)}, ()=>{g.e().continueWith(12)})]},
        {"text":"Aufgrund deiner vorsichtigen Haltung fährst du relativ langsam an dieser schlecht einsehbaren Stelle.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(7)}, ()=>{g.e().continueWith()})]},
        {"text":"Du fährst relativ nah am Rand um in der Kurve schlechter fahrenden Fahrzeugen Platz zu lassen.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(8)}, ()=>{g.e().continueWith()})]},
        {"text":"Du bemerkst das Fahrzeug, das halb auf deiner Spur und viel zu schnell fährt. Raya gähnt.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(9)}, ()=>{g.e().continueWith()})]},
        {"text":"Dank deiner Vorsicht hast du genug Zeit auszuweichen.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(10)}, ()=>{g.e().continueWith()})]},
        {"text":"Du fährst unbeschadet an dem anderen Fahrzeug vorbei. Du findest, dass die anderen Fahrzeuge auch vorsichtiger gefahren werden sollten. Wenn du ebenso gefahren wärst, hätte es sicher einen Unfall gegeben.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(11)}, ()=>{g.e().continueWith(12)})]},
        {"text":"Ihr fahrt weiter, die restliche Strecke verläuft ereignislos.",
          "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(0)}, ()=>{g.play("walk","walk",0,1)})]},
      ]);

  EVENTS["walk"] = new Event("walk", [
    {"text":"...Am nächsten Tag...// // Ihr erkundet einen für Raya neuen Bereich der Patsiwelt. Hier gibt es üppige Flora, durchzogen von Wegen. Hier und da gibt es Gabelungen.",
      "decision":[]},
    {"text":"[Raya]//Wow! Hier gibt es ja sooo viele Pflanzen! Lass uns gehen!",
      "decision":[]},
    {"text":"[Raya]//Oh, hier gibt es ja zwei Richtungen! Da ist ein Schild, vielleicht hilft das bei der Entscheidung. Wo lang sollen wir gehen?",
      "decision":[new EventButton("< langer Weg <", ()=>{let i = g.readFlag("walk_init"); if(i === undefined || i === null || i === false ){g.writeFlag("walk_init", true); g.writeFlag("walk_round", 1); g.writeFlag("walk_long", 0);}else{g.incFlag("walk_round")} g.l().show(1)},
                    ()=>{g.patsi.addToProperties(["ges","prod","zeit"], [1,4,g.readFlag("walk_long")]); g.incFlag("walk_long"); g.e().continueWith(g.readFlag("walk_round") * 3 + 1);}, true),
                  new EventButton("> kurzer Weg >", ()=>{},
                    ()=>{g.patsi.addToProperties(["ges","prod","zeit"], [4,3,0]); g.e().continueWith(3);})
    ]},
    {"text":"Ihr geht den kurzen Weg und unterhaltet euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.",
      "decision":[new EventButton("...weitergehen...", ()=>{let k = Math.random(); g.e().alsoSay("[Raya]//"+(k<0.2?"Schön ist es hier.":k<0.4?"Das macht Spaß!":k<0.6?"Was wohl auf dem langen Weg passiert wäre?":k<0.8?"Das da ist ja eine spannende Pflanze!":"So viel grün!")); g.l().show(1)},
                    ()=>{g.e().alsoSay("");  if(g.readFlag("walk_round")>=5){g.e().continueWith(19)}else{g.e().continueWith(2);}}, true),
    ]},
    {"text":"[Raya]//Schau, da ist ein Busch mit roten Beeren daran! Wollen wir welche probieren?",
      "decision":[new EventButton("<Beeren probieren>", ()=>{g.l().show(2)},
                    ()=>{g.patsi.addToProperties(["vors", "bege"], [-1,3]);g.teller.addToProperties(["spa", "lds"], [6,6]); g.e().continueWith(5);}),
                  new EventButton("<Beeren in Ruhe lassen>", ()=>{},
                    ()=>{g.patsi.addToProperties(["vors", "bege"], [3,-1]); g.teller.addToProperties(["vrt", "erf"], [6,6]); g.e().continueWith(6);})
    ]},
    {"text":"Ihr probiert die Beeren. Sie sind süß und schmecken ziemlich gut. Hoffentlich habt ihr später keine Magenschmerzen. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Die Beeren waren echt lecker!",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(2);}),
    ]},
    {"text":"Ihr probiert die Beeren lieber nicht, ihr wollt ja später keine Magenschmerzen. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Wie die Beeren wohl geschmeckt hätten?",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(2);}),
    ]},
    {"text":"[Raya]//Auf dem Weg liegt eine leere Flasche, da! Heben wir sie auf und schmeißen sie weg oder lieber nicht, weil sie auch dreckig sein könnte?",
      "decision":[new EventButton("<Flasche entsorgen>", ()=>{g.l().show(3)},
                    ()=>{g.patsi.addToProperties(["prod", "wahr"], [9,-1]);g.teller.addToProperties(["gel", "lds"], [6,6]); g.e().continueWith(8);}),
                  new EventButton("<Flasche liegen lassen>", ()=>{},
                    ()=>{g.patsi.addToProperties(["prod", "wahr"], [-1,5]); g.teller.addToProperties(["gel", "vrt", "erf"], [3,3,6]); g.e().continueWith(9);})
    ]},
    {"text":"Ihr entsorgt die Flasche und fühlt euch gut, die Umwelt etwas entlastet zu haben. Hoffentlich habt ihr euch mit nichts angesteckt. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Schön, dass jetzt weniger Müll hier herumliegt!",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(2);}),
    ]},
    {"text":"Ihr lasst die Flasche lieber liegen, wer weiß, wer die schon angefasst hat. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Schade, dass die Flasche jetzt noch herumliegt. Aber immerhin werden wir nicht krank.",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(2);}),
    ]},
    {"text":"[Raya]//Oh, da hinten ist eine Bank! Ich kann weiter, hab aber auch nichts gegen eine Pause. Sollen wir uns setzen oder weitergehen?",
      "decision":[new EventButton("<Hinsetzen>", ()=>{g.l().show(4)},
                    ()=>{g.patsi.addToProperties(["zeit", "ged"], [3,-1]);g.teller.addToProperties(["gel", "vrt"], [6,6]); g.e().continueWith(11);}),
                  new EventButton("<Weitergehen>", ()=>{},
                    ()=>{g.patsi.addToProperties(["ges", "zeit"], [3,-1]); g.teller.addToProperties(["spa", "lds"], [6,6]); g.e().continueWith(12);})
    ]},
    {"text":"Ihr setzt euch und entspannt eine Weile, dann geht ihr weiter. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Die Pause hat schon gut getan.",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(2);}),
    ]},
    {"text":"Ihr geht an der Bank vorbei. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Schön, dass wir jetzt etwas mehr Zeit haben.",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(2);}),
    ]},
    {"text":"[Raya]//Sieh mal da unter dem einen Baum, ist das da nicht eine Maus? Wollen wir sie beobachten oder versuchen sie zu streicheln?",
      "decision":[new EventButton("<beobachten>", ()=>{g.l().show(5)},
                    ()=>{g.patsi.addToProperties(["wahr","vors", "bege"], [9,3,1]);g.teller.addToProperties(["erf", "lds"], [6,6]); g.e().continueWith(14);}),
                  new EventButton("<streicheln>", ()=>{},
                    ()=>{g.patsi.addToProperties(["wahr","vors", "bege"], [5,-1,4]); g.teller.addToProperties(["vrt", "spa"], [6,6]); g.e().continueWith(15);})
    ]},
    {"text":"Ihr beobachtet die Maus eine Weile. Dann verschwindet sie in einem Loch im Boden. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Die Maus sah ziemlich süß aus!",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(2);}),
    ]},
    {"text":"Ihr versucht die Maus zu streicheln, aber als ihr euch nähert verschwindet sie in einem Loch im Boden. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Da hatte die Maus wohl Angst! Aber sie war trotzdem sehr süß.",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(2);}),
    ]},
    {"text":"[Raya]//Die Sonne scheint ziemlich doll, wollen wir uns in den Schatten stellen oder ein wenig die Sonne genießen?",
      "decision":[new EventButton("<In den Schatten>", ()=>{g.l().show(6)},
                    ()=>{g.patsi.addToProperties(["vors", "wahr"], [3,-1]);g.teller.addToProperties(["vrt", "erf"], [6,6]); g.e().continueWith(17);}),
                  new EventButton("<Sonne genießen>", ()=>{},
                    ()=>{g.patsi.addToProperties(["vors", "wahr"], [-1,3]); g.teller.addToProperties(["spa", "lds"], [6,6]); g.e().continueWith(18);})
    ]},
    {"text":"Ihr geht lieber nicht direkt in der Sonne. Es ist auch im Schatten sehr warm. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Es ist ja hier im Schatten schon sehr warm, gut, dass wir nicht mehr in der Sonne sind!",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(19);}),
    ]},
    {"text":"Ihr lasst euch die Sonne direkt auf die Haut scheinen, morgen seid ihr bestimmt etwas brauner. Den Rest des Weges unterhaltet ihr euch. Ihr verbringt eine entspannte Zeit miteinander, die ereignislos vergeht.// //[Raya]//Die Sonne fühlt sich so gut an!",
      "decision":[new EventButton("...weitergehen...", ()=>{g.l().show(0)},
                    ()=>{g.e().continueWith(19);}),
    ]},
    {"text":"[Raya]//Das war richtig spannend! Jetzt weiß ich viel neues über die Welt der Patsies.",
      "decision":[new EventButton("...weitergehen...", ()=>{g.teller.addToProperties(["spa", "erf", "lds"], [5, 3+g.readFlag("walk_long"), 5]); g.l().show(0)},
                    ()=>{g.play("third", "third", 0, 0);}),
    ]},
  ]);
  EVENTS["third"] = new Event("third", [
    {"text":"...später am Tag...// //Raya ist in einem Raum ihres Zuhauses und die Tür ist versperrt. Da sie mit den komischen Schlosssystemen der Patsiwelt noch nicht vertraut ist kommt Raya nicht heraus. Sie bittet dich um Hilfe.",
      "decision":[]},
    {"text":"[Raya]//Bitte hilf mir hier raus, ich weiß nicht, was ich hier machen soll!",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(1)}, ()=>{
        if(g.patsi.getProperty("prod") > g.patsi.getProperty("zeit") && g.patsi.getProperty("prod") > g.patsi.getProperty("wahr")) g.e().continueWith(7);
        else if(g.patsi.getProperty("wahr") > g.patsi.getProperty("prod") && g.patsi.getProperty("wahr") > g.patsi.getProperty("zeit")) g.e().continueWith(2);
        else g.e().continueWith(4);
      })]},
    {"text":"Dank deiner Aufmerksamkeit und guten Wahrnehmung entdeckst du, dass Rayas Türen von außen ein Überbrückungssystem installiert haben.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(2)}, ()=>{g.e().continueWith()})]},
    {"text":"Du verwendest das Überbrückungssystem um die Tür zu entriegeln.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(3)}, ()=>{g.e().continueWith(12)})]},
    {"text":"Da du sehr geduldig bist und dir immer viel Zeit für Raya nimmst setzt du dich vor die Tür.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(4)}, ()=>{g.e().continueWith()})]},
    {"text":"Du erklärst Raya ganz in Ruhe die Details der Patsi'ischen Verschlussysteme, wie der mysteriöse Stahl zu verwenden ist und leitest Raya Schritt für Schritt an, den Verschluss selbst wieder zu öffnen.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(5)}, ()=>{g.e().continueWith()})]},
    {"text":"Nach mehreren Versuchen und verschiedenen Erklärungsansätzen gelingt es Raya, die Tür zu entriegeln.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(6)}, ()=>{g.e().continueWith(12)})]},
    {"text":"Du überlegst, wie die Situation am besten zu lösen ist.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(7)}, ()=>{g.e().continueWith()})]},
    {"text":"Dank deines Einfallsreichtums und deiner Tatkraft fällt dir schon bald eine gute Lösung ein.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(8)}, ()=>{g.e().continueWith()})]},
    {"text":"Du bittest Raya den mysteriös gebogenen Stahl vom Verschlussystem aus ihrer Seite der Tür zu entfernen.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(9)}, ()=>{g.e().continueWith()})]},
    {"text":"Dann schiebst du einen beschreibbaren magischen Teppich unter der Tür hindurch. Damit fängst du den mysteriösen Stahl ein.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(10)}, ()=>{g.e().continueWith()})]},
    {"text":"Du nutzt den gefangenen mysteriösen Stahl um mit ihm von außen mit der Tür zu interagieren. Die Tür beugt sich dank der Macht des Stahls nun deinem Willen und lässt Raya wieder frei.",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(11)}, ()=>{g.e().continueWith(12)})]},
    {"text":"[Raya]//Ich bin wieder frei! Ich hoffe, dass ich nicht so bald wieder irgendwo eingesperrt bin. Vielen Dank, dass du mir geholfen hast!",
      "decision":[new EventButton("<instinktive Handlung>", ()=>{g.l().show(12)}, ()=>{g.play("entry","end",0,1)})]},
  ]);
  EVENTS["end"] = new Event("end", [
    {"text":"Vielen Dank, dass du unser kleines Abenteuer gespielt und Raya durch die Welt der Patsies begleitet hast! Sie findet sich jetzt sicher besser zurecht.// //[Raya]//Tschüüüüß! Bis bald!",
      "decision":[new EventButton("... bis bald? ...", ()=>{g.l().show(1)}, ()=>{g.e().continueWith()})]},
    {"text":"[Mysteriöse Stimme]//Raya ist nicht nur eine süße Pixelgrafik. Raya existiert wirklich und sie und ihre Eltern würden sich sehr freuen, wenn du ihr Patsi (Patentante*onkel) werden möchtest. Es ist sicher nicht immer eine leichte aber bestimmt eine sehr aufregende Reise.// //Wir möchten dich also fragen://Möchtest du Rayas Patentante*onkel werden?",
      "decision":[new EventButton("------ ENDE ------", ()=>{g.l().show(1)}, ()=>{})]},
  ]);
  EVENTS["error"] = new Event("error", [
        {"text":"Dieses Event hätte nicht auftreten sollen. Da hat der Programmierer wohl was falsch gemacht...",
          "decision":[new EventButton("Neustart?", ()=>{}, ()=>{g.play("entry", "entry", 0);})]}
      ]);

  LOCATIONS["entry"] = new Location("entry", [
    (l)=>{if(l.canvas === null) l.createCanvas(); else l.clearCanvas(); l.putSpriteAt("raya", "neutral", 0.4, 0.5, 0.06, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "hi", 0.4, 0.5, 0.24, "cc")},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "answer", 0.25, 0.5, 0.24, "cc"); l.putSpriteAt("patsiblue", "neutral", 0.6, 0.5, 0.29, "cc")},
    (l)=>{l.clearCanvas();},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "shout", 0.45, 1, 0.6, "cb");},
  ]);
  LOCATIONS["race"] = new Location("race", [
    (l)=>{if(l.canvas === null) l.createCanvas(); else l.clearCanvas(); l.putSpriteAt("raya", "right", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "0", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "right", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "1", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "right", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "2", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "right", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "3", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "right", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "4", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "right", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "5", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "right", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "6", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "right", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "7", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "right", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "8", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "yawn", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "0", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "yawn", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "1", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "yawn", 0.4, 0.55, 0.24, "cb"); l.putSpriteAt("car", "2", 0.4, 0.5, 0.5, "cc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "cry", 0.5, 0.6, 0.24, "rc"); l.putSpriteAt("car", "tilt", 0.5, 0.6, 0.5, "lc");},
    (l)=>{l.clearCanvas(); l.putSpriteAt("raya", "answer", 0.5, 0.6, 0.24, "rc"); l.putSpriteAt("car", "0", 0.5, 0.6, 0.5, "lc");},
  ]);
  let castlelocs = [];
  let castleramlocs = [];
  for (let j = 0; j < 4; j++) {
    castleramlocs.push((l)=>{
      l.clearCanvas();
      l.putSpriteAt("castle", "ground", 0.5, 0.8, 0.2, "ct");
      if(j >= 1){l.putSpriteAt("castle", "castlebase", 0.5, 0.8, 0.2, "cb")}
      if(j >= 2){l.putSpriteAt("castle", "castlecenter", 0.5, 0.5, 0.2, "ct")}
      if(j >= 3){l.putSpriteAt("castle", "castletop", 0.5, 0.5, 0.2, "cb")}
      l.putSpriteAt("castle", "cracks", 0.5, 0.65, 0.2, "cc");
      l.putSpriteAt("raya", "question", 0.2, 0.6, 0.2, "ct");
    });
    castleramlocs.push((l)=>{
      l.clearCanvas();
      l.putSpriteAt("castle", "ground", 0.5, 0.8, 0.2, "ct");
      if(j >= 1){l.putSpriteAt("castle", "castlebase", 0.5, 0.8, 0.2, "cb")}
      if(j >= 2){l.putSpriteAt("castle", "castlecenter", 0.5, 0.5, 0.2, "ct")}
      if(j >= 3){l.putSpriteAt("castle", "castletop", 0.5, 0.5, 0.2, "cb")}
      l.putSpriteAt("castle", "cracks", 0.5, 0.65, 0.2, "cc");
      l.putSpriteAt("raya", "angry", 0.2, 0.6, 0.2, "ct");
      l.putSpriteAt("castle", "ball", 0.3, 0.6, 0.2, "ct");
      l.putSpriteAt("castle", "chain", 0.3, 0.6, 0.2, "cb");
    });
    for (let i = 0; i < 6; i++) {
      for (let k = 0; k < 2; k++) {
        let fc = (l)=>{if(i==0 && j==0 && k==0)if(l.canvas === null) l.createCanvas(); else l.clearCanvas();else l.clearCanvas();
          l.putSpriteAt("castle", "ground", 0.5, 0.8, 0.2, "ct");
          if(i >= 1){l.putSpriteAt("castle", "towerbase", 0.2, 0.6, 0.2, "ct")}
          if(i == 2 || i >= 4){l.putSpriteAt("castle", "towerbase", 0.8, 0.6, 0.2, "ct")}
          if(i >= 3){l.putSpriteAt("castle", "towertop", 0.2, 0.6, 0.2, "cb")}
          if(i == 5){l.putSpriteAt("castle", "towertop", 0.8, 0.6, 0.2, "cb")}
          if(j >= 1){l.putSpriteAt("castle", "castlebase", 0.5, 0.8, 0.2, "cb")}
          if(j >= 2){l.putSpriteAt("castle", "castlecenter", 0.5, 0.5, 0.2, "ct")}
          if(j >= 3){l.putSpriteAt("castle", "castletop", 0.5, 0.5, 0.2, "cb")}
          if(k == 1){l.putSpriteAt("castle", "cracks", 0.5, 0.65, 0.2, "cc")}
        };
        castlelocs.push(fc);
      }
    }
  }
  castlelocs = castlelocs.concat(castleramlocs);
  castlelocs.push((l)=>{l.clearCanvas();l.putSpriteAt("castle", "ground", 0.5, 0.8, 0.2, "ct");l.putSpriteAt("castle", "ruins", 0.5, 0.8, 0.2, "cb");});
  LOCATIONS["castle"] = new Location("castle", castlelocs);
  LOCATIONS["walk"] = new Location("walk", [
    (l)=>{if(l.canvas === null) l.createCanvas(); else l.clearCanvas(); // 0, straight
            let t1 = Math.random();
            let t2 = Math.random();
            let d = ()=>{return (Math.random()-0.5)*2/100.0};
            let dx1 = d();
            let dy1 = d();
            let dx2 = d();
            let dy2 = d();
            l.putSpriteAt("walk", "path", 0.5,0.75,0.3, "cb");
            l.putSpriteAt("walk", (t1>0.5?"tree":"fir"), 0.48, 0.65,0.3, "rb");
            l.putSpriteAt("walk", (t2>0.5?"tree":"fir"), 0.52, 0.65,0.3, "lb");
            l.putSpriteAt("patsiblue", "neutral", 0.5+dx1,0.6+dy1,0.2, "rt");
            l.putSpriteAt("raya", "neutral", 0.5+dx2,0.6+dy2,0.2, "lt");
    },
    (l)=>{l.clearCanvas();                                              // 1, split
            let t1 = Math.random();
            let t2 = Math.random();
            let d = ()=>{return (Math.random()-0.5)*2/100.0};
            let dx1 = d();
            let dy1 = d();
            let dx2 = d();
            let dy2 = d();
            l.putSpriteAt("walk", "split", 0.5,0.8,0.3, "cb");
            l.putSpriteAt("walk", "sign", 0.5,0.58,0.3, "cb");
            l.putSpriteAt("walk", (t1>0.5?"tree":"fir"), 0.42, 0.8,0.3, "rb");
            l.putSpriteAt("walk", (t2>0.5?"tree":"fir"), 0.58, 0.8,0.3, "lb");
            l.putSpriteAt("patsiblue", "neutral", 0.5+dx1,0.6+dy1,0.2, "rt");
            l.putSpriteAt("raya", "question", 0.5+dx2,0.6+dy2,0.2, "lt");
    },
    (l)=>{l.clearCanvas();                                              // 2, bush
            let t1 = Math.random();
            let t2 = Math.random();
            let d = ()=>{return (Math.random()-0.5)*2/100.0};
            let dx1 = d();
            let dy1 = d();
            let dx2 = d();
            let dy2 = d();
            l.putSpriteAt("walk", "path", 0.5,0.75,0.3, "cb");
            l.putSpriteAt("walk", "bush", 0.68,0.57,0.2, "lt");
            l.putSpriteAt("walk", (t1>0.5?"tree":"fir"), 0.48, 0.65,0.3, "rb");
            l.putSpriteAt("walk", (t2>0.5?"tree":"fir"), 0.52, 0.65,0.3, "lb");
            l.putSpriteAt("patsiblue", "answer", 0.5+dx1,0.6+dy1,0.2, "rt");
            l.putSpriteAt("raya", "neutral", 0.5+dx2,0.6+dy2,0.2, "lt");
    },
    (l)=>{l.clearCanvas();                                              // 3, bottle
            let t1 = Math.random();
            let t2 = Math.random();
            let d = ()=>{return (Math.random()-0.5)*2/100.0};
            let dx1 = d();
            let dy1 = d();
            let dx2 = d();
            let dy2 = d();
            l.putSpriteAt("walk", "path", 0.5,0.75,0.3, "cb");
            l.putSpriteAt("walk", "bottle", 0.5,0.6,0.1, "cb");
            l.putSpriteAt("walk", (t1>0.5?"tree":"fir"), 0.48, 0.65,0.3, "rb");
            l.putSpriteAt("walk", (t2>0.5?"tree":"fir"), 0.52, 0.65,0.3, "lb");
            l.putSpriteAt("patsiblue", "question", 0.5+dx1,0.6+dy1,0.2, "rt");
            l.putSpriteAt("raya", "neutral", 0.5+dx2,0.6+dy2,0.2, "lt");
    },
    (l)=>{l.clearCanvas();                                              // 4, bench
            let t1 = Math.random();
            let t2 = Math.random();
            let d = ()=>{return (Math.random()-0.5)*2/100.0};
            let dx1 = d();
            let dy1 = d();
            let dx2 = d();
            let dy2 = d();
            l.putSpriteAt("walk", "path", 0.5,0.75,0.3, "cb");
            l.putSpriteAt("walk", "bench", 0.5,0.35,0.15, "cb");
            l.putSpriteAt("walk", (t1>0.5?"tree":"fir"), 0.48, 0.65,0.3, "rb");
            l.putSpriteAt("walk", (t2>0.5?"tree":"fir"), 0.52, 0.65,0.3, "lb");
            l.putSpriteAt("patsiblue", "neutral", 0.5+dx1,0.6+dy1,0.2, "rt");
            l.putSpriteAt("raya", "neutral", 0.5+dx2,0.6+dy2,0.2, "lt");
    },
    (l)=>{l.clearCanvas();                                              // 5, mouse
            let t1 = Math.random();
            let t2 = Math.random();
            let d = ()=>{return (Math.random()-0.5)*2/100.0};
            let dx1 = d();
            let dy1 = d();
            let dx2 = d();
            let dy2 = d();
            l.putSpriteAt("walk", "path", 0.5,0.75,0.3, "cb");
            l.putSpriteAt("walk", (t1>0.5?"tree":"fir"), 0.48, 0.65,0.3, "rb");
            l.putSpriteAt("walk", (t2>0.5?"tree":"fir"), 0.52, 0.65,0.3, "lb");
            l.putSpriteAt("walk", "mouse", 0.69, 0.65, 0.1, "lb");
            l.putSpriteAt("patsiblue", "neutral", 0.5+dx1,0.6+dy1,0.2, "rt");
            l.putSpriteAt("raya", "neutral", 0.5+dx2,0.6+dy2,0.2, "lt");
    },
    (l)=>{l.clearCanvas();                                              // 6, sun
            let t1 = Math.random();
            let t2 = Math.random();
            let d = ()=>{return (Math.random()-0.5)*2/100.0};
            let dx1 = d();
            let dy1 = d();
            let dx2 = d();
            let dy2 = d();
            l.putSpriteAt("walk", "sun", 0.48, 0.4, 0.4, "lb");
            l.putSpriteAt("walk", "path", 0.5,0.75,0.3, "cb");
            l.putSpriteAt("walk", (t1>0.5?"tree":"fir"), 0.48, 0.65,0.3, "rb");
            l.putSpriteAt("walk", (t2>0.5?"tree":"fir"), 0.52, 0.65,0.3, "lb");
            l.putSpriteAt("patsiblue", "neutral", 0.5+dx1,0.6+dy1,0.2, "rt");
            l.putSpriteAt("raya", "neutral", 0.5+dx2,0.6+dy2,0.2, "lt");
    },
  ]);
  LOCATIONS["second"] = new Location("second", [
    (l)=>{if(l.canvas === null) l.createCanvas(); else l.clearCanvas();
      l.putSpriteAt("raya", "right", 0.22, 0.4, 0.15, "rc");
      l.putSpriteAt("patsiblue", "right", 0.18, 0.4, 0.15, "lc");
      l.putSpriteAt("car", "2", 0.2, 0.45, 0.4, "cc");},
    (l)=>{l.clearCanvas();
      l.putSpriteAt("raya", "right", 0.22, 0.4, 0.15, "rc");
      l.putSpriteAt("patsiblue", "right", 0.18, 0.4, 0.15, "lc");
      l.putSpriteAt("car", "2", 0.2, 0.45, 0.4, "cc");
      l.putSpriteAt("othercar", "7", 0.8, 0.45, 0.4, "cc");},
    (l)=>{l.clearCanvas(); // 2, Wahrnehmung 1
      l.putSpriteAt("raya", "right", 0.27, 0.4, 0.15, "rc");
      l.putSpriteAt("patsiblue", "answer", 0.23, 0.4, 0.15, "lc");
      l.putSpriteAt("car", "2", 0.25, 0.45, 0.4, "cc");
      l.putSpriteAt("othercar", "7", 0.75, 0.45, 0.4, "cc");},
    (l)=>{l.clearCanvas(); // 3, Wahrnehmung 2
      l.putSpriteAt("othercar", "7", 0.6, 0.45, 0.4, "cc");
      l.putSpriteAt("raya", "right", 0.43, 0.53, 0.225, "rc");
      l.putSpriteAt("patsiblue", "right", 0.37, 0.53, 0.225, "lc");
      l.putSpriteAt("car", "3", 0.4, 0.6, 0.6, "cc");},
    (l)=>{l.clearCanvas(); // 4, Geschwindigkeit 1
      l.putSpriteAt("raya", "right", 0.27, 0.4, 0.15, "rc");
      l.putSpriteAt("patsiblue", "right", 0.23, 0.4, 0.15, "lc");
      l.putSpriteAt("car", "2", 0.25, 0.45, 0.4, "cc");
      l.putSpriteAt("othercar", "7", 0.75, 0.45, 0.4, "cc");},
    (l)=>{l.clearCanvas(); // 5, Geschwindigkeit 2
      l.putSpriteAt("raya", "answer", 0.31, 0.4, 0.15, "rc");
      l.putSpriteAt("patsiblue", "answer", 0.27, 0.4, 0.15, "lc");
      l.putSpriteAt("car", "2", 0.29, 0.45, 0.4, "cc");
      l.putSpriteAt("othercar", "7", 0.69, 0.45, 0.4, "cc");},
    (l)=>{l.clearCanvas(); // 6, Geschwindigkeit 3
      l.putSpriteAt("othercar", "7", 0.6, 0.45, 0.4, "cc");
      l.putSpriteAt("raya", "right", 0.53, 0.53, 0.225, "rc");
      l.putSpriteAt("patsiblue", "angry", 0.47, 0.53, 0.225, "lc");
      l.putSpriteAt("car", "8", 0.5, 0.6, 0.6, "cc");},
    (l)=>{l.clearCanvas(); // 7, Vorsicht 1
      l.putSpriteAt("othercar", "7", 0.74, 0.45, 0.4, "cc");

      l.putSpriteAt("raya", "right",        0.23, 0.4, 0.15, "rc");
      l.putSpriteAt("patsiblue", "right",   0.19, 0.4, 0.15, "lc");
      l.putSpriteAt("car", "1",             0.21, 0.45, 0.4, "cc");},
    (l)=>{l.clearCanvas(); // 8, Vorsicht 2
      l.putSpriteAt("othercar", "7", 0.68, 0.45, 0.4, "cc");

      l.putSpriteAt("raya", "right",        0.29, 0.4, 0.15, "rc");
      l.putSpriteAt("patsiblue", "right",   0.25, 0.4, 0.15, "lc");
      l.putSpriteAt("car", "1",             0.27, 0.45, 0.4, "cc");},
    (l)=>{l.clearCanvas(); // 9, Vorsicht 3
      l.putSpriteAt("othercar", "7", 0.62, 0.45, 0.4, "cc");

      l.putSpriteAt("raya", "yawn",         0.37, 0.45, 0.15, "rc");
      l.putSpriteAt("patsiblue", "right",   0.33, 0.45, 0.15, "lc");
      l.putSpriteAt("car", "1",             0.35, 0.5, 0.47, "cc");},
    (l)=>{l.clearCanvas(); // 10, Vorsicht 4
      l.putSpriteAt("othercar", "7", 0.56, 0.45, 0.4, "cc");

      l.putSpriteAt("raya", "right",        0.43, 0.49, 0.15, "rc");
      l.putSpriteAt("patsiblue", "right",   0.37, 0.49, 0.15, "lc");
      l.putSpriteAt("car", "1",             0.4, 0.55, 0.54, "cc");},
    (l)=>{l.clearCanvas(); // 11, Vorsicht 5
      l.putSpriteAt("othercar", "7", 0.6, 0.45, 0.4, "cc");

      l.putSpriteAt("raya", "right",        0.48, 0.53, 0.225, "rc");
      l.putSpriteAt("patsiblue", "right",   0.42, 0.53, 0.225, "lc");
      l.putSpriteAt("car", "1",             0.45, 0.6,  0.6, "cc");},
  ]);
  LOCATIONS["third"] = new Location("third", [
    (l)=>{if(l.canvas === null) l.createCanvas(); else l.clearCanvas();
      l.putSpriteAt("raya", "left", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "right", 0.3, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "closed", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas();
      l.putSpriteAt("raya", "cry", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "right", 0.3, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "closed", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 2, Wahrnehmung 1
      l.putSpriteAt("raya", "right", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "hi", 0.3, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "coin",   0.2, 0.32, 0.1, "cc");
      l.putSpriteAt("door", "closed", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 3, Wahrnehmung 2
      l.putSpriteAt("raya", "answer", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "right", 0.27, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "coinotherside", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 4, Zeit 1
      l.putSpriteAt("raya", "left", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "answer", 0.27, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "closed", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 5, Zeit 2
      l.putSpriteAt("raya", "question", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "answer", 0.27, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "detail", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 6, Zeit 3
      l.putSpriteAt("raya", "answer", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "right", 0.27, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "detail", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 7, Produktivität 1
      l.putSpriteAt("raya", "cry", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "question", 0.27, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "closed", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 8, Produktivität 2
      l.putSpriteAt("raya", "question", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "answer", 0.27, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "closed", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 9, Produktivität 3
      l.putSpriteAt("raya", "hi", 0.7, 0.41, 0.2, "cc");
      l.putSpriteAt("door", "key", 0.78, 0.36, 0.2, "cc");
      l.putSpriteAt("patsiblue", "answer", 0.27, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "nokey", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 10, Produktivität 4
      l.putSpriteAt("raya", "question", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "right", 0.27, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "keyonpaper", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 11, Produktivität 5
      l.putSpriteAt("raya", "answer", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "right", 0.27, 0.4, 0.2, "cc");
      l.putSpriteAt("door", "keyotherside", 0.5, 0.41, 0.3, "cc");
    },
    (l)=>{l.clearCanvas(); // 12, end
      l.putSpriteAt("raya", "left", 0.65, 0.41, 0.2, "cc");
      l.putSpriteAt("patsiblue", "right", 0.27, 0.4, 0.2, "cc");
    },
  ]);
  LOCATIONS["error"] = new Location("error", [(l)=>{}]);
}
