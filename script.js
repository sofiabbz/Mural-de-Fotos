
const fotos = [
  {
    src: "fotos/foto1.jpg",
    titulo: "Homem Lacrimejando",
    categoria: "Arte",
    descricao: "Foto tirada em Brasília, DF, durante a exposição de arte. A imagem captura a emoção do momento e a profundidade da expressão humana.",
    data: "12 de março de 2025",
    local: "Brasília, DF",
    camera: "Canon PowerShot SX620 HS"
  },
  {
    src: "fotos/foto2.jpg",
    titulo: "Dudu ao Vento",
    categoria: "Natureza",
    descricao: "Foto tirada no carro indo para Chapada dos Veadeiros, GO. A imagem mostra meu migo lindo Dudu com o vento batendo no rosto indo comemorar seu niver.",
    data: "3 de janeiro de 2025",
    local: "Chapada dos Veadeiros, GO",
    camera: "Canon EOS Rebel T6"
  },
  {
    src: "fotos/foto3.jpg",
    titulo: "Cachoeira Loquinha",
    categoria: "Natureza",
    descricao: "Foto tirada na Chapada dos Veadeiros, GO. A imagem mostra um dos poços da Cachoeira Loquinha, coisa linda!",
    data: "18 de julho de 2025",
    local: "Chapada dos Veadeiros, GO",
    camera: "Canon EOS Rebel T6"
  },
  {
    src: "fotos/foto4.jpg",
    titulo: "Amanda Olhando o Horizonte",
    categoria: "Paisagem",
    descricao: "Foto tirada na Chapada dos Veadeiros, GO. A imagem mostra minha miga rainha Amanda olhando para o nada e pensando em tudo...",
    data: "5 de outubro de 2025",
    local: "Chapada dos Veadeiros, GO",
    camera: "Canon EOS Rebel T6"
  },
  {
    src: "fotos/foto5.jpg",
    titulo: "Anjos da Catedral",
    categoria: "Urbano",
    descricao: "Foto tirada em Brasília, DF. A imagem mostra os anjos da catedral pelos ares nos vitrais da igreja. ",
    data: "22 de setembro de 2025",
    local: "Brasília, DF",
    camera: "Canon EOS Rebel T6"
  },
  {
    src: "fotos/foto6.jpg",
    titulo: "Palmeiras ao Entardecer",
    categoria: "Paisagem",
    descricao: "Foto tirada em Brasília, DF. A imagem mostra uma dupla Palmeiras ao entardecer, visto da casa da minha amiga Gaby, com o sol se pondo atrás.",
    data: "14 de abril de 2025",
    local: "Brasília, DF",
    camera: "Canon EOS Rebel T6"
  },
  {
    src: "fotos/foto7.jpg",
    titulo: "Dudu na Norte",
    categoria: "Urbano",
    descricao: "Foto tirada em Brasília, DF. A imagem mostra meu migo Dudu na Asa Norte, no parquinho de crianças.",
    data: "7 de fevereiro de 2025",
    local: "Brasília, DF",
    camera: "Canon EOS Rebel T6"
  },
  {
    src: "fotos/foto8.jpg",
    titulo: "Véu da Noiva",
    categoria: "Natureza",
    descricao: "Foto tirada no entorno de Brasília, DF, famoso Poço Azul. A imagem mostra a cachoeira Véu da Noiva com suas águas cristalinas.",
    data: "29 de novembro de 2025",
    local: "Brasília, DF",
    camera: "Canon EOS Rebel T6",
  },
  {
    src: "fotos/foto9.jpg",
    titulo: "Reflexo da Água",
    categoria: "Natureza",
    descricao: "Foto tirada no entorno de Brasília, DF. A imagem mostra o reflexo da água no Poço Azul.",
    data: "15 de agosto de 2025",
    local: "Brasília, DF",
    camera: "Canon EOS Rebel T6"
  },
  {
    src: "fotos/foto10.jpg",
    titulo: "Migos no Por do Sol",
    categoria: "Paisagem",
    descricao: "Foto tirada em Brasília, DF. A imagem mostra meus migos João e Gb no por do sol no lago.",
    data: "30 de junho de 2025",
    local: "Brasília, DF",
    camera: "iPhone 12"
  },
  {
    src: "fotos/foto11.jpg",
    titulo: "Deck Fim de Tarde",
    categoria: "Paisagem",
    descricao: "Foto tirada em Brasília, DF. A imagem mostra um deck ao entardecer, com o sol quaaase se pondo atrás.",
    data: "10 de maio de 2025",
    local: "Brasília, DF",
    camera: "iPhone 12"
  },
  {
    src: "fotos/foto12.jpg",
    titulo: "Parapente em Arraial",
    categoria: "Paisagem",
    descricao: "Foto tirada em Arraial d'Ajuda, BA. A imagem mostra um moço de parapente em voo sobre o mar.",
    data: "15 de agosto de 2025",
    local: "Arraial d'Ajuda, BA",
    camera: "iPhone 12"
  }
];

