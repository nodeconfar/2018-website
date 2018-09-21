/*
## Rational
  I don't wanted to bloat the website with a i18n library so I came up with this simple solution.

## Translations
  Since the translations wasn't part of the challenge I just translated only `index.html` until the Tickets section using Google Translate.
  Only for demo and documentation purposes.

## How to use
  1. Add a new key to the translations object inside the "en" or "es" key and its translation.
  ```javascript
  // I.e: Let's add the "date" key

  const translations = {
    en: {
      date: 'OCTOBER 18th-20th, 2018',
    },
    es: {
      date: 'OCTUBRE 18-20, 2018',
    },
  }
  ```

  2. Add an attribute "data-i18n" to the element that needs that translation with the value of the key created.
  ```html
  <!-- I.e: Let's add the attribute "data-i18n" and the value of the key just created "date" to the element needing that translation -->
    <p class="f3 green ba b--green pv2 ph4 center" data-i18n="date">OCTOBER 18th-20th, 2018</p>
  ```

## Reminder
- There are two `console.error()` defined in case a key is not defined or a element needs a "data-i18n" attribute
- Be careful to what element you are adding the "data-i18n" attribute since this code uses `textContent` could remove inner childrens of that element.
  So to avoid this scenario wrap your text in a `span` element with the `data-i18n` attribute on it.

*/

const translations = {
  en: {
    heroSection: {
      map: 'see map',
      date: 'OCTOBER 18th-20th, 2018',
    },
    aboutSection: {
      title: 'about',
      description: {
        firstPart: `Argentina is among the first international Node.js conferences taking place in Latin American territory, and a not-for-profit community effort to push Node.js forward in Argentina and Latin America as a whole.`,
        secondPart: `This year’s conference will be a three–day event in sunny Buenos Aires, Argentina, held during October 18th, 19th & 20th. Both action-packed days will be comprised of internationally acclaimed, regional, and local speakers.`,
        thirdPart: `We are expecting Noders, JavaScripters, front-enders, and other programmers from all over the world.`,
      },
      previous: 'previous editions',
    },
    speakersSection: {
      title: 'speakers',
      speakers: {
        suz: {
          fullName: 'Suz Hinton',
          position: 'Cloud Developer Advocate en Microsoft',
          bio:
            'Suz is a Cloud Developer Advocate at Microsoft. Suz specializes in accessibility, hardware, JavaScript, and cloud computing. She likes dreaming up fun electronic projects in her spare time.',
        },
        dan: {
          fullName: 'Dan Shaw',
          position: 'Strategic Advisor',
          bio: `
            Dan Shaw, aka “dshaw”, has dedicated his career to growing the Node.js Ecosystem. He was instrumental in the formation of the Node.js Foundation where he served on the Board as Director. He is known as "The Godfather of Node.js” for his tireless efforts to build community and align the needs of developers and business leaders.
            He is a keynote speaker and speaks about Leadership, Node.js, JavaScript and Digital Transformation. He is recognizable as the “Voice of Node.js” as long-time host of the NodeUp podcast. He has created numerous events like EnterpriseJS, NodeDay, SFNode, SFNodeBots, and Nodebots Day to provide opportunities to share knowledge and learn.
            He created the first consulting company dedicated to Node.js called The Node Firm and then the first commercial entity to productize Node.js with NodeSource. Today, Dan Shaw works across the industry providing leadership as a Strategic Advisor to companies looking grow their presence and work effectively with Node.js.
            `,
        },
        franziska: {
          fullName: 'Franziska Hinkelman',
          position: 'Software engineer @ Google Cloud Platform',
          bio: `
            Franziska is a member of the Node.js Technical Steering Committee and an expert on ES6 performance. She has a Ph.D. in mathematics and is a software engineer at Google on the Cloud Platform team in New York. Previously, she was on the Chrome V8 team. When she's not working hard on making Node.js better on the Cloud Platform, she's probably out riding horses.
          `,
        },
        tara: {
          fullName: 'Tara Vancil',
          position: 'Co-creator of the Beaker Browser',
          bio: `
            Tara is the co-creator of the Beaker Browser, an experimental browser for exploring and building the peer-to-peer Web. She co-founded Blue Link Labs, the team of peer-to-peer enthusiasts behind the Beaker Browser and hashbase.io. She's dedicated to building the Web of tomorrow as a Web for all.
          `,
        },
      },
    },
    ticketsSection: {
      title: 'tickets',
      description: {
        firstPart: `we want to meet you!`,
        secondPart: `Full two-day access to Ciudad Cultural Konex on October 19th & 20th.`,
        thirdPart: `This ticket will also get you: goodie bag (including top quality stickers and a T-Shirt of your size), live translating (Spanish -> English, English -> Spanish), lunches for October 19th & 20th, breakfast for October 19th, 3 additional coffeebreaks between October 19th & 20th`,
      },
      tickets: {
        early: 'early birds',
        soldOut: 'Tickets are sold out!',
        thanks: 'Thanks to all of you for supporting the conference',
      },
    },
  },
  es: {
    heroSection: {
      map: 'ver mapa',
      date: 'OCTUBRE 18-20, 2018',
    },
    aboutSection: {
      title: 'acerca de',
      description: {
        firstPart: `Argentina se encuentra entre las primeras conferencias internacionales de Node.js que tienen lugar en territorio latinoamericano, y un esfuerzo comunitario sin ánimo de lucro para impulsar a Node.js en Argentina y Latinoamérica en su conjunto.`,
        secondPart: `La conferencia de este año será un evento de tres días en el soleado Buenos Aires, Argentina, celebrado durante los días 18, 19 y 20 de octubre. Ambas jornadas llenas de acción estarán compuestas por oradores internacionalmente aclamados, regionales y locales.`,
        thirdPart: `Estamos esperando Noders, JavaScripters, front-enders y otros programadores de todo el mundo.`,
      },
      previous: 'ediciones previas',
    },
    speakersSection: {
      title: 'oradores',
      speakers: {
        suz: {
          fullName: 'Suz Hinton',
          position: 'Cloud Developer Advocate en Microsoft',
          bio:
            'Suz es una defensora de desarrolladores de nube en Microsoft. Suz se especializa en accesibilidad, hardware, JavaScript y computación en la nube. A ella le gusta soñar proyectos electrónicos divertidos en su tiempo libre.',
        },
        dan: {
          fullName: 'Dan Shaw',
          position: 'Asesor Estratégico',
          bio: `
            Dan Shaw, alias "dshaw", ha dedicado su carrera al crecimiento del Ecosistema Node.js. Jugó un papel decisivo en la formación de la Fundación Node.js, donde se desempeñó en la Junta como Director. Es conocido como "El Padrino de Node.js" por sus incansables esfuerzos para construir una comunidad y alinear las necesidades de los desarrolladores y líderes empresariales.
            Es un orador principal y habla sobre liderazgo, Node.js, JavaScript y la transformación digital. Él es reconocible como la "Voz de Node.js" como host desde hace mucho tiempo del podcast NodeUp. Ha creado numerosos eventos como EnterpriseJS, NodeDay, SFNode, SFNodeBots y Nodebots Day para brindar oportunidades de compartir conocimiento y aprender.
            Creó la primera empresa de consultoría dedicada a Node.js llamada The Node Firm y luego la primera entidad comercial en producir Node.js con NodeSource. Hoy en día, Dan Shaw trabaja en toda la industria brindando liderazgo como asesor estratégico para que las empresas que buscan aumentar su presencia y trabajar de manera efectiva con Node.js.
          `,
        },
        franziska: {
          fullName: 'Franziska Hinkelman',
          position: 'Ingeniera de software @ Google Cloud Platform',
          bio: `
            Franziska es miembro del Comité Directivo Técnico de Node.js y un experto en el rendimiento de ES6. Ella tiene un Ph.D. en matemáticas y es ingeniero de software en Google en el equipo de Cloud Platform en Nueva York. Anteriormente, ella estaba en el equipo de Chrome V8. Cuando no está trabajando mucho para hacer que Node.js sea mejor en la plataforma de nube, probablemente esté montando caballos.
          `,
        },
        tara: {
          fullName: 'Tara Vancil',
          position: 'Co-creadora of the Beaker Browser',
          bio: `
            Tara es el cocreador del navegador Beaker, un navegador experimental para explorar y construir la Web peer-to-peer. Fue co-fundadora de Blue Link Labs, el equipo de entusiastas entre pares detrás del explorador Beaker y hashbase.io. Está dedicada a construir la Web del mañana como una Web para todos.
          `,
        },
      },
    },
    ticketsSection: {
      title: 'entradas',
      description: {
        firstPart: `¡queremos conocerte!`,
        secondPart: `Acceso total de dos días a Ciudad Cultural Konex el 19 y 20 de octubre.`,
        thirdPart: `Este boleto también le dará: bolsa de regalos (incluyendo pegatinas de alta calidad y una camiseta de su tamaño), traducción en vivo (español -> inglés, inglés -> español), almuerzos del 19 y 20 de octubre, desayuno para el 19 de octubre, 3 coffee-breaks adicionales entre el 19 y 20 de octubre`,
      },
      tickets: {
        early: 'anticipadas',
        soldOut: '¡Los boletos están agotados!',
        thanks: 'Gracias a todos por apoyar la conferencia',
      },
    },
  },
}

