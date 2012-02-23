/**
 * User: ignatov
 * Date: 12.03.11
 */

Pixastic.Actions.dust = {
  process: function(params) {
    var max = 255;
    var probability = 0;
    var min = 0;
    var mono = false;

    if (typeof params.options.probability != "undefined")
      probability = parseFloat(params.options.probability) || 0;
    if (typeof params.options.min != "undefined")
      min = parseFloat(params.options.min) || 0;
    if (typeof params.options.mono != "undefined")
      mono = !!(params.options.mono && params.options.mono != "false");

    min = Math.max(0, Math.min(255, min));
    probability = Math.max(0, Math.min(1, probability));

    if (Pixastic.Client.hasCanvasImageData()) {
      var data = Pixastic.prepareData(params);
      var rectangle = params.options.rect;
      var w = rectangle.width;
      var h = rectangle.height;
      var w4 = w * 4;
      var y = h;
      var random = Math.random;
      var floor = Math.floor;
      var r, g, b;

      do {
        var offsetY = (y - 1) * w4;
        var x = w;
        do {
          var offset = offsetY + (x - 1) * 4;
          if (random() < probability) {
            if (mono) {
              var pixelNoise = floor(random() * max + min);
              r = pixelNoise;
              g = pixelNoise;
              b = pixelNoise;
            } else {
              r = floor(random() * max + min);
              g = floor(random() * max + min);
              b = floor(random() * max + min);
            }

            if (r < 0) r = 0;
            if (g < 0) g = 0;
            if (b < 0) b = 0;
            if (r > 255) r = 255;
            if (g > 255) g = 255;
            if (b > 255) b = 255;

            data[offset] = r;
            data[offset + 1] = g;
            data[offset + 2] = b;
          }
        } while (--x);
      } while (--y);
      return true;
    }
  },
  checkSupport: function() {
    return Pixastic.Client.hasCanvasImageData();
  }
};