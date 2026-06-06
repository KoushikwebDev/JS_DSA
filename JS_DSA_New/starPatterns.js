let n = 5;


for(let i =0; i < 5; i++){
   let row = "";
    for(let j =0; j < 5; j++){
        row += "* "
    };
    console.log(row)
}
// output : 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 


for(let i=0; i < 4; i++){
    let row = "";
    for(let j=0; j < i+1; j++){
        row += "* "
    };
    console.log(row)
}
// output :
// * 
// * * 
// * * * 
// * * * * 
//? Tip : j < 5 and J <= 4 are same, its like j < n + 1 and j <= n

for(let i=0; i < 5; i++){
    let row = "";
    for(let j=1; j < i+2; j++){
        row += j + " "
    };
    console.log(row)
}
// output :
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

for(let i=0; i < 5; i++){
    let row = "";
    for(let j=0; j < i+1; j++){
        row += j+1 + " "
    };
    console.log(row)
}
// output :
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

for(let i=0; i < 5; i++){
    let row = "";
    for(let j=0; j < i+1; j++){
        row += i+1 + " "
    };
    console.log(row)
}
// output : 
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5 
n = 5;
for(let i=0; i < n; i++){
    let row = "";
    for(let j=0; j < n - i; j++){
        row += j+1 + " "
    };
    console.log(row);
}
// output :
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

for(let i=0; i < n; i++){
    let row = "";
    for(let j=0; j < n - (i+1); j++){
        row +=" "
    };
    
    for (let k =0; k < i + 1; k++){
        row+= "*"
    }
    console.log(row)
}
// output :
//     *
//    **
//   ***
//  ****
// *****

let temp = 1;
for(let i=0; i < 5; i++){
    let row = "";
    for(let j=0; j < i + 1; j++){
        row =row + " " + temp;
        if(temp === 1){
            temp = 0;
        } else {
            temp = 1
        }
    };
    console.log(row)
}
// output :
//  1
//  1 0
//  1 0 1
//  1 0 1 0
//  1 0 1 0 1