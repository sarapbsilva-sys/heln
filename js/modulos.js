const BANCO_DE_MODULOS = {
  "meta1": {
    id: "meta1",
    metaBadge: "Meta 1",
    categoria: "Segurança do Paciente",
    tituloHtml: 'Identificação <span class="highlight-green">Segura</span> do Paciente',
    textoBoasVindas: `Olá, equipe! Vamos relembrar, passo a passo e de um jeito leve,<br>
                      como identificar com segurança cada uma das nossas crianças.<br>
                      Assista à videoaula, responda ao quiz e registre sua presença.`,
    imagemHero: "imgs/bonecos.png",
    passo2: {
      subBadge: "COMECE POR AQUI",
      titulo: "Os 3 identificadores obrigatórios do HELN",
      texto: "Toda criança é identificada por três informações. Confira sempre as três, juntas, antes de qualquer cuidado.",
      cards: [
        { num: 1, icon: "fa-face-smile", titulo: "Nome completo da criança" },
        { num: 2, icon: "fa-calendar-days", titulo: "Data de nascimento" },
        { num: 3, icon: "fa-user-group", titulo: "Nome completo da mãe" }
      ]
    },
    passo3: {
      subBadge: "NA HORA DO CUIDADO",
      titulo: "Quando conferir",
      texto: "Confira os 3 identificadores sempre <strong>antes</strong> de qualquer uma destas situações.",
      cards: [
        { icon: "fa-plus", titulo: "Realizar procedimentos" },
        { icon: "fa-pills", titulo: "Administrar medicações" },
        { icon: "fa-bed-pulse", titulo: "Realizar deslocamentos" },
        { icon: "fa-bottle-droplet", titulo: "Entregar dietas" },
        { icon: "fa-clipboard-list", titulo: "Fazer cadastros e registros" }
      ]
    },
    passo4: {
      subBadge: "NA HORA DO CUIDADO",
      titulo: "Onde identificar",
      texto: "Preencha fichas, formulários e rótulos <strong>sem deixar campos em branco</strong>. Os 3 identificadores completos e corretos em <strong>todas</strong> as identificações do HELN.",
      cards: [
        { icon: "fa-id-card", titulo: "Pulseira" },
        { icon: "fa-bed", titulo: "Leito" },
        { icon: "fa-file-prescription", titulo: "Rótulo da medicação" },
        { icon: "fa-file-lines", titulo: "Fichas e formulários" },
        { icon: "fa-folder-plus", titulo: "Prontuário" },
        { icon: "fa-vial", titulo: "Amostras e exames" }
      ],
      bannerDestaque: { titulo: "Todas as demais identificações", texto: "dietas, requisições, prescrições, consentimentos, leite e fórmula, impressos em geral" }
    },
    passo5: { videoUrl: "https://www.youtube.com", descricaoVideo: "YouTube · Vídeo Meta 1" },
    quiz: [
      { id: 1, pergunta: "1. Quais são os 3 identificadores obrigatórios?", opcoes: [{ texto: "Nome completo da criança, data de nascimento e nome completo da mãe.", correta: true }, { texto: "Número do leito e idade.", correta: false }] },
      { id: 2, pergunta: "2. Em quais momentos devemos conferir?", opcoes: [{ texto: "Sempre antes de procedimentos, medicação, dieta e registros.", correta: true }, { texto: "Apenas na alta.", correta: false }] },
      { id: 3, pergunta: "3. O correto é:", opcoes: [{ texto: "Manter identificadores completos sem campos em branco.", correta: true }, { texto: "Deixar campos em branco.", correta: false }] }
    ]
  },

  "meta2": {
    id: "meta2",
    metaBadge: "Meta 2",
    categoria: "Comunicação Efetiva",
    tituloHtml: 'Comunicação <span class="highlight-green">Efetiva</span> na Saúde',
    textoBoasVindas: `Olá, equipe! Vamos alinhar nossas práticas para uma comunicação clara e objetiva.`,
    imagemHero: "imgs/bonecos.png",
    passo2: {
      subBadge: "PASSAGEM DE PLANTÃO",
      titulo: "Metodologia SBAR",
      texto: "Utilize o SBAR para estruturar o raciocínio clínico.",
      cards: [
        { num: 1, icon: "fa-circle-info", titulo: "S - Situação" },
        { num: 2, icon: "fa-notes-medical", titulo: "B - Breve Histórico" },
        { num: 3, icon: "fa-chart-line", titulo: "A - Avaliação" },
        { num: 4, icon: "fa-hand-holding-medical", titulo: "R - Recomendação" }
      ]
    },
    passo3: { subBadge: "CONFIRMAÇÃO", titulo: "Read Back", texto: "Sempre repita ordens verbais para confirmar o entendimento.", cards: [{ icon: "fa-ear-listen", titulo: "Ouvir" }, { icon: "fa-pen", titulo: "Escrever" }, { icon: "fa-volume-high", titulo: "Ler de volta" }] },
    passo4: { subBadge: "REGISTRO", titulo: "Documentação", texto: "Documente tudo sem rasuras.", cards: [{ icon: "fa-file-signature", titulo: "Passagem de Plantão" }, { icon: "fa-phone", titulo: "Resultados Críticos" }] },
    passo5: { videoUrl: "#", descricaoVideo: "Videoaula Meta 2" },
    quiz: [{ id: 1, pergunta: "1. SBAR significa?", opcoes: [{ texto: "Situação, Breve Histórico, Avaliação e Recomendação.", correta: true }, { texto: "Outro.", correta: false }] }]
  },

  "meta3": {
    id: "meta3",
    metaBadge: "Meta 3",
    categoria: "Segurança de Medicamentos",
    tituloHtml: 'Segurança no uso de <span class="highlight-green">Medicamentos</span>',
    textoBoasVindas: "Foco na redução de erros e segurança do paciente.",
    imagemHero: "imgs/bonecos.png",
    passo2: { subBadge: "VIGILÂNCIA", titulo: "Drogas de Alta Vigilância", texto: "Checagem redobrada.", cards: [{ num: 1, icon: "fa-syringe", titulo: "Insulina" }, { num: 2, icon: "fa-droplet", titulo: "Heparina" }] },
    passo3: { subBadge: "OS 9 CERTOS", titulo: "Administração", texto: "Verifique sempre os 9 certos.", cards: [{ icon: "fa-user", titulo: "Paciente certo" }, { icon: "fa-pills", titulo: "Medicação certa" }] },
    passo4: { subBadge: "PRÁTICAS", titulo: "Rotulagem", texto: "Segurança total.", cards: [{ icon: "fa-tag", titulo: "Rótulos claros" }] },
    passo5: { videoUrl: "#", descricaoVideo: "Vídeo Meta 3" },
    quiz: [{ id: 1, pergunta: "1. O que é dupla checagem?", opcoes: [{ texto: "Verificar duas vezes para evitar erros.", correta: true }, { texto: "Não precisa.", correta: false }] }]
  },

  "meta4": {
    id: "meta4",
    metaBadge: "Meta 4",
    categoria: "Cirurgia Segura",
    tituloHtml: 'Protocolo de <span class="highlight-green">Cirurgia Segura</span>',
    textoBoasVindas: "Protocolo obrigatório para todos os procedimentos.",
    imagemHero: "imgs/bonecos.png",
    passo2: { subBadge: "CHECKLIST", titulo: "OMS", texto: "Entrada, Saída e Time-out.", cards: [{ num: 1, icon: "fa-list", titulo: "Checklist" }] },
    passo3: { subBadge: "TIME-OUT", titulo: "Pausa", texto: "Confirmação final.", cards: [{ icon: "fa-check", titulo: "Identidade" }, { icon: "fa-map", titulo: "Local" }] },
    passo4: { subBadge: "SEGURANÇA", titulo: "Prevenção", texto: "Evite erros.", cards: [{ icon: "fa-shield", titulo: "Antibioticoprofilaxia" }] },
    passo5: { videoUrl: "#", descricaoVideo: "Vídeo Meta 4" },
    quiz: [{ id: 1, pergunta: "1. Para que serve o Time-out?", opcoes: [{ texto: "Confirmar dados do paciente e procedimento.", correta: true }, { texto: "Nenhum.", correta: false }] }]
  },

  "meta5": {
    id: "meta5",
    metaBadge: "Meta 5",
    categoria: "Prevenção de Infecções",
    tituloHtml: 'Prevenção de <span class="highlight-green">Infecções</span>',
    textoBoasVindas: "A higiene das mãos salva vidas.",
    imagemHero: "imgs/bonecos.png",
    passo2: { subBadge: "MOMENTOS", titulo: "Os 5 Momentos", texto: "Higienize corretamente.", cards: [{ num: 1, icon: "fa-hand", titulo: "Antes do contato" }, { num: 2, icon: "fa-pump-medical", titulo: "Antes de procedimento" }] },
    passo3: { subBadge: "TÉCNICA", titulo: "Lavagem", texto: "40 a 60 segundos.", cards: [{ icon: "fa-soap", titulo: "Sabão" }] },
    passo4: { subBadge: "EPI", titulo: "Proteção", texto: "Use corretamente.", cards: [{ icon: "fa-mask", titulo: "Máscara" }] },
    passo5: { videoUrl: "#", descricaoVideo: "Vídeo Meta 5" },
    quiz: [{ id: 1, pergunta: "1. Quantos momentos de higienização?", opcoes: [{ texto: "5 momentos.", correta: true }, { texto: "2 momentos.", correta: false }] }]
  },

  "meta6": {
    id: "meta6",
    metaBadge: "Meta 6",
    categoria: "Prevenção de Quedas",
    tituloHtml: 'Prevenção de <span class="highlight-green">Quedas</span>',
    textoBoasVindas: "Adote medidas preventivas em todos os leitos.",
    imagemHero: "imgs/bonecos.png",
    passo2: { subBadge: "RISCO", titulo: "Avaliação", texto: "Admissão segura.", cards: [{ num: 1, icon: "fa-child", titulo: "Risco pediátrico" }] },
    passo3: { subBadge: "AMBIENTE", titulo: "Barreiras", texto: "Grades elevadas.", cards: [{ icon: "fa-bed", titulo: "Grades no leito" }] },
    passo4: { subBadge: "AÇÃO", titulo: "Monitoramento", texto: "Rondas de enfermagem.", cards: [{ icon: "fa-bell", titulo: "Campainha" }] },
    passo5: { videoUrl: "#", descricaoVideo: "Vídeo Meta 6" },
    quiz: [{ id: 1, pergunta: "1. Medida essencial?", opcoes: [{ texto: "Grades elevadas.", correta: true }, { texto: "Deixar solto.", correta: false }] }]
  }
};