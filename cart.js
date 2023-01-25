
fetch('http://localhost:3000/bookings')
	.then(response => response.json())
	.then(data => {
        console.log(data)
			for (let i = 0; i < data.allBookings.length; i++) {
				document.querySelector('.trips-container').innerHTML += `
				<div class='trajet'> 
          <p class = 'destination'> ${data.allBookings[i].departure} > ${data.allBookings[i].arrival} </p>
          <p class = 'time'> ${data.allBookings[i].date} </p>
          <p class = 'prix'> ${data.allBookings[i].price}€ </p>
          <button id = "${data.allBookings[i]._id}" class="button-x" type="button">X</button>
        </div>
			`;
			}
			DeleteCart();
		}
	);

    function DeleteCart() {
        for (let i = 0; i < document.querySelectorAll('.button-x').length; i++) {
            document.querySelectorAll('.button-x')[i].addEventListener('click', function () {
                fetch(`http://localhost:3000/bookings/${this.id}`, 
                { method: 'DELETE' })
                    .then(response => response.json())
                    .then(data => {
                        if (data.result) {
                            this.parentNode.remove();
                        }
                    });
            });
        }
    } 


    document.querySelector('.button-purchase').addEventListener('click', function () {    
    fetch('http://localhost:3000/bookings/transferbooking')
	.then(response => response.json())
	.then(data => {
        if (data.result) {
            window.location.assign('booking.html');
            console.log(data)			
		}
    })}
	);