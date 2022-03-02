function scambiotesto() {
    var x, y;

    x = document.getElementById("primo").innerHTML;
    y = document.getElementById("secondo").innerHTML;

    document.getElementById("primo").innerHTML = y;
    document.getElementById("secondo").innerHTML = x;
}