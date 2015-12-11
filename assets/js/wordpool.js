/*!
 * Word Pool
 * Animates words in canvas
 *
 * @author      Raphael Marco
 * @link        http://pinodex.github.io
 */

(function() {

    "use strict";

    var WordPool = function WordPool(options) {
        this.options = options || {};

        this.initialFontSize = 10;
        this.currentWord = options.words.length - 1;

        this.threshold = {
            current: 0,
            max: 30
        };
    };

    WordPool.prototype.init = function() {
        var targetStyle = getComputedStyle(this.options.target);      

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.height = parseInt(targetStyle.height);
        this.canvas.width = parseInt(targetStyle.width);

        this.options.target.innerHTML = '';
        this.options.target.appendChild(this.canvas);

        this.setup();
        this.loop();
    };

    WordPool.prototype.setup = function() {
        var quadrant = 1;
        this.wordProperties = [];

        // Populate our words' properties (x, y, width, opacity)
        for (var i = 0; i < this.options.words.length; i++) {
            var textWidth = this.context.measureText(this.options.words[i]);

            this.wordProperties[i] = {
                x: (this.canvas.width / 2) - (textWidth.width / 2),
                y: (this.canvas.height / 2) + (this.initialFontSize / 2),
                width: textWidth.width,
                fontSize: this.initialFontSize,
                opacity: 0,
                quadrant: ++quadrant
            };

            if (quadrant >= 4) {
                quadrant = 0;
            }
        };
    }

    WordPool.prototype.render = function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (var i = 0; i < this.options.words.length; i++) {
            this.context.font = this.wordProperties[i].fontSize + 'px ' + this.options.font.family;
            this.context.fillStyle = 'rgba(' + this.options.font.color.join(', ') + ', ' + this.wordProperties[i].opacity + ')';
            this.context.fillText(this.options.words[i], this.wordProperties[i].x, this.wordProperties[i].y);
        };
    };

    WordPool.prototype.resize = function(height, width) {
        this.canvas.height = height;
        this.canvas.width = width;

        this.setup();
    }

    WordPool.prototype.animate = function() {
        if (this.threshold.current++ >= this.threshold.max) {
            this.threshold.current = 0;
            this.currentWord++;

            if (this.currentWord == this.options.words.length) {
                this.currentWord = 0;
            }
        }

        if (this.wordProperties[this.currentWord].opacity <= 1) {
            this.wordProperties[this.currentWord].opacity += 0.05;
        }

        for (var i = 0; i < this.options.words.length; i++) {
            if (this.wordProperties[i].fontSize < 48 && this.wordProperties[i].opacity < 0.25) {
                continue;
            }

            if (this.wordProperties[i].fontSize < 48) {
                this.wordProperties[i].fontSize += 0.2;
            }

            // Reset when not visible in canvas
            if (
                (this.wordProperties[i].x < 0 || this.wordProperties[i].x > this.canvas.width) ||
                (this.wordProperties[i].y < 0 || this.wordProperties[i].y > this.canvas.height)
            ) {
                this.wordProperties[i].opacity -= 0.05;

                if (this.wordProperties[i].opacity < 0) {
                    this.wordProperties[i].x = (this.canvas.width / 2) - (this.wordProperties[i].width / 2);
                    this.wordProperties[i].y = (this.canvas.height / 2) + (this.initialFontSize / 2)
                    this.wordProperties[i].fontSize = this.initialFontSize;
                    this.wordProperties[i].opacity = 0;
                }
            }

            // Move the words

            if (this.wordProperties[i].quadrant == 1) {
                this.wordProperties[i].x += 0.3;
                this.wordProperties[i].y += 0.3;
            }

            if (this.wordProperties[i].quadrant == 2) {
                this.wordProperties[i].x -= 0.3;
                this.wordProperties[i].y -= 0.3;
            }

            if (this.wordProperties[i].quadrant == 3) {
                this.wordProperties[i].x -= 0.3;
                this.wordProperties[i].y += 0.3;
            }

            if (this.wordProperties[i].quadrant == 4) {
                this.wordProperties[i].x += 0.3;
                this.wordProperties[i].y -= 0.3;
            }
        };
    };

    WordPool.prototype.loop = function() {
        this.animate();
        this.render();

        requestAnimationFrame(this.loop.bind(this));
    };

    WordPool.prototype.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    window.WordPool = WordPool;

})();