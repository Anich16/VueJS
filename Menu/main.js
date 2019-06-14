let app = new Vue ({
    el: "#app",
    data: {
      active: "home"
    },
    methods: {
        makeActive: function(item) {
            this.active = item
        }
    }
});