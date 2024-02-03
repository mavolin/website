(() => {
    const collapseDelay = 150

    const detailEls = document.querySelectorAll('.c-header-detail')

    function collapseDetails(except) {
        detailEls.forEach(el => {
            if (el === except) {
                return
            }

            el.querySelectorAll('.c-header-detail__text--hovered')
                .forEach(collapseText)
        })
    }

    function collapseText(headerDetailEl) {
        headerDetailEl.style.width = ''
    }

    function expandText(headerDetailEl) {
        if (headerDetailEl.style.width !== '') {
            return
        }

        headerDetailEl.style.width = (headerDetailEl.scrollWidth + 1) + 'px'
    }

    function expandDetail(detailEl) {
        detailEl.querySelectorAll('.c-header-detail__text--hovered')
            .forEach(expandText)
    }

    let timeout
    function onDetailMouseover(detailEl) {
        // Clear the previous timeout so that if the user hovers over multiple
        // elements before the timout expires, not all details collapse.
        clearTimeout(timeout)

        expandDetail(detailEl)
        timeout = setTimeout(() => collapseDetails(detailEl), collapseDelay)
    }

    detailEls.forEach(detailEl => {
        if (detailEl.querySelector('.c-header-detail__text--hovered') === null) {
            return
        }

        detailEl.addEventListener('mouseover', () => onDetailMouseover(detailEl))
    })
})()