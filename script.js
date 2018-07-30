var character = 'CharacterName,Level,Class,Race,PlayerName,ExperiencePoints,Alignment,Background,Strength,Dexterity,Constitution,Intelligence,Wisdom,Charisma'.split(',');
var locations = 'name,info,info,info,info,info,info,info,abilityscore,abilityscore,abilityscore,abilityscore,abilityscore,abilityscore'.split(',');
var loccount = 0;
for (var c in character) {
    var newField = document.createElement('input');
    newField.id = character[c];
    newField.classname = character[c];
    newField.placeholder = character[c];
    newField.name = character[c];
    var loc = locations[loccount];
    loccount++
    var elem = document.getElementById(loc);
    elem.appendChild(newField);
    }

function download(text, filename) {
var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);
element.style.display = 'none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
}

document.getElementById("button").addEventListener("click", function(){
var characterfinal = {};
for (var d in character) {
        prop = character[d];
    elem = document.getElementById(prop).value;
    characterfinal[prop] = elem;
}
var text = JSON.stringify(characterfinal, null, 2);
var filename = document.getElementById('CharacterName').value;
download(text, filename);
}, false);