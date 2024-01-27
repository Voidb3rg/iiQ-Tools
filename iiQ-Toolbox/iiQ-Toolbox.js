// ==UserScript==
// @name        iiQ-Toolbox - iiq-check.de
// @namespace   Violentmonkey Scripts
// @match       https://app.iiq-check.de/*
// @match       https://example.org/*
// @version     1.0
// @author      -
// @description 15.9.2023, 16:18:15
// @grant       GM_addStyle
//
// ==/UserScript==
//@inject-into page
// ==/UserScript==
// `@inject-into` should be set to `page` since we need to access `window` of page context.
// Accessing objects attached to `window` of page
//alert("Hello,world!");
$("body").append ( `<div id="gmBurgerMenu" onclick="gmBurgerMenuToggle(this)"><div class="bar1"></div><div class="bar2"></div><div class="bar3"></div></div>` );
$("head").append (`<script type="text/javascript">
function gmBurgerMenuToggle(x) {
  x.classList.toggle("change");
}; </script>
  `);

GM_addStyle ( "                                     \
    #gmBurgerMenu {                                 \
    cursor: pointer;                                \
    position:fixed;                                 \
    top:10px;                                       \
    left:50%;                                       \
    z-index:99999;}                                 \
                                                    \
    .bar1, .bar2, .bar3{                            \
      width: 35px;                                  \
      height: 5px;                                  \
      background-color: #333;                       \
      margin: 6px 0;                                \
      transition: 0.4s;}                            \
                                                    \
    .change .bar1 {                                 \
      transform: translate(0, 11px) rotate(-45deg);}\
                                                    \
    .change .bar2{opacity: 0;}                      \
                                                    \
    .change .bar3 {                                 \
      transform: translate(0, -11px) rotate(45deg);}");



/*

GM_addStyle ( "                                 \
    #gmBurgerMenu {                             \
        background:         #585858;            \
        color:              #ffffff;            \
        position:           fixed;              \
        top:                0;                  \
        left:               0;                  \
        width:              100%;               \
        z-index:            1666;               \
        text-align:         center;             \
    }                                           \
" );*/


//TODO
//Menü
//https://www.w3schools.com/howto/howto_css_menu_icon.asp
//https://www.w3schools.com/howto/howto_js_sidenav.asp - Side Navigation
//https://www.w3schools.com/jsref/event_onclick.asp
//https://www.w3schools.com/howto/howto_css_modals.asp
