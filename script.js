// script.js

const storyText = document.getElementById("story-text");
const optionsDiv = document.getElementById("options");

const story = {
  start: {
    text: "Você é a princesa ruiva, conhecida por sua coragem e inteligência. Em uma manhã tranquila no castelo, você ouve uma batida na porta. Você se aproxima e vê uma carta misteriosa. O que você faz?",
    options: [
      {
        text: "Abrir a carta.",
        next: "openLetter"
      },
      {
        text: "Ignorar a carta e sair para explorar o castelo.",
        next: "exploreCastle"
      }
    ]
  },
  openLetter: {
    text: "A carta revela um mapa antigo e uma mensagem enigmática: 'Encontre a chave do reino perdido antes que seja tarde.' Você decide seguir o mapa. O que você faz?",
    options: [
      {
        text: "Seguir o mapa para o bosque proibido.",
        next: "forest"
      },
      {
        text: "Procurar mais pistas no castelo antes de sair.",
        next: "searchCastle"
      }
    ]
  },
  exploreCastle: {
    text: "Enquanto caminha pelos corredores do castelo, você encontra uma porta secreta. Você se pergunta onde ela leva. O que você faz?",
    options: [
      {
        text: "Entrar pela porta secreta.",
        next: "secretRoom"
      },
      {
        text: "Continuar explorando o castelo.",
        next: "exploreMoreCastle"
      }
    ]
  },
  forest: {
    text: "O bosque proibido é denso e cheio de sombras. De repente, uma figura misteriosa aparece diante de você. Ela lhe oferece um desafio. O que você faz?",
    options: [
      {
        text: "Aceitar o desafio.",
        next: "acceptChallenge"
      },
      {
        text: "Recusar e tentar voltar para o castelo.",
        next: "returnCastle"
      }
    ]
  },
  searchCastle: {
    text: "Você decide explorar o castelo mais a fundo e encontra uma passagem secreta. Ela leva até uma sala cheia de livros antigos e poções. O que você faz?",
    options: [
      {
        text: "Investigar os livros.",
        next: "studyBooks"
      },
      {
        text: "Pegar uma poção misteriosa.",
        next: "takePotion"
      }
    ]
  },
  secretRoom: {
    text: "A porta secreta leva a um grande salão com uma enorme estátua no centro. Você percebe que há algo escondido na base da estátua. O que você faz?",
    options: [
      {
        text: "Examinar a base da estátua.",
        next: "examineStatue"
      },
      {
        text: "Sair da sala e continuar explorando o castelo.",
        next: "exploreMoreCastle"
      }
    ]
  },
  exploreMoreCastle: {
    text: "Enquanto explora mais o castelo, você encontra um estranho símbolo na parede. Você tenta decifrá-lo, mas não consegue. O que você faz?",
    options: [
      {
        text: "Continuar procurando pistas no castelo.",
        next: "searchCastle"
      },
      {
        text: "Sair do castelo e seguir em frente.",
        next: "leaveCastle"
      }
    ]
  },
  acceptChallenge: {
    text: "O desafio é difícil, mas com sua coragem e astúcia, você consegue superá-lo. Como recompensa, a figura misteriosa lhe dá a chave do reino perdido. Você agora pode salvar o reino! Parabéns, princesa ruiva!",
    options: [
      {
        text: "Jogar novamente.",
        next: "start"
      }
    ]
  },
  returnCastle: {
    text: "Você tenta voltar para o castelo, mas o bosque proibido parece ter se tornado ainda mais sombrio. A figura misteriosa desaparece, e você fica perdida. O reino precisa de você!",
    options: [
      {
        text: "Tentar novamente.",
        next: "forest"
      }
    ]
  },
  studyBooks: {
    text: "Os livros antigos revelam muitos segredos sobre o reino, incluindo um feitiço para proteger o castelo. Você decide usá-lo para melhorar as defesas do castelo e manter o reino seguro.",
    options: [
      {
        text: "Jogar novamente.",
        next: "start"
      }
    ]
  },
  takePotion: {
    text: "A poção misteriosa lhe dá força e coragem, mas também provoca um encantamento que a faz sentir-se mais próxima do reino perdido. Agora, você pode restaurá-lo.",
    options: [
      {
        text: "Jogar novamente.",
        next: "start"
      }
    ]
  },
  examineStatue: {
    text: "Você encontra um compartimento secreto na base da estátua e encontra uma chave mágica. Essa chave pode abrir qualquer porta no reino perdido.",
    options: [
      {
        text: "Jogar novamente.",
        next: "start"
      }
    ]
  },
  leaveCastle: {
    text: "Você deixa o castelo para explorar o reino, pronta para descobrir mais sobre a lenda da chave perdida. Sua aventura está apenas começando.",
    options: [
      {
        text: "Jogar novamente.",
        next: "start"
      }
    ]
  }
};

let currentState = "start";

function updateStory() {
  const state = story[currentState];
  storyText.innerText = state.text;
  optionsDiv.innerHTML = '';
  state.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.onclick = () => {
      currentState = option.next;
      updateStory();
    };
    optionsDiv.appendChild(button);
  });
}

updateStory();
