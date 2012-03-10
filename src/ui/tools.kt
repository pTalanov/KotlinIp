package ip

import ip.helper
import ip.helper.getInputElement
import html5.Image
import html5.getCanvas
import html5.files.FileReader
import html5.getContext
import jquery.jq
import jquery.ui.*
import jquery.pixastic.*
import java.util.List
import java.util.ArrayList
import js.Math;
import java.util.Collections
import js.json
import html.*
import html.htmlFragment
import jquery.*

var height : Int = 0
var width : Int = 0

fun setUpFileLoader() {
    val input = getInputElement()
    input.onchange = {
        val fileList = input.files
        if (fileList.length > 0) {
            val fileReader = FileReader()
            val file = fileList.item(0);
            fileReader.onloadend = {
                val image = Image()
                image.onload = {
                    height = image.height
                    width = image.width
                    getCanvas().height = height.sure()
                    getCanvas().width = width.sure()
                    val context = getContext()
                    context.drawImage(image, 0.0, 0.0, width as Double, height as Double)
                    jq("#image").setDialogSize(width + 40, height + 80)
                    History.clean()
                    HistoryEntry("Loaded file", 0)
                }
                image.src = fileReader.result as String
            }
            if (file != null) {
                fileReader.readAsDataURL(file)
            }
        }
    }
}

fun setUpSaveImage() {
    var format = "png"

    jq("#save_as_button").click {
        var data = getCanvas().toDataURL("image/$format")
        jq("#result").html(resultingImageHtml(data)).dialog()
    }

    val formats = array("png", "bmp", "jpeg")
    for (f in formats) {
            {
                val curF = f
                jq {
                    jq("#format_$curF").click {
                        format = curF
                    }
                }
            }()
    }
}

fun setUpButtons() {
    jq {
        jq("button").button()
        jq("input").button()
        jq("#format_options").buttonset()
        for (filter in Filters.all) {
                {
                //TODO:
                    val f = filter
                    jq("#filter_${filter.name}").button().click {
                        Filters.apply(f)
                    }
                }()
        }
        jq(".toolbar").draggable(json(#("containment", "parent")))
    }
}

object Tools {
    {
        setUpButtons()
        setUpFileLoader()
        setUpSaveImage()
    }
}