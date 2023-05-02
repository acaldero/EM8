Event Monitor (EM8)
===

    Event Monitor is a HTML5 application in order to help monitor 
    the basic conditions for a diabetic patient.
    
    Some features:
    A) Data can be exported to (or imported from) CSV file (comma-separated values).
    B) It can be used as a Web Application, 
       and as a smartPhone Application thanks to phonegap (apache cordova), 
       jquery mobile, mobiscroll, etc. 

    Steps to create the associate phonegap application for android:
    1) Create the phonegap project:
       + cordova create em8.github es.uc3m.inf.arcos.acaldero.em em
       + cd em8.github
       + cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
       + cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git
       + cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
       + cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
       + cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    2) Download the following files/directories from gitHub to em8.github/www/: 
       index.html css icons js extern
    3) Add android as target platform:
       + cordova platform add android
    4) Build the cordova/phonegap application:
       + cordova build
    5) Then copy the following file to your phone: em8.github/platforms/android/bin/em8-debug.apk
       Allow to install apps from "unknown sources" in your smartphone.
       Finally, please install the apk copied in the former step.
       
    The application is already in Google Play, 
    just ask em-testers@googlegroups.com for be part of the alpha-testers.
    Please keep in mind that this source code is still an alpha version (development version), 
    so it needs enough testing before be used in a production environment. 
    Help is welcome... :)

    Best regards,
    Alejandro Calderon Mateos
    http://www.arcos.inf.uc3m.es/~acaldero/
