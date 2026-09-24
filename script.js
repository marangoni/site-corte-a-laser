// =====================================================
// CATÁLOGO UBUNTUMAKER
// =====================================================


// =====================================================
// FUNÇÕES AUXILIARES
// =====================================================

function obterGrade() {

    return document.getElementById(
        "gradeModelos"
    );

}


function inserirAntesDosModelos(
    card
) {

    const grade =
        obterGrade();


    if (!grade) {
        return;
    }


    const primeiroModeloExterno =
        grade.querySelector(
            '.modelo-card[data-categorias~="modelos"]'
        );


    if (primeiroModeloExterno) {

        grade.insertBefore(
            card,
            primeiroModeloExterno
        );

    }
    else {

        grade.appendChild(
            card
        );

    }

}


function svgParaDataUri(
    svg
) {

    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg)
    );

}



// =====================================================
// CALIBRADOR LASER VS6040
// =====================================================

function adicionarCalibradorVs6040() {

    const grade =
        obterGrade();


    if (!grade) {
        return;
    }


    if (
        document.getElementById(
            "card-calibrador-vs6040"
        )
    ) {
        return;
    }


    // -------------------------------------------------
    // FILTRO CALIBRAÇÃO
    // -------------------------------------------------

    const filtros =
        document.querySelector(
            ".filtros"
        );


    if (
        filtros &&
        !document.getElementById(
            "filtro-calibracao"
        )
    ) {

        const botao =
            document.createElement(
                "button"
            );


        botao.id =
            "filtro-calibracao";


        botao.className =
            "filtro";


        botao.type =
            "button";


        botao.dataset.filtro =
            "calibracao";


        botao.textContent =
            "Calibração";


        filtros.appendChild(
            botao
        );

    }


    const card =
        document.createElement(
            "article"
        );


    card.id =
        "card-calibrador-vs6040";


    card.className =
        "modelo-card";


    card.dataset.categorias =
        "ferramenta utilidade calibracao";


    card.innerHTML = `

        <div class="modelo-imagem">

            <img
                src="assets/img/calibrador-vs6040.svg"
                alt="Matriz de calibração da cortadora laser VISUTEC VS6040"
            >

            <span class="badge-card">
                CALIBRAÇÃO
            </span>

        </div>


        <div class="modelo-conteudo">

            <div class="modelo-meta">

                <span>VS6040</span>
                <span>Corte</span>
                <span>Gravação</span>

            </div>


            <h3>
                Calibrador Laser VS6040
            </h3>


            <p>

                Gere matrizes de potência × velocidade para
                corte, gravação vetorial e preenchimento.
                Crie arquivos SVG e pacotes NGC para utilização
                no K40 Whisperer.

            </p>


            <a
                class="botao-modelo"
                href="https://marangoni.github.io/calibracao-laser-vs6040/"
                target="_blank"
                rel="noopener noreferrer"
            >

                Abrir calibrador

                <span aria-hidden="true">
                    →
                </span>

            </a>

        </div>

    `;


    inserirAntesDosModelos(
        card
    );

}



// =====================================================
// CONFIGURADOR DE DESTINO SVG
// =====================================================

