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
var lmat =    require('../Desks/Assets/lDesk/deskTop')
var lsze =    require('../Desks/Assets/lDesk/size')
var lblkFrm = require('../Desks/Assets/lDesk/frames/blkFrame')
var lwhtFrm = require('../Desks/Assets/lDesk/frames/whtFrame')
var lgryFrm = require('../Desks/Assets/lDesk/frames/gryFrame')
var lmtlFrm = require('../Desks/Assets/lDesk/frames/mtlFrame')
var lblkGrm = require('../Desks/Assets/lDesk/grommets/blkGrommets')
var lgryGrm = require('../Desks/Assets/lDesk/grommets/gryGrommets')
var lwhtGrm = require('../Desks/Assets/lDesk/grommets/whtGrommets')
var lblkKey = require('../Desks/Assets/lDesk/keys/blkKey')
var lwhtKey = require('../Desks/Assets/lDesk/keys/whtKey')
var lgryKey = require('../Desks/Assets/lDesk/keys/gryKey')
var curvemat =    require('../Desks/Assets/curveDesk/deskTop')
var curveblkFrm = require('../Desks/Assets/curveDesk/frames/blkFrame')
var curvewhtFrm = require('../Desks/Assets/curveDesk/frames/whtFrame')
var curvegryFrm = require('../Desks/Assets/curveDesk/frames/gryFrame')
var curvemtlFrm = require('../Desks/Assets/curveDesk/frames/mtlFrame')
var curveblkGrm = require('../Desks/Assets/curveDesk/grommets/blkGrommets')
var curvegryGrm = require('../Desks/Assets/curveDesk/grommets/gryGrommets')
var curvewhtGrm = require('../Desks/Assets/curveDesk/grommets/whtGrommets')
var curveblkKey = require('../Desks/Assets/curveDesk/keys/blkKey')
var curvewhtKey = require('../Desks/Assets/curveDesk/keys/whtKey')
var curvegryKey = require('../Desks/Assets/curveDesk/keys/gryKey')

const { verify } = require('crypto')
module.exports = {
    beforeEach: browser => {
        desk = browser.page.deskObj()
        lamDesk = browser.page.lamStandObj()
        lDesk = browser.page.lDeskObj()
        curveDesk = browser.page.curveObj()
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
            
            lamsze.forEach(item=> {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.waitForElementVisible('@noThanks', 60000)
            .click('@noThanks')
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
    'UPL934': browser => {
        lDesk
        .click('@products')
            .click('@lStand')
            .waitForElementPresent('@SKU', 20000)
            .verify.containsText('@UPL934', 'UPL934')
            lmat.forEach(item=> {
                lDesk
                .clicknVerif(lDesk, item)
            })
            
            lsze.forEach(item=> {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lDesk.click('@blkFrame')
            lblkFrm.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lDesk.click('@whtFrame')
            lwhtFrm.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lDesk
            .click('@gryFrame')
            lgryFrm.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lDesk.click('@mtlFrame')
            lmtlFrm.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lDesk.click('@blkGromm')
            lblkGrm.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lDesk.click('@whtGromm')
            lwhtGrm.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lDesk.click('@gryGromm')
            lgryGrm.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lblkKey.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lDesk.click('@whtKey')
            lwhtKey.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
            lDesk.click('@gryKey')
            lgryKey.forEach(item => {
                lDesk
                .clicknVerif(lDesk, item)
            })
    },
    'UPL933': browser => {
        curveDesk
            .click('@products')
            .click('@curveStand')
            .waitForElementPresent('@SKU', 20000)
            .verify.containsText('@UPL933', 'UPL933')
            curvemat.forEach(item=> {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveDesk.click('@blkFrame')
            curveblkFrm.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveDesk.click('@whtFrame')
            curvewhtFrm.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveDesk
            .click('@gryFrame')
            curvegryFrm.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveDesk.click('@mtlFrame')
            curvemtlFrm.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveDesk.click('@blkGromm')
            curveblkGrm.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveDesk.click('@whtGromm')
            curvewhtGrm.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveDesk.click('@gryGromm')
            curvegryGrm.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveblkKey.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveDesk.click('@whtKey')
            curvewhtKey.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
            curveDesk.click('@gryKey')
            curvegryKey.forEach(item => {
                curveDesk
                .clicknVerif(curveDesk, item)
            })
    },
}