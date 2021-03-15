<template>
  <l-marker
      :key="marker.recordid"
      :lat-lng="marker.fields.location"
  >
    <l-popup>

          {{marker.fields.nom_complet}}

    </l-popup>
  </l-marker>
</template>

<script>
import { LMarker, LPopup } from 'vue2-leaflet'

export default {
  components: {
    LMarker,
    LPopup,
  },
  props: {
    marker: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>