// Retrieve the form element
const form = document.getElementById('myForm');

// Retrieve the submission count element
const submissionCount = document.getElementById('submissionCount');

// Retrieve the previous submission count from local storage
let count = localStorage.getItem('submissionCount');
count = count ? parseInt(count) : 0;

// Display the initial count
submissionCount.textContent = count;

// Add a submit event listener to the form
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  count++; // Increment the submission count
  submissionCount.textContent = count; // Update the count on the page
  localStorage.setItem('submissionCount', count); // Store the count in local storage
});