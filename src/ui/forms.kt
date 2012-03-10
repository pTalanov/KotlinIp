package ip


import jquery.*
import jquery.ui.*

//$(function() {
//
//
//$( "#form3" ).dialog({
//    autoOpen: false,
//    height: 400,
//    width: 500,
//    modal: true,
//    buttons: {
//    "Enter data": function() {
//    $( this ).dialog( "close" );
//
//},
//Cancel: function() {
//$( this ).dialog( "close" );
//}
//},
//close: function() {
//}
//});
//
//$( "#add_filter_3" )
//.button()
//.click(function() {
//
//    var name = $("#f1_name").val()
//    var divider = $("f1_name").val()
//    divider = parseInt(divider)
//    divider = divider != 0 ? divider : 9
//    var matrix = []
//    for (var i = 0; i < 9; ++i) {
//    matrix[i] = parseInt($("f1_" + (i + 1)))
//}
//new ip.LinearFilter(name, 3, matrix)
//$( "#form3" ).dialog( "open" );
//});
//});

fun setupForm3() {
    jq("#form3").dialog(defaultParams().modal().doNotOpenYet().fixedWidth(500).initialHeight(400)
    .button("Cancel") {
        jq(this).dialog("close")
    })
    jq("#add_filter_3x3").button().click {
        jq("#form3").dialog("open")
    }
}