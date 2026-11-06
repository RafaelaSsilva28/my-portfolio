// Edite todas as informações pessoais e os links neste arquivo.
export const perfil = {
  nome: 'RAFAELA DE SOUZA SILVA',
  primeiroNome: 'Rafaela',
  titulo: 'Desenvolvedora Full Stack',
  cidade: 'Andradina, São Paulo',
  email: 'rafaelasouzasilva3009@gmail.com',
  telefone: '18997316122',
  github: 'https://github.com/RafaelaSsilva28', // Cole a URL do SEU perfil no GitHub.
  linkedin: '', // Opcional.
  foto: 'public/eu.jpg', // Exemplo: '/foto-rafaela.jpg' (coloque na pasta public).
  curriculo: 'public/Curriculo_Rafaela.pdf', // Exemplo: '/curriculo.pdf' (coloque na pasta public).
}

export const tecnologias = [
  { grupo: 'Front-end', itens: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Tailwind CSS'] },
  { grupo: 'Back-end e dados', itens: ['Node.js', 'APIs REST', 'PostgreSQL', 'C++'] },
  { grupo: 'IoT e ferramentas', itens: ['IoT', 'Arduino / ESP32', 'MQTT', 'Git', 'GitHub', 'Figma', 'Canva', 'Pacote Office'] },
]

export const projetos = [
  {
    slug: 'andrarecursos', nome: 'AndraRecursos', tipo: 'TCC • Plataforma Web', ano: '2026',
    destaque: 'Gestão de instituições e solicitações em uma aplicação Full Stack.',
    descricao: 'Sistema desenvolvido como Trabalho de Conclusão de Curso, com autenticação JWT, dashboard administrativo, cadastro de instituições, API Node.js e banco de dados PostgreSQL.',
    tecnologias: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    imagem: '', // Exemplo: '/andrarecursos.png'
    demo: 'https://andrarecursosfront-jtb1uhxlg-rafaelas-projects-3a7f8ace.vercel.app/', // Link da aplicação publicada (front-end).
    api: 'https://api-andra-recursos.vercel.app/', // Opcional: link público da documentação Swagger ou endpoint demonstrativo.
    repositorio: 'https://github.com/RafaelaSsilva28/Projeto_TCC', // Cole link real, se desejar.
    cor: 'from-[#f3d4dc] via-[#e7bac8] to-[#9b5774]', sigla: 'AR',
  },
  {
    slug: 'estufa-inteligente', nome: 'Estufa Inteligente', tipo: 'IoT • Aplicação Web', ano: '2026',
    destaque: 'Sensores conectados, automação e monitoramento em tempo real.',
    descricao: 'Projeto de estufa com ESP32, sensores de temperatura, umidade, chuva e presença; acionamento de servo, comunicação MQTT, API e painel web para acompanhar os dados.',
    tecnologias: ['ESP32', 'IoT', 'MQTT', 'React', 'Node.js', 'PostgreSQL'],
    imagem: '', // Exemplo: '/estufa.png'
    demo: 'https://projeto-estufa-frontend.vercel.app/',
    api: 'https://projeto-estufa-api.vercel.app/', // Opcional: link público da documentação da API.
    repositorio: 'https://github.com/RafaelaSsilva28/Projeto-Estufa',
    cor: 'from-[#e9d8cd] via-[#cda39e] to-[#895b68]', sigla: 'IoT',
  },
  {
    slug: 'jogo-da-velha',
    nome: 'Jogo da Velha',
    tipo: 'Full Stack • Aplicação Web',
    ano: '2026',
    destaque: 'Partidas online e locais, sistema de amizades, ranking e personalização de jogadores.',
    descricao: 'Plataforma de jogo da velha desenvolvida com React e Node.js, com cadastro e autenticação de usuários, partidas locais e online em tempo real, convites para amigos, notificações, ranking, loja de avatares, sistema de moedas e pontuação. Possui diferentes modos de jogo, incluindo Clássico 3x3, Desafio 4x4, Expert 5x5 e Master.',
    tecnologias: ['React', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'CSS', 'Vercel'],
    imagem: '', // Exemplo: '/jogo-da-velha.png'
    demo: 'https://jogo-da-velha-eight-blush.vercel.app/',
    api: 'https://jogo-da-velha-backend-24lr.onrender.com',
    repositorio: 'https://github.com/RafaelaSsilva28/jogo-da-velha',
    cor: 'from-[#e4d9f5] via-[#c4a8e8] to-[#8063b5]',
    sigla: 'JV',
},
]

export const experiencias = [
  {
    cargo: 'Estagiária de Secretaria', local: 'Centro Integrado Ana Paula de Almeida', periodo: 'Atual • término previsto em 2027',
    descricao: 'Atendimento ao público, agendamento de consultas e horários, organização de documentos e arquivos, preenchimento de planilhas, atendimento por telefone e WhatsApp, cadastro e atualização de informações.'
  },
  {
    cargo: 'Empreendedora Autônoma', local: 'Artesanatos personalizados em EVA', periodo: '2022 — atual • sob encomenda',
    descricao: 'Criação e comercialização de peças artesanais, atendimento aos clientes, organização de pedidos, acompanhamento de prazos e vendas.'
  },
  {
    cargo: 'Jovem Aprendiz', local: 'Usina Santa Adélia • formação no SENAI', periodo: '19/11/2025 — 19/11/2026 (término previsto)',
    descricao: 'Programa de aprendizagem vinculado à empresa, com formação técnica realizada no SENAI, sem atuação presencial na usina.'
  },
]

export const formacoes = [
  { titulo: 'Técnico em Desenvolvimento de Sistemas', local: 'SENAI • Programação Full Stack', periodo: '2025 — 2026', detalhe: 'Carga horária: 1.200 horas. Desenvolvimento web, programação, banco de dados e projetos práticos.' },
  { titulo: 'Ensino Médio', local: 'SESI Andradina - 025', periodo: 'Conclusão em 2026', detalhe: 'Formação de Ensino Médio.' },
]

// Cursos identificados nas imagens enviadas. Sem carga horária individual informada.
export const cursosComplementares = {
  total: 14,
  descricao: '14 cursos transversais realizados no SENAI durante a formação técnica.',
  titulos: [
    'Excel Básico',
    'Competência Transversal — Segurança no Trabalho',
    'Ética na Inteligência Artificial',
    'Por dentro da Segurança Cibernética',
    'Fluência — Fundamentos da Inteligência Artificial',
    'Desvendando a Descarbonização',
    'Desvendando a Indústria 4.0',
    'Empreender SENAI',
    'Desvendando o ESG',
    'Fundamentos da Gestão de Projetos Aplicados na Indústria',
    'Design Thinking',
    'Gestão do Tempo',
    'Geração de Valor Circular e Modelos de Negócios',
    'Cidadania Digital e Uso Consciente da Internet',
  ],
}

export const competencias = ['Comunicação interpessoal', 'Organização e planejamento', 'Proatividade', 'Resolução de problemas', 'Trabalho em equipe', 'Criatividade', 'Adaptabilidade', 'Responsabilidade', 'Empreendedorismo', 'Aprendizado contínuo']

// Cole o link de cada certificado no campo `url` do curso correspondente.
// Enquanto o campo estiver vazio, o botão de certificado não é exibido.
export const certificados = cursosComplementares.titulos.map((titulo, indice) => ({
  id: indice + 1, titulo, url: 'Certificado_Excel Básic.pdf', cargaHoraria: '',
  id: indice + 2, titulo, url: 'Certificado_Competência Transversal - Segurança no Trabalh.pdf', cargaHoraria: '',
  id: indice + 3, titulo, url: 'Certificado_Ética na Inteligência Artificia.pdf', cargaHoraria: '',
  id: indice + 4, titulo, url: 'Certificado_Por dentro da Segurança Cibernétic.pdf', cargaHoraria: '',
  id: indice + 5, titulo, url: 'Certificado_FLUÊNCIA - FUNDAMENTOS DA INTELIGÊNCIA ARTIFICIA.pdf', cargaHoraria: '',
  id: indice + 6, titulo, url: 'Certificado_Desvendando a Descarbonizaçã.pdf', cargaHoraria: '',
  id: indice + 7, titulo, url: 'Certificado_Desvendando a Indústria 4.pdf', cargaHoraria: '',
  id: indice + 8, titulo, url: 'Certificado_Empreender SENA.pdf', cargaHoraria: '',
  id: indice + 9, titulo, url: 'Certificado_Desvendando o ES (1).pdf', cargaHoraria: '',
  id: indice + 10, titulo, url: 'Certificado_Fundamentos da Gestão de Projetos Aplicados na Indústri.pdf', cargaHoraria: '',
  id: indice + 11, titulo, url: 'Certificado_Design Thinkin.pdf', cargaHoraria: '',
  id: indice + 12, titulo, url: 'Certificado_Gestão do Temp.pdf', cargaHoraria: '',
  id: indice + 13, titulo, url: 'Certificado_GERAÇÃO DE VALOR CIRCULAR E MODELOS DE NEGÓCIO.pdf', cargaHoraria: '',
  id: indice + 14, titulo, url: 'Certificado_Cidadania Digital e uso Consciente da Interne.pdf', cargaHoraria: '',
  
}))
