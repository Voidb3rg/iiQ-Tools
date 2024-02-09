// ==UserScript==
// @name         iiQ-Toolbox-test
// @namespace    none
// @version      2024-02-09
// @description  I just did it because I'm bored... How you will use this menu depends on you! I did it for the developers of cheats on Moo Moo.io, but it can be used on any game.
// @author       00100110#6361
// @match        https://app.iiq-check.de/*
// @run-at      document-idle
// @grant        none
// ==/UserScript==

/* Setting menu */
//debugger
let menu = {
    opacity: 1,
    position: {
        relative: `relative`,
        absolute: `absolute`,
        fixed: `fixed`,
        top: `${0}px`,
        left: `${0}px`,
        bottom: `${0}px`,
        right: `${0}px`,

    },
    size: {
        width: `${800}px`,
        height: `${600}px`,
        height_title_block: `${30}px`,
        border_body_block: `${5}px`,
        border_radius_body_block: `${7}px`,
        font_size_title_block: `${21}px`,
        font_size_inner_block: `${18}px`
    },
    colors: {
        background_title_block: `rgba(66, 66, 66, 0.61)`,
        background_body_block: `rgba(0, 0, 0, 0.25)`,
        background_inner_block: `rgba(0, 0, 0, 0.25)`,
        border_body_block: `rgba(38, 38, 38, 0.72)`,
        title_text: `#fff`,
        inner_block: `#fff`,
    },
    display: {
        block: `block`,
        flex: `flex`,
        none: `none`
    },
    align: {
        left: `left`,
        center: `center`,
        right: `right`,
        bottom: `bottom`
    }
}

menu = new Proxy(menu, {
    set(target, prop, val) {
        if (prop in target) {
            return true
            if (typeof val != 'string') {
                target[prop] = val.toString()
            } else {
                return target[prop]
            }
        } else {
            return prop
            return false
            throw new Error(`Prop: ${prop} not defined in ${target}`)
        }
    }
});

/* Create menu HTML code */

const html = `
<!--
<main></main> & <passive></passive> - are not embedded tags in HTML.
I use this to denote the significance of the blocks.
class="" & id="" - I use to denote blocks, id for everything else
-->
<!-- Add holder -->
<main class="menu--holder">
  <main class="menu--body">
    <passive id="menu--title">
      Menu
    </passive>
    <main class="menu--inner-gui">
      <passive class="menu--inner-gui-block">
        <passive id="menu--inner-gui-block-text">
        <form name="fKdnr" onsubmit="publicLink()"> Kdnr:
<input type="text" name="Kdnr" id="kdnr" style="color:#000000" minlength="3" required>
<button type="submit" style="color:#000000">Öffentl. Link</button>
</form>
<br/>
<br/>
<p>Vorschau</p>
<button onclick="mailer_webview()" style="color:#000000">Post-Stay</button>
<button type ="button" class="btn btn-default btn-xs"><i class="fa fa-copy"></i></button>
<br/>
<button onclick="google_webview()" style="color:#000000">Google</button>
<br/>
<br/>
<button onclick="hide_inactive()" style="color:#000000">Inaktive Kategorien ausblenden</button>
        </passive>


      </passive>
    </main>
  </main>
</main>
`

/* Create menu CSS code */

let css = `
<style>
/*
. - use for class
# - use for id
*/

/* Style for holder menu. */
main.menu--holder {
position: ${menu.position.fixed};
top: ${menu.position.top};
left: ${menu.position.left};
width: ${menu.size.width};
height: ${menu.size.height};
display: ${menu.display.none};
z-index: 99999;
}

/* Style for body menu. */
main.menu--body {
width: 100% !important;
height: 100% !important;
background: ${menu.colors.background_body_block};
border-radius: ${menu.size.border_radius_body_block};
border: ${menu.size.border_body_block} solid ${menu.colors.border_body_block};
opacity: ${menu.opacity};
}

/* Style for title menu */
passive#menu--title {
cursor: move;
position: ${menu.position.relative};
display: ${menu.display.flex};
width: 97% !important;
background: ${menu.colors.background_title_block};
color: ${menu.colors.title_text};
align-content: ${menu.align.center};
justify-content: ${menu.align.center};
font-size: ${menu.size.font_size_title_block};
text-align: ${menu.align.center};
height: ${menu.size.height_title_block};
box-shadow: 0px 0px 4px #1a1a1a;
flex-wrap: wrap;
margin-left: 12px;
margin-top: 5px;
}

/* Style for inner menu gui */
main.menu--inner-gui {
margin: 0px 2px;
display: ${menu.display.flex};
}

/* Style for inner menu gui block */
passive.menu--inner-gui-block {
width: 97% !important;
vertical-align: top;
height: 530px;
margin: 0px 10px 10px 10px;
background: rgba(66, 66, 66, 0.61);
box-shadow: 0px 0px 4px #1a1a1a;
border-radius: 3px;
overflow-x: hidden;
overflow-y: auto;
color: #fff;
padding: 10px;
margin-top: 10px;
}

/* Style for text in inner menu */
passive#menu--inner-gui-block-text {
color: ${menu.colors.inner_block};
font-size: ${menu.size.font_size_inner_block};
display: ${menu.display.block};
}

input[type="checkbox"] {
vertical-align: middle;
user-select: none;
box-sizing: border-box;
cursor: pointer;
}
</style>
`


