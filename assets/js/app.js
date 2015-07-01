(function() {

    "use strict";

    var whoAmI = [
        'I write codes',
        'I make websites',
        'I make mobile applications'
    ];

    var sentence = 0;
    var currentChar = 0;
    var target = document.querySelector('#what span');
    var deleteInterval = null;

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

    var email;
    
    if (email = document.querySelector('[data-e]')) {
        email.innerHTML = window.atob(email.getAttribute('data-e'));
    }

    var wordPool;
    var wordPoolStyle;
    var words = [];
    var currentWord = 0;
    var threshold = 50;
    var currentThreshold = 0;

    if (wordPool = document.querySelector('ul.word-pool')) {
        var wordCount = wordPool.childNodes.length;
        var zIndex = 1;

        while (wordCount--) {
            if (wordPool.childNodes[wordCount].nodeType == 1) {
                var wordEl = wordPool.childNodes[wordCount];

                wordEl.style.marginTop = '-' + (wordEl.clientHeight / 2) + 'px';
                wordEl.style.marginLeft = '-' + (wordEl.clientWidth / 2) + 'px';
                wordEl.style.zIndex = zIndex++;
                wordEl.style.opacity = '0';

                words.unshift(wordPool.childNodes[wordCount]);
            }
        }

        wordPoolStyle = window.getComputedStyle(wordPool);

        animateWordPool();
        reposWords();
    }

    function animateWordPool() {
        var wordEl = words[currentWord];
        var elStyle = window.getComputedStyle(wordEl);

        if (currentThreshold++ >= threshold) {
            currentThreshold = 0;
            currentWord++;

            if (currentWord == words.length) {
                currentWord = 0;
            }
        }

        if (wordEl.style.opacity < 1) {
            wordEl.style.opacity = parseFloat(wordEl.style.opacity) + 0.05;
        }

        setTimeout(animateWordPool, 10);
    }

    function reposWords() {
        for (var i = 0; i < words.length; i++) {
            var wordEl = words[i];
            var elStyle = window.getComputedStyle(wordEl);
            var elFontSize = parseFloat(elStyle.fontSize);

            if (elFontSize < 48 && wordEl.style.opacity < 0.2) {
                continue;
            }

            if (elFontSize < 48) {
                wordEl.style.fontSize = (elFontSize + 0.2) + 'px';
            }

            if (elFontSize > 48) {
                wordEl.style.opacity = parseFloat(wordEl.style.opacity) - 0.05;
            }

            var posTopOffset = parseFloat(wordPoolStyle.height) - parseFloat(elStyle.top);

            if (posTopOffset < 0 || posTopOffset > 200) {
                wordEl.style.opacity = 0;
                wordEl.style.fontSize = '16px';
                wordEl.style.top = '50%';
                wordEl.style.left = '50%';
            }

            wordEl.style.marginTop = '-' + (wordEl.clientHeight / 2) + 'px';
            wordEl.style.marginLeft = '-' + (wordEl.clientWidth / 2) + 'px';

            var posTop = parseFloat(elStyle.top);
            var posLeft = parseFloat(elStyle.left);

            if (i % 2 == 0) {
                wordEl.style.top = (posTop + 0.5) + 'px';
                wordEl.style.left = (posLeft + 0.5) + 'px';
            } else {
                wordEl.style.top = (posTop - 0.5) + 'px';
                wordEl.style.left = (posLeft - 0.5) + 'px';
            }
        };

        setTimeout(reposWords, 20);
    }

})();