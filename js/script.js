const produtos = [
  {
    nome: "Filtro de óleo - WOE912",
    preco: "R$ 45,00",
    imagem: "assets/images/filtro-de-oleo.jpg"
  },
  {
    nome: "Pastilha de freio",
    preco: "R$ 79,90",
    imagem: "assets/images/pastilha-de-freio.jpg"
  },
  {
    nome: "Velas de ignição",
    preco: "R$ 35,50",
    imagem: "assets/images/velas-de-ignicao.jpg"
  },
  {
    nome: "Filtro de ar do motor",
    preco: "R$ 25,00",
    imagem: "assets/images/filtro-de-ar.jpg"
  },
  {
    nome: "Bateria 60Ah",
    preco: "R$ 350,00",
    imagem: "assets/images/bateria-60ah.jpg"
  },
  {
    nome: "Sensor de rotação",
    preco: "R$ 89,90",
    imagem: "assets/images/sensor-de-rotacao.jpg"
  },
  {
    nome: "Disco de freio",
    preco: "R$ 120,00",
    imagem: "assets/images/disco-de-freio.jpg"
  },
  {
    nome: "Bico injetor",
    preco: "R$ 150,00",
    imagem: "assets/images/bico-injetor.jpg"
  },
  {
    nome: "Valvula Termostatica",
    preco: "R$ 40,00",
    imagem: "assets/images/valvula-termostatica.jpg"
  }
];

const container = document.getElementById("produtos-container");

produtos.forEach(produto => {
  const col = document.createElement("div");
  col.className = "col-md-3 mb-4";

  col.innerHTML = `
    <div class="card h-100">
      <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
      <div class="card-body text-center">
        <h5 class="card-title">${produto.nome}</h5>
        <p class="card-text">${produto.preco}</p>
        <a href="#" class="btn btn-primary">Comprar</a>
      </div>
    </div>
  `;

  container.appendChild(col);
});