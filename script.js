let pi = "";

fetch("pi.txt")
.then(response => response.text())
.then(data => {
    pi = data.trim();
    console.log("π loaded successfully.");
});

const button = document.getElementById("searchButton");

button.addEventListener("click", search);

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

    const position = pi.indexOf(word);

    if(position !== -1){
        result.innerHTML =
        "✅ Found!<br><br>Position: " + position;
    }else{
        result.innerHTML =
        "❌ Not Found";
    }

}