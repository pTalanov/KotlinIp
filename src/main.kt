package ip.ui


import html.*
import ip.Form
import ip.utils.defaultParams
import ip.utils.fixedWidth
import ip.utils.initialHeight
import ip.utils.position
import ip.utils.title
import jquery.*
import jquery.ui.*
import ip.ui.history.History
import ip.filters.Filters

fun resultingImageHtml(data : String) =
htmlFragment(IMG()) {
    src = data
}

fun main(args : Array<String>) {
    jq() {
        setUpButtons()
        setupHistoryToolbar()
        setupToolsToolbar()
        History.render()
        setupImageToolbar(height.sure(), width.sure())
        jq("#clear_custom_filters").button().click {
            Filters.clearCustom()
            renderCustomFilters()
        }

        val forms3x3 = Form("#form3x3", 3)
        val forms5x5 = Form("#form5x5", 5)
        Filters.loadCustom()
        renderCustomFilters()
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
            .position(0, 120)
            .initialHeight(600))
}

fun setupImageToolbar(width : Int, height : Int) {
    jq("#image").dialog(defaultParams().title("Image").position(350, 120).initialHeight(100))
}
