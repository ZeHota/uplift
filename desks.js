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
var lammat =    require('../Desks/Assets/lamStand/deskTop')
var lamsze =    require('../Desks/Assets/lamStand/size')
var lamblkFrm = require('../Desks/Assets/lamStand/frames/blkFrame')
var lamwhtFrm = require('../Desks/Assets/lamStand/frames/whtFrame')
var lamgryFrm = require('../Desks/Assets/lamStand/frames/gryFrame')
var lammtlFrm = require('../Desks/Assets/lamStand/frames/mtlFrame')
var lamblkGrm = require('../Desks/Assets/lamStand/grommets/blkGrommets')
var lamgryGrm = require('../Desks/Assets/lamStand/grommets/gryGrommets')
var lamwhtGrm = require('../Desks/Assets/lamStand/grommets/whtGrommets')
var lamblkKey = require('../Desks/Assets/lamStand/keys/blkKey')
var lamwhtKey = require('../Desks/Assets/lamStand/keys/whtKey')
var lamgryKey = require('../Desks/Assets/lamStand/keys/gryKey')
const { verify } = require('crypto')
module.exports = {
    beforeEach: browser => {
        desk = browser.page.deskObj()
        lamDesk = browser.page.lamStandObj()
        desk.navigate()
        browser.maximizeWindow()
    },
    after: browser => {
        desk.end()
    },
    'UPL960': browser => {
        desk
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
    'UPL 912': browser => {
        lamDesk
        .click('@products')
            .click('@lamStand')
            .waitForElementPresent('@SKU', 20000)
            .verify.containsText('@UPL912', 'UPL912')
            lammat.forEach(item=> {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.waitForElementVisible('@noThanks', 60000)
            .click('@noThanks')
            lamsze.forEach(item=> {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@blkFrame')
            lamblkFrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@whtFrame')
            lamwhtFrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk
            .click('@gryFrame')
            lamgryFrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@mtlFrame')
            lammtlFrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@blkGromm')
            lamblkGrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@whtGromm')
            lamwhtGrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@gryGromm')
            lamgryGrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamblkKey.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@whtKey')
            lamwhtKey.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@gryKey')
            lamgryKey.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
    },
}