package ip.filters

import ip.filters.Filter
import jquery.pixastic.applyMedian
import jquery.jq

//TODO: hacked and implemented natively
class Median(val radius : Int) : Filter {
    override fun apply() {
        applyMedian(jq("#canvas"), radius)
    }
    override val name : String = "Median${radius}"
}