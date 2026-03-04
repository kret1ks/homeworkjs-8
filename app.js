// const inputRef = document.querySelector("#bookmarkInput")
// const btnRef = document.querySelector("#addBookmarkBtn")
// const listRef = document.querySelector("#bookmarkList")


// const bookArray = JSON.parse(localStorage.getItem("key")) || [];
// console.log(bookArray);



// btnRef.addEventListener("click", () => {
//     const urlValue = inputRef.value 
//     if(urlValue){
//         bookArray.push(urlValue)
//         inputRef.value = ""
//         saveAndRender()
//         localStorage.setItem("key", JSON.stringify(bookArray))
//         renderArray()
//     }    
//     //  console.log(bookArray);   
// })


// listRef.addEventListener("click", (event) => {
   
//     const target = event.target.nodeName
//     if(target !== "BUTTON"){
//         return
//     }
//     //  console.log(target);
//     const index = event.target.dataset.index;
  
//     bookArray.splice(index, 1);
//     saveAndRender()
//     localStorage.setItem("key", JSON.stringify(bookArray))
//     renderArray(); 
// })



// function renderArray () {
//     const item = bookArray.map((url, index) => {
//         return `<li>
//         <a href="${url}">${url}</a>
//         <button type="button" data-action="${index}">Видалити</button>
//     </li>`
//     }).join("")

//     listRef.innerHTML = item
// }


// function saveAndRender() {
//     localStorage.setItem("key", JSON.stringify(bookArray));
//     renderArray();
// }

// renderArray()





///////////////////////////////////////////////////////////////////////////////////////////////////////





// .Форма збереження даних
// Створіть просту форму з полями вводу і кнопкою, яка зберігає дані в localStorage. При наступному завантаженні сторінки зчитайте збережені дані з localStorage та відобразіть їх у відповідних полях вводу.


const nameRef = document.querySelector('#username');
const passwordRef = document.querySelector('#password');
const saveBtn = document.querySelector("#saveBtn");


nameRef.value = localStorage.getItem("name") || "";
passwordRef.value = localStorage.getItem("password") || "";


saveBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    nameRef.value = ""
    passwordRef.value = ""

});


nameRef.addEventListener("input", (event) => {
    const inputName = event.target.value.trim();
    localStorage.setItem("name", inputName);
});



passwordRef.addEventListener("input", (event) => {
    const inputPassword = event.target.value.trim();
    localStorage.setItem("password", inputPassword);
});



localStorage.setItem("name", nameRef.value)
localStorage.setItem("password", passeordRef.value)

function checkStorage () {
    const getName = localStorage.getItem("name")
    const getPassword = localStorage.getItem("password")

    nameRef.value = getName
    passwordRef.value = getPassword
}
checkStorage()
















