const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6bc7e597c7mshe2cd4e61e52371bp1a43c7jsn0669ddaf2a7b',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

const apiURL = "https://quotes15.p.rapidapi.com/quotes/random/";


async function getQuote(){
    try {
        btnEl.innerText = "Loading....";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating....";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiURL,options);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.originator.name;
        quoteEl.innerHTML = quoteContent;
        authorEl.innerHTML = "~ " + quoteAuthor;
        btnEl.innerText = "Get A Quote";
        btnEl.disabled = false;
        
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "Whoops! An error has occured!Try again later";
        authorEl.innerText="Error!"
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
    alert("Text copied to clipboard")
    
  }







