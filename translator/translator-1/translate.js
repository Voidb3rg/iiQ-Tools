//https://github.com/chriskonnertz/DeepLy???
var inputText = document.querySelector('#input');
var outputText = document.querySelector('#output_en');
var buttonTranslate = document.querySelector('#btn-translate');
var apiUrl = "https://api.funtranslations.com/translate/minion.json";

function errorHandle(error) { 
    // In case error occurs the errorHandle
    // function will be called
    alert('Error occurred')
    console.log("error occurred", error);
}

function clickHandler() {     
    // When someone clicks on translate
    // button clickHandler will be called
    var text = inputText.value;
    var updatedUrl = apiUrl + "?text=" + text;
    fetch(updatedUrl).then(response =>
    response.json()).then(json =>
    outputText.value = 
        (json.contents.translated)).catch(errorHandle);
}



//buttonTranslate.addEventListener("click", clickHandler); 
//Adding the event listener click

 const url = "https://api-free.deepl.com/v2/translate";

 const options = {
  headers: {
    Authorization: DeepL-Auth-Key 62c74291-aefc-4d82-bf49-929fceff2d23:fx,
	Content-Type: application/json
  }
};

/*fetch(url, options)
  .then( res => res.json() )
  .then( data => console.log(data) );*/