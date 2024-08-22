/*============== JQuery ==============*/

$(document).ready(function(){
	 // ex1
    $('#btn1').on('click', function(){
      alert("hellow");
    });
	// ex2
    $('#btns').on('click', function(){
       $('#lorem1').show();
    });
     $('#btnh').on('click', function(){
       $('#lorem1').hide();
    });
     //ex3
     $('p').on('click',function(){
     	$(this).hide();
     })
     //ex4
         $('#btnfo').on('click', function(){
       $('#lorem2').fadeOut();
    });
     $('#btnfi').on('click', function(){
       $('#lorem2').fadeIn();
    });
         $('#btnft').on('click', function(){
       $('#lorem2').fadeToggle();
    });
     // ex5
    $('#btnh1').on('dblclick', function(){
        $('#lorem3').hide();
    });
         // ex6
    $('#btnh_mouseover').on('mouseover', function(){
        $('#lorem4').hide();
    });
    // ex7
     $('#toggle_btn').on('click', function(){
        $('#toggle_text').toggle();
    });

    // ex8
    $('#toggle_btn_dbl').on('dblclick', function(){
        $('#toggle_text_dbl').toggle();
    });

    // ex9
    $('#toggle_btn_mouseover').on('mouseover', function(){
        $('#toggle_text_mouseover').toggle();
    });
    // ex10
    $("#fadeInFast_btn").on("click", function(){
        $("#fadeInFast").fadeIn('fast');
    });

})