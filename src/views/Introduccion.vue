<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pb-5
        p Este componente formativo aborda el tema de la virtualización como la base sobre la que se fundamenta la computación en la nube y los sistemas actuales de despliegue de aplicaciones y servicios en la nube.

        p(style="color: red;") patico de linuk faltante

        .row
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-4
              .col-auto.d-none.d-md-block
                figure
                  img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
              .col 
                p.mb-0 Para la elaboración de este componente, se consultaron varios autores conocidos en virtualización, de quienes se han citado y referenciado conceptos y ejemplos con fines educativos, entendiendo que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos los aprendices y lectores en general interesados en acercarse a los fundamentos básicos de la programación de aplicaciones y servicios para la nube.
            p.mb-4 En este componente formativo se profundizará en los modelos de virtualización a nivel del sistema operativo. Adicionalmente, se desarrollarán ejercicios que facilitarán el conocimiento de la plataforma Docker, la cual es ampliamente utilizada por la industria de desarrollo de #[em software].

            .borde-10.bg-white.p-3
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 190px;")
                .col 
                  p.mb-0 Al finalizar este tema, el aprendiz estará en capacidad de manejar diversos aspectos en la plataforma Docker, además de construir, ejecutar, modificar y transformar contenedores Docker a partir de imágenes locales, así como compartir una imagen local en el repositorio en la nube Docker Hub.
          .col-lg-4
            figure
              img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 400px;")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
