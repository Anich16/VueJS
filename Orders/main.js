Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

let app = new Vue ({
    el: "#app",
    data: {
        items: [
            {
                name: 'Веб разработка',
                price: 300,
                active:true
            },
            {
                name: 'Дизайн',
                price: 400,
                active:false
            },
            {
                name: 'Интеграция',
                price: 250,
                active:false
            },
            {
                name: 'Обучение',
                price: 220,
                active:false
            }
        ]
    },
    methods: {
        toggleActive: function (el) {
            el.active = !el.active
        },
        total: function () {
            let total = 0;
            this.items.forEach(function (el){
                if (el.active){
                    total += el.price
                }
            });
            return total;
        }
    }
});

