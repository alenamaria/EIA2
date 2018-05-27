/*    
Aufgabe: Aufgabe 2 - Memory
Name: Alena Hurst
Matrikel: 257742
Datum: 25.05.18

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe6 {
    
    // Struktur des heterogenen assoziativen Arrays als Datensatz fÃ¼r eine studierende Person
    export interface Studi {
        name: string;
        firstname: string;
        studyPath: string;          
        matrikel: number;
        age: number;
        gender: boolean;
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis { 
    // Datentyp ist nur Studi => nur ein einziger Datentyp - homogenes assoziatives Array
        [matrikel: string]: Studi; 
        // einzelne Studenten werden mit der Matrikelnummer als Schlüssel gespeichert       
    }
    
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};
    
} 