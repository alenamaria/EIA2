namespace L04_Interfaces {
    // Struktur des heterogenen assoziativen Arrays als Datensatz für eine studierende Person
    export interface Studi {
        name: string;
        firstname: string;
        studyPath: string;          //Studiengang
        matrikel: number;
        age: number;
        gender: boolean;
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis { // Datentyp ist nur Studi => nur ein einziger Datentyp - homogenes assoziatives Array
         [matrikel: string]: Studi; // einzelne Studenten werden mit der Matrikelnummer als Schl�ssel gespeichert
    }

    // Simples Array zum Speichern der Studi-Datens�tze (nur zur Demonstration)
    export let studiSimpleArray: Studi[] = [];
    
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};
    
}