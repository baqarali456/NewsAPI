let str = "";
const cardsContainer = document.getElementById("cardsContainer");

let Loading = true;
function loading(){
if(Loading){
  document.getElementById('loading').textContent = "Loading...";
  setTimeout(()=>{
    Loading = false
    document.getElementById('loading').innerHTML = "";

  },1500);
  console.log(Loading);
  
   Loading = false;
     
}
else{
  Loading = true;
  if(Loading){
    document.getElementById('loading').textContent = "Loading...";
    setTimeout(()=>{
      Loading = false
      document.getElementById('loading').innerHTML = "";
  
    },1000);
     Loading = false;
       
  }
}

}


loading()





const showNews = async (category, country,totalpage,pageSize) => {
   
  let response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5ae4245ddcbc4c58a2c855a9465ef581`
    );

  
  let data = await response.json();
  
  const { totalResults, articles } = data;
  
  str = "";

  
  

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

window.addEventListener('DOMContentLoaded',showNews("entertainment", "in"));



const categories = document.querySelectorAll('.categories');
categories.forEach(category => {
    category.addEventListener('click',async(e)=>{
        let findCategory = e.target.innerHTML;
         let chooseCategory =  findCategory.charAt(0).toLowerCase() + findCategory.slice(1).toLowerCase()
         loading()
         showNews(chooseCategory, "in",1);
     
    })
});

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    showNews(input.value, "in");
})




const next = document.getElementById('next');
const prev = document.getElementById('prev');



next.addEventListener('click',()=>{
   
})