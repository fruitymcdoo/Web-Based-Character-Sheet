var character = {
    CharacterName: ["CharacterName", "input", "false", "", "charname", "Character Name"],
    Class: ["Class", "input", "false", "", "inforow1", "Class"],
    Level: ["Level", "input", "false", "", "inforow1", "Level"],
    Background: ["Background", "input", "false", "", "inforow1", "Background"],
    PlayerName: ["PlayerName", "input", "false", "", "inforow1", "Player Name"],
    Race: ["Race", "input", "false", "", "inforow2", "Race"],
    Alignment: ["Alignment", "input", "false", "", "inforow2", "Alignment"],
    ExperiencePoints: ["ExperiencePoints", "input", "false", "", "inforow2", "Experience Points"],
    Strength: ["Strength", "input", "true", "Strength", "abilityscore", "Strength"],
    Dexterity: ["Dexterity", "input", "true", "Dexterity", "abilityscore", "Dexterity"],
    Constitution: ["Constitution", "input", "true", "Constitution", "abilityscore", "Constitution"],
    Intelligence: ["Intelligence", "input", "true", "Intelligence", "abilityscore", "Intelligence"],
    Wisdom: ["Wisdom", "input", "true", "Wisdom", "abilityscore", "Wisdom"],
    Charisma: ["Charisma", "input", "true", "Charisma", "abilityscore", "Charisma"],
    Inspiration: ["Inspiration", "input", "false", "", "inspirationdiv", "Inspiration"],
    ProficiencyBonus: ["ProficiencyBonus", "input", "false", "", "proficiency", "Proficiency Bonus"],
    StrengthSave: ["StrengthSave", "checkbox", "true", "Strength", "savingthrows", "Strength"],
    DexteritySave: ["DexteritySave", "checkbox", "true", "Dexterity", "savingthrows", "Dexterity"],
    ConstitutionSave: ["ConstitutionSave", "checkbox", "true", "Constitution", "savingthrows", "Constitution"],
    IntelligenceSave: ["IntelligenceSave", "checkbox", "true", "Intelligence", "savingthrows", "Intelligence"],
    WisdomSave: ["WisdomSave", "checkbox", "true", "Wisdom", "savingthrows", "Wisdom"],
    CharismaSave: ["CharismaSave", "checkbox", "true", "Charisma", "savingthrows", "Charisma"],
    Acrobatics: ["Acrobatics", "checkbox", "true", "Dexterity", "skills", "Acrobatics"],
    AnimalHandling: ["AnimalHandling", "checkbox", "true", "Wisdom", "skills", "Animal Handling"],
    Arcana: ["Arcana", "checkbox", "true", "Intelligence", "skills", "Arcana"],
    Athletics: ["Athletics", "checkbox", "true", "Strength", "skills", "Athletics"],
    Deception: ["Deception", "checkbox", "true", "Charisma", "skills", "Deception"],
    History: ["History", "checkbox", "true", "Intelligence", "skills", "History"],
    Insight: ["Insight", "checkbox", "true", "Wisdom", "skills", "Insight"],
    Intimidation: ["Intimidation", "checkbox", "true", "Charisma", "skills", "Intimidation"],
    Investigation: ["Investigation", "checkbox", "true", "Intelligence", "skills", "Investigation"],
    Medicine: ["Medicine", "checkbox", "true", "Wisdom", "skills", "Medicine"],
    Nature: ["Nature", "checkbox", "true", "Intelligence", "skills", "Nature"],
    Perception: ["Perception", "checkbox", "true", "Wisdom", "skills", "Perception"],
    Performance: ["Performance", "checkbox", "true", "Charisma", "skills", "Performance"],
    Persuasion: ["Persuasion", "checkbox", "true", "Charisma", "skills", "Persuasion"],
    Religion: ["Religion", "checkbox", "true", "Intelligence", "skills", "Religion"],
    SleightofHand: ["SleightofHand", "checkbox", "true", "Dexterity", "skills", "Sleight of Hand"],
    Stealth: ["Stealth", "checkbox", "true", "Dexterity", "skills", "Stealth"],
    Survival: ["Survival", "checkbox", "true", "Wisdom", "skills", "Survival"],
    PassivePerception: ["PassivePerception", "input", "false", "Wisdom", "pperception", "Passive Perception"],
    Other: ["Other", "textarea", "false", "", "otherdiv", "Other Proficiencies & Languages"],
    ArmorClass: ["ArmorClass", "input", "false", "", "combatstats", "Armor Class"],
    Initiative: ["Initiative", "input", "false", "Dexterity", "combatstats", "Initiative"],
    Speed: ["Speed", "input", "false", "", "combatstats", "Speed"],
    HitPointMaximum: ["HitPointMaximum", "input", "false", "", "hitpoints", "Hit Point Maximum"],
    CurrentHitPoints: ["CurrentHitPoints", "input", "false", "", "hitpoints", "Current Hit Points"],
    TemporaryHitPoints: ["TemporaryHitPoints", "input", "false", "", "hitpoints", "Temporary Hit Points"],
    TotalHitDice: ["TotalHitDice", "input", "false", "", "hitpoints", "Total Hit Dice"],
    HitDice: ["HitDice", "input", "false", "", "hitpoints", "Hit Dice"],
    dssuccess1: ["dssuccess1", "checkbox", "false", "", "successdiv", ""],
    dssuccess2: ["dssuccess2", "checkbox", "false", "", "successdiv", ""],
    dssuccess3: ["dssuccess3", "checkbox", "false", "", "successdiv", ""],
    dsfailure1: ["dsfailure1", "checkbox", "false", "", "failurediv", ""],
    dsfailure2: ["dsfailure2", "checkbox", "false", "", "failurediv", ""],
    dsfailure3: ["dsfailure3", "checkbox", "false", "", "failurediv", ""],
    atkname1: ["atkname1", "input", "false", "", "atk1", ""],
    atkbonus1: ["atkbonus1", "input", "false", "", "atk1", ""],
    damagetype1: ["damagetype1", "input", "false", "", "atk1", ""],
    atkname2: ["atkname2", "input", "false", "", "atk2", ""],
    atkbonus2: ["atkbonus2", "input", "false", "", "atk2", ""],
    damagetype2: ["damagetype2", "input", "false", "", "atk2", ""],
    atkname3: ["atkname3", "input", "false", "", "atk3", ""],
    atkbonus3: ["atkbonus3", "input", "false", "", "atk3", ""],
    damagetype3: ["damagetype3", "input", "false", "", "atk3", ""],
    atkname4: ["atkname4", "input", "false", "", "atk4", ""],
    atkbonus4: ["atkbonus4", "input", "false", "", "atk4", ""],
    damagetype4: ["damagetype4", "input", "false", "", "atk4", ""],
    atkname5: ["atkname5", "input", "false", "", "atk5", ""],
    atkbonus5: ["atkbonus5", "input", "false", "", "atk5", ""],
    damagetype5: ["damagetype5", "input", "false", "", "atk5", ""],
    AtkInfo: ["AtkInfo", "textarea", "false", "", "AtkInfoDiv", ""],
    CP: ["CP", "input", "false", "", "money", "CP"],
    SP: ["SP", "input", "false", "", "money", "SP"],
    EP: ["EP", "input", "false", "", "money", "EP"],
    GP: ["GP", "input", "false", "", "money", "GP"],
    PP: ["PP", "input", "false", "", "money", "PP"],
    Equipment: ["Equipment", "textarea", "false", "", "equipmentdiv", "Equipment"],
    Personality: ["Personality", "textarea", "false", "", "characterdetails", "Personality Traits"],
    Ideals: ["Ideals", "textarea", "false", "", "characterdetails", "Ideals"],
    Bonds: ["Bonds", "textarea", "false", "", "characterdetails", "Bonds"],
    Flaws: ["Flaws", "textarea", "false", "", "characterdetails", "Flaws"]
    };
    
