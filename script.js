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


adicionarCalibradorVs6040();


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
