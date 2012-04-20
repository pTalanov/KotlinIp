package ip.filters

import js.*

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

val invert = PredefinedFilter("invert")

val geometricMean = StandardFilter("geometric mean") {
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

val contraharmonicMean = StandardFilter("contraharmonic mean") {
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

val sobelOperator = StandardFilter("Sobel operator") {
(oldData, newData, width, height) ->

    for (x in 1..width - 2) {
        for (y in 1..height - 2) {
            var gx = 0
            for (offset in 0..2) {
                gx +=
                oldData[(y * width + x + 1) * 4 + offset] +
                oldData[((y - 1) * width + x + 1) * 4 + offset] +
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
