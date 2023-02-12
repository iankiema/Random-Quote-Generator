const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author")

const apiURL = "https://api.quotable.io/random";


async function getQuote(){
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerHTML = quoteContent;
        authorEl.innerHTML = "~ " + quoteAuthor;
        
    } catch (error) {
        console.log(error)
    }
    

}



btnEl.addEventListener("click",getQuote)