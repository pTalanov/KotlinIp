/**
 * User: ignatov
 * Date: Feb 12, 2011
 */

Pixastic.Actions.erosion = {
  process : function(params) {
    if (Pixastic.Client.hasCanvasImageData()) {
      var data = Pixastic.prepareData(params);
      var dataCopy = Pixastic.prepareData(params, true);
      var rectangle = params.options.rect;

      for (var i = 1; i < rectangle.height - 1; i ++) {
        for (var j = 1; j < rectangle.width - 1; j ++) {
          // red
          data[(i * rectangle.width + j) * 4] = Math.min(
                  dataCopy[(i * rectangle.width + j - 1) * 4],
                  dataCopy[((i - 1) * rectangle.width + j) * 4],
                  dataCopy[(i * rectangle.width + j) * 4],
                  dataCopy[((i + 1) * rectangle.width + j) * 4],
                  dataCopy[(i * rectangle.width + j + 1) * 4]);
          // green
          data[(i * rectangle.width + j) * 4 + 1] = Math.min(
                  dataCopy[(i * rectangle.width + j - 1) * 4 + 1],
                  dataCopy[((i - 1) * rectangle.width + j) * 4 + 1],
                  dataCopy[(i * rectangle.width + j) * 4 + 1],
                  dataCopy[((i + 1) * rectangle.width + j) * 4 + 1],
                  dataCopy[(i * rectangle.width + j + 1) * 4 + 1]);
          // blue
          data[(i * rectangle.width + j) * 4 + 2] = Math.min(
                  dataCopy[(i * rectangle.width + j - 1) * 4 + 2],
                  dataCopy[((i - 1) * rectangle.width + j) * 4 + 2],
                  dataCopy[(i * rectangle.width + j) * 4 + 2],
                  dataCopy[((i + 1) * rectangle.width + j) * 4 + 2],
                  dataCopy[(i * rectangle.width + j + 1) * 4 + 2]);
        }
      }
      return true;
    }
  },
  checkSupport : function() {
    return (Pixastic.Client.hasCanvasImageData());
  }
};
