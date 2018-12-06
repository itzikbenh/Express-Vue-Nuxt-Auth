<template>
    <div class="w-full max-w-xs mb-0 mx-auto">
        <form class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4" @submit.prevent="submit">
            <p class="text-center font-bold uppercase mb-6">Password Reset Link</p>
            <div class="form-item" :class="{'has-error': form.errors.has('email') }">
                <input class="input" type="email" placeholder="Email" v-model="form.email">
                <p
                    class="text-red text-xs italic"
                    v-if="form.errors.has('email')"
                    v-text="form.errors.get('email')"
                ></p>
            </div>
            <button
                class="button button-primary uppercase w-full"
                type="submit"
                :class="{'is-loading': form.isSubmitting}"
                :disabled="form.isSubmitting"
            >Send password reset link</button>
        </form>
    </div>
</template>

<script>
import Form from '~/libraries/form';

export default {
    data() {
        return {
            form: new Form({
                email: ''
            })
        };
    },
    methods: {
        async submit() {
            try {
                const user = await this.form.post(
                    'http://localhost:3000/password/email'
                );
                this.$notify.open('Reset link has been sent to your email.');
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>
