# 📦 REQUISITOS — Offline API Studio

## 🧭 Visão Geral

O **Offline API Studio** é uma aplicação desktop multiplataforma para desenvolvimento, teste e organização de APIs HTTP.

O sistema é projetado com foco em:

* Funcionamento **100% offline**
* Armazenamento baseado em **arquivos locais**
* Integração nativa com **Git**
* Performance e leveza
* Privacidade total dos dados

---

## 🎯 Objetivos

* Eliminar dependência de serviços em nuvem
* Permitir versionamento completo via Git
* Oferecer experiência rápida e intuitiva
* Garantir portabilidade dos dados
* Servir como base extensível (plugins futuros)

---

## ✅ Requisitos Funcionais

### 🧱 Workspaces

* RF-001: O sistema deve permitir criar um workspace
* RF-002: O sistema deve permitir editar um workspace
* RF-003: O sistema deve permitir excluir um workspace
* RF-004: Cada workspace deve corresponder a um diretório no filesystem
* RF-005: Um workspace deve conter collections, requests e environments

---

### 📁 Collections

* RF-006: O sistema deve permitir criar collections
* RF-007: O sistema deve permitir editar collections
* RF-008: O sistema deve permitir excluir collections
* RF-009: O sistema deve permitir associar requests a collections
* RF-010: O sistema deve exibir collections em estrutura hierárquica (futuro opcional)

---

### 🔌 Requests HTTP

* RF-011: O sistema deve permitir criar requisições HTTP
* RF-012: O sistema deve suportar os métodos:

  * GET
  * POST
  * PUT
  * DELETE
  * PATCH
* RF-013: O sistema deve permitir configurar:

  * URL
  * Headers
  * Query Params
  * Body (JSON inicialmente)
* RF-014: O sistema deve permitir executar requisições
* RF-015: O sistema deve exibir a resposta contendo:

  * Status HTTP
  * Headers
  * Body formatado
* RF-016: O sistema deve persistir requisições em arquivos locais

---

### 🔐 Variáveis de Ambiente

* RF-017: O sistema deve permitir criar ambientes (ex: dev, staging, prod)
* RF-018: O sistema deve permitir editar ambientes
* RF-019: O sistema deve permitir excluir ambientes
* RF-020: O sistema deve permitir definir variáveis chave/valor
* RF-021: O sistema deve substituir variáveis no formato `{{variavel}}`
* RF-022: O sistema deve permitir selecionar um ambiente ativo

---

### 📜 Histórico

* RF-023: O sistema deve registrar execuções de requests
* RF-024: O sistema deve permitir reexecutar requests do histórico
* RF-025: O sistema deve persistir histórico localmente

---

### 💾 Persistência

* RF-026: O sistema deve armazenar dados em arquivos JSON
* RF-027: Os arquivos devem ser legíveis e versionáveis
* RF-028: O sistema não deve depender de banco de dados

---

### 🔄 Integração com Git

* RF-029: O sistema deve permitir inicializar um repositório Git no workspace
* RF-030: O sistema deve permitir realizar commits via interface
* RF-031: O sistema deve exibir status do repositório (modified, staged, etc.)
* RF-032: O sistema pode permitir troca de branch (não obrigatório no MVP)

---

## 🚫 Não Requisitos

### Fora do escopo do MVP

* RNF-001: O sistema não deve exigir autenticação de usuário
* RNF-002: O sistema não deve depender de serviços em nuvem
* RNF-003: O sistema não deve suportar colaboração em tempo real
* RNF-004: O sistema não deve implementar sincronização automática
* RNF-005: O sistema não deve suportar WebSockets no MVP
* RNF-006: O sistema não deve suportar GraphQL no MVP
* RNF-007: O sistema não deve suportar gRPC no MVP
* RNF-008: O sistema não deve possuir versão mobile
* RNF-009: O sistema não deve utilizar banco de dados local
* RNF-010: O sistema não deve implementar sistema de plugins no MVP

---

## ⚙️ Requisitos Não Funcionais

### Performance

* RNF-011: O sistema deve ser leve e responsivo
* RNF-012: O tempo de execução de requests deve ser mínimo overhead

### Offline

* RNF-013: O sistema deve funcionar completamente offline
* RNF-014: Nenhuma funcionalidade crítica deve depender de internet

### Portabilidade

* RNF-015: Os dados devem ser portáveis entre máquinas via filesystem
* RNF-016: A estrutura deve ser compatível com Git

### Segurança

* RNF-017: Dados sensíveis devem permanecer locais
* RNF-018: Execução de scripts deve ser isolada (sandbox futura)

### Usabilidade

* RNF-019: Interface deve ser simples e intuitiva
* RNF-020: O sistema deve permitir navegação rápida entre requests

---

## 🏗️ Estrutura de Arquivos

```plaintext
workspace/
├── workspace.json
├── environments/
│   ├── dev.json
│   └── prod.json
├── collections/
│   └── default.json
├── requests/
│   └── example.json
└── history/
```

---

## 🚀 Fases do Desenvolvimento

### Fase 1 — Base

* Setup do projeto (Tauri + Vue)
* Layout inicial
* Acesso ao filesystem

---

### Fase 2 — Core HTTP

* Criar requests
* Executar requests
* Visualizar resposta
* Persistência em JSON

---

### Fase 3 — Organização

* CRUD de collections
* Associação de requests

---

### Fase 4 — Environments

* CRUD de variáveis
* Substituição dinâmica

---

### Fase 5 — Histórico

* Registro de execuções
* Reexecução

---

### Fase 6 — Git

* Inicialização de repositório
* Commit via UI
* Status do repositório

---

## 📌 Próximos Passos

1. Criar projeto com Tauri + Vue
2. Definir schemas JSON iniciais
3. Implementar executor HTTP
4. Criar UI base (sidebar + editor + response)
5. Implementar persistência em arquivos

---

## 🧠 Observações Finais

* O sistema deve priorizar simplicidade e previsibilidade
* Arquivos devem ser a fonte única de verdade
* Git é parte central do fluxo, não um extra
* Arquitetura deve permitir evolução futura (plugins, IA, etc.)

---
