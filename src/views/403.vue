<template>
    <div class="OpenSans">
        <v-row>
            <v-col>
                <div class="error-image">
                    <img :src="logo_url" alt="image" />
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="text-center">
                    <h1 class="fs35">Forbidden</h1>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="text-center">
                    <span class="error-message">
                        Sorry, you do not have access to this page.<br />
                        Please contact your supervisor to request access.
                    </span>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="text-center">
                    <v-btn
                        id="errorButton"
                        height="50"
                        @click="refresh"
                    >
                        Back to Dashboard
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import { Image403 } from "@vue-mf/global";
    export default {
        components: { Image403 },
        data() {
            return {
                logo_url: "",
            };
        },
        methods: {
            refresh() {
                window.location.replace("/Home");
            },
        },
        created() {
            this.logo_url = Image403;
        },
    };
</script>
