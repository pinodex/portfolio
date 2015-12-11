(function() {

    "use strict";

    var whoAmI = [
        'I write codes',
        'I make websites',
        'I make mobile apps'
    ];

    var sentence = 0;
    var currentChar = 0;
    var target = document.querySelector('#what span');
    var deleteInterval = null;

    var email = document.querySelector('[data-e]');
    var wordPoolContainer = document.getElementById('wordPoolContainer');

    function type() {
        if (sentence >= whoAmI.length) {
            sentence = 0;
        }

        var chars = whoAmI[sentence].split('');

        setTimeout(function() {
            if (currentChar >= chars.length) {
                setTimeout(function() {
                    sentence++;

                    deleteInterval = setInterval(function() {
                        target.innerHTML = target.innerHTML.substr(0, currentChar - 1);
                        currentChar--;

                        if (currentChar == 0) {
                            clearInterval(deleteInterval);
                            type();
                        }
                    }, 30);
                }, 1000);

                return;
            }

            target.innerHTML += chars[currentChar];
            currentChar++;

            type();
        }, 80);
    }

    if (target) {
        type();
    }
    
    if (email) {
        email.innerHTML = window.atob(email.getAttribute('data-e'));
    }

    if (wordPoolContainer) {
        var wordPool = new WordPool({
            target: wordPoolContainer,
            font: {
                family: 'Roboto',
                color: [255, 255, 255] // RGB
            },
            words: [
                'web development',
                'mobile app development',
                'PHP',
                'Java',
                'JavaScript',
                'jQuery',
                'CSS3',
                'HTML',
                'HTML5',
                'Node.js',
                'MySQL',
                'Symfony',
                'Silex',
                'Bootstrap',
                'Foundation'
            ]
        });

        wordPool.init();

        window.addEventListener('resize', function() {
            var targetStyle = getComputedStyle(wordPoolContainer); 

            wordPool.resize(parseInt(targetStyle.height), parseInt(targetStyle.width));
        }, false);
    }

    window.feed = function(data) {
        var blogBox = document.querySelector('.content.blog');

        if (data.responseStatus != 200) {
            blogBox.innerHTML = '<div class="empty">No posts yet.</div>';
            return;
        }

        var entries = data.responseData.feed.entries;

        if (!entries.length) {
            blogBox.innerHTML = '<div class="empty">No posts yet.</div>';
            return;
        }
        
        for (var i = entries.length - 1; i >= 0; i--) {
            var pubDate = new Date(entries[i].publishedDate);
            pubDate = pubDate.getMonth() + '/' + pubDate.getDay() + 
                '/' + pubDate.getFullYear() + ' ' + (pubDate.getHours() % 12 || 12) + 
                ':' + ('0' + pubDate.getMinutes()).substr(-2) + ' ' + (pubDate.getHours() >= 12 ? 'pm' : 'am');

            blogBox.innerHTML = [
                '<a class="entry" href="' + entries[i].link + '">',
                    '<h3>' + entries[i].title + '</h3>',
                    '<p>' + entries[i].contentSnippet + '</p>',
                    '<small>' + pubDate + '</small>',
                '</a>',
            ].join('\n') + blogBox.innerHTML;
        };
    }

})();