populate()

function populate (){
var keys = Object.keys(character);
for (var i = 0; i < keys.length; i++){
var nextkey = keys[i];
//defining what each property is
var fieldname = character[nextkey][0];
var fieldtype = character[nextkey][1];
var fieldmod = character[nextkey][2];
var fieldability = character[nextkey][3];
var fieldlocation = character[nextkey][4];
var fieldlabel = character[nextkey][5];
//defining what each property is
var location = document.getElementById(fieldlocation);
if (fieldtype == 'textarea'){var newField = document.createElement(fieldtype);} else {var newField = document.createElement('input');}
var newDiv = document.createElement(fieldname + "Div");
var newLabel = document.createElement("label");
newDiv.classList.add(fieldname, fieldtype, fieldmod, fieldlocation, "div")
location.appendChild(newDiv);
newLabel.setAttribute("for",fieldname);
newLabel.id = fieldname + "label";
newLabel.classList.add(fieldname, fieldtype, fieldmod, fieldlocation, "label");
newLabel.innerHTML = fieldlabel;
newField.type = fieldtype;
newField.id = fieldname;
newField.classList.add(fieldname, fieldtype, fieldmod, fieldlocation);
newField.placeholder = fieldlabel;
newDiv.appendChild(newField);
if (fieldmod == "true") {
var newMod = document.createElement('input');
newMod.id = fieldname + "mod";
newMod.classList.add(fieldname, fieldtype, fieldmod, fieldability, fieldlocation, "mod");
newDiv.appendChild(newMod);
}
newDiv.appendChild(newLabel);
}
}

