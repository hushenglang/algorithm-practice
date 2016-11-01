/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
    'use strict';

    return {
        /**
         * Returns true when the given number is a valid Harshad number.
         *
         * @param {Number} number The given number
         * @returns {Boolean}
         * @function Harshad.isValid
         */
        isValid: function( number ) {
            // Your implementation goes here
            var sum = number.toString().split("").map(cur=>parseInt(cur)).reduce((pre,cur) => pre+cur);
            return (number%sum==0);
        },
        /**
         * Gets the next Harshad number after the given number.
         *
         * @param {Number} number The given number
         * @returns {Number}
         * @function Harshad.getNext
         */
        getNext: function( number ) {
            // Your implementation goes here
            while(true){
                if (this.isValid(++number)) break;
            }
            return number;
        },
        /**
         * Returns the suite of Harshad numbers, starting after a given number.
         *
         * @param {Number} count The number of elements to return
         * @param {Number} start The number after which the serie should start;
         *  defaults to 0
         * @returns {Array}
         * @function Harshad.getSerie
         */
        getSerie: function( count, start ) {
            // Your implementation goes here
            if(!start){
                start = 0;
            }
            var serie = [];
            for(var i=0;i<count;i++){
                start = this.getNext(start);
                serie.push(start);
            }
            return serie;
        }
    };

} () );


console.log(Harshad.isValid( 18 ));