let addBtn = document.getElementById("add-store");
let search = document.getElementById('search-bar');
let list = document.querySelector('.main-div ol');

addBtn.addEventListener('click', () => {
    let values = document.getElementsByClassName("footer-input");
    let li = document.createElement("li");
    let sp1 = document.createElement("span");
    let sp2 = document.createElement("span");
    let sp3 = document.createElement("span");
    let sp4 = document.createElement("span");
    let sp5 = document.createElement("span");
    sp1.textContent = values[0].value;
    sp2.textContent = values[1].value;
    sp3.textContent = values[2].value;
    sp4.textContent = "delete";
    sp5.textContent = "update";
    sp4.setAttribute('class', "material-symbols-outlined delete");
    sp5.setAttribute('class', "material-symbols-outlined update");
    for (let i = 0; i < 3; i++){
        if (values[i].value.length == 0){
            alert("All fields are mandatory");
            return;
        }
        values[i].value = "";
    }
    li.appendChild(sp1);
    li.appendChild(sp2);
    li.appendChild(sp3);
    li.appendChild(sp4);
    li.appendChild(sp5);
    list.appendChild(li);
});

list.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList[1] == "delete"){
        list.removeChild(e.target.parentElement);
    }
});

list.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList[1] == "update"){
        let spans = e.target.parentElement.innerText.split("\n");
        list.removeChild(e.target.parentElement);
        let values = document.getElementsByClassName("footer-input");
        values[0].value = spans[0];
        values[1].value = spans[1];
        values[2].value = spans[2];
    }
});

search.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    let searchItems = document.querySelectorAll('li');
    for (let i = 1; i < searchItems.length; i++){
        if(searchItems[i].textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1){
            console.log(searchItems[i]);
            searchItems[i].style.display = "grid";
        }
        else {
            searchItems[i].style.display = "none";
        }
    }
});