// ==UserScript==
// @name         iiQ-Toolbox-local
// @namespace    https://github.com/Voidb3rg/iiQ-Tools
// @version      2024-02-02-alpha4
// @match        https://app.iiq-check.de/*
// @grant        GM_getResourceText
// @description  Script has to be stored at Path below. MacOS: change @require to file:///path/to/userscript.user.js
// @downloadURL  file://C:\Github\Repositories\iiQ-Tools\iiQ-Toolbox\iiQ-Toolbox-local.user.js
// @updateURL    file://C:\Github\Repositories\iiQ-Tools\iiQ-Toolbox\iiQ-Toolbox-local.user.js
// @resource     https://raw.githubusercontent.com/Voidb3rg/iiQ-Tools/main/iiQ-Toolbox/src/menu-css.js
// @resource     https://raw.githubusercontent.com/Voidb3rg/iiQ-Tools/main/iiQ-Toolbox/src/menu-html.js
// @resource     https://raw.githubusercontent.com/Voidb3rg/iiQ-Tools/main/iiQ-Toolbox/src/menu-styles.js
// ==/UserScript==

/* Create menu JS code below */


let js = `
<script>

// Public Param Name aus Preview-URL holen
function getParamName() {
    let url = new URL(document.querySelector("#nav-right > div > div > li:nth-child(4) > a"));
    if (url != null){
        let path = preview_url.pathname.split('/');
        let ParamName = preview_path[2];
        return ParamName;
        }
}

// Öffentlichen Link mit Kundennummer generieren

function publicLink() {
    window.open(('https://app.iiq-check.de/' + document.getElementById("kdnr").value), '_blank');
}



// Preview Post-Stay-Mail
function mailer_webview() {
window.open(("https://app.iiq-check.de/public/mailer-webview/" + getParamName() + "/questionnaire-notification/preview"), '_blank');
}

// Preview Post-Stay-Mail(Gmail)
function google_webview() {
    let url = "https://app.iiq-check.de/public/mailer-webview/" + getParamName() + "/google-notification/preview";
    window.open(url, '_blank');
    }



// If you click outside of the menu location
$(document).mouseup(function (e){
    let container = $(".menu--holder")
    if (container.has(e.target).length === 0 && container.css('display') == 'block'){
        container.css('opacity', '0.35')
    } else {
        container.css('opacity', '1')
    } 
})

// Drag element
dragElement(document.querySelector((".menu--holder")))
function dragElement(elmnt) {
    let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
    if (document.getElementById("menu--title")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById("menu--title").onmousedown = dragMouseDown
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
        e = e || window.event
        // get the mouse cursor position at startup:
        pos3 = e.clientX
        pos4 = e.clientY
        document.onmouseup = closeDragElement
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag
    }

    function elementDrag(e) {
        e = e || window.event
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null
        document.onmousemove = null
    }
</script>
`

const html = GM_getResourceText("menu-html.js");
const css = GM_getResourceText("menu-styles.js");

/* Add menu in body */
$('body').append(html, css, js)

/* Add toggler for menu */
let openMenu = true
document.addEventListener("keydown", function(event) {
    if (event.code == "Escape") {
        if (openMenu) {
            openMenu = false
            $('.menu--holder').css('display', menu.display.block)
        } else {
            openMenu = true
            $('.menu--holder').css('display', menu.display.none)
        }
    }
})
