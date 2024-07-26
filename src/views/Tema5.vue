<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Hipervisor versus contenedores
    
    .row.mb-4 
      .col-lg-8
        p.mb-4(data-aos="fade") Existen similitudes y diferencias entre la forma en que estas dos tecnologías facilitan el proceso de virtualización de aplicaciones, razón por la cual es más conveniente una u otra dependiendo del contexto particular y las necesidades establecidas por la organización.
        .fondo-color-sistema-p.p-4.borde-10.position-relative.mb-4
          img.position-absolute(src="@/assets/curso/temas/26.svg",style="max-width: 119px;right: 0;bottom: 0;")
          .row.align-items-center.position-relative
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              .d-flex.justify-content-center
                .borde-10.fondo-color-secundario.p-3.d-inline-block
                  img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 90px;")
            .col(data-aos="fade-left")
              p.mb-0 En ambos casos, se requiere de una máquina #[em host] que contendrá la infraestructura física con todos los dispositivos y recursos necesarios, sobre los cuales se monta un sistema operativo que puede ser de cualquier tipo. Luego, sobre este sistema operativo se monta un #[em software] que, en el caso del esquema de máquinas virtuales tradicionales, será un hipervisor y, en el esquema de contenedores, será un gestor de contenedores.
          
        p.mb-0(data-aos="fade") En las máquinas virtuales, para poder ejecutar una aplicación específica, se requieren las librerías y códigos binarios de los cuales dependa y, adicionalmente, el montaje de un sistema operativo invitado.
        
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0(data-aos="flip-up")
          img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 400px;")
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .fondo-color-sistema-q.p-4.borde-10
          .row.align-items-center
            .col-md-auto
              .d-flex.justify-content-center.mb-4.mb-md-0
                .fondo-color-sistema-h.rounded-circle.d-inline-flex.p-4
                  img(src="@/assets/curso/temas/28.svg",style="max-width: 94px;")
            .col
              p.mb-0 Por ejemplo, si la aplicación a ejecutar en la máquina virtual fue construida con Visual Studio .NET, es necesario también montar en la máquina virtual el sistema operativo Windows. Si la aplicación a ejecutar en la máquina virtual fue construida en Swift, requiere entonces la instalación del sistema operativo MacOS. De esta forma, en todas las máquinas virtuales se debe correr el sistema operativo completo de acuerdo con las aplicaciones a utilizar.
    
    p.mb-4(data-aos="fade-left") En el caso de las tecnologías de contenedores, estos se construyen exclusivamente con las aplicaciones, librerías y archivos binarios a ser utilizados, y comparten recursos con el sistema operativo de la máquina anfitriona o #[em host].
    p.mb-4(data-aos="fade-right") En la figura se presenta un resumen de la arquitectura general de las tecnologías comentadas anteriormente.

    .row.justify-content-center(data-aos="zoom-in-out")
      .col-lg-10
        .fondo-color-sistema-i.px-4.py-3.borde-10.pb-5
          .row.justify-content-center
            .col-lg-11
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 12.]  Arquitectura tecnologías de hipervisores y contenedores
              figure
                img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/29.svg",style="max-width: 900px;",alt="Diagrama comparativo que muestra la diferencia entre máquinas virtuales tradicionales y tecnología de contenedores, detallando la estructura de cada uno, incluyendo aplicaciones, binarios y librerías, sistema operativo, host e infraestructura.")
                img.mx-auto.d-lg-none(src="@/assets/curso/temas/30.svg",style="max-width: 391px;",alt="Diagrama comparativo que muestra la diferencia entre máquinas virtuales tradicionales y tecnología de contenedores, detallando la estructura de cada uno, incluyendo aplicaciones, binarios y librerías, sistema operativo, host e infraestructura.")

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
