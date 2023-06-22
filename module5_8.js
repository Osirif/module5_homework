let clans = new Map();
clans.set("Blood", "Tremer");
clans.set("Dark", "Lasombra");
clans.set("Power", "Ventrue");
console.log(clans.get(1));

for (let clan of clans.keys()){
    console.log(clan + " is " + clans.get(clan));
}