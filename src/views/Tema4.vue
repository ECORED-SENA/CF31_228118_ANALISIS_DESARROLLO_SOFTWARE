<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Contenedores de #[em software]
    
    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4(data-aos="fade-up") El término contenedores es muy común en el campo laboral asociado a la administración de servicios de infraestructura. En esencia, hace referencia a un modelo de virtualización repasado en el componente anterior, específicamente la virtualización a nivel de sistema operativo.
        .row(data-aos="fade-right")
          .col-md-auto.pe-md-0
            .fondo-color-sistema-j.p-4.h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width:70px;")
          .col.ps-md-0
            .fondo-color-sistema-p.p-4
              p.mb-0 En este modelo, los contenedores son máquinas virtuales aisladas entre sí, con un #[em software] específico que no tiene un sistema operativo propio, sino que comparte los recursos y el #[em kernel] del sistema operativo de la máquina anfitriona o #[em host], logrando un mejor rendimiento ya que solo existe un sistema operativo encargado de la gestión de la infraestructura en la máquina anfitriona o #[em host] (López, 2018).
      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 399px;")
    
    .row.mb-4(data-aos="zoom-in-out")
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Los contenedores encapsulan únicamente el #[em software] específico de la aplicación que se ejecuta dentro de él, junto con las librerías de las cuales depende para su ejecución, abstrayendo el servidor en el que se va a ejecutar. Esto logra una portabilidad real, ya que es posible predecir el comportamiento de un #[em software] cuando este se mueve de un servidor a otro.
    
    .fondo-personalizado-1.f5.mb-4(data-aos="flip-up")
      img.img-fl-1.img-fl-1__1(src="@/assets/curso/temas/41.png",style="max-width: 151px;")
      img.img-fl-1.img-fl-1__2(src="@/assets/curso/temas/42.png",style="max-width: 96px;")
      img.img-fl-1.img-fl-1__3(src="@/assets/curso/temas/43.png",style="max-width: 75px;")
      img.img-fl-1.img-fl-1__4(src="@/assets/curso/temas/44.png",style="max-width: 115px;")
      img.img-fl-1.img-fl-1__5(src="@/assets/curso/temas/45.png",style="max-width: 405px;")
      .fondo-personalizado-1__contenido.py-5
        SlyderF.slider-personalizado-1(columnas="col-lg-4")
          .borde-20.overflow-hidden.h-100
            .fondo-color-primario.p-4.d-flex.justify-content-center
              .fig-per-1.p-2
                .fig-circulo.p-3
                  img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 71px;")
            .fondo-color-sistema-j.p-4.pb-lg-5.h-100
              h4.mb-4.text-center Disminución de gastos
              p.mb-0.text-center Requieren menos recursos del sistema comparado con sistemas de virtualización tradicionales. 
          .borde-20.overflow-hidden.h-100
            .fondo-color-primario.p-4.d-flex.justify-content-center
              .fig-per-1.p-2
                .fig-circulo.p-3
                  img.mx-auto(src="@/assets/curso/temas/37.svg",style="max-width: 64px;")
            .fondo-color-sistema-j.p-4.pb-lg-5.h-100
              h4.mb-4.text-center Mayor portabilidad
              p.mb-0.text-center Se pueden implementar fácilmente en diferentes plataformas y sistemas operativos. 
          .borde-20.overflow-hidden.h-100
            .fondo-color-primario.p-4.d-flex.justify-content-center
              .fig-per-1.p-2
                .fig-circulo.p-3
                  img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 59px;")
            .fondo-color-sistema-j.p-4.pb-lg-5.h-100
              h4.mb-4.text-center Funcionamiento coherente
              p.mb-0.text-center Siempre se ejecutan de la misma manera independientemente del lugar donde se implementen.
          .borde-20.overflow-hidden.h-100
            .fondo-color-primario.p-4.d-flex.justify-content-center
              .fig-per-1.p-2
                .fig-circulo.p-3
                  img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 64px;")
            .fondo-color-sistema-j.p-4.pb-lg-5.h-100
              h4.mb-4.text-center Mayor eficiencia
              p.mb-0.text-center Permiten la implementación de modificaciones y/o escalamiento de funcionalidades con mayor rapidez.
          .borde-20.overflow-hidden.h-100
            .fondo-color-primario.p-4.d-flex.justify-content-center
              .fig-per-1.p-2
                .fig-circulo.p-3
                  img.mx-auto(src="@/assets/curso/temas/40.svg",style="max-width: 64px;")
            .fondo-color-sistema-j.p-4.pb-lg-5.h-100
              h4.mb-4.text-center Mejor desarrollo de aplicaciones
              p.mb-0.text-center Este modelo de virtualización se alinea perfectamente con las metodologías ágiles y enfoques de DevOps de la industria actual para acelerar el proceso de construcción de #[em software].


    p.mb-4(data-aos="fade") A continuación, se listan algunos de los casos más comunes en los que las organizaciones optan por el uso de contenedores:

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4(data-aos="fade-rigth")
        .fondo-personalizado-1.f4.no-tam-full.h-100
          .fondo-personalizado-1__contenido.px-4.px-lg-5.pb-lg-5.pb-4
            .d-flex.justify-content-center.mb-5
              .bg-white.d-inline-block.rounded-circle.p-2
                .fondo-color-sistema-k.borde-s-1.rounded-circle.p-3.circulo-cus-1
                  img(src="@/assets/curso/temas/33.svg",style="max-width: 57px;")
            p.mb-0.text-center.texto-alterno-c Migración y/o refactorización de aplicaciones existentes a entornos más modernos.
      .col-lg-4.col-md-6.mb-4(data-aos="fade")
        .fondo-personalizado-1.f4.no-tam-full.h-100
          .fondo-personalizado-1__contenido.px-4.px-lg-5.pb-lg-5.pb-4
            .d-flex.justify-content-center.mb-5
              .bg-white.d-inline-block.rounded-circle.p-2
                .fondo-color-sistema-k.borde-s-1.rounded-circle.p-3.circulo-cus-1
                  img(src="@/assets/curso/temas/34.svg",style="max-width: 55px;")
            p.mb-0.text-center.texto-alterno-c Aplicaciones distribuidas y arquitecturas de microservicios.
      .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
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
.fig-per-1
  width: 130px
  height: 130px
  @media screen and (max-width: 768px)
    width: 100px
    height: 100px
  display: inline-flex
  background-color: rgba(255, 255, 255, 0.2)
  border-radius: 50%
  .fig-circulo
    border-radius: 50%
    width: 100%
    height: 100%
    border-width: 1px
    border-style: solid
    border-color: rgba(255, 255, 255, 0.2)
    display: flex
    align-items: center
    justify-content: center

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
