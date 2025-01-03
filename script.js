const keys = [7,8,9,'C',4,5,6,'+',1,2,3,'×','.',0,'-','÷']
let numbers = document.querySelector('.numbers');

keys.forEach( (key)=> {
    let div = document.createElement('div');
    div.textContent = key;
    numbers.appendChild(div);
})