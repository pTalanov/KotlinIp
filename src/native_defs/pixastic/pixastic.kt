package jquery.pixastic

import jquery.JQuery
import js.native

native
fun JQuery.pixastic(actionName : String) : Unit = js.noImpl

native
fun applyMedian(canvas : JQuery, radius : Int) : Unit = js.noImpl

native
fun addAction(actionName : String, process : (oldData : Array<Int>, newData : Array<Int>, width : Int, height : Int)->Unit) = js.noImpl