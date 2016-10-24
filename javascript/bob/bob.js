//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function( input ) {

    var isAllCaps = ( input.toUpperCase() == input );
    var isQuestion = ( input[ input.length - 1 ] == '?' );
    var isExclamation = ( input[ input.length - 1 ] == '!' );
    var containsLetters = /[a-zA-Z]+/.test( input );

    if ( input.trim() == '' ) {
        return 'Fine. Be that way!';
    }
    if ( !containsLetters ) {
        if ( isQuestion ) {
            return 'Sure.';
        }
        return 'Whatever.';
    }
    if ( isAllCaps ) {
        return 'Whoa, chill out!'
    }
    if ( isQuestion ) {
        return 'Sure.';
    }
    return 'Whatever.';

};

module.exports = Bob;
