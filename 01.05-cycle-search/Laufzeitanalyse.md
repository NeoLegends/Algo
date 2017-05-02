Elementare Operation: Lesender / schreibender Arrayzugriff

Äußerer Loop geht über alle Elemente / Kosten für jedes Element angegeben
- Fall: Start / Element ist noch unbekannt
    - +1: Prüfen, ob schon gesehen (-> nein)
    - +2: Länge wird inkrementiert, Element als bekannt markiert, zum nächsten gegangen
        - Nächtes Element ist bekannt (= 1er Zyklus auf sich selbst oder Zyklenende)
            - +1: Prüfen, ob schon gesehen (-> ja)
            - ENDE: Kosten: 4
        - Nächstes Element ist unbekannt (= Zyklus geht weiter)
            - ... Kosten für nächste Elemente bestimmen (wie hier angegeben), bei
              Zyklenende wird bekanntes Element wieder getroffen
            - +1: Ankommen bei aktuellem Element und prüfen, ob schon gesehen (-> ja)
            - ENDE: Kosten 4
- Fall: Element ist bekannt
    - +1 Prüfen, ob schon gesehen (-> ja)
    - ENDE: Kosten 4, da Element nur bekannt sein kann, wenn es vorher mit Kosten 3
      markiert wurde

Gesamte Laufzeit: 4n -> O(n)

Da es keine Sprunganweisungen innerhalb der Schleifen gibt, ist 4 die
untere als auch die obere Grenze für Groß-Theta, und n0 = 1