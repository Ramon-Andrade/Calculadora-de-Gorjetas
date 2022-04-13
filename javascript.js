function calculateTip(event) {
    event.preventDefault()
    let conta = document.getElementById('conta').value
    let selecionar = document.getElementById('selecionar').value
    let pessoas = document.getElementById('pessoas').value

    if (conta == '' | selecionar == 0) {
        alert('Por favor, preencha os valores!')
        return
    }

    if (pessoas == '' | pessoas <= 1) {
        pessoas = 1
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }

    let total = (conta * selecionar) / pessoas
    total = total.toFixed(2)
    document.getElementById('tip').innerHTML = total
    document.getElementById('totalTip').style.display = 'block'
}

document.getElementById('totalTip').style.display = 'none'
document.getElementById('each').style.display = 'none'

document.getElementById('tipsForm').addEventListener('submit', calculateTip)