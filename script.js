let str = "";
const cardsContainer = document.getElementById("cardsContainer");


const showNews = async (category, country) => {
  let response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5ae4245ddcbc4c58a2c855a9465ef581`
  );
  let data = await response.json();
  
  const { totalResults, articles } = data;
  console.log(articles);
  

  for (let val of articles) {
    const { title, url, description, urlToImage, publishedAt, source } = val;
    str += `<div class="card mx-3 my-3" style="width: 18rem;">
      <img src=${urlToImage} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">published At ${publishedAt}</p>
        <a href=${url} target="_blank"  class="btn btn-primary">Read News</a>
      </div>
    </div>`;
}  
 cardsContainer.innerHTML = str
 
 
};
showNews("entertainment", "in");

const categories = document.querySelectorAll('.categories');
categories.forEach(category => {
    category.addEventListener('click',async(e)=>{
        let findCategory = e.target.innerHTML;
         let chooseCategory =  findCategory.charAt(0).toLowerCase() + findCategory.slice(1).toLowerCase()
         showNews(chooseCategory, "in");
     
    })
});

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    showNews(input.value, "in");
})
