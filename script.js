const typeInput=document.querySelector('.typeInput')
const sendButton=document.querySelector('#sendButton')
const messageHolder=document.querySelector('.messageHolder')
sendButton.addEventListener('click' , ()=>{
    let newMessage = typeInput.value
    if(newMessage==false){

    }else if(newMessage){
        messageHolder.innerHTML+=`
        <div class="sentText">
        <div class="textContent">
        <p class="text">${newMessage}</p>
        <div class="details">
            <p class="time">7:40</p>
            <p class="status">read</p>
        </div>
        </div>
    </div>
        `
    }
    typeInput.value=''
})