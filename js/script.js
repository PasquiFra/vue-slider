console.log("Vue OK", Vue);

const {createApp} = Vue;

const app = createApp ({
    name: "Carosello",
    data() {
        return {
            pics,
            picIndex: 0,
            target: null,
        }
    },
    /*computed {

    },*/
    methods: {
        changePic(target) {
            if (target === "next"){
                this.picIndex++
            } else if  (target === "prev") {
                this.picIndex--
            } else {
                picIndex === i
            }
        }
    }
})

app.mount("#root")