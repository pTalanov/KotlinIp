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
                    getCanvas().height = image.height
                    getCanvas().width = image.width
                    val context = getContext()
                    context.drawImage(image, 0.0, 0.0, image.width as Double, image.height as Double)
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

fun resultingImageHtml(data : String) =
htmlFragment(IMG()) {
    src = data
    + "Right click the image and choose 'Save Image As...'"
}

fun setUpButtons() {
    jq {
        jq("button").button()
        jq("input").button()
        jq("#format_options").buttonset()
        for (filter in Filters.all) {
                {
                    val f = filter
                    jq("#filter_${filter.name}").button().click {
                        Filters.apply(f)
                    }
                }()
        }
        jq(".toolbar").draggable(json(#("containment", "parent")))
    }
}


fun main(args : Array<String>) {
    setUpFileLoader()
    setUpSaveImage()
    setUpButtons()
    setupHistoryToolbar()
    setupToolsToolbar()
    History.render()
    jq("#image").dialog()
}


//TODO: add a way to build json nicely
fun setupHistoryToolbar() {
    val width = 300
    val options = json(#("maxWidth", width), #("minWidth", width),
    #("width", width), #("show", "slide"),
    #("position", "right top"), #("hide", "slide"),
    #("title", "History"), #("minHeight", 500), #("height", 500))
    jq("#history").dialog(options)
}

fun setupToolsToolbar() {
    val width = 400
    val options = json(#("maxWidth", width), #("minWidth", width),
    #("width", width), #("show", "slide"),
    #("position", "left top"), #("hide", "slide"),
    #("title", "Tools"), #("minHeight", 500), #("height", 500))
    jq("#tools").dialog(options)
}
