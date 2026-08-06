const pi =
"31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

const button = document.getElementById("searchButton");

button.addEventListener("click", search);

function search(){

    const word = document.getElementById("word").value.trim();
    const result = document.getElementById("result");

    if(word === ""){
        result.innerHTML = "Please enter digits.";
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