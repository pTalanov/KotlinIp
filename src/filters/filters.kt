package ip

import jquery.pixastic.addAction
import java.util.ArrayList
import jquery.jq
import jquery.pixastic.*
import js.*
import java.util.*
import html5.localstorage.*

object Filters {

    val predefined = ArrayList<Filter>()
    val custom = ArrayList<LinearFilter>()

    val localStorageKey = "KotlinIpFilters3"

    fun clearCustom() {
        custom.clear()
        localStorage.setItem(localStorageKey, null)
    }

    fun addPredefined(vararg filters : Filter) {
        for (filter in filters) {
            predefined.add(filter)
        }
    }

    fun apply(filter : Filter) {
        val time = measureTimeInMillis {
            filter.apply()
        }
        HistoryEntry(filter.name, time)
    }

    fun unregisterCustomFilter(filter : Filter) {
        custom.remove(filter)
    }

    fun exists(name : String) : Boolean {
        for (filter in predefined) {
            if (filter.name == name) {
                return true
            }
        }
        for (filter in custom) {
            if (filter.name == name) {
                return true
            }
        }

        return false
    }

    fun loadCustom() {
        val savedFilters = localStorage.getItem(localStorageKey) as String?
        if (savedFilters != null) {
            for (savedFilter in filtersFromString(savedFilters)) {
                registerCustomFilter(LinearFilter(savedFilter._1, savedFilter._2, savedFilter._3, savedFilter._4))
            }
        }
    }

    fun saveCustom() {
        val savedFilters = Array(custom.size()) {
            val filter = custom[it]
            #(filter.name, filter.size, filter.intMatrix, filter.divider)
        }
        localStorage.setItem(localStorageKey, stringifyFilters(savedFilters))
    }

    fun registerCustomFilter(filter : LinearFilter) {
        custom.add(filter)
        saveCustom()
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
    }
}

class PredefinedFilter(override val name : String) : Filter {
    {
    }
}

native
fun stringifyFilters(filters : Array<#(String, Int, Array<Int>, Int)>) : String = js.noImpl

native
fun filtersFromString(string : String): Array<#(String, Int, Array<Int>, Int)> = js.noImpl

