$(document).ready(function(){
	$(".circles div").css("background-color", "white");
	$("#formSubmit").click(function(event){

		var a = $("#fname").val();
		var reg1 = /\b[(A-Z)]{1}[(a-z)]+/;
		var reg11 = /\B[^a-z]/;
		var reg12 = /[\s_\W]+/;
		var b = $("#lname").val();

		var c = $("#eMail").val();
		var reg2 = /[\w.]+@[(a-z).]+/;
		var reg21 = /[\s!#$%^&*]+/;

		var d = $("#mnumber").val();
		var reg3 = /[(6-9)][(0-9)]{9}\b/;

		var e = $("#message").val();

		if(a.length!=0 && (a.search(reg1)!=0 || a.search(reg11)>=1 || a.search(reg12)>=0)){
			event.preventDefault();
			document.getElementById("fname").focus();
			alert("First Name should have first letter capital followed by small letters.");
		}
		else{

			if(b.length!=0 && (b.search(reg1)!=0 || b.search(reg11)>=1 || b.search(reg12)>=0)){
				event.preventDefault();
				document.getElementById("lname").focus();
				alert("Last Name should have first letter capital followed by small letters.");
			}
			else{

				if(c.length!=0 && (c.search(reg2)!=0 || c.search(reg21)>=0)){
					event.preventDefault();
					document.getElementById("eMail").focus();
					alert("Email Address is not written in correct format.");
				}
				else{

					if(d.length!=0 && d.search(reg3)!=0){
						event.preventDefault();
						document.getElementById("mnumber").focus();
						alert("Mobile Number incorrect.");
					}
					else{

						if(a.length!=0 && b.length!=0 && c.length!=0 && d.length!=0 && e.length!=0){
							alert("Your message is sent successfully!!");
						};
					};
				};
			};
		};
	});
	$("#feedbackformSubmit").click(function(event){

		var a = $("#feedbackName").val();
		var reg1 = /[(A-Z)]{1}[(a-z)]+/;
		var reg11 = /[~!@#$%^&*?><\d]+/;

		var b = $("#feedbackEmail").val();
		var reg2 = /[\w.]+@[(a-z).]+/;
		var reg21 = /[\s!#$%^&*]+/;

		var c = $("#feedbackSugges").val();

		function bgcol(id){
			return document.getElementById(id).style.backgroundColor;
		}

		var cir1 = bgcol('circ1');
		var cir2 = bgcol('circ2');
		var cir3 = bgcol('circ3');
		var cir4 = bgcol('circ4');
		var cir5 = bgcol('circ5');
		var cir6 = bgcol('circ6');

		var cir11 = bgcol('circ11');
		var cir22 = bgcol('circ12');
		var cir33 = bgcol('circ13');
		var cir44 = bgcol('circ14');
		var cir55 = bgcol('circ15');
		var cir66 = bgcol('circ16');

		var cir111 = bgcol('circ111');
		var cir222 = bgcol('circ112');
		var cir333 = bgcol('circ113');
		var cir444 = bgcol('circ114');
		var cir555 = bgcol('circ115');
		var cir666 = bgcol('circ116');

		if(a.length==0){
			document.getElementById("feedbackName").focus();
			event.preventDefault();
		}
		else if(a.search(reg1)<0 || a.search(reg11)>=0){
			event.preventDefault();
			document.getElementById("feedbackName").focus();
			setTimeout(function() { 
				alert("Name should have first letter capital and should not have any special character or number."); 
			}, 700);
		}
		else{

			if(b.length==0){
				document.getElementById("feedbackEmail").focus();
				event.preventDefault();
			}
			else if(b.search(reg2)!=0 || b.search(reg21)>=0){
				event.preventDefault();
				document.getElementById("feedbackEmail").focus();
				setTimeout(function() { 
					alert("Email Address is not written in correct format."); 
				}, 700);
			}
			else{

				if(c.length==0){
					document.getElementById("feedbackSugges").focus();
					event.preventDefault();
				}
				else if(cir1=="white" && cir2=="white" && cir3=="white" && cir4=="white" && cir5=="white" && cir6=="white"){
					event.preventDefault();
					alert("Please rate the recommending section");
				}
				else{

					if(cir11=="white" && cir22=="white" && cir33=="white" && cir44=="white" && cir55=="white" && cir66=="white"){
						event.preventDefault();
						alert("Please rate the difficulty section");
					}
					else{

						if(cir111=="white" && cir222=="white" && cir333=="white" && cir444=="white" && cir555=="white" && cir666=="white"){
							event.preventDefault();
							alert("Please rate the look and feel section");
						}
						else{
							alert("Thanks for providing us feedback!!\nIt is very much valuable for us.");
						};
					};
				};
			};
		};
	});

	$(".1 div").click(function(){
		$(".1 div").css("background-color", "white");
		$(".1 div").css("color", "black");
		$(this).css("backgroundColor", "#5db5b2");
		$(this).css("color", "white");
	});

	$(".2 div").click(function(){
		$(".2 div").css("background-color", "white");
		$(".2 div").css("color", "black");
		$(this).css("backgroundColor", "#5db5b2");
		$(this).css("color", "white");
	});

	$(".3 div").click(function(){
		$(".3 div").css("background-color", "white");
		$(".3 div").css("color", "black");
		$(this).css("backgroundColor", "#5db5b2");
		$(this).css("color", "white");
	});
});