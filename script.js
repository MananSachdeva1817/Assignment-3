class Smoothie {
    constructor(name, size, fruits, extras) {
        this.name = name;
        this.size = size;
        this.fruits = fruits;
        this.extras = extras;
    }

    getDescription() {
        return `${this.name} ordered a ${this.size} smoothie with the following fruits: ${this.fruits.join(', ')} and the following extras: ${this.extras.join(', ')}`;
    }
}

const form = document.getElementById('smoothieForm');
const output = document.getElementById('output');
const orderButton = document.getElementById('orderButton');

orderButton.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(checkbox => checkbox.value);
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(checkbox => checkbox.value);
    
    const smoothie = new Smoothie(name, size, fruits, extras);
    output.textContent = smoothie.getDescription();
});
