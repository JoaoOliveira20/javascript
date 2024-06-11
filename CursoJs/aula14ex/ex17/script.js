function verificar() {
    var num = document.getElementById('inc').value;

    res.innerHTML = '';
    num = Number(num);

    if (num <= null) {
        alert('digite um número')
    }

    for (var vezes = 1; vezes <= 10; vezes++) {
        var resultado = num * vezes
        var div = document.createElement('div');
        div.textContent = `${num} x ${vezes} = ${resultado}`;
        res.appendChild(div);

    }
}