<template>
  <v-sheet :color="getColor()">
    <v-responsive :aspect-ratio="5/7">
      <p
        style="color:black; font-size:12em; text-align:center; line-height:100%; margin:revert;"
      >{{ points }}</p>
    </v-responsive>
  </v-sheet>
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