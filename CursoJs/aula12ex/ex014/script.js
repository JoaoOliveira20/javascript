function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutes} horas.`
    if (hora >= 0 && hora < 12) {
            //BOM DIA!
            img.src = 'img/manha.jpg'
            document.body.style.background = '#BB762A'
        }   else if (hora >= 12 && hora < 18) {
            //BOA TARDE!
            img.src = 'img/tarde.jpg'
            document.body.style.background = '#6B4243'
        } else {
            //BOA NOITE!
            img.src = 'img/noite.jpg'
            document.body.style.background = '#2A5D94'
        }
    }