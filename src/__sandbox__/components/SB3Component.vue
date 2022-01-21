<template>
  <button @click="gather">
      {{text}}
  </button>
</template>

<script>
import { onMounted } from 'vue';
export default {
    props: {
        text: {
            type: String,
            default: 'button'
        }
    },
    emit: ['gather'],
    setup(props, context) {
        function gather() {
            context.emit('gather');
        }

        onMounted(() => {
            console.log(props.text);
        })

        return {
            gather
        };
    }
}
</script>

<style>

</style>