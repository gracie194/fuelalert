const ul = document.querySelector('ul')
const userId = document.getElementById('user-id')
function addUser(){
  const addButton = document.querySelector('.add')
  userText = userId.value
  if(userText !== ''){
    const user =  {
      text: userText
    }
  }
  userId.push(user)
  userText.value = ''
}
function deleteUser(){
  userId.innerText = ''
  const li  = document.createElement('li')
  li.innerText = userText
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', function(){
  deleteuser(index)
  })
li.appendChild(deleteButton)
ul.appendChild(li)
}
function deleteuser(index){
userId.splice(index,1)
}