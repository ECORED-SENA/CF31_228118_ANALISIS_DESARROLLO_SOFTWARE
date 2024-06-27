<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Docker
    
    p.mb-4 Es una de las plataformas de #[em software] más ampliamente utilizadas en el mundo para la gestión de contenedores. A continuación, se dará a conocer el proceso de instalación:

    .row.justify-content-center.mb-5
      .col-lg-10
        .fondo-personalizado-1.no-tam-full.f7
          img.position-absolute(src="@/assets/curso/temas/78.svg",style="max-width: 119px;right: 0;top: 20%;")
          img.position-absolute(src="@/assets/curso/temas/79.svg",style="max-width: 119px;bottom: 0;left: 0;")
          .fondo-personalizado-1__contenido.p-4
            PasosB.pasos-personalizado-1
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Página oficial de Docker para instalar Windows.
                  figure.mb-0.mb-lg-5
                    img.mx-auto(src="@/assets/curso/temas/80.png",style="max-width: 700px;",alt="Imagen de la página oficial de Docker que lista los requerimientos del sistema para instalar Windows.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Configuración Instalación Docker Desktop 3.4.0.
                  figure.mb-0.mb-lg-5
                    img.mx-auto(src="@/assets/curso/temas/77.png",style="max-width: 702px;",alt="Ilustración de la configuración Instalación Docker Desktop 3.4.0., es importante tener en cuenta que una vez terminada la descarga se debe ejecutar el instalador de docker el cual iniciará con una ventana de configuración donde se podrá seleccionar la instalación de componentes adicionales requeridos y el generar iconos de acceso desde el escritorio de la máquina.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Instalación Docker Desktop 3.4.0.
                  figure.mb-0.mb-lg-5
                    img.mx-auto(src="@/assets/curso/temas/81.png",style="max-width: 701px;",alt="Ilustración de la Instalación Docker Desktop 3.4.0. después de cerrar la ventana de configuración deseada se inicia el proceso de instalación el cual al finalizar solicitará el reinicio del sistema operativo como se muestra en la figura 4 y realizará unas actualizaciones finales mientras reinicia la máquina.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Advertencia sobre falta de elementos de instalación.
                  figure.mb-0.mb-lg-5
                    img.mx-auto(src="@/assets/curso/temas/82.png",style="max-width: 701px;",alt="Pantalla de advertencia sobre falta de elementos de instalación. Es de importancia señalar que al reiniciar el sistema Docker se ejecuta en background e informará si existe algún problema en caso de que el sistema operativo no cumpla con las dependencias requeridas. Docker le indicará la falta de los componentes que no pueda actualizar para realizar el proceso manual. En el ejemplo mostrado se requiere la instalación manual de WSL 2 Linux Kernel el cual ya no viene integrado en el instalador Docker para Windows 10 (Windows, 2021). Luego de realizar esta instalación manual deberá reiniciar nuevamente la máquina.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Instalador Docker Desktop 3.4.0.
                  figure.mb-0.mb-lg-5
                    img.mx-auto(src="@/assets/curso/temas/83.png",style="max-width: 701px;",alt="Imagen que muestra el Instalador Docker Desktop 3.4.0. en la que se debe verificar la opción de descarga el paquete ARM64; al respecto cabe señalar que sobre el mismo mensaje de error se despliega el link de acceso a la documentación oficial para finalizar el proceso de ajuste requerido para instalar Docker completamente en Windows.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Inicio instalación paquete de actualización WSL2 Linux Kernel para máquinas 64x. 
                  figure.mb-0.mb-lg-5
                    img.mx-auto(src="@/assets/curso/temas/84.png",style="max-width: 491px;",alt="Imagen de la ventana de inicio instalación paquete de actualización WSL2 Linux Kernel para máquinas 64x. Una vez descargado el paquete msi indicado en la documentación oficial se realiza la instalación respectiva.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Finalización instalación paquete de actualización WSL2 Linux Kernel para máquinas 64x.
                  figure.mb-0.mb-lg-5
                    img.mx-auto(src="@/assets/curso/temas/85.png",style="max-width: 492px;",alt="Imagen de la Finalización instalación paquete de actualización WSL2 Linux Kernel para máquinas 64x, señala la opción finish.")
           
     
    .row.mb-4
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Luego de la instalación del paquete, de acuerdo con la documentación oficial, debe fijar WSL2 (recién instalado) como la versión por defecto para las distribuciones de Linux. Para realizar este proceso, deberá abrir una consola de #[em PowerShell] de Windows y ejecutar el siguiente comando:

    .row.justify-content-center.mb-5
      .col-lg-6
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code
              | Windows PowerShell
              br
              | Copyright (C) Microsoft Corporation. Todos los derechos reservados.
              br
              | Prueba la nueva tecnología PowerShell multiplataforma https://aka.ms/pscore6
              br
              | PS C:\Users\ADHIN> ws1-set-default-version 2

    p.mb-4 Una vez finalizados los pasos anteriores, Docker debe poder ejecutarse sin ningún tipo de error o advertencia.

    .row.justify-content-center.mb-4
      .col-lg-8
        .fondo-color-sistema-i.px-4.py-3.borde-10.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 13.] Información sobre pasos a seguir
              figure
                img.mx-auto(src="@/assets/curso/temas/69.svg",style="max-width: 610px;",alt="Pantalla de inicio de Docker con un mensaje emergente que ofrece consejos semanales y la opción de ver más detalles sobre la visibilidad de las actividades del equipo.")
    
    .row.mb-4
      .col-lg-9.mb-4.mb-lg-0
        p.mb-0 Adicionalmente, una vez finaliza exitosamente la instalación, el sistema ofrece un pequeño tutorial para el uso de la herramienta. Entre las acciones más comunes a realizar se encuentran las actividades de clonación de un repositorio, la construcción de una imagen a partir de esta clonación y su ejecución como contenedor de Docker. Se recomienda ejecutar el tutorial completo para así determinar que la instalación y configuración están bien definidas:
      .col-lg-3
        figure
          img.mx-auto(src="@/assets/curso/temas/70.svg",style="max-width: 295px;")
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .fondo-personalizado-1.no-tam-full.f7
          img.position-absolute(src="@/assets/curso/temas/78.svg",style="max-width: 119px;right: 0;top: 20%;")
          img.position-absolute(src="@/assets/curso/temas/79.svg",style="max-width: 119px;bottom: 0;left: 0;")
          .fondo-personalizado-1__contenido.p-4
            PasosB.pasos-personalizado-1
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Acción de compartir contenedor en Docker Hub.
                  figure
                    img.mx-auto(src="@/assets/curso/temas/86.png",style="max-width: 702px;",alt="Imagen que ilustra la manera de clonar repositorio en Docker.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Acción de construir imagen desde repositorio.
                  figure
                    img.mx-auto(src="@/assets/curso/temas/87.png",style="max-width: 702px;",alt="Imagen que ilustra la manera de construir imagen desde repositorio en Docker.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Acción de construir contenedor desde imagen.
                  figure
                    img.mx-auto(src="@/assets/curso/temas/88.png",style="max-width: 702px;",alt="Imagen que ilustra la manera de construir contenedor desde imagen desde repositorio en Docker.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  p.mb-4 Acción de compartir contenedor en Docker Hub.
                  figure
                    img.mx-auto(src="@/assets/curso/temas/89.png",style="max-width: 702px;",alt="Imagen que ilustra la manera de compartir contenedor en Docker Hub desde repositorio en Docker.")
        

    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Docker Hub
    
    .row.mb-4
      .col-lg-10.col-md-8
        p.mb-0 Es un servicio proporcionado por la compañía Docker Inc donde se puede almacenar, compartir y extraer imágenes para crear contenedores de Docker. Este servicio requiere la creación de una cuenta de usuario y funciona muy similar a como lo hacen los repositorios de archivos en la nube. A continuación, se presenta cómo hacerlo.
      .col-lg-2.col-md-4.mb-4.mb-md-0.order-first.order-md-last
        .fondo-color-sistema-q.py-2.borde-10.d-flex.justify-content-center.align-items-center
          .bg-white.d-inline-flex.rounded-circle.p-3
            figure
              img.mx-auto(src="@/assets/curso/temas/71.svg",style="max-width: 54px;")

    .row.justify-content-center.mb-5
      .col-lg-10
        .fondo-personalizado-1.no-tam-full.f7
          img.position-absolute(src="@/assets/curso/temas/78.svg",style="max-width: 119px;right: 0;top: 20%;")
          img.position-absolute(src="@/assets/curso/temas/79.svg",style="max-width: 119px;bottom: 0;left: 0;")
          .fondo-personalizado-1__contenido.p-4
            PasosB.pasos-personalizado-1
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  .row.mb-0.mb-lg-5
                    .col-lg-5
                      p.mb-0.fw-bold Crear una cuenta
                      p.mb-0 Para crear una cuenta de usuario debe acceder a la siguiente dirección #[a.link-p-1(href="https://hub.docker.com" target="_blank") https://hub.docker.com #[i.fas.fa-external-link-alt]] y diligenciar el formulario indicando el ID, email y #[em password].
                    .col-lg-7
                      figure
                        img.mx-auto(src="@/assets/curso/temas/90.png",style="max-width: 580px;",alt="Imagen que ilustra la pantalla inicial para crear una cuenta en Docker. Para crear una cuenta de usuario debe acceder a la siguiente dirección https://hub.docker.com y diligenciar el formulario indicando el ID, email y password.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  .row.mb-0.mb-lg-5
                    .col-lg-5
                      p.mb-0.fw-bold Seleccionar un plan
                      p.mb-0 Dependiendo de sus necesidades debe seleccionar un plan. Se ofrece la versión libre, la profesional y los equipos para organizaciones. Se recomienda usar la opción gratuita para el proceso de aprendizaje.
                    .col-lg-7
                      figure
                        img.mx-auto(src="@/assets/curso/temas/91.png",style="max-width: 580px;",alt="Imagen que ilustra la ventana para seleccionar un plan en Docker. Luego dependiendo de sus necesidades debe seleccionar un plan. Se ofrece la versión libre, la profesional y los equipos para organizaciones. Se recomienda usar la opción gratuita para el proceso de aprendizaje.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  .row.mb-0.mb-lg-5
                    .col-lg-5
                      p.mb-0.fw-bold Confirmación de cuenta
                      p.mb-0 Finalizado este proceso, se envía al correo electrónico registrado en la creación del usuario de Docker Hub un mensaje de confirmación que se debe verificar para activar la cuenta y tener mecanismos de recuperación en caso de que se pierdan las credenciales de acceso.
                    .col-lg-7
                      figure
                        img.mx-auto(src="@/assets/curso/temas/92.png",style="max-width: 580px;",alt="Imagen que ilustra la ventana siguiente en la selección de un plan en Docker. Finalizado este proceso se envía al correo electrónico registrado en la creación del usuario de Docker Hub un mensaje de confirmación que se debe verificar para activar la cuenta y tener mecanismos de recuperación en caso de que perdamos las credenciales de acceso.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  .row.mb-0.mb-lg-5
                    .col-lg-5
                      p.mb-0.fw-bold Ingresar a Docker Hub
                      p.mb-0 Cuando se tiene una cuenta de usuario en Docker Hub, es posible realizar el último procedimiento del tutorial de Docker mencionado en la sesión anterior. Para esto, basta con ingresar las credenciales del usuario.
                    .col-lg-7
                      figure
                        img.mx-auto(src="@/assets/curso/temas/93.png",style="max-width: 580px;",alt="Imagen que ilustra la ventana de ingreso a Docker. Cuando se tiene una cuenta de usuario en Docker hub es posible realizar el último procedimiento del tutorial de Docker que se menciona en la sesión anterior. Para esto bastará solo con ingresar las credenciales del usuario.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  .row.mb-0.mb-lg-5
                    .col-lg-5
                      p.mb-0.fw-bold Compartir contenedor en Docker Hub2
                      p.mb-0 En esta última parte, el usuario podrá crear y reutilizar la información del repositorio las veces que lo necesite, asociando la cuenta de Docker Hub, la cual se puede gestionar directamente desde la página de navegación.
                    .col-lg-7
                      figure
                        img.mx-auto(src="@/assets/curso/temas/94.png",style="max-width: 580px;",alt="Imagen que ilustra la manera de compartir contenedor en Docker Hub2 desde repositorio en Docker. En esta última parte el usuario podrá crear y reutilizar la información del repositorio las veces que lo necesite, asociando la cuenta Docker Hub, la cual se puede visualizar directamente desde la página de navegación.")
              .row.justify-content-center(titulo="Paso")
                .col-lg-11
                  .row.mb-0.mb-lg-5
                    .col-lg-5
                      p.mb-0.fw-bold Visualización de imagen compartida
                      p.mb-0 Una vez asociada la cuenta de Docker Hub, el usuario puede crear y compartir imágenes de contenedores. Para visualizar una imagen compartida, se puede acceder al repositorio de Docker Hub desde la página de navegación.
                    .col-lg-7
                      figure
                        img.mx-auto(src="@/assets/curso/temas/95.png",style="max-width: 580px;",alt="Imagen que ilustra la visualización de imagen compartida desde repositorio en Docker.")
            

    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Comandos de Docker
    
    p.mb-4 En la siguiente tabla se presenta  algunos de los comandos más utilizados en el proceso de gestión de imágenes y contenedores usando la plataforma Docker.

    .row.justify-content-center.mb-5
      .col-lg-10
        .fondo-color-sistema-i.px-4.py-3.pb-5
          .titulo-sexto.color-acento-contenido
            p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Tabla 1.] Comandos de Docker

          .row.justify-content-center
            .col-lg-10
              .tabla-a.tabla-personalizada-1
                table
                  thead
                    tr
                      th Comando
                      th Significado
                  tbody
                    tr
                      td #[b docker ps]
                      td Muestra todos los contenedores en ejecución
                    tr
                      td #[b docker ps -a]
                      td Muestra todos los contenedores en ejecución y detenidos.
                    tr
                      td #[b docker start]
                      td Inicia un contenedor.
                    tr
                      td #[b docker stop]
                      td Detiene un contenedor.
                    tr
                      td #[b docker attach]
                      td Se conecta a un contenedor que está en ejecución.
                    tr
                      td #[b docker run]
                      td Crea y ejecuta un contenedor.
                    tr
                      td #[b docker rm]
                      td Elimina un contenedor.
                    tr
                      td #[b docker images]
                      td Muestra todas las imágenes.
                    tr
                      td #[b docker build]
                      td Crea una imagen de un #[em tarball].
                    tr
                      td #[b docker search]
                      td Busca imágenes disponibles en Docker Hub para reutilización.
    
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Imágenes y contenedores #[em (containers)]
    
    .row.mb-5
      .col-lg-10.col-md-8
        p.mb-0 Una imagen es una especie de plantilla que usa el motor de Docker para la construcción de un contenedor. Es un archivo del sistema privado solo para contenedores y provee todos los archivos y códigos que el contenedor necesita. A su vez, un contenedor de Docker se puede considerar como la instancia donde se implementa todo lo descrito en una imagen de Docker, es decir, un contenedor se construye a partir de una imagen. Si se tuviera que hacer un paralelo con sistemas de virtualización con hipervisores, una imagen sería el equivalente a lo que representaría un archivo ISO y un contenedor sería el equivalente a una máquina virtual.
      .col-lg-2.col-md-4.mb-4.mb-md-0.order-first.order-md-last
        figure
          img.mx-auto(src="@/assets/curso/temas/72.svg",style="max-width: 190px;")

    .row.justify-content-center.mb-4
      .col-lg-8
        .fondo-color-sistema-i.px-4.py-3.pb-5
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Figura 14.] Equivalencia de elementos entre modelos con hipervisores y contenedores
              figure
                img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/73.svg",style="max-width: 610px;",alt="Diagrama comparativo entre el esquema tradicional de virtualización y el esquema de contenedores. El esquema tradicional incluye herramientas de virtualización con hipervisores y máquinas virtuales, mientras que el esquema de contenedores incluye imágenes de Docker y contenedores.")
                img.mx-auto.d-lg-none(src="@/assets/curso/temas/75.svg",style="max-width: 434px;",alt="Diagrama comparativo entre el esquema tradicional de virtualización y el esquema de contenedores. El esquema tradicional incluye herramientas de virtualización con hipervisores y máquinas virtuales, mientras que el esquema de contenedores incluye imágenes de Docker y contenedores.")
    
    p.mb-4 A continuación, se deberá realizar un ejemplo de imágenes y contenedores.

    .row.justify-content-center
      .col-lg-10
        .p-4.fondo-personalizado-6.borde-11.mb-5(data-aos="flip-up")
          .row
            .col-auto(style="margin: auto;")
              .burbuja-1.fondo-color-acento-contenido.mx-auto.mb-3.mb-md-0
                figure.p-1
                  img.mx-auto(src="@/assets/curso/temas/74.svg",style="max-width: 47px;")
            .col-lg.mb-4.mb-md-0.col-md-6
              h4.color-color-acento-contenido Ejemplo de imágenes y contenedores
              p.mb-0.text-white Este PDF nos presenta cómo crear en nuestra máquina local un servidor de Ubuntu con Mysql usando la tecnología de contenedores.
            .col-md-auto.text-center(style="place-self:center;")
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo2.pdf')" target="_blank")
                span(style="color:initial;") Descargar
                i.fas.fa-link(style="color:initial;")
    
    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4 DockerFile
    
    p.mb-4 Es un archivo de texto plano en el que se listan instrucciones que se pasan al motor de Docker para la automatización del proceso de construcción de imágenes y contenedores. Este archivo puede incluir instrucciones como las que se indican en la siguiente tabla.

    .row.justify-content-center.mb-4
      .col-lg-10
        .fondo-color-sistema-i.px-4.py-3.pb-5
          .titulo-sexto.color-acento-contenido
            p.mb-0(style="font-size: 14px;") #[b(style="font-size: 13px;") Tabla 2.] Sentencias comunes en un archivo Dockerfile

          .row.justify-content-center
            .col-lg-10
              .tabla-a.tabla-personalizada-1
                table
                  thead
                    tr
                      th(style="width: 200px;") Instrucción
                      th(style="max-width: 200px;") Significado
                  tbody
                    tr
                      td #[b FROM]
                      td Le indica la imagen inicial a descargar y a partir de la cual se espera montar el contenedor a construir. Esta sentencia es obligatoria ya que todos los contenedores se construyen de imágenes.
                    tr
                      td #[b MAINTAINER]
                      td Nombre de la persona que está creando el archivo.
                    tr
                      td #[b RUN]
                      td Ejecución de comandos específicos sobre la imagen descargada en el FROM.
                    tr
                      td #[b EXPOSE]
                      td Apertura de puertos en el contenedor.
                    tr
                      td #[b CMD]
                      td Fija un comando o proceso que se ejecutará cada vez que se ejecute un contenedor desde la nueva imagen.

    p.mb-4 Para información más detallada, en el material complementario se encuentran los enlaces para la documentación de referencia de Docker sobre archivos Dockerfile y la documentación de Dockerfile para Windows.

    .row.justify-content-center
      .col-lg-10
        .p-4.fondo-personalizado-6.borde-11.mb-4(data-aos="flip-up")
          .row
            .col-auto(style="margin: auto;")
              .burbuja-1.fondo-color-acento-contenido.mx-auto.mb-3.mb-md-0
                figure.p-1
                  img.mx-auto(src="@/assets/curso/temas/74.svg",style="max-width: 47px;")
            .col-lg.mb-4.mb-md-0.col-md-6
              h4.color-color-acento-contenido Automatizar el proceso de construcción y configuración de una imagen utilizando un archivo Dockerfile
              p.mb-0.text-white Este PDF presenta cómo automatizar el proceso de construcción y configuración de una imagen utilizando un archivo DockerFile, en lugar de ejecutar comandos manualmente.
            .col-md-auto.text-center(style="place-self:center;")
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo3.pdf')" target="_blank")
                span(style="color:initial;") Descargar
                i.fas.fa-link(style="color:initial;")

    p.mb-0 Para este caso, se creará una imagen con sistema operativo Ubuntu, con un servidor Apache funcionando por el puerto 80. En el caso de Windows, se puede utilizar el editor de texto que se considere más conveniente, pero deberá tener en cuenta la ubicación del archivo. Este deberá llamarse Dockerfile y, adicionalmente, no puede tener ninguna extensión.
    
  
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
