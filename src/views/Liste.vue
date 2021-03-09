
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <h1 class="my-4">Liste des parcs de Nantes</h1>
        <HelloWorld msg="PARCS"/>
        <!--<a target="_blank" href={{ product.fields.siteweb }}>{{ product.fields.siteweb }}</a>-->
      </div>
      <div class="col-lg-9">
        <div class="row">
          <Parc v-for="listeParc in this.json" :key="listeParc.recordid" :obj="listeParc" src="listeParc"></Parc>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld";
import Parc from "../components/Parc";
import axios from "axios";
const apiURL = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique'
export default {
  name: "Parcs",
  components: {HelloWorld, Parc},
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
              this.json = (res.data.records)
              console.log(res.data.records)
            })
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
