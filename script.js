let str = "";
const cardsContainer = document.getElementById("cardsContainer");
let newsData;
let index = 1;
let category = "sports";

let Loading = true;
function loading() {
  if (Loading) {
    document.getElementById("loading").innerHTML = '<i class="my-3 fa-solid fa-spinner fa-spin"></i>';
    setTimeout(() => {
      document.getElementById("loading").innerHTML = "";
    }, 800);
  } 
}

loading();

const showNews = async (country,category,size,page) => {
  let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5ae4245ddcbc4c58a2c855a9465ef581&pageSize=${size}&page=${page}`);
  data = await response.json();
  newsData = data.articles.map(ele=>({...ele,category:category,country:country}));
  listofNews();
}
showNews('in',category,6,index);


function listofNews() {
  str = "";
  newsData.forEach(element => {
    const { 
      author,
      content, description,
      publishedAt,
      title,
      url, 
      urlToImage
    } = element;
    str += `<div class="card mx-3 my-3" style="width: 18rem;">
      <img src=${urlToImage?urlToImage:'https://images.news18.com/ibnlive/uploads/2024/03/virat-kohli-practice-pti-2024-03-9d14b1b119ef307845218eabf052b67c-16x9.jpg?impolicy=website&width=1200&height=675'} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">published At ${new Date(publishedAt).toLocaleDateString()}</p>
        <a href=${url} target="_blank"  class="btn btn-primary">Read News</a>
      </div>
    </div>`;
  });
  cardsContainer.innerHTML = str;

}

const categories = document.querySelectorAll('.categories');

categories.forEach(category=>{
  category.style.cursor = "pointer";
  category.addEventListener('click',()=>{
    loading();
    showNews("in",category.innerHTML.toLowerCase(),6,index);
  })
});

const homeCategory = document.querySelector('.homeCategory');
homeCategory.addEventListener('click',()=>{
  showNews('in',"sports",6,index);
});



next.addEventListener('click',()=>{
 nextpage()
});
function nextpage(){
  if(index < 14){
    index++;  
    showNews('in',category,6,index);
  }
}

prev.addEventListener('click',()=>{
 prevpage()
})

function prevpage(){
  if(index > 1){
    index--; 
    showNews('in',category,6,index);
  }
}

let allcategory  =["business","entertainment","general","health","science","sports","technology"]

submit.addEventListener('click',(e)=>{
 e.preventDefault();
  allcategory.forEach(ele=>{
   if(input.value == ele){
     loading();
     showNews('in',input.value,6,index);
     input.value = "";
   }
  })
  
 
})

