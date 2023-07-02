const myArticle$$ = document.querySelector(".first-article");
let numbers = [1,2,3,4,5,6,7,8,9,10];

const docWrite = (value) => {
    let myDiv = document.createElement("div");
    myDiv.innerHTML = `
    <p>${value}</p>
    `;
    myArticle$$.appendChild(myDiv);
};

const evenOdd = (arr) => {
    let par = [];
    let impar = [];
    for (i = 0; i <= arr.length; i++){
        if (arr[i]%2==0){
            par.push(arr[i]);
        }else{
            impar.push(arr[i]);
        }
    }
    docWrite(par);
    docWrite(impar);
};

evenOdd(numbers);

