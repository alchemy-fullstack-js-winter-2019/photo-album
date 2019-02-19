import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
  <App />,
  document.getElementById('root')

);









// //append a ul to the root

// function appendRoot(){
//     const ele = document.getElementById('root');
//     const ul = document.createElement('ul');
//     ele.appendChild(ul);
//     // li.innerText = 'charlie';
//     // ul.appendChild(li);
//     ['spot', 'nacho', 'rico'].map(name => {
//         const li = document.createElement('li');
//         li.textContent = name;
//         return li;
//     });

    
// }

// appendRoot();


// this.totalrow = function (idTable) {
//   // var table = document.getElementById(tableId);
//   var table = document.getElementById(idTable);

//   var row = document.createElement("tr");
//   var total = document.createElement("td");
//   table.appendChild(row);
//   total.innerText = 'total';
//   row.appendChild(total);
