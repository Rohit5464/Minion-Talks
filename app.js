var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output");

var url="https://api.funtranslations.com/translate/minion.json"

function getUrl(text){
    return url + "?text=" + text
    
}


function clickHandler(){
    console.log("clicked")
    console.log(txtInput.value);
    fetch(getUrl(txtInput.value))
        .then(response => response.json())
        .then(json => {
            console.log(json)
            var tt = json.contents.translated;
            txtOutput.innerText = tt;
            }
        )
        console.log(txtOutput.innertext);
};

btnTranslate.addEventListener("click", clickHandler);
