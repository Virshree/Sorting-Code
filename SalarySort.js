let arr=[{"name":"Ram","salary":100000},
{"name":"Ramesh","salary":10000},
{"name":"Rakesh","salary":500000},
{"name":"Riya","salary":650000},
{"name":"Rithik","salary":45000},
{"name":"Ritesh","salary":230000}];

function findMin(arr,startIndex)
{
    let minIndexTillnow=startIndex;
    for(let i=startIndex;i<arr.length;i++){
        if(arr[minIndexTillnow].salary>arr[i].salary)
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