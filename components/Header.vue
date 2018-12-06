<template>
    <header>
        <div class="flex items-center w-full bg-blue-dark fixed pin-t z-10">
            <nav class="pl-2 w-full flex items-center shadow-md h-12 items-center">
                <div class="w-1/2 self-center">
                    <nuxt-link to="/">
                        <h2 class="text-white uppercase">Auth</h2>
                    </nuxt-link>
                </div>
                <div class="w-1/2 text-sm clearfix flex justify-end mr-4">
                    <template v-if="loggedIn">
                        <nuxt-link
                            class="text-white hover:text-grey-light uppercase px-6 font-bold"
                            to="/profile"
                        >Profile</nuxt-link>
                        <a
                            class="justify-center text-white hover:text-grey-light uppercase font-bold"
                            href="/logout"
                            @click.prevent="logOut()"
                        >
                            <span>Log out</span>
                        </a>
                    </template>
                    <template v-else>
                        <nuxt-link
                            class="text-white hover:text-grey-light uppercase px-6"
                            to="/login"
                        >Sign in</nuxt-link>

                        <nuxt-link
                            class="text-white hover:text-grey-light uppercase"
                            to="/register"
                        >Sign up</nuxt-link>
                    </template>
                </div>
            </nav>
        </div>
    </header>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions('auth', ['logOut'])
    },
    computed: {
        ...mapGetters('auth', ['loggedIn'])
    }
};
</script>



