const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id:1, Imagem: "public/imagem/frente.jpg", nome: "abc", descricao: "descricao", preco: "2500", classificacao: "informatica"},
  {id:2, Imagem: "public/imagem/costas.jpg",nome: "afu", descricao: "descricao", preco: "3000", classificacao: "informatica"},
  {id:3, Imagem: "public/imagem/incluido.jpg",nome: "nasfkuahfuoome", descricao: "descricao", preco: "7000", classificacao: "informatica"},
  {id:4, Imagem: "public/imagem/logo.jpg",nome: "awfkugfuwa", descricao: "descricao", preco: "1200", classificacao: "informatica"},
  {id:5, Imagem: "public/imagem/teclado.jpg",nome: "noakfwuioafuoawfme", descricao: "descricao", preco: "2700", classificacao: "informatica"},
  {id:6, Imagem: "Imagem",nome: "nome", descricao: "wakfwiafaowuguwg", preco: "preco", classificacao: "classificacao"},
  {id:7, Imagem: "Imagem",nome: "nome", descricao: "descawfkugwauofwricao", preco: "preco", classificacao: "classificacao"},
  {id:8, Imagem: "Imagem",nome: "nome", descricao: "desc123713123ricao", preco: "preco", classificacao: "classificacao"},
  {id:9, Imagem: "Imagem",nome: "nome", descricao: "descricao", preco: "preco", classificacao: "classificacao"},
  {id:10, Imagem: "Imagem",nome: "nome", descricao: "descricao", preco: "preco", classificacao: "classificacao"}
]

function buscaPorId(id){
  const produto= produtos.find(produto => produto.id == id);
  return produto || null
};

app.get('/', (req, res) => {
  res.render('index', {produtos});
});



app.get('/pagina', (req, res) => {
  res.render('pagina', { message: 'produto' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});