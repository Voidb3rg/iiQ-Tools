/*
	Author: Alexandru Edward Balaj
	Date: 15/07/2021
	Project: Simple DeepL API Integration
	License: MIT License
	File name: API-DeepL.js
	File description: JavaScript algorithm that parses the input, sends it using the DeepL API, 
					  and then parses the output to display it.
*/

/*
	The aim of the algorithm design laid out here, 
	was to create a module oriented way,
	to help with futures updates and allow for easier error tracking.
*/

/*
	Authentication key given in the specifications.
*/
var AUTH_KEY = "62c74291-aefc-4d82-bf49-929fceff2d23:fx";

/*	
	Since the specifications required for the website,
	to accept only German text, the source language is coded here,
	so that in the future, if required this could be easily changed.
*/
var SOURCE_LANG = "DE";

/*
	Define target languages needed for the questionnaire.
*/
const lang = ["DA", "EN-GB", "ES", "FR", "IT", "NL", "SV"];

/* 	
	According to XMLHttpRequest specifications, when the request is done,
	it returns a code ("4"), and when the status of the request is ok,
	it returns another code ("200");
*/
var READYSTATE_DONE = 4;
var STATUS_OK = 200;

/* 	
	Creates an xmlHttpRequest object as soon as the page has loaded.
*/
var xmlHTMLRequest = new XMLHttpRequest();

var result = [];

const response = Object.create(lang);

/*
	Setup function for creating a request, designed as a module, according to DeepL API specifications.
*/

function setup() {
  xmlHTMLRequest.open("POST", "https://api-free.deepl.com/v2/translate", true);

  xmlHTMLRequest.setRequestHeader("Accept", "*/*");
  xmlHTMLRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  // xmlHTMLRequest.setRequestHeader("User-Agent", "DeepL API Implementation");
  // xmlHTMLRequest.setRequestHeader("Content-Length", null);
}

/*
	Prepare text function used to parse, or arrange text, designed as a module.
	Currently it splits all text whenever a newline ("\n") is met, 
	so that it preserves the original layout of the text,
	which would have otherwise been lost because of the way DeepL accepts multiple sentences.
*/
function prepareText(original_text) {
  return original_text.split("\n");
}

/*
	Translate text function which uses all the other modules, in order to create a request,
	which is sent to the DeepL API to translate, and then display the result, designed as a module.
*/
async function translateText() {
  setup();

  let target_language =  "en" //document.getElementById("destination-language").value;

  let original_text = document.getElementById("original-text").value;

  let original_text_lines = prepareText(original_text);

  // Makes a request with every line, as a new text to translate.
  let request = "";
  for (let i = 0; i < original_text_lines.length; i++) {
    request += "&text=" + original_text_lines[i];
  }

  xmlHTMLRequest.onload = function () {
    if (xmlHTMLRequest.readyState === xmlHTMLRequest.DONE) {
      if (xmlHTMLRequest.status === 200) {
        // Uses JSON to parse the response.
        let result = JSON.parse(xmlHTMLRequest.responseText);

        // Recreates the response as one text, which kept its original layout.
        let translated_text = "";
        for (let i = 0; i < result.translations.length; i++) {
          translated_text += result.translations[i].text;
          translated_text += "\n";
        }
        document.getElementById("result-en").value = translated_text;
        //document.getElementById("translated-text").value = translated_text;
      }
    }
  };

  // Send the request to the server for translation.
  xmlHTMLRequest.send(
    "auth_key=" +
      AUTH_KEY +
      request +
      "&source_lang=" +
      SOURCE_LANG +
      "&target_lang=" +
      target_language
  );
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

async function translate() {
  let original = document.getElementById("original-text").value;

  //prepareText(original_text);
  let translated_text;
  var translated_string;

  for (i = 0; i < lang.length; i++) {
    setup();
    console.log(lang[i]);
    let request = "&text=" + original;

    xmlHTMLRequest.onload = function () {
      if (xmlHTMLRequest.readyState === xmlHTMLRequest.DONE) {
        if (xmlHTMLRequest.status === 200) {
          // Uses JSON to parse the response.
          let result = JSON.parse(xmlHTMLRequest.responseText);

          // Recreates the response as one text, which kept its original layout.
          translated_text = "";
          for (let i = 0; i < result.translations.length; i++) {
            translated_text += result.translations[i].text;
            translated_text += "\n";
            translated_string = translated_text;
            console.log("translated_string: " + translated_string);
            console.log("translated_text: " + translated_text);
          }

          //document.getElementById("result-" + lang[i]).value = translated_text;
        }
      }
    };
    test = xmlHTMLRequest.send(
      "auth_key=" +
        AUTH_KEY +
        request +
        "&source_lang=DE" +
        "&target_lang=" +
        lang[i]);
        debugger;


    console.log(lang[i] + ": " + translated_string);
    result.push({
      language: lang[i],
      result: translated_string,
    });
    
    //console.log(result.language);
    //code before the pause
    //sleep(2000);
  }
}
