<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2017-{{ new Date().getFullYear() }} Alexandre Lahure</span>
      <v-fab-transition>
        <v-btn color="secondary" absolute fab right to="/points" top v-show="points">
          <v-badge :content="points">
            <v-icon>mdi-cards</v-icon>
          </v-badge>
        </v-btn>
      </v-fab-transition>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    points() {
      return this.$store.state.points
    }
  },
  data() {
    return {
      title: 'Scrum Poker'
    }
  }
}
</script>
