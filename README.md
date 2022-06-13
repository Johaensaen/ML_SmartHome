## ML_02_smarthome

Dokumentation

# Ziel 

Dieses Projekt ist ein Prototyp der eine Interaktionsmöglichkeit mit seiner Hand im Hauhalt ermöglicht.
Durch verschiedene Gesten werden bestimmte Aktionen ausgelöst.
Es gibt drei verschiedene Zeichen:

- Hand offen 
- Hand geschlossen und
- Finger strecken

# Setup:

Zuerst muss man die Repository Runterladen, danach müssen wir alle Packages Installieren dies tun wir mit ``` NPM i ```.
Wenn alles Installiert ist können sie das Programm starten mit ``` NPM start ```.

Sie sollten nun weiter auf den Browser ihrer Wahl gelangen und kurz warten bis das Model fertig geladen hat.
Wenn Sie ihre Kamera freigegeben haben können sie sich nun selber im Browser sehen, wenn sie einer der Gesten vor der Kamera machen sollten diese Angezeigt werden.
In dem Prototypen werden können sie mit den Gesten das Video steuern.

# Code

Der Code besteht aus drei verschiedenen Komponenten die Kamera, das Model und das Video

Die function startVideo() reguliert die Kamera, es überprüft ob eine Kamera freigegeben wurde um das Video abzuspielen.
Wenn eine Kamera nciht zurverfügung steht meldet sich es und sagt das es keine Kamera finden kann und die bitte angeschaltet werden soll.

Die function runDetection() überprüft was das Ergebniss von der Kamera ist, dies bedeutet wenn in der Kamera ein Zeichen erkannt wird, wird es unter
der Variabel element.label gespeichert. Daraufhin bestimmt das Programm was zu tun ist in den If- Schleifen.

Die function toggle Video() ist nur für das Video zuständig um die Kamera an und aus zu machen.

Um das Projekt zu vervollständigen müssen Sie nur noch ihre gewünschte API hinzugeben und dies in die Gestenaktionen einbinden.

