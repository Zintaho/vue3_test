<template>
  <div>
      <span>{{movie.Title}}</span>
      <span>{{` (${movie.imdbID})`}}</span>
  </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style>

</style>