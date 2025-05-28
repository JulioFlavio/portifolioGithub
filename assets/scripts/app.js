const UrlAPI = "https://api.github.com/users/JulioFlavio";
const token = ""

window.onload = function chamarFuncoes() {
  userPrincipal();
  listaRepositorios();
  conteudoCarrossel();
  amigo01();
  amigo02();
  amigo03();
  amigo04();
  amigo05();
  consultaAPI();
  // chamar mais funções 
}

async function userPrincipal() {

  // const friends = UrlAPI + "/followers";)
  const response = await fetch(UrlAPI, {
    headers: {
      'Authorization': token
    }
  })
  if (!response.ok) {
    throw new Error(`Erro: ${response.status}`);
  }

  const infoUsuario = await response.json();
  console.log(infoUsuario)

  document.getElementById('nomeSuperior').textContent = infoUsuario.name

  document.getElementById('FotoPerfil').src = infoUsuario.avatar_url
  document.getElementById('pbio').textContent = infoUsuario.bio
  document.getElementById('localizacao').textContent = infoUsuario.location
  document.getElementById('site').textContent = infoUsuario.blog
  document.getElementById('nome').textContent = infoUsuario.name;

  document.getElementById('repo').innerHTML = `
  <span class="linhaInfo">Repositórios (${infoUsuario.public_repos})</span>`
  document.getElementById('seguidores').innerHTML += infoUsuario.followers

}

async function conteudoCarrossel() {

  const response = await fetch("../db/db.json")
  if (!response.ok) {
    throw new Error(`Erro: ${response.status}`);
  }
  const carrossel = await response.json()
  console.log(carrossel)

  document.getElementById('setas').innerHTML = `
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`

  for (let i = 0; i < carrossel.carroussel.length; i++) {
    document.getElementById('setas').innerHTML += `
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i + 1}" aria-label="Slide ${i + 1}"></button>`
  }

  document.getElementById('carousel').innerHTML += `
  <div class="carousel-item active">
    <img src="${carrossel.carroussel[0].content}" class="d-block w-100" alt${carrossel.carroussel[0].name}">
  </div>`
  // Este tem que ser fora, por conta do "active" na classe do carrossel, isso faz com que o carrossel funcione

  for (let i = 1; i < carrossel.carroussel.length; i++) {
    // i = 1 porque o carrossel começa com o primeiro item sendo o com a classe ACTIVE fora do FOR
    document.getElementById('carousel').innerHTML += `
    <div class="carousel-item">
        <img src="${carrossel.carroussel[i].content}" class="d-block w-100" alt${carrossel.carroussel[i].name}">
    </div>`
  }



}

async function listaRepositorios() {
  urlRepositorios = UrlAPI + "/repos"

  result = await fetch(urlRepositorios, {
    headers: {
      'Authorization': token
    }
  })
  if (!result.ok) {
    console.log('Erro ao buscar repositórios')
  }

  repositorios = await result.json()
  console.log(repositorios)

  repositorios.forEach(repositorio => {
    console.log(repositorio.owner.login)
    console.log(repositorio.name)
    // Para cada REPOSITORIO em REPOSITORIOS, faça: console.log(repositorio). Ele   vai imprimir os repositorios um a um em formato JSON, depois só fazer como fez lá em cima com "UserInfo.name"
    document.getElementById('repositorios').innerHTML +=
      `<div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${repositorio.name}</h5>
            <p class="card-text">${repositorio.description}</p>
            <a style="color: white;" href="/public/repo.html?dono=${repositorio.owner.login}&repo=${repositorio.name}" class="btn btn-primary">Acessar Repositório</a>
          </div>
        </div>
      </div>`



  })
  // Estudar esse código para fazer o de colegas, é a mesma logica
}

async function amigo01() {

  const UrlAPI = "https://api.github.com/users/RobsonMarcolino";
  result = await fetch(UrlAPI)
  if (!result.ok) {
    console.log('Erro ao buscar repositórios')
  }

  amigo = await result.json()
  console.log(amigo)

  document.getElementById('amigo').innerHTML = `
    <div class="col">
      <img id="fotoAmigo1" class="imgColegas" src="${amigo.avatar_url}"               alt="${amigo.name}" width="150px">
      <p>${amigo.name}</p>
    </div>`
}

