const userMail = prompt('Inserisci la tua email'); 

const invitedMail = ['lorenzo.bertoni@gmail.com', 'mario.rossi@gmail.com', 'luca.borghese@gmail.com'];

let ric;

    for(let i = 0; i < invitedMail.length; i++) {
        if (invitedMail[i] == userMail) {
            alert('sei tra gli invitati!')
            ric = true;
        }
    }

    if (ric != true) {
        alert('non sei tra gli invitati!')
    }

    