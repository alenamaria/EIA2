namespace Aufgabe4 {

/*      Aufgabe: (Aufgabe 4 - Memory mit Interface)
		Name: (Alena Hurst)
		Matrikel: (257742)
		Datum: (04.05.2018)

		Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
		Dieser Code wurde zusammen mit Sofia Gschwend und Franziska erstellt.
*/

    window.addEventListener("load", main);

    // Interfaces bestimmen - eigentlich in seperatem Typescript,
    // funktioniert bei mir aber leider nicht, selbst wenn der namespace derselbe ist,
    // beide js-Dateien im .html verlinkt sind und �berall "export" davor steht...


    // Interface einer Karte bestimmen
    interface CardDeck {
        cardContent: string[];
        cardColor: string;
        cardFont: string;
        cardBatch: string;
    }

    let deck: CardDeck;

    interface CardPacket {
        [cardName: string]: CardDeck;
    };

    // Definieren der einzelnen Kartendecks
    let decks: CardPacket = {};
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
    // �ber den Namen "html-tags" wird das entsprechende deck aufgerufen

    // Interface der Spieleranzeige definieren
    interface Scoreboard {
        player: string;
        score: number;
    }

    let scoreboard: Scoreboard[] = [];

    //Variablen deklarieren

    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    let cardArray: HTMLElement[] = []; // HTMLElement = komplexer Datentyp

    let openCards: number = 0;
    let openArray: HTMLElement[] = []; // HTMLElement = komplexer Datentyp

    let checkContent: HTMLElement[] = []; // HTMLElement = komplexer Datentyp
    let stepperAmount: number = 1;

    let playerCounter: number = 1;
    let playerScore: number = 0;

    let playerInfo: HTMLElement; // HTMLElement = komplexer Datentyp
    let cardField: HTMLElement;

    // Event-Listener auf jeweiligen Elementen (Buttons, etc.)
    function main(): void {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("stepperinfo").addEventListener("change", createStepper);
    }

    // Spieler hinzuf�gen bei Klick auf Button
    function addPlayer(): void {
        if (playerCounter < 4) {
        // wenn die Anzahl der Spieler kleiner 4 ist, dann:
            let player: HTMLElement = document.createElement("input");
            // input-Feld erzeugen, mit folgenden Attributen:
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("class", "player");
            document.getElementById("names").appendChild(player);
            // �ber die Klasse wird das Input-Feld dem "player" hinzugef�gt
            playerCounter++;
            // playerCounter z�hlt eins hoch
        }
    }

    // Spieler entfernen bei KLick auf Button
    function removePlayer(): void {
        let allPlayer: NodeListOf<Element> = document.getElementsByClassName("player");
        let lastPlayer: HTMLInputElement = <HTMLInputElement>allPlayer[allPlayer.length - 1];
        lastPlayer.remove();
        playerCounter--;
        // playerCounter z�hlt eins runter
    }

    // Stepper erzeugen zur Auswahl der Anzahl an Kartenpaaren
    function createStepper(): void {
        if (stepperAmount == 1) {
        // wenn stepperAmount 1 entspricht, dann:
            let stepper: HTMLElement = document.createElement("input");
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
            // stepperAmount wird hochgez�hlt
        }

        else {
            stepperUpdate();
            // Funktionsaufruf von stepperUpdate
        }
    }

    function stepperUpdate(): void {
        document.getElementById("stepper").remove();
        // Der Stepper wird aktualisiert
        stepperAmount--;
        createStepper();
        // Funktionsaufruf von createStepper
    }

    //Karte initialisieren
    function createCard(_cardContent: string): void {
        let card: HTMLElement = document.createElement("div");
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

    function clickHandler (_event: MouseEvent): void {
        //Event-Handler
        let cardClass: HTMLElement = <HTMLElement>_event.target;
        // Gibt das HTMLElement zur�ck, das den Event ausgel�st hat
        if (cardClass.classList.contains("card")) {
        // classList = gibt den Klassen Namen eines Elements zurück, es k�nnen CSS Klassen hinzugef�gt und zur�ckgesetzt werden (w3Schools)
        openCards ++;
        // Counter
            if (cardClass.classList.contains("hidden")) {
            // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");
                // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible");
                // Klassen-Namen wird auf "visible" gesetzt
                openArray.push(cardClass);
                // wenn die Karten "visible" sind, dann werden sie in das openArray gepusht
            }

            else {
                openCards --;
            }
        }

        if (openCards == 2) {
            // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1500);
            // Timeout f�r 2000 ms bzw. 1,5 Sekunden
        }

        if (openCards > 2) {
            // es k�nnen nicht mehr als 2 Karten angeklickt werden, bzw. sie werden nicht "visible"
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }

    function cardsCompare(): void {
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
        // wenn die beiden Karten im openArray identisch sind, dann:
            for (let i: number = 0; i < 2; i++) {
            // Status "visible" wird zu "taken"
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("taken");
            }

            checkContent.splice(0, 2);
            // Karten werden aus dem checkContent entfernt
            // angefangen zu z�hlen innerhalb des Arrays bei Stelle 0, 2 = 2 Elemente werden entfernt
        }

        else {
        // Ansonsten wird der Status von "visible" auf "hidden" ge�ndert
            for (let i: number = 0; i < openArray.length; i++) {
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("hidden");
            }
        }

        congratAlert();
        // Funktionsaufruf von congratAlert

        openArray = [];
        openCards = 0;
    }

    function congratAlert(): void {
        if (checkContent.length == 0) {
        // wenn checkContent leer ist, dann:
            alert("Gl\u00fcckwunsch!");
        }
    }

    // Shuffle-Array
    function randomMix(_array: HTMLElement[]): HTMLElement[] {
    // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }

    // Funktion zum Anzeigen der Spielerinfo und des Memories
    function start(): void {
        document.getElementById("userinterface").style.display = "none";
        // Das Userinterface ist nicht mehr sichtbar
        document.getElementById("player-info").style.display = "block";
        document.getElementById("card-field").style.display = "block";

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let numPairs: number = parseInt((<HTMLInputElement>document.getElementById("stepper")).value);

        // Spieler Anzeige generieren
        for (let i: number = 0; i < playerCounter; i++) {
            let playerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("player-info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + playerScore + " Punkte";
        }

        //Karten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }

        //Aufruf des Shuffle Algorithmus
        randomMix(cardArray);

        for (let i: number = 0; i < cardArray.length; i++) {
            document.getElementById("card-div").appendChild(cardArray[i]);
        }

        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");

        
    }
}
