<template>
<div style="display:flex; justify-content:center;">
  <v-sheet :color="getColor()"  style="height:3.5in;width:2.5in">
    <p style="color:black; font-size:1.75in;  text-align:center; line-height:3.5in">{{ points }}</p>
  </v-sheet>
</div>
</template>

<script>
export default {
  computed: {
    points() {
      return this.$store.state.points
    }
  },
  methods: {
    getColor() {
      let colors = {
        1: 'purple',
        2: 'blue',
        3: 'cyan',
        5: 'green',
        8: 'yellow',
        13: 'orange',
        21: 'red'
      }

      return colors[this.$store.state.points] + ' lighten-3'
    }
  },
  layout: 'card'
}
</script>