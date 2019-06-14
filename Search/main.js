let app = new Vue ({
    el: "#app",
    data: {
        searchString: "",
        items: [
            {
                "text": "27 сайтов с задачками для оттачивания навыков программирования",
                "url": "https://proglib.io/p/27-puzzle-websites-to-sharpen-your-skills/",
                "img": "https://proglib.io/wp-content/uploads/2016/10/coding-time-100x70.jpg"
            },
            {
                "text": "Готовимся к собеседованию в Google: 8 месяцев непрерывной работы",
                "url": "https://proglib.io/p/8-month-for-google-interview/",
                "img": "https://proglib.io/wp-content/uploads/2017/01/0_b11a3_8ff3ef7b_XL-100x70.jpg"
            },
            {
                "text": "15 материалов по разработке игр",
                "url": "https://proglib.io/p/gamedev-compilation/",
                "img": "https://proglib.io/wp-content/uploads/2017/05/gamedev-100x70.png"
            },
            {
                "text": "10 лучших видеокурсов для изучения Linux",
                "url": "https://proglib.io/p/linux-courses/",
                "img": "https://proglib.io/wp-content/uploads/2017/01/ruqlwta5wqy-100x70.jpg"
            },
            {
                "text": "Учебный план по осваиванию современного JavaScript",
                "url": "https://proglib.io/p/learning-modern-javascript/",
                "img": "https://proglib.io/wp-content/uploads/2016/12/1raWO3dhM4jMjf9VY-kZzNg-100x70.png"
            }
        ]
    },
    computed: {
        filteredItems: function () {
            let itemsArray = this.items,
                searchString = this.searchString;

            if (!searchString) {
                return itemsArray
            }

            searchString = searchString.trim().toLowerCase();

            itemsArray = itemsArray.filter(function (el) {
                if(el.text.toLowerCase().indexOf(searchString) !== -1){
                    return el;
                }
            });

            return itemsArray;
        }
    }
});