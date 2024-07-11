let container = [{item:'storage'}]; // Initialize with an empty array

// Retrieve data from local storage (if available)
let storedA = localStorage.getItem("container");
if (storedA) {
    retA = JSON.parse(storedA);
    container=JSON.parse(storedA);
    print();
} else {
    retA = [];
   // Initialize with an empty array if no data found
}

function print() {
    let A = document.querySelector('#text').value;
    container.push({ item: A });
    
    localStorage.setItem("container", JSON.stringify(container)); // Store as a string
    storedA = localStorage.getItem("container");
    retA = JSON.parse(storedA);
   

    let newHTML = '';
    for (let i = 0; i < retA.length; i++) {
        newHTML += `
            <span id="close">${retA[i].item}</span>
            <button id="far">delete</button>
            <br>
        `;
    }
    document.querySelector('#gen').innerHTML = newHTML;
    empty();
}

function empty() {
    document.querySelector('#text').value = '';
}
