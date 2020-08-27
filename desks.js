var mat = require('../Desks/Assets/stand/deskTop')
var sze = require('../Desks/Assets/stand/size')
var blkFrm = require('../Desks/Assets/stand/frames/blkFrame')
var whtFrm = require('../Desks/Assets/stand/frames/whtFrame')
var gryFrm = require('../Desks/Assets/stand/frames/gryFrame')
var mtlFrm = require('../Desks/Assets/stand/frames/mtlFrame')
var blkGrm = require('../Desks/Assets/stand/grommets/blkGrommets')
var gryGrm = require('../Desks/Assets/stand/grommets/gryGrommets')
var whtGrm = require('../Desks/Assets/stand/grommets/whtGrommets')
var blkKey = require('../Desks/Assets/stand/keys/blkKey')
var whtKey = require('../Desks/Assets/stand/keys/whtKey')
var gryKey = require('../Desks/Assets/stand/keys/gryKey')
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
            .verify.containsText('@UPL960', 'UPL960')
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
            desk
            .waitForElementVisible('@noThanks', 60000)
            .click('@noThanks')
            .click('@gryFrame')
            gryFrm.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            desk.click('@mtlFrame')
            mtlFrm.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            desk.click('@blkGromm')
            blkGrm.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            desk.click('@whtGromm')
            whtGrm.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            desk.click('@gryGromm')
            gryGrm.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            blkKey.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            desk.click('@whtKey')
            whtKey.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
            desk.click('@gryKey')
            gryKey.forEach(item => {
                desk
                .clicknVerif(desk, item)
            })
    },
}