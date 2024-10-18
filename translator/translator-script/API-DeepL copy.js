const AUTH_KEY = "62c74291-aefc-4d82-bf49-929fceff2d23:fx";
const SOURCE_LANG = "DE";
var READYSTATE_DONE = 4;
var STATUS_OK = 200;

var XMLHttpRequestObjects= new Array();

/* POST /v2/translate HTTP/2
Host: api.deepl.com
Authorization: DeepL-Auth-Key [yourAuthKey] 
User-Agent: YourApp/1.2.3
Content-Length: 45
Content-Type: application/json

{"text":["Hello, world!"],"target_lang":"DE"} */


//CREATING MULTIPLE XMLHTTPREQUEST OBJECTS FOR EACH CALL
//THIS WILL HELP YOU NOT JAM YOUR SERVER WITH MULTIPLE REQUESTS AT ONCE.
function getXML(){

  if(window.XMLHttpRequest)
    {
    
    XMLHttpRequestObjects.push(new XMLHttpRequest());
    
    }
    
    else if(window.ActiveXObject)
    {
    XMLHttpRequestObjects.push(new ActiveXObject(“Microsoft.XMLHTTP”));
    }
    
    index = XMLHttpRequestObjects.length;
    
    }






//IRRELEVENT CODE TO DISPLAY HOW TO USE THE REQUEST OBJECT

function translate(dataSource, divID, data)
{
getXML();
if(XMLHttpRequestObject[index])
{
obj = document.getElementById(divID);
obj.innerHTML = “Loading…”;
XMLHttpRequestObject[index].open(“POST”, dataSource);
XMLHttpRequestObject[index].setRequestHeader(‘Content-Type’ , ‘application/x-www-form-urlencoded’);

XMLHttpRequestObject[index].onreadystatechange = function()
{

if (XMLHttpRequestObject[index].readyState == 4 && XMLHttpRequestObject[indexXML].status == 200)
{
var myXML = XMLHttpRequestObject[index].responseXML; //XML Result

}
}

XMLHttpRequestObject[indexXML].send(“data=” + data);
}

}

//END OF IRRELEVENT CODE