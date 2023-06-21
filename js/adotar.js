let formulario = document.querySelector("form");

const checkInputs = (nome,telefone, email) => {

    let control = true;

    if(nome.value.trim() == ""){
        nome.classList.add("erro");
        control = false;
    }
    if(email.value.trim() == ""){
        nome.classList.add("erro");
        control = false;
    }
    if(telefone.value.trim() == ""){
        nome.classList.add("erro");
        control = false;
    }
    return control;
}


formulario.addEventListener("submit",(event)=> {
    event.preventDefault();
    let nome = document.querySelector("#nome");
    let telefone = document.querySelector("#telefone");
    let email = document.querySelector("#email");
    let renda = document.querySelector("input[type='radio']:checked");
    let residencia = document.querySelector("#residencia");
    let opcaoresidencia = residencia.options[residencia.selectedIndex];
    let intencao = document.querySelector("#intencao");

    const adotante = {
        id: l,
        nome : nome.value,
        telefone : telefone.value,
        renda : renda.value,
        residencia : opcaoresidencia.value,
        intencao : intencao.value,
    }
});