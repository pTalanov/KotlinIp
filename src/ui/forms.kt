package ip


import ip.filters.LinearFilter
import ip.ui.renderCustomFilters
import ip.utils.*
import jquery.*
import jquery.ui.*
import js.parseInt
import ip.filters.Filters

class Form(val formId : String, val size : Int) {

    {
        jq {
            init()
        }
    }

    fun init() {
        val closeHandler : JQuery.()->Unit = {
            jq(this).dialog("close")
        }
        val addHandler : JQuery.()->Unit = {
            if (validateForm()) {
                val matrix = getMatrixDataFromForm()
                val name = getFilterNameFromForm()
                val divider = getDividerFromForm()
                Filters.registerCustomFilter(LinearFilter(name, size, matrix, divider))
                renderCustomFilters()
                jq(this).dialog("close")
            }
        }
        jq(formId).dialog(defaultParams().modal().doNotOpenYet().fixedWidth(500).initialHeight(350)
                .buttons(
        "Cancel" to closeHandler,
        "Add" to addHandler
        ));

        jq("#add_filter_${size}x${size}").button().click {
            jq(formId).dialog("open")
        }
    }

    fun validateForm() : Boolean {
        return (!Filters.exists(getFilterNameFromForm()))
    }

    fun getMatrixDataFromForm() : Array<Int> {
        return Array(size * size) {
            val data : Int? = parseInt(jq("${formId}_${it + 1}").`val`().sure())
            if (data != null) data as Int else 0
        }
    }

    fun  getFilterNameFromForm() = jq("${formId}_name").`val`().sure()
    fun  getDividerFromForm() : Int {
        val data = parseInt(jq("${formId}_divider").`val`().sure())
        return if (data != null) data as Int else 1
    }

    fun setupForFilter(filter : LinearFilter) {

    }

}
