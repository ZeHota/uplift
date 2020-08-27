.click('@products')
            .click('@stand')
            .waitForElementPresent('@SKU', 20000)
            .verify.containsText('@UPL960', 'UPL960')
            mat.forEach(item=> {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            sze.forEach(item=> {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@blkFrame')
            blkFrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@whtFrame')
            whtFrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk
            .waitForElementVisible('@noThanks', 60000)
            .click('@noThanks')
            .click('@gryFrame')
            gryFrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@mtlFrame')
            mtlFrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@blkGromm')
            blkGrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@whtGromm')
            whtGrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@gryGromm')
            gryGrm.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            blkKey.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@whtKey')
            whtKey.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
            lamDesk.click('@gryKey')
            gryKey.forEach(item => {
                lamDesk
                .clicknVerif(lamDesk, item)
            })
    },