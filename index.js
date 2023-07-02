let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
} else {
    saveEl.textContent = ""
}


let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    localStorage.setItem( "gecmisBilgi", saveEl.textContent )
    countEl.textContent = 0
    count = 0
    totalGoster();
}

let totalPeople = document.getElementById("total-people")
function totalGoster() {
    let gecmisBilgi = localStorage.getItem("gecmisBilgi")
    let gecmisSayilar = gecmisBilgi.split("-")
    let toplam = 0

    for (let i = 0; i < gecmisSayilar.length; i++) {
        toplam += Number(gecmisSayilar[i].trim())
      }
    
      localStorage.setItem("totalGoster", toplam);

      totalPeople.textContent = "Total People: " + toplam
    }

    totalGoster();