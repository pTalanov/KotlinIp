package ip.filters

import js.*

class Dust(val probability : Double, val min : Int) : Filter {
    override val name : String = "Dust P = $probability min = $min"

    override fun apply() {
        val dummy = StandardFilter(name) {
        (oldData, newData, width, height) ->
            for (x in 0..width - 1) {
                for (y in 0..height - 1) {
                    if (Math.random() < probability) {
                        for (offset in 0..2) {
                            newData[(y * width + x) * 4 + offset] = Math.floor(min + (255 - min) * Math.random())
                        }
                    }
                }
            }
        }
        dummy.apply()
    }
}