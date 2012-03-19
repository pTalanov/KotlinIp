package ip.ui.history


import html.*
import html5.*
import ip.utils.*
import java.util.ArrayList
import jquery.*
import jquery.ui.*

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

            jq("#history_item_$i").button().click {
                    {

                        val correspondingEntry = entries.get(i)
                        getContext().putImageData(correspondingEntry.savedData, 0, 0)
                        removeAllLaterEntries(i)
                        render()
                    }()
            }
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
    val savedData = getContext().getImageData(0, 0, getCanvas().width, getCanvas().height);
    {
        History.entries.add(this)
        History.render()
    }
}