(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body__opened-menu')) {
            document.body.classList.add('body__opened-menu')
        } else {
            document.body.classList.remove('body__opened-menu')
        }

    }

})()
