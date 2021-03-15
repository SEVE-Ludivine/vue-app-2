<template>
  <l-marker
      :key="marker.recordid"
      :lat-lng="marker.fields.location"
  >
<!--
    <l-icon
        :icon-url="src/assets/maps.png"
    />-->
  </l-marker>
</template>

<script>
import { LMarker/*, LIcon*/ } from 'vue2-leaflet'
export default {
  components: { LMarker/*, LIcon */},
  props: {
    marker: {
      type: Object,
      required: true
    }
  }

}
</script>

<style>
.restaurant-icon {
  height: 50px;
  width: auto;
}
</style>