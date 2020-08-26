var mat = require('../Desks/Assets/stand/deskTop')
var sze = require('../Desks/Assets/stand/size')
var blkFrm = require('../Desks/Assets/stand/frames/blkFrame')
var whtFrm = require('../Desks/Assets/stand/frames/whtFrame')
var gryFrm = require('../Desks/Assets/stand/frames/gryFrame')
var mtlFrm = require('../Desks/Assets/stand/frames/mtlFrame')
// var grm = require('')
// var key = require('')
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
            desk.click('@blkFrame')
            blkFrm.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            desk.click('@whtFrame')
            whtFrm.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            desk.click('@gryFrame')
            .waitForElementVisible('@noThanks', 60000)
            .click('@noThanks')
            gryFrm.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            desk.click('@mtlFrame')
            mtlFrm.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
    },
}