<template>
    <div>
        <div>
            <div>
                <h1 class="text-center">Hello {{user.name}}</h1>
            </div>
            <div class="mt-16 max-w-lg mx-auto">
                <h3 class="text-center">Logged in devices</h3>
                <button
                    class="button button-red mt-6 uppercase"
                    @click.prevent="logOutAll"
                >Logout all</button>
                <div class="mt-2 bg-white shadow-md">
                    <table class="table is-bordered">
                        <thead>
                            <tr>
                                <th>IP</th>
                                <th>User agent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(loginToken, index) in user.login_tokens" :key="index">
                                <td>{{loginToken.ip}}</td>
                                <td>{{loginToken.ua}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
    middleware: 'authenticated',
    methods: {
        ...mapActions('auth', ['logOutAll'])
    },
    computed: {
        ...mapState('auth', {
            user: state => state.user
        }),
        ...mapGetters('auth', ['loggedIn'])
    }
};
</script>
