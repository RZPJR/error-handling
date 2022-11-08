<template>
    <div class="OpenSans">
        <v-row>
            <v-col>
                <div class="error-image">
                    <img :src="logo_url" alt="image">
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="text-center">
                    <h1 class="fs35">Internal Server Error</h1>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="text-center">
                    <span class="error-message">
                        Sorry, this was unexpected.<br />
                        Please check back again or refresh page.
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
                    Refresh
                </v-btn>
            </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import { Image500 } from "@vue-mf/global";
    export default {
        components: { Image500 },
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
            this.logo_url = Image500;
        },
    };
</script>