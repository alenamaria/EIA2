var Memory;
(function (Memory) {
    /*Aufgabe: Aufgabe 2 - Memory
      Name: Alena Hurst
      Matrikel: 257742
      Datum: 19.04.18
    
      Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
      Dieser Code wurde zusammen mit Franziska Hei� und Sofia Gschwend erarbeitet.
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
    let openCards = 0;
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
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i]);
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
        cardField.addEventListener("click", clickHandler);
        // Verweis auf die Funktion clickHandler
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
    function createCard(_textDerAufDieKarteSoll) {
        let card = document.createElement("div");
        // div erzeugen
        card.innerHTML = `<div>${_textDerAufDieKarteSoll}</div>`;
        // innerHTML = setzt den Inhalt eines Elements auf einen Wert - hier mit span, denn innerHTML erwartet einen string
        // `` = string; $ = String + Variable + String (das hei�t, man f�gt den Wert einer Variable in einen String ein)
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
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
    function clickHandler(_event) {
        //Event-Handler
        let cardClass = _event.target;
        // Gibt das HTMLElement zurück, das den Event ausgel�st hat
        if (cardClass.classList.contains("card")) {
            // classList = gibt den Klassen Namen eines Elements zur�ck, es k�nnen CSS Klassen hinzugef�gt und zur�ckgesetzt werden (w3Schools)
            openCards++;
            // Counter
            if (cardClass.classList.contains("hidden")) {
                // Wenn das Element den Klassen-Namen "hidden" hat, dann
                cardClass.classList.remove("hidden");
                // Klassen-Namen "hidden" wird gel�scht
                cardClass.classList.add("visible");
            }
        }
        if (openCards == 2) {
            // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1500);
        }
        if (openCards > 2) {
            // es k�nnen nicht mehr als 2 Karten angeklickt werden, bzw. sie werden nicht "visible"
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }
    function filterCardsByClass(_filter) {
        return cardArray.filter(card => card.classList.contains(_filter));
        // gibt dem cardArray einen Filter mit, der nach der CSS-Klasse filtert
        // card (aus dem CSS-Dokument)
    }
    function cardsCompare() {
        // Funktion, die die aufgedeckten Karten vergleicht
        let openArray = filterCardsByClass("visible");
        // Definition des openArray, solle Funktion filterCardsByClass ausführen
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {
            // wenn das Kind des Arrays an der Stelle [0] und das Kind der Stelle [1] gleich sind, dann:
            for (let f = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");
                // "visible" wird entfernt
                openArray[f].classList.add("taken");
            }
        }
        else {
            // wenn die Kinder des Arrays nicht identisch sind, dann:
            for (let f = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");
                // "visible" wird entfernt
                openArray[f].classList.add("hidden");
            }
        }
        congratAlert();
        // Funktionsaufruf von congratAlert
        openArray = [];
        // leeres openArray
        openCards = 0;
        // openCards auf 0 setzen
    }
    function congratAlert() {
        // ohne R�ckgabewert
        let cardsTaken = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {
            // wenn alle Karten den Status "taken" haben, dann erscheint ein PopUp Fenster
            alert("Gl�ckwunsch!");
        }
        cardsTaken = [];
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Memory3.js.map