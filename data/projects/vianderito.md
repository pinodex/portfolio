<p class="has-text-centered">
  <em>This project was part of my undergraduate thesis together with my thesis mates: <br />
  Emilio Miguel Amoyan, Marc Darriel Luna, Stephan Nicole Portuguez.</em>
</p>

<figure class="image is-16by9">
  <PreloadedImage
    src="/assets/img/projects/vianderito-mockups2.png"
  />
</figure>

Vianderito is an online platform that eliminates the need of a cashier to checkout in a grocery or a convenience store. It also eliminates the need of scanning an item one-by-one with a barcode scanner by using RFID stickers and long-range RFID scanner.

The store management system is built on top of web technologies and the customer mobile application is built as an Android application.

## The Web Interface

The web interface is built with Vue.js and features a responsive web design with Bulma.

<carousel :perPage="1" :navigationEnabled="true">
  <slide>
    <Browser src="/assets/img/projects/vianderito-login.png"></Browser>
    <p class="is-size-7 has-text-centered">
      <em>Store Management System Login</em>
    </p>
  </slide>

  <slide>
    <Browser src="/assets/img/projects/vianderito-1.png"></Browser>
    <p class="is-size-7 has-text-centered">
      <em>Latest Stats and Reports</em>
    </p>
  </slide>

  <slide>
    <Browser src="/assets/img/projects/vianderito-2.png"></Browser>
    <p class="is-size-7 has-text-centered">
      <em>Product Management</em>
    </p>
  </slide>

  <slide>
    <Browser src="/assets/img/projects/vianderito-3.png"></Browser>
    <p class="is-size-7 has-text-centered">
      <em>Inventory Management</em>
    </p>
  </slide>

  <slide>
    <Browser src="/assets/img/projects/vianderito-4.png"></Browser>
    <p class="is-size-7 has-text-centered">
      <em>Account Group Permissions Management</em>
    </p>
  </slide>

  <slide>
    <Browser src="/assets/img/projects/vianderito-5.png"></Browser>
    <p class="is-size-7 has-text-centered">
      <em>Coupon Management</em>
    </p>
  </slide>
</carousel>

## The Mobile Application

The application runs on Android.

<carousel :navigationEnabled="true">
  <slide>
    <figure class="image is-9by16">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-phone-1.png"
        alt="Mobile"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Landing</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-9by16">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-phone-2.png"
        alt="Mobile"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Login</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-9by16">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-phone-3.png"
        alt="Mobile"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Sign Up</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-9by16">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-phone-4.png"
        alt="Mobile"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Product Listing</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-9by16">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-phone-5.png"
        alt="Mobile"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>QR Code Scanner</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-9by16">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-phone-6.png"
        alt="Mobile"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Account Management</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-9by16">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-phone-7.png"
        alt="Mobile"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Order History</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-9by16">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-phone-8.png"
        alt="Mobile"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Order Details</em>
    </p>
  </slide>
</carousel>

## Behind The Reader

The RFID reader is a long-range UHF RFID reader. I used the EPCGEN2 protocol. It allows for simultaneously scanning multiple tags. But when the package arrived from the online store, it came without the technical documentation.

I wasn&lsquo;t really at that time when I bought the correct reader as I have no related experience with RFID. I only got it to work with single tags before the documentation was sent to me.

<figure class="image is-16by9">
  <PreloadedImage
    src="/assets/img/projects/vianderito-reader-1.png"
  />
</figure>

When I finally got the documentation and the demo software, I learned that you have to set a certain flags to switch the reading from single mode to multiple mode. With the RFID reader hooked to my computer via an RS232 <-> USB converter, the demo software, and the technical documentation, I learned how the reader is sending the data of each tags that it sees.

<carousel :perPage="1" :navigationEnabled="true">
  <slide>
    <figure class="image is-16by9">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-reader-2.png"
        alt="Reader"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>This is how the data should look like</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-16by9">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-reader-3.png"
        alt="Reader"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>The flags that the reader accepts for mode switching</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-16by9">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-reader-4.png"
        alt="Reader"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>The structure of the EPCGEN2 data</em>
    </p>
  </slide>
</carousel>

Having learned the protocol and data structures, I built a small Python script that will poll for incoming data and parse each individual tags&lsquo; EPC (extended product code).

<figure class="image is-16by9">
  <PreloadedImage
    class="has-border-radius"
    src="/assets/img/projects/vianderito-reader-5.png"
    alt="Reader"
  />
</figure>

From that, whenever it sees an EPC or a group of EPCs, the script will send to the server for product and inventory matching and to allow the product to be added to the customer&lsquo;s cart.

<figure class="image is-16by9">
  <MockupMedia src="/assets/videos/projects/vianderito-reader-test.mp4" type="video"></MockupMedia>
</figure>

<p class="is-size-7 has-text-centered">
  <em>Early version had a problem with items keep disappearing and reappearing from the screen. But that was fixed later.</em>
</p>

## Ordering Flow

1. Customer picks items that they want to buy.
2. Customer puts the items in the checkout cart.
3. The system will scan all items at once and generates code.
4. Customer will scan the generated code and pays the items through their phone.

## Exhibit

Vianderito had participated in the I.T. Exhibit that our school held every year to showcase the projects of the students.

<carousel :perPage="1" :navigationEnabled="true">
  <slide>
    <figure class="image is-4by3">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/it-exhibit-1.jpg"
        alt="Exhibit"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>The Event Proper. &copy; STI College Novaliches, 2018</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-4by3">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-exhibit-1.jpg"
        alt="Exhibit"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Our Cute Little Space at the Exhibit</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-4by3">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-exhibit-2.jpg"
        alt="Exhibit"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Vianderito!</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-4by3">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-exhibit-3.jpg"
        alt="Exhibit"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Bird&lsquo;s Eye View</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-4by3">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-exhibit-4.jpg"
        alt="Exhibit"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Behind The Scene</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-4by3">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/vianderito-exhibit-5.jpg"
        alt="Exhibit"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>More Behind The Scene</em>
    </p>
  </slide>

  <slide>
    <figure class="image is-4by3">
      <PreloadedImage
        class="has-border-radius"
        src="/assets/img/projects/it-exhibit-2.jpg"
        alt="Exhibit"
      />
    </figure>
    <p class="is-size-7 has-text-centered">
      <em>Thesis mates</em>
    </p>
  </slide>
</carousel>

## Technology Stack

Vianderito is a combination of different systems working together to make the platform possible.

### Store Management (Web)

* Bulma
* Vue.js
* Laravel 5.7
* MySQL

### Customer Mobile App (Android)

* Retrofit2
* Braintree Drop-in UI
* Java

### Kiosk UI (Electron)

* Bulma
* Vue.js
* Electron.js

### RFID Reader

* Long-range UHF RFID Reader (RS232)
* pyserial
* Python
