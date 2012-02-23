package ip

import jquery.JQuery
import html.BodyTag
import js.*

fun <T> array(vararg items : T) : Array<T> = items

fun JQuery.html(tag : BodyTag) : JQuery {
    html(tag.toString().sure())
    return this
}

fun measureTimeInMillis(f : ()->Unit) : Int {
    val start = Date()
    f()
    val end = Date()
    return end.getTime() - start.getTime()
}