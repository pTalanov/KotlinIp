package ip

import jquery.pixastic.addAction
import java.util.ArrayList
import jquery.jq
import jquery.pixastic.*
import js.*
import java.util.*

object Filters {

    val allFilters : List<Filter> = ArrayList()

    val nameToFilter : Map<String, Filter> = HashMap();
    {
        registerFilter(PredefinedFilter("invert"))
    }
    val all : Collection<Filter>
    get() {
        return allFilters
    }

    fun apply(filter : Filter) {
        val time = measureTimeInMillis {
            filter.apply()
        }
        HistoryEntry(filter.name, time)
    }

    fun registerFilter(filter : Filter) {
        allFilters.add(filter)
        nameToFilter.put(filter.name, filter)
    }
}

trait Filter {
    val name : String;
    fun apply() {
        jq("#canvas").pixastic(name)
    }
}

class StandardFilter(override val name : String, val process : (Array<Int>, Array<Int>, Int, Int)->Unit) : Filter {
    {
        addAction(name, process)
        Filters.registerFilter(this)
    }
}

class PredefinedFilter(override val name : String) : Filter {
}