let inputFleid = document.getElementById('input-fleid')
let cntnr = document.querySelector(".container")
let mdule = document.querySelector('.module-box')
let text2 = document.getElementById('to_be_edit')
let editInpFleid = document.getElementById('edit_inp_fleid')
let submitBtn = document.getElementById("btn-submit")
let showList = document.getElementById("show-list")
let count = 0
let currentItem;

submitBtn.addEventListener('click', ()=>{
    if(inputFleid.value !== ""){
        showList.innerHTML += `<li class="list-item" id="item${++count}">${inputFleid.value}<div>
            <button onclick="deleteItem('item${count}')">delete</button>
            <button onclick="editItem('item${count}')">edit</button></div>
        </li>`
        inputFleid.value = '';
    }else{
        alert("Please fill the input fleid")
    }
})
function deleteItem(item_id){
    let itemToDelete = document.getElementById(item_id)
    itemToDelete.remove()
}
function editItem(item_id){
    let itemToEdit = document.getElementById(item_id)
    var text = itemToEdit.firstChild
    editInpFleid.value = text.textContent
    cntnr.style.display = "none"
    mdule.style.display = "block"
    currentItem = text
    // editInpFleid.value = text;
    // return text
}

function updateValue(){
    currentItem.textContent  =  editInpFleid.value
    cntnr.style.display = "block"
    mdule.style.display = "none"
}