// ─── Estado ───────────────────────────────────
let indiceAtual = 0;

// ─── Elementos do DOM ─────────────────────────
const grade       = document.getElementById('grade');
const visualizador = document.getElementById('visualizador');
const indicadores  = document.getElementById('indicadores');
const contador     = document.getElementById('contador-fotos');

// ─── Monta a grade ────────────────────────────
contador.textContent = `${fotos.length} fotografias`;

fotos.forEach((foto, i) => {
  // Cartão
  const cartao = document.createElement('div');
  cartao.className = 'cartao-foto';
  cartao.setAttribute('tabindex', '0');
  cartao.setAttribute('role', 'button');
  cartao.setAttribute('aria-label', `Abrir foto: ${foto.titulo}`);

  cartao.innerHTML = `
    <img src="${foto.src}" alt="${foto.titulo}" loading="lazy">
    <div class="etiqueta-hover">
      <span class="categoria">${foto.categoria}</span>
      <span class="titulo">${foto.titulo}</span>
    </div>
  `;

  cartao.addEventListener('click', () => abrirVisualizador(i));
  cartao.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') abrirVisualizador(i);
  });

  grade.appendChild(cartao);

  // Indicador
  const indicador = document.createElement('button');
  indicador.className = 'indicador';
  indicador.setAttribute('aria-label', `Ir para foto ${i + 1}`);
  indicador.addEventListener('click', () => abrirVisualizador(i));
  indicadores.appendChild(indicador);
});

// ─── Visualizador ─────────────────────────────
function abrirVisualizador(i) {
  indiceAtual = i;
  atualizarVisualizador();
  visualizador.classList.add('ativo');
  document.body.style.overflow = 'hidden';
}

function fecharVisualizador() {
  visualizador.classList.remove('ativo');
  document.body.style.overflow = '';
}

function atualizarVisualizador() {
  const f = fotos[indiceAtual];

  document.getElementById('foto-ampliada').src         = f.src;
  document.getElementById('foto-ampliada').alt         = f.titulo;
  document.getElementById('tag-categoria').textContent = f.categoria;
  document.getElementById('titulo-foto').textContent   = f.titulo;
  document.getElementById('descricao-foto').textContent = f.descricao;
  document.getElementById('meta-data').textContent     = f.data;
  document.getElementById('meta-local').textContent    = f.local;
  document.getElementById('meta-camera').textContent   = f.camera;

  // Atualiza indicadores
  document.querySelectorAll('.indicador').forEach((ind, i) => {
    ind.classList.toggle('ativo', i === indiceAtual);
  });
}

function navegar(direcao) {
  indiceAtual = (indiceAtual + direcao + fotos.length) % fotos.length;
  atualizarVisualizador();
}

// ─── Eventos ──────────────────────────────────
document.getElementById('btn-fechar').addEventListener('click', fecharVisualizador);
document.getElementById('btn-anterior').addEventListener('click', () => navegar(-1));
document.getElementById('btn-proximo').addEventListener('click', () => navegar(+1));

// Fecha ao clicar fora
visualizador.addEventListener('click', e => {
  if (e.target === visualizador) fecharVisualizador();
});

// Navegação por teclado
document.addEventListener('keydown', e => {
  if (!visualizador.classList.contains('ativo')) return;
  if (e.key === 'Escape')      fecharVisualizador();
  if (e.key === 'ArrowLeft')   navegar(-1);
  if (e.key === 'ArrowRight')  navegar(+1);
});
