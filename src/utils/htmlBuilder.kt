package html

import java.util.*
import js.println

trait Element {
    fun render(builder : StringBuilder, indent : String)

    fun toString() : String? {
        val builder = StringBuilder()
        render(builder, "")
        return builder.toString()
    }
}

class TextElement(val text : String) : Element {
    override fun render(builder : StringBuilder, indent : String) {
        builder.append("$indent$text\n")
    }
}

abstract class Tag(val name : String) : Element {
    val children : ArrayList<Element> = ArrayList<Element>()
    val attributes : HashMap<String, String> = HashMap<String, String>()

    protected fun initTag<T : Element>(tag : T, init : T.() -> Unit) : T {
        tag.init()
        children.add(tag)
        return tag
    }

    override fun render(builder : StringBuilder, indent : String) {
        builder.append("$indent<$name${renderAttributes()}>\n")
        for (c in children) {
            c.render(builder, indent + "  ")
        }
        builder.append("$indent</$name>\n")
    }

    private fun renderAttributes() : String? {
        val builder = StringBuilder()
        for (a in attributes.keySet()) {
            builder.append(" $a=\"${attributes[a]}\"")
        }
        return builder.toString()
    }
}

abstract class TagWithText(name : String) : Tag(name) {
    fun String.plus() {
        children.add(TextElement(this))
    }
}

class HTML() : TagWithText("html") {
    fun head(init : Head.() -> Unit) : Head = initTag(Head(), init)

    fun body(init : Body.() -> Unit) : Body = initTag(Body(), init)
}

class Head() : TagWithText("head") {
    fun title(init : Title.() -> Unit) : Title = initTag(Title(), init)
}

class Title() : TagWithText("title")

abstract class BodyTag(name : String) : TagWithText(name) {
    var cssClass : String
        get() = attributes["class"]
        set(value) {
            attributes["class"] = value
        }
    var id : String
        get() = attributes["id"]
        set(value) {
            attributes["id"] = value
        }
    fun b(init : B.() -> Unit) : B = initTag(B(), init)
    fun p(init : P.() -> Unit) : P = initTag(P(), init)
    fun h1(init : H1.() -> Unit) : H1 = initTag(H1(), init)
    fun ul(init : UL.() -> Unit) : UL = initTag(UL(), init)
    fun button(init : Button.() -> Unit) : Button = initTag(Button(), init)
    fun a(href : String, init : A.() -> Unit) {
        val a = initTag(A(), init)
        a.href = href
    }
}

class Body() : BodyTag("body")

class UL() : BodyTag("ul") {
    fun li(init : LI.() -> Unit) : LI = initTag(LI(), init)
}

class IMG() : BodyTag("img") {
    public var src : String
        get() = attributes["src"]
        set(value) {
            attributes["src"] = value
        }
}

class B() : BodyTag("b")
class LI() : BodyTag("li")
class P() : BodyTag("p")
class H1() : BodyTag("h1")
class A() : BodyTag("a") {
    public var href : String
        get() = attributes["href"]
        set(value) {
            attributes["href"] = value
        }
}

class Button() : BodyTag("button")

fun html(init : HTML.() -> Unit) : HTML {
    val html = HTML()
    html.init()
    return html
}

fun <T : BodyTag> htmlFragment(rootTag : T, init : T.()->Unit) : T {
    rootTag.init()
    return rootTag
}
