// append a ul to root
// add 5 li to ul with dog names

const dogs = ['Pepper', 'Penelope', 'Pugsly', 'Peppa', 'Pig'];

const root = document.getElementById('root');
const ul = document.createElement('ul');
root.appendChild(ul);

dogs.map(d => {
  const li = document.createElement('li');
  li.textContent = d;
  return li;
})
  .forEach(li => ul.appendChild(li));
