function calcul_moyenne(){
    var n1= prompt("Donner la premiere note");
    var n2= prompt("Donner la deuxième note");
    var n3= prompt("Donner la troisième note");
    
    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("voici la somme "+somme+ "<br>");
    var moyenne= somme/3;

    document.write ("voici la moyenne "+moyenne+ "<br>");

    if (moyenne<10)
    document.write("vous êtes Redoublant");
    else if (moyenne<14)
    document.write("Vous êtes Admis Passable");
    else 
    document.write("Vous êtes Admis Bien");

}

    function test_age(){
        var age = prompt("Donner sont âge");
    
        if (age<18){
        document.write("<font size='8em' color 'black'> Vous êtes mineur");
        document.bgColor="red";
        }

        else {
        document.write("<font size='8em' color 'black'> Vous êtes majeur");
        document.bgColor="green";
        }
}

function simple_affichage(){
    var Name = prompt("Donner votre prénom");
    var FamillieName = prompt("Donner votre nom");

    document.write('<div style="margin:auto; width:50%; border:6px solide red;">');


    document.write("bonjour "+ Name +"    " +FamillieName);
    document.write("</div>")
}

function test_couleur(){
    var c = prompt("Donner une couleur");
    if(c == "rouge" || c == "ROUGE"){
        document.body.style.background = "red";
    }
    else if (c == "bleu" || c == "BLEU"){
        document.body.style.background = "blue";
    }
    else{
        document.write("couleur non comprise")
    }


}