<template>
  <p
  >
    {{msg}}
  </p>
  <p>
    {{reversedMsg}}
  </p>
  <h1 
    @[ev]="increase"
    :[attr]="'active'"
  >
    {{count}}
  </h1>
  <div v-if="count > 4">
    4보다 큽니다!
  </div>
  <ul 
      v-if="fruits.length > 0">
    <Fruit 
      v-for="fruit in fruits"
      :key="fruit"
      :name="fruit"
    />
  </ul>
</template>

<script>
import Fruit from './components/Fruit'
export default {
  components: {
    Fruit
  },
  beforeCreate() {
    console.log("BEFORE CREATE!", this.count);
    console.log(document.querySelector('h1'));
    console.log(this.reversedMsg);
  },  
  data() {
    return {
      msg: 'Hello World!',
      count: 0,
      fruits: ["Apple", "Banana", "Cherry"],
      ev: "click",
      attr: "class"
    }
  },
  computed: {
    reversedMsg() {
      return this.msg.split('').reverse().join('');
    }
  },
  created() {
    console.log("CREATED!", this.count);
    console.log(document.querySelector('h1'));
  },
  beforeMount() {
    console.log("BEFORE MOUNT!", this.count);
    console.log(document.querySelector('h1'));
  },
  mounted() {
    console.log("MOUNTED!", this.count);
    console.log(document.querySelector('h1'));
  },
  methods: {
    increase() {
      this.count += 1;
    }
  }
}
</script>

<style lang="scss">
  .active {
    background-color: cornsilk;
  }

  h1 {
    font-size: 50px;
    color: royalblue;
  }

  ul {
    li {
      font-size: 40px;
    }
  }
</style>