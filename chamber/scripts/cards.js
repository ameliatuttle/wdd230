document.addEventListener('DOMContentLoaded', function() {
    const viewToggle = document.getElementById('view-toggle');
    const businessContainer = document.getElementById('business-container');
  
    // Load data from JSON file
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        // Create business cards or list based on view toggle
        viewToggle.addEventListener('change', function() {
          const view = viewToggle.value;
  
          if (view === 'card') {
            createBusinessCards(data.companies);
          } else if (view === 'list') {
            createBusinessList(data.companies);
          }
        });
  
        // Default view on page load
        createBusinessCards(data.companies);
      })
      .catch(error => console.log(error));
  
    function createBusinessCards(companies) {
      businessContainer.innerHTML = '';
  
      companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        if (company.membership === 'Gold') {
          card.classList.add('gold');
        }
  
        const image = document.createElement('img');
        image.src = `images/${company.image}`;
        image.alt = company.name;
  
        const name = document.createElement('h2');
        name.textContent = company.name;
  
        const address = document.createElement('p');
        address.textContent = company.address;
  
        const phone = document.createElement('p');
        phone.textContent = company.phone;
  
        const website = document.createElement('p');
        const websiteLink = document.createElement('a');
        websiteLink.href = company.website;
        websiteLink.textContent = company.website;
        website.appendChild(websiteLink);
  
        const description = document.createElement('p');
        description.textContent = company.description;
  
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(description);
  
        businessContainer.appendChild(card);
      });
    }
  
    function createBusinessList(companies) {
      businessContainer.innerHTML = '';
  
      const list = document.createElement('ul');
      list.classList.add('business-list');
  
      companies.forEach(company => {
        const listItem = document.createElement('li');
  
        const name = document.createElement('h2');
        name.textContent = company.name;
  
        const address = document.createElement('p');
        address.textContent = company.address;
  
        const phone = document.createElement('p');
        phone.textContent = company.phone;
  
        listItem.appendChild(name);
        listItem.appendChild(address);
        listItem.appendChild(phone);
  
        list.appendChild(listItem);
      });
  
      businessContainer.appendChild(list);
    }
  });
  