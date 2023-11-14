
function ajouterLigne(){
        var a= document.getElementById("t1").value;
        var b= document.getElementById("t2").value;
        if(a=="" || b=="")
            {alert("un ou 2 champs vide");}
        else if ((Number(b)<10) || (Number(b)>20))
            {alert("age invalide")}
        else
        {
            var table = document.getElementById("myTable");
            var newRow = table.insertRow(-1);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            cell1.innerHTML = document.getElementById("t1").value;
            cell2.innerHTML = document.getElementById("t2").value;
        }   
}