async function amigo02() {

  const UrlAPI = "https://api.github.com/users/lagesOliveira";
  result = await fetch(UrlAPI)
  if (!result.ok) {
    console.log('Erro ao buscar repositórios')
  }

  amigo = await result.json()
  console.log(amigo)

  document.getElementById('amigo').innerHTML += `
  <div class="col">
    <img id="fotoAmigo1" class="imgColegas" src="${amigo.avatar_url}"               alt="${amigo.name}" width="150px">
    <p>${amigo.name}</p>
  </div>`

}

async function amigo03() {

  const UrlAPI = "https://api.github.com/users/fabidev32";
  result = await fetch(UrlAPI)
  if (!result.ok) {
    console.log('Erro ao buscar repositórios')
  }

  amigo = await result.json()
  console.log(amigo)

  document.getElementById('amigo').innerHTML += `
  <div class="col">
    <img id="fotoAmigo1" class="imgColegas" src="${amigo.avatar_url}"               alt="${amigo.name}" width="150px">
    <p>${amigo.name}</p>
  </div>`

}

async function amigo04() {

  const UrlAPI = "https://api.github.com/users/GustavoHgomesF";
  result = await fetch(UrlAPI)
  if (!result.ok) {
    console.log('Erro ao buscar repositórios')
  }

  amigo = await result.json()
  console.log(amigo)

  document.getElementById('amigo').innerHTML += `
  <div class="col">
    <img id="fotoAmigo1" class="imgColegas" src="${amigo.avatar_url}"               alt="${amigo.name}" width="150px">
    <p>${amigo.name}</p>
  </div>`

}

async function amigo05() {

  const UrlAPI = "https://api.github.com/users/mathdsena";
  result = await fetch(UrlAPI)
  if (!result.ok) {
    console.log('Erro ao buscar repositórios')
  }

  amigo = await result.json()
  console.log(amigo)

  document.getElementById('amigo').innerHTML += `
  <div class="col">
    <img id="fotoAmigo1" class="imgColegas" src="${amigo.avatar_url}"               alt="${amigo.name}" width="150px">
    <p>${amigo.name}</p>
  </div>`

}


async function consultaAPI() {


  const response = await fetch(transformaURL(), {
    headers: {
      'Authorization': ''
    }
  })
  // console.log(response)
  const repo = await response.json();
  console.log(repo)

  document.getElementById('nomeSuperior').innerHTML = `
    <a class="nome" href="/public/index.html">${repo.owner.login}</a>`;

  document.getElementById('nome').innerHTML = `Repositório: ${repo.name}`
  document.getElementById('pbio').textContent = repo.description
  document.getElementById('dataCriacao').textContent = repo.created_at

  if (repo.language == null) {
    document.getElementById('linguagem').textContent = `Não informada`
  } else {
    document.getElementById('linguagem').textContent = repo.language
  }

  if (repo.topics == null) {
    document.getElementById('topicos').textContent = `Sem tópicos`
  } else {
    for (let i = 0; i < repo.topics.length; i++) {
      document.getElementById('topicos').innerHTML += `
        <span class="topicos">
          ${repo.topics[i]}
        </span>`
    }
  }
  urlNova = repo.clone_url.replace(".git", "");
  // console.log(urlNova)
  document.getElementById('linkRepositorio').href = urlNova
  // document.getElementById('linkRepositorio').target = "_blank"
  document.getElementById('linkRepositorio').innerHTML = urlNova

  document.getElementById('nSeguidores').innerHTML = `
    <i class="fa-solid fa-star fa-2xl" style="color: #878787;"></i>${repo.stargazers_count}
    <br>
    <br>
    <i class="fa-solid fa-user fa-2xl"></i>${repo.watchers_count}`
  // <br>
  // <br>
  // <i class="fa-solid fa-code-fork fa-2xl"></i>${repo.forks}
}

function transformaURL() {

  endereco = (window.location.search).replace("?dono=", "")
  endereco = endereco.replace("repo=", "")
  resultado = "https://api.github.com/repos/" + endereco.replace("&", "/")

  return resultado
}
