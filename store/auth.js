import Vue from 'vue';

export const state = () => ({ user: {}, loggingOut: false });

export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    loggingOut(state, bool) {
        state.loggingOut = bool;
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
        commit('loggingOut', true);
        try {
            await this.$axios.post('http://localhost:3000/logout');
            //So your users can enjoy the nice animation
            setTimeout(() => {
                this.$router.replace({ path: 'login' });
                commit('setUser', {});
                commit('loggingOut', false);
                Vue.prototype.$notify.open('You have successfully logged out.');
            }, 2000);
        } catch (error) {
            commit('loggingOut', false);
        }
    },

    async logOutAll({ commit }) {
        commit('loggingOut', true);
        try {
            await this.$axios.post('http://localhost:3000/logout/all');
            //So your users can enjoy the nice animation
            setTimeout(() => {
                this.$router.replace({ path: 'login' });
                commit('setUser', {});
                commit('loggingOut', false);
                Vue.prototype.$notify.open(
                    'You have successfully logged out from all devices.'
                );
            }, 2000);
        } catch (error) {
            commit('loggingOut', false);
        }
    }
};

export const getters = {
    loggedIn(state) {
        return Object.keys(state.user).length;
    },
    loggingOut(state) {
        return state.loggingOut;
    }
};
