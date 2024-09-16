// Example: Dynamic Year in Footer
const yearSpan = document.querySelector('footer p');
yearSpan.textContent = `&copy; ${new Date().getFullYear()} Data Scientist Portfolio`;
