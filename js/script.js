console.log("Vue OK", Vue);

const {createApp} = Vue;

const app = createApp ({
    name: "Carosello",
    data() {
        return {
            pics,
            picIndex: 0,
        }
    },
    /*computed {

    },*/
    methods: {
        nextPic() {
            this.picIndex++
        },
        prevPic() {
            this.picIndex--
        }
    }
})

app.mount("#root")