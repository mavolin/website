(() => {
    // You know my birthday now, so I expect a card next year!
    replaceText(".js-age", calcBirthday(2003, 4, 9).toString())
    replaceText(".js-semester", ordinalize(calcSemester(2023, 10, 1)))

    function updateVHAttribute() {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    window.addEventListener('resize', updateVHAttribute)

    function ordinalize(num) {
        switch (num % 10) {
            case 1:
                return `${num}st`
            case 2:
                return `${num}nd`
            case 3:
                return `${num}rd`
            default:
                return `${num}th`
        }
    }

    // month is 0 based
    function calcBirthday(year, month, day) {
        const birthday = new Date(year, month, day)
        const diff = Date.now() - birthday
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
        return age
    }

    function calcSemester(year, month, day) {
        const first = new Date(year, month, day)
        const diff = Date.now() - first
        return Math.floor(
            diff
            / 1000 // ms to s
            / 60 // to min
            / 60 // to h
            / 24 // to days
            / (365 / 2) // to zero-based semesters
            + 1 // to one-based semesters
        )
    }

    function replaceText(sel, text) {
        document.querySelectorAll(sel).forEach(el => el.textContent = text)
    }
})()