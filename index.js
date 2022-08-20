// Here is the solution of the task during the live interview

function solution(A){
    let num = A[0]
    let occurrences = {};

    for (let i in A){
        let current = A[i]

        if(occurrences[current]) occurrences[current] ++;
        else occurrences[current] = 1;

        if(occurrences[num] < occurrences[current]) num = current;

        return i
    }

    return -1
}

// End of  the solution of the task during the live interview




// Here is the solution of the challenge that i did offline
function solution(A){
    var counters = []

    for(var i=0; i<A.length; i++){
        var current = A[i];
        if(typeof counters[current]=="undefined")
        counters[current] = 1
        else
        counters[current]++
        if(counters[current]>A.length/2)
        return i
    }
    return -1
}

// The end of the solution of the challenge that i did offline