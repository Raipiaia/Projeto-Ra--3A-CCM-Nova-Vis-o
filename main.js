const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que a inteligência artificial pode melhorar a eficiência no trabalho?",
        alternativas: [
            {
                texto: "Sim, definitivamente.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sim, em algumas áreas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não, não vejo benefícios.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não sei.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é a sua principal preocupação em relação ao uso da inteligência artificial?",
        alternativas: [
            {
                texto: "Perda de empregos.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Privacidade e segurança de dados.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Tomada de decisões erradas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não tenho preocupações",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Você já utilizou alguma ferramenta de inteligência artificial no seu dia a dia?",
        alternativas: [
            {
                texto: "Sim, frequentemente.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sim, ocasionalmente",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não, mas estou interessado.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não, e não tenho interesse.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Na sua opinião, qual é o maior benefício da inteligência artificial?",
        alternativas: [
            {
                texto: "Aumento da produtividade.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Melhoria na tomada de decisões.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Avanços em pesquisa e desenvolvimento.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Facilitação de tarefas cotidianas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não vejo benefícios.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Você acha que a inteligência artificial deve ser regulamentada?",
        alternativas: [
            {
                texto: "Sim, é essencial.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sim, mas com cautela.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não, deve ser livre.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não tenho uma opinião clara.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Como você se sente em relação à possibilidade de máquinas tomarem decisões importantes?",
        alternativas: [
            {
                texto: "Muito confortável.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Confortável, mas com reservas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Incomodado.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Muito incomodado.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial terá um impacto positivo na sociedade nos próximos 10 anos?",
        alternativas: [
            {
                texto: "Sim, será transformador.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sim, mas com desafios.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não, será mais negativo.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não tenho certeza.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual área você acredita que será mais afetada pela inteligência artificial?",
        alternativas: [
            {
                texto: "Saúde.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Educação.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Transporte.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Entretenimento.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não tenho uma opinião definida.",
                afirmacao: "afirmacao"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        motraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2025...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();