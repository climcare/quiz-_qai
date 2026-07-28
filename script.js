/* =========================================================
   QUIZ — PERCEPÇÃO DA QUALIDADE DO AR
   ========================================================= */


/* =========================================================
   GOOGLE APPS SCRIPT
   ========================================================= */

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzzmTrOfvubJxb9UFFRBElythVeAfSzGm9skwzRfCRoyA-rOVZoh_g9WoVVkeKd7fZx/exec";


/* =========================================================
   PERGUNTAS
   ========================================================= */

const perguntas = [

    /* =====================================================
       1 — AMBIENTE
       Não pontua
       ===================================================== */

    {
        id: "ambiente",

        categoria: "Sobre o ambiente",

        pergunta:
            "Qual ambiente você ocupa?",

        ajuda:
            "Selecione o tipo de ambiente onde você passa parte significativa do seu dia.",

        pontua: false,

        opcoes: [

            {
                texto: "Residência",
                valor: "residencia"
            },

            {
                texto: "Escritório",
                valor: "escritorio"
            },

            {
                texto: "Escola ou universidade",
                valor: "educacao"
            },

            {
                texto: "Clínica ou hospital",
                valor: "saude"
            },

            {
                texto: "Comércio",
                valor: "comercio"
            },

            {
                texto: "Outro",
                valor: "outro"
            }

        ]
    },


    /* =====================================================
       2 — ÁREA
       Não pontua
       ===================================================== */

    {
        id: "area",

        categoria: "Sobre o ambiente",

        pergunta:
            "Qual é a área aproximada do ambiente?",

        ajuda:
            "Não precisa ser exato. Escolha a faixa que mais se aproxima.",

        pontua: false,

        opcoes: [

            {
                texto: "Até 10 m²",
                valor: "ate_10"
            },

            {
                texto: "11 a 20 m²",
                valor: "11_20"
            },

            {
                texto: "21 a 40 m²",
                valor: "21_40"
            },

            {
                texto: "41 a 80 m²",
                valor: "41_80"
            },

            {
                texto: "Acima de 80 m²",
                valor: "acima_80"
            },

            {
                texto: "Não sei",
                valor: "nao_sei"
            }

        ]
    },


    /* =====================================================
       3 — AMBIENTE ABAFADO
       Pontuação: 0 / 1 / 3
       ===================================================== */

    {
        id: "abafado",

        categoria:
            "Percepção do ambiente",

        pergunta:
            "O ambiente costuma ficar abafado?",

        ajuda:
            "Considere a sensação de ar parado, pouca renovação ou ambiente fechado.",

        pontua: true,

        opcoes: [

            {
                texto: "Nunca",
                valor: 0
            },

            {
                texto: "Às vezes",
                valor: 1
            },

            {
                texto: "Frequentemente",
                valor: 3
            }

        ]
    },


    /* =====================================================
       4 — CANSAÇO / SONOLÊNCIA
       Pontuação: 0 / 1 / 3
       ===================================================== */

    {
        id: "cansaco",

        categoria:
            "Como você se sente",

        pergunta:
            "Você sente cansaço ou sonolência quando permanece no local?",

        ajuda:
            "Considere sintomas percebidos durante o período em que permanece nesse ambiente.",

        pontua: true,

        opcoes: [

            {
                texto: "Nunca",
                valor: 0
            },

            {
                texto: "Às vezes",
                valor: 1
            },

            {
                texto: "Frequentemente",
                valor: 3
            }

        ]
    },


    /* =====================================================
       5 — CONCENTRAÇÃO
       Pontuação: 0 / 1 / 3
       ===================================================== */

    {
        id: "concentracao",

        categoria:
            "Como você se sente",

        pergunta:
            "Você tem dificuldade para se concentrar nesse ambiente?",

        ajuda:
            "Considere se essa sensação ocorre enquanto você permanece no local.",

        pontua: true,

        opcoes: [

            {
                texto: "Nunca",
                valor: 0
            },

            {
                texto: "Às vezes",
                valor: 1
            },

            {
                texto: "Frequentemente",
                valor: 3
            }

        ]
    },


    /* =====================================================
       6 — MOFO / UMIDADE
       Pontuação: 0 / 1 / 3
       ===================================================== */

    {
        id: "mofo",

        categoria:
            "Percepção do ambiente",

        pergunta:
            "Existe cheiro de mofo ou sinais de umidade no ambiente?",

        ajuda:
            "Considere odor característico, manchas, paredes úmidas ou outros sinais perceptíveis.",

        pontua: true,

        opcoes: [

            {
                texto: "Nunca",
                valor: 0
            },

            {
                texto: "Às vezes",
                valor: 1
            },

            {
                texto: "Frequentemente",
                valor: 3
            }

        ]
    },


    /* =====================================================
       7 — IRRITAÇÃO
       Pontuação: 0 / 1 / 3
       ===================================================== */

    {
        id: "irritacao",

        categoria:
            "Como você se sente",

        pergunta:
            "Você sente irritação nos olhos, nariz ou garganta enquanto permanece no local?",

        ajuda:
            "Considere sintomas percebidos durante sua permanência nesse ambiente.",

        pontua: true,

        opcoes: [

            {
                texto: "Nunca",
                valor: 0
            },

            {
                texto: "Às vezes",
                valor: 1
            },

            {
                texto: "Frequentemente",
                valor: 3
            }

        ]
    },


    /* =====================================================
       8 — INTENÇÃO DE COMPRA
       NÃO entra no score
       ===================================================== */

    {
        id: "intencao_compra",

        categoria:
            "Sobre a solução",

        pergunta:
            "Você contrataria um serviço de monitoramento da qualidade do ar para o seu ambiente?",

        ajuda:
            "Queremos entender seu interesse em uma solução contínua de monitoramento.",

        pontua: false,

        opcoes: [

            {
                texto: "Sim",
                valor: "sim"
            },

            {
                texto:
                    "Talvez, dependendo do valor",

                valor:
                    "talvez_valor"
            },

            {
                texto:
                    "Talvez, dependendo dos benefícios oferecidos",

                valor:
                    "talvez_beneficios"
            },

            {
                texto: "Não",
                valor: "nao"
            },

            {
                texto: "Ainda não sei",
                valor: "nao_sei"
            }

        ]
    },


    /* =====================================================
       9 — PERCEPÇÃO DA SOLUÇÃO
       NÃO entra no score
       ===================================================== */

    {
        id: "percepcao_solucao",

        categoria:
            "Sobre a solução",

        pergunta:
            "O que você acha de um sistema que monitora e analisa a qualidade do ar do ambiente e fornece informações para auxiliar na tomada de decisões e na melhoria da qualidade do ar?",

        ajuda:
            "Considere a utilidade desse tipo de solução para o ambiente onde você permanece.",

        pontua: false,

        opcoes: [

            {
                texto:
                    "Muito interessante",

                valor:
                    "muito_interessante"
            },

            {
                texto:
                    "Interessante",

                valor:
                    "interessante"
            },

            {
                texto:
                    "Pouco interessante",

                valor:
                    "pouco_interessante"
            },

            {
                texto:
                    "Não vejo necessidade",

                valor:
                    "sem_necessidade"
            },

            {
                texto:
                    "Gostaria de conhecer melhor",

                valor:
                    "quero_conhecer"
            }

        ]
    }

];


