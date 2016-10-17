/**
 * calculateYears
 * https://www.codewars.com/kata/563f037412e5ada593000114/solutions/javascript
 * @param principal
 * @param interest
 * @param tax
 * @param desired
 * @returns {number}
 */
function calculateYears(principal, interest, tax, desired) {
    //1. algorithm one: straight forward way to solve the issue.
    //var years = 0;
    //while(principal < desired){
    //    principal += (principal * interest) * (1 - tax);
    //    years++;
    //}
    //return years;

    //2. still not completely being understood
    return Math.ceil(
        Math.log(desired / principal) /
        Math.log(1 + interest * (1 - tax))
    );
}

//var r = calculateYears(1000, 0.05, 0.18, 1100);
var r = calculateYears(1000,0.01625,0.18,1200);
console.log(r);