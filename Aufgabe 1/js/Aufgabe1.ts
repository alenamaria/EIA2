document.addEventListener('DOMContentLoaded', function() {
    var name : string;

    name = prompt("Hey, tell me what's your name!", "");
    document.getElementById("name").innerHTML += "Nice to meet you, " + name + "!";
})
