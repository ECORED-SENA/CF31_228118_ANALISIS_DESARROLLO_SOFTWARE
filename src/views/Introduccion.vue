<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pb-5
        p.mb-4(data-aos="fade") Este componente formativo aborda el tema de la virtualización como la base sobre la que se fundamenta la computación en la nube y los sistemas actuales de despliegue de aplicaciones y servicios en la nube.

        .row.justify-content-center.mb-4
          .col-lg-10
            .fondo-personalizado-1.no-tam-full.f6
              img.img-dec-1.position-absolute(src="@/assets/curso/temas/19.svg")
              .fondo-personalizado-1__contenido
                .row.align-items-center
                  .col-lg-3
                    figure.pt-4.pt-lg-0.ms-lg-3(data-aos="fade-right")
                      img.mx-auto(src="@/assets/curso/temas/76.png",style="max-width: 190px;")
                  .col-lg-9
                    p.mb-0.p-4.pe-lg-5.me-lg-4.py-lg-3(data-aos="fade-left") En el desarrollo de este espacio de aprendizaje, se tratan las generalidades de la virtualización, los tipos y características más destacadas, además de un listado con varias herramientas para realizar un proceso de virtualización de servidores. Para finalizar, se presentará un ejemplo detallado sobre la virtualización de un sistema operativo Linux corriendo en una máquina Windows.


          

        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            .row.mb-4
              .col-auto.d-none.d-md-block(data-aos="fade-up")
                figure
                  img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
              .col 
                p.mb-0(data-aos="fade-down") Para la elaboración de este componente, se consultaron varios autores conocidos en virtualización, de quienes se han citado y referenciado conceptos y ejemplos con fines educativos, entendiendo que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos los aprendices y lectores en general interesados en acercarse a los fundamentos básicos de la programación de aplicaciones y servicios para la nube.
            p.mb-4(data-aos="fade") En este componente formativo se profundizará en los modelos de virtualización a nivel del sistema operativo. Adicionalmente, se desarrollarán ejercicios que facilitarán el conocimiento de la plataforma Docker, la cual es ampliamente utilizada por la industria de desarrollo de #[em software].

            .borde-10.bg-white.p-3
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-lg-0(data-aos="zoom-in-out")
                    img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 190px;")
                .col 
                  p.mb-0(data-aos="fade") Al finalizar este tema, el aprendiz estará en capacidad de manejar diversos aspectos en la plataforma Docker, además de construir, ejecutar, modificar y transformar contenedores Docker a partir de imágenes locales, así como compartir una imagen local en el repositorio en la nube Docker Hub.
          .col-lg-4
            figure(data-aos="flip-up")
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
