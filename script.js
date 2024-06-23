
document.querySelector('form').addEventListener('submit', function(event) {
    var searchInput = document.querySelector('.search-bar input');
    if (searchInput.value.trim() === '') {
        event.preventDefault();
        alert('Please enter a search term.');
    }
});
