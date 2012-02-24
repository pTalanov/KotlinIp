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
        HistoryEntry(filter.name, time)
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


fun corners_d(oldData : Array<Int>, newData : Array<Int>, width : Int, height : Int, offset : Int) {
    // x = 0; y = 0
    newData[offset] =  Math.max(
    oldData[offset],
    oldData[width * 4 + offset],
    oldData[4 + offset]);
    //
    var x = width - 1
    var y = 0
    newData[(y * width + x) * 4 + offset] = Math.max(
    oldData[(y * width + x - 1) * 4 + offset],
    oldData[(y * width + x) * 4 + offset],
    oldData[((y + 1) * width + x) * 4 + offset]);

    x = 0
    y = height - 1

    newData[(y * width + x) * 4 + offset] = Math.max(
    oldData[((y - 1) * width + x) * 4 + offset],
    oldData[(y * width + x) * 4 + offset],
    oldData[(y * width + x + 1) * 4 + offset]);

    x = width - 1
    y = height - 1

    newData[(y * width + x) * 4 + offset] = Math.max(
    oldData[(y * width + x - 1) * 4 + offset],
    oldData[((y - 1) * width + x) * 4 + offset],
    oldData[(y * width + x) * 4 + offset]);
}

fun sides_d(oldData : Array<Int>, newData : Array<Int>, width : Int, height : Int, offset : Int) {
    var x = 0

    for (y in 1..height - 2) {
        newData[(y * width + x) * 4 + offset] = Math.max(
        oldData[((y - 1) * width + x) * 4 + offset],
        oldData[(y * width + x) * 4 + offset],
        oldData[((y + 1) * width + x) * 4 + offset],
        oldData[(y * width + x + 1) * 4 + offset]);
    }
    //
    x = width - 1
    for (y in 1..height - 2) {
        newData[(y * width + x) * 4 + offset] = Math.max(
        oldData[(y * width + x - 1) * 4 + offset],
        oldData[((y - 1) * width + x) * 4 + offset],
        oldData[(y * width + x) * 4 + offset],
        oldData[((y + 1) * width + x) * 4 + offset]);
    }
   // var y = 0
    var y = 0
    for (x in 1..width - 2) {
        newData[(y * width + x) * 4 + offset] = Math.max(
        oldData[(y * width + x - 1) * 4 + offset],
        oldData[(y * width + x) * 4 + offset],
        oldData[((y + 1) * width + x) * 4 + offset],
        oldData[(y * width + x + 1) * 4 + offset]);
    }
    y = height - 1

    for (x in 1..width - 2) {
        newData[(y * width + x) * 4 + offset] = Math.max(
        oldData[(y * width + x - 1) * 4 + offset],
        oldData[((y - 1) * width + x) * 4 + offset],
        oldData[(y * width + x) * 4 + offset],
        oldData[(y * width + x + 1) * 4 + offset]);
    }
}


val dilation = StandardFilter("dilation") {
(oldData, newData, width, height) ->
    for (offset in 0..2) {

        corners_d(oldData, newData, width, height, offset)
        sides_d(oldData, newData, width, height, offset)

        for (x in 1..width - 2) {
            for (y in 1..height - 2) {
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

fun corners_e(oldData : Array<Int>, newData : Array<Int>, width : Int, height : Int, offset : Int) {
    // x = 0; y = 0
    newData[offset] =  Math.min(
    oldData[offset],
    oldData[width * 4 + offset],
    oldData[4 + offset]);
    //
    var x = width - 1
    var y = 0
    newData[(y * width + x) * 4 + offset] = Math.min(
    oldData[(y * width + x - 1) * 4 + offset],
    oldData[(y * width + x) * 4 + offset],
    oldData[((y + 1) * width + x) * 4 + offset]);

    x = 0
    y = height - 1

    newData[(y * width + x) * 4 + offset] = Math.min(
    oldData[((y - 1) * width + x) * 4 + offset],
    oldData[(y * width + x) * 4 + offset],
    oldData[(y * width + x + 1) * 4 + offset]);

    x = width - 1
    y = height - 1

    newData[(y * width + x) * 4 + offset] = Math.min(
    oldData[(y * width + x - 1) * 4 + offset],
    oldData[((y - 1) * width + x) * 4 + offset],
    oldData[(y * width + x) * 4 + offset]);
}

fun sides_e(oldData : Array<Int>, newData : Array<Int>, width : Int, height : Int, offset : Int) {
    var x = 0

    for (y in 1..height - 2) {
        newData[(y * width + x) * 4 + offset] = Math.min(
        oldData[((y - 1) * width + x) * 4 + offset],
        oldData[(y * width + x) * 4 + offset],
        oldData[((y + 1) * width + x) * 4 + offset],
        oldData[(y * width + x + 1) * 4 + offset]);
    }
    //
    x = width - 1
    for (y in 1..height - 2) {
        newData[(y * width + x) * 4 + offset] = Math.min(
        oldData[(y * width + x - 1) * 4 + offset],
        oldData[((y - 1) * width + x) * 4 + offset],
        oldData[(y * width + x) * 4 + offset],
        oldData[((y + 1) * width + x) * 4 + offset]);
    }
    // var y = 0
    var y = 0
    for (x in 1..width - 2) {
        newData[(y * width + x) * 4 + offset] = Math.min(
        oldData[(y * width + x - 1) * 4 + offset],
        oldData[(y * width + x) * 4 + offset],
        oldData[((y + 1) * width + x) * 4 + offset],
        oldData[(y * width + x + 1) * 4 + offset]);
    }
    y = height - 1

    for (x in 1..width - 2) {
        newData[(y * width + x) * 4 + offset] = Math.min(
        oldData[(y * width + x - 1) * 4 + offset],
        oldData[((y - 1) * width + x) * 4 + offset],
        oldData[(y * width + x) * 4 + offset],
        oldData[(y * width + x + 1) * 4 + offset]);
    }
}


val erosion = StandardFilter("erosion") {
(oldData, newData, width, height) ->



    for (offset in 0..2) {

       corners_e(oldData, newData, width, height, offset)
       sides_e(oldData, newData, width, height, offset)

        for (x in 1..width - 2) {
            for (y in 1..height - 2) {
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


