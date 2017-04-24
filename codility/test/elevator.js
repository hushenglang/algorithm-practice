// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, M, X, Y) {

    const n = A.length;
    //1.define a group array to group the passengers,in which each group represent one round. like this [[0,1,2], [3,4]]
    var groups = [];
    var group = [];
    for(var i=0;i<n;i++){
        if(group.length<X && (getGroupWeight(group, A)+A[i])<=Y){// performance issue is coming from getGroupWeight(), need to loop to get the group weight, just use leftWeights=Y-A[i] is enough to solve the problem.
            group.push(i);
        }else{
            groups.push(group);
            group = [i];
        }
        if(i==n-1){
            groups.push(group);
        }
    }

    //2.calculate each group total number of different floors, and finally sum all groups' total number of different floors.
    var n_g = groups.length;
    var total_stops = 0;
    for(var i=0;i<n_g;i++){
        var g = groups[i];
        var total_dif_floors = getTotalDiffFloorsForGroup(g,B);
        total_stops += total_dif_floors+1;
    }

    return total_stops;


    /////////////////below is help functions/////////////////
    //get group weight sum.
    function getGroupWeight(pg, weights){
        var sum_weights=0;
        for(var i=0;i<pg.length;i++){
            var idx = pg[i];
            sum_weights+=weights[idx];
        }
        return sum_weights;
    }

    function getTotalDiffFloorsForGroup(pg, pf){
        const n_pg = pg.length;
        var f_set = new Set();
        for(var i=0;i<n_pg;i++){
            var passenger_idx = pg[i];
            f_set.add(pf[passenger_idx]);
        }
        return f_set.size;
    }
}