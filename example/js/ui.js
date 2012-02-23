/**
 * User: ignatov
 * Date: Feb 13, 2011
 */

$('#filters a').click(function(e) {
  e.preventDefault();
  var action = jQuery(this).attr('id');
  var label = jQuery(this).text();
  var canvas = $("#canvas");

  setTimeout(function() {
    var startTime = new Date();
    switch (action) {
      case 'inversion':
        canvas.pixastic("invert");
        break;
      case 'dilation':
        canvas.pixastic("dilation");
        break;
      case 'erosion':
        canvas.pixastic("erosion");
        break;
      case 'white_noise':
        canvas.pixastic("whiteNoise", {
          probability: parseFloat($("#white_noise_probability").val()),
          amount: parseInt($("#white_noise_amount").val()),
          mono: $("#white_noise_mono").attr("checked")
        });
        break;
      case 'white_noise_options_link':
        $("#white_noise_options").toggle();
        return;
      case 'dust':
        canvas.pixastic("dust", {
          probability: parseFloat($("#dust_probability").val()),
          min: parseInt($("#dust_min").val()),
          mono: $("#dust_mono").attr("checked")
        });
        break;
      case 'dust_options_link':
        $("#dust_options").toggle();
        return;
      case 'grid':
        canvas.pixastic("grid", {
          color: document.getElementById('grid_color').color,
          step_x: parseInt($("#grid_step_x").val()),
          step_y: parseInt($("#grid_step_y").val())
        });
        break;
      case 'grid_options_link':
        $("#grid_options").toggle();
        return;
      case 'median_filter':
        canvas.pixastic("medianFilter", {offset: parseInt($("#median_filter_size").val())});
        break;
      case 'median_filter_options_link':
        $("#median_filter_options").toggle();
        return;
      case 'add_3x3_filter_dialog':
        return;
      case 'add_5x5_filter_dialog':
        return;
      case 'clear_all':
        ip.deleteAllFilters();
        return;
    }
    var endTime = new Date();
    ip.cleanResult();
    var duration = endTime.getTime() - startTime.getTime();
    ip.addHistory(ip.getCurrentImageData(), label, duration);
  }, 10);
});

jQuery('#history a').live('click', function(e) {
  e.preventDefault();
  var rel = parseInt(jQuery(this).attr('rel'));
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  var currentImageData = ip.getHistoryEntry(rel).data;
  canvas.width = currentImageData.width;
  canvas.height = currentImageData.height;
  context.putImageData(currentImageData, 0, 0);

  ip.updateHistory(rel);
});

$("#convert_to_png").click(function(e) {
  e.preventDefault();
  ip.convertToPNG();
});

document.getElementById('file_loader').addEventListener('change', ip.handleFileSelect, false);

$().ready(function () {
  ip.init();
});