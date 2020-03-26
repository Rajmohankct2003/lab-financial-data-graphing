

document.addEventListener('DOMContentLoaded', () => {
    const getGraphButton = document.getElementById("getGraph")  
    const graphContainer = document.getElementById('graph-container')
    const ctx = document.getElementById('myChart').getContext('2d');
    getGraphButton.addEventListener('click', () => {
      axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
      .then(response => {
       
        console.log("response: ", response.data)
        const dateArray = Object.keys(response.data.bpi)
        const valueArray = Object.values(response.data.bpi)
        console.log("dateArray", dateArray);

        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dateArray,
                datasets: [{
                    label: '# of Votes',
                    data: valueArray,
                    backgroundColor: 
                        'rgba(255, 99, 132, 0.2)'
                        // 'rgba(54, 162, 235, 0.2)',
                        // 'rgba(255, 206, 86, 0.2)',
                        // 'rgba(75, 192, 192, 0.2)',
                        // 'rgba(153, 102, 255, 0.2)',
                        // 'rgba(255, 159, 64, 0.2)'
                    ,
                    borderColor: 
                        'rgba(255, 99, 132, 1)'
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
      })
    })
    console.log('IronGenerator JS imported successfully!');
  
  }, false);


  

// axios({
//     method: "The HTTP method (verb) we are going to use, e.g. GET, POST, PUT, etc.",
//     url: "The url the server is going to receive.",
//     params: "URL parameters to be sent with the request"
//   })
//     .then(response => {
//       // Here we can do something with the response object
//     })
//     .catch(err => {
//       // Here we catch the error and display it
//     });