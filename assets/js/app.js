(function() {

    "use strict";

    var whoAmI = [
        'I write codes',
        'I make websites',
        'I make Android applications'
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

    type();

})();