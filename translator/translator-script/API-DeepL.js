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
var param = "en";

/*
	Authentication key given in the specifications.
*/
var AUTH_KEY = "62c74291-aefc-4d82-bf49-929fceff2d23:fx";

/*	
	Since the specifications required for the website,
	to accept only English text, the source language is coded here,
	so that in the future, if required this could be easily changed.
*/
var SOURCE_LANG = "DE";
const lang = ["da", "en", "es", "fr", "it", "nl", "sv"];


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


/*
	Setup function for creating a request, designed as a module, according to DeepL API specifications.
*/
function setup(xmlHTMLRequest) {
	xmlHTMLRequest.open("POST", "https://api-free.deepl.com/v2/translate", true);

	xmlHTMLRequest.setRequestHeader("Accept", "*/*");
	xmlHTMLRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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
function translateText(target) {
  let xmlHTMLRequest = new XMLHttpRequest();
	setup(xmlHTMLRequest);
	
	//var target_language = document.getElementById("destination-language").value;
	var target_lang = 'es';
	var original_text = document.getElementById("original-text").value;
	
	original_text_lines = prepareText(original_text);
	
	// Makes a request with every line, as a new text to translate.
	var request = "";
	for(var i = 0; i < original_text_lines.length; i++) {
		request += "&text=" + original_text_lines[i];
	}
	
	xmlHTMLRequest.onload = function () {
		if (xmlHTMLRequest.readyState === xmlHTMLRequest.DONE) {
			if (xmlHTMLRequest.status === 200) {
				// Uses JSON to parse the response.
				var result = JSON.parse(xmlHTMLRequest.responseText);
				
				// Recreates the response as one text, which kept its original layout.
				var translated_text = "";
				for(var i = 0; i < result.translations.length; i++) {
					translated_text += result.translations[i].text;
					translated_text += "\n";
				}
		
				document.getElementById("result-" + target).value = translated_text;
        return translated_text;
			}
		}
	};
	
	// Send the request to the server for translation.
	xmlHTMLRequest.send("auth_key=" + AUTH_KEY + request + "&source_lang=" + SOURCE_LANG + "&target_lang=" + target);

};

function translateLoop(){
for (i = 0; i < lang.length; i++){
  console.log(lang[i]);
translateText(lang[i]);
}
}