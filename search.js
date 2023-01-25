document.querySelector('#search').addEventListener('click', function () {    
    const trip = {
      departure: document.querySelector('#departure').value,
      arrival: document.querySelector('#arrival').value,
      date: document.querySelector('#date').value,
   
     };
   
    fetch('http://localhost:3000/trips/searchTrip', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trip),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        for(let i=0; i < data.voyage.length; i++){
        document.querySelector('#searchlist').innerHTML += `
      <div class = "tripname" > 
        <p> ${data.voyage[i].departure} > ${data.voyage[i].arrival}</p>
        <p> ${data.voyage[i].date} </p>
        <p> ${data.voyage[i].price} </p>
        <button id= "${data.voyage[i]._id}" class = "boutonBook"> Book </button>
      </div> 
        `

        buttonClickCart()
				document.querySelector('#departure').value = '';
                document.querySelector('#arrival').value = '';
    }
      });

   });

   function buttonClickCart() {
   for (let i=0; i < document.querySelectorAll('.boutonBook').length; i++){
    document.querySelectorAll('.boutonBook')[i].addEventListener('click', function (){
    console.log(this)
    let tripId = this.id
   fetch(`http://localhost:3000/trips/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({tripId}),
  })
    .then(response => response.json())
    .then(data => {
        console.log(data)
      if (data.result) {
        window.location.assign('cart.html');
        console.log(data)
        // contentCart (data)

    }})
 })
 }
    }


function contentCart (dataSave) {
    // let cartId = data
    fetch('http://localhost:3000/trips/tripCart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({dataSave}),
    })  .then (response => response.json())
    .then(data => {
    console.log(data)
    document.querySelector('.cart-container').innerHTML += `
      <div class = "trajet" > 
        <p> ${data.departure} > ${data.arrival}</p>
        <p> ${data.date} </p>
        <p> ${data.price} </p>
        <button class = "boutonBook"> Book </button>
      </div> 
        `
})
}






 