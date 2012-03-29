package ip.filters

import js.*

class WhiteNoise(val probability : Double, val d : Int) : Filter {
    override val name : String = "WhiteNoise P = $probability D = $d"

    override fun apply() {
        val dummy = StandardFilter(name) {
        (oldData, newData, width, height) ->
            for (x in 0..width - 1) {
                for (y in 0..height - 1) {
                    if (Math.random() < probability) {
                        for (offset in 0..2) {
                            val newValue = oldData[(y * width + x) * 4 + offset] + Math.floor(- d + Math.random() * 2 * d)
                            newData[(y * width + x) * 4 + offset] = Math.min(255, Math.max(0, newValue))
                        }
                    }
                }
            }
        }
        dummy.apply()
    }
}