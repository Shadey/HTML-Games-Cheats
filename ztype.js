setInterval(function(){
  var ents = ig.game.entities;
  var player = ents[0];
  var npcs = ents.slice(1);
  npcs.forEach(function(npc){
    npc.word.split("").forEach(function(){
      player.shoot(npc);
    })
  })
},3000);
