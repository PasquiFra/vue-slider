const { createApp } = Vue;

const app = createApp({
    name: "Carosello",
    data() {
        return {
            pics,
            picIndex: 0,
            isPlaying: true,
            autoplayButton: 'STOP AUTOPLAY',
            autoplayInterval: null
        }
    },
    computed: {
        lastPic() {
            return this.pics.length - 1;
        },
        isLastPic() {
            return this.picIndex === this.lastPic;
        },
        isFirstPic() {
            return this.picIndex === 0;
        }
    },
    methods: {
        changePic(target) {
            if (target === "next") {
                this.stopAutoplay()
                this.startAutoplay()
                if (this.isLastPic) this.picIndex = 0
                else this.picIndex++;
            } else if (target === "prev") {
                this.stopAutoplay()
                this.startAutoplay()
                if (this.isFirstPic) this.picIndex = this.lastPic
                else this.picIndex--;
            } else {
                this.picIndex = target
                this.stopAutoplay()
            }
        },
        autoplay() {
            this.autoplayInterval = setInterval(() => {
                this.changePic('next')
            }, 3000)
        },
        toggleAutoplay() {
            this.isPlaying = !this.isPlaying;
            this.isPlaying ? this.startAutoplay() : this.stopAutoplay();
        },
        startAutoplay() {
            this.isPlaying = true;
            this.autoplayButton = 'STOP AUTOPLAY';
            this.autoplay();
        },
        stopAutoplay() {
            this.isPlaying = false;
            clearInterval(this.autoplayInterval);
            this.autoplayButton = 'RESUME AUTOPLAY';
        },

    },
    mounted() {
        this.autoplay();
    }
})

app.mount("#root")