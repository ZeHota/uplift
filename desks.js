var mat = require('../Desks/Assets/stand/deskTop')
module.exports = {
    beforeEach: browser => {
    desk = browser.page.deskObj()
    desk.navigate()
    browser.resizeWindow (1920,1080)
    },
    after: browser => {
        desk.end()
    },
    'Desk Mat forEach': browser => {
        desk
        .click('@products')
        .click('@stand')
        mat.forEach(item => {
            desk
            .click(item)
        })

    }
}