let p, q ,r, s;
p = [1,2,1];
q = [4, -17];
r = [-1, 0, 0, -5, 0, 3];
s = new Array(81)
s.fill(0,0,40);
s[40]= 5;
s.fill(0,41,80);
s[80]=2;


/*console.log(p)
console.log(q)
console.log(r)
console.log(s)*/



function evaluarPol(arr, x){
    let pol = 0;
    
    for (let i=0; i < arr.length; i++){
        pol += arr[i] * Math.pow(x, i);
    }
    
    console.log(pol);
}

evaluarPol(p, -3);
evaluarPol(p, -2);
evaluarPol(p, -1);
evaluarPol(p, 0);
evaluarPol(p, 1);
evaluarPol(p, 2);
evaluarPol(p, 3);