function GenerateSaveData() {
  var characterfinal = {};
  for (var i = 0; i < character.length; i++){
    prop = character[i];
    if (document.getElementById(prop).type == "checkbox") {
      elem = document.getElementById(prop).checked;
    } else {elem = document.getElementById(prop).value;}
    characterfinal[prop] = elem;
  }
  for (var i = 0; i < mods.length; i++){
    propmod = mods[i];
    elemmod = document.getElementById(propmod).value;
    characterfinal[propmod] = elemmod;
  }
  characterfinal['SaveTime'] = Date.now();
  var text = JSON.stringify(characterfinal, null, 2);
  var filename = document.getElementById('CharacterName').value;
  if (event.target.id == "downloadbutton") {
    download(text, filename);
    localStorage.setItem(filename, text);
    localStorage.removeItem(filename+"Temp");
  } else {var tempfilename = (filename + "Temp"); localStorage.setItem(tempfilename, text);}
}

document.getElementById("downloadbutton").addEventListener("click", GenerateSaveData);

//function to actually download the text
function download(text, filename) {
    var element = document.createElement('a'); //creates an element named a 
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text)); //assigns the element the text field and link attributes
    element.setAttribute('download', filename + ".txt"); //adds download attribute with filename and .txt for firefox.
    element.style.display = 'none'; //makes element hidden
    document.body.appendChild(element); //add element to the page
    element.click(); //clicks the element automatically 
    document.body.removeChild(element); //removes the element
}

//upload button function
var fileInput = document.getElementById('fileInput'); //gets fileInput field, aka the upload button
var fileDisplayArea = document.getElementById('CharacterName'); //sets CharacterName to be the filedisplayarea. Just used for error printing.

fileInput.addEventListener('change', function(event) { //checks if the fileInput field is changed, aka if a file is uploaded
    var file = fileInput.files[0]; //gets 1st file from fileInput field
    var textType = /text.*/; //assigns text as filetype var
    if (file.type.match(textType)) { //if filetype matches text, go ahead and load
				var reader = new FileReader(); //creates new FileReader thingy
				reader.onload = function(event) { //when reader loads, do the following
                    for (var e in character) { //for each index of e in character, do the following
                        var field = character[e]; //field is equal to the current index value of the character object
                        var loadedcharacter = JSON.parse(reader.result); //parses the text file back into an object, assigned to loadedcharacter var
                        if (document.getElementById(field).type == "checkbox") {
                            document.getElementById(field).checked = loadedcharacter[field];
                        } else {document.getElementById(field).value = loadedcharacter[field];} //assigns values from the loadedcharacter object to the corresponding elements on the page by their IDs. 
                    }
                    for (var n in mods) {
                    	var fieldmod = mods[n];
                      document.getElementById(fieldmod).value = loadedcharacter[fieldmod];
                    }
				}
    reader.readAsText(file); //reads the file. not sure if this is needed or not since it comes after the actual parsing. 
    fileInput.value = ""; //clears the input file after its done loading
	} else { fileDisplayArea.innerText = "File not supported!" } //if not match, error
});


