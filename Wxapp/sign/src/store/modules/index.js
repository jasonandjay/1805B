// import { getCarousel } from "../../services/index";

const state = {
    carousel: []
};

const getters = {};

const mutations = {
    save(state, payload){
        for (let key in payload){
            state[key] = payload[key];
        }
    }
};

const actions = {
    async getCarousel({commit}, payload){
        // let result = await getCarousel();
        // commit('save', {carousel: result});
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
