<template>
  <div @click="increase">
    {{count}} / {{doubleCount}}
  </div>
  <div @click="changeMessage">
    {{message}} / {{reversedMessage}}
  </div>
  <SB3Component
    @gather="gather"
    text = "감자"
  />
</template>

<script>
import {ref, computed, watch, onMounted} from 'vue';
import SB3Component from '../components/SB3Component.vue';
export default {
    components: {
        SB3Component
    },
    setup() {
        const count = ref(0);
        const doubleCount = computed(() => count.value * 2);
        function increase() {
            count.value += 1;
        }

        const message = ref('Hello world!');
        const reversedMessage = computed(() => message.value.split('').reverse().join(''));
        function changeMessage() {
            message.value += '!';
        }
        watch(message, (newValue) => {
            console.log(newValue);
        })

        onMounted(() => {
            console.log(count.value);
        });

        function gather() {
            console.log("GATHER!");
        }

        return {
            count, increase, doubleCount,
            message, changeMessage, reversedMessage,
            gather
        }
    }
}
</script>

<style scoped>
    div {
        border: 1px solid black;
    }
</style>