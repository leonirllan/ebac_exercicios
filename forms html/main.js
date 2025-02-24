const form = document.getElementById('form-envio')
form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const campoA = parseFloat(document.getElementById('campo-A').value);
    const campoB = parseFloat(document.getElementById('campo-B').value);
    
    if (campoB > campoA) {
        
        alert('Formulário válido! O número B é maior que o número A.');
    } else {
        
        alert('Formulário inválido! O número B deve ser maior que o número A.');
    }
});