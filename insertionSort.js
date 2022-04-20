let arr=[4,7,8,2,1,5,6,3];

for(let i=1;i<arr.length;i++){
    for(let j=i;j>0;j--){
        if(arr[j-1]>arr[j]){
            //swap
            let temp=arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=temp;
        }
        else{
            break;
        }
    }
}
console.log(arr);