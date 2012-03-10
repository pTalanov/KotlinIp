var classes = function(){
  var tmp$0 = Kotlin.Class.create({initialize:function(filterName, timeInMs){
    this.$filterName = filterName;
    this.$timeInMs = timeInMs;
    this.$savedData = getContext().getImageData(0, 0, getCanvas().width, getCanvas().height);
    {
      ip.get_History().get_entries().add(this);
      ip.get_History().render();
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
  var tmp$1 = Kotlin.Trait.create({get_name:function(){
    return this.$name;
  }
  , apply:function(){
  }
  });
  var tmp$2 = Kotlin.Class.create(tmp$1, {initialize:function(name_0){
    this.$name = name_0;
  }
  , get_name:function(){
    return this.$name;
  }
  , apply:function(){
    {
      $('#canvas').pixastic(this.get_name());
    }
  }
  });
  var tmp$3 = Kotlin.Class.create(tmp$1, {initialize:function(name_0, process){
    this.$name = name_0;
    this.$process = process;
    {
      addAction(this.get_name(), this.get_process());
      ip.get_Filters().get_all().add(this);
    }
  }
  , get_name:function(){
    return this.$name;
  }
  , get_process:function(){
    return this.$process;
  }
  , apply:function(){
    {
      $('#canvas').pixastic(this.get_name());
    }
  }
  });
  var tmp$4 = Kotlin.Trait.create({render:function(builder, indent){
  }
  , toString:function(){
    {
      var builder = new Kotlin.StringBuilder;
      this.render(builder, '');
      return builder.toString();
    }
  }
  });
  var tmp$5 = Kotlin.Class.create(tmp$4, {initialize:function(name_0){
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
  var tmp$6 = Kotlin.Class.create(tmp$5, {initialize:function(name_0){
    this.super_init(name_0);
  }
  , plus:function(receiver){
    {
      this.get_children().add(new html.TextElement(receiver));
    }
  }
  });
  var tmp$7 = Kotlin.Class.create(tmp$6, {initialize:function(name_0){
    this.super_init(name_0);
  }
  , get_cssClass:function(){
    {
      return this.get_attributes().get('class');
    }
  }
  , set_cssClass:function(value){
    {
      html.set(this.get_attributes(), 'class', value);
    }
  }
  , get_id:function(){
    {
      return this.get_attributes().get('id');
    }
  }
  , set_id:function(value){
    {
      html.set(this.get_attributes(), 'id', value);
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
  var tmp$8 = Kotlin.Class.create(tmp$7, {initialize:function(){
    this.super_init('button');
  }
  });
  var tmp$9 = Kotlin.Class.create(tmp$7, {initialize:function(){
    this.super_init('a');
  }
  , get_href:function(){
    {
      return this.get_attributes().get('href');
    }
  }
  , set_href:function(value){
    {
      html.set(this.get_attributes(), 'href', value);
    }
  }
  });
  var tmp$10 = Kotlin.Class.create(tmp$7, {initialize:function(){
    this.super_init('h1');
  }
  });
  var tmp$11 = Kotlin.Class.create(tmp$7, {initialize:function(){
    this.super_init('p');
  }
  });
  var tmp$12 = Kotlin.Class.create(tmp$7, {initialize:function(){
    this.super_init('li');
  }
  });
  var tmp$13 = Kotlin.Class.create(tmp$7, {initialize:function(){
    this.super_init('b');
  }
  });
  var tmp$14 = Kotlin.Class.create(tmp$7, {initialize:function(){
    this.super_init('img');
  }
  , get_src:function(){
    {
      return this.get_attributes().get('src');
    }
  }
  , set_src:function(value){
    {
      html.set(this.get_attributes(), 'src', value);
    }
  }
  });
  var tmp$15 = Kotlin.Class.create(tmp$7, {initialize:function(){
    this.super_init('ul');
  }
  , li:function(init){
    {
      return this.initTag(new html.LI, init);
    }
  }
  });
  var tmp$16 = Kotlin.Class.create(tmp$7, {initialize:function(){
    this.super_init('body');
  }
  });
  var tmp$17 = Kotlin.Class.create(tmp$6, {initialize:function(){
    this.super_init('title');
  }
  });
  var tmp$18 = Kotlin.Class.create(tmp$6, {initialize:function(){
    this.super_init('head');
  }
  , title:function(init){
    {
      return this.initTag(new html.Title, init);
    }
  }
  });
  var tmp$19 = Kotlin.Class.create(tmp$6, {initialize:function(){
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
  var tmp$20 = Kotlin.Class.create(tmp$4, {initialize:function(text){
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
  return {TextElement:tmp$20, P:tmp$11, H1:tmp$10, B:tmp$13, LI:tmp$12, IMG:tmp$14, A:tmp$9, UL:tmp$15, Body:tmp$16, Title:tmp$17, Head:tmp$18, Tag:tmp$5, HTML:tmp$19, TagWithText:tmp$6, BodyTag:tmp$7, Button:tmp$8, Filter:tmp$1, PredefinedFilter:tmp$2, StandardFilter:tmp$3, Element_0:tmp$4, HistoryEntry:tmp$0};
}
();
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
, set:function(receiver, key, value){
  {
    return receiver.put(key, value);
  }
}
}, {Element_0:classes.Element_0, TextElement:classes.TextElement, Tag:classes.Tag, TagWithText:classes.TagWithText, HTML:classes.HTML, Head:classes.Head, Title:classes.Title, BodyTag:classes.BodyTag, Body:classes.Body, UL:classes.UL, IMG:classes.IMG, B:classes.B, LI:classes.LI, P:classes.P, H1:classes.H1, A:classes.A, Button:classes.Button});
var ip = Kotlin.Namespace.create({initialize:function(){
  $Filters = Kotlin.object.create({initialize:function(){
    this.$all = new Kotlin.ArrayList;
    {
      this.get_all().add(new ip.PredefinedFilter('invert'));
    }
  }
  , get_all:function(){
    return this.$all;
  }
  , apply:function(filter){
    {
      var tmp$0;
      var time = ip.measureTimeInMillis((tmp$0 = this , function(){
        {
          filter.apply();
        }
      }
      ));
      new ip.HistoryEntry(filter.get_name(), time);
    }
  }
  });
  $dilation = new ip.StandardFilter('dilation', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = 2 + 1;
        for (var offset = 0; offset != tmp$0; ++offset) {
          ip.corners_d(oldData, newData, width, height, offset);
          ip.sides_d(oldData, newData, width, height, offset);
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
  $erosion = new ip.StandardFilter('erosion', function(oldData, newData, width, height){
    {
      var tmp$0;
      {
        tmp$0 = 2 + 1;
        for (var offset = 0; offset != tmp$0; ++offset) {
          ip.corners_e(oldData, newData, width, height, offset);
          ip.sides_e(oldData, newData, width, height, offset);
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
  $height = 0;
  $width = 0;
  $Tools = Kotlin.object.create({initialize:function(){
    {
      ip.setUpButtons();
      ip.setUpFileLoader();
      ip.setUpSaveImage();
    }
  }
  });
  $History = Kotlin.object.create({initialize:function(){
    this.$entries = new Kotlin.ArrayList;
    this.$emptyHistoryHtml = html.htmlFragment(new html.P, (tmp$0_2 = this , function(){
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
        ip.html_0(this.get_panel(), this.get_emptyHistoryHtml());
        return;
      }
      ip.html_0(this.get_panel(), this.entriesHtml());
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
                        getContext().putImageData(correspondingEntry.get_savedData(), 0, 0);
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
          this.get_entries().remove(i);
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
                this.li((tmp$1 = tmp$0_1 , function(){
                  {
                    var tmp$0;
                    this.button((tmp$0 = tmp$1 , function(){
                      {
                        this.set_id('history_item_' + i);
                        this.set_cssClass('fill_parent');
                        this.plus(entry.get_filterName() + '(' + entry.get_timeInMs() + ')');
                        i++;
                      }
                    }
                    ));
                  }
                }
                ));
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
, get_Filters:function(){
  return $Filters;
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
, get_dilation:function(){
  return $dilation;
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
  return $erosion;
}
, resultingImageHtml:function(data){
  {
    return html.htmlFragment(new html.IMG, function(){
      {
        this.set_src(data);
        this.plus("Right click the image and choose 'Save Image As...'");
      }
    }
    );
  }
}
, main:function(args){
  {
    $(function(){
      {
        ip.setupHistoryToolbar();
        ip.setupToolsToolbar();
        ip.get_History().render();
        ip.setupImageToolbar(Kotlin.sure(ip.get_height()), Kotlin.sure(ip.get_width()));
      }
    }
    );
  }
}
, setupHistoryToolbar:function(){
  {
    $('#history').dialog(ip.title(ip.position(ip.fixedWidth(ip.initialHeight(ip.defaultParams(), 500), 300), 'right top'), 'History'));
  }
}
, setupToolsToolbar:function(){
  {
    $('#tools').dialog(ip.initialHeight(ip.position(ip.title(ip.fixedWidth(ip.defaultParams(), 300), 'Tools'), 'left top'), 600));
  }
}
, setupImageToolbar:function(width, height){
  {
    $('#image').dialog(ip.initialHeight(ip.position$0(ip.title(ip.defaultParams(), 'Image'), 350, 120), 100));
  }
}
, defaultParams:function(){
  {
    return Kotlin.jsonFromTuples([ip.to('show', 'slide'), ip.to('hide', 'slide')]);
  }
}
, initialHeight:function(receiver, height){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.to('minHeight', 500), ip.to('height', 500)]));
  }
}
, fixedWidth:function(receiver, width){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.to('maxWidth', width), ip.to('minWidth', width), ip.to('width', width)]));
  }
}
, position:function(receiver, str){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.to('position', str)]));
  }
}
, position$0:function(receiver, x, y){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.to('position', [x, y])]));
  }
}
, title:function(receiver, str){
  {
    return Kotlin.jsonAddProperties(receiver, Kotlin.jsonFromTuples([ip.to('title', str)]));
  }
}
, setDialogSize:function(receiver, width, height){
  {
    receiver.dialog('option', 'width', width).dialog('option', 'height', height);
  }
}
, get_height:function(){
  return $height;
}
, set_height:function(tmp$0){
  $height = tmp$0;
}
, get_width:function(){
  return $width;
}
, set_width:function(tmp$0){
  $width = tmp$0;
}
, setUpFileLoader:function(){
  {
    var input = getInputElement();
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
                  ip.set_height(image.height);
                  ip.set_width(image.width);
                  getCanvas().height = Kotlin.sure(ip.get_height());
                  getCanvas().width = Kotlin.sure(ip.get_width());
                  var context = getContext();
                  context.drawImage(image, 0, 0, ip.get_width(), ip.get_height());
                  ip.setDialogSize($('#image'), ip.get_width() + 40, ip.get_height() + 80);
                  ip.get_History().clean();
                  new ip.HistoryEntry('Loaded file', 0);
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
    $('#save_as_button').click(function(it){
      {
        var data = getCanvas().toDataURL('image/' + format);
        ip.html_0($('#result'), ip.resultingImageHtml(data)).dialog();
      }
    }
    );
    var formats = ip.array(['png', 'bmp', 'jpeg']);
    var tmp$0;
    var tmp$1;
    var tmp$2;
    {
      tmp$0 = formats , tmp$1 = tmp$0.length;
      for (var tmp$2 = 0; tmp$2 != tmp$1; ++tmp$2) {
        var f = tmp$0[tmp$2];
        {
          (function(){
            {
              var curF = f;
              return $(function(){
                {
                  $('#format_' + curF).click(function(it){
                    {
                      format = curF;
                    }
                  }
                  );
                }
              }
              );
            }
          }
          ());
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
        var tmp$0;
        {
          tmp$0 = ip.get_Filters().get_all().iterator();
          while (tmp$0.hasNext()) {
            var filter = tmp$0.next();
            {
              (function(){
                {
                  var f = filter;
                  return $('#filter_' + filter.get_name()).button().click(function(it){
                    {
                      ip.get_Filters().apply(f);
                    }
                  }
                  );
                }
              }
              ());
            }
          }
        }
        $('.toolbar').draggable(Kotlin.jsonFromTuples([['containment', 'parent']]));
      }
    }
    );
  }
}
, get_Tools:function(){
  return $Tools;
}
, get_History:function(){
  return $History;
}
}, {Filter:classes.Filter, StandardFilter:classes.StandardFilter, PredefinedFilter:classes.PredefinedFilter, HistoryEntry:classes.HistoryEntry});
html.initialize();
ip.initialize();

var args = [];
ip.main(args);
