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

function add(){
    let fc = document.getElementById('fc');
    let fA = document.getElementById('fA').value;
    fA = Number(fA);
    let fB = fA + 3;
    fc.textContent = "vysledek:" + fB;
}

function add(){
    let fch = document.getElementById('fch');
    let ch1 = document.getElementById('ch1').value;
    let ch2 = document.getElementById('ch2').value;
    ch1 = Number (ch1);
    ch2 = Number (ch2);
    let upc = ch1 +ch2;
    fch.textContent = "vysledek:" + upc;
}
