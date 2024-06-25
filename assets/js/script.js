const btnEncript = document.getElementById('btnEncript')
const btnDecript = document.getElementById('btnEncript')
const btnCopy = document.getElementById('btnCopy')

btnEncrypt.onclick = () => {
    const textEntry = document.getElementById('textEntry').value
    const areaOutput = document.getElementById('outputArea')
    const outputText = document.getElementById('outputText')
    const hideArea = document.getElementById('hideArea')
    const hideArea2 = document.getElementById('hideArea2')
    const arrayText = textEntry.split('')
    const arrayListEncrypt = []

    arrayText.forEach(element => {
        if(element === 'a'){
            arrayListEncrypt.push('ai')
        } else if (element === 'e'){
            arrayListEncrypt.push('enter')
        } else if (element === 'i'){
            arrayListEncrypt.push('imes')
        } else if (element === 'o'){
            arrayListEncrypt.push('ober')
        } else if (element === 'u'){
            arrayListEncrypt.push('ufat')
        } else {
            arrayListEncrypt.push(element)
        }
    });
    
    hideArea.style.display = 'none'
    hideArea2.style.display = 'none'
    areaOutput.style.justifyContent = 'start'
    outputText.innerHTML = arrayListEncrypt.join('')

    btnCopy.style.display = '';
    
}

btnDecrypt.onclick = () => {
    const textEntry = document.getElementById('textEntry').value
    const areaOutput = document.getElementById('outputArea')
    const outputText = document.getElementById('outputText')
    const hideArea = document.getElementById('hideArea')
    const hideArea2 = document.getElementById('hideArea2')
    const arrayListEncrypt = []
    
    const decrypt = textEntry.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
    
    hideArea.style.display = 'none'
    hideArea2.style.display = 'none'
    areaOutput.style.justifyContent = 'start'
    outputText.innerHTML = arrayListEncrypt.join('')
    outputText.innerHTML = decrypt

}

btnCopy.onclick = () => {
    const outputText = document.getElementById('outputText')
    btnCopy.style.display = 'none';
    navigator.clipboard.writeText(outputText.textContent)
    .then(() => {
        alert('Texto copiado con éxito')
        })
        .catch(() => {
            alert('Error al copiar texto')
            })      
}