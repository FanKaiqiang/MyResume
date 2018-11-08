!function () {
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var view = this.view
            var topbar = view.firstElementChild
            setTimeout(function () {
                topbar.classList.remove('offset')
            }, 1600);
            this.judgeActive()
            window.addEventListener('scroll', (x) => {
                this.judgeActive()
            })
        },
        judgeActive: function () {
            if (window.scrollY > 0) {
                this.view.classList.add('sticky')
            } else {
                this.view.classList.remove('sticky')
            }
        }
    }
    controller.init(view)
}.call()