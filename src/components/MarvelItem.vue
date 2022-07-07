<template>
  <div>
    <div class="box-part text-center ">
      <div class="title">
        <h4>{{ items.name }}</h4>
      </div>
      <div class="title p-2">
        <img class="img-r" :src="items.url" alt="">
      </div>
      <div class="title ">
        <h6>{{ items.description }}</h6>
      </div>
      <div class="title">
        <h4>{{ items.modified | formatDate }}</h4>
      </div>
      <div>
        <button type="button" class="btn btn-dark" @click="selectItem(items)">Editar</button>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "MarvelItem",
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('selectItem', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.img-r {
  max-width: 300px;
  max-height: 300px;
}
</style>