/* =========================================================
   ESTADO DO QUIZ
   ========================================================= */

let perguntaAtual = 0;

let respostas = {};


/* =========================================================
   ELEMENTOS DA PÁGINA
   ========================================================= */

const startScreen =
    document.getElementById(
        "start-screen"
    );

const quizScreen =
    document.getElementById(
        "quiz-screen"
    );

const resultScreen =
    document.getElementById(
        "result-screen"
    );


const startButton =
    document.getElementById(
        "start-button"
    );

const nextButton =
    document.getElementById(
        "next-button"
    );

const backButton =
    document.getElementById(
        "back-button"
    );

const restartButton =
    document.getElementById(
        "restart-button"
    );


const questionCounter =
    document.getElementById(
        "question-counter"
    );

const progressPercent =
    document.getElementById(
        "progress-percent"
    );

const progressBar =
    document.getElementById(
        "progress-bar"
    );

const questionCategory =
    document.getElementById(
        "question-category"
    );

const questionText =
    document.getElementById(
        "question-text"
    );

const questionHelp =
    document.getElementById(
        "question-help"
    );

const optionsContainer =
    document.getElementById(
        "options-container"
    );


/* =========================================================
   TROCAR DE TELA
   ========================================================= */

function mostrarTela(tela) {

    startScreen.classList.remove(
        "active"
    );

    quizScreen.classList.remove(
        "active"
    );

    resultScreen.classList.remove(
        "active"
    );


    tela.classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   INICIAR QUIZ
   ========================================================= */

function iniciarQuiz() {

    perguntaAtual = 0;

    respostas = {};


    mostrarTela(
        quizScreen
    );


    mostrarPergunta();

}


/* =========================================================
   MOSTRAR PERGUNTA
   ========================================================= */

function mostrarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];


    const numero =
        perguntaAtual + 1;


    const total =
        perguntas.length;


    const percentual =
        Math.round(
            (numero / total) * 100
        );


    questionCounter.textContent =
        `Pergunta ${numero} de ${total}`;


    progressPercent.textContent =
        `${percentual}%`;


    progressBar.style.width =
        `${percentual}%`;


    questionCategory.textContent =
        pergunta.categoria;


    questionText.textContent =
        pergunta.pergunta;


    questionHelp.textContent =
        pergunta.ajuda || "";


    optionsContainer.innerHTML = "";


    pergunta.opcoes.forEach(
        (opcao) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "option";


            const respostaSalva =
                respostas[
                    pergunta.id
                ];


            if (
                respostaSalva &&
                respostaSalva.valor ===
                    opcao.valor
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.innerHTML = `

                <span
                    class="option-marker"
                ></span>

                <span
                    class="option-text"
                >
                    ${opcao.texto}
                </span>

            `;


            button.addEventListener(
                "click",
                () =>
                    selecionarOpcao(
                        pergunta,
                        opcao,
                        button
                    )
            );


            optionsContainer
                .appendChild(
                    button
                );

        }
    );


    /* BOTÃO VOLTAR */

    if (
        perguntaAtual === 0
    ) {

        backButton.style.visibility =
            "hidden";

    } else {

        backButton.style.visibility =
            "visible";

    }


    /* BOTÃO CONTINUAR */

    nextButton.disabled =
        !respostas[pergunta.id];


    if (
        perguntaAtual ===
        perguntas.length - 1
    ) {

        nextButton.textContent =
            "Ver resultado";

    } else {

        nextButton.textContent =
            "Continuar";

    }

}


