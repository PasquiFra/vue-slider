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
    computed: {
        lastPic (){
            return this.pics.length - 1;
        },
        isLastPic () {
            return this.picIndex === this.lastPic;
        },
        isFirstPic () {
            return this.picIndex === 0;
        }
    },
    methods: {
        changePic(target) {
            if (target === "next"){
                if(this.isLastPic) this.picIndex = 0
                else this.picIndex++;
            } else if (target === "prev") {
                if(this.isFirstPic) this.picIndex = this.lastPic
                else this.picIndex--;
            } else {
                this.picIndex = target
            }
        }
    },
    mounted() {
        setInterval(() => {this.changePic("next")},3000)
    }
})

app.mount("#root")