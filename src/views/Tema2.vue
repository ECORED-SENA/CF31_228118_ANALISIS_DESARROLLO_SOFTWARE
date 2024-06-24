<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-4.pb-md-4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de virtualización

    .row 
      .col-auto.d-none.d-md-block
        figure
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
      .col
        p.mb-0 Los tipos de virtualización dependen de lo que se desee clasificar. Esto abarca desde #[b la virtualización de servidores, sistemas operativos, red y escritorios]. A continuación, se enlista la intención de cada uno:
    
    .cont-titulo-decorativo.p-2.mt-5.mb-4
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Virtualización de servidores
    
    .row.mb-5
      .col-lg-8
        p.mb-4 La virtualización de servidores es una implementación en la que un servidor físico (#[em host]) se divide mediante #[em software] en varios servidores virtuales únicos y aislados, los cuales se perciben por el cliente como servidores independientes. Según VMware (s.f.), este tipo de virtualización tiene las siguientes ventajas clave:

        p.mb-0.fw-bold.fondo-color-acento-contenido.d-inline-block.px-3.py-1.mb-3 Ventajas de la virtualización:

        .borde-10.overflow-hidden
          .d-flex.align-items-center.fondo-color-sistema-k.p-3
            i.fas.fa-code.me-2(style="color: #1682FB;font-size: 16px;")
            p.mb-0.fw-bold Mayor disponibilidad de los servidores. 
          .d-flex.align-items-center.fondo-color-sistema-l.p-3
            i.fas.fa-code.me-2(style="color: #1682FB;font-size: 16px;")
            p.mb-0.fw-bold Reducción en costes operativos.
          .d-flex.align-items-center.fondo-color-sistema-k.p-3
            i.fas.fa-code.me-2(style="color: #1682FB;font-size: 16px;")
            p.mb-0.fw-bold Eliminación de la complejidad de los servidores.
          .d-flex.align-items-center.fondo-color-sistema-l.p-3
            i.fas.fa-code.me-2(style="color: #1682FB;font-size: 16px;")
            p.mb-0.fw-bold Mejora en el rendimiento de las aplicaciones.
          .d-flex.align-items-center.fondo-color-sistema-k.p-3
            i.fas.fa-code.me-2(style="color: #1682FB;font-size: 16px;")
            p.mb-0.fw-bold Distribución más rápida de las cargas de trabajo.


      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 400px;")

    p.mb-4 La virtualización de servidores se puede clasificar en dos tipos:

    .d-flex.flex-column.flex-lg-row.borde-10.overflow-hidden
      .panel-1.fondo-color-sistema-j.p-4.p-lg-5.position-relative
        img.fig-abs-1.d-none.d-sm-block(src="@/assets/curso/temas/19.svg")
        .fondo-color-sistema-i.borde-10.py-5.px-4.mb-5.position-relative
          figure
            img.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 455px;")
        p.mb-4.fw-bold Virtualización completa
        p.mb-0 En este tipo de virtualización, se usa el hipervisor, el cual es un #[em software] desde el cual se realiza la supervisión y gestión de los recursos físicos y, adicionalmente, se encarga de independizar cada servidor virtual. Sin embargo, el hipervisor requiere recursos para hacer el procesamiento correspondiente, lo que puede afectar el rendimiento general del servidor.
      .panel-1.fondo-color-sistema-m.p-4.p-lg-5.position-relative
        img.fig-abs-1.d-sm-block(src="@/assets/curso/temas/19.svg")
        .fondo-color-sistema-i.borde-10.py-5.px-4.mb-5.position-relative
          figure
            img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 455px;")
        p.mb-4.fw-bold Paravirtualización
        p.mb-0 En este esquema, cada sistema operativo de los servidores virtuales tiene conocimiento de la existencia de los otros. Por ende, el hipervisor se libera un poco de la carga para gestionar los sistemas operativos. Adicionalmente, se tienen ventajas como la posibilidad de crear copias de seguridad fácilmente, migraciones más rápidas, mejor utilización del sistema y ahorro de energía. No todos los sistemas operativos son aptos para este proceso; en algunos casos, se pueden presentar problemas de compatibilidad de #[em hardware].

    .cont-titulo-decorativo.p-2.mt-5.mb-4
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Virtualización a nivel de sistema operativo o basada en contenedores
    
    p.mb-4 En este tipo de virtualización no se usa hipervisor. Se hace uso del sistema operativo del servidor físico, el cual se encarga de las actividades de virtualización. Sin embargo, en este esquema, los servidores virtuales deben ejecutar el mismo sistema operativo del #[em host].

    .row.justify-content-center
      .col-lg-6
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .titulo-sexto.color-acento-contenido
            p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 2.]	Virtualización a nivel de sistema operativo o basada en contenedores
          figure
            img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 515px;",alt="Diagrama que representa la arquitectura de contenedores, donde cada contenedor incluye aplicaciones, binarios y librerías, y se ejecuta sobre un motor de contenedores, un sistema operativo host y el hardware.")
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Virtualización de red
    
    .row.mb-4
      .col-md-auto.d-none.d-md-block
        figure
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Consiste en la creación de redes virtuales independientes y separadas mediante el uso de #[em software] sobre redes físicas. Este tipo de virtualización se puede presentar de dos maneras:

    .row 
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 400px;")
      .col-lg-8
        .fondo-color-sistema-n.p-4.borde-10.mb-4
          p.mb-3.fw-bold Virtualización externa
          ul.lista-ul.list-1.mb-0
            li.mb-0
              i.fas.fa-code.color-sistema-o.me-1
              span Consiste en la combinación de varias redes completas, o partes, en una unidad virtual.
        .fondo-color-sistema-k.p-4.borde-10.mb-4
          p.mb-3.fw-bold Virtualización externa
          ul.lista-ul.list-1.mb-0
            li.mb-0
              i.fas.fa-code.color-sistema-o.me-1
              span Hace uso de contenedores de #[em software] para proveer la funcionalidad de una unidad de red física.
            li.mb-0
              i.fas.fa-code.color-sistema-o.me-1
              span Algunos ejemplos de aplicaciones y enfoques de virtualización de red incluyen: VPN, VLAN y SDN.
    
    .cont-titulo-decorativo.p-2.mt-5.mb-4
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Virtualización de escritorios
    
    .fondo-personalizado-1.f3
      .fondo-personalizado-1__contenido.pb-5
        p.mb-4 Este tipo de virtualización es empleado por muchas empresas en la actualidad, también se conoce como VDI por sus siglas en inglés (#[em Virtual Desktop Infrastructure]). En este esquema, se dispone de un conjunto de servidores o #[em data centers] que publican varias páginas virtuales, cada una con su propio sistema operativo, aplicaciones y servicios, con su propio entorno de escritorio.

        .row.justify-content-center 
          .col-lg-7.pe-lg-0.padding-der-1
            .fondo-color-sistema-k.px-4.pt-5.pb-3.borde-10
              p.mb-0.pe-lg-5 Estas máquinas de escritorio virtuales se entregan a los usuarios de forma remota, a través de una red pública o privada. Los usuarios no necesitan descargar la máquina virtual, ya que reciben la imagen de sus escritorios desde los servidores de forma remota. La máquina virtual se ejecuta en los servidores y no en la PC del usuario. Es decir, la carga de procesamiento, almacenamiento y demás capacidades de gestión se realiza por medio del servidor remoto.
          .col-lg-3.ps-lg-0.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 295px;")


</template>

<script>
export default {
  name: 'Tema2',
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
.padding-der-1
  @media screen and (min-width: 992px)
    margin-right: -50px !important

.panel-1
  width: 100%

.fig-abs-1
  max-width: 92px
  position: absolute
  right: 0
  top: 40%
  @media screen and (max-width: 1400px)
    top: 34%
  @media screen and (max-width: 1200px)
    top: 27%
  @media screen and (max-width: 992px)
    top: 43%
  @media screen and (max-width: 768px)
    top: 37%
</style>
