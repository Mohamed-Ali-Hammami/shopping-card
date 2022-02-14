let minusBtn = document.getElementsByClassName('btn-outline-secondary');
console.log('btnmoins', minusBtn);

for(let minus of minusBtn ){
    
   minus.addEventListener('click',function(){
       if (minus.nextElementSibling.innerText > 0 ){
           minus.nextElementSibling.innerText --;
           myFunction()
       }
   })
}

//button plus .

let plusBtn = document.getElementsByClassName('btn-outline-success');
console.log(plusBtn);

for (let plus of plusBtn ){
   plus.addEventListener('click',function(){
       plus.previousElementSibling.innerText ++ ;
       myFunction()
   })
}

let deleteBtn = document.querySelectorAll('.delete-btn');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    deleteBtn[i].parentElement.parentElement.remove();

    myFunction()
   
    // Update the total price
   
 
  });
}

function myFunction() {
  var prices = document.getElementsByClassName("total-price");
  var gst = document.getElementsByClassName("innerTt");

  let s = 0 

  for(let i =0 ; i < prices.length ; i++) {

    s = s+ prices[i].innerHTML * gst[i].innerHTML

  }

  


  // var total = +price + +gst;
  document.getElementsByClassName("total-tout")[0].innerHTML = s;
// console.log("myFunction")
}


//changer la couleur du coeur

let hearts = document.getElementsByClassName("fa-heart");
console.log(hearts);

for (let heart of hearts) {
  console.log("test1");

  heart.addEventListener("click", function () {
    console.log("test");
    if (heart.style.color === "grey") {
      heart.style.color = "red";
      console.log("test red");
    } else {
      heart.style.color = "grey";
      console.log("testgray");
    }
  });
}

