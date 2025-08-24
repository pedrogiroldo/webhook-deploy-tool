import { Elysia } from "elysia";

// Configuração das credenciais (em produção, isso deveria vir de variáveis de ambiente)
const VALID_USERNAME = process.env.BASIC_AUTH_USERNAME || "admin";
const VALID_PASSWORD = process.env.BASIC_AUTH_PASSWORD || "password";

const authMiddleware = new Elysia().onRequest(({ request, set }) => {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    set.status = 401;
    set.headers["WWW-Authenticate"] = 'Basic realm="Secure Area"';
    throw new Error("Unauthorized: Credenciais não fornecidas");
  }

  // Verifica se o header começa com "Basic "
  if (!authHeader.startsWith("Basic ")) {
    set.status = 401;
    set.headers["WWW-Authenticate"] = 'Basic realm="Secure Area"';
    throw new Error("Unauthorized: Formato de autenticação inválido");
  }

  try {
    // Remove "Basic " e decodifica as credenciais
    const credentials = authHeader.substring(6);
    const decodedCredentials = atob(credentials);

    // Separa usuário e senha
    const [username, password] = decodedCredentials.split(":");

    if (!username || !password) {
      set.status = 401;
      set.headers["WWW-Authenticate"] = 'Basic realm="Secure Area"';
      throw new Error("Unauthorized: Credenciais malformadas");
    }

    // Verifica se as credenciais são válidas
    if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
      set.status = 401;
      set.headers["WWW-Authenticate"] = 'Basic realm="Secure Area"';
      throw new Error("Unauthorized: Credenciais inválidas");
    }

    // Se chegou até aqui, a autenticação foi bem-sucedida
    // As informações do usuário podem ser adicionadas ao store se necessário
  } catch {
    set.status = 401;
    set.headers["WWW-Authenticate"] = 'Basic realm="Secure Area"';
    throw new Error("Unauthorized: Erro ao processar credenciais");
  }
});

export default authMiddleware;
