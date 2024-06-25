<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas de virtualización de servidores
    
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0
        .row.align-items-center.mb-4
          .col-md-auto.mb-4.mb-md-0
            .d-flex.justify-content-center
              .borde-5.fondo-color-secundario.p-3.d-inline-block
                img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 57px;")
          .col 
            p.mb-0 En el mercado, existen diversas herramientas de #[em software] creadas para facilitar el proceso de virtualización de servidores. A continuación, se presentan algunas de ellas usadas para entornos domésticos y pequeñas empresas. Además, se comparten algunas de sus características y sitios web para ampliar la información sobre las mismas y realizar las descargas de varias de ellas.
        TabsA.tab-a-personalizado-1.color-primario
          .fondo-personalizado-1.f5.no-tam-full.borde-10(titulo="VMware")
            img.position-absolute(src="@/assets/curso/temas/26.svg",style="max-width: 119px;right: 0;bottom: 0;")
            .fondo-personalizado-1__contenido.px-3.py-4.pb-5
              h4.mb-3 VMware
              ul.lista-ul.list-1.mb-0
                li
                  i.fas.fa-code.color-sistema-o
                  span Gran cantidad de paquetes de #[em software] disponibles para virtualización.
                li
                  i.fas.fa-code.color-sistema-o
                  span Tiene soluciones libres y de pago.
                li.mb-0
                  i.fas.fa-code.color-sistema-o
                  span Compatibilidad con la tecnología Intel VT-x, la cual permite ejecutar máquinas virtuales en forma nativa de la CPU host cuando esta tiene procesadores Intel.
          .fondo-personalizado-1.f5.no-tam-full.borde-10(titulo="Oracle VM VirtualBox")
            img.position-absolute(src="@/assets/curso/temas/26.svg",style="max-width: 119px;right: 0;bottom: 0;")
            .fondo-personalizado-1__contenido.px-3.py-4.pb-5
              h4.mb-3 Oracle VM VirtualBox
              ul.lista-ul.list-1.mb-0
                li
                  i.fas.fa-code.color-sistema-o
                  span #[em Software] gratuito descargable desde su sitio web oficial.
                li
                  i.fas.fa-code.color-sistema-o
                  span Posibilidad de instalar máquinas Linux, MacOS y Windows en la gran mayoría de versiones de forma gratuita.
                li.mb-0
                  i.fas.fa-code.color-sistema-o
                  span Soporta virtualización en tecnologías Intel y AMD.
          .fondo-personalizado-1.f5.no-tam-full.borde-10(titulo="Microsoft Hyper-V")
            img.position-absolute(src="@/assets/curso/temas/26.svg",style="max-width: 119px;right: 0;bottom: 0;")
            .fondo-personalizado-1__contenido.px-3.py-4.pb-5
              h4.mb-3 Microsoft Hyper-V
              ul.lista-ul.list-1.mb-0
                li
                  i.fas.fa-code.color-sistema-o
                  span Disponible en forma nativa en S.O Windows en versión pro y #[em server]. Es decir, si se tiene este tipo de versiones, estará disponible de forma gratuita y no requiere de instalación de #[em software] externo al sistema.
                li
                  i.fas.fa-code.color-sistema-o
                  span Sirve para virtualizar sistemas Windows y otros como Linux y FreeBSD.
                li.mb-0
                  i.fas.fa-code.color-sistema-o
                  span Soporta virtualización en tecnologías “Intel” y “AMD”
          .fondo-personalizado-1.f5.no-tam-full.borde-10(titulo="Qem")
            img.position-absolute(src="@/assets/curso/temas/26.svg",style="max-width: 119px;right: 0;bottom: 0;")
            .fondo-personalizado-1__contenido.px-3.py-4.pb-5
              h4.mb-3 Qem
              ul.lista-ul.list-1.mb-0
                li
                  i.fas.fa-code.color-sistema-o
                  span Es #[em software] libre y está disponible para diferentes tipos de sistemas operativos. 
                li
                  i.fas.fa-code.color-sistema-o
                  span No dispone de GUI pero se puede instalar mediante una extensión para Mac y Windows.
                li.mb-0
                  i.fas.fa-code.color-sistema-o
                  span Soporta virtualización en tecnologías Intel y AMD.
          .fondo-personalizado-1.f5.no-tam-full.borde-10(titulo="Parallels")
            img.position-absolute(src="@/assets/curso/temas/26.svg",style="max-width: 119px;right: 0;bottom: 0;")
            .fondo-personalizado-1__contenido.px-3.py-4.pb-5
              h4.mb-3 Parallels
              ul.lista-ul.list-1.mb-0
                li
                  i.fas.fa-code.color-sistema-o
                  span #[em Hypervisor] para sistemas operativos MacOS.
                li
                  i.fas.fa-code.color-sistema-o
                  span Permite ejecutar máquinas virtuales de otros sistemas sobre la plataforma de Apple.
                li
                  i.fas.fa-code.color-sistema-o
                  span Compatibilidad con la tecnología Intel VT-x.
                li.mb-0
                  i.fas.fa-code.color-sistema-o
                  span Permite traspaso de archivos, carpetas compartidas y comunicación de todo tipo de dispositivos de E/S entre la máquina #[em host] y las virtuales.
                li.mb-0
                  i.fas.fa-code.color-sistema-o
                  span Se debe pagar licencia para su uso.
         
      .col-lg-3
        figure
          img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 295px;")

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Ejemplo de virtualización
    
    p.mb-0 A continuación, se presenta una secuencia a modo de ejemplo de cómo realizar un proceso de virtualización de una máquina con sistema operativo #[em Linux] en una máquina con sistema operativo Windows. Para esta ilustración, se utilizará una máquina #[em host] con sistema operativo Windows 10 Home de 64 bits. Se virtualizará y ejecutará una máquina virtual con sistema operativo Ubuntu desktop 20.04, por medio de la herramienta Oracle VirtualBox.
    p.mb-0 A continuación, se detallan las acciones realizables durante la instalación de #[em VirtualBox].

    .cont-titulo-decorativo.p-2.mt-5.mb-4
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Instalación de VirtualBox
    
    p.mb-5 #[em VirtualBox] es una de las herramientas de virtualización de servidores más utilizadas, debido a que permite trabajar desde diversos sistemas operativos como #[em host] y, de igual forma, virtualizar una gran cantidad de sistemas operativos diferentes. Adicionalmente, es un #[em software] de uso gratuito. Para hacer el proceso de instalación, es necesario ir directamente a la página oficial de la herramienta, en la sección de descargas, y luego seleccionar el tipo de sistema operativo del equipo #[em host].


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
