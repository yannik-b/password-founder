/**
* @Author: yannik
* @Date:   2016-12-03T20:44:20+01:00
* @Last modified by:   yannik
* @Last modified time: 2016-12-03T23:58:44+01:00
*/

$(document).ready(function() {
    $('#pwgen_generate').click(function(e) {
        e.preventDefault()
        PwGen.do()
    })
    $('#clear').click(function(e) {
        $('#pwlist').html('')
    })
})
