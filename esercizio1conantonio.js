var Data= new Date(); //nuova data
var Anno= Data.getFullYear(); //anno corrente
console.log(Anno);
var Datanascitapersona= prompt("inserisci il tuo anno di nascita");
var Etapersona= (Anno-Datanascitapersona);
var Annimancanti= (100-Etapersona);
document.write(`<p>la tua età attuale è: ${Etapersona} </p>`);
document.write(`<p> gli anni che mancano sono: ${Annimancanti} </p>`);