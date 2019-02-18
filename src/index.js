const root = document.getElementById('root');
const ul = document.createElement('ul');
root.appendChild(ul);


['Lady', 'Jasmine', 'Indy', 'Bandit', 'Rocky']
  .map(name => {
    const li = document.createElement('li');
    li.textContent = name;
    return li;
  })
  .forEach(li => ul.appendChild(li));
