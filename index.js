fetch('https://starbucks-coffee-db2.p.rapidapi.com/api/recipes?id=6681b8d94507f78afe801877', {
    headers: {
      'X-RapidAPI-Key': 'cbf01d499amshbee62ea218f81d1p1b0048jsne3dae4d607c8',
      'X-RapidAPI-Host': 'starbucks-coffee-db2.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(data => {
      displayDrinkCards(data);
    })
    .catch(error => {
      console.error('Error fetching drink data:', error);
    });
  
  function displayDrinkCards(drinks) {
    const cardsContainer = document.getElementById('drink-cards');
  
    drinks.forEach(drink => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card', 'h-100');
  
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = drink.name;
  
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = drink.description;
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      card.appendChild(cardBody);
      cardsContainer.appendChild(card);
    });
  }