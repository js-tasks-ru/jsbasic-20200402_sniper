function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  document.addEventListener('click', (event) => {
    if (event.target === button) {
      text.toggleAttribute('hidden');
    }
  });
}
