<template>

  <section class="src-components-http">
    <div class="jumbotron mt-3">
      <h2>Lista de usuarios</h2>
      <hr>

      <button class="btn btn-success mx-3" @click="getAxios()">ACTUALIZAR</button>

      <button class="btn btn-danger mx-3" @click="axiosDelete()">VACIAR LISTA</button>

      <br>
      <br>

      <div v-if="datos.length"> 
          <table class="table">
              <tr class="bg-success text-white">
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Email</th>
              </tr>
              <tr class="bg-info text-white" v-for="(dato,index) in datos" :key="index">
                  <td> {{dato.id}} </td>
                  <td> {{dato.nombre}} </td>
                  <td> {{dato.edad}} </td>
                  <td> {{dato.email}}</td>
              </tr>
          </table>         
      </div>
      <div class="alert alert-danger" v-else-if="!datos.length && datos!=-1" >
            No hay usuarios disponibles
      </div>

    </div>
  </section>

</template>

<script lang="js">

  import axios from 'axios'

  export default  {
    name: 'src-components-http',
    props: [],
    mounted () {
      this.getAxios()
    },
    data () {
      return {
        url: 'https://5eaf2e3f0605ed0016d2c738.mockapi.io/Posts/',
        clicked: false,
        datos: -1
      }
    },
    methods: {
      getAxios() {
        axios.get(this.url)
        .then( res => {
            this.datos=res.data
          })
      },

      axiosDelete(){
        axios.get(this.url)
        .then( res =>{
          res.data.forEach(dato => {
            axios.delete(this.url + dato.id)
          })
        })

      },
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-http {

  }

  .jumbotron {
    background-color: rgb(2, 32, 26);
    color: white;
  }

  hr {
    background-color: white;
  }
</style>
