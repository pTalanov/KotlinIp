package ip.filters

import js.*
import js.debug.*

val erosion : Filter = StandardFilter("erosion") {
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


val dilation : Filter = StandardFilter("dilation") {
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

val invert : Filter = PredefinedFilter("invert")

val geometricMean : Filter = StandardFilter("geometric mean") {
(oldData, newData, width, height) ->
    for (offset in 0..2) {

        for (x in 1..width - 2) {
            for (y in 1..height - 2) {
                val mul =
                oldData[(y * width + x) * 4 + offset] *
                oldData[(y * width + x - 1) * 4 + offset] *
                oldData[(y * width + x + 1) * 4 + offset] *
                oldData[((y - 1) * width + x) * 4 + offset] *
                oldData[((y - 1) * width + x - 1) * 4 + offset] *
                oldData[((y - 1) * width + x + 1) * 4 + offset] *
                oldData[((y + 1) * width + x) * 4 + offset] *
                oldData[((y + 1) * width + x - 1) * 4 + offset] *
                oldData[((y + 1) * width + x + 1) * 4 + offset]
                newData[(y * width + x) * 4 + offset] = Math.ceil(Math.pow(mul.toDouble(), 1.0 / 9))
            }
        }
    }
}

val harmonicMean : Filter = StandardFilter("harmonic mean") {
(oldData, newData, width, height) ->
    for (offset in 0..2) {
        for (x in 1..width - 2) {
            for (y in 1..height - 2) {
                val down =
                (1.0 / (oldData[(y * width + x) * 4 + offset] + 1.0)) +
                (1.0 / (oldData[(y * width + x - 1) * 4 + offset] + 1.0)) +
                (1.0 / (oldData[(y * width + x + 1) * 4 + offset] + 1.0)) +
                (1.0 / (oldData[((y - 1) * width + x) * 4 + offset] + 1.0)) +
                (1.0 / (oldData[((y - 1) * width + x - 1) * 4 + offset] + 1.0)) +
                (1.0 / (oldData[((y - 1) * width + x + 1) * 4 + offset] + 1.0)) +
                (1.0 / (oldData[((y + 1) * width + x) * 4 + offset] + 1.0)) +
                (1.0 / (oldData[((y + 1) * width + x - 1) * 4 + offset] + 1.0)) +
                (1.0 / (oldData[((y + 1) * width + x + 1) * 4 + offset] + 1.0))

                newData[(y * width + x) * 4 + offset] = Math.ceil(9.0 / down)
            }
        }
    }
}

val contraharmonicMean : Filter = StandardFilter("contraharmonic mean") {
(oldData, newData, width, height) ->
    for (offset in 0..2) {

        for (x in 1..width - 2) {
            for (y in 1..height - 2) {
                val up =
                oldData[(y * width + x) * 4 + offset] *
                oldData[(y * width + x) * 4 + offset] +
                oldData[(y * width + x - 1) * 4 + offset] *
                oldData[(y * width + x - 1) * 4 + offset] +
                oldData[(y * width + x + 1) * 4 + offset] *
                oldData[(y * width + x + 1) * 4 + offset] +
                oldData[((y - 1) * width + x) * 4 + offset] *
                oldData[((y - 1) * width + x) * 4 + offset] +
                oldData[((y - 1) * width + x - 1) * 4 + offset] *
                oldData[((y - 1) * width + x - 1) * 4 + offset] +
                oldData[((y - 1) * width + x + 1) * 4 + offset] *
                oldData[((y - 1) * width + x + 1) * 4 + offset] +
                oldData[((y + 1) * width + x) * 4 + offset] *
                oldData[((y + 1) * width + x) * 4 + offset] +
                oldData[((y + 1) * width + x - 1) * 4 + offset] *
                oldData[((y + 1) * width + x - 1) * 4 + offset] +
                oldData[((y + 1) * width + x + 1) * 4 + offset] *
                oldData[((y + 1) * width + x + 1) * 4 + offset]


                val down =
                oldData[(y * width + x) * 4 + offset] +
                oldData[(y * width + x - 1) * 4 + offset] +
                oldData[(y * width + x + 1) * 4 + offset] +
                oldData[((y - 1) * width + x) * 4 + offset] +
                oldData[((y - 1) * width + x - 1) * 4 + offset] +
                oldData[((y - 1) * width + x + 1) * 4 + offset] +
                oldData[((y + 1) * width + x) * 4 + offset] +
                oldData[((y + 1) * width + x - 1) * 4 + offset] +
                oldData[((y + 1) * width + x + 1) * 4 + offset]

                newData[(y * width + x) * 4 + offset] = Math.min(255, Math.ceil(up / Math.max(1, down)))
            }
        }
    }
}

val sobelOperator : Filter = StandardFilter("Sobel operator") {
(oldData, newData, width, height) ->

    for (x in 1..width - 2) {
        for (y in 1..height - 2) {
            var gx = 0
            var gy = 0
            for (offset in 0..2) {
                gx +=
                2 * oldData[(y * width + x + 1) * 4 + offset] +
                oldData[((y - 1) * width + x + 1) * 4 + offset] +
                oldData[((y + 1) * width + x + 1) * 4 + offset]

                gx -= (2 * oldData[(y * width + x - 1) * 4 + offset] +
                oldData[((y - 1) * width + x - 1) * 4 + offset] +
                oldData[((y + 1) * width + x - 1) * 4 + offset])

                gy += oldData[((y + 1) * width + x + 1) * 4 + offset] +
                2 * oldData[((y + 1) * width + x + 0) * 4 + offset] +
                oldData[((y + 1) * width + x - 1) * 4 + offset]

                gy -= (oldData[((y - 1) * width + x + 1) * 4 + offset] +
                2 * oldData[((y - 1) * width + x + 0) * 4 + offset] +
                oldData[((y - 1) * width + x - 1) * 4 + offset])
            }
            val g = Math.sqrt((gx * gx + gy * gy).toDouble())

            for (offset in 0..2) {
                newData[(y * width + x) * 4 + offset] = Math.min(255, g.toInt())
            }
        }
    }
    for (x in 0..width - 1) {
        for (offset in 0..2) {
            newData[(0 * width + x) * 4 + offset] = 0
            newData[((height - 1) * width + x) * 4 + offset] = 0
        }
    }

    for (y in 0..height - 1) {
        for (offset in 0..2) {
            newData[(y * width + 0) * 4 + offset] = 0
            newData[(y * width + width - 1) * 4 + offset] = 0
        }
    }
}

val prewittOperator : Filter = StandardFilter("Prewitt operator") {
(oldData, newData, width, height) ->

    for (x in 1..width - 2) {
        for (y in 1..height - 2) {
            var gx = 0
            var gy = 0
            for (offset in 0..2) {
                gx +=
                oldData[(y * width + x + 1) * 4 + offset] +
                oldData[((y - 1) * width + x + 1) * 4 + offset] +
                oldData[((y + 1) * width + x + 1) * 4 + offset]

                gx -= (oldData[(y * width + x - 1) * 4 + offset] +
                oldData[((y - 1) * width + x - 1) * 4 + offset] +
                oldData[((y + 1) * width + x - 1) * 4 + offset])

                gy += oldData[((y + 1) * width + x + 1) * 4 + offset] +
                oldData[((y + 1) * width + x + 0) * 4 + offset] +
                oldData[((y + 1) * width + x - 1) * 4 + offset]

                gy -= (oldData[((y - 1) * width + x + 1) * 4 + offset] +
                oldData[((y - 1) * width + x + 0) * 4 + offset] +
                oldData[((y - 1) * width + x - 1) * 4 + offset])
            }
            val g = Math.sqrt((gx * gx + gy * gy).toDouble())

            for (offset in 0..2) {
                newData[(y * width + x) * 4 + offset] = g.toInt()
            }
        }
    }
    for (x in 0..width - 1) {
        for (offset in 0..2) {
            newData[(0 * width + x) * 4 + offset] = 0
            newData[((height - 1) * width + x) * 4 + offset] = 0
        }
    }

    for (y in 0..height - 1) {
        for (offset in 0..2) {
            newData[(y * width + 0) * 4 + offset] = 0
            newData[(y * width + width - 1) * 4 + offset] = 0
        }
    }
}

val robertsOperator : Filter = StandardFilter("RobertsOperator") {
(oldData, newData, width, height) ->

    for (x in 1..width - 2) {
        for (y in 1..height - 2) {
            var gx = 0
            var gy = 0
            for (offset in 0..2) {
                gx +=
                - oldData[(y * width + x) * 4 + offset] +
                oldData[((y + 1) * width + x + 1) * 4 + offset]

                gy += oldData[(y * width + x + 1) * 4 + offset] -
                oldData[((y + 1) * width + x + 0) * 4 + offset]

            }
            val g = Math.sqrt((gx * gx + gy * gy).toDouble())

            for (offset in 0..2) {
                newData[(y * width + x) * 4 + offset] = g.toInt()
            }
        }
    }
    for (x in 0..width - 1) {
        for (offset in 0..2) {
            newData[(0 * width + x) * 4 + offset] = 0
            newData[((height - 1) * width + x) * 4 + offset] = 0
        }
    }

    for (y in 0..height - 1) {
        for (offset in 0..2) {
            newData[(y * width + 0) * 4 + offset] = 0
            newData[(y * width + width - 1) * 4 + offset] = 0
        }
    }
}

