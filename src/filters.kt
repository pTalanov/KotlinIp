package ip

import jquery.pixastic.addAction
import java.util.ArrayList
import jquery.jq
import jquery.pixastic.*
import js.*

object Filters {
    val all = ArrayList<Filter>();
    {
        all.add(PredefinedFilter("invert"))
    }

    fun apply(filter : Filter) {
        val time = measureTimeInMillis {
            jq("#canvas").pixastic(filter.name)
        }
        HistoryEntry(filter, time)
    }
}

trait Filter {
    val name : String;
}

class StandardFilter(override val name : String, val process : (Array<Int>, Array<Int>, Int, Int)->Unit) : Filter {
    {
        addAction(name, process)
        Filters.all.add(this)
    }
}

class PredefinedFilter(override val name : String) : Filter {
}

val dilation = StandardFilter("dilation") {
(oldData, newData, width, height) ->
    for (x in 1..width - 2) {
        for (y in 1..height - 2) {
            for (offset in 0..2) {
                newData[(y * width + x) * 4 + offset] = Math.max(
                oldData[(y * width + x - 1) * 4 + offset],
                oldData[((y - 1) * width + x) * 4 + offset],
                oldData[(y * width + x) * 4 + offset],
                oldData[((y + 1) * width + x) * 4 + offset],
                oldData[(y * width + x + 1) * 4 + offset]);
            }
        }
    }
}

val erosion = StandardFilter("erosion") {
(oldData, newData, width, height) ->
    for (x in 1..width - 2) {
        for (y in 1..height - 2) {
            for (offset in 0..2) {
                newData[(y * width + x) * 4 + offset] = Math.min(
                oldData[(y * width + x - 1) * 4 + offset],
                oldData[((y - 1) * width + x) * 4 + offset],
                oldData[(y * width + x) * 4 + offset],
                oldData[((y + 1) * width + x) * 4 + offset],
                oldData[(y * width + x + 1) * 4 + offset]);
            }
        }
    }
}


