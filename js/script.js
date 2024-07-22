class ToDoItem {
    constructor(imageSrc, productName, price, description, location) {
        this.imageSrc = imageSrc;
        this.productName = productName;
        this.price = price;
        this.description = description;
        this.location = location;
    }
}

function addTask() {
    // Get input values
    const imageSrc = document.getElementById('taskInputImage').value;
    const productName = document.getElementById('taskInputName').value;
    const price = document.getElementById('taskInputPrice').value;
    const description = document.getElementById('taskInputDescription').value;
    const location = document.getElementById('taskInputLocation').value;

    // Create a new ToDoItem
    const newTask = new ToDoItem(imageSrc, productName, price, description, location);

    // Add the new ToDoItem to the list
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('div');
    taskItem.classList.add('items-card-item');

    // Build the HTML for the ToDoItem
    taskItem.innerHTML = `
    
    <img src="${newTask.imageSrc}" alt="${newTask.productName}" />
    <h2>${newTask.productName}</h2>
    <h3>Rp ${newTask.price}/Kg</h3>
    <p>${newTask.description}</p>
            <div class="items-location">
              <i data-feather="map-pin"></i>
              <h4>${newTask.location}</h4>
            </div>

    `;

    // Append the ToDoItem to the list
    taskList.appendChild(taskItem);
}