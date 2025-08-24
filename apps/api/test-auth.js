// Script de teste para verificar a autenticação Basic Auth

const BASE_URL = "http://localhost:3000";

// Credenciais padrão
const username = "admin";
const password = "password";

// Codifica as credenciais em base64
const credentials = btoa(`${username}:${password}`);

console.log("🧪 Testando middleware de autenticação...\n");

// Teste 1: Requisição sem autenticação
console.log("1️⃣ Testando requisição SEM autenticação:");
fetch(`${BASE_URL}/deployments`)
  .then((response) => {
    console.log(`   Status: ${response.status}`);
    console.log(`   Headers: ${response.headers.get("WWW-Authenticate")}`);
    return response.text();
  })
  .then((text) => {
    console.log(`   Resposta: ${text}\n`);
  })
  .catch((error) => {
    console.log(`   Erro: ${error.message}\n`);
  });

// Teste 2: Requisição com autenticação correta
setTimeout(() => {
  console.log("2️⃣ Testando requisição COM autenticação correta:");
  fetch(`${BASE_URL}/deployments`, {
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  })
    .then((response) => {
      console.log(`   Status: ${response.status}`);
      return response.text();
    })
    .then((text) => {
      console.log(`   Resposta: ${text}\n`);
    })
    .catch((error) => {
      console.log(`   Erro: ${error.message}\n`);
    });
}, 1000);

// Teste 3: Requisição com credenciais incorretas
setTimeout(() => {
  console.log("3️⃣ Testando requisição com credenciais INCORRETAS:");
  const wrongCredentials = btoa("wrong:credentials");
  fetch(`${BASE_URL}/deployments`, {
    headers: {
      Authorization: `Basic ${wrongCredentials}`,
    },
  })
    .then((response) => {
      console.log(`   Status: ${response.status}`);
      console.log(`   Headers: ${response.headers.get("WWW-Authenticate")}`);
      return response.text();
    })
    .then((text) => {
      console.log(`   Resposta: ${text}\n`);
    })
    .catch((error) => {
      console.log(`   Erro: ${error.message}\n`);
    });
}, 2000);

console.log("📋 Para executar os testes:");
console.log("   1. Inicie o servidor: bun run dev");
console.log("   2. Execute este script: node test-auth.js");
console.log("   3. Verifique as respostas acima\n");
