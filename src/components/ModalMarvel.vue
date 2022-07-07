<template>
  <div class="modalmarvel" v-if="showModal" >
    <div class="modalmarvel_content">
      <div class="">
        <span class="close" @click="closeModal">&times;</span>
        <br>
        <br>
      </div>
      <div class="container" >
        <div class="mb-3">
          <label  class="form-label">Nombre : </label>
          <input v-model="hero.name" type="email" class="form-control"  placeholder="Ingrese nombre">
        </div>
        <div class="mb-3" v-if="validateAction.code==='save'">
          <label  class="form-label">ingrese un enlace : </label>
          <input v-model="hero.url" type="email" class="form-control"  placeholder="Ingrese enlace">
        </div>
        <div class="mb-3 p-2" v-else >
          <img class="img-r" :src="hero.url" alt="">
        </div>
        <div class="mb-3 ">
          <label class="form-label">Descripción</label>
          <textarea v-model="hero.description" class="form-control"  rows="3"></textarea>
        </div>
        <div class="mb-3">
          <div class="title" v-if="existHero">
            <div class="alert alert-info" role="alert">
              Heroe ya existe!
            </div>
          </div>
        </div>
      </div>
      <div >
        <button type="button" class="btn btn-dark" @click="addItem(validateAction.code)">{{ validateAction.text }}</button>
      </div>
    </div>
  </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";
import moment from "moment";
import {v4 as uuidv4} from 'uuid'

export default {
  name: "ModalMarvel",
  components: {  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: false
    },
    setItem: {
      type: Object,
    },
    addButton: {
      type: Boolean
    }
  },
  data() {
    return {
      hero : {
        id: null,
        name: '',
        description: '',
        modified: '',
        url: ''
      },
      existHero: false
    }
  },
  mounted() {
    if(!this.addButton) {
      this.hero.id = this.setItem.id;
      this.hero.name = this.setItem.name;
      this.hero.description = this.setItem.description;
      this.hero.url = this.setItem.url;
    }
  },
  computed: {
    ...mapGetters(['nameValid']),
    validateAction() {
      if(Object.values(this.setItem).length) {
        return { code: 'edit', text: 'editar'}
      }
      return { code: 'save', text: 'Guardar'}
    }
  },
  created() {
    this.hero = Object.assign({}, this.setItem)

  },
  methods: {
    ...mapActions(['getMarvelSearch']),
   async addItem(action) {
     let date = moment().format("DD-MM-YYYY")
     this.hero.modified =  date;
      if(action === 'edit') {
        this.$emit('editItem',  this.hero)
      } else {
        await  this.getMarvelSearch(this.hero.name)
        if(this.nameValid.length){
         return  this.existHero = true
        } else {
          this.hero.id = uuidv4();
          this.$emit('newItem',  this.hero)


        }
      }
     this.existHero = false
     this.$emit('closeModal')
    },
    closeModal() {
      this.$emit('closeModal')
    }
  }

}
</script>

<style lang="scss" scoped>
.modalmarvel_content {
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.modalmarvel {
  display: block;
  padding-top: 80px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}



.close {
  right: 10px;
  color: #2d24a6;
  float: right;
  font-size: 28px;
  position: absolute;
  top: 10px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  cursor: pointer;
  text-decoration: none;
}

@media (min-width: 768px) {
  .modalmarvel_content {
    max-width: 600px;
   height: 600px;
  }
}
.img-r {
  max-width: 300px;
  max-height: 300px;
}
</style>
