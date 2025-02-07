// Function to change text content
function randomText() {
    const statements = [
        "Hello, world!",
        "This is a test",
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt",
        "Ut labore et dolore magna aliqua"
    ]

    return statements[Math.floor(Math.random() * statements.length)];
    
}

function changeText() {
    // Get the element by ID
    const element = document.getElementById('changeMe');
    // Change its text content
    element.textContent = "Text has been changed!"
    // element.textContent = randomText();
}

// Function to change style
function changeStyle() {
    const element = document.getElementById('styleMe');
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Change the text color
    element.style.color = randomColor;
}

// Function to add a new item
function addItem() {
    // Get the container where we'll add the new item
    const itemList = document.getElementById('itemList');
    
    // Create a new div element
    const newItem = document.createElement('div');
    
    // Add a class to the new element
    newItem.className = 'item';
    
    // Add some text to the new element
    newItem.textContent = 'Item ' + (itemList.children.length + 1);
    
    // Add the new element to the container
    itemList.appendChild(newItem);
}

// Function to remove the last item
function removeItem() {
    const itemList = document.getElementById('itemList');
    if (itemList.lastChild) {
        itemList.removeChild(itemList.lastChild);
    }
}
