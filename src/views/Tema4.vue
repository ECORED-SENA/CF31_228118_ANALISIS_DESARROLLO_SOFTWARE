<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contenedores de #[em software]
    
    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4 El término contenedores es muy común en el campo laboral asociado a la administración de servicios de infraestructura. En esencia, hace referencia a un modelo de virtualización repasado en el componente anterior, específicamente la virtualización a nivel de sistema operativo.
        .row
          .col-md-auto.pe-md-0
            .fondo-color-sistema-j.p-4.h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width:70px;")
          .col.ps-md-0
            .fondo-color-sistema-p.p-4
              p.mb-0 En este modelo, los contenedores son máquinas virtuales aisladas entre sí, con un #[em software] específico que no tiene un sistema operativo propio, sino que comparte los recursos y el #[em kernel] del sistema operativo de la máquina anfitriona o #[em host], logrando un mejor rendimiento ya que solo existe un sistema operativo encargado de la gestión de la infraestructura en la máquina anfitriona o #[em host] (López, 2018).
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 399px;")
    
    .row.mb-4
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Los contenedores encapsulan únicamente el #[em software] específico de la aplicación que se ejecuta dentro de él, junto con las librerías de las cuales depende para su ejecución, abstrayendo el servidor en el que se va a ejecutar. Esto logra una portabilidad real, ya que es posible predecir el comportamiento de un #[em software] cuando este se mueve de un servidor a otro.
    
    p(style="color:red;") aqui va el slyder

    p.mb-4 A continuación, se listan algunos de los casos más comunes en los que las organizaciones optan por el uso de contenedores:

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4
        .fondo-personalizado-1.f4.no-tam-full.h-100
          .fondo-personalizado-1__contenido.px-4.px-lg-5.pb-lg-5.pb-4
            .d-flex.justify-content-center.mb-5
              .bg-white.d-inline-block.rounded-circle.p-2
                .fondo-color-sistema-k.borde-s-1.rounded-circle.p-3.circulo-cus-1
                  img(src="@/assets/curso/temas/33.svg",style="max-width: 57px;")
            p.mb-0.text-center.texto-alterno-c Migración y/o refactorización de aplicaciones existentes a entornos más modernos.
      .col-lg-4.col-md-6.mb-4
        .fondo-personalizado-1.f4.no-tam-full.h-100
          .fondo-personalizado-1__contenido.px-4.px-lg-5.pb-lg-5.pb-4
            .d-flex.justify-content-center.mb-5
              .bg-white.d-inline-block.rounded-circle.p-2
                .fondo-color-sistema-k.borde-s-1.rounded-circle.p-3.circulo-cus-1
                  img(src="@/assets/curso/temas/34.svg",style="max-width: 55px;")
            p.mb-0.text-center.texto-alterno-c Aplicaciones distribuidas y arquitecturas de microservicios.
      .col-lg-4.col-md-6.mb-4
        .fondo-personalizado-1.f4.no-tam-full.h-100
          .fondo-personalizado-1__contenido.px-4.px-lg-5.pb-lg-5.pb-4
            .d-flex.justify-content-center.mb-5
              .bg-white.d-inline-block.rounded-circle.p-2
                .fondo-color-sistema-k.borde-s-1.rounded-circle.p-3.circulo-cus-1
                  img(src="@/assets/curso/temas/35.svg",style="max-width: 53px;")
            p.mb-0.text-center.texto-alterno-c Implementación de prácticas de integración y despliegue continuo.


    
   
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

<style scoped lang="sass">
.circulo-cus-1
  height: 104px
  width: 104px
  display: flex
  justify-content: center
  align-content: center

.fondo-personalizado-1
  &:hover
    .texto-alterno-c
      color: white
</style>
