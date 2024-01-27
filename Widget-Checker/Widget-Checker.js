// ==UserScript==
// @name     Widget-Checker
// @include  *
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant    GM_addStyle
// @exclude  https://www.google.com/*
// @exclude  https://app.iiq-check.de/*
// @version 0.1.1
// ==/UserScript==
/*- The @grant directive is needed to work around a design change
    introduced in GM 1.0.   It restores the sandbox.
*/
$("body").append ('<div id="Widget_Check"></div>');

checkWordCount ();  //-- Initial run, works for static HTML only.

//--- Check for AJAX loaded words... Over twice a sec is plenty fast.
var widgetChkTimer = setInterval (checkWordCount, 1000);

function checkWordCount () {
    var matchRez    = document.querySelectorAll('[id^=iiqcheck_widget_iframe]');
    //--- Display results to the user.
  if (matchRez === undefined){
   var output = "Suche...";
  }
  else if (matchRez.length == 0){
   var output = "Widget (noch) nicht gefunden!";
  }
  else if (matchRez.length >= 1){
   var output = "Widget gefunden!";
    var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert(output);
     localStorage.setItem('alerted','yes');
    }

  }
    $("#Widget_Check").text (output);
//alert(matchRez[0]);
}

//--- Position and style the display output,
GM_addStyle ( "                                 \
    #Widget_Check {                              \
        background:         #585858;            \
        color:              #ffffff;            \
        position:           fixed;              \
        top:                0;                  \
        left:               0;                  \
        width:              100%;               \
        z-index:            99999;              \
        text-align:         center;             \
        display:            none;               \
    }                                           \
" );

//TODO
//add div class="textwidget" ->https://bed-and-breakfast-ismaning.de/
//add iframe name="ca-review-widget" ->https://www.dd-suites.com/de/startseite/
//Über XPath selecten https://developer.mozilla.org/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript

//Menü
//https://www.w3schools.com/howto/howto_css_menu_icon.asp
//https://www.w3schools.com/howto/howto_js_sidenav.asp - Side Navigation
//https://www.w3schools.com/jsref/event_onclick.asp

//JQuery-Inject: https://www.reddit.com/r/GreaseMonkey/comments/u41t5d/inject_javascript_before_the_page_is_loaded/

