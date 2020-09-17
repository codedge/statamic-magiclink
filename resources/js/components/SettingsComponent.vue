<template>
    <div>
        <publish-fields-container class="card p-0 mb-3 configure-section">

            <form-group
                class="toggle-fieldtype"
                fieldtype="toggle"
                handle="isEnabled"
                :display="__('magiclink::cp.settings.ml_enabled')"
                :instructions="__('magiclink::cp.settings.ml_enabled_instructions')"
                v-model="isEnabled"
            />

            <form-group
                handle="expireTime"
                class="border-b"
                :display="__('magiclink::cp.settings.ml_expire_time')"
                :errors="errors.expireTime"
                :instructions="__('magiclink::cp.settings.ml_expire_time_instructions')"
                v-model="expireTime"
            />

        </publish-fields-container>

        <div class="py-2 mt-3 border-t flex justify-between">
            <a :href="indexUrl" class="btn" v-text="__('Cancel') "/>
            <button type="submit" class="btn-primary" @click="save">{{ __('Save') }}</button>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            action: String,
            initialExpireTime: {
                type: Number,
                required: true,
            },
            initialIsEnabled: {
                type: Boolean,
                required: true,
            },
            indexUrl: {
                type: String,
                required: true,
            },
            method: {
                type: String,
                required: true
            },
        },

        data() {
          return {
              error: null,
              errors: {},
              isEnabled: this.initialIsEnabled,
              expireTime: this.initialExpireTime,
          }
        },

        computed: {
            hasErrors() {
                return this.error || Object.keys(this.errors).length;
            },

            payload() {
                return {
                    isEnabled: this.isEnabled,
                    expireTime: this.expireTime,
                }
            },
        },

        methods: {
            clearErrors() {
                this.error = null;
                this.errors = {};
            },

            save() {
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
                            this.$toast.error(__('magiclink::cp.unable_to_save'));
                        }
                    });
            }
        },

        mounted() {
            this.$keys.bindGlobal(['mod+s'], e => {
                e.preventDefault();
                this.save();
            });
        }
    }
</script>
