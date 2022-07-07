const mutations = {
    SET_DATA_LIST_MARVEL(state, payload) {
        state.dataMarvelState = payload;
    },
    SET_DATA_SEARCH_MARVEL(state, payload) {
        state.verifyName = payload;
        state.dataMarvelState = payload;
    },
    SET_SHOW_MODAL(state, payload) {
        state.showModal = payload;
    },
}
export default mutations;
