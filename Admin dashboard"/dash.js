const navItems = document.querySelectorAll('nav li')


navItems.forEach(function(item){
item.addEventListener('click',function(event){
  let itemId = event.target.id 
  navItems.forEach(function(navItem){
    navItem.classList.remove('active')
  })
  event.target.classList.add('active')
  if(itemId == 'users'){
    displayUsers()
  }
  else if(itemId == 'filling-stations'){
    displayFillingStaions()
  }
  else if(itemId == 'error-reports'){
    displayErrorReport()
  }
  else if(itemId == 'statistics'){
    displayStatistics()
  }
  else if(itemId == 'blogs'){
    displayBlog()
  }
})
})

function displayFillingStaions(){
  clearContent()
  fetch('https://')
  .then(res => res.JSON())
  .then(data => {
    
  }
    )
}