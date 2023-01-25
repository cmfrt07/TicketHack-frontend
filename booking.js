fetch('http://localhost:3000/finalbookings')
	.then(response => response.json())
	.then(data => {
        console.log(data)
			for (let i = 0; i < data.allBookings.length; i++) {
				document.querySelector('.booking-container').innerHTML += `
				<div class='pinkbox'> 
          <p class = 'destination'> ${data.allBookings[i].departure} > ${data.allBookings[i].arrival} </p>
          <p class = 'time'> ${data.allBookings[i].date} </p>
          <p class = 'prix'> ${data.allBookings[i].price}€ </p>
        </div>
			`;
			}
		
		}
	);