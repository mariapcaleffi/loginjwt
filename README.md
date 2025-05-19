# 🔐 Login JWT

Este projeto demonstra uma autenticação de usuários via **JWT (JSON Web Token)** com front-end em HTML/CSS/JavaScript e back-end em Node.js + Express. A autenticação protege a página `home.html` e utiliza localStorage para armazenar o token JWT no cliente.

---

## 📁 Estrutura do Projeto

```
├── api/ ← Back-end (Node.js + JWT)
│ ├── auth.js
│ ├── users.js
│ ├── server.js
│ └── .env
├── web/ ← Front-end (HTML/CSS/JS)
│ ├── index.html
│ ├── home.html
│ ├── script.js
│ └── style.css
└── README.md
```

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- JSON Web Token (`jsonwebtoken`)
- CORS
- dotenv
- HTML, CSS e JavaScript puro

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```
git clone https://github.com/seu-usuario/Login-JWT.git
cd Login-JWT
```

### 2. Instale as dependências do back-end


```
cd api
npm install
```

### 3. Crie um `.env` na pasta API

```
SECRET_KEY=sua_chave_secreta_aqui
```

### 4. Inicie a API
```
node server.js
```

### 5. Rode o front-end

Abra o arquivo web/index.html no navegador (clique duplo ou use Live Server).

## 👤 Credenciais de Acesso

Use o seguinte usuário para testar:

**E-mail:** clubedetenis@gmail.com

**Senha:** titonho