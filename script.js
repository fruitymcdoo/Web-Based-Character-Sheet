var character = {
    CharacterName: ["CharacterName", "input", "false", "", "info", "Character Name"],
    Class: ["Class", "input", "false", "", "info", "Class"],
    Level: ["Level", "input", "false", "", "info", "Level"],
    Background: ["Background", "input", "false", "", "info", "Background"],
    PlayerName: ["PlayerName", "input", "false", "", "info", "Player Name"],
    Race: ["Race", "input", "false", "", "info", "Race"],
    Alignment: ["Alignment", "input", "false", "", "info", "Alignment"],
    ExperiencePoints: ["ExperiencePoints", "input", "false", "", "info", "Experience Points"],
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
    HitPointMaximum: ["HitPointMaximum", "input", "false", "", "hp", "Hit Point Maximum"],
    CurrentHitPoints: ["CurrentHitPoints", "input", "false", "", "hp", "Current Hit Points"],
    TemporaryHitPoints: ["TemporaryHitPoints", "input", "false", "", "hp", "Temporary Hit Points"],
    TotalHitDice: ["TotalHitDice", "input", "false", "", "hp", "Total Hit Dice"],
    HitDice: ["HitDice", "input", "false", "", "hp", "Hit Dice"],
    dssuccess1: ["dssuccess1", "checkbox", "false", "", "deathsaves", ""],
    dssuccess2: ["dssuccess2", "checkbox", "false", "", "deathsaves", ""],
    dssuccess3: ["dssuccess3", "checkbox", "false", "", "deathsaves", ""],
    dsfailure1: ["dsfailure1", "checkbox", "false", "", "deathsaves", ""],
    dsfailure2: ["dsfailure2", "checkbox", "false", "", "deathsaves", ""],
    dsfailure3: ["dsfailure3", "checkbox", "false", "", "deathsaves", ""],
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
var fieldname = character[nextkey][0];
var fieldtype = character[nextkey][1];
var fieldmod = character[nextkey][2];
var fieldability = character[nextkey][3];
var fieldlocation = character[nextkey][4];
var fieldlabel = character[nextkey][5];
var location = document.getElementById(fieldlocation);
if (fieldtype == 'textarea'){var newField = document.createElement(fieldtype);} else {var newField = document.createElement('input');}
var newDiv = document.createElement(fieldname + "Div");
newDiv.classList.add(fieldname, fieldtype, fieldmod, fieldlocation, "div")
location.appendChild(newDiv);
var newLabel = document.createElement("label");
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