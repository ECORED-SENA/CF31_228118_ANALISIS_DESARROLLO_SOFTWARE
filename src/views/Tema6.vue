<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Docker
    
    p.mb-4 Es una de las plataformas de #[em software] más ampliamente utilizadas en el mundo para la gestión de contenedores. A continuación, se dará a conocer el proceso de instalación:

    p(style="color: red;") Aqui va un componente de pasos

    .row.mb-4
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Luego de la instalación del paquete, de acuerdo con la documentación oficial, debe fijar WSL2 (recién instalado) como la versión por defecto para las distribuciones de Linux. Para realizar este proceso, deberá abrir una consola de #[em PowerShell] de Windows y ejecutar el siguiente comando:

    .row.justify-content-center.mb-5
      .col-lg-6
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code
              | Windows PowerShell
              br
              | Copyright (C) Microsoft Corporation. Todos los derechos reservados.
              br
              | Prueba la nueva tecnología PowerShell multiplataforma https://aka.ms/pscore6
              br
              | PS C:\Users\ADHIN> ws1-set-default-version 2

    p.mb-4 Una vez finalizados los pasos anteriores, Docker debe poder ejecutarse sin ningún tipo de error o advertencia.

    .row.justify-content-center.mb-4
      .col-lg-8
        .fondo-color-sistema-i.px-4.py-3.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 13.] Información sobre pasos a seguir
              figure
                img.mx-auto(src="@/assets/curso/temas/69.svg",style="max-width: 610px;",alt="Pantalla de inicio de Docker con un mensaje emergente que ofrece consejos semanales y la opción de ver más detalles sobre la visibilidad de las actividades del equipo.")
    
    .row 
      .col-lg-9.mb-4.mb-lg-0
        p.mb-0 Adicionalmente, una vez finaliza exitosamente la instalación, el sistema ofrece un pequeño tutorial para el uso de la herramienta. Entre las acciones más comunes a realizar se encuentran las actividades de clonación de un repositorio, la construcción de una imagen a partir de esta clonación y su ejecución como contenedor de Docker. Se recomienda ejecutar el tutorial completo para así determinar que la instalación y configuración están bien definidas:
      .col-lg-3
        figure
          img.mx-auto(src="@/assets/curso/temas/70.svg",style="max-width: 295px;")
    
    p(style="color: red;") componente de pasos aqui

    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Docker Hub
    
    .row 
      .col-lg-10.col-md-8
        p.mb-0 Es un servicio proporcionado por la compañía Docker Inc donde se puede almacenar, compartir y extraer imágenes para crear contenedores de Docker. Este servicio requiere la creación de una cuenta de usuario y funciona muy similar a como lo hacen los repositorios de archivos en la nube. A continuación, se presenta cómo hacerlo.
      .col-lg-2.col-md-4.mb-4.mb-md-0.order-first.order-md-last
        .fondo-color-sistema-q.py-2.borde-10.d-flex.justify-content-center.align-items-center
          .bg-white.d-inline-flex.rounded-circle.p-3
            figure
              img.mx-auto(src="@/assets/curso/temas/71.svg",style="max-width: 54px;")

    p(style="color: red;") componente de pasos aqui

    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Comandos de Docker
    
    p.mb-4 En la siguiente tabla se presenta  algunos de los comandos más utilizados en el proceso de gestión de imágenes y contenedores usando la plataforma Docker.

    .row.justify-content-center.mb-5
      .col-lg-10
        .fondo-color-sistema-i.px-4.py-3.pb-5
          .titulo-sexto.color-acento-contenido
            p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Tabla 1.] Comandos de Docker

          .row.justify-content-center
            .col-lg-10
              .tabla-a.tabla-personalizada-1
                table
                  thead
                    tr
                      th Comando
                      th Significado
                  tbody
                    tr
                      td #[b docker ps]
                      td Muestra todos los contenedores en ejecución
                    tr
                      td #[b docker ps -a]
                      td Muestra todos los contenedores en ejecución y detenidos.
                    tr
                      td #[b docker start]
                      td Inicia un contenedor.
                    tr
                      td #[b docker stop]
                      td Detiene un contenedor.
                    tr
                      td #[b docker attach]
                      td Se conecta a un contenedor que está en ejecución.
                    tr
                      td #[b docker run]
                      td Crea y ejecuta un contenedor.
                    tr
                      td #[b docker rm]
                      td Elimina un contenedor.
                    tr
                      td #[b docker images]
                      td Muestra todas las imágenes.
                    tr
                      td #[b docker build]
                      td Crea una imagen de un #[em tarball].
                    tr
                      td #[b docker search]
                      td Busca imágenes disponibles en Docker Hub para reutilización.
    
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Imágenes y contenedores #[em (containers)]
    
    .row.mb-5
      .col-lg-10.col-md-8
        p.mb-0 Una imagen es una especie de plantilla que usa el motor de Docker para la construcción de un contenedor. Es un archivo del sistema privado solo para contenedores y provee todos los archivos y códigos que el contenedor necesita. A su vez, un contenedor de Docker se puede considerar como la instancia donde se implementa todo lo descrito en una imagen de Docker, es decir, un contenedor se construye a partir de una imagen. Si se tuviera que hacer un paralelo con sistemas de virtualización con hipervisores, una imagen sería el equivalente a lo que representaría un archivo ISO y un contenedor sería el equivalente a una máquina virtual.
      .col-lg-2.col-md-4.mb-4.mb-md-0.order-first.order-md-last
        figure
          img.mx-auto(src="@/assets/curso/temas/72.svg",style="max-width: 190px;")

    .row.justify-content-center.mb-4
      .col-lg-8
        .fondo-color-sistema-i.px-4.py-3.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 14.] Equivalencia de elementos entre modelos con hipervisores y contenedores
              figure
                img.mx-auto(src="@/assets/curso/temas/73.svg",style="max-width: 610px;",alt="Diagrama comparativo entre el esquema tradicional de virtualización y el esquema de contenedores. El esquema tradicional incluye herramientas de virtualización con hipervisores y máquinas virtuales, mientras que el esquema de contenedores incluye imágenes de Docker y contenedores.")

    
  
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
