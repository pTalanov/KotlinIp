/**
 * User: ignatov
 * Date: Feb 18, 2011
 */

Pixastic.Actions.linearFilter = {
  process : function(params) {
    if (Pixastic.Client.hasCanvasImageData()) {
      var data = Pixastic.prepareData(params);
      var dataCopy = Pixastic.prepareData(params, true);
      var rectangle = params.options.rect;

      var kernel;
      if (typeof params.options.kernel != "undefined")
        kernel = params.options.kernel;
      else
        kernel = [
          [3,   5,   3],
          [5,   8,   5],
          [3,   5,   3]
        ];

      function calculateDivider(kernel) {
        var divider = 0;
        for (var x = 0; x < kernel.length; x++) {
          for (var y = 0; y < kernel.length; y++) {
            divider += kernel[x][y];
          }
        }
        return divider;
      }

      var divider;
      if (typeof params.options.divider != "undefined")
        divider = params.options.divider;
      else
        divider = calculateDivider(kernel);

      var offset = Math.floor(kernel.length / 2);

      for (var u = offset; u < rectangle.height - offset; u++) {
        for (var v = offset; v < rectangle.width - offset; v++) {
          var sumR = 0;
          var sumG = 0;
          var sumB = 0;

          for (var i = -offset; i <= offset; i ++) {
            for (var j = -offset; j <= offset; j ++) {
              var r = dataCopy[((u + i) * rectangle.width + (v + j)) * 4];
              var g = dataCopy[((u + i) * rectangle.width + (v + j)) * 4 + 1];
              var b = dataCopy[((u + i) * rectangle.width + (v + j)) * 4 + 2];
              var w = kernel[i + offset][j + offset];
              sumR += r * w;
              sumG += g * w;
              sumB += b * w;
            }
          }

          data[(u * rectangle.width + v) * 4] = Math.floor(sumR / divider) > 255 ? 255 : Math.floor(sumR / divider);
          data[(u * rectangle.width + v) * 4 + 1] = Math.floor(sumG / divider) > 255 ? 255 : Math.floor(sumG / divider);
          data[(u * rectangle.width + v) * 4 + 2] = Math.floor(sumB / divider) > 255 ? 255 : Math.floor(sumB / divider);
        }
      }
    }

    return true;
  },
  checkSupport: function() {
    return (Pixastic.Client.hasCanvasImageData());
  }
};