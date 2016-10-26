var Robot = function() {};

Robot.prototype.name = function( input ) {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numeric = '0123456789';

    function randomAlpha() {
        return alpha[ Math.floor( Math.random() * alpha.length ) ];
    }

    function randomNumeric() {
        return numeric[ Math.floor( Math.random() * numeric.length ) ];
    }

    var reset = function() {
        this.name = [ 1, 2 ].map( randomAlpha ) + [ 1, 2, 3 ].map( randomNumeric );
    };

    reset();

};

module.exports = Robot;
