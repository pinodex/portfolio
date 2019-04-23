![Client login page](/assets/img/projects/tst-01.png)

## Overview

I developed a system for real-time score tabulation for this year&lsquo;s local talent search competition (2017). The concept was to provide a digital scoresheet to each judges. Results are tabulated as judges input their scores for each criteria for each contestant. This allows us to quickly print the result after each competition category/round.

<div class="has-text-centered has-contents-below">

### Judges View
<Screen content="/assets/img/projects/tst-02.png"></Screen>

### Tabulator View
<Browser content="/assets/img/projects/tst-03.png"></Browser>

<p><small><em>Values do not represent real scores. Only provided for demonstration purposes</em></small></p>

</div>

Using websockets, I also accomplished sending real-time events to client applications. An administrator can switch categories/rounds and control the program switch, and synchronize it with all the clients.

<div class="has-contents-below">
  <div style="width:100%;height:0;padding-bottom:57%;position:relative;">
    <iframe src="https://giphy.com/embed/xT1R9BUsnJZWB5Bm4E" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>

  <p><a href="https://giphy.com/gifs/xT1R9BUsnJZWB5Bm4E">via GIPHY</a></p>
</div>

## Stack
* **MariaDB**
* **Node.js**
* **AdonisJs**
* **Socket.io**
* **Vue.js**
* **Bulma**
* **Electron** - to package the judge application in one executable
