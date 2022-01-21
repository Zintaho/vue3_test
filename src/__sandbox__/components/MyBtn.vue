<template>
<span>{{hMsg.value}}</span>
  <span v-bind="$attrs">{</span>
  <div
    ref="btn"
    :class="{
        btn:true,
        small
    }"
    :style="{
        color
    }"
    @click="$emit('sing', $event)"
  >
      <slot name="icon" />
      <slot name="name" />
  </div>
  <span v-bind="$attrs">}</span>
</template>

<script>
export default {
    inheritAttrs: false,
    emits: [
        "sing"
    ],
    props: {
        small: {
            type: Boolean,
            value: false
        },
        color: {
            type: String,
            value : 'gray'
        }
    },
    inject: [
        'hMsg'
    ]
}
</script>

<style scoped lang="scss">
    .btn {
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        color: white;
        background-color: #222;
        cursor: pointer;

        &.small {
            font-size: 0.7rem;
        }
    }
</style>