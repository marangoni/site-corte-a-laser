// =====================================================
// Catálogo UbuntuMaker
// =====================================================


// =====================================================
// CALIBRADOR LASER VS6040
// =====================================================

function adicionarCalibradorVs6040() {

    const grade =
        document.getElementById(
            "gradeModelos"
        );


    if (!grade) {
        return;
    }


    // Evita duplicação caso o card venha a ser
    // incorporado diretamente ao HTML no futuro.

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


    // -------------------------------------------------
    // CARD
    // -------------------------------------------------

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
                alt="Matriz de calibração de potência e velocidade da cortadora laser VISUTEC VS6040"
            >

            <span class="badge-card">
                CALIBRAÇÃO
            </span>

        </div>


        <div class="modelo-conteudo">

            <div class="modelo-meta">

                <span>
                    VS6040
                </span>

                <span>
                    Corte
                </span>

                <span>
                    Gravação
                </span>

            </div>


            <h3>
                Calibrador Laser VS6040
            </h3>


            <p>
                Gere matrizes de potência × velocidade para
                corte, gravação vetorial e preenchimento.
                O aplicativo cria arquivos SVG de referência
                e pacotes NGC para execução no K40 Whisperer.
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


    // Coloca o calibrador junto das ferramentas,
    // antes da seção de modelos externos do Cuttle.

    const primeiroModeloExterno =
        grade.querySelector(
            '.modelo-card[data-categorias~="modelos"]'
        );


    if (
        primeiroModeloExterno
    ) {

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



// =====================================================
// CONFIGURADOR DE DESTINO SVG
// =====================================================

function adicionarConfiguradorDestinoSvg() {

    const grade =
        document.getElementById(
            "gradeModelos"
        );


    if (!grade) {
        return;
    }


    /*
     * Evita duplicação se o card for
     * incorporado diretamente ao HTML futuramente.
     */

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


    /*
     * Ilustração SVG embutida.
     *
     * Assim não é necessário criar outro
     * arquivo na pasta assets/img.
     */

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
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(
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

                <span>
                    SVG
                </span>

                <span>
                    Google Drive
                </span>

                <span>
                    Equipe
                </span>

            </div>


            <h3>
                Configurar Destino dos SVGs
            </h3>


            <p>
                Defina a pasta do Google Drive onde serão
                armazenados os arquivos SVG enviados pelo
                formulário. Acesso restrito à equipe autorizada.
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


    /*
     * Coloca o configurador junto das ferramentas,
     * antes dos recursos externos do Cuttle.
     */

    const primeiroModeloExterno =
        grade.querySelector(
            '.modelo-card[data-categorias~="modelos"]'
        );


    if (
        primeiroModeloExterno
    ) {

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



// =====================================================
// ADICIONA AS FERRAMENTAS DINÂMICAS
// =====================================================

adicionarCalibradorVs6040();

adicionarConfiguradorDestinoSvg();



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

// Impede navegação acidental enquanto
// a URL de um gerador ainda não foi configurada.

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
