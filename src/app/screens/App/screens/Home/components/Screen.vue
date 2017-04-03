<template>
  <div class="HomeScreen u-text-center">
    <vue-presentation></vue-presentation>
  </div>
</template>

<script>
  import VuePresentation from 'App/shared/components/VuePresentation'

  export default {
    name: 'HomeScreen',
    components: {
      VuePresentation
    }
  }
</script>
