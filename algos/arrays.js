//Push Front

function pushFront(arr, val){
    arr.push(val);
    var temp = 0;
    for(var i = 0; i < arr.length - 1; i++){
        temp = arr[arr.length - 2 - i];
        arr[arr.length - 2 - i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;        
    }
    return arr;
}


myArr = [1,4,8,11];

console.log(pushFront(myArr, 17));


//Pop Front

function popFront(arr){

    for(var i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}
//myArr = []
console.log(popFront(myArr));

//Insert At

function insertAt(arr, idx, val){

    arr.push(val);
    var temp = 0;
    for(var i = 0; i < arr.length - idx - 1; i++){
        temp = arr[arr.length - 2 - i];
        arr[arr.length - 2 - i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;    
    }
    return arr;
}
//myArr = []

//Romove At

function removeAt(arr, idx){

    var temp = 0;
    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}
//myArr = []
console.log(removeAt(myArr,2))

//Swap Pairs

function swapPairs(arr){

    var temp = arr[0];
    for(var i = 0; i < arr.length - 1; i+=2){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}
//myArr = []
console.log(swapPairs(myArr));

//Remove Dups

function removeDuplicates(arr){
    var values = {};
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] in values){
            values[arr[i]] += 1;
        }
        else{
            values[arr[i]] = 1;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var myArr = [1,1,1,5,35,35,98,103,114];

console.log(removeDuplicates(myArr));

//Min to Front

function minToFront(arr){ 
    var minIdx = 0;
    var min = arr[0];
    var temp = arr[0];
    
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minIdx = i;
        }
    }
    for(var j = minIdx; j > 0; j--){
        temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
    }
return arr;
}

myArr = [13,57,85,3,2,21,150];

console.log(minToFront(myArr));