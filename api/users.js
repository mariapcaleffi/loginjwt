const usuarios = [
  { email: 'clubedetenis@gmail.com', senha: 'titonho' }
];

function autenticar(email, senha) {
  return usuarios.find(u => u.email === email && u.senha === senha);
}

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token ausente' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.usuario = decoded;
    next();
  } catch (err) {
    res.status(403).json({ erro: 'Token inválido' });
  }
}

module.exports = { autenticar };
