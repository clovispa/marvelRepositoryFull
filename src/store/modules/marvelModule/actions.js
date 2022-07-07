import MarvelService from "@/service/MarvelService";

const actions = {
    async getMarvelList({commit}, page) {
        try {
            const {data: {data: {results}}} = await MarvelService.marvelList(page);
            commit('SET_DATA_LIST_MARVEL', results)
        } catch (error) {
            console.log(error);
        }
    },
    async getMarvelSearch({commit}, page) {
        try {
            const {data: {data: {results}}} = await MarvelService.searchList(page);
            commit('SET_DATA_SEARCH_MARVEL', results)
        } catch (error) {
            console.log(error);
        }
    },
    openMarvelModal({commit}) {
        commit('SET_SHOW_MODAL', true);
    },
    closeMarvelModal({commit}) {
        commit('SET_SHOW_MODAL', false);
    },
}
export default actions;
