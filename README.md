# Modelos Corte a Laser — UbuntuMaker

Catálogo central de geradores e modelos para corte e gravação a laser.

## Identidade visual

A página utiliza a identidade visual do logotipo oficial fornecido do UbuntuMaker.

Paleta principal usada:

- amarelo: `#FCC52D`
- laranja: `#E17D01`
- verde oliva: `#8A880D`
- vinho: `#531C33`

O logotipo é utilizado sem alterações em:

- cabeçalho;
- rodapé.

## Organização

Este repositório funciona apenas como catálogo.

Os geradores permanecem em seus próprios repositórios GitHub e os cards do catálogo apontam para as respectivas URLs do GitHub Pages.

Não é necessário copiar os geradores para este projeto.

## Links

Os geradores atualmente configurados são:

- Chaveiro com nome: `https://marangoni.github.io/keychain-generator/`
- Chaveiro e card com emoji: `https://marangoni.github.io/keychain-emoji-generator/`
- Chaveiro e card de futebol: `https://marangoni.github.io/chaveiros-futebol/`
- Caixa paramétrica: `https://boxes.hackerspace-bamberg.de/?language=pt_BR`

Também foi incluído um card reservado para o futuro gerador de **chaveiros e cards com personagens diversos**. Quando esse projeto for publicado, basta substituir o `href="#"` desse card pela nova URL do GitHub Pages e remover `data-link-pendente="true"`.

## Teste local

```bash
python3 -m http.server 8000 > servidor.log 2>&1 &
```

Depois abra:

`http://localhost:8000`
