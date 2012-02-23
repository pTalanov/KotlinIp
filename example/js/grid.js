/**
 * User: ignatov
 * Date: 12.03.2011
 */

Pixastic.Actions.grid = {
  process : function(params) {
    if (Pixastic.Client.hasCanvasImageData()) {
      var floor = Math.floor;
      var data = Pixastic.prepareData(params);
      var rectangle = params.options.rect;

      var step_x = 5;
      if (typeof params.options.step_x != "undefined")
        step_x = params.options.step_x;

      var step_y = 5;
      if (typeof params.options.step_y != "undefined")
        step_y = params.options.step_y;

      var color = {rgb:[0, 0, 0]};
      if (typeof params.options.color != "undefined")
        color = params.options.color;

      function setPixel(y, x, color) {
        data[(x * rectangle.width + y) * 4] = floor(color.rgb[0] * 255);
        data[(x * rectangle.width + y) * 4 + 1] = floor(color.rgb[1] * 255);
        data[(x * rectangle.width + y) * 4 + 2] = floor(color.rgb[2] * 255);
      }

      var w, h;
      for (w = floor(step_x / 2); w < rectangle.width; w += step_x) {
        for (h = 0; h < rectangle.height; h++)
          setPixel(w, h, color);
      }

      for (h = floor(step_y / 2); h < rectangle.height; h += step_y) {
        for (w = 0; w < rectangle.width; w++)
          setPixel(w, h, color);
      }
    }
    return true;
  },
  checkSupport: function() {
    return (Pixastic.Client.hasCanvasImageData());
  }
};
