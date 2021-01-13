const but = document.querySelectorAll("button");
const vid = document.querySelector("video");
const trx = vid.audioTracks;
console.log(vid);
console.log(trx);

but.forEach(prsd);
function prsd(item, index) {
  let x = index;

  item.addEventListener("click",function(){    
    let i;
    for (i = 0; i < but.length; i++){
      but[i].style.backgroundColor = "grey";
      trx[i].enabled = false;
    }

    but[x].style.backgroundColor = "white";
    trx[x].enabled = true;
    })
}

const slid = document.querySelectorAll("[type=range]");
const ipnm = document.querySelectorAll("[type=number]");

slid.forEach(slide);
function slide(item, index) {
  item.addEventListener("input",function(){
    let i = index;
    ipnm[i].value = this.value;
  })
}
