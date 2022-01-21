<template>
  <a id = "top" href="_top" @click.prevent>top</a>
  <div class="traffic-lights" @click="print('LIGHTS')" @scroll.passive="throttle" >
    <div class="traffic-light stop" @click.stop.capture="print('STOP')"><p @click="print('STOP2')">STOP</p></div>
    <div class="traffic-light wait" @click.self="print('WAIT')"><p @click="print('WAIT2')">WAIT</p></div>
    <div class="traffic-light go" @click.once="print('GO')"><p>GO</p></div>
  </div>
  <input placeholder="press shift + j" type="text" @keydown.prevent.shift.j="print('감자')">
  <input placeholder="no cjk" type="text" v-model.trim="inputModel">
  <input placeholder="no cjk lazy" type="text" v-model.lazy="inputModel">
  <input placeholder="cjk" type="text" :value="inputModelCJK" @input="inputModelCJK = $event.target.value">
  <input placeholder="number" type="text" v-model.number="inputModelNum">
  <p
    :class="{active : isActive}"
    @click="toggleActive"
  >
    {{msg}}
  </p>
  <p
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle"
  >
    {{reversedMsg}}
  </p>
  <button @click="add">ADD</button>
  <h1 
    @[ev]="increase"
    :[attr]="'active'"
  >
    {{count}}
  </h1>
  <template v-if="count > 4">
    <p>4보다 큽니다!</p>
    <p>왜 큰 지는 저도 모릅니다!</p>
  </template>
  <button @click="toggleShowList">Toggle List</button>
  <button @click="pushList">Push List</button>
  <button @click="popList">Pop List</button>
  <button @click="filterList">filter List</button>
  <ul 
      v-show="fruits.length > 0 && showList"
  >
    <Fruit 
      v-for="{id, name} in renderedFruits"
      :key="id"
      :name="`${name} - ${id}`"
    />
  </ul>
  <button @click="handler('Handler1', $event), handler('Handler2', $event)">alert</button>
</template>

<script>
import shortid from 'shortid';
import Fruit from './components/Fruit';
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
      fruits: [
        {id : shortid.generate(), name : 'Apple'},
        {id : shortid.generate(), name : 'Banana'},
        {id : shortid.generate(), name : 'Cherry'},
      ],
      renderedFruits : [],
      ev: "click",
      attr: "class",
      isActive : false,
      fontStyle : {
        color: 'red',
        'font-size': '50px'
      },
      backgroundStyle : {
        'background-color' : 'black'
      },
      showList : false,
      inputModel : '',
      inputModelCJK : '',
      inputModelNum : 0,
    }
  },
  computed: {
    reversedMsg : {
      get() {
        return this.msg.split('').reverse().join('');
      },
      set(newValue) {
        this.msg = newValue;
      }
    },
    filteredList() {
      return this.fruits.filter(el => el.name === "Apple")
    }
  },
  watch: {
    reversedMsg(newValue) {
      console.log("[reversedMsg]", newValue);
    },
    inputModel(newValue) {
      console.log("[inputModel]", newValue);
    },
    inputModelCJK(newValue) {
      console.log("[inputModelCJK]", newValue);
    },
    inputModelNum(newValue) {
      console.log("[inputModelNum]", typeof newValue, newValue);
    }
  },
  created() {
    this.renderedFruits = this.fruits;
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
    },
    add() {
      this.reversedMsg += '!?';
    },
    toggleActive() {
      this.isActive = !this.isActive;
    },
    toggleShowList() {
      this.showList = !this.showList;
    },
    changeStyle() {
      this.fontStyle.color = 'orange';
      this.backgroundStyle['background-color'] = "gray";
    },
    pushList() {
      this.fruits.push({
        id: shortid.generate(),
        name: '_'
      })
    },
    popList() {
      this.fruits.pop()
    },
    filterList() {
      this.renderedFruits = this.filteredList;
    },
    handler(text , ev) {
      console.log(text, ev.target);
    },
    print(text) {
      console.log(text);
    },
    throttle() {
      for (let i = 0; i < 100; ++i) {console.log('a');}
    }
  }
}
</script>

<style lang="scss">
  a#top {
    position:fixed;
    bottom: 10px;
    right: 10px;

    width : 20px;
    height : 20px;
    background-color: black;
    color: gray;
    border-radius: 10px;
    font-size: 5px;
    text-align: center;
  }
  .traffic-lights {
    background-color: gray;
    width: 162.5px;
    height: 35px;
    overflow-y: auto;
    padding: 12.5px;
    display: flex;
    justify-content: center;
    border-radius: 6px;
    .traffic-light {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      border: 1px solid black;
      p {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 5px;
        text-align: center;
      }
    }
    .stop {
      background-color: red;
    }
    .wait {
      background-color: orange;
    }
    .go {
      background-color: green;
    }
  }

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