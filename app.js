const toggleHeart = document.getElementById('heart');

// Check if the item exists in local storage
if(localStorage.getItem('heart') === 'true') {
  toggleHeart.classList.add('fa-solid');
  toggleHeart.style.color = 'red';
}

toggleHeart.addEventListener('click', () => {
  toggleHeart.classList.toggle('fa-solid');
  if (toggleHeart.classList.contains('fa-solid')) {
    toggleHeart.style.color = 'red';
    localStorage.setItem('heart', true);
  } else {
    toggleHeart.style.color = 'white';
    localStorage.setItem('heart', false);
  }
});
