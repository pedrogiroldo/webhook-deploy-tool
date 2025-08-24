# Projects API

Este módulo fornece um CRUD completo para gerenciar projects.

## Rotas Disponíveis

### 1. Listar Projects

- **GET** `/projects`
- **Descrição**: Retorna todos os projects com seus deployments relacionados
- **Resposta**: Array de projects

### 2. Buscar Project por ID

- **GET** `/projects/:id`
- **Descrição**: Retorna um project específico por ID
- **Parâmetros**: `id` (string) - ID do project
- **Resposta**: Project ou null se não encontrado

### 3. Criar Project

- **POST** `/projects`
- **Descrição**: Cria um novo project
- **Body**:

```json
{
  "name": "string",
  "label": "string",
  "description": "string (opcional)",
  "Deployment": {
    "connect": [
      {
        "id": "string"
      }
    ]
  }
}
```

### 4. Atualizar Project

- **PUT** `/projects/:id`
- **Descrição**: Atualiza um project existente
- **Parâmetros**: `id` (string) - ID do project
- **Body** (todos os campos são opcionais):

```json
{
  "name": "string",
  "label": "string",
  "description": "string",
  "Deployment": {
    "connect": [
      {
        "id": "string"
      }
    ],
    "disconnect": [
      {
        "id": "string"
      }
    ]
  }
}
```

### 5. Deletar Project

- **DELETE** `/projects/:id`
- **Descrição**: Remove um project
- **Parâmetros**: `id` (string) - ID do project
- **Resposta**: Project deletado

## Estrutura do Project

```typescript
{
  id: string,
  name: string,
  label: string,
  description: string | null,
  createdAt: Date,
  updatedAt: Date,
  Deployment: [
    {
      id: string,
      name: string,
      description: string | null,
      webhookUrl: string,
      webhookSecret: string | null,
      projectId: string,
      createdAt: Date,
      updatedAt: Date
    }
  ]
}
```

## Exemplos de Uso

### Criar um project

```bash
curl -X POST http://localhost:3000/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Meu Projeto",
    "label": "projeto-web",
    "description": "Projeto web principal"
  }'
```

### Criar um project com deployments conectados

```bash
curl -X POST http://localhost:3000/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Projeto com Deployments",
    "label": "projeto-completo",
    "description": "Projeto com deployments já conectados",
    "Deployment": {
      "connect": [
        {
          "id": "deployment-uuid-1"
        },
        {
          "id": "deployment-uuid-2"
        }
      ]
    }
  }'
```

### Atualizar um project

```bash
curl -X PUT http://localhost:3000/projects/project-uuid \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Projeto Atualizado",
    "label": "projeto-novo-label",
    "description": "Descrição atualizada do projeto"
  }'
```

### Conectar deployments a um project existente

```bash
curl -X PUT http://localhost:3000/projects/project-uuid \
  -H "Content-Type: application/json" \
  -d '{
    "Deployment": {
      "connect": [
        {
          "id": "novo-deployment-uuid"
        }
      ]
    }
  }'
```

### Desconectar deployments de um project

```bash
curl -X PUT http://localhost:3000/projects/project-uuid \
  -H "Content-Type: application/json" \
  -d '{
    "Deployment": {
      "disconnect": [
        {
          "id": "deployment-para-remover"
        }
      ]
    }
  }'
```

### Deletar um project

```bash
curl -X DELETE http://localhost:3000/projects/project-uuid
```

## Relacionamentos

- Um **Project** pode ter múltiplos **Deployments**
- Ao deletar um project, todos os deployments relacionados também serão removidos (devido à relação no banco de dados)
- É possível conectar/desconectar deployments de um project usando as operações `connect` e `disconnect`
