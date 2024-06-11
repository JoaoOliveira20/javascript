function verificar() {
    var inc = document.getElementById("inc").value;
    var fim = document.getElementById("fim").value;
    var passo = document.getElementById("passo").value;
    var res = document.querySelector('div#res')

    res.innerHTML = '';
    inc = Number(inc);
    fim = Number(fim);
    passo = Number(passo);

    if (passo <= 0) {
        passo = 1
    }

    if (inc <= fim) {
        for (var c = inc; c <= fim; c += passo) {
            var div = document.createElement('div');
            div.textContent = `Passo: ${c}`;
            res.appendChild(div);
        }
    } else {
        for (c = inc; c >= fim; c -= passo) {
            div = document.createElement('div');
            div.textContent = `Passo: ${c}`;
            res.appendChild(div);
        }
    }
}