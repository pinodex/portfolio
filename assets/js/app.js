(function() {

  'use strict';

  if (!String.prototype.format) {
    String.prototype.format = function() {
      var str = this.toString();
      
      if (!arguments.length) {
        return str;
      }
      
      var args = typeof arguments[0];
      args = (('string' === args || 'number' === args) ? arguments : arguments[0]);
      
      for (var arg in args) {
        str = str.replace(new RegExp('\\{' + arg + '\\}', 'gi'), args[arg]);
      }
      
      return str;
    };
  }

  (function loadBlog() {
    var xhr = new XMLHttpRequest();
    var template = document.getElementById('blog-post-template').innerHTML;
    var target = document.getElementById('blogPosts');

    var maxDisplay = 3;

    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        var items = xhr.responseXML.getElementsByTagName('item');

        if (items.length < maxDisplay) {
          maxDisplay = items.length;
        }

        target.innerHTML = '';

        for (var i = 0; i < maxDisplay; i++) {
          var publishedDate = new Date(items[i].getElementsByTagName('pubDate')[0].textContent);

          target.innerHTML += document.getElementById('blog-post-template').innerHTML.format({
            title: items[i].getElementsByTagName('title')[0].textContent,
            link: items[i].getElementsByTagName('link')[0].textContent,
            description: items[i].getElementsByTagName('description')[0].textContent.replace(/(<([^>]+)>)/ig, '') + '&hellip;',
            date: '{m}/{d}/{y} {hh}:{mm} {t}'.format({
              m:    publishedDate.getMonth(),
              d:    publishedDate.getDay(),
              y:    publishedDate.getFullYear(),
              hh:   (publishedDate.getHours() % 12 || 12),
              mm:   ('0' + publishedDate.getMinutes()).substr(-2),
              t:    (publishedDate.getHours() >= 12 ? 'pm' : 'am')
            })
          });
        }
      }
    };

    xhr.open('GET', BLOG_FEED_URL, true);
    xhr.send();
  }());

  var typeTexts = function typeTexts(target, texts) {
    var currentLine = 0;
    var currentChar = 0;
    var intervalDelete = null;

    target.innerHTML = '';

    var next = function next() {
      if (currentLine >= texts.length) {
        currentLine = 0;
      }

      var lineChars = texts[currentLine].split('');

      (function type() {
        setTimeout(function() {
          if (currentChar >= lineChars.length) {
            currentLine++;

            setTimeout(function() {
              deleteLine();
            }, 1000);
                        
            return;
          }

          target.innerHTML += lineChars[currentChar++];
            
          type();
        }, 80);
      })();
    };

    function deleteLine() {
      intervalDelete = setInterval(function() {
        target.innerHTML = target.innerHTML.substr(0, currentChar - 1);
        currentChar--;

        if (currentChar === 0) {
          clearInterval(intervalDelete);

          return next();
        }
      }, 30);
    }

    next();
  };

  var hiddenEmails = document.querySelectorAll('[data-ex]');
  var typingElements = document.querySelectorAll('[data-type]');

  for (var i = hiddenEmails.length - 1; i >= 0; i--) {
    var b64String = hiddenEmails[i].getAttribute('data-ex');
    var el = hiddenEmails[i];

    el.parentNode.replaceChild(
      document.createTextNode(atob(b64String)), el
    );
  }

  for (var x = typingElements.length - 1; x >= 0; x--) {
    var texts = JSON.parse(typingElements[x].getAttribute('data-type'));
        
    typeTexts(typingElements[x], texts);
  }
})();
