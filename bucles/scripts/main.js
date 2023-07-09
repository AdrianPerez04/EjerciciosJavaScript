const miSection$$ = document.querySelector(".first-section");

for (i = 1; i <= 6; i++){
    let myArticle = document.createElement("article")
    myArticle.innerHTML = `
    <h${i}>cabecera${i}</h${i}>
    `;
    miSection$$.appendChild(myArticle);    
}