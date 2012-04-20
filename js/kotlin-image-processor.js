var classes = function(){
  var tmp$0 = Kotlin.Class.create({initialize:function(filterName, timeInMs){
    this.$filterName = filterName;
    this.$timeInMs = timeInMs;
    this.$savedData = getContextForCanvas(getCanvasById('canvas')).getImageData(0, 0, getCanvasById('canvas').width, getCanvasById('canvas').height);
    {
      ip.ui.history.get_History().get_entries().add(this);
      ip.ui.history.get_History().render();
    }
  }
  , get_filterName:function(){
    return this.$filterName;
  }
  , get_timeInMs:function(){
    return this.$timeInMs;
  }
  , get_savedData:function(){
    return this.$savedData;
  }
  });
  var tmp$1 = Kotlin.Trait.create({render:function(builder, indent){
  }
  , toString:function(){
    {
      var builder = new Kotlin.StringBuilder;
      this.render(builder, '');
      return builder.toString();
    }
  }
  });
  var tmp$2 = Kotlin.Class.create(tmp$1, {initialize:function(name_0){
    this.$name = name_0;
    this.$children = new Kotlin.ArrayList;
    this.$attributes = new Kotlin.HashMap;
  }
  , get_name:function(){
    return this.$name;
  }
  , get_children:function(){
    return this.$children;
  }
  , get_attributes:function(){
    return this.$attributes;
  }
  , initTag:function(tag, init){
    {
      init.call(tag);
      this.get_children().add(tag);
      return tag;
    }
  }
  , render:function(builder, indent){
    {
      builder.append(indent + '<' + this.get_name() + this.renderAttributes() + '>' + '\n');
      var tmp$0;
      {
        tmp$0 = this.get_children().iterator();
        while (tmp$0.hasNext()) {
          var c = tmp$0.next();
          {
            c.render(builder, indent + '  ');
          }
        }
      }
      builder.append(indent + '<\/' + this.get_name() + '>' + '\n');
    }
  }
  , renderAttributes:function(){
    {
      var builder = new Kotlin.StringBuilder;
      var tmp$0;
      {
        tmp$0 = this.get_attributes().keySet().iterator();
        while (tmp$0.hasNext()) {
          var a = tmp$0.next();
          {
            builder.append(' ' + a + '=' + '"' + this.get_attributes().get(a) + '"');
          }
        }
      }
      return builder.toString();
    }
  }
  });
  var tmp$3 = Kotlin.Class.create(tmp$2, {initialize:function(name_0){
    this.super_init(name_0);
  }
  , plus:function(receiver){
    {
      this.get_children().add(new html.TextElement(receiver));
    }
  }
  });
  var tmp$4 = Kotlin.Class.create(tmp$3, {initialize:function(name_0){
    this.super_init(name_0);
  }
  , get_cssClass:function(){
    {
      return this.get_attributes().get('class');
    }
  }
  , set_cssClass:function(value){
    {
      kotlin.set(this.get_attributes(), 'class', value);
    }
  }
  , get_id:function(){
    {
      return this.get_attributes().get('id');
    }
  }
  , set_id:function(value){
    {
      kotlin.set(this.get_attributes(), 'id', value);
    }
  }
  , b:function(init){
    {
      return this.initTag(new html.B, init);
    }
  }
  , p:function(init){
    {
      return this.initTag(new html.P, init);
    }
  }
  , h1:function(init){
    {
      return this.initTag(new html.H1, init);
    }
  }
  , ul:function(init){
    {
      return this.initTag(new html.UL, init);
    }
  }
  , button:function(init){
    {
      return this.initTag(new html.Button, init);
    }
  }
  , a_0:function(href, init){
    {
      var a = this.initTag(new html.A, init);
      a.set_href(href);
    }
  }
  });
  var tmp$5 = Kotlin.Class.create(tmp$4, {initialize:function(){
    this.super_init('button');
  }
  });
  var tmp$6 = Kotlin.Class.create(tmp$4, {initialize:function(){
    this.super_init('a');
  }
  , get_href:function(){
    {
      return this.get_attributes().get('href');
    }
  }
  , set_href:function(value){
    {
      kotlin.set(this.get_attributes(), 'href', value);
    }
  }
  });
  var tmp$7 = Kotlin.Class.create(tmp$4, {initialize:function(){
    this.super_init('h1');
  }
  });
  var tmp$8 = Kotlin.Class.create(tmp$4, {initialize:function(){
    this.super_init('p');
  }
  });
  var tmp$9 = Kotlin.Class.create(tmp$4, {initialize:function(){
    this.super_init('li');
  }
  });
  var tmp$10 = Kotlin.Class.create(tmp$4, {initialize:function(){
    this.super_init('b');
  }
  });
  var tmp$11 = Kotlin.Class.create(tmp$4, {initialize:function(){
    this.super_init('img');
  }
  , get_src:function(){
    {
      return this.get_attributes().get('src');
    }
  }
  , set_src:function(value){
    {
      kotlin.set(this.get_attributes(), 'src', value);
    }
  }
  });
  var tmp$12 = Kotlin.Class.create(tmp$4, {initialize:function(){
    this.super_init('ul');
  }
  , li:function(init){
    {
      return this.initTag(new html.LI, init);
    }
  }
  });
  var tmp$13 = Kotlin.Class.create(tmp$4, {initialize:function(){
    this.super_init('body');
  }
  });
  var tmp$14 = Kotlin.Class.create(tmp$3, {initialize:function(){
    this.super_init('title');
  }
  });
  var tmp$15 = Kotlin.Class.create(tmp$3, {initialize:function(){
    this.super_init('head');
  }
  , title:function(init){
    {
      return this.initTag(new html.Title, init);
    }
  }
  });
  var tmp$16 = Kotlin.Class.create(tmp$3, {initialize:function(){
    this.super_init('html');
  }
  , head:function(init){
    {
      return this.initTag(new html.Head, init);
    }
  }
  , body:function(init){
    {
      return this.initTag(new html.Body, init);
    }
  }
  });
  var tmp$17 = Kotlin.Class.create(tmp$1, {initialize:function(text){
    this.$text = text;
  }
  , get_text:function(){
    return this.$text;
  }
  , render:function(builder, indent){
    {
      builder.append(indent + this.get_text() + '\n');
    }
  }
  });
  var tmp$18 = Kotlin.Trait.create({get_name:function(){
    return this.$name;
  }
  , apply:function(){
    {
      $('#canvas').pixastic(this.get_name());
    }
  }
  });
  var tmp$19 = Kotlin.Class.create(tmp$18, {initialize:function(name_0){
    this.$name = name_0;
    {
    }
  }
  , get_name:function(){
    return this.$name;
  }
  });
  var tmp$20 = Kotlin.Class.create(tmp$18, {initialize:function(name_0, process){
    this.$name = name_0;
    this.$process = process;
    {
      addAction(this.get_name(), this.get_process());
    }
  }
  , get_name:function(){
    return this.$name;
  }
  , get_process:function(){
    return this.$process;
  }
  });
  var tmp$21 = Kotlin.Class.create(tmp$18, {initialize:function(probability, min){
    this.$probability = probability;
    this.$min = min;
    this.$name = 'Dust P = ' + this.get_probability() + ' min = ' + this.get_min();
  }
  , get_probability:function(){
    return this.$probability;
  }
  , get_min:function(){
    return this.$min;
  }
  , get_name:function(){
    return this.$name;
  }
  , apply:function(){
    {
      var tmp$0_0;
      var dummy = new ip.filters.StandardFilter(this.get_name(), (tmp$0_0 = this , function(oldData, newData, width, height){
        {
          var tmp$0;
          {
            tmp$0 = width - 1 + 1;
            for (var x = 0; x != tmp$0; ++x) {
              var tmp$1;
              {
                tmp$1 = height - 1 + 1;
                for (var y = 0; y != tmp$1; ++y) {
                  if (Math.random() < tmp$0_0.get_probability()) {
                    var tmp$2;
                    {
                      tmp$2 = 2 + 1;
                      for (var offset = 0; offset != tmp$2; ++offset) {
                        newData[(y * width + x) * 4 + offset] = Math.floor(tmp$0_0.get_min() + (255 - tmp$0_0.get_min()) * Math.random());
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      ));
      dummy.apply();
    }
  }
  });
  var tmp$22 = Kotlin.Class.create(tmp$18, {initialize:function(name_0, size, intMatrix, divider){
    this.$name = name_0;
    this.$size = size;
    this.$intMatrix = intMatrix;
    this.$divider = divider;
    {
      var tmp$0_0;
      addAction(this.get_name(), (tmp$0_0 = this , function(oldData, newData, width, height){
        {
          var offset = Math.floor(tmp$0_0.get_size() / 2);
          var tmp$0;
          var matrix = Kotlin.arrayFromFun(tmp$0_0.get_size() * tmp$0_0.get_size(), (tmp$0 = tmp$0_0 , function(it){
            {
              return tmp$0.get_intMatrix()[it] / tmp$0.get_divider();
            }
          }
          ));
          var tmp$1;
          {
            tmp$1 = height - offset - 1 + 1;
            for (var u = offset; u != tmp$1; ++u) {
              var tmp$2;
              {
                tmp$2 = width - offset - 1 + 1;
                for (var v = offset; v != tmp$2; ++v) {
                  var sumR = 0;
                  var sumG = 0;
                  var sumB = 0;
                  var tmp$3;
                  {
                    tmp$3 = offset + 1;
                    for (var i = -offset; i != tmp$3; ++i) {
                      var tmp$4;
                      {
                        tmp$4 = offset + 1;
                        for (var j = -offset; j != tmp$4; ++j) {
                          var weight = matrix[(i + offset) * tmp$0_0.get_size() + j + offset];
                          sumR += oldData[((u + i) * width + (v + j)) * 4] * weight;
                          sumG += oldData[((u + i) * width + (v + j)) * 4 + 1] * weight;
                          sumB += oldData[((u + i) * width + (v + j)) * 4 + 2] * weight;
                        }
                      }
                    }
                  }
                  var tmp$5;
                  if (Math.floor(sumR) > 255)
                    tmp$5 = 255;
                  else 
                    tmp$5 = Math.floor(sumR);
                  newData[(u * width + v) * 4] = tmp$5;
                  var tmp$6;
                  if (Math.floor(sumG) > 255)
                    tmp$6 = 255;
                  else 
                    tmp$6 = Math.floor(sumG);
                  newData[(u * width + v) * 4 + 1] = tmp$6;
                  var tmp$7;
                  if (Math.floor(sumB) > 255)
                    tmp$7 = 255;
                  else 
                    tmp$7 = Math.floor(sumB);
                  newData[(u * width + v) * 4 + 2] = tmp$7;
                }
              }
            }
          }
        }
      }
      ));
    }
  }
  , get_name:function(){
    return this.$name;
  }
  , get_size:function(){
    return this.$size;
  }
  , get_intMatrix:function(){
    return this.$intMatrix;
  }
  , get_divider:function(){
    return this.$divider;
  }
  });
  var tmp$23 = Kotlin.Class.create(tmp$18, {initialize:function(data){
    this.$data = data;
    this.$name = 'Difference';
  }
  , get_data:function(){
    return this.$data;
  }
  , apply:function(){
    {
      var tmp$0_0;
      var dummy = new ip.filters.StandardFilter(this.get_name(), (tmp$0_0 = this , function(oldData, newData, width, height){
        {
          var otherData = tmp$0_0.get_data();
          var tmp$0;
          {
            tmp$0 = width - 1 + 1;
            for (var x = 0; x != tmp$0; ++x) {
              var tmp$1;
              {
                tmp$1 = height - 1 + 1;
                for (var y = 0; y != tmp$1; ++y) {
                  var tmp$2;
                  {
                    tmp$2 = 2 + 1;
                    for (var offset = 0; offset != tmp$2; ++offset) {
                      var newValue = oldData[(y * width + x) * 4 + offset] - otherData[(y * width + x) * 4 + offset];
                      newData[(y * width + x) * 4 + offset] = Math.floor(Math.abs(newValue));
                    }
                  }
                }
              }
            }
          }
        }
      }
      ));
      dummy.apply();
    }
  }
  , get_name:function(){
    return this.$name;
  }
  });
  var tmp$24 = Kotlin.Class.create(tmp$18, {initialize:function(w, h, r, g, b){
    this.$w = w;
    this.$h = h;
    this.$r = r;
    this.$g = g;
    this.$b = b;
    this.$name = 'Grid w = ' + this.get_w() + ' h = ' + this.get_h();
  }
  , get_w:function(){
    return this.$w;
  }
  , get_h:function(){
    return this.$h;
  }
  , get_r:function(){
    return this.$r;
  }
  , get_g:function(){
    return this.$g;
  }
  , get_b:function(){
    return this.$b;
  }
  , get_name:function(){
    return this.$name;
  }
  , apply:function(){
    {
      var tmp$0;
      var dummy = new ip.filters.StandardFilter(this.get_name(), (tmp$0 = this , function(oldData, newData, width, height){
        {
          tmp$0.verticalStripes(width, height, newData);
          tmp$0.horizontalStripes(width, height, newData);
        }
      }
      ));
      dummy.apply();
    }
  }
  , horizontalStripes:function(width, height, newData){
    {
      var cy = Math.floor(height / 2);
      var y = cy;
      while (y < height) {
        var tmp$0;
        {
          tmp$0 = width - 1 + 1;
          for (var x = 0; x != tmp$0; ++x) {
            newData[(y * width + x) * 4 + 0] = this.get_r();
            newData[(y * width + x) * 4 + 1] = this.get_g();
            newData[(y * width + x) * 4 + 2] = this.get_b();
          }
        }
        y += this.get_h();
      }
      y = cy - this.get_h();
      while (y > 0) {
        var tmp$1;
        {
          tmp$1 = width - 1 + 1;
          for (var x$0 = 0; x$0 != tmp$1; ++x$0) {
            newData[(y * width + x$0) * 4 + 0] = this.get_r();
            newData[(y * width + x$0) * 4 + 1] = this.get_g();
            newData[(y * width + x$0) * 4 + 2] = this.get_b();
          }
        }
        y -= this.get_h();
      }
    }
  }
  , verticalStripes:function(width, height, newData){
    {
      var cx = Math.floor(width / 2);
      var x = cx;
      while (x < width) {
        var tmp$0;
        {
          tmp$0 = height - 1 + 1;
          for (var y = 0; y != tmp$0; ++y) {
            newData[(y * width + x) * 4 + 0] = this.get_r();
            newData[(y * width + x) * 4 + 1] = this.get_g();
            newData[(y * width + x) * 4 + 2] = this.get_b();
          }
        }
        x += this.get_w();
      }
      x = cx - this.get_w();
      while (x > 0) {
        var tmp$1;
        {
          tmp$1 = height - 1 + 1;
          for (var y$0 = 0; y$0 != tmp$1; ++y$0) {
            newData[(y$0 * width + x) * 4 + 0] = this.get_r();
            newData[(y$0 * width + x) * 4 + 1] = this.get_g();
            newData[(y$0 * width + x) * 4 + 2] = this.get_b();
          }
        }
        x -= this.get_w();
      }
    }
  }
  });
  var tmp$25 = Kotlin.Class.create(tmp$18, {initialize:function(radius){
    this.$radius = radius;
    this.$name = 'Median' + this.get_radius();
  }
  , get_radius:function(){
    return this.$radius;
  }
  , apply:function(){
    {
      applyMedian($('#canvas'), this.get_radius());
    }
  }
  , get_name:function(){
    return this.$name;
  }
  });
  var tmp$26 = Kotlin.Class.create(tmp$18, {initialize:function(probability, d){
    this.$probability = probability;
    this.$d = d;
    this.$name = 'WhiteNoise P = ' + this.get_probability() + ' D = ' + this.get_d();
  }
  , get_probability:function(){
    return this.$probability;
  }
  , get_d:function(){
    return this.$d;
  }
  , get_name:function(){
    return this.$name;
  }
  , apply:function(){
    {
      var tmp$0_0;
      var dummy = new ip.filters.StandardFilter(this.get_name(), (tmp$0_0 = this , function(oldData, newData, width, height){
        {
          var tmp$0;
          {
            tmp$0 = width - 1 + 1;
            for (var x = 0; x != tmp$0; ++x) {
              var tmp$1;
              {
                tmp$1 = height - 1 + 1;
                for (var y = 0; y != tmp$1; ++y) {
                  if (Math.random() < tmp$0_0.get_probability()) {
                    var tmp$2;
                    {
                      tmp$2 = 2 + 1;
                      for (var offset = 0; offset != tmp$2; ++offset) {
                        var newValue = oldData[(y * width + x) * 4 + offset] + Math.floor(-tmp$0_0.get_d() + Math.random() * 2 * tmp$0_0.get_d());
                        newData[(y * width + x) * 4 + offset] = Math.min(255, Math.max(0, newValue));
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      ));
      dummy.apply();
    }
  }
  });
  var tmp$27 = Kotlin.Class.create({initialize:function(formId, size){
    this.$formId = formId;
    this.$size = size;
    {
      var tmp$0;
      $((tmp$0 = this , function(){
        {
          tmp$0.init();
        }
      }
      ));
    }
  }
  , get_formId:function(){
    return this.$formId;
  }
  , get_size:function(){
    return this.$size;
  }
  , init:function(){
    {
      var tmp$0;
      var closeHandler = (tmp$0 = this , function(){
        {
          $(this).dialog('close');
        }
      }
      );
      var tmp$1;
      var addHandler = (tmp$1 = this , function(){
        {
          if (tmp$1.validateForm()) {
            var matrix = tmp$1.getMatrixDataFromForm();
            var name_0 = tmp$1.getFilterNameFromForm();
            var divider = tmp$1.getDividerFromForm();
            ip.filters.get_Filters().registerCustomFilter(new ip.filters.LinearFilter(name_0, tmp$1.get_size(), matrix, divider));
            ip.ui.renderCustomFilters();
            $(this).dialog('close');
          }
        }
      }
      );
      $(this.get_formId()).dialog(ip.utils.buttons_0(ip.utils.initialHeight(ip.utils.fixedWidth(ip.utils.doNotOpenYet(ip.utils.modal(ip.utils.defaultParams())), 500), 350), [ip.utils.to('Cancel', closeHandler), ip.utils.to('Add', addHandler)]));
      var tmp$2;
      $('#add_filter_' + this.get_size() + 'x' + this.get_size()).button().click((tmp$2 = this , function(it){
        {
          $(tmp$2.get_formId()).dialog('open');
        }
      }
      ));
    }
  }
  , validateForm:function(){
    {
      return !ip.filters.get_Filters().exists(this.getFilterNameFromForm());
    }
  }
  , getMatrixDataFromForm:function(){
    {
      var tmp$0;
      return Kotlin.arrayFromFun(this.get_size() * this.get_size(), (tmp$0 = this , function(it){
        {
          var data = Kotlin.parseInt(Kotlin.sure($(tmp$0.get_formId() + '_' + (it + 1)).val()));
          if (data != null)
            return data;
          else 
            return 0;
        }
      }
      ));
    }
  }
  , getFilterNameFromForm:function(){
    {
      return Kotlin.sure($(this.get_formId() + '_name').val());
    }
  }
  , getDividerFromForm:function(){
    {
      var data = Kotlin.parseInt(Kotlin.sure($(this.get_formId() + '_divider').val()));
      var tmp$0;
      if (data != null)
        tmp$0 = data;
      else 
        tmp$0 = 1;
      return tmp$0;
    }
  }
  , setupForFilter:function(filter){
    {
    }
  }
  });
  return {StandardFilter:tmp$20, Grid:tmp$24, Difference:tmp$23, LinearFilter:tmp$22, Dust:tmp$21, Form_0:tmp$27, LI:tmp$9, Median:tmp$25, WhiteNoise:tmp$26, Button:tmp$5, A:tmp$6, H1:tmp$7, P:tmp$8, Element_0:tmp$1, Tag:tmp$2, TagWithText:tmp$3, BodyTag:tmp$4, HistoryEntry:tmp$0, IMG:tmp$11, B:tmp$10, Body:tmp$13, UL:tmp$12, Title:tmp$14, Head:tmp$15, HTML:tmp$16, TextElement:tmp$17, Filter:tmp$18, PredefinedFilter:tmp$19};
}
();
var ip = Kotlin.Namespace.create({initialize:function(){
}
, resultingImageHtml:function(data){
  {
    return html.htmlFragment(new html.IMG, function(){
      {
        this.set_src(data);
      }
    }
    );
  }
}
, main:function(args){
  {
    $(function(){
      {
        $('#tools').tabs();
        ip.ui.setUpButtons();
        ip.setupHistoryToolbar();
        ip.setupToolsToolbar();
        ip.ui.history.get_History().render();
        ip.setupImageToolbar(200, 200);
        $('#clear_custom_filters').button().click(function(it){
          {
            ip.filters.get_Filters().clearCustom();
            ip.ui.renderCustomFilters();
          }
        }
        );
        var forms3x3 = new ip.Form_0('#form3x3', 3);
        var forms5x5 = new ip.Form_0('#form5x5', 5);
        ip.filters.get_Filters().loadCustom();
        ip.ui.renderCustomFilters();
      }
    }
    );
  }
}
, setupHistoryToolbar:function(){
  {
    $('#history').dialog(ip.utils.title(ip.utils.position(ip.utils.fixedWidth(ip.utils.initialHeight(ip.utils.defaultParams(), 500), 300), 'right top'), 'History'));
  }
}
, setupToolsToolbar:function(){
  {
    $('#tools').dialog(ip.utils.initialHeight(ip.utils.position$0(ip.utils.title(ip.utils.fixedWidth(ip.utils.defaultParams(), 350), 'Tools'), 0, 120), 800));
  }
}
, setupImageToolbar:function(width, height){
  {
    $('#image').dialog(ip.utils.initialHeight(ip.utils.position$0(ip.utils.title(ip.utils.defaultParams(), 'Image'), 350, 120), height));
  }
}
}, {Form_0:classes.Form_0, filters:Kotlin.Namespace.create({initialize:function(){
  this.$integrating3 = new ip.filters.LinearFilter('integrating_3x3', 3, Kotlin.arrayFromFun(9, function(it){
    {
      return 1;
    }
  }
  ), 9);
  this.$integrating5 = new ip.filters.LinearFilter('integrating_5x5', 5, Kotlin.arrayFromFun(25, function(it){
    {
      return 1;
    }
  }
  ), 25);
  this.$erosion = new ip.filters.StandardFilter('erosion', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = 2 + 1;
        for (var offset = 0; offset != tmp$0; ++offset) {
          ip.filters.corners_e(oldData, newData, width, height, offset);
          ip.filters.sides_e(oldData, newData, width, height, offset);
          var tmp$1;
          {
            tmp$1 = width - 2 + 1;
            for (var x = 1; x != tmp$1; ++x) {
              var tmp$2;
              {
                tmp$2 = height - 2 + 1;
                for (var y = 1; y != tmp$2; ++y) {
                  newData[(y * width + x) * 4 + offset] = Math.min(oldData[(y * width + x - 1) * 4 + offset], oldData[((y - 1) * width + x) * 4 + offset], oldData[(y * width + x) * 4 + offset], oldData[((y + 1) * width + x) * 4 + offset], oldData[(y * width + x + 1) * 4 + offset]);
                }
              }
            }
          }
        }
      }
    }
  }
  );
  this.$dilation = new ip.filters.StandardFilter('dilation', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = 2 + 1;
        for (var offset = 0; offset != tmp$0; ++offset) {
          ip.filters.corners_d(oldData, newData, width, height, offset);
          ip.filters.sides_d(oldData, newData, width, height, offset);
          var tmp$1;
          {
            tmp$1 = width - 2 + 1;
            for (var x = 1; x != tmp$1; ++x) {
              var tmp$2;
              {
                tmp$2 = height - 2 + 1;
                for (var y = 1; y != tmp$2; ++y) {
                  newData[(y * width + x) * 4 + offset] = Math.max(oldData[(y * width + x - 1) * 4 + offset], oldData[((y - 1) * width + x) * 4 + offset], oldData[(y * width + x) * 4 + offset], oldData[((y + 1) * width + x) * 4 + offset], oldData[(y * width + x + 1) * 4 + offset]);
                }
              }
            }
          }
        }
      }
    }
  }
  );
  this.$invert = new ip.filters.PredefinedFilter('invert');
  this.$geometricMean = new ip.filters.StandardFilter('geometric mean', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = 2 + 1;
        for (var offset = 0; offset != tmp$0; ++offset) {
          var tmp$1;
          {
            tmp$1 = width - 2 + 1;
            for (var x = 1; x != tmp$1; ++x) {
              var tmp$2;
              {
                tmp$2 = height - 2 + 1;
                for (var y = 1; y != tmp$2; ++y) {
                  var mul = oldData[(y * width + x) * 4 + offset] * oldData[(y * width + x - 1) * 4 + offset] * oldData[(y * width + x + 1) * 4 + offset] * oldData[((y - 1) * width + x) * 4 + offset] * oldData[((y - 1) * width + x - 1) * 4 + offset] * oldData[((y - 1) * width + x + 1) * 4 + offset] * oldData[((y + 1) * width + x) * 4 + offset] * oldData[((y + 1) * width + x - 1) * 4 + offset] * oldData[((y + 1) * width + x + 1) * 4 + offset];
                  newData[(y * width + x) * 4 + offset] = Math.ceil(Math.pow(mul, 1 / 9));
                }
              }
            }
          }
        }
      }
    }
  }
  );
  this.$harmonicMean = new ip.filters.StandardFilter('harmonic mean', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = 2 + 1;
        for (var offset = 0; offset != tmp$0; ++offset) {
          var tmp$1;
          {
            tmp$1 = width - 2 + 1;
            for (var x = 1; x != tmp$1; ++x) {
              var tmp$2;
              {
                tmp$2 = height - 2 + 1;
                for (var y = 1; y != tmp$2; ++y) {
                  var down = 1 / (oldData[(y * width + x) * 4 + offset] + 1) + 1 / (oldData[(y * width + x - 1) * 4 + offset] + 1) + 1 / (oldData[(y * width + x + 1) * 4 + offset] + 1) + 1 / (oldData[((y - 1) * width + x) * 4 + offset] + 1) + 1 / (oldData[((y - 1) * width + x - 1) * 4 + offset] + 1) + 1 / (oldData[((y - 1) * width + x + 1) * 4 + offset] + 1) + 1 / (oldData[((y + 1) * width + x) * 4 + offset] + 1) + 1 / (oldData[((y + 1) * width + x - 1) * 4 + offset] + 1) + 1 / (oldData[((y + 1) * width + x + 1) * 4 + offset] + 1);
                  newData[(y * width + x) * 4 + offset] = Math.ceil(9 / down);
                }
              }
            }
          }
        }
      }
    }
  }
  );
  this.$contraharmonicMean = new ip.filters.StandardFilter('contraharmonic mean', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = 2 + 1;
        for (var offset = 0; offset != tmp$0; ++offset) {
          var tmp$1;
          {
            tmp$1 = width - 2 + 1;
            for (var x = 1; x != tmp$1; ++x) {
              var tmp$2;
              {
                tmp$2 = height - 2 + 1;
                for (var y = 1; y != tmp$2; ++y) {
                  var up = oldData[(y * width + x) * 4 + offset] * oldData[(y * width + x) * 4 + offset] + oldData[(y * width + x - 1) * 4 + offset] * oldData[(y * width + x - 1) * 4 + offset] + oldData[(y * width + x + 1) * 4 + offset] * oldData[(y * width + x + 1) * 4 + offset] + oldData[((y - 1) * width + x) * 4 + offset] * oldData[((y - 1) * width + x) * 4 + offset] + oldData[((y - 1) * width + x - 1) * 4 + offset] * oldData[((y - 1) * width + x - 1) * 4 + offset] + oldData[((y - 1) * width + x + 1) * 4 + offset] * oldData[((y - 1) * width + x + 1) * 4 + offset] + oldData[((y + 1) * width + x) * 4 + offset] * oldData[((y + 1) * width + x) * 4 + offset] + oldData[((y + 1) * width + x - 1) * 4 + offset] * oldData[((y + 1) * width + x - 1) * 4 + offset] + oldData[((y + 1) * width + x + 1) * 4 + offset] * oldData[((y + 1) * width + x + 1) * 4 + offset];
                  var down = oldData[(y * width + x) * 4 + offset] + oldData[(y * width + x - 1) * 4 + offset] + oldData[(y * width + x + 1) * 4 + offset] + oldData[((y - 1) * width + x) * 4 + offset] + oldData[((y - 1) * width + x - 1) * 4 + offset] + oldData[((y - 1) * width + x + 1) * 4 + offset] + oldData[((y + 1) * width + x) * 4 + offset] + oldData[((y + 1) * width + x - 1) * 4 + offset] + oldData[((y + 1) * width + x + 1) * 4 + offset];
                  newData[(y * width + x) * 4 + offset] = Math.min(255, Math.ceil(up / Math.max(1, down)));
                }
              }
            }
          }
        }
      }
    }
  }
  );
  this.$sobelOperator = new ip.filters.StandardFilter('Sobel operator', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = width - 2 + 1;
        for (var x = 1; x != tmp$0; ++x) {
          var tmp$1;
          {
            tmp$1 = height - 2 + 1;
            for (var y = 1; y != tmp$1; ++y) {
              var gx = 0;
              var gy = 0;
              var tmp$2;
              {
                tmp$2 = 2 + 1;
                for (var offset = 0; offset != tmp$2; ++offset) {
                  gx += 2 * oldData[(y * width + x + 1) * 4 + offset] + oldData[((y - 1) * width + x + 1) * 4 + offset] + oldData[((y + 1) * width + x + 1) * 4 + offset];
                  gx -= 2 * oldData[(y * width + x - 1) * 4 + offset] + oldData[((y - 1) * width + x - 1) * 4 + offset] + oldData[((y + 1) * width + x - 1) * 4 + offset];
                  gy += oldData[((y + 1) * width + x + 1) * 4 + offset] + 2 * oldData[((y + 1) * width + x + 0) * 4 + offset] + oldData[((y + 1) * width + x - 1) * 4 + offset];
                  gy -= oldData[((y - 1) * width + x + 1) * 4 + offset] + 2 * oldData[((y - 1) * width + x + 0) * 4 + offset] + oldData[((y - 1) * width + x - 1) * 4 + offset];
                }
              }
              var g = Math.sqrt(gx * gx + gy * gy);
              var tmp$3;
              {
                tmp$3 = 2 + 1;
                for (var offset$0 = 0; offset$0 != tmp$3; ++offset$0) {
                  newData[(y * width + x) * 4 + offset$0] = Math.min(255, Math.floor(g));
                }
              }
            }
          }
        }
      }
      var tmp$4;
      {
        tmp$4 = width - 1 + 1;
        for (var x$0 = 0; x$0 != tmp$4; ++x$0) {
          var tmp$5;
          {
            tmp$5 = 2 + 1;
            for (var offset$1 = 0; offset$1 != tmp$5; ++offset$1) {
              newData[(0 * width + x$0) * 4 + offset$1] = 0;
              newData[((height - 1) * width + x$0) * 4 + offset$1] = 0;
            }
          }
        }
      }
      var tmp$6;
      {
        tmp$6 = height - 1 + 1;
        for (var y$0 = 0; y$0 != tmp$6; ++y$0) {
          var tmp$7;
          {
            tmp$7 = 2 + 1;
            for (var offset$2 = 0; offset$2 != tmp$7; ++offset$2) {
              newData[(y$0 * width + 0) * 4 + offset$2] = 0;
              newData[(y$0 * width + width - 1) * 4 + offset$2] = 0;
            }
          }
        }
      }
    }
  }
  );
  this.$prewittOperator = new ip.filters.StandardFilter('Prewitt operator', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = width - 2 + 1;
        for (var x = 1; x != tmp$0; ++x) {
          var tmp$1;
          {
            tmp$1 = height - 2 + 1;
            for (var y = 1; y != tmp$1; ++y) {
              var gx = 0;
              var gy = 0;
              var tmp$2;
              {
                tmp$2 = 2 + 1;
                for (var offset = 0; offset != tmp$2; ++offset) {
                  gx += oldData[(y * width + x + 1) * 4 + offset] + oldData[((y - 1) * width + x + 1) * 4 + offset] + oldData[((y + 1) * width + x + 1) * 4 + offset];
                  gx -= oldData[(y * width + x - 1) * 4 + offset] + oldData[((y - 1) * width + x - 1) * 4 + offset] + oldData[((y + 1) * width + x - 1) * 4 + offset];
                  gy += oldData[((y + 1) * width + x + 1) * 4 + offset] + oldData[((y + 1) * width + x + 0) * 4 + offset] + oldData[((y + 1) * width + x - 1) * 4 + offset];
                  gy -= oldData[((y - 1) * width + x + 1) * 4 + offset] + oldData[((y - 1) * width + x + 0) * 4 + offset] + oldData[((y - 1) * width + x - 1) * 4 + offset];
                }
              }
              var g = Math.sqrt(gx * gx + gy * gy);
              var tmp$3;
              {
                tmp$3 = 2 + 1;
                for (var offset$0 = 0; offset$0 != tmp$3; ++offset$0) {
                  newData[(y * width + x) * 4 + offset$0] = Math.floor(g);
                }
              }
            }
          }
        }
      }
      var tmp$4;
      {
        tmp$4 = width - 1 + 1;
        for (var x$0 = 0; x$0 != tmp$4; ++x$0) {
          var tmp$5;
          {
            tmp$5 = 2 + 1;
            for (var offset$1 = 0; offset$1 != tmp$5; ++offset$1) {
              newData[(0 * width + x$0) * 4 + offset$1] = 0;
              newData[((height - 1) * width + x$0) * 4 + offset$1] = 0;
            }
          }
        }
      }
      var tmp$6;
      {
        tmp$6 = height - 1 + 1;
        for (var y$0 = 0; y$0 != tmp$6; ++y$0) {
          var tmp$7;
          {
            tmp$7 = 2 + 1;
            for (var offset$2 = 0; offset$2 != tmp$7; ++offset$2) {
              newData[(y$0 * width + 0) * 4 + offset$2] = 0;
              newData[(y$0 * width + width - 1) * 4 + offset$2] = 0;
            }
          }
        }
      }
    }
  }
  );
  this.$robertsOperator = new ip.filters.StandardFilter('RobertsOperator', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = width - 2 + 1;
        for (var x = 1; x != tmp$0; ++x) {
          var tmp$1;
          {
            tmp$1 = height - 2 + 1;
            for (var y = 1; y != tmp$1; ++y) {
              var gx = 0;
              var gy = 0;
              var tmp$2;
              {
                tmp$2 = 2 + 1;
                for (var offset = 0; offset != tmp$2; ++offset) {
                  gx += -oldData[(y * width + x) * 4 + offset] + oldData[((y + 1) * width + x + 1) * 4 + offset];
                  gy += oldData[(y * width + x + 1) * 4 + offset] - oldData[((y + 1) * width + x + 0) * 4 + offset];
                }
              }
              var g = Math.sqrt(gx * gx + gy * gy);
              var tmp$3;
              {
                tmp$3 = 2 + 1;
                for (var offset$0 = 0; offset$0 != tmp$3; ++offset$0) {
                  newData[(y * width + x) * 4 + offset$0] = Math.floor(g);
                }
              }
            }
          }
        }
      }
      var tmp$4;
      {
        tmp$4 = width - 1 + 1;
        for (var x$0 = 0; x$0 != tmp$4; ++x$0) {
          var tmp$5;
          {
            tmp$5 = 2 + 1;
            for (var offset$1 = 0; offset$1 != tmp$5; ++offset$1) {
              newData[(0 * width + x$0) * 4 + offset$1] = 0;
              newData[((height - 1) * width + x$0) * 4 + offset$1] = 0;
            }
          }
        }
      }
      var tmp$6;
      {
        tmp$6 = height - 1 + 1;
        for (var y$0 = 0; y$0 != tmp$6; ++y$0) {
          var tmp$7;
          {
            tmp$7 = 2 + 1;
            for (var offset$2 = 0; offset$2 != tmp$7; ++offset$2) {
              newData[(y$0 * width + 0) * 4 + offset$2] = 0;
              newData[(y$0 * width + width - 1) * 4 + offset$2] = 0;
            }
          }
        }
      }
    }
  }
  );
  this.$Filters = Kotlin.object.create({initialize:function(){
    this.$predefined = new Kotlin.ArrayList;
    this.$custom = new Kotlin.ArrayList;
    this.$localStorageKey = 'KotlinIpFilters3';
  }
  , get_predefined:function(){
    return this.$predefined;
  }
  , get_custom:function(){
    return this.$custom;
  }
  , get_localStorageKey:function(){
    return this.$localStorageKey;
  }
  , clearCustom:function(){
    {
      this.get_custom().clear();
      localStorage.setItem(this.get_localStorageKey(), null);
    }
  }
  , addPredefined:function(filters_0){
    {
      var tmp$0;
      var tmp$1;
      var tmp$2;
      {
        tmp$0 = filters_0 , tmp$1 = tmp$0.length;
        for (var tmp$2 = 0; tmp$2 != tmp$1; ++tmp$2) {
          var filter = tmp$0[tmp$2];
          {
            this.get_predefined().add(filter);
          }
        }
      }
    }
  }
  , apply:function(filter){
    {
      var tmp$0;
      var time = ip.utils.measureTimeInMillis((tmp$0 = this , function(){
        {
          filter.apply();
        }
      }
      ));
      new ip.ui.history.HistoryEntry(filter.get_name(), time);
    }
  }
  , unregisterCustomFilter:function(filter){
    {
      this.get_custom().remove(filter);
    }
  }
  , exists:function(name_0){
    {
      var tmp$0;
      {
        tmp$0 = this.get_predefined().iterator();
        while (tmp$0.hasNext()) {
          var filter = tmp$0.next();
          {
            if (filter.get_name() == name_0) {
              return true;
            }
          }
        }
      }
      var tmp$1;
      {
        tmp$1 = this.get_custom().iterator();
        while (tmp$1.hasNext()) {
          var filter$0 = tmp$1.next();
          {
            if (filter$0.get_name() == name_0) {
              return true;
            }
          }
        }
      }
      return false;
    }
  }
  , loadCustom:function(){
    {
      var savedFilters = localStorage.getItem(this.get_localStorageKey());
      if (savedFilters != null) {
        var tmp$0;
        var tmp$1;
        var tmp$2;
        {
          tmp$0 = filtersFromString(savedFilters) , tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 != tmp$1; ++tmp$2) {
            var savedFilter = tmp$0[tmp$2];
            {
              this.registerCustomFilter(new ip.filters.LinearFilter(savedFilter[0], savedFilter[1], savedFilter[2], savedFilter[3]));
            }
          }
        }
      }
    }
  }
  , saveCustom:function(){
    {
      var tmp$0;
      var savedFilters = Kotlin.arrayFromFun(this.get_custom().size(), (tmp$0 = this , function(it){
        {
          var filter = tmp$0.get_custom().get(it);
          return [filter.get_name(), filter.get_size(), filter.get_intMatrix(), filter.get_divider()];
        }
      }
      ));
      localStorage.setItem(this.get_localStorageKey(), stringifyFilters(savedFilters));
    }
  }
  , registerCustomFilter:function(filter){
    {
      this.get_custom().add(filter);
      this.saveCustom();
    }
  }
  });
}
, corners_d:function(oldData, newData, width, height, offset){
  {
    newData[offset] = Math.max(oldData[offset], oldData[width * 4 + offset], oldData[4 + offset]);
    var x = width - 1;
    var y = 0;
    newData[(y * width + x) * 4 + offset] = Math.max(oldData[(y * width + x - 1) * 4 + offset], oldData[(y * width + x) * 4 + offset], oldData[((y + 1) * width + x) * 4 + offset]);
    x = 0;
    y = height - 1;
    newData[(y * width + x) * 4 + offset] = Math.max(oldData[((y - 1) * width + x) * 4 + offset], oldData[(y * width + x) * 4 + offset], oldData[(y * width + x + 1) * 4 + offset]);
    x = width - 1;
    y = height - 1;
    newData[(y * width + x) * 4 + offset] = Math.max(oldData[(y * width + x - 1) * 4 + offset], oldData[((y - 1) * width + x) * 4 + offset], oldData[(y * width + x) * 4 + offset]);
  }
}
, sides_d:function(oldData, newData, width, height, offset){
  {
    var x = 0;
    var tmp$0;
    {
      tmp$0 = height - 2 + 1;
      for (var y = 1; y != tmp$0; ++y) {
        newData[(y * width + x) * 4 + offset] = Math.max(oldData[((y - 1) * width + x) * 4 + offset], oldData[(y * width + x) * 4 + offset], oldData[((y + 1) * width + x) * 4 + offset], oldData[(y * width + x + 1) * 4 + offset]);
      }
    }
    x = width - 1;
    var tmp$1;
    {
      tmp$1 = height - 2 + 1;
      for (var y$0 = 1; y$0 != tmp$1; ++y$0) {
        newData[(y$0 * width + x) * 4 + offset] = Math.max(oldData[(y$0 * width + x - 1) * 4 + offset], oldData[((y$0 - 1) * width + x) * 4 + offset], oldData[(y$0 * width + x) * 4 + offset], oldData[((y$0 + 1) * width + x) * 4 + offset]);
      }
    }
    var y$1 = 0;
    var tmp$2;
    {
      tmp$2 = width - 2 + 1;
      for (var x$0 = 1; x$0 != tmp$2; ++x$0) {
        newData[(y$1 * width + x$0) * 4 + offset] = Math.max(oldData[(y$1 * width + x$0 - 1) * 4 + offset], oldData[(y$1 * width + x$0) * 4 + offset], oldData[((y$1 + 1) * width + x$0) * 4 + offset], oldData[(y$1 * width + x$0 + 1) * 4 + offset]);
      }
    }
    y$1 = height - 1;
    var tmp$3;
    {
      tmp$3 = width - 2 + 1;
      for (var x$1 = 1; x$1 != tmp$3; ++x$1) {
        newData[(y$1 * width + x$1) * 4 + offset] = Math.max(oldData[(y$1 * width + x$1 - 1) * 4 + offset], oldData[((y$1 - 1) * width + x$1) * 4 + offset], oldData[(y$1 * width + x$1) * 4 + offset], oldData[(y$1 * width + x$1 + 1) * 4 + offset]);
      }
    }
  }
}
, get_integrating3:function(){
  return this.$integrating3;
}
, get_integrating5:function(){
  return this.$integrating5;
}
, corners_e:function(oldData, newData, width, height, offset){
  {
    newData[offset] = Math.min(oldData[offset], oldData[width * 4 + offset], oldData[4 + offset]);
    var x = width - 1;
    var y = 0;
    newData[(y * width + x) * 4 + offset] = Math.min(oldData[(y * width + x - 1) * 4 + offset], oldData[(y * width + x) * 4 + offset], oldData[((y + 1) * width + x) * 4 + offset]);
    x = 0;
    y = height - 1;
    newData[(y * width + x) * 4 + offset] = Math.min(oldData[((y - 1) * width + x) * 4 + offset], oldData[(y * width + x) * 4 + offset], oldData[(y * width + x + 1) * 4 + offset]);
    x = width - 1;
    y = height - 1;
    newData[(y * width + x) * 4 + offset] = Math.min(oldData[(y * width + x - 1) * 4 + offset], oldData[((y - 1) * width + x) * 4 + offset], oldData[(y * width + x) * 4 + offset]);
  }
}
, sides_e:function(oldData, newData, width, height, offset){
  {
    var x = 0;
    var tmp$0;
    {
      tmp$0 = height - 2 + 1;
      for (var y = 1; y != tmp$0; ++y) {
        newData[(y * width + x) * 4 + offset] = Math.min(oldData[((y - 1) * width + x) * 4 + offset], oldData[(y * width + x) * 4 + offset], oldData[((y + 1) * width + x) * 4 + offset], oldData[(y * width + x + 1) * 4 + offset]);
      }
    }
    x = width - 1;
    var tmp$1;
    {
      tmp$1 = height - 2 + 1;
      for (var y$0 = 1; y$0 != tmp$1; ++y$0) {
        newData[(y$0 * width + x) * 4 + offset] = Math.min(oldData[(y$0 * width + x - 1) * 4 + offset], oldData[((y$0 - 1) * width + x) * 4 + offset], oldData[(y$0 * width + x) * 4 + offset], oldData[((y$0 + 1) * width + x) * 4 + offset]);
      }
    }
    var y$1 = 0;
    var tmp$2;
    {
      tmp$2 = width - 2 + 1;
      for (var x$0 = 1; x$0 != tmp$2; ++x$0) {
        newData[(y$1 * width + x$0) * 4 + offset] = Math.min(oldData[(y$1 * width + x$0 - 1) * 4 + offset], oldData[(y$1 * width + x$0) * 4 + offset], oldData[((y$1 + 1) * width + x$0) * 4 + offset], oldData[(y$1 * width + x$0 + 1) * 4 + offset]);
      }
    }
    y$1 = height - 1;
    var tmp$3;
    {
      tmp$3 = width - 2 + 1;
      for (var x$1 = 1; x$1 != tmp$3; ++x$1) {
        newData[(y$1 * width + x$1) * 4 + offset] = Math.min(oldData[(y$1 * width + x$1 - 1) * 4 + offset], oldData[((y$1 - 1) * width + x$1) * 4 + offset], oldData[(y$1 * width + x$1) * 4 + offset], oldData[(y$1 * width + x$1 + 1) * 4 + offset]);
      }
    }
  }
}
, get_erosion:function(){
  return this.$erosion;
}
, get_dilation:function(){
  return this.$dilation;
}
, get_invert:function(){
  return this.$invert;
}
, get_geometricMean:function(){
  return this.$geometricMean;
}
, get_harmonicMean:function(){
  return this.$harmonicMean;
}
, get_contraharmonicMean:function(){
  return this.$contraharmonicMean;
}
, get_sobelOperator:function(){
  return this.$sobelOperator;
}
, get_prewittOperator:function(){
  return this.$prewittOperator;
}
, get_robertsOperator:function(){
  return this.$robertsOperator;
}
, get_Filters:function(){
  return this.$Filters;
}
, getPredefinedFilters:function(){
  {
    return ip.utils.array([ip.filters.get_invert(), ip.filters.get_dilation(), ip.filters.get_erosion(), ip.filters.get_integrating3(), ip.filters.get_integrating5()]);
  }
}
}, {WhiteNoise:classes.WhiteNoise, Median:classes.Median, Grid:classes.Grid, Difference:classes.Difference, LinearFilter:classes.LinearFilter, Dust:classes.Dust, Filter:classes.Filter, StandardFilter:classes.StandardFilter, PredefinedFilter:classes.PredefinedFilter}), helper:Kotlin.Namespace.create({initialize:function(){
}
}, {}), ui:Kotlin.Namespace.create({initialize:function(){
  this.$height = 0;
  this.$width = 0;
  this.$Tools = Kotlin.object.create({initialize:function(){
    {
      var tmp$0;
      $((tmp$0 = this , function(){
        {
          ip.ui.setUpFileLoader();
          ip.ui.setUpSaveImage();
          ip.ui.setupShowAllButton();
          ip.ui.setUpProbabilityFilters();
          ip.ui.setUpCompareTo();
        }
      }
      ));
    }
  }
  });
}
, get_height:function(){
  return this.$height;
}
, set_height:function(tmp$0){
  this.$height = tmp$0;
}
, get_width:function(){
  return this.$width;
}
, set_width:function(tmp$0){
  this.$width = tmp$0;
}
, setUpFileLoader:function(){
  {
    var input = getInputElement('file_loader');
    input.onchange = function(it_0){
      {
        var fileList = input.files;
        if (fileList.length > 0) {
          var fileReader = new FileReader;
          var file = fileList.item(0);
          fileReader.onloadend = function(it){
            {
              var image = new Image;
              image.onload = function(){
                {
                  ip.ui.set_height(image.height);
                  ip.ui.set_width(image.width);
                  var canvas = getCanvasById('canvas');
                  canvas.height = Kotlin.sure(ip.ui.get_height());
                  canvas.width = Kotlin.sure(ip.ui.get_width());
                  ip.utils.setDialogSize($('#image'), ip.ui.get_width() + 40, ip.ui.get_height() + 80);
                  var context = getContextForCanvas(canvas);
                  context.drawImage(image, 0, 0, ip.ui.get_width(), ip.ui.get_height());
                  ip.ui.history.get_History().clean();
                  new ip.ui.history.HistoryEntry('Loaded file', 0);
                }
              }
              ;
              image.src = fileReader.result;
            }
          }
          ;
          if (file != null) {
            fileReader.readAsDataURL(file);
          }
        }
      }
    }
    ;
  }
}
, setUpCompareTo:function(){
  {
    var input = getInputElement('compare_to_loader');
    input.onchange = function(it_0){
      {
        console.log('onchange called');
        var fileList = input.files;
        if (fileList.length > 0) {
          var fileReader = new FileReader;
          var file = fileList.item(0);
          fileReader.onloadend = function(it){
            {
              var image = new Image;
              image.onload = function(){
                {
                  console.log('loaded');
                  var dummyCanvas = getCanvasById('dummy_canvas');
                  dummyCanvas.height = image.height;
                  dummyCanvas.width = image.width;
                  var context = getContextForCanvas(dummyCanvas);
                  context.drawImage(image, 0, 0, ip.ui.get_width(), ip.ui.get_height());
                  var data = context.getImageData(0, 0, image.width, image.height).data;
                  ip.filters.get_Filters().apply(new ip.filters.Difference(data));
                }
              }
              ;
              image.src = fileReader.result;
            }
          }
          ;
          if (file != null) {
            fileReader.readAsDataURL(file);
          }
        }
      }
    }
    ;
  }
}
, setUpSaveImage:function(){
  {
    var format = 'png';
    $(function(){
      {
        $('#result').dialog(Kotlin.jsonFromTuples([['autoOpen', false]]));
        $('#save_as_button').click(function(it){
          {
            var data = getCanvas().toDataURL('image/' + format);
            ip.utils.html_0($('#result'), ip.resultingImageHtml(data)).dialog('open');
          }
        }
        );
      }
    }
    );
    var formats = ip.utils.array(['png', 'bmp', 'jpeg']);
    var tmp$0;
    var tmp$1;
    var tmp$2;
    {
      tmp$0 = formats , tmp$1 = tmp$0.length;
      for (var tmp$2 = 0; tmp$2 != tmp$1; ++tmp$2) {
        var f = tmp$0[tmp$2];
        {
          $(function(f, f){
            return function(){
              {
                $('#format_' + f).click(function(f){
                  return function(it){
                    {
                      format = f;
                    }
                  }
                  ;
                }
                (f));
              }
            }
            ;
          }
          (f, f));
        }
      }
    }
  }
}
, setUpButtons:function(){
  {
    $(function(){
      {
        $('button').button();
        $('input').button();
        $('#format_options').buttonset();
        ip.filters.get_Filters().addPredefined(ip.filters.getPredefinedFilters());
        var tmp$0;
        {
          tmp$0 = ip.filters.get_Filters().get_predefined().iterator();
          while (tmp$0.hasNext()) {
            var filter = tmp$0.next();
            {
              $('#filter_' + filter.get_name()).button().click(function(filter){
                return function(it){
                  {
                    ip.filters.get_Filters().apply(filter);
                  }
                }
                ;
              }
              (filter));
            }
          }
        }
        $('.toolbar').draggable(Kotlin.jsonFromTuples([['containment', 'parent']]));
      }
    }
    );
  }
}
, setUpProbabilityFilters:function(){
  {
    $(function(){
      {
        $('#filter_dust').button().click(function(it){
          {
            var p = Kotlin.safeParseDouble($('#dust_p').val());
            var tmp$0;
            if (p != null)
              tmp$0 = p;
            else 
              tmp$0 = 0.5;
            var probability = tmp$0;
            var m = Kotlin.safeParseInt($('#dust_min').val());
            var tmp$1;
            if (m != null) {
              tmp$1 = Math.min(Math.max(0, m), 255);
            }
             else 
              tmp$1 = 0;
            var min = tmp$1;
            ip.filters.get_Filters().apply(new ip.filters.Dust(probability, min));
          }
        }
        );
        $('#filter_wn').button().click(function(it){
          {
            var p = Kotlin.safeParseDouble($('#wn_p').val());
            var tmp$0;
            if (p != null)
              tmp$0 = p;
            else 
              tmp$0 = 0.5;
            var probability = tmp$0;
            var d = Kotlin.safeParseInt($('#wn_d').val());
            var tmp$1;
            if (d != null) {
              tmp$1 = Math.min(Math.max(0, d), 255);
            }
             else 
              tmp$1 = 0;
            var diff = tmp$1;
            ip.filters.get_Filters().apply(new ip.filters.WhiteNoise(probability, diff));
          }
        }
        );
        $('#filter_grid').button().click(function(it){
          {
            var w = Kotlin.safeParseInt($('#grid_w').val());
            var tmp$0;
            if (w != null) {
              tmp$0 = Math.max(5, w);
            }
             else 
              tmp$0 = 10;
            var width = tmp$0;
            var h = Kotlin.safeParseInt($('#grid_h').val());
            var tmp$1;
            if (h != null) {
              tmp$1 = Math.max(5, h);
            }
             else 
              tmp$1 = 10;
            var height = tmp$1;
            var rgb = getColorsFromColorPicker();
            ip.filters.get_Filters().apply(new ip.filters.Grid(width, height, rgb.r, rgb.g, rgb.b));
          }
        }
        );
        $('#filter_median').button().click(function(it){
          {
            var radius = $('#select_radius').val();
            ip.filters.get_Filters().apply(new ip.filters.Median(radius));
          }
        }
        );
        $('#filter_geometric_mean').button().click(function(it){
          {
            ip.filters.get_Filters().apply(ip.filters.get_geometricMean());
          }
        }
        );
        $('#filter_contraharmonic_mean').button().click(function(it){
          {
            ip.filters.get_Filters().apply(ip.filters.get_contraharmonicMean());
          }
        }
        );
        $('#filter_sobel_operator').button().click(function(it){
          {
            ip.filters.get_Filters().apply(ip.filters.get_sobelOperator());
          }
        }
        );
        $('#filter_harmonic_mean').button().click(function(it){
          {
            ip.filters.get_Filters().apply(ip.filters.get_harmonicMean());
          }
        }
        );
        $('#filter_prewitt_operator').button().click(function(it){
          {
            ip.filters.get_Filters().apply(ip.filters.get_prewittOperator());
          }
        }
        );
        $('#filter_roberts_operator').button().click(function(it){
          {
            ip.filters.get_Filters().apply(ip.filters.get_robertsOperator());
          }
        }
        );
      }
    }
    );
  }
}
, renderCustomFilters:function(){
  {
    $(function(){
      {
        var customLinearFiltersDiv = $('#custom_linear_filters');
        customLinearFiltersDiv.html('');
        var tmp$0;
        {
          tmp$0 = ip.filters.get_Filters().get_custom().iterator();
          while (tmp$0.hasNext()) {
            var filter = tmp$0.next();
            {
              customLinearFiltersDiv.append('\n' + '<button id = ' + filter.get_name() + '>' + filter.get_name() + '<\/button>' + '\n' + '            ');
              $('#' + filter.get_name()).button().click(function(filter){
                return function(it){
                  {
                    ip.filters.get_Filters().apply(filter);
                  }
                }
                ;
              }
              (filter));
            }
          }
        }
      }
    }
    );
  }
}
, setupShowAllButton:function(){
  {
    var mainToolbarsNames = ip.utils.array(['#history', '#image', '#tools']);
    $('#showAll').button().click(function(it){
      {
        var tmp$0;
        var tmp$1;
        var tmp$2;
        {
          tmp$0 = mainToolbarsNames , tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 != tmp$1; ++tmp$2) {
            var toolbarName = tmp$0[tmp$2];
            {
              $(toolbarName).dialog('open');
            }
          }
        }
      }
    }
    );
  }
}
, get_Tools:function(){
  return this.$Tools;
}
}, {history:Kotlin.Namespace.create({initialize:function(){
  this.$History = Kotlin.object.create({initialize:function(){
    var tmp$0;
    this.$entries = new Kotlin.ArrayList;
    this.$emptyHistoryHtml = html.htmlFragment(new html.P, (tmp$0 = this , function(){
      {
        this.plus('No history');
      }
    }
    ));
  }
  , get_entries:function(){
    return this.$entries;
  }
  , get_emptyHistoryHtml:function(){
    return this.$emptyHistoryHtml;
  }
  , get_panel:function(){
    {
      return $('#history');
    }
  }
  , render:function(){
    {
      if (this.get_entries().isEmpty()) {
        ip.utils.html_0(this.get_panel(), this.get_emptyHistoryHtml());
        return;
      }
      ip.utils.html_0(this.get_panel(), this.entriesHtml());
      var i = 0;
      var tmp$0_1;
      {
        tmp$0_1 = this.get_entries().iterator();
        while (tmp$0_1.hasNext()) {
          var entry = tmp$0_1.next();
          {
            var tmp$1;
            (tmp$1 = this , function(){
              {
                var index = i;
                var tmp$0_0;
                return $('#history_item_' + index).button().click((tmp$0_0 = tmp$1 , function(it){
                  {
                    var tmp$0;
                    (tmp$0 = tmp$0_0 , function(){
                      {
                        var correspondingEntry = tmp$0.get_entries().get(index);
                        getContextForCanvas(getCanvasById('canvas')).putImageData(correspondingEntry.get_savedData(), 0, 0);
                        tmp$0.removeAllLaterEntries(index);
                        tmp$0.render();
                      }
                    }
                    )();
                  }
                }
                ));
              }
            }
            )();
            i++;
          }
        }
      }
    }
  }
  , removeAllLaterEntries:function(entryIndex){
    {
      var tmp$0;
      {
        tmp$0 = this.get_entries().size() - 1 + 1;
        for (var i = entryIndex + 1; i != tmp$0; ++i) {
          this.get_entries().removeByIndex(i);
        }
      }
    }
  }
  , clean:function(){
    {
      this.removeAllLaterEntries(-1);
      this.render();
    }
  }
  , entriesHtml:function(){
    var tmp$0_1;
    {
      return html.htmlFragment(new html.UL, (tmp$0_1 = this , function(){
        {
          var i = 0;
          var tmp$0_0;
          {
            tmp$0_0 = tmp$0_1.get_entries().iterator();
            while (tmp$0_0.hasNext()) {
              var entry = tmp$0_0.next();
              {
                var tmp$1;
                this.li(function(entry, entry){
                  return tmp$1 = tmp$0_1 , function(){
                    {
                      var tmp$0;
                      this.button(function(entry, entry){
                        return tmp$0 = tmp$1 , function(){
                          {
                            this.set_id('history_item_' + i);
                            this.set_cssClass('fill_parent');
                            this.plus(entry.get_filterName() + '(' + entry.get_timeInMs() + ')');
                            i++;
                          }
                        }
                        ;
                      }
                      (entry, entry));
                    }
                  }
                  ;
                }
                (entry, entry));
              }
            }
          }
        }
      }
      ));
    }
  }
  });
}
, get_History:function(){
  return this.$History;
}
}, {HistoryEntry:classes.HistoryEntry})}), utils:Kotlin.Namespace.create({initialize:function(){
}
, defaultParams:function(){
  {
    return Kotlin.jsonFromTuples([ip.utils.to('show', 'slide'), ip.utils.to('hide', 'slide')]);
  }
}
, initialHeight:function(receiver, height){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.utils.to('minHeight', height), ip.utils.to('height', height)]));
  }
}
, fixedWidth:function(receiver, width){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.utils.to('maxWidth', width), ip.utils.to('minWidth', width), ip.utils.to('width', width)]));
  }
}
, position:function(receiver, str){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.utils.to('position', str)]));
  }
}
, position$0:function(receiver, x, y){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.utils.to('position', [x, y])]));
  }
}
, title:function(receiver, str){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.utils.to('title', str)]));
  }
}
, doNotOpenYet:function(receiver){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.utils.to('autoOpen', false)]));
  }
}
, modal:function(receiver){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.utils.to('modal', true)]));
  }
}
, buttons_0:function(receiver, buttons){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.utils.to('buttons', Kotlin.jsonFromTuples(buttons))]));
  }
}
, setDialogSize:function(receiver, width, height){
  {
    receiver.dialog('option', 'width', width).dialog('option', 'height', height);
  }
}
, array:function(items){
  {
    return items;
  }
}
, html_0:function(receiver, tag){
  {
    receiver.html(Kotlin.sure(tag.toString()));
    return receiver;
  }
}
, measureTimeInMillis:function(f){
  {
    var start = new Date;
    f();
    var end = new Date;
    return end.getTime() - start.getTime();
  }
}
, to:function(receiver, value){
  {
    return [receiver, value];
  }
}
}, {})});
var kotlin = Kotlin.Namespace.create({initialize:function(){
}
, set:function(receiver, key, value){
  {
    return receiver.put(key, value);
  }
}
}, {});
var html = Kotlin.Namespace.create({initialize:function(){
}
, html_1:function(init){
  {
    var html_0 = new html.HTML;
    init.call(html_0);
    return html_0;
  }
}
, htmlFragment:function(rootTag, init){
  {
    init.call(rootTag);
    return rootTag;
  }
}
}, {Element_0:classes.Element_0, TextElement:classes.TextElement, Tag:classes.Tag, TagWithText:classes.TagWithText, HTML:classes.HTML, Head:classes.Head, Title:classes.Title, BodyTag:classes.BodyTag, Body:classes.Body, UL:classes.UL, IMG:classes.IMG, B:classes.B, LI:classes.LI, P:classes.P, H1:classes.H1, A:classes.A, Button:classes.Button});
ip.initialize();
ip.ui.initialize();
ip.filters.initialize();
kotlin.initialize();
html.initialize();
ip.ui.history.initialize();
ip.utils.initialize();

var args = [];
ip.main(args);