function CharacterLoad(CharToLoad) {
  if (event.target.id == "fileInput") {
  var loadedcharacter = JSON.parse(reader.result); //parses the text file back into an object, assigned to loadedcharacter var
  } else {var loadedcharacter = JSON.parse(localStorage.getItem(CharToLoad));}
  for (var i = 0; i < character.length; i++) { //for each index of e in character, do the following
  var field = character[i]; //field is equal to the current index value of the character object
  if (document.getElementById(field).type == "checkbox") {
    document.getElementById(field).checked = loadedcharacter[field];
    } else {document.getElementById(field).value = loadedcharacter[field];} //assigns values from the loadedcharacter object to the corresponding elements on the page by their IDs. 
 }
 for (var i = 0; i < mods.length; i++) {
  var fieldmod = mods[i];
  document.getElementById(fieldmod).value = loadedcharacter[fieldmod];
  }
}

document.getElementById("CharacterName").addEventListener('change', function() {
var CharToLoad = document.getElementById("CharacterName").value;
if (localStorage.getItem(CharToLoad + "Temp") != null){var CharToLoad = (CharToLoad + "Temp"); CharacterLoad(CharToLoad);
} else if (localStorage.getItem(CharToLoad) != null){CharacterLoad(CharToLoad);}
});


var keys = Object.keys(character);
for (var i = 0; i < keys.length; i++){
var nextkey = keys[i];
var fieldID = character[nextkey][0];
document.getElementById(fieldID).addEventListener('change', GenerateSaveData);
}

for (var i = 0; i < character.length; i++){
  document.getElementById(character[i]).addEventListener('change', GenerateSaveData);
}
for (var i = 0; i < mods.length; i++){
  document.getElementById(mods[i]).addEventListener('change', GenerateSaveData);
}

//section for autocalcs

var level = document.getElementById('Level');
var prof = document.getElementById('ProficiencyBonus');
level.addEventListener('change', function() {
if (level.value >= 1 && level.value <= 4) {
prof.value = 2;
} else if (level.value >= 5 && level.value <= 8) {
prof.value = 3;
} else if (level.value >= 9 && level.value <= 12) {
prof.value = 4;
} else if (level.value >= 13 && level.value <= 16) {
prof.value = 5;
} else if (level.value >= 17 && level.value <= 20) {
prof.value = 6;
} else {prof.value = "";}
});

var AbStr = document.getElementById('Strength');
var AbDex = document.getElementById('Dexterity');
var AbCon = document.getElementById('Constitution');
var AbInt = document.getElementById('Intelligence');
var AbWis = document.getElementById('Wisdom');
var AbCha = document.getElementById('Charisma');
var SavStr = document.getElementById('StrengthSave');
var SavDex = document.getElementById('DexteritySave');
var SavCon = document.getElementById('ConstitutionSave');
var SavInt = document.getElementById('IntelligenceSave');
var SavWis = document.getElementById('WisdomSave');
var SavCha = document.getElementById('CharismaSave');
var SkillAcrobatics  = document.getElementById('Acrobatics');
var SkillAnimalHandling = document.getElementById('AnimalHandling');
var SkillArcana = document.getElementById('Arcana');
var SkillAthletics = document.getElementById('Athletics');
var SkillDeception = document.getElementById('Deception');
var SkillHistory = document.getElementById('History');
var SkillInsight = document.getElementById('Insight');
var SkillIntimidation = document.getElementById('Intimidation');
var SkillInvestigation = document.getElementById('Investigation');
var SkillMedicine = document.getElementById('Medicine');
var SkillNature = document.getElementById('Nature');
var SkillPerception = document.getElementById('Perception');
var SkillPerformance = document.getElementById('Performance');
var SkillPersuasion = document.getElementById('Persuasion');
var SkillReligion = document.getElementById('Religion');
var SkillSleightofHand = document.getElementById('SleightofHand');
var SkillStealth = document.getElementById('Stealth');
var SkillSurvival = document.getElementById('Survival');

