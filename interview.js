const fetchBtn = document.getElementById('fetch-btn');
const cardContainer = document.getElementById('card-container');

fetchBtn.addEventListener('click', fetchPosts);

function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      // for (const post of posts) {
      //   const card = document.createElement('div');
      //   card.classList.add('card');
      //   card.innerHTML = `
      //     <h2>${post.title}</h2>
      //     <p>${post.body}</p>
      //   `;
      //   cardContainer.append(card);
      // }
      const cards = posts.map (post => {
        return `
          <div class="card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          </div>
        `;
      }
      ).join('');

      cardContainer.innerHTML = cards;
    })
    .catch(error => {
      cardContainer.innerHtML = `<p>Error</p>`;
    })
}



// Path: interview.html

