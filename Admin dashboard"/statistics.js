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