// Function that gets nested keys
const getValue = (keyString, translations) => {
  return keyString
    .replace(/\[([^\]]+)]/g, '.$1')
    .split('.')
    .reduce((translation, key) => translation[key], translations)
}

// Function that changes the language in the UI
const changeLanguage = (elements, language) => {
  elements.forEach(i18nElement => {
    const i18nKey = i18nElement.getAttribute('data-i18n')
    const translation = getValue(i18nKey, translations[language])

    // Debuggin purposes only. Could be removed any time or when all translations are completed
    if (!i18nKey) console.error(`You are needing a "data-i18n" attribute for the ${i18nElement} element`)
    if (!translation) console.error(`You are needing a translation for the ${i18nKey} key`)

    if (translation) i18nElement.textContent = translation
  })
}

// Function that sets default language
const setDefaultLanguage = elements => {
  // Returns [ 'en', 'es' ] so you can add any new language key to translations
  const supportedLanguages = Object.keys(translations)

  // Returns the user language
  const userLanguage = navigator.language

  // In case the language is not supported will default to english
  const defaultLanguage = supportedLanguages.find(language => userLanguage.includes(language)) || 'en'

  changeLanguage(elements, defaultLanguage)
}

const i18n = () => {
  const buttons = document.querySelectorAll('[data-lang]')
  const i18nElements = document.querySelectorAll('[data-i18n]')

  setDefaultLanguage(i18nElements)

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      const language = event.target.getAttribute('data-lang')
      changeLanguage(i18nElements, language)
    })
  })
}

document.addEventListener('DOMContentLoaded', i18n)
