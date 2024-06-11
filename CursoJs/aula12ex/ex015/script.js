function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.querySelector('div#res')
    var [ano, mes, dia] = fano.split('-')
    console.log(ano)
    if (!fano || Number(fano) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = (anoAtual - ano)
        console.log(idade, ano, fano)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            verificarIdadeHomen(idade, img)

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            verificarIdadeMulher(idade, img)
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}

function verificarIdadeHomen(idade, img) {
    if (idade >=0 && idade < 10) {
        // Criança

        console.log('chegou')
        return img.setAttribute('src', 'img\\hbebe.jpg');
    }
    if (idade < 21) {
        // Jovem

        return img.setAttribute('src', 'img\\hjovem.jpg');
    }
    if (idade < 50) {
        // Adulto

        return img.setAttribute('src', 'img\\hadulto.jpg');
    }

    // Idoso

    return img.setAttribute('src', 'img\\hidoso.jpg');
}

function verificarIdadeMulher(idade, img) {
    if (idade >=0 && idade < 10) {
        // Criança

        console.log('chegou')
        return img.setAttribute('src', 'img\\mbebe.jpg');
    }
    if (idade < 21) {
        // Jovem

        return img.setAttribute('src', 'img\\mjovem.jpg');
    }
    if (idade < 50) {
        // Adulto

        return img.setAttribute('src', 'img\\madulto.jpg');
    }

    // Idoso

    return img.setAttribute('src', 'img\\midoso.jpg');

}

/*
refatoração
*/