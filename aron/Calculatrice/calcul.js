function addition(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)+Number(b);

    t3.value = c;
}
function soustraction(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)-Number(b);

    t3.value = c;
}
function division(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)/Number(b);

    t3.value = c;
}
function multiplication(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)*Number(b);

    t3.value = c;

}

function parite(){
    var a =document.getElementById("t1").value;
    var b =document.getElementById("t2").value;
    var c = Number(a)+Number(b);
    var d = Number(c)%"2";

    t4.value= d;

    if (d== 1)
    t4.value = "Nombre IMPAIR";
    else {
     t4.value = "NOMBRE PAIR";
    }

}
function permuter(){
    var v3 = "";
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    v3=  a;
    a = b;
    b = v3;
    t1.value= a
    t2.value= b
}