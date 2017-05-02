Der Algorithmus iteriert über alle Elemente der gegebenen Permutation.
Da jedes Element mindestens ein 1er-Zykel bildet, folgt er bei jedem
Durchlauf dem vom Element gegebenen Zykel bis zum Ende, und markiert
alle besuchten Elemente als bekannt. Sollte sich der aktuelle Zykel
als länger als alle bisher bekannten herausstellen, wird er als der
neue längste Zykel gespeichert. Bei zukünftigen Iterationen werden dann
die bereits bekannten Elemente übersprungen, da der Zykel, dessen Teil
sie sind, bereits durchlaufen wurde. Dadurch bleibt die Laufzeit linear.