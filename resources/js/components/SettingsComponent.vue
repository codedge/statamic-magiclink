<template>
    <div>
        <div class="mb-1 content">
            <h2 class="text-base">
                {{ __('General') }}
            </h2>
        </div>

        <publish-fields-container class="card p-0 mb-3 configure-section">

            <form-group
                class="toggle-fieldtype"
                fieldtype="toggle"
                handle="enabled"
                :display="__('magiclink::cp.settings.ml_enabled')"
                :instructions="__('magiclink::cp.settings.ml_enabled_instructions')"
                v-model="enabled"
            />

            <form-group
                class="border-b"
                handle="expireTime"
                :display="__('magiclink::cp.settings.ml_expire_time')"
                :errors="errors.expireTime"
                :instructions="__('magiclink::cp.settings.ml_expire_time_instructions')"
                v-model="expireTime"
            />

        </publish-fields-container>

        <div class="mb-1 content">
            <h2 class="text-base">
                Protected content
                <button class="btn-sm" @click="addAddress">
                    + Add new address
                </button>
            </h2>
        </div>

        <publish-fields-container class="card p-0 mb-3 configure-section">
            <div v-for="(a, index) in countAddresses">
                <form-group
                    class="border-b"
                    handle="allowedAddresses[]"
                    :display="__('magiclink::cp.settings.ml_allowed_addresses')"
                    :errors="errors.allowedAddresses"
                    :instructions="__('magiclink::cp.settings.ml_allowed_addresses_instructions')"
                    v-model="allowedAddresses[index]"
                />
            </div>
        </publish-fields-container>

        <div class="mb-1 content">
            <h2 class="text-base">
                {{ __('magiclink::cp.settings.ml_allowed_domains') }}
                <button class="btn-sm" @click="addDomain">
                    + Add new domain
                </button>
            </h2>
        </div>

        <publish-fields-container class="card p-0 mb-3 configure-section">
            <div v-for="(d, index) in countDomains">
                <form-group
                    class="border-b"
                    handle="allowedDomains[]"
                    :display="__('magiclink::cp.settings.ml_allowed_domains')"
                    :errors="errors.allowedDomains"
                    :instructions="__('magiclink::cp.settings.ml_allowed_domains_instructions')"
                    v-model="allowedDomains[index]"
                />
            </div>
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
            initialAllowedAddresses: Array,
            initialAllowedDomains: Array,
            initialExpireTime: {
                type: Number,
                required: true,
            },
            initialEnabled: {
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
              allowedAddresses: this.initialAllowedAddresses,
              countAddresses: this.initialAllowedAddresses.length + 1,
              allowedDomains: this.initialAllowedDomains,
              countDomains: this.initialAllowedDomains.length + 1,
              error: null,
              errors: {},
              enabled: this.initialEnabled,
              expireTime: this.initialExpireTime,
          }
        },

        computed: {
            hasErrors() {
                return this.error || Object.keys(this.errors).length;
            },

            payload() {
                return {
                    allowedAddresses: this.allowedAddresses,
                    allowedDomains: this.allowedDomains,
                    enabled: this.enabled,
                    expireTime: this.expireTime,
                }
            },
        },

        methods: {
            clearErrors() {
                this.error = null;
                this.errors = {};
            },

            addAddress() {
                this.countAddresses += 1;
            },

            addDomain() {
                this.countDomains += 1;
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
