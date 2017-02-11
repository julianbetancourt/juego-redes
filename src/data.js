export default [
  {
    id: 1,
    text: 'Qué es el modelo OSI ?',
    choices: [
      {
        id: 'a',
        text: 'Conjunto de equipos informáticos y software conectados entre sí por medio de dispositivos físicos que envían y reciben impulsos eléctricos',
      },
      {
        id: 'b',
        text: 'Una prescripción de caracterizar y estandarizar las funciones de un sistema de comunicaciones en términos de abstracción de capas',
      },
      {
        id: 'c',
        text: 'software que permite la interconexión de ordenadores para poder acceder a los servicios y recursos, hardware y software, creando redes de computadoras',
      }
    ],
    correct: 'b'
  },
  {
    id: 2,
    text: 'En el modelo OSI, la capa física...',
    choices: [
      {
        id: 'a',
        text: 'Define las especificaciones eléctricas y físicas de los dispositivos',
      },
      {
        id: 'b',
        text: 'Provee independencia de representación de datos (ej. cifrado) mediente la traducción ente los formatos de aplicación y red',
      },
      {
        id: 'c',
        text: 'Establece, administra y termina las conexiones entre las aplicaciones locales y remotas'
      }
    ],
    correct: 'a'
  },
  {
    id: 3,
    text: 'En el modelo OSI, la capa de enlace de datos...',
    choices: [
      {
        id: 'a',
        text: 'provee los medios funcionales y de procedimiento para transferir información entre entidades de red ',
      },
      {
        id: 'b',
        text: 'Provee independencia de representación de datos (ej. cifrado) mediente la traducción ente los formatos de aplicación y red',
      },
      {
        id: 'c',
        text: 'Establece, administra y termina las conexiones entre las aplicaciones locales y remotas'
      }
    ],
    correct: 'a'
  },
  {
    id: 4,
    text: 'En el modelo OSI, la capa de transporte',
    choices: [
      {
        id: 'a',
        text: 'provee los medios funcionales y de procedimiento para transferir información entre entidades de red ',
      },
      {
        id: 'b',
        text: 'establece contexto entre entidades de la capa de aplicación, en los cuales las entidades de capas de más arriba pueden usar sintáxis diferentes y semánticas si el servicio de presentación provee un mapeo entre ellas'
      },
      {
        id: 'c',
        text: 'provee una transferencia de datos transparente para el usuario final'
      }
    ],
    correct: 'c'
  },
  {
    id: 5,
    text: 'En el modelo OSI, la capa de iterconexión...',
    choices: [
      {
        id: 'a',
        text: 'provee una transferencia de datos transparente para el usuario final',
      },
      {
        id: 'b',
        text: 'No existe'
      },
      {
        id: 'c',
        text: 'Establece, administra y termina las conexiones entre las aplicaciones locales y remotas'
      }
    ],
    correct: 'b'
  },
  {
    id: 6,
    text: 'Qué es el modelo TCP/IP?',
    choices: [
      {
        id: 'a',
        text: 'un sistema de comunicación inalámbrico para minimizar las conexiones cableadas',
      },
      {
        id: 'b',
        text: 'software que permite la interconexión de ordenadores para poder acceder a los servicios y recursos, hardware y software, creando redes de computadoras',
      },
      {
        id: 'c',
        text: 'serie de normas que detallan como deben comunicarse los ordenadores y el modo de interconectar las redes para permitir que diferentes sistemas puedan cooperar compartiendo sus recursos'
      }
    ],
    correct: 'c'
  },
  {
    id: 7,
    text: 'Algunas capas del modelo TCP/IP son:',
    choices: [
      {
        id: 'a',
        text: 'Físico, Internet, Almacenamiento'
      },
      {
        id: 'b',
        text: 'Físico, Internet, Transporte'
      },
      {
        id: 'c',
        text: 'Físico, Sesión, Presentación'
      }
    ],
    correct: 'b'
  },
  {
    id: 8,
    text: 'En el modelo TCP/IP, la capa de Aplicación',
    choices: [
      {
        id: 'a',
        text: 'No existe'
      },
      {
        id: 'b',
        text: 'Establece, administra y termina las conexiones entre las aplicaciones locales y remotas'
      },
      {
        id: 'c',
        text: 'es la capa en que los programas más comunes utilizan para comunicarse a través de una red con otros programas'
      }
    ],
    correct: 'c'
  },
  {
    id: 9,
    text: 'En la capa de aplicación del modelo TCP/IP, se relacionan los protocolos...',
    choices: [
      {
        id: 'a',
        text: 'HTTP, FTP, DNS'
      },
      {
        id: 'b',
        text: 'Ethernet, Token, TCP, RTP'
      },
      {
        id: 'c',
        text: 'Todas las anteriores'
      }
    ],
    correct: 'a'
  },
  {
    id: 10,
    text: 'Parte de la popularidad del modelo TCP/IP se debe a...',
    choices: [
      {
        id: 'a',
        text: 'Independencia del fabricante '
      },
      {
        id: 'b',
        text: 'Soporta múltiples tecnologías'
      },
      {
        id: 'c',
        text: 'Todas las anteriores'
      }
    ],
    correct: 'c'
  },
]
