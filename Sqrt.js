let n=10;

let precision=4;

let start=0;
let end=n;
let mid=0;
let ans=-1;
while(end-start > Math.pow(10,-(precision+1))){
    mid=(start+end)/2;
    if(mid*mid===n){
        ans=mid;
        //break;
    }
    else if(mid * mid >n){
        end=mid;
    }
    else{
        start=mid;
    }

}
ans=mid;
console.log(ans);