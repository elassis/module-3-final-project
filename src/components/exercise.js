let str = n.toString();
let divisor = 0;
let i = 0;
while(i < str.length){
    if(n % parseInt(str[i])=== 0){
        divisor++;
    }
    i+=1;
}
return divisor;