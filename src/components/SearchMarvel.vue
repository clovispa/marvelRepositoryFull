<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
      </div>
      <div class="col-sm">
        <div class="input-group mb-3">
          <input v-model="marvel" type="text" class="form-control" placeholder="Buscar personajes"
                 aria-label="Buscar personajes" aria-describedby="button-addon2">
          <button class="btn btn-dark" @click="onSubmit" type="button" id="button-addon2">Buscar</button>
        </div>
      </div>
      <div class="col-sm">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMarvel",
  data() {
    return {
      marvel: ''
    }
  },
  watch: {
    'marvel'(old) {
      if (old === '') {
        this.$emit('getAllMarvel', this.marvel)
      }

    }
  },
  methods: {
    onSubmit() {
      this.$emit('searchMarvel', this.marvel)
    }
  }
}
</script>

<style scoped>

</style>
