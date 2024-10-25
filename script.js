let first = document.getElementById('first')

first.addEventListener('click', function(){
    alert("alert")
})

let second = document.getElementById('second')

second.addEventListener('click', function(){
    this.textContent = "novy text"
})
 
const third = document.getElementById('third')

const ta = document.getElementById('ta')

third.addEventListener('click', function(){
    ta.textContent = "novy nadpis"
})

const fourth = document.getElementById('fourth')

const fa = document.getElementById('fa')

fourth.addEventListener('click', function(){
    fa.textContent = 'Ukol 4'
})

function hellouser(){
    let name = document.getElementById('name').value;
    alert('ahoj ' + name);
}


const m = document.getElementById('m');
        
    m.addEventListener('mouseenter', () => {
            m.textContent = 'novy text';
    });

    m.addEventListener('mouseleave', () => {
         m.textContent = 'najed tu';
    });

let time = document.getElementById('time');
let dat = document.getElementById('dat');

const pt =  document.getElementById('pt');

const pda = document.getElementById('pda');

time.addEventListener('click', function(){
    const ati = new Date();
    const act = ati.toLocaleTimeString();
    pt.textContent = 'cas ted: ' + act;
})

dat.addEventListener('click', function(){
    const ati = new Date();
    const rd = ati.toLocaleDateString();
    pda.textContent = 'dnes je: ' + rd;
})

const value = parseFloat(document.getElementById('In').value);
document.getElementById('vs').innerText = 'Výsledek: ' + (value + 3);
