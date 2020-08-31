'UPL933': browser => {
    curveDesk
        .click('@products')
        .click('@stand')
        .waitForElementPresent('@SKU', 20000)
        .verify.containsText('@UPL933', 'UPL933')
        mat.forEach(item=> {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        sze.forEach(item=> {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        curveDesk.click('@blkFrame')
        blkFrm.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        curveDesk.click('@whtFrame')
        whtFrm.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        curveDesk
        .waitForElementVisible('@noThanks', 60000)
        .click('@noThanks')
        .click('@gryFrame')
        gryFrm.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        curveDesk.click('@mtlFrame')
        mtlFrm.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        curveDesk.click('@blkGromm')
        blkGrm.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        curveDesk.click('@whtGromm')
        whtGrm.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        curveDesk.click('@gryGromm')
        gryGrm.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        blkKey.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        curveDesk.click('@whtKey')
        whtKey.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
        curveDesk.click('@gryKey')
        gryKey.forEach(item => {
            curveDesk
            .clicknVerif(curveDesk, item)
        })
},