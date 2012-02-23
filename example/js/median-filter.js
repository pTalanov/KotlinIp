/**
 * User: ignatov
 * Date: Mar 16, 2011
 */

Pixastic.Actions.medianFilter = {
  process : function(params) {
    if (Pixastic.Client.hasCanvasImageData()) {
      var data = Pixastic.prepareData(params);
      var dataCopy = Pixastic.prepareData(params, true);
      var rectangle = params.options.rect;

      var offset;
      if (typeof params.options.offset != "undefined")
        offset = params.options.offset;
      else
        offset = 1;

      var height = rectangle.height;
      var width = rectangle.width;

      for (var u = 0; u < height; u++) {
        for (var v = 0; v < width; v++) {
          var r = [], g = [], b = [];
          var counter = 0;

          for (var i = -offset; i <= offset; i++) {
            for (var j = -offset; j <= offset; j++) {
              if (0 <= u + i && u + i < height && 0 <= v + j && v + j < width) {
                r[counter] = dataCopy[((u + i) * width + (v + j)) * 4];
                g[counter] = dataCopy[((u + i) * width + (v + j)) * 4 + 1];
                b[counter] = dataCopy[((u + i) * width + (v + j)) * 4 + 2];
                counter++;
              }
            }
          }

          data[(u * width + v) * 4] = Math.floor(median(r));
          data[(u * width + v) * 4 + 1] = Math.floor(median(g));
          data[(u * width + v) * 4 + 2] = Math.floor(median(b));
        }
      }
    }

    return true;
  },
  checkSupport: function() {
    return (Pixastic.Client.hasCanvasImageData());
  }
};
