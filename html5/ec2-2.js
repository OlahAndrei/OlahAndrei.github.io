document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.15.2";
function t_ec2()
{

function citire()
{
	var _a= document.getElementById("id_a").value;
	var _b= document.getElementById("id_b").value;
	var _c= document.getElementById("id_c").value;
	
	var coeficienti = {a:_a,b:_b,c:_c};
	
	return coeficienti;
}
function rezolvare()
{
	var delta= coeficienti.b*coeficienti.b-4*coeficienti.a*coeficienti.c;
	var x1_re,x2_re,x1_im,x2_im;
	if(delta>= 0){;
		 x1 = (-coeficienti.b + Math.sqrt(delta))/(2*coeficienti.a);
		 x1 = (-coeficienti.b - Math.sqrt(delta))/(2*coeficienti.a);
		 x1_im=x2_im=0;
	}
	else{
		x1_re= -coeficienti.b/(2*coeficienti.a);
		x1_im=Math.sqrt(-delta))/(2*coeficienti.a);
		x2_re= -coeficienti.b/(2*coeficienti.a);
		x2_im=-Math.sqrt(-delta))/(2*coeficienti.a);
	}
var x1 ={re:x1_re,im:x1_im}
var x2 ={re:x2_re,im:x2_im}
var solutii{x1:x1,x2:x2}

return solutii;
}
function afisare()
{
	document.getElementById("id_x1").innerHTML = solutii.x1_re+ "+" +solutii.x1_im + "i";
	document.getElementById("id_x2").innerHTML = solutii.x2_re+ "+" +solutii.x2_im + "i";
}
}

function rezolva()
{
	var ec2 = new t_ec2();
	
	ec2.citire();
	ec2.rezolvare();
	ec2.afisare():
	
	
}