!function () {
    var view = document.querySelectorAll('[data-x]')
    var controller = {
        view: null,
        minIndex: 0,
        init: function (view) {
            this.view = view
            this.initialization()
            this.scrolling()
            this.bindEvents()
        },
        initialization: function () {
            var view = this.view
            setTimeout(function () {
                if (window.pageYOffset < 100) {
                    for (let i = 0; i < view.length; i++) {
                        view[i].classList.add('offset')
                    }
                }
                startWelcome.classList.remove('active')
                view[0].classList.remove('offset')
            }, 1600);
        },
        scrolling: function () {
            var view = this.view
            var minIndex = this.minIndex
            for (let i = 1; i < view.length; i++) {
                if (Math.abs(view[i].offsetTop - window.scrollY) < 450) {
                    minIndex = i
                    view[minIndex].classList.remove('offset')
                }
            }
            let id = view[minIndex].id
            let a = document.querySelector('a[href="#' + id + '"]')
            let li = a.parentNode
            let brother = li.parentNode.children
            for (let i = 0; i < brother.length; i++) {
                brother[i].classList.remove('hightlight')
            }
            li.classList.add('hightlight')
        },
        bindEvents: function () {
            window.onscroll = () => {
                this.scrolling()
            }
        }
    }
    controller.init(view)
}.call()