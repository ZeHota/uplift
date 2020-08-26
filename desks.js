var mat = require('../Desks/Assets/stand/deskTop')
var sze = require('../Desks/Assets/stand/size')
var frm = require('../Desks/Assets/stand/frame')
var grm = require('../Desks/Assets/stand/grommets')
var key = require('../Desks/Assets/stand/keypad')
const { verify } = require('crypto')
module.exports = {
    beforeEach: browser => {
        desk = browser.page.deskObj()
        desk.navigate()
        browser.resizeWindow(1920, 1080)
    },
    after: browser => {
        desk.end()
    },
    'Desk Mat forEach': browser => {
        desk
            .useXpath()
            .click('@products')
            .click('@stand')
            .waitForElementPresent('@SKU', 20000)
            .verify.containsText('//span[contains(text(), "UPL960")]', 'UPL960')
            mat.forEach(item=> {
                desk
                .clicknVerif(desk, item)
            })
            sze.forEach(item=> {
                desk
                .clicknVerif(desk, item)
            })
    },
}