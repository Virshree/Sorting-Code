let arr1=[0,2,3,4];
let arr2=[3,2,1,0];
let ans=0;
for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]+arr1[j]>arr2[i]+arr2[j]){
            ans++;
        }
      
    }
}
console.log(ans);
