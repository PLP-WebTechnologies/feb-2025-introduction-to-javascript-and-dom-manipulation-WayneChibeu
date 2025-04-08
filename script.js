// Change content and style dynamically
function changeContent() {
    const description = document.getElementById ("description");
    description.textContent = "You've changed the text and style! Good job! 🎉";
    description.style.color = "crimson";
    description.style.fontWeight = "bold";
  }
  
  // Add a new element
  function addElement() {
    const container = document.getElementById("container");
    const newItem = document.createElement("p");
    newItem.textContent = "I am a new paragraph added dynamically!";
    newItem.className = "dynamic-item";
    container.appendChild(newItem);
  }
  
  // Remove the last added element
  function removeElement() {
    const container = document.getElementById("container");
    const lastItem = container.lastElementChild;
    if (lastItem) {
      container.removeChild(lastItem);
    }
  }
  