/* =========================================================
   SELECIONAR RESPOSTA
   ========================================================= */

function selecionarOpcao(
    pergunta,
    opcao,
    button
) {

    /*
       IMPORTANTE:

       Salvamos o objeto completo da resposta.

       Isso permite usar:

       resposta.valor
       resposta.texto
       resposta.pontua
    */

    respostas[
        pergunta.id
    ] = {

        valor:
            opcao.valor,

        texto:
            opcao.texto,

        pontua:
            pergunta.pontua

    };


    const botoes =
        optionsContainer
            .querySelectorAll(
                ".option"
            );


    botoes.forEach(
        (item) => {

            item.classList.remove(
                "selected"
            );

        }
    );


    button.classList.add(
        "selected"
    );


    nextButton.disabled =
        false;

}


/* =========================================================
   PRÓXIMA PERGUNTA
   ========================================================= */

function proximaPergunta() {

    const pergunta =
        perguntas[
            perguntaAtual
        ];


    /*
       Não permite avançar
       sem responder.
    */

    if (
        !respostas[
            pergunta.id
        ]
    ) {

        return;

    }


    if (
        perguntaAtual <
        perguntas.length - 1
    ) {

        perguntaAtual++;

        mostrarPergunta();

    } else {

        finalizarQuiz();

    }

}


