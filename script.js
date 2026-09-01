// =====================================================
// Catálogo UbuntuMaker
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


filtrarModelos("todos");
