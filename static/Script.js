// JavaScript For index


function myfnk() {
    var cats = new XMLHttpRequest();
    cats.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
    cats.onload = function() {
        var data = JSON.parse(cats.responseText);
        display(data);
    }
    cats.send();
}


function display(data) {
    var len = data.length;
    var string = ""

    for (i = 0; i < len; i++) {
        string += "name: " + data[i]['name'] + "<br>species: " + data[i]['species'] + "<br>";
        var lenL = data[i].foods.likes.length;
        var lenD = data[i].foods.dislikes.length;

        for (ii = 0; ii < lenD; ii++) {
            string += "Dislikes: " + data[i].foods.dislikes[ii] + "<br>"
        }
        for (iii = 0; iii < lenL; iii++) {
            string += "Likes: " + data[i].foods.likes[iii] + "<br>"
        }
        string += "<br><br>"
    }
    document.getElementById('demo').innerHTML = string;

    document.getElementById('btn').style.visibility = "hidden";
}