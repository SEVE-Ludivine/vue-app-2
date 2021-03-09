<template>
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{{ product.fields.nom_complet }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ product.fields.adresse }}, {{ product.fields.code_postal }} {{ product.fields.commune }}</h6>
        <p class="card-text">Accès par les transports en communs : {{ product.fields.acces_transport_commun }}</p>
        <div class="card-text" v-if="chien==='NON'">Les chiens ne sont pas autorisés dans ce parc.</div>
        <div class="card-text" v-else>Les chiens sont autorisés dans ce parc.</div>

      </div>
    </div>
  </div>
</template>

<script>
const apiURL = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique'
export default {
  name: "Parc",
  props : ["obj","src"],
  data() {
    return {
      product : {},
      errors: "",
      error : false,
      chien: null
    }
  },
  created: function() {
    this.product = this.obj;
    this.chien= this.product.fields.chiens_autorises
    console.log(apiURL);
  }
}
</script>
<style scoped>
</style>