/**
* @Author: yannik
* @Date:   2016-12-03T23:08:01+01:00
* @Last modified by:   yannik
* @Last modified time: 2016-12-03T23:58:22+01:00
*/

var PwGen = {
    count: 0,
    length: 0,
    lowercase: false,
    uppercase: false,
    numbers: false,
    special: false,
    utf8: false,
    cSpecial: '',
    cLowercase: 'abcdefghijklmnopqrstuvwxyz',
    cUppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    cNumbers: '0123456789',
    cUtf8: 'àèìòùáéíóúâêîôû',
    characters: '',
    do: function() {
        this.init()
        this.characterize()
        for (var i = 0; i < this.count; i++) {
            $('#pwlist').prepend('<div>' + this.generate() + '</div>')
        }
    },
    characterize: function() {
        this.characters = ''
        if (this.lowercase) this.characters += this.cLowercase
        if (this.uppercase) this.characters += this.cUppercase
        if (this.numbers) this.characters += this.cNumbers
        if (this.special) this.characters += this.cSpecial
        if (this.utf8) this.characters += this.cUtf8
    },
    generate: function() {
        var text = '';
        for (var j = 0; j < this.length; j++) {
            text += this.characters.charAt(Math.floor(Math.random() * this.characters.length))
        }
        return text;
    },
    init: function() {
        this.count = $('#pwgen_count').val()
        this.length = $('#pwgen_length').val()
        this.lowercase = $('#pwgen_lowercase').is(':checked')
        this.uppercase = $('#pwgen_uppercase').is(':checked')
        this.numbers = $('#pwgen_numbers').is(':checked')
        this.special = $('#pwgen_special').is(':checked')
        this.cSpecial = $('#pwgen_allowedSpecial').val()
        this.utf8 = $('#pwgen_utf').is(':checked')
    }
}
