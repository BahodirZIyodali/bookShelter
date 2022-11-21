"use strict";

// let a=prompt("Welcome to bookshop")
// if(a!=true && a!=null){
//    alert("what kind of book do u need ")
// }else{
//    alert("why u didnt answer ")
// }
let input =$('input');
let body=$("body");
let sun=$(".sun");
let intro=$(".intro");
let strong=$("strong");
let sidebar=$(".sidebar");
let main=$('.main');
let card=$$(".card");
let small=$$("small");
let h4=$$("h4");
let h3=$("h3");
let h2=$("h2");
let p=$("p");
let logo=$(".logo")
let mainCard=$$(".mainCard");
let modal =$(".modal-container");
let modalContent=$(".modal-content");
let modalImg=$(".modal-img");
let modalIntro=$(".modal-intro");
let h6= $$("h6")

sun.addEventListener('click', () => {
   if (body.style.backgroundColor=="white") {

      modalIntro.style.backgroundColor="  rgb(0,0,0,0.71)"
      modalContent.style.backgroundColor="  rgb(0,0,0,0.71)"
      modal.style.backgroundColor="  rgb(0,0,0,0.71)"
      sidebar.style.backgroundColor="  rgb(0,0,0,0.71)"
      intro.style.border="1px solid white "
      intro.style.backgroundColor=" rgb(0,0,0,0.71)"
      main.style.backgroundColor=" rgb(0,0,0,0.71)"
      h3.style.color="white"
      h2.style.color="white"
      p.style.color="white "
      
      strong.style.color="white"

      input.style.backgroundColor="rgb(0,0,0,0.71)    "
      input.style.color="white"
      logo.innerHTML=`<img src="./img/Group 200.svg" alt="" />`
      sun.innerHTML = `<i class="bi bi-moon text-light "></i>`;
      body.style.backgroundColor=" black"
    card.forEach(cards => {

    cards.style.backgroundColor=" rgb(0,0,0,0.71)";
     });
    mainCard.forEach(mainCards=> {
     mainCards.style.border="1px solid white"
    mainCards.style.backgroundColor=" rgb(0,0,0,0.71)";
     });
    h4.forEach(h4s => {

    h4s.style.color="white";
     });
    h6.forEach(h6s => {

    h6s.style.color="white";
     });
    small.forEach(smalls => {

    smalls.style.color="white";
     });
   } else {
      
      h6.forEach(h6s => {

         h6s.style.color="";
          });
      modalIntro.style.backgroundColor=""
      modalContent.style.backgroundColor=""
      modal.style.backgroundColor=""
      h3.style.color=""
      p.style.color=""
      input.style.color=""
      mainCard.forEach(mainCards=> {

         mainCards.style.backgroundColor="";
          });
      h3.style.color=" "
      h2.style.color=" "
      p.style.color=" "
      card.forEach(cards => {

         cards.style.backgroundColor="";
          });
          h4.forEach(h4s => {

            h4s.style.color="";
             });
            small.forEach(smalls => {
        
            smalls.style.color="";
             });
      
      sidebar.style.backgroundColor=""
      intro.style.backgroundColor=""
      main.style.backgroundColor=""
      strong.style.color=""
      input.style.backgroundColor=""
      sun.innerHTML = ` <i class="bi bi-brightness-high-fill text-warning "></i>`;
      logo.innerHTML=` <img  src="./img/Group 193.svg" alt="" />`
      body.style.backgroundColor="white"
   }
})

const mores= document.querySelectorAll('.more');

   mores.forEach(more => {

   more.addEventListener('click', ()=> {
      modal.classList.remove("d-none")
       modalImg.addEventListener("click",()=>{
          modal.classList.add("d-none")
       })  
       console.log(more);
       });
});



// aside  slider

let aside =$(".sidebar")
let bookmarks=$$(".bookmark")
let delet =$$(".delete")

bookmarks.forEach(book => {

   book.addEventListener('click', ()=> {
   aside.classList.remove("d-none")
   
   delet.forEach(dal=>{
      dal.addEventListener("click",()=>{
         aside.classList.add("d-none")
      })   
   })
});
});











