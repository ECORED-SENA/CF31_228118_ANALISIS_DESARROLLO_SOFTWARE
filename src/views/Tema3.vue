<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Herramientas de virtualización de servidores
    
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
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
                  span Disponible en forma nativa en S.O. Windows en versión pro y #[em server]. Es decir, si se tiene este tipo de versiones, estará disponible de forma gratuita y no requiere de instalación de #[em software] externo al sistema.
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
         
      .col-lg-3(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 295px;")

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Ejemplo de virtualización
    
    p.mb-0(data-aos="fade") A continuación, se presenta una secuencia a modo de ejemplo de cómo realizar un proceso de virtualización de una máquina con sistema operativo Linux en una máquina con sistema operativo Windows. Para esta ilustración, se utilizará una máquina #[em host] con sistema operativo Windows 10 Home de 64 bits. Se virtualizará y ejecutará una máquina virtual con sistema operativo Ubuntu desktop 20.04, por medio de la herramienta Oracle VirtualBox.
    p.mb-0 A continuación, se detallan las acciones realizables durante la instalación de VirtualBox.

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-left")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Instalación de VirtualBox
    
    p.mb-5(data-aos="fade-up") VirtualBox es una de las herramientas de virtualización de servidores más utilizadas, debido a que permite trabajar desde diversos sistemas operativos como #[em host] y, de igual forma, virtualizar una gran cantidad de sistemas operativos diferentes. Adicionalmente, es un #[em software] de uso gratuito. Para hacer el proceso de instalación, es necesario ir directamente a la página oficial de la herramienta, en la sección de descargas, y luego seleccionar el tipo de sistema operativo del equipo #[em host].

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-12
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .row.justify-content-center
            .col-lg-12
              .titulo-sexto.color-acento-contenido.ms-lg-4
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 3.] Instalación de VirtualBox
              figure
                img.img-a.img-t(src="@/assets/curso/temas/48.jpg",alt="Pantalla de la página de descarga de VirtualBox, mostrando opciones para diferentes sistemas operativos como Windows, OS X y Linux.")

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Instalador de VirtualBox
    
    p.mb-5(data-aos="fade-up") Realizado el proceso anterior, se procede a buscar en la carpeta de descargas, o en la que se haya programado el alojamiento de la descarga, para ejecutarlo e iniciar su instalación. Recuerde que el sistema le solicitará algunos permisos necesarios en el equipo #[em host] para este proceso.

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-8
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 4.] Instalador de VirtualBox
              figure
                img.mx-auto(src="@/assets/curso/temas/49.svg",style="max-width: 466px;",alt="Pantalla de bienvenida del asistente de instalación de Oracle VM VirtualBox 6.1.22, con la opción de continuar o cancelar la instalación.")

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Interfaz de Custom Setup de VirtualBox
    
    p.mb-4(data-aos="fade-up") Continuando con el proceso de instalación, se realiza la verificación de los componentes, características y ubicación física donde se instalará en el equipo #[em host] y los accesos directos. Se recomienda dejar las opciones por defecto que presenta el sistema. Sin embargo, se pueden realizar los ajustes que se consideren pertinentes según la necesidad a cubrir.

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-8
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 5.] Interfaz de Custom Setup VirtualBox
              figure
                img.mx-auto(src="@/assets/curso/temas/50.svg",style="max-width: 461px;",alt="Pantalla de configuración personalizada en el asistente de instalación de VirtualBox, permitiendo seleccionar características específicas como soporte USB, redes, y más.")

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Interfaz de Custom Setup 2 de VirtualBox
    
    p.mb-4(data-aos="fade-up") Finalizada la verificación de las características de configuración de la instalación, el sistema indica que se requiere un reinicio de la conexión de red y una desconexión temporal de la misma. Sin embargo, esto ocurre en fracción de segundos, por lo que no afecta realmente el sistema, a menos que en ese mismo momento se esté realizando un proceso crítico en el #[em host] que requiera conexión ininterrumpida.


    .row.align-items-center.mb-4(data-aos="fade-up")
      .col-lg-8
        .row.px-2
          .fondo-color-sistema-j.py-2.borde-10
            .row.align-items-center.py-2.ps-1(style="border-bottom: 2px dotted #A854F3;")
              .col-sm-auto.mb-3.mb-sm-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/52.svg",style="max-width: 35px;")
              .col 
                p.mb-0.fw-bold.text-center.text-sm-start Interfaz de advertencia de red de VirtualBox.
            .row.align-items-center.py-2.ps-1(style="border-bottom: 2px dotted #A854F3;")
              .col-sm-auto.mb-3.mb-sm-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/53.svg",style="max-width: 35px;")
              .col 
                p.mb-0.fw-bold.text-center.text-sm-start El sistema pedirá aceptar el procedimiento de instalación.
            .row.align-items-center.py-2.ps-1(style="border-bottom: 2px dotted #A854F3;")
              .col-sm-auto.mb-3.mb-sm-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/54.svg",style="max-width: 35px;")
              .col 
                p.mb-0.fw-bold.text-center.text-sm-start Interfaz #[em "Ready to Install"] de VirtualBox.
            .row.align-items-center.py-2.ps-1
              .col-sm-auto.mb-3.mb-sm-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/55.svg",style="max-width: 35px;")
              .col 
                p.mb-0.fw-bold.text-center.text-sm-start El sistema pedirá dar clic en "Instalar" para continuar con el procedimiento.

      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 400px;")

    .row.mb-4(data-aos="fade-up")
      .col-auto.d-none.d-md-block 
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 100px;")
      .col 
        p.mb-0 En algunas ocasiones, es posible que en los sistemas operativos Windows se presente o salte una advertencia de seguridad, indicando al usuario que se va a autorizar una instalación de un #[em software] de Oracle Corporation. Al momento que el sistema genere la notificación, se deberá indicar que se desea instalar para poder continuar.

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-8
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 6.] Interfaz de Custom Setup VirtualBox
              figure
                img.mx-auto(src="@/assets/curso/temas/57.svg",style="max-width: 462px;",alt="Pantalla en el asistente de instalación de VirtualBox para crear accesos directos y registros de asociaciones de archivos.")

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Interfaz advertencia de red Virtual “Box”
    
    p.mb-4(data-aos="fade-up") El sistema pedirá aceptar el procedimiento de instalación.

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-8
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 7.] Interfaz advertencia de red VirtualBox
              figure
                img.mx-auto(src="@/assets/curso/temas/58.svg",style="max-width: 464px;",alt="Advertencia en el asistente de instalación de VirtualBox sobre la instalación de interfaces de red, que puede resetear la conexión de red temporalmente.")

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Interfaz “Ready” “to” “install” Virtual “Box”
    
    p.mb-4(data-aos="fade-up") El sistema pedirá dar clic en “instalar” para continuar con el procedimiento.

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-8
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 8.] Interfaz #[em Ready to install] VirtualBox
              figure
                img.mx-auto(src="@/assets/curso/temas/59.svg",style="max-width: 466px;",alt="Pantalla del asistente de instalación de VirtualBox lista para iniciar la instalación, con la opción de revisar o cambiar configuraciones antes de comenzar.")

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Interfaz advertencia de red Virtual “Box”
    
    p.mb-4(data-aos="fade-up") En algunas ocasiones, es posible que en los sistemas operativos Windows se presente o salte una advertencia de seguridad, indicando al usuario que se va a autorizar una instalación de un #[em software] de Oracle Corporation. Al momento que el sistema genere la notificación, se deberá indicar que se desea instalar para poder continuar.

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-8
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 9.] Interfaz advertencia de red VirtualBox
              figure
                img.mx-auto(src="@/assets/curso/temas/60.svg",style="max-width: 475px;",alt='Pantalla de seguridad de Windows solicitando confirmación para instalar el software de Oracle Corporation, con opciones de "Instalar" o "No instalar".')

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Interfaz instalación completa Virtual “Box”
    
    p.mb-4(data-aos="fade-up") Una vez realizados estos pasos, el proceso de instalación es relativamente rápido. Luego, se encontrará una interfaz indicando la finalización de este proceso y la posibilidad de iniciar inmediatamente la ejecución de VirtualBox en la máquina #[em host].

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-8
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 10.] Interfaz instalación completa VirtualBox
              figure
                img.mx-auto(src="@/assets/curso/temas/61.svg",style="max-width: 473px;",alt='Pantalla final del asistente de instalación de VirtualBox, indicando que la instalación ha sido completada y ofreciendo la opción de iniciar VirtualBox inmediatamente.')

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Interfaz Virtual “Box”
    
    p.mb-4(data-aos="fade-up") La herramienta de virtualización ha sido instalada. ¡Ahora la puedes utilizar!

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-8
        .fondo-color-sistema-i.p-4.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.ms-lg-4
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 11.] Interfaz VirtualBox
              figure
                img.mx-auto(src="@/assets/curso/temas/62.svg",style="max-width: 623px;",alt='Pantalla de bienvenida del administrador de Oracle VM VirtualBox, que muestra varias herramientas como preferencias, importar, exportar, nueva y añadir.')
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 3.2 Alistamiento del sistema operativo a cargar en una máquina virtual

    p.mb-4(data-aos="fade-up") Ahora es el momento de conocer sobre el alistamiento del sistema operativo a cargar en una máquina virtual:


    .slider-personalizado-2.py-5.mb-4(data-aos="flip-up")
      img.imgf-1(src="@/assets/curso/temas/63.png")
      img.imgf-2(src="@/assets/curso/temas/64.png")
      img.imgf-3(src="@/assets/curso/temas/65.png")
      .slider-personalizado-2__contenido.p-3.pe-lg-5.pt-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-11
              .row 
                .col-lg-4.mb-4.mb-lg-0
                  h4.mb-4 Descargar Ubuntu
                  p.mb-0 Es momento de abordar la virtualización de un sistema operativo “Linux” de distribución “Ubuntu”, por lo cual se debe realizar el proceso de descarga del mismo desde la página oficial #[a.link-p-1(href="https://ubuntu.com/" target="_blank") www.ubuntu.com #[i.fas.fa-external-link-alt]], ingresando a la sección de descargas.
                .col-lg-8
                  figure
                    img.img-a.img-t(src="@/assets/curso/temas/66.jpg",alt="Captura de pantalla de la página principal de Ubuntu.")
          .row.justify-content-center
            .col-lg-11
              .row
                .col-lg-4.mb-4.mb-lg-0
                  h4.mb-4 Seleccionar distribución
                  p.mb-0 Al ingresar a la página oficial, se puede realizar la descarga de diferentes tipos de distribuciones del sistema operativo, esto en diferentes versiones, facilitando el acceso a la documentación oficial. En este punto el sistema detecta la arquitectura del procesador de la máquina desde donde se genera la descarga. 
                .col-lg-8
                  figure
                    img.img-a.img-t(src="@/assets/curso/temas/67.jpg",alt="Captura de pantalla de la sección de descargas de Ubuntu que presenta opciones para descargar Ubuntu Desktop, Ubuntu Server, Ubuntu para IoT y Ubuntu Cloud.")
          .row.justify-content-center
            .col-lg-11
              .row
                .col-lg-4.mb-4.mb-lg-0
                  h4.mb-4 Requerimientos mínimos
                  p.mb-0 Ahora es necesario que desde la página se indique cuáles son los requerimientos mínimos recomendados para un proceso de instalación, estos deben leerse antes de iniciar el proceso de instalación, de esta manera podrá asegurarse el éxito del mismo.
                .col-lg-8
                  figure
                    img.img-a.img-t(src="@/assets/curso/temas/68.jpg",alt="Captura de pantalla de la página de descarga de Ubuntu Desktop, específicamente para la versión 20.04.2.0 LTS.")

    .row.mb-5(data-aos="fade-up")
      .col-auto.d-none.d-md-block 
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 100px;")
      .col 
        p.mb-0 En algunas ocasiones, es posible que en los sistemas operativos Windows se presente o salte una advertencia de seguridad, indicando al usuario que se va a autorizar una instalación de un #[em software] de Oracle Corporation. Al momento que el sistema genere la notificación, se deberá indicar que se desea instalar para poder continuar.

    .row.justify-content-center
      .col-lg-10
        .p-4.fondo-personalizado-6.borde-11(data-aos="fade")
          .row
            .col-auto(style="margin: auto;")
              .burbuja-1.fondo-color-acento-contenido.mx-auto.mb-3.mb-md-0
                figure.p-1
                  img.mx-auto(src="@/assets/curso/temas/74.svg",style="max-width: 47px;")
            .col-lg.mb-4.mb-md-0.col-md-6
              h4.color-color-acento-contenido Configuración de la máquina virtual
              p.mb-0.text-white Conoce acerca de la configuración de la máquina virtual e instalación del sistema operativo de la máquina invitada.
            .col-md-auto.text-center(style="place-self:center;")
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo1.pdf')" target="_blank")
                span(style="color:initial;") Descargar
                i.fas.fa-link(style="color:initial;")

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
