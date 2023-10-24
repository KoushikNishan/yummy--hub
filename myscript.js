

let left = document.getElementsByClassName('bi-caret-left-fill')[0];
let right = document.getElementsByClassName('bi-caret-right-fill')[0];
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', ()=> {
    cards.scrollLeft -=140;
})
right.addEventListener('click', ()=> {
    cards.scrollLeft +=140;
})

let poster =document.getElementById('poster');
let title =document.getElementById('title');
let price =document.getElementById('price');

Array.from(document.getElementsByClassName('card')).forEach((ele, i)=>{
    /*console.log(ele)*/
    ele.addEventListener('click',()=>{
        poster.src=ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        price_count.innerText =ele.getElementsByTagName('h4')[0].innerText;
        para.innerText =ele.getElementsByTagName('p')[0].innerText;
        
       
    })
})