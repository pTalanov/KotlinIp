package ip.ui.history

import html.*
import html5.*
import ip.utils.*
import java.util.ArrayList
import jquery.*
import jquery.ui.*
import ip.helper.*

object History {
    val entries = ArrayList<HistoryEntry>
    val emptyHistoryHtml = htmlFragment(P()) {
        + "No history"
    }

    val panel : JQuery
        get() = jq("#history")

    fun render() {
        if (entries.isEmpty()) {
            panel.html(emptyHistoryHtml)
            return
        }
        panel.html(entriesHtml())
        var i = 0
        for (entry in entries) {
                {
                    val index = i
                    jq("#history_item_$index").button().click {
                            {

                                val correspondingEntry = entries.get(index)
                                getContextForCanvas(getCanvasById("canvas"))
                                        .putImageData(correspondingEntry.savedData, 0, 0)
                                removeAllLaterEntries(index)
                                render()
                            }()
                    }
                }()
            i++
        }
    }

    fun removeAllLaterEntries(entryIndex : Int) {
        for (i in (entryIndex + 1)..entries.size() - 1) {
            entries.remove(i)
        }
    }

    fun clean() {
        removeAllLaterEntries(- 1)
        render()
    }

    fun entriesHtml() = htmlFragment(UL()) {
        var i = 0
        for (entry in entries) {
            li {
                button {
                    id = "history_item_$i"
                    cssClass = "fill_parent"
                    + "${entry.filterName}(${entry.timeInMs})"
                    i++
                }
            }
        }
    }
}

class HistoryEntry(val filterName : String, val timeInMs : Int) {
    val savedData = getContextForCanvas(getCanvasById("canvas")).getImageData(0, 0,
            getCanvasById("canvas").width, getCanvasById("canvas").height);
    {
        History.entries.add(this)
        History.render()
    }
}