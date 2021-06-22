function createStateOptions() {
    let states = document.getElementById("state");
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    
    for(let index = 0; index < stateOptions.length; index+=1){
        let createOption = document.createElement("option");
        states.appendChild(createOption)
        createOption.innerHTML = stateOptions[index];
        createOption.value = stateOptions[index];
    }
}
createStateOptions()

function validateDateField () {
    
}
function activeButton () {
    let enviar = document.getElementById('submit-btn');
    const checkbox = document.getElementById('agreement');
    checkbox.addEventListener('change', ativaEnviar)
    function ativaEnviar () {
        console.log('chama')
        if(checkbox.checked != true){
            enviar.setAttribute('disabled', true)
        }else{
            enviar.removeAttribute('disabled')
        }
    }
}
activeButton ()