/* =========================================================
   VOLTAR
   ========================================================= */

function voltarPergunta() {

    if (
        perguntaAtual > 0
    ) {

        perguntaAtual--;

        mostrarPergunta();

    }

}


/* =========================================================
   CALCULAR PONTUAÇÃO
   ========================================================= */

function calcularPontuacao() {

    let total = 0;


    perguntas.forEach(
        (pergunta) => {

            /*
               Perguntas com
               pontua: false
               são ignoradas.
            */

            if (
                !pergunta.pontua
            ) {

                return;

            }


            const resposta =
                respostas[
                    pergunta.id
                ];


            if (
                resposta
            ) {

                total +=
                    Number(
                        resposta.valor
                    ) || 0;

            }

        }
    );


    return total;

}


/* =========================================================
   FINALIZAR QUIZ
   ========================================================= */

function finalizarQuiz() {

    const pontos =
        calcularPontuacao();


    /* =====================================================
       OBJETO ENVIADO AO GOOGLE SHEETS
       ===================================================== */

    const dados = {

        /*
           DATA
        */

        data:
            new Date()
                .toISOString(),


        /*
           CARACTERIZAÇÃO DO AMBIENTE
        */

        ambiente:
            respostas
                .ambiente
                ?.texto ?? "",


        area:
            respostas
                .area
                ?.texto ?? "",


        /*
           PERGUNTAS QUE FORMAM O SCORE
        */

        abafado:
            respostas
                .abafado
                ?.valor ?? "",


        cansaco:
            respostas
                .cansaco
                ?.valor ?? "",


        concentracao:
            respostas
                .concentracao
                ?.valor ?? "",


        mofo:
            respostas
                .mofo
                ?.valor ?? "",


        irritacao:
            respostas
                .irritacao
                ?.valor ?? "",


        /*
           SCORE FINAL
           Máximo = 15
        */

        pontos:
            pontos,


        /*
           PERGUNTA 8

           Enviamos o TEXTO,
           não o código interno.
        */

        intencao_compra:
            respostas
                .intencao_compra
                ?.texto ?? "",


        /*
           PERGUNTA 9

           Enviamos o TEXTO,
           não o código interno.
        */

        percepcao_solucao:
            respostas
                .percepcao_solucao
                ?.texto ?? ""

    };


    /* =====================================================
       DEBUG

       Abra F12 → Console para verificar
       exatamente o que será enviado.
       ===================================================== */

    console.log(
        "===================================="
    );

    console.log(
        "RESPOSTAS COMPLETAS:",
        respostas
    );

    console.log(
        "DADOS ENVIADOS AO GOOGLE SHEETS:",
        dados
    );

    console.log(
        "INTENÇÃO DE COMPRA:",
        dados.intencao_compra
    );

    console.log(
        "PERCEPÇÃO DA SOLUÇÃO:",
        dados.percepcao_solucao
    );

    console.log(
        "===================================="
    );


    /*
       ENVIA PARA O GOOGLE SHEETS
    */

    enviarResultado(
        dados
    );


    /*
       MOSTRA O RESULTADO
       PARA O USUÁRIO
    */

    mostrarResultado(
        pontos
    );

}


/* =========================================================
   ENVIAR RESULTADO PARA GOOGLE SHEETS
   ========================================================= */

