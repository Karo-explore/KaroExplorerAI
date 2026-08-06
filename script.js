let pi = "";

fetch("pi.txt")
.then(response => response.text())
.then(data => {
    pi = data.trim();
    console.log("Version 0.6 Loaded!");
});

const button = document.getElementById("searchButton");

button.addEventListener("click", search);

document.getElementById("word").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        search();
    }
});

function search(){

    const word = document.getElementById("word").value.trim();
    const result = document.getElementById("result");

    if(word === ""){
        result.innerHTML = "Please enter digits.";
        return;
    }

    if(pi === ""){
        result.innerHTML = "⏳ π is still loading...";
        return;
    }

    const startTime = performance.now();

    const position = pi.indexOf(word);

    const endTime = performance.now();
    const searchTime = (endTime - startTime).toFixed(2);

    if(position !== -1){
        result.innerHTML =
        "🚀 Found!<br><br>" +
        "Position: " + position +
        "<br><br>Search time: " + searchTime + " ms";
    }else{
        result.innerHTML =
        "❌ Not Found" +
        "<br><br>Search time: " + searchTime + " ms";
    }

}