var Memory;
(function (Memory) {
    /*Aufgabe: Aufgabe 2 - Memory
      Name: Alena Hurst
      Matrikel: 257742
      Datum: 17.04.18
      Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
      Dieser Code wurde in Zusammenarbeit mit Abreitsgruppe Grün und unter Anleitung von Melvin B erstellt.
      */
    document.addEventListener("DOMContentLoaded", main);
    // Variablen deklarieren
    let cardContent = ["Panda", "Koala", "Tiger", "Wolf", "Hase", "Reh", "Katze", "Hund", "Esel", "Igel"];
    let cardArray = [];
    // leeres Array, in das die für das Spiel benötigten Karten als divs hineingespeichert werden
    let numPairs;
    let numPlayers;
    let playerInfo; // HTMLElement = komplexer Datentyp
    let cardField;
    let score = 0; // 0 = Platzhalter
    let name = "Spieler ";
    function main() {
        // Funktionsaufruf
        cardPairs();
        // Funktionsaufruf
        numsPlayer();
        // DOM abhängige Varaiblen deklarieren
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        // Spielkarten erzeugen
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
        }
        // benötigte Karten mischen - Funktionsaufruf
        randomMix(cardArray);
        // Karten dem Spielbrett hinzufügen
        for (let i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
        // Spieler Anzeige generieren
        for (let i = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
        }
    }
    function cardPairs() {
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10); // 10 = Dezimales Zahlensystem
        if (numPairs < 5 || numPairs > 10) {
            cardPairs();
        }
    }
    function numsPlayer() {
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            numsPlayer();
        }
    }
    function createCard(_textDerAufDieKarteSoll, _state) {
        let card = document.createElement("div");
        // div erzeugen
        card.innerText = _textDerAufDieKarteSoll;
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten, die durch ".push" hinzugefügt werden
    }
    function createPlayer(_score, _name) {
        let player = document.createElement("div");
        let scoreField = document.createElement("div");
        // Umwandeln einer number in string
        let n = _score.toString();
        player.innerText = _name;
        // deshalb ist scoreField = n
        scoreField.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(scoreField);
    }
    // Shuffle Arrays
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }
    // Zufallsgenerator als eigene funktion 
    function randomState() {
        let randomState = Math.random();
        // zufällige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte den Status: "hidden" hat
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl größer als 0,5 und kleiner gleich 0,75 - dann Status: "taken"
            return "taken";
        }
        else if (randomState > .75) {
            // oder wenn: Wenn Zahl größer als 0,75 - dann Status: "visible"
            return "visible";
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Memory3.js.map