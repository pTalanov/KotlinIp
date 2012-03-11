package ip

import js.*
import jquery.*
import jquery.ui.*

fun defaultParams() : Json {
    return json(
    "show" to "slide",
    "hide" to "slide")
}

fun Json.initialHeight(height : Int) : Json {
    return add(json(
    "minHeight" to 500,
    "height" to 500))
}

fun Json.fixedWidth(width : Int) : Json {
    return add(json(
    "maxWidth" to width,
    "minWidth" to width,
    "width" to width
    ))
}

fun Json.position(str : String) : Json {
    return add(json("position" to str))
}

fun Json.position(x : Int, y : Int) : Json {
    return add(json("position" to #(x, y)))
}

fun Json.title(str : String) : Json {
    return add(json("title" to str))
}

fun Json.doNotOpenYet() : Json {
    return add(json("autoOpen" to false))
}

fun Json.modal() : Json {
    return add(json("modal" to true))
}

fun Json.buttons(vararg buttons : #(String, JQuery.()->Unit)) : Json {
    //TODO: workaround
    return add(json("buttons" to json2(buttons as Array<Tuple2<String, Any?>>)))
}

fun JQuery.setDialogSize(width : Int, height : Int) {
    this.dialog("option", "width", width).dialog("option", "height", height)
}
