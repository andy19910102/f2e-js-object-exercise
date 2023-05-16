// 購物車
let cart = [];

// 綁定 #createTodoForm 的表單送出事件
$("#createTodoForm").submit(function (e) {
    // 預防表單送出的重新整理行為
    e.preventDefault();
    console.log("#createTodoForm submitted");
    const newTodo = {

    };
    console.log("todo:", newTodo);

});

// 綁定 #clearTodoListBtn 的點擊事件
$("#clearTodoListBtn").click(function () {
    console.log("#clearTodoListBtn click!")
});