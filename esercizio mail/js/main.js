const userMail = prompt('Inserisci la tua email'); 

const invitedMail = ['lorenzo.bertoni@gmail.com', 'mario.rossi@gmail.com', 'luca.borghese@gmail.com'];

    if (userMail == invitedMail[0] || userMail == invitedMail[1] || userMail == invitedMail[2]) {
        alert('Sei tra gli invitati!')
    } else {
        alert('Non sei tra gli invitati!')
    }