/* Create menu JS code */
/* function getParamName() {
    let url = new URL(document.querySelector("#nav-right > div > div > li:nth-child(4) > a"));
    if (url != null){
        let path = url.pathname.split('/');
        let ParamName = path[2];
        return ParamName;
        }
}
*/
let js = `
<script>

//get hotel_id and get access to the admin menu content
function inject_hidden_iframe(){
    var hotelid_path = document.querySelector("#nav-right > div.userbox.dropdown.hidden-xs > div > li:nth-child(2) > a")
    if (hotelid_path !== null) {
      var hotelid = hotelid_path.pathname.split('/')[3]
    }
    if (hotelid !== null){
        $('<iframe id="stamm" style="display: none; width:1000px" onload="get_hotel_email()">').attr('src', '/admin/hotels/' + hotelid + '/edit').appendTo('body')
    }
}

  /*
You need to make sure the frame is fully loaded the best way to do it is to use onload:

<iframe id="nesgt" src="" onload="custom()"></iframe>

function custom(){
    document.getElementById("nesgt").contentWindow.document;
    }
  */
var hotel_mail = '';
// get hotel_email
function get_hotel_email() {
  var cr_email = $('#hotel_contact_request_email', $('#stamm').contents()).val();
  var hotel_email = $('#hotel_email', $('#stamm').contents()).val();



  if (cr_email !== "") {
    return cr_email;
    hotel_mail = cr_email;
  } else if (hotel_email !== undefined) {
    return hotel_email;
    hotel_mail = hotel_email;
  }
}






// Public Param Name aus Preview-URL holen

function getParamName(){
let menu_links = Array.from(document.querySelectorAll('.dropdown-menu-right .quick-reference a'))
let target_arr = menu_links.filter(ele => ele.href.includes('preview'))

if (target_arr.length === 1) {
  let preview_href = new URL(target_arr[0].href);
  let path = preview_href.pathname.split('/');
  // Ab hier dann Button einfügen und event binden.
  let ParamName = path[2];

  return ParamName;
      }
  return false;
}


// Öffentlichen Link mit Kundennummer generieren
function publicLink() {
     window.open(('https://app.iiq-check.de/' + document.getElementById("kdnr").value), '_blank');
}
// Preview Post-Stay-Mail
function mailer_webview() {
  if (getParamName()){
    window.open(("https://app.iiq-check.de/public/mailer-webview/" + getParamName() + "/questionnaire-notification/preview"), '_blank');
  }
}
// Preview Post-Stay-Mail(Gmail)
function google_webview() {
  if (getParamName()){
    window.open(("https://app.iiq-check.de/public/mailer-webview/" + getParamName() + "/google-notification/preview"), '_blank');
  }
}
//Fragebogen-Kategorien
function hide_inactive(){
var html_collection = document.getElementsByClassName('removed')
var arr = Array.prototype.slice.call( html_collection )
if ( arr[0].style.display != 'none'){
  arr.map(ele => ele.style.display = 'none');
  }
else {
  arr.map(ele => ele.style.display = 'block');
}
}


//Append HTML to the Topbar
function afterText() {
  var txt1 = "<b>I </b>";                    // Create element with HTML
  var txt2 = $("<i></i>").text("love ");     // Create with jQuery
  var txt3 = document.createElement("b");    // Create with DOM
  //var txt3_str = get_hotel_email();
  //txt3.innerhtml = txt3_str;
  const txt_str = get_hotel_email();
  txt3.innerText = txt_str;
 // $(document).ready($("div.navbar-header").after(txt1, txt2, txt3))          // Insert new elements after div.navbar-header

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
    }}

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

/* Add menu in body */
$('body').prepend(html, css, js)
$(document).ready(inject_hidden_iframe())
//$('#stamm').ready(afterText())

var dataTimer = setInterval (get_hotel_email, 5000);
$("div.navbar-header").append ('<div id="hotel_mail" align="center"></div>');
$("hotel_mail").text (get_hotel_email);


//var hotel_email = $('#hotel_email', $('#stamm').contents()).val();
//if (hotel_email) alert(hotel_email);

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
