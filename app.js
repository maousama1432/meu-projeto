const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id:1, Imagem: "/imagem/frente.jpg", nome: "A", descricao: "K", preco: "2500", classificacao: "informatica"},
  {id:2, Imagem: "/imagem/costas.jpg",nome: "B", descricao: "L", preco: "3000", classificacao: "informatica"},
  {id:3, Imagem: "/imagem/incluido.jpg",nome: "C", descricao: "M", preco: "7000", classificacao: "informatica"},
  {id:4, Imagem: "/imagem/logo.jpg",nome: "D", descricao: "N", preco: "1200", classificacao: "informatica"},
  {id:5, Imagem: "/imagem/teclado.jpg",nome: "E", descricao: "O", preco: "2700", classificacao: "informatica"},
  {id:6, Imagem: "/imagem/frente.jpg",nome: "F", descricao: "P", preco: "2500", classificacao: "informatica"},
  {id:7, Imagem: "/imagem/costas.jpg",nome: "G", descricao: "Q", preco: "3000", classificacao: "informatica"},
  {id:8, Imagem: "/imagem/incluido.jpg",nome: "H", descricao: "R", preco: "7000", classificacao: "informatica"},
  {id:9, Imagem: "/imagem/logo.jpg",nome: "I", descricao: "S", preco: "1200", classificacao: "informatica"},
  {id:10, Imagem: "/imagem/teclado.jpg",nome: "J", descricao: "T", preco: "2700", classificacao: "informatica"}
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