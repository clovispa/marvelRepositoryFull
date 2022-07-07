<template>
    <div class="content">
        <search-marvel @searchMarvel="filtermarvelList" @getAllMarvel="getService"/>
        <button class="btn btn-dark" type="button" @click="openModal" id="button-addon2">Agregar</button>
        <MarvelContollers :dataMarvel="dataMarvel" @setSelectItem="selectData"/>
        <infinite-loading @infinite="getService">
            <div slot="no-results"></div>
            <div slot="no-more">
            </div>
         </infinite-loading>
      <ModalMarvel
          v-if="showModal"
          :showModal="showModal"
          @closeModal="closeModal"
          :addButton="addButton"
          :setItem="setItem"
          @newItem="newItem"
          @editItem="editItem"/>
    </div>
</template>

<script>
  import MarvelContollers from "@/components/MarvelContollers";
  import {mapActions, mapGetters} from 'vuex'
  import InfiniteLoading from 'vue-infinite-loading'
  import SearchMarvel from "@/components/SearchMarvel";
  import ModalMarvel from "@/components/ModalMarvel";

  export default {
  name: "MarvelList",
  components: {ModalMarvel, MarvelContollers, InfiniteLoading, SearchMarvel},
    data() {
      return {
        addButton: false,
        dataMarvel: [],
        url: '',
        size: 'standard_xlarge',
        page: 1,
        dataResult: [],
        setItem: {},
        defaultDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
            'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
            'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."'
      }
    },
    computed: {
      ...mapGetters(['marvelListState', 'showModal'])
    },
  methods: {
    ...mapActions(['getMarvelList', 'getMarvelSearch', 'openMarvelModal', 'closeMarvelModal']),
    async getService($state) {
      try {
       await this.getMarvelList(this.page)

        if (this.marvelListState.length) {
          this.page += 100
          this.dataResult.push(...this.marvelListState)
         this.getList(this.dataResult)
          $state.loaded()
        } else {
          $state.complete()
        }
      } catch (error) {
        console.log('get results err', error)
      }
    },
    async getList(item) {
      this.dataMarvel = item?.map(item => {
        let  size = 'standard_xlarge.jpg';
        return {
          id: item.id,
          name: item.name,
          url: `${item.thumbnail.path}/${size}`,
          description: item.description || this.defaultDescription,
          modified: item.modified
        }
      })
    },
   async filtermarvelList (item) {
      await this.getMarvelSearch(item)
     this.dataMarvel =this.marvelListState
     this.getList(this.dataMarvel)
    },
    openModal() {
      this.addButton = true;
      this.setItem = {}
      this.openMarvelModal()
    },
    closeModal() {
      this.closeMarvelModal()
    },
    selectData(item){
      this.addButton = false;
      this.openModal()
      this.setItem = item;
    },
    newItem(item) {
        this.dataMarvel.unshift(item);
    },
    editItem(item) {
      const marvel = this.dataMarvel.find( i => i.id === item.id)
      marvel.name = item.name;
      marvel.description = item.description;
      marvel.modified = item.modified;
    }
  },
}
</script>
