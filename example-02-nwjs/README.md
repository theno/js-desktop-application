# example-02-nwjs

Abschnitt: 'Beispielanwendung mit Angular, Bootstrap und NW.js'

Setup:

    > npm install -g nw


Anwendung starten:

    > nw .

Packaging:

    > npm install -g nw-builder
    > # possible: win32,win64,osx32,osx64,linux32,linux64
    > nwbuild --platforms linux64 .
    > ls -hal ./build
