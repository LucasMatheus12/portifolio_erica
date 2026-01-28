# Portfólio Érica Torres

Portfólio minimalista em preto e branco com foco em projetos visuais.

## Estrutura de Arquivos

```
├── index.html          # Página principal
├── project.html        # Template de página de projeto
├── css/
│   └── style.css       # Estilos globais
└── js/
    ├── data.js         # Dados dos projetos
    ├── main.js         # JavaScript da página principal
    └── project.js      # JavaScript da página de projeto
```

## Funcionalidades

### Página Principal (index.html)
- Header fixo com navegação
- Hero section com título e subtítulo
- Grid de projetos (2 colunas em desktop, 1 em mobile)
- Seção sobre
- Seção de contato
- Footer

### Página de Projeto (project.html)
- Header com link de retorno
- Informações do projeto (título, categoria, ano, descrição)
- Galeria de imagens em alta resolução
- Lightbox para visualização ampliada
- Navegação entre projetos (anterior/próximo)
- Controles de teclado no lightbox (ESC, setas)

## Customização

### Adicionar/Editar Projetos

Edite o arquivo `js/data.js`:

```javascript
{
    id: 7,                          // ID único
    name: 'Nome do Projeto',        // Nome do projeto
    category: 'Categoria',          // Categoria
    year: '2026',                   // Ano
    thumbnail: 'url-thumbnail.jpg', // Imagem de capa
    description: 'Descrição...',    // Descrição do projeto
    images: [                       // Array de imagens
        'url-imagem-1.jpg',
        'url-imagem-2.jpg'
    ]
}
```

### Editar Informações de Contato

No arquivo `index.html`, seção `#contact`:

```html
<a href="mailto:seu@email.com" class="contact-link">seu@email.com</a>
<a href="https://instagram.com/seu_usuario" class="contact-link">Instagram</a>
```

### Personalizar Cores

No arquivo `css/style.css`, seção `:root`:

```css
:root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray: #666666;
}
```

## Recursos

- Design responsivo para mobile e desktop
- Transições suaves
- Lightbox com navegação por teclado
- Scroll suave entre seções
- Carregamento progressivo de imagens
- SEO-friendly

## Compatibilidade

- Chrome/Edge (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Mobile browsers

## Notas

- As imagens devem estar em alta resolução para melhor visualização
- URLs das imagens podem ser substituídas por caminhos locais
- O site é estático, sem necessidade de backend
