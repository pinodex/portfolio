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

    window.loadPosts = function loadPosts(data) {
      var target = document.getElementById('blogPosts');

      if (data.responseStatus !== 200) {
        target.innerHTML = '<div class="empty">Cannot retrieve blog posts.</div>';
        return;
      }

      var entries = data.responseData.feed.entries;

      if (!entries.length) {
        target.innerHTML = '<div class="empty">No posts yet.</div>';
        return;
      }

      target.innerHTML = '';

      for (var i = 0; i < entries.length; i++) {
        var publishedDate = new Date(entries[i].publishedDate);
        publishedDate = '{m}/{d}/{y} {hh}:{mm} {t}'.format({
          m:    publishedDate.getMonth(),
          d:    publishedDate.getDay(),
          y:    publishedDate.getFullYear(),
          hh:   (publishedDate.getHours() % 12 || 12),
          mm:   ('0' + publishedDate.getMinutes()).substr(-2),
          t:    (publishedDate.getHours() >= 12 ? 'pm' : 'am')
        });

        target.innerHTML += document.getElementById('blog-post-template').innerHTML.format({
          link: entries[i].link,
          title: entries[i].title,
          description: entries[i].contentSnippet,
          date: publishedDate
        });
      }
  };
})();
