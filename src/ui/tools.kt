package ip.ui

import html5.Image
import html5.files.FileReader
import html5.getCanvas
import html5.getContext
import ip.filters.*
import ip.helper.getInputElement
import ip.ui.resultingImageHtml
import ip.ui.history.History
import ip.ui.history.HistoryEntry
import ip.utils.*
import jquery.*
import jquery.ui.*
import js.*
import native_defs.helper.*
import ip.helper.*
import js.debug.*

var height : Int = 0
var width : Int = 0

fun setUpFileLoader() {
    val input = getInputElement("file_loader")
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
                    val canvas = getCanvasById("canvas")
                    canvas.height = height.sure()
                    canvas.width = width.sure()
                    jq("#image").setDialogSize(width + 40, height + 80)
                    val context = getContextForCanvas(canvas)
                    context.drawImage(image, 0, 0, width, height)
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

fun setUpCompareTo() {
    val input = getInputElement("compare_to_loader")
    input.onchange = {
        console.log("onchange called")
        val fileList = input.files
        if (fileList.length > 0) {
            val fileReader = FileReader()
            val file = fileList.item(0);
            fileReader.onloadend = {
                val image = Image()
                image.onload = {
                    console.log("loaded")
                    val dummyCanvas = getCanvasById("dummy_canvas")
                    dummyCanvas.height = image.height
                    dummyCanvas.width = image.width
                    val context = getContextForCanvas(dummyCanvas)
                    context.drawImage(image, 0, 0, width, height)
                    val data = context.getImageData(0, 0, image.width, image.height).data
                    Filters.apply(Difference(data))
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
        jq {
            jq("#format_$f").click {
                format = f
            }
        }
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

fun setUpProbabilityFilters() {
    jq {
        jq("#filter_dust").button().click {
            val p = js.safeParseDouble(jq("#dust_p").`val`() as String)
            val probability : Double = if (p != null) p else 0.5
            val m = js.safeParseInt(jq("#dust_min").`val`() as String)
            val min : Int = if (m != null) {
                Math.min(Math.max(0, m), 255)
            } else 0
            Filters.apply(Dust(probability, min))
        }

        jq("#filter_wn").button().click {
            val p = js.safeParseDouble(jq("#wn_p").`val`() as String)
            val probability : Double = if (p != null) p else 0.5
            val d = js.safeParseInt(jq("#wn_d").`val`() as String)
            val diff : Int = if (d != null) {
                Math.min(Math.max(0, d), 255)
            } else 0
            Filters.apply(WhiteNoise(probability, diff))
        }

        jq("#filter_grid").button().click {
            val w = js.safeParseInt(jq("#grid_w").`val`() as String)
            val width : Int = if (w != null) {
                Math.max(5, w)
            } else 10
            val h = js.safeParseInt(jq("#grid_h").`val`() as String)
            val height : Int = if (h != null) {
                Math.max(5, h)
            } else 10
            val rgb = getColorsFromColorPicker()
            Filters.apply(Grid(width, height, rgb.r, rgb.g, rgb.b))
        }

        jq("#filter_median").button().click {
            val radius = jq("#select_radius").`val`() as Int
            Filters.apply(Median(radius))
        }

        jq("#filter_geometric_mean").button().click {
            Filters.apply(geometricMean)
        }

        jq("#filter_contraharmonic_mean").button().click {
            Filters.apply(contraharmonicMean)
        }

        jq("#filter_sobel_operator").button().click {
            Filters.apply(sobelOperator)
        }

        jq("#filter_harmonic_mean").button().click {
            Filters.apply(harmonicMean)
        }

        jq("#filter_prewitt_operator").button().click {
            Filters.apply(prewittOperator)
        }

        jq("#filter_roberts_operator").button().click {
            Filters.apply(robertsOperator)
        }
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
            setUpProbabilityFilters()
            setUpCompareTo()
        }
    }
}
