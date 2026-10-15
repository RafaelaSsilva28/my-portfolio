# Portfólio • Rafaela de Souza Silva

Site profissional com React, Vite, Tailwind CSS v4, React Router e Lucide.

## Como abrir no VS Code

1. Extraia a pasta `portfolio-rafaela` e abra-a no VS Code.
2. No terminal, execute:

```bash
npm install
npm run dev
```

3. Acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Páginas

- `/` — Início
- `/sobre` — Sobre mim e tecnologias
- `/projetos` — Listagem de projetos
- `/projetos/andrarecursos` e `/projetos/estufa-inteligente` — Detalhes
- `/experiencia` — Experiências, formação e cursos
- `/contato` — Contato

## Personalizar (IMPORTANTE)

Abra **`src/data/portfolio.js`**:

- `perfil.github`: adicione o endereço real do seu GitHub.
- `perfil.linkedin`: opcional.
- `perfil.foto`: coloque `foto-rafaela.jpg` dentro da pasta `public` e informe `'/foto-rafaela.jpg'`.
- `perfil.curriculo`: coloque `curriculo.pdf` em `public` e informe `'/curriculo.pdf'`.
- `projetos[].imagem`: adicione capturas de tela reais em `public` e use `'/nome-da-imagem.png'`.
- `projetos[].demo` e `.repositorio`: inclua os links que forem realmente públicos.
- `cursosComplementares.titulos`: preencha os nomes exatos dos **14** cursos transversais do seu certificado (não foram fornecidos em texto).
- Revise os períodos de conclusão e estágio conforme a documentação que for apresentar.

Sem links, os botões relacionados permanecem ocultos para evitar endereços falsos.

## Publicar na Vercel

1. Crie repositório no GitHub e envie os arquivos.
2. Importe o repositório na Vercel.
3. Framework Preset: **Vite**; Root Directory: **raiz do projeto**; Build Command: `npm run build`; Output Directory: `dist`.
4. O arquivo `vercel.json` já permite abrir rotas diretamente (como `/projetos`).

## Observações

O botão de contato abre o aplicativo de e-mail, sem necessidade de API. Links de WhatsApp e e-mail são montados usando os dados em `portfolio.js`. Não há coleta ou armazenamento de dados dos visitantes.

## Atualização visual
- Faixa animada de tecnologias, efeitos nos cartões de projetos e nome completo na página inicial.
- Todos os 14 cursos foram adicionados à página Experiência.
- Substitua os placeholders de projeto pelas suas próprias capturas em `public/` e configure os caminhos em `src/data/portfolio.js`.
- O espaço reservado à fotografia é controlado por `perfil.foto`.


## Atualização: projetos e certificados

- `src/data/portfolio.js`: cada projeto recebe `demo` (site/front-end), `repositorio` (código) e `api` (documentação Swagger ou endpoint público). Só aparecem botões para links preenchidos.
- A página `/projetos` tem busca e paginação de **2 por página**. Com 2 projetos, uma única página é exibida; a paginação aparece automaticamente a partir do terceiro projeto.
- `certificados` no fim de `src/data/portfolio.js` lista 14 certificados. Substitua `url: ''` no item correspondente pelo link oficial do certificado. É possível adicionar `cargaHoraria` se souber o valor correto.
- A página `/experiencia` mostra os 14 certificados, com busca e 6 por página.
- `/contato`: botões de e-mail e WhatsApp funcionais. O formulário **abre o aplicativo de e-mail**; não envia mensagens por servidor.
- Inclua sua foto em `public/foto-rafaela.jpg` e altere `perfil.foto`.

**Privacidade:** confira se os links de certificados são públicos e não mostram dados que você não deseja compartilhar.
