fetch('../../data.json')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved JSON data
    // For example, you can pass it to a rendering function
    renderData(data);
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  function renderData(data) {
    const container = document.getElementById('data');
    
    // Clear the container
    container.innerHTML = '';
    
    // Render each item in the data
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.category;
      container.appendChild(listItem);
    });
  }