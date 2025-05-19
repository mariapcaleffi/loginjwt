document.getElementById('forms').addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  try {
    const resposta = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    if (!resposta.ok) throw new Error('Falha no login');

    const { token } = await resposta.json();
    localStorage.setItem('token', token);
    window.location.href = 'home.html';
  } catch (err) {
    alert('Dados inválidos');
  }
});
