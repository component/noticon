
/**
 * Module dependencies.
 */

var style = require('style')
  , favicon = require('favicon');

/**
 * Expose `Noticon()`.
 */

module.exports = Noticon;

/**
 * Initialize a new `Noticon` with
 * an optional css `selector`,
 * defaulting to ".noticon".
 *
 * @param {String} selector
 * @api public
 */

function Noticon(selector) {
  if (!(this instanceof Noticon)) return new Noticon(selector);
  selector = selector || '.noticon';
  this.background = style(selector, 'background-color');
  this.color = style(selector, 'color');
  this.canvas = document.createElement('canvas');
  this.canvas.width = this.canvas.height = 16;
  this.ctx = this.canvas.getContext('2d');
}

/**
 * Fetch and cache the current favicon
 * and invoke `fn(img)`.
 *
 * @param {Function} fn
 * @api private
 */

Noticon.prototype.icon = function(fn){
  var self = this;
  if (this.img) return fn(this.img);
  var icon = favicon.current();
  if (!icon) return fn();
  this.img = new Image;
  this.img.onload = function(){ fn(self.img) };
  this.img.src = icon.href;
};

/**
 * Update percentage to `n`.
 *
 * @param {Number} n
 * @return {Piecon}
 * @api public
 */

Noticon.prototype.update = function(n){
  var self = this;
  this.n = n;
  this.draw(this.ctx, function(){
    favicon(self.canvas.toDataURL());
  });
  return this;
};

/**
 * Draw bubble on the given `ctx` and invoke `fn()`.
 *
 * @param {CanvasContext2d} name
 * @param {Function} fn
 * @api private
 */

Noticon.prototype.draw = function(ctx, fn){
  var n = '' + this.n;
  var self = this;
  var canvas = this.canvas;

  this.icon(function(img){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (img) ctx.drawImage(img, 0, 0);
    var len = n.length;
    var w = 7;

    // bubble
    ctx.font = 'bold 10px Arial, sans-serif';
    ctx.strokeStyle = self.background;
    ctx.lineWidth = w;
    ctx.lineCap = 'round';
    ctx.moveTo(16 - w / 2, 10);
    ctx.lineTo(16 - w / 2, 13);
    ctx.stroke();

    // text
    ctx.beginPath();
    ctx.fillStyle = self.color;
    ctx.fillText(n, 9, 15);

    favicon(canvas.toDataURL());
  });
};
