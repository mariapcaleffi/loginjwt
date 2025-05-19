const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { gerarToken, verificarToken } = require('./auth');
const { autenticar } = require('./users');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../web'));

app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const user = autenticar(email, senha);

  if (!user) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  const token = gerarToken({ email });
  res.json({ token });
});

app.get('/verifica', verificarToken, (req, res) => {
  res.json({ ok: true, usuario: req.usuario });
});

app.listen(3000, () => console.log('API rodando em http://localhost:3000'));
