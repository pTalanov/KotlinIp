package native_defs.helper

import js.Json
import js.native

native trait RGB {
    val r : Int
    val g : Int
    val b : Int
}

native fun getColorsFromColorPicker() : RGB = js.noImpl