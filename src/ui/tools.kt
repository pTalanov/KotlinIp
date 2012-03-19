package ip.ui


import html5.Image
import html5.files.FileReader
import html5.getCanvas
import html5.getContext
import ip.filters.getPredefinedFilters
import ip.helper.getInputElement
import ip.ui.history.HistoryEntry
import ip.utils.*
import jquery.*
import jquery.ui.*
import js.json
import ip.ui.history.History
import ip.filters.Filters

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
                    context.drawImage(image, 0.0, 0.0, width.toDouble(), height.toDouble())
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

    jq() {
        jq("#result").dialog(json(#("autoOpen", false)))
        jq("#save_as_button").click {
            var data = getCanvas().toDataURL("image/$format")
            jq("#result").html(resultingImageHtml(data)).dialog("open")
        }
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
        Filters.addPredefined(getPredefinedFilters())
        for (filter in Filters.predefined) {
            jq("#filter_${filter.name}").button().click {
                Filters.apply(filter)
            }
        }
        jq(".toolbar").draggable(json(#("containment", "parent")))
    }
}

fun renderCustomFilters() {
    jq() {
        val customLinearFiltersDiv = jq("#custom_linear_filters")
        customLinearFiltersDiv.html("")
        for (filter in Filters.custom) {
            customLinearFiltersDiv.append("""
<button id = ${filter.name}>${filter.name}</button>
            """);
            jq("#${filter.name}").button().click {
                Filters.apply(filter)
            }
        }
    }
}

fun setupShowAllButton() {
    val mainToolbarsNames = array("#history", "#image", "#tools")
    jq("#showAll").button().click {
        for (toolbarName in mainToolbarsNames) {
            jq(toolbarName).dialog("open")
        }
    }
}


object Tools {
    {
        jq {
            setUpFileLoader()
            setUpSaveImage()
            setupShowAllButton()
        }
    }
}