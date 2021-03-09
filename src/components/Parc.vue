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
  }
}
</script>
<style scoped>
</style>