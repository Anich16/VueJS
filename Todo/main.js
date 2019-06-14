let app = new Vue ({
    el: "#todo-app",
    data: {
        title: "TodoList",
        items: [
            {
                text: "Learn JS",
                status: false
            },
            {
                text: "I love vue",
                status: true
            },
            {
                text: "I want to eat",
                status: false
            }
        ],
        newText: ""
    },
    methods: {
        addTask: function () {
            let newItem = {
                text: this.newText,
                status: false
            };

           this.items.push(newItem);
            this.newText = "";
        },
        deleteItem: function (index) {
            this.items.splice(index, 1)
        },
        changeItem: function (id) {
            alert ("Change" + id)
        },
        changeStatus: function (status) {
            alert("Status" + !status)
        }
    }
});