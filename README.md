# Mural de Fotos

Um mural pra juntar algumas fotografias que tirei, feito em HTML, CSS e JavaScript puro — sem framework, sem build, sem dependência.

🔗 **[Ver o mural](https://sofiabbz.github.io/Mural-de-Fotos/)**

![Print do mural](fotos/foto-01.jpg)

## Sobre

Sempre gostei de tirar foto e queria um lugar meu pra colocar as fotos, em vez de deixar tudo na câmera. Aproveitei pra treinar CSS Grid de verdade, onde fiz a grade das fotos propositalmente assimétricas.

Também foi um exercício de fazer as coisas na mão. Dava pra resolver com uma biblioteca de lightbox pronta, mas escrever o visualizador do zero me ajudou mais sobre eventos, navegação por teclado e manipulação de DOM.

## O que tem aqui

- **Grade assimétrica** em CSS Grid, com posições de destaque definidas manualmente via `nth-child`
- **Lightbox** com a foto ampliada e um painel de informações ao lado — título, categoria, descrição, data, local e câmera
- **Navegação por teclado** — setas pra trocar de foto, `Esc` pra fechar, `Tab` pra percorrer a grade com indicador visual de foco
- **Indicadores** na base que mostram em qual foto você está e permitem pular direto
- **Responsivo** — no celular a grade vira duas colunas e o lightbox se reorganiza na vertical
- **Lazy loading** nas imagens, pra não carregar tudo de uma vez

## Como rodar

Não precisa instalar nada:

```bash
git clone https://github.com/sofiabbz/MuralFotosSopa.git
```

Abra a pasta no VS Code e rode com a extensão **Live Server** (ou qualquer servidor local).

## Como adicionar uma foto

1. Coloque o arquivo na pasta `fotos/` — nome em minúsculas, sem espaço e sem acento
2. Adicione um objeto no array `fotos` do `script.js`:

```javascript
{
  src: "fotos/foto-09.jpg",
  titulo: "Nome da foto",
  categoria: "Paisagem",
  descricao: "O que essa foto conta.",
  data: "10 de julho de 2026",
  local: "Brasília, DF",
  camera: "iPhone 13"
}
```

O resto se ajusta sozinho — a grade monta e o contador do topo atualiza a partir do tamanho do array.

Pra dar destaque a uma posição nova, é só incluir o número na regra correspondente do `style.css`:

```css
.cartao-foto:nth-child(4),
.cartao-foto:nth-child(11) { grid-column: span 2; }  /* cartão largo */
```

Recomendo escolher foto horizontal pros cartões largos e vertical pros altos — as imagens usam `object-fit: cover` na grade, então o que não cabe é cortado.

## Estrutura

```
MuralFotosSopa/
├── fotos/          # as imagens
├── index.html      # estrutura da página
├── style.css       # estilos e a grade
└── script.js       # dados das fotos e lógica do lightbox
```

## Feito com

HTML5 · CSS3 (Grid e Flexbox) · JavaScript (ES6) · [Tabler Icons](https://tabler.io/icons) · Google Fonts (Kanit e IM Fell English)

---

Feito por [Sofia](https://github.com/sofiabbz) 📷
