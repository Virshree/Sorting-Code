let arr=["india","america","china","russia","brazil"];

function findMin(arr,startIndex)
{
    let minIndexTillnow=startIndex;
    for(let i=startIndex;i<arr.length;i++){
        if(arr[minIndexTillnow].localeCompare(arr[i])>0)
        {
            minIndexTillnow=i;
        }

    }
    return minIndexTillnow;

}

for(let i=0;i<arr.length;i++)
{
    let minIndex=findMin(arr,i);
    let temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;

}
console.log(arr);