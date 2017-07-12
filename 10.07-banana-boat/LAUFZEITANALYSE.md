# Laufzeitanalyse der Bananenboote

Der gegebene Algorithmus läuft in O(|V|^3)-Zeit.

Der erste Schritt der `distributeBoats`-Funktion ist das Berechnen eines Schrittes der Transitiven Hülle der Kantenrelation des Graphens über die `transHullOneStep`-Funktion.

Dabei wird optional einmal das Input-Array auf Symmetrie geprüft, was in quadratischer Zeit passiert. Da das prüfen sehr billig (und vorallem optional) ist, wird es hier nicht gezählt. Anschließend wird das Input-Array einmal kopiert, was hier aber ebenfalls nicht gezählt wird, da es auch sehr günstig ist.

Nun passiert die eigentliche Berechnung. Hier wird für jede Zeile zwei genestete `for`-Loops ausgeführt. Der äußere Loop läuft einmal für alle unverbundenen Zielknoten (A hat keine Verbindung zu B), der innere läuft einmal für alle verbundenen Zielknoten (A hat Verbindung zu C). Im schlechtesten Fall ist die jeweilige Kreuzung mit ca. der Hälfte der anderen Kreuzungen verbunden. Dann ergibt sich daraus für die inneren beiden Loops eine Laufzeit von (|V|/2)*(|V|/2)=(|V|^2/4) ∈ O(|V|^2).
Im erwarteten Fall, dass jede Kreuzung mit 3-4 Knoten verbunden ist, reduziert sich die Laufzeit der inneren beiden Loops auf O(|V|). Dies liegt daran, dass jetzt nur der innerste Loop |V|-mal ausgeführt wird, der äußere aber nur 3-4x, und damit konstante Zeit hat.

Ist die transitive Hülle berechnet, werden die Boote verteilt. Dafür wird nun auf jedes Element der oberen Dreiecksmatrix (die Straße) ein Boot verteilt. Gibt es mehr Boote als Straßen, wird ein Fehler ausgegeben. Die Verteilung läuft in O(|V|^2) Zeit.

Die Gesamtkomplexität ist damit bei |V|^3 + |V|^2 ∈ O(|V|^3) im schlechtesten Fall. Im Erwartungsfall reduziert sich die Laufzeit auf O(|V|^2).