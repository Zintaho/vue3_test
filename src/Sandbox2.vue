<template>
    <h1 ref="hmsg">{{headerMessage}}</h1>
    <input v-model.lazy="headerMessage"/>
    <MyBtn color="red">
        <template #name>Apple</template>
        <template #icon>(A)</template>
    </MyBtn>
    <MyBtn color="yellow">
        <template #name>Banana</template>
        <template #icon>(B)</template>
    </MyBtn>
    <MyBtn color="violet">
        <template #name>Cherry</template>
        <template #icon>(C)</template>
    </MyBtn>
    <my-btn
        ref="lemon"
        class="alter" 
        :style="{color: 'royalblue'}"
        @sing="waek"
    >
        <template #name>Lemon</template>
        <template #icon>(L)</template>
    </my-btn>
</template>

<script>
import MyBtn from './components/MyBtn.vue';
import {computed} from 'vue';
export default {
    components: {
        MyBtn
    },

    data() {
        return {
            headerMessage : 'test'
        }
    },

    mounted() {
        console.log(this.$refs.lemon.$refs.btn);
    },

    methods: {
        waek(event) {
            console.log("waek", event.target);
        }
    },

    provide() {
        return {
            hMsg : computed(() => this.headerMessage)
        }
    }
}
</script>
