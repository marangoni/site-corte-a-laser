# Modelos Corte a Laser — UbuntuMaker

Catálogo central de geradores, modelos e ferramentas para corte e gravação a laser do laboratório UbuntuMaker.

## Identidade visual

A página utiliza a identidade visual do UbuntuMaker.

Paleta principal:

- amarelo: `#FCC52D`
- laranja: `#E17D01`
- verde oliva: `#8A880D`
- vinho: `#531C33`

O logotipo é utilizado no cabeçalho e no rodapé.

## Organização

Este repositório funciona como catálogo central.

Os geradores e ferramentas podem permanecer em repositórios ou serviços independentes. O catálogo apenas disponibiliza o acesso aos recursos em uma interface única.

## Geradores

Recursos atualmente disponíveis:

- Chaveiro com nome  
  `https://marangoni.github.io/keychain-generator/`

- Chaveiro e card com emoji  
  `https://marangoni.github.io/keychain-emoji-generator/`

- Chaveiro e card de futebol  
  `https://marangoni.github.io/chaveiros-futebol/`

- Chaveiro e card de personagens  
  `https://marangoni.github.io/keychain-personagens/`

- Caixa paramétrica  
  `https://boxes.hackerspace-bamberg.de/?language=pt_BR`

## Ferramentas

### Agregador de SVGs

Organiza vários arquivos SVG automaticamente em pranchas para corte.

`https://marangoni.github.io/agregador-svgs/`

### Calibrador Laser VS6040

Gera padrões de calibração de potência e velocidade para a cortadora laser VISUTEC VS6040.

`https://marangoni.github.io/calibracao-laser-vs6040/`

### Enviar SVGs para Corte

Formulário utilizado pelos estudantes para enviar um ou vários arquivos SVG.

`https://app.youform.com/forms/28mehdka`

Os arquivos são encaminhados automaticamente para a pasta do Google Drive selecionada pela equipe.

O aluno não precisa possuir ou utilizar uma conta Google.

### Configurar Destino dos SVGs

Ferramenta administrativa utilizada para selecionar a pasta do Google Drive que receberá os próximos arquivos enviados.

O acesso é protegido por autenticação Google e lista de contas autorizadas.

## Modelos externos

- Cuttle — modelos gratuitos  
  `https://cuttle.xyz/templates/free`

- Cuttle — projetos da comunidade  
  `https://cuttle.xyz/templates/projects-from-the-community`

## Fluxo de envio de SVGs

```text
Aluno
  ↓
Youform
  ↓
Webhook
  ↓
Google Apps Script
  ↓
Pasta ativa do Google Drive
