// Fetch data
fetch('../../data.json')
  .then(response => response.json())
  .then(renderData)
  .catch(error => {
    console.error('Error:', error);
  });

// Function render with new element
function renderData(data) {
  const parentElement = document.getElementById('summary_list');

  data.forEach(item => {
    const { icon, category, score } = item;

    const liElement = document.createElement('li');
    liElement.classList.add('summary_list_item', category.toLowerCase());

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('float-left');

    const imgElement = document.createElement('img');
    imgElement.classList.add('icon');
    imgElement.src = icon;
    imgElement.alt = category;
    leftDiv.appendChild(imgElement);

    const pElement = document.createElement('p');
    pElement.classList.add('name');
    pElement.textContent = category;
    leftDiv.appendChild(pElement);

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('float-right');

    const span1 = document.createElement('span');
    span1.classList.add('point');
    span1.textContent = score;
    rightDiv.appendChild(span1);

    const span2 = document.createElement('span');
    span2.classList.add('pointof');
    span2.textContent = ' / 100';
    rightDiv.appendChild(span2);

    liElement.appendChild(leftDiv);
    liElement.appendChild(rightDiv);

    parentElement.appendChild(liElement);
  });
}