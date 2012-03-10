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
import js.Math
import java.util.Collections
import js.*
import html.*
import html5.localstorage.localStorage;

import html.htmlFragment
import jquery.*

fun resultingImageHtml(data : String) =
htmlFragment(IMG()) {
    src = data
    + "Right click the image and choose 'Save Image As...'"
}

fun main(args : Array<String>) {
    jq() {
        setupHistoryToolbar()
        setupToolsToolbar()
        History.render()
        setupImageToolbar(height.sure(), width.sure())
    }
}

fun setupHistoryToolbar() {
    jq("#history").dialog(
    defaultParams()
            .initialHeight(500)
            .fixedWidth(300)
            .position("right top")
            .title("History"))
}

fun setupToolsToolbar() {
    jq("#tools").dialog(
    defaultParams()
            .fixedWidth(300)
            .title("Tools")
            .position("left top")
            .initialHeight(600))
}

fun setupImageToolbar(width : Int, height : Int) {
    jq("#image").dialog(defaultParams().title("Image").position(350, 120).initialHeight(100))
}
