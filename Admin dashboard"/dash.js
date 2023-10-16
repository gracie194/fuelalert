const searchInput = document.getElementById('search-input').value
// const cards = document.getElementsByClassName('card')
const dashboard = document.getElementById('dashboard')
const searchResult = document.getElementById('searchResult')


function handleSearch(){
  const query = searchInput.value.toLowerCase()
  const cards = dashboard.getElementsByClassName('card')

  Array.from(cards).forEach((card) => {
    const cardContent = card.textContent.toLowerCase()
    if(cardContent.includes(query)){
      const filteredCardContent = cardContent.split(" ").filter((item) => item.includes(query)).join(" ")
   if(filteredCardContent){
    const resultItem = document.createElement('div')
    resultItem.textContent = filteredCardContent
    searchResult.appendChild(resultItem)
   }
    }
  })
}
searchInput.addEventListener("input",handleSearch)

// searchInput.addEventListener('input', function(){
//   const searchValue = this.value.toLowerCase()
//   const dashboardItems = dashboard.getElementsByClassName('card')
//   for(let i = 0; i < dashboardItems.length; i++){
//     const dashboardContent = dashboardItems[i].textContent
//     if(dashboardContent.toLowerCase().includes(searchValue)){
//       dashboardItems[i].Style.display = 'block'
//     }
//     else{
//       dashboardItems[i].Style.display = 'none'
//     }
//   }
// })
// searchInput.addEventListener('keyup',(e) =>{
//   const seacrhData = e.target.value.tolowerCase()
//   const filterData = categories.filter((item) => {
//     return (
//       item.title.tolowerCase().includes(seacrhData)
//     )
//   })
//   displayItem(filterData)
// })
// const displayItem = (items) =>{

// }
// se 



// // function to fetch and display statistics

  let statisticsContent = document.getElementById('statisticsContent')

function fetchStatistics(){
  fetch('statistic.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    for(let i = 0; i < data.length; i++){
    statisticsContent.innerHTML += `<h3 class="statisticsContent">${data[i].users }: ${data[i].orders }: ${data[i].revenue}</h3>`
    }
  })
  .catch((error) => {
    console.error('Error fetching statistics:' , error)
  })
}
fetchStatistics()

//function to fetch and display the admins

  let adminContent = document.getElementById('adminContent')

const file = 'admin.json'
function fetchAdmin(){
  fetch(file)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    for(let i = 0; i < data.length; i++){
    adminContent.innerHTML += `<h3 class="admincontent">${data[i].id }: ${data[i].username} </h3>`
    }
  })
  .catch((error) => {
    console.error('Error fetching admins:' , error)
  })
}
fetchAdmin()

 //function to fetch and display blogs

//   let blogContent = document.getElementById('blogContent')
// function blog(){
//   fetch('blogs.json')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data)
//     for(let i = 0; i < data.length; i++){
//     blogContent.innerHTML += `<h3 class="blogs">${data[i].title }: ${data[i].post }: ${data[i].body} </h3>`
//     }
//   })
//   .catch((error) => {
//     console.error('Error fetching blogs:' , error)
//   })
// }
// blog()

// //function to fetch and display the users

//   let userContent = document.getElementById('userContent')
// function users(){
//   fetch('users.json')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data)
//     for(let i = 0; i < data.length; i++){
//     userContent.innerHTML += `<h3 class="users">${data[i].id }: ${data[i].userId }: ${data[i].firstname }: ${data[i].email }:
//     ${data[i].password }: ${data[i].dateCreated} </h3>`
//     }
//   })
//   .catch((error) => {
//     console.error('Error fetching blogs:' , error)
//   })
// }
// users()



