document.addEventListener('DOMContentLoaded', function () {
    var mixer = mixitup('.top__inner', {
        load: {
            filter: '.london'
        },
        selectors: {
            target: '.mix'
        },
        animation: {
            duration: 300 // Длительность анимации
        }

    });
})

