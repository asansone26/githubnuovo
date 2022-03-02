// Funzione per stampare la data
function displayDate() {
    document.getElementById("demo").innerHTML = "<p>Current date and time: " + Date() + "</p>";
}

// funzione per la quale compare una frase in base all'orario
var d = new Date();
var time = d.getHours();
if (time < 10) {
    document.write("<b>Good morning</b>");

}
else if (time >= 10 && time < 16) {
    document.write("<b>Good day</b><br>");
}
else {
    document.write("<b>hello world!</b>");
}

// funzione per scelta singola
var semaforo = "rosso";
var azione = (semaforo == "rosso") ? "stop" : "avanti";
document.write(azione);
document.write("<br>");
// funzione SWITCH

var d = new Date();
var theDay = d.getDay;
switch (theDay) {
    case 5:
        document.write("<b>finally friday</b>");
        break;
    case 6:
        document.write("<b>super saturday</b>");
        break;
    case 0:
        document.write("<b>spleep sunday</b>");
        break;
    default:
        document.write("<b>i'm really looking forward to this weekend</b>");
        
}
document.write("<br>");

//ciclo FOR
for (i = 0; i <= 5; i++) {
    document.write("the number is " + i);
    document.write("<br />");
    
    

}
document.write("<br>");

// while

i = 0;
while (i <= 5) {
    document.write("the number is " + i);
    document.write("<br />");
    i++;
}
// parola chiave FUNCTION
function prodotto(a,b){
    return a*b;
}
var per= new Function ("a","b","return a*b;");
document.write(per(4,3));
document.write("<br>");
document.write(prodotto(4,3));

//ESEMPIO OGGETTO

var studenti= [
    {nome: "giovanni", cognome: "russo", età:10 },
    {nome: "patrizio", cognome: "bianchi", età:28 },
    {nome: "gennaro", cognome: "dicarlo", età:56 },
    



]
console.log(studenti[0])

studenti.push({nome: "gabriel", cognome: "verdi", età:89});

    





