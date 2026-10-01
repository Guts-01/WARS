# STARW

Site de apresentação do esquadrão STARW de Call of Duty. É um projeto estático e pode ser aberto diretamente pelo arquivo index.html ou servido por qualquer servidor de arquivos.

## Estrutura

- index.html: conteúdo e estrutura semântica da página.
- styles.css: identidade visual, componentes e layouts responsivos.
- script.js: menu mobile, prévia da tag do jogador e ano do rodapé.
- armas/: imagens locais dos cartões de armas.

## Como editar

Os dados das armas ficam nos elementos article da seção “Meta de armas” em index.html. Cada lista de equipamentos usa pares dt/dd para manter o nome e o valor de cada item claros. As cores principais e as fontes ficam nas variáveis no início de styles.css.

A prévia da tag é apenas visual: o nome digitado não é enviado nem salvo. Os links de Discord e WhatsApp estão na seção de contato do HTML.

## Executar

Abra index.html no navegador. Para servir localmente, se tiver Python instalado, execute:

    python -m http.server 8000

Depois acesse http://localhost:8000.
