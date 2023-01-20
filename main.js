const quote = document.getElementById("quote");
const getNew = document.getElementById("btn");
const name = document.getElementById("name");
const url = "https://type.fit/api/quotes";

getNew.addEventListener("click", fetchQuote); //changes quote by click

function fetchQuote() {
  fetch(url).then(quotes => quotes.json())
  .then((data => {
    const randomQuoteIndex =  Math.floor(Math.random()* data.length)
    quote.innerHTML = `"${data[randomQuoteIndex].text}"`;
    name.innerHTML = data[randomQuoteIndex].author;
    data[randomQuoteIndex]
  }))
}

fetchQuote();

