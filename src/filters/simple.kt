package ip

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
