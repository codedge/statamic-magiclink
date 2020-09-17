<template>
    <div>
        <publish-fields-container class="p-0">

            <form-group
                handle="email"
                class="p-0"
                :display="__('magiclink::web.email_address')"
                :errors="errors.email"
                v-model="email"
                :focus="true"
            />

        </publish-fields-container>

        <div class="py-2 flex justify-between">
            <button type="submit" class="btn-primary w-full" @click="send">{{ __('magiclink::web.login_magic_link') }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            action: String,
            method: {
                type: String,
                required: true
            },
        },

        data() {
            return {
                error: null,
                errors: {},
                email: '',
            }
        },

        computed: {
            hasErrors() {
                return this.error || Object.keys(this.errors).length;
            },

            payload() {
                return {
                    email: this.email,
                }
            },
        },

        methods: {
            clearErrors() {
                this.error = null;
                this.errors = {};
            },

            send() {
                this.clearErrors();

                this.$axios[this.method](this.action, this.payload)
                    .then(response => {
                        window.location = response.data.redirect;
                    })
                    .catch(e => {
                        if (e.response && e.response.status === 422) {
                            const { message, errors } = e.response.data;
                            this.error = message;
                            this.errors = errors;
                            this.$toast.error(message);
                        } else {
                            this.$toast.error(__('magiclink::web.unable_to_send'));
                        }
                    });
            }
        },
    }
</script>
