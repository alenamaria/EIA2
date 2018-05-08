var Aufgabe4;
(function (Aufgabe4) {
    /*      Aufgabe: (Aufgabe 4 - Memory mit Interface)
            Name: (Alena Hurst)
            Matrikel: (257742)
            Datum: (04.05.2018)
    
            Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
            Dieser Code wurde zusammen mit Sofia Gschwend und Franziska erstellt.
    */
    window.addEventListener("load", main);
    let deck;
    ;
    // Definieren der einzelnen Kartendecks
    let decks = {};
    deck = {
        cardContent: ["Blende", "ND-Filter", "Objektiv", "Brennweite", "Wei&szligabgleich", "Zoom", "Fokus", "Belichtungszeit", "Gain", "Linse"],
        cardColor: "red",
        cardFont: "sans-serif",
        cardBatch: "10"
    };
    decks["photography"] = deck;
    // �ber den Namen "photography" wird das entsprechende deck aufgerufen
    deck = {
        cardContent: ["Wien", "Furtwangen", "Florenz", "London", "Paris", "Prag", "Mailand", "Weimar", "Colmar", "Quedlinburg", "Freiburg", "Heidelberg", "Barcelona", "Oslo", "Stuttgart"],
        cardColor: "blue",
        cardFont: "sans-serif",
        cardBatch: "15"
    };
    decks["cities"] = deck;
    // �ber den Namen "cities" wird das entsprechende deck aufgerufen
    deck = {
        cardContent: ["select", "input", "datalist", "fieldset", "figcaption", "strong", "style", "span", "table", "textarea", "title", "article", "!DOCTYPE", "script", "button", "body", "meta", "html"],
        cardColor: "yellow",
        cardFont: "sans-serif",
        cardBatch: "18"
    };
    decks["html-tags"] = deck;
    let scoreboard = [];
    //Variablen deklarieren
    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    let cardArray = []; // HTMLElement = komplexer Datentyp
    let openCards = 0;
    let openArray = []; // HTMLElement = komplexer Datentyp
    let checkContent = []; // HTMLElement = komplexer Datentyp
    let stepperAmount = 1;
    let playerCounter = 1;
    let playerScore = 0;
    let playerInfo; // HTMLElement = komplexer Datentyp
    let cardField;
    // Event-Listener auf jeweiligen Elementen (Buttons, etc.)
    function main() {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("stepperinfo").addEventListener("change", createStepper);
    }
    // Spieler hinzuf�gen bei Klick auf Button
    function addPlayer() {
        if (playerCounter < 4) {
            // wenn die Anzahl der Spieler kleiner 4 ist, dann:
            let player = document.createElement("input");
            // input-Feld erzeugen, mit folgenden Attributen:
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("class", "player");
            document.getElementById("names").appendChild(player);
            // �ber die Klasse wird das Input-Feld dem "player" hinzugef�gt
            playerCounter++;
        }
    }
    // Spieler entfernen bei KLick auf Button
    function removePlayer() {
        let allPlayer = document.getElementsByClassName("player");
        let lastPlayer = allPlayer[allPlayer.length - 1];
        lastPlayer.remove();
        playerCounter--;
        // playerCounter z�hlt eins runter
    }
    // Stepper erzeugen zur Auswahl der Anzahl an Kartenpaaren
    function createStepper() {
        if (stepperAmount == 1) {
            // wenn stepperAmount 1 entspricht, dann:
            let stepper = document.createElement("input");
            // Erzeugen eines input-Elements mit den folgenden Eigenschaften:
            stepper.setAttribute("type", "number");
            stepper.setAttribute("value", "5");
            stepper.setAttribute("min", "5");
            stepper.setAttribute("max", decks[document.getElementsByTagName("select").item(0).value].cardBatch);
            // die maximale m�gliche Anzahl an Karten (unterschiedlich je Kartendeck) wird eingef�gt
            stepper.setAttribute("step", "1");
            stepper.setAttribute("id", "stepper");
            document.getElementById("stepperbox").appendChild(stepper);
            stepperAmount++;
        }
        else {
            stepperUpdate();
        }
    }
    function stepperUpdate() {
        document.getElementById("stepper").remove();
        // Der Stepper wird aktualisiert
        stepperAmount--;
        createStepper();
        // Funktionsaufruf von createStepper
    }
    //Karte initialisieren
    function createCard(_cardContent) {
        let card = document.createElement("div");
        // div erzeugen
        card.innerHTML = "<p>" + _cardContent + "</p>";
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut hinzuf�gen: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
        checkContent.push(card);
        // Alle Karten werden in checkContent-Array gepusht
        card.addEventListener("click", clickHandler);
    }
    function clickHandler(_event) {
        //Event-Handler
        let cardClass = _event.target;
        // Gibt das HTMLElement zur�ck, das den Event ausgel�st hat
        if (cardClass.classList.contains("card")) {
            // classList = gibt den Klassen Namen eines Elements zurück, es k�nnen CSS Klassen hinzugef�gt und zur�ckgesetzt werden (w3Schools)
            openCards++;
            // Counter
            if (cardClass.classList.contains("hidden")) {
                // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");
                // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible");
                // Klassen-Namen wird auf "visible" gesetzt
                openArray.push(cardClass);
            }
            else {
                openCards--;
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
    function cardsCompare() {
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
            // wenn die beiden Karten im openArray identisch sind, dann:
            for (let i = 0; i < 2; i++) {
                // Status "visible" wird zu "taken"
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("taken");
            }
            checkContent.splice(0, 2);
        }
        else {
            // Ansonsten wird der Status von "visible" auf "hidden" ge�ndert
            for (let i = 0; i < openArray.length; i++) {
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("hidden");
            }
        }
        congratAlert();
        // Funktionsaufruf von congratAlert
        openArray = [];
        openCards = 0;
    }
    function congratAlert() {
        if (checkContent.length == 0) {
            // wenn checkContent leer ist, dann:
            alert("Gl\u00fcckwunsch!");
        }
    }
    // Shuffle-Array
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }
    // Funktion zum Anzeigen der Spielerinfo und des Memories
    function start() {
        document.getElementById("userinterface").style.display = "none";
        // Das Userinterface ist nicht mehr sichtbar
        document.getElementById("player-info").style.display = "block";
        document.getElementById("card-field").style.display = "block";
        let inputs = document.getElementsByTagName("input");
        let numPairs = parseInt(document.getElementById("stepper").value);
        // Spieler Anzeige generieren
        for (let i = 0; i < playerCounter; i++) {
            let playerDiv = document.createElement("div");
            document.getElementById("player-info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + playerScore + " Punkte";
        }
        //Karten erzeugen
        for (let i = 0; i < numPairs; i++) {
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }
        //Aufruf des Shuffle Algorithmus
        randomMix(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            document.getElementById("card-div").appendChild(cardArray[i]);
        }
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4.js.map