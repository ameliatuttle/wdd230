document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page's filename
  
    if (currentPage === 'orderConfirmation.html') {
      // Update the visit count in local storage for orderConfirmation.html
      let visitCount = localStorage.getItem('visitCount') || 0;
      visitCount = parseInt(visitCount) + 1;
      localStorage.setItem('visitCount', visitCount);
    }
  
    // Display the visit count from local storage on index.html
    if (currentPage === 'index.html') {
      let visitCount = localStorage.getItem('visitCount') || 0;
      document.getElementById('submissionCount').textContent = visitCount;
    }
  });