const listaPosts = [
    {
      id: 1,
      nome: "Lorem ipsum dolor sit amet.",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
      imgURL: "./img/img1.jpg",
    },
    {
      id: 2,
      nome: "Lorem ipsum dolor sit amet.",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
      imgURL: "./img/img2.jpg",
    },
    {
      id: 3,
      nome: "Lorem ipsum dolor sit amet.",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
      imgURL: "./img/img3.jpg",
    },
    {
      id: 4,
      nome: "Lorem ipsum dolor sit amet.",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
      imgURL: "./img/img4.jpg",
    },
  ];
  
  let container = document.querySelector(".container");
  
  const criacaoPosts = () => {
    listaPosts.forEach((post) => {
      let card = `   
              <div class="card">
                  <
                  <img class="card-img" src=${post.imgURL} /> 
                  <h2 class="card-titulo"> ${post.titulo} </h2>
                  <p class="card-descricao"> ${post.descricao} </p>
                  <a href="">Entre em contato</a>
              </div>
          `;
      container.innerHTML += card;
    });
  };
  
  window.onload = () => {
    criacaoPosts();

    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mouseover");
    });

  };

  let botaoTema = document.querySelector("#botaotema");
  console.log(botaoTema);
  
  botaoTema.addEventListener("click", () =>{
    let body = document.querySelector("body");
    if(botaoTema.checked) {
      body.classList.add("body-dark");
    }else{
      body.classList.remove("body-dark");
    }
    
  });

  card.lastElementChild.addEventListener("click", (event) =>{
    event.preventDefault();
    sessionStorage.setItem(
      "id",
      card.lastElementChild.getAttribute("idAnimal")
    );
      window.location.href="../adotar.html";
  });

  inputTest = document.getElementById("inputTeste");

  inputTest.addEventListener("keypress", (tecla) => {
    alert("Tecla Pressionada:" + tecla.key);
  });