function adicionarConfiguradorDestinoSvg() {

    const grade =
        obterGrade();


    if (!grade) {
        return;
    }


    if (
        document.getElementById(
            "card-configurador-destino-svg"
        )
    ) {
        return;
    }


    const card =
        document.createElement(
            "article"
        );


    card.id =
        "card-configurador-destino-svg";


    card.className =
        "modelo-card";


    card.dataset.categorias =
        "ferramenta utilidade";


    const imagemSvg = `

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 960 600"
        >

            <rect
                width="960"
                height="600"
                fill="#f0ece8"
            />


            <!-- Pasta -->

            <path
                d="
                    M165 215
                    H365
                    L415 270
                    H795
                    V430
                    Q795 470 755 470
                    H205
                    Q165 470 165 430
                    Z
                "
                fill="#FCC52D"
                stroke="#531C33"
                stroke-width="10"
                stroke-linejoin="round"
            />


            <!-- Arquivo -->

            <rect
                x="315"
                y="255"
                width="250"
                height="160"
                rx="16"
                fill="#ffffff"
                stroke="#531C33"
                stroke-width="8"
            />


            <!-- Símbolos SVG -->

            <path
                d="
                    M357 305
                    L320 335
                    L357 365
                "
                fill="none"
                stroke="#E17D01"
                stroke-width="12"
                stroke-linecap="round"
                stroke-linejoin="round"
            />


            <path
                d="
                    M523 305
                    L560 335
                    L523 365
                "
                fill="none"
                stroke="#E17D01"
                stroke-width="12"
                stroke-linecap="round"
                stroke-linejoin="round"
            />


            <path
                d="
                    M445 295
                    L420 375
                "
                fill="none"
                stroke="#164ee8"
                stroke-width="12"
                stroke-linecap="round"
            />


            <text
                x="440"
                y="402"
                text-anchor="middle"
                font-family="Arial, Helvetica, sans-serif"
                font-size="31"
                font-weight="700"
                fill="#531C33"
            >
                SVG
            </text>


            <!-- Engrenagem -->

            <g
                transform="translate(690 330)"
            >

                <circle
                    cx="0"
                    cy="0"
                    r="74"
                    fill="#8A880D"
                    stroke="#531C33"
                    stroke-width="8"
                />


                <circle
                    cx="0"
                    cy="0"
                    r="27"
                    fill="#ffffff"
                    stroke="#531C33"
                    stroke-width="8"
                />


                <g
                    stroke="#531C33"
                    stroke-width="16"
                    stroke-linecap="round"
                >

                    <path d="M0 -98 V-74" />
                    <path d="M0 74 V98" />

                    <path d="M-98 0 H-74" />
                    <path d="M74 0 H98" />

                    <path d="M-69 -69 L-52 -52" />
                    <path d="M52 52 L69 69" />

                    <path d="M69 -69 L52 -52" />
                    <path d="M-52 52 L-69 69" />

                </g>

            </g>


            <text
                x="480"
                y="535"
                text-anchor="middle"
                font-family="Arial, Helvetica, sans-serif"
                font-size="34"
                font-weight="800"
                letter-spacing="2"
                fill="#531C33"
            >
                DESTINO SVG
            </text>

        </svg>

    `;


    const imagemDataUri =
        svgParaDataUri(
            imagemSvg
        );


    card.innerHTML = `

        <div class="modelo-imagem">

            <img
                src="${imagemDataUri}"
                alt="Configurador de destino dos arquivos SVG no Google Drive"
            >

            <span class="badge-card">
                EQUIPE
            </span>

        </div>


        <div class="modelo-conteudo">

            <div class="modelo-meta">

                <span>SVG</span>
                <span>Google Drive</span>
                <span>Equipe</span>

            </div>


            <h3>
                Configurar Destino dos SVGs
            </h3>


            <p>

                Defina a pasta do Google Drive onde serão
                armazenados os próximos SVGs enviados.
                Acesso restrito aos membros autorizados
                da equipe.

            </p>


            <a
                class="botao-modelo"
                href="https://script.google.com/macros/s/AKfycbz6r1hDAxTd7z4eoDak4-V1wqHGeBW5j8R1NfQvs04DcHaZP6ZQcWcs7_oMU1X27X5a/exec"
                target="_blank"
                rel="noopener noreferrer"
            >

                Abrir configurador

                <span aria-hidden="true">
                    →
                </span>

            </a>

        </div>

    `;


    inserirAntesDosModelos(
        card
    );

}



// =====================================================
// ENVIO DE SVGs
// =====================================================