async function enviarResultado(
    dados
) {

    try {

        const payload =
            JSON.stringify(
                dados
            );


        console.log(
            "JSON ENVIADO:",
            payload
        );


        await fetch(
            GOOGLE_SCRIPT_URL,
            {

                method:
                    "POST",

                /*
                   Necessário para envio
                   simples do GitHub Pages
                   ao Apps Script.
                */

                mode:
                    "no-cors",


                headers: {

                    "Content-Type":
                        "text/plain;charset=utf-8"

                },


                body:
                    payload

            }
        );


        /*
           IMPORTANTE:

           Como usamos no-cors,
           o navegador não permite
           inspecionar a resposta
           HTTP do Apps Script.

           Este log confirma que
           o fetch foi disparado.
        */

        console.log(
            "Envio ao Google Apps Script realizado."
        );


    } catch (
        erro
    ) {

        console.error(
            "Erro ao enviar resultado:",
            erro
        );

    }

}


/* =========================================================
   MOSTRAR RESULTADO
   ========================================================= */

function mostrarResultado(
    pontos
) {

    const score =
        document.getElementById(
            "result-score"
        );


    const title =
        document.getElementById(
            "result-title"
        );


    const description =
        document.getElementById(
            "result-description"
        );


    const recommendation =
        document.getElementById(
            "result-recommendation"
        );


    const indicator =
        document.getElementById(
            "result-indicator"
        );


    score.textContent =
        pontos;


    indicator.classList.remove(
        "low",
        "medium",
        "high"
    );


    /* =====================================================
       RESULTADO BAIXO
       0–3
       ===================================================== */

    if (
        pontos <= 3
    ) {

        indicator.classList.add(
            "low"
        );


        title.textContent =
            "Baixa percepção de desconforto";


        description.textContent =
            "Suas respostas indicam poucos sinais perceptíveis de desconforto relacionados ao ambiente.";


        recommendation.textContent =
            "Continue atento às condições de ventilação, umidade e conforto do ambiente. A percepção individual é útil, mas somente medições podem caracterizar objetivamente a qualidade do ar.";

    }


    /* =====================================================
       RESULTADO INTERMEDIÁRIO
       4–8
       ===================================================== */

    else if (
        pontos <= 8
    ) {

        indicator.classList.add(
            "medium"
        );


        title.textContent =
            "Alguns sinais merecem atenção";


        description.textContent =
            "Você relatou alguns sinais que podem estar associados às condições do ambiente interno.";


        recommendation.textContent =
            "Vale observar ventilação, ocupação, umidade, presença de odores e outros fatores ambientais. Uma avaliação objetiva da qualidade do ar pode ajudar a entender melhor essas condições.";

    }


    /* =====================================================
       RESULTADO ALTO
       9–15
       ===================================================== */

    else {

        indicator.classList.add(
            "high"
        );


        title.textContent =
            "Vários sinais foram percebidos";


        description.textContent =
            "Suas respostas mostram uma frequência maior de desconfortos ou sinais percebidos durante a permanência no ambiente.";


        recommendation.textContent =
            "Considere investigar as condições do ambiente, incluindo ventilação, dióxido de carbono, material particulado, umidade e outros indicadores de qualidade do ar. Medições ambientais são necessárias para uma avaliação objetiva.";

    }


    mostrarTela(
        resultScreen
    );

}


/* =========================================================
   REINICIAR QUIZ
   ========================================================= */

function reiniciarQuiz() {

    perguntaAtual = 0;

    respostas = {};


    mostrarTela(
        startScreen
    );

}


/* =========================================================
   EVENTOS
   ========================================================= */

startButton.addEventListener(
    "click",
    iniciarQuiz
);


nextButton.addEventListener(
    "click",
    proximaPergunta
);


backButton.addEventListener(
    "click",
    voltarPergunta
);


restartButton.addEventListener(
    "click",
    reiniciarQuiz
);
