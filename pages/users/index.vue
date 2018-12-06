<template>
    <div class="max-w-md mx-auto mt-16">
        <input class="input" type="text" v-model="userId">
        <button class="button button-primary" @click.prevent="onLoadUser">Load User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: ''
        };
    },
    methods: {
        onLoadUser() {
            this.$router.push(`/users/${this.userId}`);
        }
    }
};
</script>