function adicionarEnvioSvg() {

    const grade =
        obterGrade();


    if (!grade) {
        return;
    }


    if (
        document.getElementById(
            "card-envio-svg"
        )
    ) {
        return;
    }


    const card =
        document.createElement(
            "article"
        );


    card.id =
        "card-envio-svg";


    card.className =
        "modelo-card";


    card.dataset.categorias =
        "ferramenta utilidade";


    const imagemSvg = `

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 960 600"
        >

            <rect
                width="960"
                height="600"
                fill="#f0ece8"
            />


            <!-- Nuvem -->

            <path
                d="
                    M275 395
                    H690
                    C755 395 790 355 790 310
                    C790 263 753 226 705 226
                    C686 226 669 232 654 242
                    C626 180 571 145 507 145
                    C420 145 350 207 340 289
                    C322 278 300 272 278 272
                    C220 272 174 317 174 371
                    C174 385 177 398 182 410
                "
                fill="#ffffff"
                stroke="#531C33"
                stroke-width="11"
                stroke-linecap="round"
                stroke-linejoin="round"
            />


            <!-- Arquivos -->

            <rect
                x="355"
                y="302"
                width="135"
                height="110"
                rx="14"
                fill="#ffffff"
                stroke="#531C33"
                stroke-width="7"
            />


            <rect
                x="405"
                y="275"
                width="155"
                height="130"
                rx="15"
                fill="#FCC52D"
                stroke="#531C33"
                stroke-width="8"
            />


            <text
                x="482"
                y="355"
                text-anchor="middle"
                font-family="Arial, Helvetica, sans-serif"
                font-size="36"
                font-weight="800"
                fill="#531C33"
            >
                SVG
            </text>


            <!-- Seta -->

            <path
                d="
                    M482 270
                    V180
                "
                fill="none"
                stroke="#E17D01"
                stroke-width="18"
                stroke-linecap="round"
            />


            <path
                d="
                    M436 223
                    L482 177
                    L528 223
                "
                fill="none"
                stroke="#E17D01"
                stroke-width="18"
                stroke-linecap="round"
                stroke-linejoin="round"
            />


            <text
                x="480"
                y="520"
                text-anchor="middle"
                font-family="Arial, Helvetica, sans-serif"
                font-size="34"
                font-weight="800"
                letter-spacing="2"
                fill="#531C33"
            >
                ENVIAR SVGs
            </text>

        </svg>

    `;


    const imagemDataUri =
        svgParaDataUri(
            imagemSvg
        );


    card.innerHTML = `

        <div class="modelo-imagem">

            <img
                src="${imagemDataUri}"
                alt="Envio de um ou vários arquivos SVG para corte a laser"
            >

            <span class="badge-card">
                ENVIO
            </span>

        </div>


        <div class="modelo-conteudo">

            <div class="modelo-meta">

                <span>SVG</span>
                <span>Upload múltiplo</span>
                <span>Corte a laser</span>

            </div>


            <h3>
                Enviar SVGs para Corte
            </h3>


            <p>

                Envie um ou vários arquivos SVG em uma única
                submissão. Os arquivos são armazenados
                automaticamente na pasta definida pela equipe.
                Não é necessário login no Google.

            </p>


            <a
                class="botao-modelo"
                href="https://app.youform.com/forms/28mehdka"
                target="_blank"
                rel="noopener noreferrer"
            >

                Enviar arquivos

                <span aria-hidden="true">
                    →
                </span>

            </a>

        </div>

    `;


    inserirAntesDosModelos(
        card
    );

}



// =====================================================
// ADICIONA AS FERRAMENTAS DINÂMICAS
// =====================================================

adicionarCalibradorVs6040();

adicionarConfiguradorDestinoSvg();

adicionarEnvioSvg();



// =====================================================
// FILTROS
// =====================================================

const botoesFiltro =
    Array.from(
        document.querySelectorAll(
            ".filtro"
        )
    );


const cards =
    Array.from(
        document.querySelectorAll(
            ".modelo-card"
        )
    );


const semResultados =
    document.getElementById(
        "semResultados"
    );


function filtrarModelos(
    filtro
) {

    let encontrados = 0;


    for (
        const card
        of cards
    ) {

        const categorias =
            (
                card.dataset.categorias ||
                ""
            )
                .split(/\s+/)
                .filter(Boolean);


        const mostrar =
            filtro === "todos" ||
            categorias.includes(
                filtro
            );


        card.classList.toggle(
            "oculto",
            !mostrar
        );


        if (mostrar) {

            encontrados++;

        }

    }


    semResultados.hidden =
        encontrados !== 0;

}



// =====================================================
// EVENTOS DOS FILTROS
// =====================================================

for (
    const botao
    of botoesFiltro
) {

    botao.addEventListener(
        "click",
        () => {

            for (
                const outro
                of botoesFiltro
            ) {

                outro.classList.remove(
                    "ativo"
                );

            }


            botao.classList.add(
                "ativo"
            );


            filtrarModelos(
                botao.dataset.filtro
            );

        }
    );

}



// =====================================================
// LINKS PENDENTES
// =====================================================

const linksPendentes =
    document.querySelectorAll(
        '[data-link-pendente="true"]'
    );


for (
    const link
    of linksPendentes
) {

    link.addEventListener(
        "click",
        event => {

            event.preventDefault();


            alert(
                "Este gerador ainda não teve sua URL do GitHub Pages configurada no catálogo."
            );

        }
    );

}



// =====================================================
// ESTADO INICIAL
// =====================================================

filtrarModelos(
    "todos"
);
