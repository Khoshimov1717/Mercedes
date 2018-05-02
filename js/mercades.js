console.log("Otabek")

$(document).ready(function(){
    
    console.log('asdasds')
    
    /*ACTIVE HOVER*/
    
    $(".right a").click(function(){
        $(".right a").removeClass('active');
        $(this).addClass('active')
    });
    
    $(".sidenav a").click(function(){
        $(".sidenav a").removeClass('active2');
        $(this).addClass('active2')
    });
    
    $(".mercades-menu ul li").click(function(){
        $(".mercades-menu ul li").removeClass('active3');
        $(this).addClass('active3')
    });

    
    /*SEDAN*/
    
    $("#s").click(function(){
        $("#maybach,#coupe,#amggtr").slideUp("slow");
        $("#sedan").slideDown("slow");
    });
    
    $("#sedan-in").click(function(){
		$("#sedan_2").slideUp("slow");
		$("#sedan_3").slideUp("slow");
		$("#sedan_1").slideDown("slow");
	});

	$("#sedan-de").click(function(){
		$("#sedan_3").slideUp("slow");
		$("#sedan_1").slideUp("slow");
		$("#sedan_2").slideDown("slow");
	});

	$("#sedan-pr").click(function(){
		$("#sedan_1").slideUp("slow");
		$("#sedan_2").slideUp("slow");
		$("#sedan_3").slideDown("slow");
	});
    
    /*MAYBACH*/
    
    $("#m").click(function(){
        $("#sedan,#coupe,#amggtr").slideUp("slow");
        $("#maybach").slideDown("slow");
    });
    
    $("#maybach-in").click(function(){
		$("#maybach_2").slideUp("slow");
		$("#maybach_3").slideUp("slow");
		$("#maybach_1").slideDown("slow");
	});

	$("#maybach-de").click(function(){
		$("#maybach_3").slideUp("slow");
		$("#maybach_1").slideUp("slow");
		$("#maybach_2").slideDown("slow");
	});

	$("#maybach-pr").click(function(){
		$("#maybach_1").slideUp("slow");
		$("#maybach_2").slideUp("slow");
		$("#maybach_3").slideDown("slow");
	});
    
    /*CLA Coupe*/
    
    $("#c").click(function(){
        $("#sedan,#maybach,#amggtr").slideUp("slow");
        $("#coupe").slideDown("slow");
    });
    
    $("#coupe-in").click(function(){
		$("#coupe_2").slideUp("slow");
		$("#coupe_3").slideUp("slow");
		$("#coupe_1").slideDown("slow");
	});

	$("#coupe-de").click(function(){
		$("#coupe_3").slideUp("slow");
		$("#coupe_1").slideUp("slow");
		$("#coupe_2").slideDown("slow");
	});

	$("#coupe-pr").click(function(){
		$("#coupe_1").slideUp("slow");
		$("#coupe_2").slideUp("slow");
		$("#coupe_3").slideDown("slow");
	});
    
    /*AMG GTR Coupe*/
    
    $("#a").click(function(){
        $("#sedan,#maybach,#coupe").slideUp("slow");
        $("#amggtr").slideDown("slow");
    });
    
    $("#amggtr-in").click(function(){
		$("#amggtr_2").slideUp("slow");
		$("#amggtr_3").slideUp("slow");
		$("#amggtr_1").slideDown("slow");
	});

	$("#amggtr-de").click(function(){
		$("#amggtr_3").slideUp("slow");
		$("#amggtr_1").slideUp("slow");
		$("#amggtr_2").slideDown("slow");
	});

	$("#amggtr-pr").click(function(){
		$("#amggtr_1").slideUp("slow");
		$("#amggtr_2").slideUp("slow");
		$("#amggtr_3").slideDown("slow");
	});
    
});