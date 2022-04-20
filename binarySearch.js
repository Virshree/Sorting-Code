function binarySearch(arr,key){
    let r=arr.sort();
    console.log(r);

    let start=0;
    let end=arr.length-1;

    while(start<=end){
    
    let mid=Math.floor((start+end)/2);
    
    if(key===arr[mid])
    return mid;
    else if(key>arr[mid])
    start=mid+1; //right
    else 
    end=mid-1;  //left
}

}
console.log(binarySearch([2,1,4,3,5,8,7,6,9],4));