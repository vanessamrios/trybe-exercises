let n = 5;
let symbol = "*";
let space = ".";
let linha = "";

for (let indexLinha = 0; indexLinha < n; indexLinha+=1){
    for(let index = 1; index <= (n-indexLinha); index+=1){
        linha = linha + space;
    }
    console.log(linha);  
}



// n = 5
               #space           #star   
1  //     *      4      5-1   n-indexLinha    1
2  //    **      3      5-2       2
3  //   ***
4  //  ****
5  // *****      0      5-5       5


