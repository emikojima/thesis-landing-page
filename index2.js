let modal = document.getElementsByClassName('modal-wrapper')[0];

let close = document.getElementsByClassName('modal-close')[0];

let open = document.getElementsByClassName('modal-open')[0];

let open2 = document.getElementsByClassName('modal-open')[1];

close.onclick = () => {modal.style.display="none"};

open.onclick = (e) => {
  e.preventDefault()
  modal.style.display="block";
}

open2.onclick = (e) => {
  e.preventDefault()
  modal.style.display="block";
}
