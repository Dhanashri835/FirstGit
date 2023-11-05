var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

  // Get all the "Delete" buttons with the class "delete"
  var deleteBtn = document.querySelectorAll('.delete');

  // Iterate through each "Delete" button and add an "Edit" button next to it
  deleteBtn.forEach(deleteBtn => {
    // Create an "Edit" button element
    const editButton = document.createElement('button');
    editButton.className = 'btn btn-warning btn-sm float-right edit';
    editButton.textContent = 'Edit';

    // Add a click event listener for the "Edit" button (you can add your edit functionality here)
    editButton.addEventListener('click', () => {
      // Replace this with your edit functionality
      console.log('Edit button clicked');
    });

    // Insert the "Edit" button before the "Delete" button
    deleteBtn.parentNode.insertBefore(editButton, deleteBtn);
  });

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
