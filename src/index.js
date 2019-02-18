const root = document.getElementById('root');
const ul = document.createElement('ul');
root.appendChild(ul);
['Scruffy', 'Buddy', 'Milo', 'Coco', 'Muffin'].map(name=> {
  const li = document.createElement('li');
  li.textContent = name;
  return li;
})
.forEach(li => ul.appendChild(li));

