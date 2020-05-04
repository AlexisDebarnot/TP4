<template>

  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
      <h2>Formulario</h2>
      <hr>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <br>
        <validate tag ="div">
          <label for ="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre"
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.nombre"
            required  
            caracteres
            no-espacios
          >

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Nombre requerido</div>
            <div slot="no-espacios" class="alert alert-danger my-1">No se permiten espacios intermedios</div>
            <div slot="caracteres" class="alert alert-danger my-1">El nombre debe tener entre 5 y 15 caracteres</div>
          </field-messages>
        </validate>

        <br>

        <validate tag ="div">
          <label for ="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            name="edad"            
            class="form-control" 
            autocomplete="off"
            v-model.number="formData.edad"      
            required
            rango
          >

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Edad requerido</div>
            <div slot="rango" class="alert alert-danger my-1">La edad debe estar entre 18 y 120 años</div>
          </field-messages>


        </validate>

        <br>

        <validate tag ="div">
          <label for ="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            class="form-control" 
            autocomplete="off"
            v-model="formData.email"
            required     
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          >

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Email requerido</div>
            <div slot="pattern" class="alert alert-danger my-1">Email invalido</div>
          </field-messages>


        </validate>

        <br>

        <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>

      </vue-form>

    </div>
  </section>

</template>

<script lang="js">

  import axios from 'axios'

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
        url: 'https://5eaf2e3f0605ed0016d2c738.mockapi.io/Posts/'
      }
    },
    methods: {

      getInitialData() {
        return{
          nombre: '',
          edad: '',
          email: ''
        }
      },
      enviar(){
        this.postAxios()
        this.formData = this.getInitialData()
        this.formState._reset()
      },
      postAxios() {
        let post = {
          nombre: this.formData.nombre,
          edad: this.formData.edad,
          email: this.formData.email
        }
        axios.post(this.url, post, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron {
    background-color: rgb(173, 54, 11);
    color: white;
  }

  hr {
    background-color: white;
  }
</style>
