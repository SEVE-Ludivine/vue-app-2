<!--<template>-->
<!--  <div class="liste">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <span v-for="records in dataAPI">-->
<!--      <p>{{records.datasetid}}</p>-->
<!--      <p>Vous êtes {{records.fields.commune}} {{records.rank}} {{records.leaguePoints}} LP</p>-->
<!--      <p>Vous avez fait {{records.wins}} TOP 1.</p>-->
<!--    </span>-->
<!--  </div>-->
<!--</template>-->
<!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->
<!--<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>-->
<!--<script>-->
<!--// @ is an alias to /src-->
<!--import HelloWorld from '@/components/HelloWorld.vue'-->
<!--const apiURL = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique'-->

<!--	const demo = new Vue({-->
<!--		el: '#demo',-->
<!--		data: {-->
<!--      dataAPI: []-->
<!--    },-->
<!--		methods: {-->
<!--      fetchData2: async function (pseudo) {-->
<!--          const dataAPI= await axios.get(apiURL)-->
<!--          this.dataAPI = dataAPI.data-->
<!--          console.log(this.dataAPI)-->
<!--          console.log(this.dataAPI.records)-->
<!--          console.log(this.dataAPI.records.datasetid)-->
<!--      }-->
<!--		}-->
<!--  })-->

<!--export default {-->
<!--  name: "Liste des données",-->
<!--  components: {-->
<!--    HelloWorld-->
<!--  }-->
<!--}-->
<!--</script>-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <h1 class="my-4">Liste des parcs de Nantes</h1>
        <HelloWorld msg="PARCS"/>
      </div>
      <div class="col-lg-9">
        <div class="row">
          <Product v-for="parc in this.json" :key="parc.id" :obj="parc" src="mag"></Product>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld";
import axios from "axios";
const apiURL = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique'
export default {
  name: "Kiosque",
  components: {HelloWorld},
  created() {
    this.fetchData()
  },
  data() {
    return {
      json : [],
    }
  },
  methods : {
    fetchData: async function () {
      try {
        axios.get(apiURL)
            .then(res => {
              this.json = (res.data)
              console.log(res.data)
            })
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
