function bubbleSort(a){
//let k=2;

//let a=[4,3,2,5,1,6];
    for(let i=0;i<a.length;i++)
    {
        for(let j=0;j<a.length-1;j++)
        {
            if(a[i]>a[j]){
                //swap
                let temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}  
console.log(bubbleSort([3,4,1,6,8,5,2,9]));
   




