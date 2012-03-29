package ip.filters

import js.*

class Grid(val w : Int, val h : Int, val r : Int, val g : Int, val b : Int) : Filter {
    override val name : String = "Grid w = $w h = $h"

    override fun apply() {
        val dummy = StandardFilter(name) {
        (oldData, newData, width, height) ->
            verticalStripes(width, height, newData)
            horizontalStripes(width, height, newData)
        }
        dummy.apply()
    }

    fun horizontalStripes(width : Int, height : Int, newData : Array<Int>) {
        val cy = Math.floor(height / 2)
        var y = cy
        while (y < height) {
            for (x in 0..width - 1) {
                newData[(y * width + x) * 4 + 0] = r
                newData[(y * width + x) * 4 + 1] = g
                newData[(y * width + x) * 4 + 2] = b
            }
            y += h
        }
        y = cy - h
        while (y > 0) {
            for (x in 0..width - 1) {
                newData[(y * width + x) * 4 + 0] = r
                newData[(y * width + x) * 4 + 1] = g
                newData[(y * width + x) * 4 + 2] = b
            }
            y -= h
        }
    }

    fun verticalStripes(width : Int, height : Int, newData : Array<Int>) {
        val cx = Math.floor(width / 2)
        var x = cx
        while (x < width) {
            for (y in 0..height - 1) {
                newData[(y * width + x) * 4 + 0] = r
                newData[(y * width + x) * 4 + 1] = g
                newData[(y * width + x) * 4 + 2] = b
            }
            x += w
        }
        x = cx - w
        while (x > 0) {
            for (y in 0..height - 1) {
                newData[(y * width + x) * 4 + 0] = r
                newData[(y * width + x) * 4 + 1] = g
                newData[(y * width + x) * 4 + 2] = b
            }
            x -= w
        }
    }
}