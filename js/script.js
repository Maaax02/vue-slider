let dot = document.querySelector('.box')


new Vue ({
    el: "#app",
    data: {
        jdm: [
            {
                img: "https://www.tuningblog.eu/wp-content/uploads/2020/07/550-PS-Mazda-RX7-OHLAWD-Tuning-2.jpg"
            },

            {
                img: "https://besthqwallpapers.com/Uploads/28-8-2018/63525/thumb2-nissan-silvia-s15-purple-sports-coupe-tuning-silvia-purple-silvia-s15-japanese-sports-cars.jpg",
            },

            {
                img: "https://www.tomshw.it/images/images/2021/08/skyline-gt-r-asta-record-181475.jpg",
            },

            {
                img: "https://cdn.motor1.com/images/mgl/8LAjo/s1/2020-nissan-gt-r-nismo.jpg",
            },

            {
                img: "https://www.cavallivapore.it/wp-content/uploads/2018/04/Subaru-Impreza-WRX-22b-STI.jpg",
            }
        ],

        counter: 0,

    },
    methods:{
        next: function(){
            this.counter++;
            if(this.counter >= this.jdm.length){
                this.counter = 0;
            }
        },

        previous: function(){
            this.counter--;
            if(this.counter <= this.jdm.length){
                this.counter = 0;
            }
        },

        change: function(i){
            this.counter = i;
        },
        
    }
    
})  