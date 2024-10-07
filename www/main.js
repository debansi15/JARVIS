$(document).ready(function () {
    

    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "bounceIn",
        },
        out:{
            effect: "bounceOut",
        },
    });

    //Siri configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 900,
        height: 300,
        style:"ios9",
        speed:"0.2",
        amplitude:"1.6",
        autostart:"true",
      });

      //siri message animation
      $('.siri-message').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "bounceIn",
        },
        out:{
            effect: "bounceOut",
        },
    });


    //mic button click event

    $("#MicBtn").click(function () { 
    Element.playAssistantSound
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
    });
});