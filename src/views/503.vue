<template>
    <div class="OpenSans">
        <v-row>
            <v-col>
                <div style="padding-top: 5%; text-align: center">
                    <img :src="logo_url" alt="image" />
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="text-center">
                    <h1 style="font-size: 35px">Dashboard is Under Maintenance</h1>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="text-center">
                    <span style="font-size: 20px; color: grey">We apologize for any inconvenience caused</span><br />
                    <span style="font-size: 20px; color: grey">Please check back later or refresh page</span>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div style="padding-top: 2%" class="text-center">
                    <v-btn
                        @click="refresh"
                        height="50"
                        style="color: white; border-radius: 25px; background-color: #768f9c"
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
