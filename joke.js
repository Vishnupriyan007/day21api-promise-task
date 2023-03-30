// Random Joke API
fetch('https://official-joke-api.appspot.com/random_joke')
	.then(response => response.json())
	.then(data => {
		const jokeCard = document.getElementById('joke');
		jokeCard.querySelector('.card-body').innerHTML = `<p><strong>${data.setup}</strong></p><p>${data.punchline}</p>`;
	})
	.catch(error => console.log(error));
