<template>
  <h1>
    {{ count }}
  </h1>
</template>
<script>
export default {
    data() {                //메소드
        return {
            count: 0
        }
    }
}
</script>
<style>
   
</style>


<!--
<template>
  <h1> {{ message }} </h1>
  <HelloWorld />
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue'

export default {
    components: {
        HelloWorld
    },
    data() {
        return {
            message: 'Hello Vue from App.vue !!!'
        }
    }
}
</script>
-->