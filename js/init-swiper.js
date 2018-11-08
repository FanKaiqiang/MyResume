!function () {
    var view = document.querySelector('.swiper-container')
    var controller = {
        view: null,
        myswiper: null,
        swiperOptions: {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.myswiper = new Swiper(this.view, this.swiperOptions)
        }
    }
    controller.init(view)
}.call()
