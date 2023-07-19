document.addEventListener('DOMContentLoaded', function () {
    const cells = document.getElementsByClassName('editable');
  
   //cell content into an editable input field

    function makeCellEditable(cell) {
      let originalContent = cell.textContent;
      let input = document.createElement('input');
      input.type = 'text';
      input.value = originalContent;
      input.addEventListener('blur', function () {
        cell.textContent = input.value;
      });
  
      cell.textContent = '';
      cell.appendChild(input);
      input.focus();
    }
  

    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', function () {
        makeCellEditable(this);
      });
    }
  
    let addRowButton = document.getElementById('newRowBtn');
    let tableBody = document.querySelector('tbody');
  
    // add a new row 
    function addNewRow() {
      let newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td class="editable" >Enter Name</td>
        <td class="editable" >Enter Age</td>
        <td class="editable" >Enter Mobile</td>
        <td class="editable" >Enter Email</td>
        <td class="editable" >Enter Address</td>
      `;
    
      // click on new editable cells
      let newCells = newRow.getElementsByClassName('editable');
      for (let i = 0; i < newCells.length; i++) {
        newCells[i].addEventListener('click', function () {
          makeCellEditable(this);
        });
      }
    
      tableBody.appendChild(newRow);
    }
  
    // Add row button
    addRowButton.addEventListener('click', addNewRow);

    

    let submitButton = document.getElementById('submitBtn');

    // Update with edited values
    function updateTable() {
      for (let key in editedValues) {
        let cell = document.getElementById(key);
        if (cell) {
          cell.textContent = editedValues[key];
        }
      }
    }
  
    //Submit button
    submitButton.addEventListener('click', updateTable);


  });
  