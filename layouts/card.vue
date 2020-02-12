<template>
  <v-app>
    <v-app-bar fixed app>
      <v-btn icon to="/" @click="reset()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods: {
    reset() {
      this.$store.commit('resetPoints')
    }
  }
}
</script>
</script>
