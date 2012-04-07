package ip.helper

import html5.HTMLInputElement
import js.native
import html5.Canvas
import html5.Context

native
fun getInputElement(id : String) : HTMLInputElement = js.noImpl

native
fun getContextForCanvas(canvas : Canvas) : Context = js.noImpl

native
fun getCanvasById(id : String) : Canvas = js.noImpl
