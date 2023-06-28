let formulario = document.querySelector("form");
const objObrigatorio =
`
    <div class=""campo-obrigatorio">
        <img src="../img/erro.png">
        <small>Campo Obrigatório</small>
    </div>
`
;
const checkInputs = (nome,telefone, email, renda,residencia,opcaoresidencia,intencao) => {

    let control = true;

    if(nome.value.trim() == ""){
        nome.classList.add("erro");
        control = false;

        nome.parentElement.innerHTML += objObrigatorio;
    }
    if(email.value.trim() == ""){
        email.classList.add("erro");
        control = false;

        email.parentElement.innerHTML += objObrigatorio;
    }
    if(telefone.value.trim() == ""){
        telefone.classList.add("erro");
        control = false;

        telefone.parentElement.innerHTML += objObrigatorio;
    }
    if(renda.value.trim() == null){
        
        let divRenda = document.querySelector(".form-item-radio").parentElement;
        divRenda.classList.add("erro");
        control = false;

        renda.innerHTML += objObrigatorio;
    }
    if(intencao.value.trim() == ""){
        intencao.classList.add("erro");
        control = false;

        intencao.parentElement.innerHTML += objObrigatorio;
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

    if(!checkInputs(nome,telefone, email, renda,residencia,opcaoresidencia,intencao)){
        event.preventDefault();
    }else{

    }

    const adotante = {
        id: l,
        nome : nome.value,
        telefone : telefone.value,
        renda : renda.value,
        residencia : opcaoresidencia.value,
        intencao : intencao.value,
    }

    const objetoJSON = JSON.parse(objetoJSON);

});