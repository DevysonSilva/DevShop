document.getElementById('formNovoProduto').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const preco = parseFloat(document.getElementById('preco').value);
  const estoque = parseInt(document.getElementById('estoque').value);
  const categoria = document.getElementById('categoria').value;
  const imagem = document.getElementById('imagem').files[0];

  if (!nome || !descricao || isNaN(preco) || isNaN(estoque) || !categoria) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const produto = {
    nome,
    descricao,
    preco,
    estoque,
    categoria,
    imagem: imagem ? imagem.name : null
  };

  console.log("Produto cadastrado:", produto);
  alert("Produto cadastrado com sucesso!");

  this.reset();
});