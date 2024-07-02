export default {
  global: {
    componenteFormativo:
      'Tecnologías de virtualización: desde servidores hasta contenedores',
    descripcionCurso:
      'En este componente formativo se aborda el tema de virtualización, sus diferentes tipos y algunas herramientas útiles para este proceso. Esta virtualización se comprende como una arquitectura de <em>software</em> que posibilita la ejecución de varios sistemas operativos de servidor como invitado en host de servidor físico específico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de la virtualización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de virtualización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas de virtualización de servidores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ejemplo de virtualización',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Alistamiento del sistema operativo a cargar en una máquina virtual',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contenedores de <em>software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Hipervisor versus contenedores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Docker',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Docker Hub',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Comandos de Docker',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Imágenes y contenedores (<em>containers</em>)',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'DockerFile',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Generalidades de la virtualización.',
      referencia:
        'AlbertoLopez TECH TIPS. (2021). <em>¿Qué es la virtualización? ¿Para qué sirve la Virtualización? Tipos de virtualización de sistemas</em>. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/K1vPbQtOlSc',
    },
    {
      tema: 'Tipos de virtualización.',
      referencia:
        'AlbertoLopez TECH TIPS. (2021). <em>Tipos de virtualización. 10 tipos de virtualización explicadas (de S.O., VDI, VPS, hardware, etc.)</em>. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/LMl2_W7cRME',
    },
    {
      tema: 'Herramientas de virtualización de servidores',
      referencia:
        'VirtualBox. (s.f.). <em>Download VirtualBox</em>. VirtualBox.',
      tipo: 'Página web',
      link: 'https://www.virtualbox.org/wiki/Downloads',
    },
    {
      tema: 'Herramientas de virtualización de servidores',
      referencia:
        'Docs Microsoft. (2019). <em>Install Hyper-V on Windows 10</em>. Docs Microsoft.',
      tipo: 'Página web',
      link:
        'https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v',
    },
    {
      tema: 'Herramientas de virtualización de servidores',
      referencia: 'QEMU. (s.f.). <em>Download QEMU</em>. QEMU.',
      tipo: 'Página web',
      link: 'https://www.qemu.org/download/',
    },
    {
      tema: 'Herramientas de virtualización de servidores',
      referencia: 'Parallels. (s.f.). <em>Run Windows on Mac</em>.',
      tipo: 'Página web',
      link: 'https://www.parallels.com',
    },
    {
      tema: 'Docker',
      referencia:
        'Programador novato. (2019). 01.- ¿Que es Docker? Y ¿Realmente lo necesito?. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/CD7wPcCBo8o',
    },
    {
      tema: 'Docker',
      referencia:
        'Fazt Code. (2019). Docker, Instalación en Windows10.. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/BK-C2RofmTE',
    },
    {
      tema: 'DockerFile',
      referencia: 'Docker Inc. (s.f.). Dockerfile reference.',
      tipo: 'Página web',
      link: 'https://docs.docker.com/engine/reference/builder/',
    },
  ],
  glosario: [
    {
      termino: 'Binarios',
      significado:
        'tipo de archivos que contiene información requerida para la ejecución de ciertas aplicaciones.',
    },
    {
      termino: '<em>Data center</em>',
      significado:
        'es un espacio donde se aloja un conjunto de equipos e infraestructura con el fin de brindar servicios a un grupo específico de usuarios.',
    },
    {
      termino: 'DevOps',
      significado:
        'enfoque que integra prácticas del área de infraestructura con prácticas de desarrollo para optimizar el trabajo en equipo y la aceleración de entrega de productos y servicios.',
    },
    {
      termino: 'Librerías',
      significado:
        'conjunto de códigos construidos en un lenguaje de programación que sirve para ser reutilizado por otras aplicaciones.',
    },
    {
      termino: 'Migración',
      significado: 'llevar un sistema hacia otra plataforma.',
    },
    {
      termino: 'SDN',
      significado: 'redes definidas por <em>software</em>.',
    },
    {
      termino: 'VLAN',
      significado: 'red de área local virtual.',
    },
    {
      termino: 'VM',
      significado: 'máquina virtual.',
    },
    {
      termino: 'VPN',
      significado: 'red privada virtual.',
    },
  ],
  referencias: [
    {
      referencia: 'NetApp. (2019). ¿Qué son los contenedores? NetApp.',
      link: 'https://www.netapp.com/es/devops-solutions/what-are-containers/',
    },
    {
      referencia:
        'Novato, P. (2019). 03.- ¿Qué son las imágenes y los contenedores en docker?  [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=woTRh_b5zxE&feature=youtu.be',
    },
    {
      referencia: 'VMware, Inc. (s. f.). What is Virtualization?. VMware.',
      link: 'https://www.vmware.com/co/solutions/virtualization.html',
    },
    {
      referencia:
        'Windows. (2021). How to install Linux on Windows with WSL. Microsoft Docs.',
      link:
        'https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
