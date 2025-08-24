# Deployments API

Este módulo fornece um CRUD completo para gerenciar deployments.

## Rotas Disponíveis

### 1. Listar Deployments

- **GET** `/deployments`
- **Descrição**: Retorna todos os deployments com seus projetos relacionados
- **Resposta**: Array de deployments

### 2. Buscar Deployment por ID

- **GET** `/deployments/:id`
- **Descrição**: Retorna um deployment específico por ID
- **Parâmetros**: `id` (string) - ID do deployment
- **Resposta**: Deployment ou null se não encontrado

### 3. Criar Deployment

- **POST** `/deployments`
- **Descrição**: Cria um novo deployment
- **Body**:

```json
{
  "name": "string",
  "description": "string (opcional)",
  "webhookUrl": "string",
  "webhookSecret": "string (opcional)",
  "project": {
    "connect": {
      "id": "string"
    }
  }
}
```

### 4. Atualizar Deployment

- **PUT** `/deployments/:id`
- **Descrição**: Atualiza um deployment existente
- **Parâmetros**: `id` (string) - ID do deployment
- **Body** (todos os campos são opcionais):

```json
{
  "name": "string",
  "description": "string",
  "webhookUrl": "string",
  "webhookSecret": "string",
  "project": {
    "connect": {
      "id": "string"
    }
  }
}
```

### 5. Deletar Deployment

- **DELETE** `/deployments/:id`
- **Descrição**: Remove um deployment
- **Parâmetros**: `id` (string) - ID do deployment
- **Resposta**: Deployment deletado

## Estrutura do Deployment

```typescript
{
  id: string,
  name: string,
  description: string | null,
  webhookUrl: string,
  webhookSecret: string | null,
  projectId: string,
  project: {
    id: string,
    name: string,
    label: string,
    description: string | null,
    createdAt: Date,
    updatedAt: Date
  },
  createdAt: Date,
  updatedAt: Date
}
```

## Exemplos de Uso

### Criar um deployment

```bash
curl -X POST http://localhost:3000/deployments \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Production Deploy",
    "description": "Deployment para produção",
    "webhookUrl": "https://api.github.com/repos/user/repo/deployments",
    "webhookSecret": "secret123",
    "project": {
      "connect": {
        "id": "project-uuid"
      }
    }
  }'
```

### Atualizar um deployment

```bash
curl -X PUT http://localhost:3000/deployments/deployment-uuid \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Production Deploy",
    "description": "Deployment atualizado para produção"
  }'
```

### Deletar um deployment

```bash
curl -X DELETE http://localhost:3000/deployments/deployment-uuid
```
