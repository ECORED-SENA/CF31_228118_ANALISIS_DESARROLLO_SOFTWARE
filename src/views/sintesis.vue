<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama sobre tecnologías de virtualización desde servidores hasta contenedores. La virtualización crea representaciones de elementos físicos mediante software, reduciendo costos y mejorando la eficiencia. Los tipos de virtualización incluyen servidores (división de un servidor físico en múltiples servidores virtuales), sistemas operativos, contenedores, redes y escritorios virtuales (VDI). Las herramientas destacadas son VMware, VirtualBox, Hyper-V, Qemu y Parallels. Los contenedores comparten el kernel del SO del host, ofreciendo recursos eficientes y portabilidad. Docker facilita la instalación, almacenamiento y compartición de imágenes, con comandos básicos y archivos DockerFile para automatización.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
