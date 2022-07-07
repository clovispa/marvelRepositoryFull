<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
           v-for="(marvel, index) in dataMarvel"
           :key="index"
      >
        <MarvelItem :items="marvel" @selectItem="selectItem"/>
      </div>

    </div>
  </div>
</template>

<script>
import MarvelItem from "@/components/MarvelItem";

export default {
  name: "MarvelContollers",
  props: {
    dataMarvel: {
      type: Array,
      required: true
    }
  },

  components: {MarvelItem,},

  methods: {
    selectItem(item) {
      this.$emit('setSelectItem', item)
    }
  }
}
</script>

<style scoped>

</style>
