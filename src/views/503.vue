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
                    <h1 class="fs35">Dashboard is Under Maintenance</h1>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="text-center">
                    <span class="error-message">
                        We apologize for any inconvenience caused<br />
                        Please check back later or refresh page
                    </span>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div style="padding-top: 2%" class="text-center">
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
    import { Image503 } from "@vue-mf/global";
    export default {
        components: { Image503 },
        data() {
            return {
                logo_url: "",
            };
        },
        methods: {
            refresh() {
                this.$router.go(-1);
            },
        },
        created() {
            this.logo_url = Image503;
        },
    };
</script>
