package ip.filters

import js.*

fun corners_e(oldData : Array<Int>, newData : Array<Int>, width : Int, height : Int, offset : Int) {
    // x = 0; y = 0
    newData[offset] = Math.min(
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

