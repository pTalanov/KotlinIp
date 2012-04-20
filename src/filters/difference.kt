package ip.filters

import ip.filters.Filter
import ip.filters.StandardFilter
import js.Math

class Difference(val data : Array<Int>) : Filter {
    override fun apply() {
        val dummy = StandardFilter(name) {
        (oldData, newData, width, height) ->
            val otherData = data
            for (x in 0..width - 1) {
                for (y in 0..height - 1) {
                    for (offset in 0..2) {
                        val newValue = oldData[(y * width + x) * 4 + offset] - otherData[(y * width + x) * 4 + offset]
                        newData[(y * width + x) * 4 + offset] = Math.abs(newValue.toDouble()).toInt()
                    }
                }
            }
        }
        dummy.apply()
    }
    override val name : String = "Difference"

}