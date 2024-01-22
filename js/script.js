console.log("Vue OK", Vue);

const {createApp} = Vue;

const app = createApp ({
    name: "Carosello",
    data() {
        return {
            pics: pics,

        }
    },
    /*computed {

    },
    methods: {

    }*/
})

app.mount("#root")