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

//Romove At

function removeAt(arr, idx){

    var temp = 0;
    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}
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

var myArry = [1,1,1,5,35,35,98,103,114];

console.log(removeDuplicates(myArry));
