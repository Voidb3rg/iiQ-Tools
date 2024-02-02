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
        <form>Kdnr:
<input type="number" name="kdnr" id="kdnr" style="color:#000000">
<button onclick="publicLink()" style="color:#000000">Öffentl. Link</button>
</form>
<br/>
<br/>
<p>Vorschau</p>
<button onclick="mailer_webview()" style="color:#000000">Post-Stay</button>
<button onclick="google_webview()" style="color:#000000">Google</button>
        </passive>


      </passive>
    </main>
  </main>
</main>
`