package ip.filters

import js.*
import jquery.pixastic.*

class LinearFilter(override val name : String, val size : Int, val intMatrix : Array<Int>, val divider : Int) : Filter {
    {
        addAction(name, {
        (oldData, newData, width, height)->
            val offset : Int = Math.floor((size / 2).toDouble())
            val matrix = Array(size * size) {
                intMatrix[it].toDouble() / divider
            }
            for (u in offset..(height - offset - 1)) {
                for (v in offset..(width - offset - 1)) {
                    var sumR = 0
                    var sumG = 0
                    var sumB = 0
                    for (i in - offset..offset) {
                        for (j in - offset..offset) {
                            val weight = matrix[(i + offset) * size + j + offset]
                            sumR += oldData[((u + i) * width + (v + j)) * 4] * weight
                            sumG += oldData[((u + i) * width + (v + j)) * 4 + 1] * weight
                            sumB += oldData[((u + i) * width + (v + j)) * 4 + 2] * weight
                        }
                    }
                    newData[(u * width + v) * 4] = if (Math.floor(sumR) > 255)  255 else Math.floor(sumR)
                    newData[(u * width + v) * 4 + 1] = if (Math.floor(sumG) > 255)  255 else Math.floor(sumG)
                    newData[(u * width + v) * 4 + 2] = if (Math.floor(sumB) > 255)  255 else Math.floor(sumB)
                }
            }
        })
    }
}

val integrating3 = LinearFilter("integrating_3x3", 3, Array(9) {1}, 9)
val integrating5 = LinearFilter("integrating_5x5", 5, Array(25) {1}, 25)