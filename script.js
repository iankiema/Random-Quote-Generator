const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author")

const apiURL = "https://api.quotable.io/random";


async function getQuote(){
    try {
        btnEl.innerText = "Loading....";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating....";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerHTML = quoteContent;
        authorEl.innerHTML = "~ " + quoteAuthor;
        btnEl.innerText = "Get A Quote";
        btnEl.disabled = false;
        
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "Whoops! An error has occured!";
        btnEl.innerText = "Get A Quote";
        btnEl.disabled = false;
    }
    

}


getQuote();
btnEl.addEventListener("click",getQuote)


function copyText() {
    const text = document.querySelector("#quote").innerText;
    const text2 = document .querySelector("#author").innerText;
    const k2buttonEl = document.getElementById("k2button");
    navigator.clipboard.writeText(text + text2);
    k2buttonEl.innerText = "Copied"
    k2buttonEl.disabled = true;
  }







