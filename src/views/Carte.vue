<template>
  <div>
    <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
    >
      <l-tile-layer
          :url="url"
      >
      </l-tile-layer>
      <Maps v-for="marker in this.json" :key="marker.recordid" :marker="marker" src="marker" >
      </Maps>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import Maps from "../components/Maps";

import axios from "axios";
const apiURL = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique'

export default {
  components: {
    LMap,
    LTileLayer,
    Maps
  },
  created() {
    this.fetchData()
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [ 47.218702, -1.553207 ],
      zoom: 14,
      json : [],
      // markers: []
    }
  },
  methods: {
    fetchData: async function () {
      try {
        axios.get(apiURL)
            .then(res => {
              this.json = (res.data.records)
              console.log(res.data.records)
              // for(let e of this.json){
              //   this.markers.push(e.fields.location)
              //   console.log("LOCATION "+e.fields.location)
              //   console.log(this.markers)
              //   console.log(this.markers.id)
              //   console.log(this.markers.location)
              // }
            })
      } catch (error) {
        console.log(error);
      }
    },
    zoomUpdated (zoom) {
      this.zoom = zoom;
      console.log(this.markers)
    },
    centerUpdated (center) {
      this.center = center;
    }
  }
}

</script>

<style>
.map {
  position: absolute;
  width: 70%;
  height: 70%;
  overflow :hidden
}
</style>