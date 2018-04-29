var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchButton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let studyPath = document.getElementById("select"); //Studiengang
        let matrikel = inputs[2].value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            studyPath: studyPath.value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L04_Interfaces.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        L04_Interfaces.studiSimpleArray.push(studi);
    }
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert �ber die Schl�ssel des assoziativen Arrays
        for (let matrikel in L04_Interfaces.studiHomoAssoc) {
            let studi = L04_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.studyPath + ", "; // Studiengang ausgeben nach refresh dr�cken
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
    }
    function search(_event) {
        let studyMatrikel = document.getElementById("matrikelNr");
        let output = document.getElementById("textarea2");
        output.value = "";
        for (let matrikel in L04_Interfaces.studiHomoAssoc) {
            let studi = L04_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            if (studyMatrikel.value == studi.matrikel.toString()) {
                line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre, ";
                line += studi.studyPath + ", ";
                line += studi.gender ? "(M)" : "(F)";
                output.value += line + "\n";
            }
            else {
                let result = "Kein weiteres Suchergebnis gefunden";
                output.value += result + "\n";
            }
        }
    }
    // zus�tzliche Konsolenausgaben zur Demonstration
    console.group("Simple Array");
    console.log(L04_Interfaces.studiSimpleArray);
    console.groupEnd();
    console.group("Associatives Array (Object)");
    console.log(L04_Interfaces.studiHomoAssoc);
    console.groupEnd();
})(L04_Interfaces || (L04_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map