var ModArray = [AbStr, AbDex, AbCon, AbInt, AbWis, AbCha, SavStr, SavDex, SavCon, SavInt, SavWis, SavCha, SkillAcrobatics, SkillAnimalHandling, SkillArcana, SkillAthletics, SkillDeception, SkillHistory, SkillInsight, SkillIntimidation, SkillInvestigation, SkillMedicine, SkillNature, SkillPerception, SkillPerformance, SkillPersuasion, SkillReligion, SkillSleightofHand, SkillStealth, SkillSurvival];

var AbilityArray = [AbStr, AbDex, AbCon, AbInt, AbWis, AbCha];
var SaveArray = [SavStr, SavDex, SavCon, SavInt, SavWis, SavCha];
var SkillArray = [SkillAcrobatics, SkillAnimalHandling, SkillArcana, SkillAthletics, SkillDeception, SkillHistory, SkillInsight, SkillIntimidation, SkillInvestigation, SkillMedicine, SkillNature, SkillPerception, SkillPerformance, SkillPersuasion, SkillReligion, SkillSleightofHand, SkillStealth, SkillSurvival];

var scores = {"0":"-6","1":"-5","2":"-4","3":"-4","4":"-3","5":"-3","6":"-2","7":"-2","8":"-1","9":"-1","10":"0","11":"0","12":"1","13":"1","14":"2","15":"2","16":"3","17":"3","18":"4","19":"4","20":"5","21":"5","22":"6","23":"6","24":"7","25":"7","26":"8","27":"8","28":"9","29":"9","30":"10"};

function update() {
	var abilityvalue = event.target.value;
	var abilitymod = document.getElementById(event.target.id + "mod");
  var abilitySave = document.getElementById(event.target.id + "Save");
  var savemod = document.getElementById(event.target.id + "Savemod");
  var init = document.getElementById('Initiative');
  var prof = document.getElementById('ProficiencyBonus');
  var pp = document.getElementById('PassivePerception');
  if (abilitySave.checked == true) {
  abilitymod.value = scores[abilityvalue];
  savemod.value = parseInt(abilitymod.value) + parseInt(prof.value);
  } else if (scores[abilityvalue] != undefined) {
  abilitymod.value = scores[abilityvalue];
  savemod.value = abilitymod.value;
  } else {abilitymod.value = ""; savemod.value = "";}
  for (var i = 0; i < SkillArray.length; i++) {
  var skillmod = document.getElementById(SkillArray[i].id + "mod");
  var skillability = skillmod.name;
  if (SkillArray[i].checked == true) {
  skillmod.value = parseInt(document.getElementById(skillability + "mod").value) + parseInt(prof.value);
  } else if (document.getElementById(skillability + "mod").value == undefined) {
  skillmod.value = "";
  } else { skillmod.value = document.getElementById(skillability + "mod").value; }
  }
  init.value = document.getElementById('Dexteritymod').value;
  pp.value = parseInt(document.getElementById('Wisdommod').value) + 10;
}

function updatesaves() {
	var abilitymod = document.getElementById(event.target.id.slice(0, -4) + "mod");
	var savemod = document.getElementById(event.target.id + "mod");
  var prof = document.getElementById('ProficiencyBonus');
  if (event.target.checked == true) {
  savemod.value = parseInt(abilitymod.value) + parseInt(prof.value);
  } else {
  savemod.value = abilitymod.value;
  } 
}

function updateskills() {
	var skillmod = document.getElementById(event.target.id + "mod");
  var abilitymod = document.getElementById(skillmod.getAttribute("name") + "mod");
  if (event.target.checked == true) {
  skillmod.value = parseInt(abilitymod.value) + parseInt(prof.value);
  } else {
  skillmod.value = abilitymod.value;
  } 
}

for (var i = 0; i < AbilityArray.length; i++) {
	AbilityArray[i].addEventListener('change', update);
}

for (var i = 0; i < SaveArray.length; i++) {
	SaveArray[i].addEventListener('change', updatesaves);
}

for (var i = 0; i < SkillArray.length; i++) {
	SkillArray[i].addEventListener('change', updateskills);
}