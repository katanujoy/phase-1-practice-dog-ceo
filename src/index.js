document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1: Fetch and display dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById('dog-image-container');
    
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Random dog image';
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  
    // Challenge 2: Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
    let allBreeds = [];
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        allBreeds = Object.keys(data.message);
        renderBreeds(allBreeds);
      })
      .catch(error => console.error('Error fetching breeds:', error));
  
    // Challenge 3: Change font color on click
    dogBreedsList.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        e.target.style.color = '#ff69b4'; // Change to pink (or any color you prefer)
      }
    });
  
    // Challenge 4: Filter breeds by letter
    breedDropdown.addEventListener('change', (e) => {
      const selectedLetter = e.target.value;
      const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
      renderBreeds(filteredBreeds);
    });
  
    // Helper function to render breeds
    function renderBreeds(breeds) {
      dogBreedsList.innerHTML = ''; // Clear current list
      breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        dogBreedsList.appendChild(li);
      });
    }
  });
