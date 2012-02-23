/**
 * User: ignatov
 * Date: 12.03.2011
 */

var ip = function() {
  var historyArray = [];

  function createKernelTable(table, array) {
    for (var i = 0; i < array.length; i++) {
      var tr = $("<tr>");
      for (var j = 0; j < array[0].length; j++)
        $("<td>").text(array[i][j]).appendTo(tr);
      tr.appendTo(table);
    }
  }

  function createInputKernelTable(table, dim) {
    for (var i = 0; i < dim; i++) {
      var tr = $("<tr>");
      for (var j = 0; j < dim; j++)
        $('<td><label><input type="text" size="2" value="1"/></label></td>').appendTo(tr);
      tr.appendTo(table);
    }
  }

  function createDefaultFilters() {
    new Filter("Gaussian blur 5x5", [
      [1, 2, 3, 2, 1],
      [2, 4, 5, 4, 2],
      [3, 5, 6, 5, 3],
      [2, 4, 5, 4, 2],
      [1, 2, 3, 2, 1]
    ], undefined).save();
    new Filter("Blur 3x3", [
      [3, 5, 3],
      [5, 8, 5],
      [3, 5, 3]
    ], undefined).save();
    new Filter("Edge detection 3x3", [
      [ 0, -1,  0],
      [-1,  4, -1],
      [ 0, -1,  0]
    ], undefined).save();
  }

  function addFilterToList(list, filter) {
    list.append(
            '<li id="li_' + filter.id + '">' +
                    '<a href="#" onclick="ip.applyFilter(\'' + filter.id + '\')">' + filter.name + '</a>' +
                    ' ' +
                    '(<a href="#" id="' + filter.id + '_kernel_link">options</a>)' +
                    ' ' +
                    '<a href="#" onclick="ip.deleteFilter(\'' + filter.id + '\')">delete</a>' +
                    '<div id="' + filter.id + '_options" class="hidden">' +
                    'Divider: <span id="' + filter.id + '_divider">' + filter.divider + '</span>' +
                    '<br>' +
                    '<table id="' + filter.id + '_kernel"></table>' +
                    '</div>' +
                    '</li>'
            );

    createKernelTable($("#" + filter.id + "_kernel"), filter.kernel);

    $("#" + filter.id + "_kernel_link").live('click', function(e) {
      e.preventDefault();
      $("#" + filter.id + "_options").toggle();
    });
  }

  function displayFiltersFromStorage() {
    for (var i = 0; i <= localStorage.length - 1; i++) {
      var filter = JSON.parse(localStorage.getItem(localStorage.key(i)));
      addFilterToList($('#linear_filters_list'), filter);
    }
  }

  function addDialogEvent() {
    createInputKernelTable($("#3x3_filter_kernel"), 3);
    createInputKernelTable($("#5x5_filter_kernel"), 5);

    $('#add_3x3_filter_dialog').simpleDialog({
      opacity: 0.3,
      duration: 100,
      title: 'Add 3x3 linear filter'
    });

    $('#add_5x5_filter_dialog').simpleDialog({
      opacity: 0.3,
      duration: 100,
      title: 'Add 5x5 linear filter'
    });
  }

  function redrawHistory(history) {
    jQuery('#history ul').empty();
    for (var i = history.length - 1; i >= 0; i--) {
      jQuery('#history ul').append(
        '<li><a href="#" class="history" class="active" rel="' + i + '">' + history[i].label + ' (' + history[i].duration + ' ms)</a></li>'
        );
    }
  }

  function getKernelFromInputTable(selector) {
    var s = selector + ' tr';
    var kernel = [];
    $(s).each(function(i, tr) {
      var row = [];
      $('td label input', tr).each(function(i, td) {
        row.push(parseFloat($(td).val() || 0));
      });
      kernel.push(row);
    });
    return kernel;
  }

  return {
    init: function() {
      createDefaultFilters();
      addDialogEvent();
      displayFiltersFromStorage();
    },

    handleFileSelect: function(evt) {
      var files = evt.target.files;

      for (var i = 0, f; f = files[i]; i++) {

        if (!f.type.match(RegExp("image.*"))) {
          continue;
        }

        var reader = new FileReader();

        reader.onloadend = (function(theFile) {
          return function(e) {

            var can = document.getElementById("canvas");
            var ctx = can.getContext("2d");

            var img = new Image();
            img.onload = function() {
              can.width = img.width;
              can.height = img.height;
              ctx.drawImage(img, 0, 0, img.width, img.height);
              historyArray = [];
              ip.addHistory(ip.getCurrentImageData(), "Load " + theFile.name, 0);
              ip.cleanResult();
            };
            img.src = e.target.result;
          };
        })(f);

        reader.readAsDataURL(f);
      }
    },


    convertToPNG: function() {
      var canvas = document.getElementById("canvas");
      var img = canvas.toDataURL("image/png");
      $("#result").html('<img src=' + img + ' /><br />Right click the image and select "save as" in order to save it.');
    },


    cleanResult: function () {
      $("#result").empty();
    },

    addHistory: function(imagedata, label, duration) {
      historyArray.push({data: imagedata, label: label, duration: duration, active: true});
      redrawHistory(historyArray);
    },

    getCurrentImageData: function () {
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");

      var imgd = null;
      try {
        try {
          imgd = context.getImageData(0, 0, canvas.width, canvas.height);
        } catch(e) {
          netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
          imgd = context.getImageData(0, 0, canvas.width, canvas.height);
        }
      } catch(e) {
        throw new Error("Unable to access image data: " + e);
      }

      return imgd;
    },

    deleteAllFilters: function() {
      for (var i = 0; i <= localStorage.length - 1; i++)
        $('#li_' + localStorage.key(i)).remove();
      localStorage.clear();
    },

    getHistoryEntry: function(id) {
      return historyArray[id];
    },

    updateHistory: function(id) {
      historyArray = historyArray.slice(0, id + 1);
      redrawHistory(historyArray);
      ip.cleanResult();
    },

    applyFilter: function (id) {
      var filter = JSON.parse(localStorage.getItem(id));
      setTimeout(function() {
        $("#canvas").pixastic("linearFilter", filter);
        ip.cleanResult();
        ip.addHistory(ip.getCurrentImageData(), filter.name, 0);
      }, 10);
    },

    createFilter: function(nameSelector, kernelTableSelector, dividerSelector) {
      function getDivider(dividerSelector) {
        var val = parseFloat($(dividerSelector).val());
        if (val == 0)
          return undefined;
        return val;
      }

      var filter = new Filter(
              $(nameSelector).val(),
              getKernelFromInputTable(kernelTableSelector),
              getDivider(dividerSelector));

      if (filter.save())
        addFilterToList($('#linear_filters_list'), filter);
    },

    deleteFilter: function(id) {
      $('#li_' + id).remove();
      localStorage.removeItem(id);
    }
  }
}();