let app = new Vue({
    el: "#app",
    data: {
        showTooltip: false,
        textContent: "Правь меня."
    },
    methods: {
        hideTooltip: function () {
            this.showTooltip = false
        },
        toggleTooltip: function () {
            this.showTooltip = !this.showTooltip
        }
    }
})