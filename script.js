let savedCards = document.getElementById("saved-cards");

function arrToString(arr){
    let result = '';
    for(let i = 0 ; i < arr.length ; i++){
        result += arr[i];
    }
    result = result + "..."
    return result;
}

function saveNote(){
    let newCard = document.createElement("div");
    let titleName = document.getElementById("title").value;
    let newNote = document.getElementById("newNote").value;
    if(titleName === "" || titleName === " " || newNote === ""){
        alert("Kindly! Enter a title for your note");
    }
    else{
        let preview = newNote.split("", 100)
        newCard.classList.add("card");
        newCard.id = 'card';
        newCard.innerHTML = `<div id="preview" class="preview">${arrToString(preview)} </div>
                <div class="info">
                <span class="title" id="title">
                    ${titleName}
                    </span>
                <span class="delete-btn" id="delete-btn">
                <i class="fa-solid fa-trash"></i>
                </span>
                </div>
                <div class="view" id="view">
                    <h1 id="savedTitle" class="savedTitle">${titleName}</h1>
                    <div id="savedNote" class="savedNote">${newNote}</div>
                    <button>Close</button>
                </div>`;
        savedCards.appendChild(newCard);
        localStorage.setItem("Notes" , savedCards.innerHTML);
        alert("Your note has been saved successfully!");
        window.location.reload();
        window.scrollTo(0,0);
    }
}

savedCards.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn") || e.target.tagName === "I") {
        if(confirm("This note will be deleted!")){
            e.target.closest('.card').remove();
            localStorage.setItem("Notes", savedCards.innerHTML);
        }
    } else if (e.target.closest('.card')) {
        let view = e.target.closest('.card').querySelector('.view');
        if (e.target.classList.contains('preview') || e.target.classList.contains('title')) {
            view.style.display = 'flex';
        } else if (e.target.tagName === 'BUTTON') {
            view.style.display = 'none';
        }
    }
});



function getNote(){
    savedCards.innerHTML = localStorage.getItem("Notes");
}
getNote();