Vue.createApp({
    data() {
        return {
            API_KEY: "ec7b72b9904645bee6e4401cef025937",
            BASE_URL: "https://api.openweathermap.org/data/2.5/",
            searchQuery: "Yangon",
            errorMsg: "",
            weather: {},

        };
    },

    mounted() {

        this.getWeather();
    },


    methods: {
        async getWeather() {
            const response = await fetch(`${this.BASE_URL}weather?q=${this.searchQuery}&units=metric&APPID=${this.API_KEY}`);

            if (response.status === 200) {
                const weatherData = await response.json();
                this.weather = weatherData;
                console.log(weatherData);

            } else {
                this.errorMsg = "Please enter a valid location or country "
            }


        },

        getCurrentDate() {
            const currentDate = new Date();
            const months = ["January", "February", "March", "April", "May", "June", "July", " August", " September", "October", "November", "December"];
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let date = currentDate.getDate();
            let month = months[currentDate.getMonth()];
            let year = currentDate.getFullYear();
            let day = days[currentDate.getDay()];

            return `${date} ${month} ${year} ${day}`
        }


    },
}).mount("#app");