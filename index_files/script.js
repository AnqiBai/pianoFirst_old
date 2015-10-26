$(document).ready(function(){

  $('.white_key').hover(
    function(){
        $(this).addClass('active_white');
    },
    function(){
         $(this).removeClass('active_white');
    }
    );

    $('.black_key').hover(
    function(){
        $(this).addClass('active_black');
    },
    function(){
         $(this).removeClass('active_black');
    }
    );

    $('.key').click(
    function(){
        var name = jQuery(this).attr("id");
        alert(name);
    
       var audio = document.getElementById("audio"+ name);
       audio.play();
    });

    $('#A0').click(
    function(event){
        alert(event.target.id);
       var audio = document.getElementById("audioA0");
       audio.play();
    });
    $('#B0').click(
    function(){
       var audio = document.getElementById("audioB0");
       audio.play();
    });

    $('#C1').click(
    function(){
       var audio = document.getElementById("audioC1");
       audio.play();
    });
    $('#D1').click(
    function(){
       var audio = document.getElementById("audioD1");
       audio.play();
    });
    $('#E1').click(
    function(){
       var audio = document.getElementById("audioE1");
       audio.play();
    });
    $('#F1').click(
    function(){
       var audio = document.getElementById("audioF1");
       audio.play();
    });
    $('#G1').click(
    function(){
       var audio = document.getElementById("audioG1");
       audio.play();
    });
    $('#A1').click(
    function(){
       var audio = document.getElementById("audioA1");
       audio.play();
    });
    $('#B1').click(
    function(){
       var audio = document.getElementById("audioB1");
       audio.play();
    });

    $('#C2').click(
    function(){
       var audio = document.getElementById("audioC2");
       audio.play();
    });
    $('#D2').click(
    function(){
       var audio = document.getElementById("audioD2");
       audio.play();
    });
    $('#E2').click(
    function(){
       var audio = document.getElementById("audioE2");
       audio.play();
    });
    $('#F2').click(
    function(){
       var audio = document.getElementById("audioF2");
       audio.play();
    });
    $('#G2').click(
    function(){
       var audio = document.getElementById("audioG2");
       audio.play();
    });
    $('#A2').click(
    function(){
       var audio = document.getElementById("audioA2");
       audio.play();
    });
    $('#B2').click(
    function(){
       var audio = document.getElementById("audioB2");
       audio.play();
    });

    $('#C3').click(
    function(){
       var audio = document.getElementById("audioC3");
       audio.play();
    });
    $('#D3').click(
    function(){
       var audio = document.getElementById("audioD3");
       audio.play();
    });
    $('#E3').click(
    function(){
       var audio = document.getElementById("audioE3");
       audio.play();
    });
    $('#F3').click(
    function(){
       var audio = document.getElementById("audioF3");
       audio.play();
    });
    $('#G3').click(
    function(){
       var audio = document.getElementById("audioG3");
       audio.play();
    });
    $('#A3').click(
    function(){
       var audio = document.getElementById("audioA3");
       audio.play();
    });
    $('#B3').click(
    function(){
       var audio = document.getElementById("audioB3");
       audio.play();
    });

    $('#C4').click(
    function(){
       var audio = document.getElementById("audioC4");
       audio.play();
    });
    $('#D4').click(
    function(){
       var audio = document.getElementById("audioD4");
       audio.play();
    });
    $('#E4').click(
    function(){
       var audio = document.getElementById("audioE4");
       audio.play();
    });
    $('#F4').click(
    function(){
       var audio = document.getElementById("audioF4");
       audio.play();
    });
    $('#G4').click(
    function(){
       var audio = document.getElementById("audioG4");
       audio.play();
    });
    $('#A4').click(
    function(){
       var audio = document.getElementById("audioA4");
       audio.play();
    });
    $('#B4').click(
    function(){
       var audio = document.getElementById("audioB4");
       audio.play();
    });

    $('#C5').click(
    function(){
       var audio = document.getElementById("audioC5");
       audio.play();
    });
    $('#D5').click(
    function(){
       var audio = document.getElementById("audioD5");
       audio.play();
    });
    $('#E5').click(
    function(){
       var audio = document.getElementById("audioE5");
       audio.play();
    });
    $('#F5').click(
    function(){
       var audio = document.getElementById("audioF5");
       audio.play();
    });
    $('#G5').click(
    function(){
       var audio = document.getElementById("audioG5");
       audio.play();
    });
    $('#A5').click(
    function(){
       var audio = document.getElementById("audioA5");
       audio.play();
    });
    $('#B5').click(
    function(){
       var audio = document.getElementById("audioB5");
       audio.play();
    });

    $('#C6').click(
    function(){
       var audio = document.getElementById("audioC6");
       audio.play();
    });
    $('#D6').click(
    function(){
       var audio = document.getElementById("audioD6");
       audio.play();
    });
    $('#E6').click(
    function(){
       var audio = document.getElementById("audioE6");
       audio.play();
    });
    $('#F6').click(
    function(){
       var audio = document.getElementById("audioF6");
       audio.play();
    });
    $('#G6').click(
    function(){
       var audio = document.getElementById("audioG6");
       audio.play();
    });
    $('#A6').click(
    function(){
       var audio = document.getElementById("audioA6");
       audio.play();
    });
    $('#B6').click(
    function(){
       var audio = document.getElementById("audioB6");
       audio.play();
    });

    $('#C7').click(
    function(){
       var audio = document.getElementById("audioC7");
       audio.play();
    });
    $('#D7').click(
    function(){
       var audio = document.getElementById("audioD7");
       audio.play();
    });
    $('#E7').click(
    function(){
       var audio = document.getElementById("audioE7");
       audio.play();
    });
    $('#F7').click(
    function(){
       var audio = document.getElementById("audioF7");
       audio.play();
    });
    $('#G7').click(
    function(){
       var audio = document.getElementById("audioG7");
       audio.play();
    });
    $('#A7').click(
    function(){
       var audio = document.getElementById("audioA7");
       audio.play();
    });
    $('#B7').click(
    function(){
       var audio = document.getElementById("audioB7");
       audio.play();
    });

    $('#C8').click(
     function(){
       var audio = document.getElementById("audioC8");
       audio.play();
    });

    $('#Bb0').click(
     function(){
       var audio = document.getElementById("audioBb0");
       audio.play();
    });

    $('#Db1').click(
     function(){
       var audio = document.getElementById("audioDb1");
       audio.play();
    });
    $('#Eb1').click(
     function(){
       var audio = document.getElementById("audioEb1");
       audio.play();
    });
    $('#Gb1').click(
     function(){
       var audio = document.getElementById("audioGb1");
       audio.play();
    });
    $('#Ab1').click(
     function(){
       var audio = document.getElementById("audioAb1");
       audio.play();
    });
    $('#Bb1').click(
     function(){
       var audio = document.getElementById("audioBb1");
       audio.play();
    });

    $('#Db2').click(
     function(){
       var audio = document.getElementById("audioDb2");
       audio.play();
    });
    $('#Eb2').click(
     function(){
       var audio = document.getElementById("audioEb2");
       audio.play();
    });
    $('#Gb2').click(
     function(){
       var audio = document.getElementById("audioGb2");
       audio.play();
    });
    $('#Ab2').click(
     function(){
       var audio = document.getElementById("audioAb2");
       audio.play();
    });
    $('#Bb2').click(
     function(){
       var audio = document.getElementById("audioBb2");
       audio.play();
    });

    $('#Db3').click(
     function(){
       var audio = document.getElementById("audioDb3");
       audio.play();
    });
    $('#Eb3').click(
     function(){
       var audio = document.getElementById("audioEb3");
       audio.play();
    });
    $('#Gb3').click(
     function(){
       var audio = document.getElementById("audioGb3");
       audio.play();
    });
    $('#Ab3').click(
     function(){
       var audio = document.getElementById("audioAb3");
       audio.play();
    });
    $('#Bb3').click(
     function(){
       var audio = document.getElementById("audioBb3");
       audio.play();
    });

    $('#Db4').click(
     function(){
       var audio = document.getElementById("audioDb4");
       audio.play();
    });
    $('#Eb4').click(
     function(){
       var audio = document.getElementById("audioEb4");
       audio.play();
    });
    $('#Gb4').click(
     function(){
       var audio = document.getElementById("audioGb4");
       audio.play();
    });
    $('#Ab4').click(
     function(){
       var audio = document.getElementById("audioAb4");
       audio.play();
    });
    $('#Bb4').click(
     function(){
       var audio = document.getElementById("audioBb4");
       audio.play();
    });

    $('#Db5').click(
     function(){
       var audio = document.getElementById("audioDb5");
       audio.play();
    });
    $('#Eb5').click(
     function(){
       var audio = document.getElementById("audioEb5");
       audio.play();
    });
    $('#Gb5').click(
     function(){
       var audio = document.getElementById("audioGb5");
       audio.play();
    });
    $('#Ab5').click(
     function(){
       var audio = document.getElementById("audioAb5");
       audio.play();
    });
    $('#Bb5').click(
     function(){
       var audio = document.getElementById("audioBb5");
       audio.play();
    });



});