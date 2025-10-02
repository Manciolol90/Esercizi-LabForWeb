document.addEventListener("DOMContentLoaded", function () {
  const gameCardsJSON = `[
    {
      "title": "Luna Park Caotico",
      "type": "Luogo",
      "encounterCost": 3,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Montagne Russe Infinite",
          "timeCost": 2
        },
        {
          "name": "Tunnel del Terrore Ridicoloso",
          "timeCost": 1
        },
        {
          "name": "Stand del Tiro al Bersaglio Magico",
          "timeCost": 3
        }
      ],
      "description": "Un colorato luna park con attrazioni esagerate e personaggi stravaganti.",
      "image": "./img/luna-park.jpg"
    },
    {
      "title": "Il Gatto Saggio",
      "type": "Personaggio",
      "encounterCost": 2,
      "bonusEffect": 1,
      "nextCards": [
        {
          "name": "Pergamena della Verità",
          "timeCost": 1
        },
        {
          "name": "Libro degli Enigmi",
          "timeCost": 2
        }
      ],
      "description": "Un gatto antropomorfo con occhiali e una sciarpa, che offre consigli criptici.",
      "image": "./img/gatto.jpg"
    },
    {
      "title": "Biblioteca del Mistero",
      "type": "Luogo",
      "encounterCost": 4,
      "bonusEffect": 3,
      "nextCards": [
        {
          "name": "Volume Perduto di Alchimia",
          "timeCost": 3
        },
        {
          "name": "Diario Segreto del Bibliotecario",
          "timeCost": 1
        }
      ],
      "description": "Una biblioteca antica con libri che contengono segreti.",
      "image": "./img/biblioteca.jpg"
    },
    {
      "title": "Il Fornaio Errante",
      "type": "Personaggio",
      "encounterCost": 1,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Torta della Forza",
          "timeCost": 1
        },
        {
          "name": "Biscotti dell'Agilità",
          "timeCost": 2
        }
      ],
      "description": "Un fornaio allegro su un furgoncino di dolci magici.",
      "image": "./img/panettiere.jpg"   
    },
    {
      "title": "Isola Fluttuante",
      "type": "Luogo",
      "encounterCost": 5,
      "bonusEffect": 3,
      "nextCards": [
        {
          "name": "Nido del Drago Aereo",
          "timeCost": 3
        },
        {
          "name": "Giardino Zen Volante",
          "timeCost": 1
        },
        {
          "name": "Fonte di Mana Celeste",
          "timeCost": 2
        }
      ],
      "description": "Un'isola sospesa in cielo, con creature volanti e piante che parlano.",
      "image": "./img/isola.jpg"
    },
    {
      "title": "Detective del Tempo",
      "type": "Personaggio",
      "encounterCost": 3,
      "bonusEffect": 0,
      "nextCards": [
        {
          "name": "Indizio d'Epoca Vittoriana",
          "timeCost": 1
        },
        {
          "name": "Ricordo del Futuro",
          "timeCost": 2
        },
        {
          "name": "Orologio Spaziotemporale",
          "timeCost": 3
        }
      ],
      "description": "Un investigatore che può viaggiare nel tempo, offrendo indizi da varie ere.",
      "image": "./img/detective.jpg"
    },
    {
      "title": "Mercato delle Meraviglie",
      "type": "Luogo",
      "encounterCost": 2,
      "bonusEffect": 1,
      "nextCards": [
        {
          "name": "Stallone delle Pozioni Rare",
          "timeCost": 2
        },
        {
          "name": "Banco degli Amuleti Perduti",
          "timeCost": 1
        },
        {
          "name": "Tendone delle Carte Fatate",
          "timeCost": 3
        }
      ],
      "description": "Un mercato notturno con oggetti magici e venditori mitologici.",
      "image": "./img/mercato.jpg"
    },
    {
      "title": "La Pirata dello Spazio",
      "type": "Personaggio",
      "encounterCost": 4,
      "bonusEffect": -1,
      "nextCards": [
        {
          "name": "Assalto al Convoglio Stellare",
          "timeCost": 3
        },
        {
          "name": "Tesoro del Pianeta Dimenticato",
          "timeCost": 2
        }
      ],
      "description": "Capitano di una nave spaziale a forma di galeone, naviga i flussi astrali.",
      "image": "./img/pirata.jpg"
    },
    {
      "title": "Giardini Sospesi di Harmonia",
      "type": "Luogo",
      "encounterCost": 5,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Sentiero dei Fiori Cantanti",
          "timeCost": 1
        },
        {
          "name": "Laghetto delle Ninfe",
          "timeCost": 2
        },
        {
          "name": "Albero della Saggezza Antica",
          "timeCost": 3
        }
      ],
      "description": "Giardini lussureggianti che fluttuano in bolle d'aria, con piante e animali fantastici.",
      "image": "./img/giardino.jpg"
    },
    {
      "title": "L'Inventore Folle",
      "type": "Personaggio",
      "encounterCost": 2,
      "bonusEffect": -2,
      "nextCards": [
        {
          "name": "Macchina del Tempo Difettosa",
          "timeCost": 3
        },
        {
          "name": "Robot Assistente Maldestro",
          "timeCost": 1
        },
        {
          "name": "Razzo Sperimentale",
          "timeCost": 2
        }
      ],
      "description": "Uno scienziato con un laboratorio di invenzioni incredibili ma spesso difettose.",
      "image": "./img/scienziato.jpg"
    },
    {
      "title": "Città Sotterranea di Lumina",
      "type": "Luogo",
      "encounterCost": 4,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Cripta dei Cristalli Luminosi",
          "timeCost": 2
        },
        {
          "name": "Laboratorio Segreto Sotterraneo",
          "timeCost": 3
        },
        {
          "name": "Piazza del Mercato Nascosto",
          "timeCost": 1
        }
      ],
      "description": "Una città in una caverna gigante, illuminata da cristalli.",
      "image": "./img/citta.jpg"
    },
    {
      "title": "Il Cantastorie Fantasma",
      "type": "Personaggio",
      "encounterCost": 3,
      "bonusEffect": 1,
      "nextCards": [
        {
          "name": "Racconto delle Origini Dimenticate",
          "timeCost": 3
        },
        {
          "name": "Leggenda del Guerriero Senza Tempo",
          "timeCost": 1
        },
        {
          "name": "Saga del Re Perduto",
          "timeCost": 2
        }
      ],
      "description": "Un'ombra eterea che narra storie del passato, presente e futuro.",
      "image": "./img/cantastorie.jpg"
    },
    {
      "title": "Accademia di Magia Antica",
      "type": "Luogo",
      "encounterCost": 5,
      "bonusEffect": 3,
      "nextCards": [
        {
          "name": "Aula delle Pozioni Avanzate",
          "timeCost": 2
        },
        {
          "name": "Biblioteca degli Incantesimi Obsoleti",
          "timeCost": 1
        },
        {
          "name": "Torre dell'Astronomia Magica",
          "timeCost": 3
        }
      ],
      "description": "Un'antica scuola di magia con aule e incantesimi dimenticati.",
      "image": "./img/scuola.jpg"
    },
    {
      "title": "La Ladra di Sogni",
      "type": "Personaggio",
      "encounterCost": 1,
      "bonusEffect": -3,
      "nextCards": [
        {
          "name": "Memoria Rubata",
          "timeCost": 2
        },
        {
          "name": "Incubo Intrappolato",
          "timeCost": 3
        },
        {
          "name": "Sogno D'oro",
          "timeCost": 1
        }
      ],
      "description": "Una misteriosa ladra che ruba ricordi e sogni, lasciando indizi per il recupero.",
      "image": "./img/ladra.jpg"
    },
    {
      "title": "Il Circo delle Illusioni",
      "type": "Luogo",
      "encounterCost": 2,
      "bonusEffect": 0,
      "nextCards": [
        {
          "name": "Tenda della Divinazione",
          "timeCost": 1
        },
        {
          "name": "Spettacolo di Fuoco Fatato",
          "timeCost": 2
        },
        {
          "name": "Acrobazie Aeree Mozzafiato",
          "timeCost": 3
        }
      ],
      "description": "Un circo itinerante dove nulla è come sembra, con artisti che sfidano la realtà.",
      "image": "./img/circo.jpg"
    }
  ]`;

  let timoutIds = [];
  const carte = JSON.parse(gameCardsJSON);
  const container = document.querySelector(".container");
  function crea_mazzo(carte) {
    timoutIds.forEach((id) => clearTimeout(id));

    for (let i = 0; i < carte.length; i++) {
      const timeoutId = setTimeout(function () {
        const carta = carte[i];
        const format_Carta = `<div class="card">
      <div class="card__front">
        <div class="card__header">
          <img src="${carta.image}" alt="${carta.description}">
  
          <div class="card__header-badges">
            <div class="badge badge--encounter-cost">${
              carta.encounterCost
            }</div>
            <div class=" badge badge--bonus-effect">${carta.bonusEffect}</div>
          </div>
        </div>
        <div class="card__content">
          <h2 class="title">
            ${carta.title}
          </h2>
          <p class="description">
            ${carta.description}
          </p>
        </div>
      </div>
  
      <div class="card__back">
        <h2 class="title">Next cards</h2>
        <ul>
          ${inserisci_li(carta)}
        </ul>
      </div>
      <div class="card__footer">
        <button class="btn read-more">Flip</button>
      </div>
    </div>`;

        function inserisci_li(carta) {
          let lista = "";
          for (let j = 0; j < carta.nextCards.length; j++) {
            const voce_menu = `
        <li class="next-card">
          <h3>${carta.nextCards[j].name}</h3>
          <p>${carta.nextCards[j].timeCost}</p>     
        </li>`;
            lista += voce_menu;
          }
          return lista;
        }
        container.innerHTML += format_Carta;
        let prossima_carta = container.querySelector(".card:last-child");

        setTimeout(function () {
          prossima_carta.classList.add("show");
        }, 10);
      }, i * 600);
      timoutIds.push(timeoutId);
    }
    container.addEventListener("click", function (e) {
      //console.log(e.target);
      if (e.target.classList.contains("read-more")) {
        const card = e.target.closest(".card");
        card.classList.toggle("is-flipped");
      }
    });
  }

  crea_mazzo(carte);

  const search_btn = document.querySelector(".search__button");
  const reset_btn = document.querySelector(".reset__button");
  const input = document.querySelector(".search__input");

  search_btn.addEventListener("click", function () {
    if (input.value === "") {
      container.innerHTML = "";
      crea_mazzo(carte);
      return;
    } else {
      const carte_trovate = carte.filter(function (carta) {
        return carta.title.toLowerCase().includes(input.value.toLowerCase());
      });
      container.innerHTML = "";
      crea_mazzo(carte_trovate);
    }
  });

  input.addEventListener("keyup", function () {
    container.innerHTML = "";
    const carte_trovate = carte.filter(function (carta) {
      return carta.title.toLowerCase().includes(input.value.toLowerCase());
    });
    crea_mazzo(carte_trovate);
  });

  reset_btn.addEventListener("click", function () {
    input.value = "";
    container.innerHTML = "";
    crea_mazzo(carte);
  });
});
