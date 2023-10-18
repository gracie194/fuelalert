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
