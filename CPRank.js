var code = "1459";
var it = document.getElementsByClassName("clickable");

console.log("Teams: "+(it.length-7));

for (var i=0;i<it.length;i++) {
  if (it[i].getAttribute("href") == "team.php?team=08-"+code) {
    console.log("We are place number "+(i-7)+"!");
  }
}
