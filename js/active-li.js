!function () {
    var view = document.querySelectorAll('nav.menu > ul > li')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var view = this.view
            for (let i = 0; i < view.length; i++) {
                view[i].onmouseenter = (x) =>{
                    this.active(x.currentTarget)
                }
                view[i].onmouseleave = (x) =>{
                    this.deactive(x.currentTarget)
                }
            }
        },
        active:function(element){
            element.classList.add('active')
        },
        deactive:function(element){
            element.classList.remove('active')
        }
    }
    controller.init(view)
}.call()