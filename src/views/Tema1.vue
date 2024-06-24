<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de la virtualización
    
    .fondo-personalizado-1.f2.t1
      .fondo-personalizado-1__contenido.pb-4
        .row.mb-5
          .col-lg-auto 
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 85px;")
          .col 
            p.mb-4 La virtualización es el proceso mediante el cual es posible crear una representación de elementos físicos, como servidores, sistemas de almacenamiento, redes e incluso aplicaciones, mediante software, de modo que se puedan reducir los costos asociados a infraestructura de TI, al tiempo que se mejora la eficiencia en el uso de estos recursos (VMware, s.f.).
            p.mb-4 A continuación, se presenta el esquema de virtualización.
            .row 
              .col-lg-10
                .fondo-color-sistema-i.p-4.borde-10.pb-5
                  .titulo-sexto.color-acento-contenido
                    p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 1.]	Esquema de virtualización
                  figure
                    img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/6.svg",style="max-width: 756px;",alt="Diagrama que ilustra la virtualización de una infraestructura de TI, mostrando cómo un hipervisor permite la creación de múltiples máquinas virtuales, cada una con su propio sistema operativo y aplicaciones.")
                    img.mx-auto.d-lg-none(src="@/assets/curso/temas/10.svg",style="max-width: 756px;",alt="Diagrama que ilustra la virtualización de una infraestructura de TI, mostrando cómo un hipervisor permite la creación de múltiples máquinas virtuales, cada una con su propio sistema operativo y aplicaciones.")
        .row.mb-5 
          .col-lg-3
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 285px;")
          .col-lg-9
            p.mb-4 Normalmente, un conjunto de recursos de infraestructura, como discos, memorias, procesadores, entre otros, que están presentes en un equipo o grupo de servidores, son ocupados únicamente por el sistema operativo y las aplicaciones que se ejecutan sobre este. No siempre se utiliza todo su potencial, provocando desperdicios en el uso de recursos. Con la virtualización, es posible hacer que estos recursos ejecuten una o varias máquinas virtuales al mismo tiempo y cada una de estas máquinas podrá ejecutar su propio conjunto de aplicaciones con sistemas operativos totalmente independientes, como se describe en la figura.
            .borde-10.bg-white.p-3
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  .d-flex.justify-content-center
                    .borde-10.fondo-color-secundario.p-3.d-inline-block
                      img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 60px;")
                .col 
                  p.mb-0 Una máquina virtual (MV) es un #[em software] especial que funciona como un contenedor de #[em software] donde se incluye un sistema operativo y aplicaciones que funcionan de manera totalmente independiente. De esta forma, un equipo puede tener instaladas varias máquinas virtuales, cada una de las cuales se ejecuta independientemente en un mismo equipo que sirve como #[em host].
        
        p.mb-4 A continuación, se listan varias de las ventajas que se obtienen con la implementación de esquemas de virtualización, según VMware (s.f.):

        .row.align-items-center
          .col-lg-9
            .row.px-2
              .fondo-color-sistema-j.py-2.borde-10
                .row.align-items-center.py-2.ps-1(style="border-bottom: 2px dotted #A854F3;")
                  .col-sm-auto.mb-3.mb-sm-0
                    figure
                      img.mx-auto(src="@/assets/curso/temas/11.svg",style="max-width: 35px;")
                  .col 
                    p.mb-0.fw-bold.text-center.text-sm-start Aumento de rendimiento.
                .row.align-items-center.py-2.ps-1(style="border-bottom: 2px dotted #A854F3;")
                  .col-sm-auto.mb-3.mb-sm-0
                    figure
                      img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 35px;")
                  .col 
                    p.mb-0.fw-bold.text-center.text-sm-start Asignación dinámica de más o menos recursos a una máquina, dependiendo de la utilidad real requerida.
                .row.align-items-center.py-2.ps-1(style="border-bottom: 2px dotted #A854F3;")
                  .col-sm-auto.mb-3.mb-sm-0
                    figure
                      img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 35px;")
                  .col 
                    p.mb-0.fw-bold.text-center.text-sm-start Automatización de operaciones.
                .row.align-items-center.py-2.ps-1(style="border-bottom: 2px dotted #A854F3;")
                  .col-sm-auto.mb-3.mb-sm-0
                    figure
                      img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 35px;")
                  .col 
                    p.mb-0.fw-bold.text-center.text-sm-start Reducción en la inversión de capital y gastos operativos asociados a la infraestructura de TI. 
                .row.align-items-center.py-2.ps-1
                  .col-sm-auto.mb-3.mb-sm-0
                    figure
                      img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 35px;")
                  .col 
                    p.mb-0.fw-bold.text-center.text-sm-start Reducción de tiempos de inactividad de los recursos. 


          .col-lg-3.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 295px;")

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
