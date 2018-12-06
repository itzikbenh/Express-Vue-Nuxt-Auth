export const actions = {
    async nuxtServerInit({ dispatch }, { req, res }) {
        res.cookie('X-CSRF-TOKEN', req.csrfToken());
        await dispatch('auth/setUser');
    }
};
