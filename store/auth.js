import Vue from 'vue';

export const state = () => ({
    user: {}
});

export const mutations = {
    setUser(state, user) {
        state.user = user;
    }
};

export const actions = {
    async setUser({ commit }) {
        try {
            const user = await this.$axios.$get('http://localhost:3000/user');
            commit('setUser', user);
        } catch (error) {
            commit('setUser', {});
        }
    },
    async logOut({ commit }) {
        try {
            await this.$axios.post('http://localhost:3000/logout');
            this.$router.replace({ path: 'login' });
            commit('setUser', {});
            Vue.prototype.$notify.open('You have successfully logged out.');
        } catch (error) {}
    },

    async logOutAll({ commit }) {
        try {
            await this.$axios.post('http://localhost:3000/logout/all');
            this.$router.replace({ path: 'login' });
            commit('setUser', {});
            Vue.prototype.$notify.open(
                'You have successfully logged out from all devices.'
            );
        } catch (error) {}
    }
};

export const getters = {
    loggedIn(state) {
        return Object.keys(state.user).length;
    }
};
