
let plusBtn = document.getElementsByClassName('btn-plus');
for (let plus of plusBtn) {
    plus.addEventListener('click', function () 
    { plus.previousElementSibling.innerHTML++; totalPrice(); 
    });
}

let minusBtn = document.getElementsByClassName('btn-moins');
for (let minus of minusBtn) {
  minus.addEventListener('click', function () {
    if (minus.nextElementSibling.innerText > 0) {
      minus.nextElementSibling.innerText--; totalPrice();
    }

   
  });
}


let deleteBtn = document.querySelectorAll('.btn-delete');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    deleteBtn[i].parentElement.parentElement.remove();

  
  });
}










function totalPrice () {
    let productPrice = document.getElementsByClassName('prix');
    let productQuantity = document.getElementsByClassName ('quantity');
    let s=0
    console.log (productPrice[0].innerHTML);
    console.log (productQuantity[0].innerHTML);

    for (let i=0; i<productPrice.length; i++) {s+=productPrice[i].innerHTML * productQuantity[i].innerHTML;}
    return (document.getElementById("prixtotal").innerText= "Total d'articles =  " + s + "  DTHT" );


}





