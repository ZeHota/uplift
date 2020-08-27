var deskCommands = {
    clicknVerif: function (browser, option) {
        this.click(option.sel)
        this.click('@confirm')
        this.verify.elementPresent(option.conf)
        this.click('@customize')
        return this
    }
}
module.exports = {
    url: 'https://www.upliftdesk.com/',
    commands: [deskCommands],
    elements: {
        products: { selector: '(//a[@href="/adjustable-height-desks/"])[1]', locateStrategy: 'xpath' },
        confirm: { selector: '//span[contains(text(), "Confirm Selections")]', locateStrategy: 'xpath' },
        customize: { selector: '(//span[contains(text(), "Customize Desk")])[1]', locateStrategy: 'xpath' },
        noThanks: { selector: '//a[contains(text(), "No, Thank You")]', locateStrategy: 'xpath' },
        SKU: { selector: '//span[contains(text(), "SKU")]', locateStrategy: 'xpath' },
        //Desk Selector
        lamStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/671/11635/product-image-thumbnail-custom-laminate-desk-upl912__99852.1597247156.jpg?c=2"]', locateStrategy: 'xpath' },
        //Desk Mats
        desWhite: { selector: '//label[@data-product-attribute-value="4195"]', locateStrategy: 'xpath' },
        mrkrFrosty: { selector: '//label[@data-product-attribute-value="8766"]', locateStrategy: 'xpath' },
        figMahog: { selector: '//label[@data-product-attribute-value="8792"]', locateStrategy: 'xpath' },
        colWal: { selector: '//label[@data-product-attribute-value="8767"]', locateStrategy: 'xpath' },
        walHeight: { selector: '//label[@data-product-attribute-value="8768"]', locateStrategy: 'xpath' },
        uptWal: { selector: '//label[@data-product-attribute-value="8769"]', locateStrategy: 'xpath' },
        fusMap: { selector: '//label[@data-product-attribute-value="8793"]', locateStrategy: 'xpath' },
        kensMap: { selector: '//label[@data-product-attribute-value="8776"]', locateStrategy: 'xpath' },
        fawnCyp: { selector: '//label[@data-product-attribute-value="8773"]', locateStrategy: 'xpath' },
        verTeak: { selector: '//label[@data-product-attribute-value="8770"]', locateStrategy: 'xpath' },
        fontPear: { selector: '//label[@data-product-attribute-value="8794"]', locateStrategy: 'xpath' },
        wildChry: { selector: '//label[@data-product-attribute-value="4193"]', locateStrategy: 'xpath' },
        blk: { selector: '//label[@data-product-attribute-value="4196"]', locateStrategy: 'xpath' },
        shadAsh: { selector: '//label[@data-product-attribute-value="8772"]', locateStrategy: 'xpath' },
        phanChar: { selector: '//label[@data-product-attribute-value="8771"]', locateStrategy: 'xpath' },
        sterAsh: { selector: '//label[@data-product-attribute-value="8775"]', locateStrategy: 'xpath' },
        asiaNight: { selector: '//label[@data-product-attribute-value="8774"]', locateStrategy: 'xpath' },
        mada: { selector: '//label[@data-product-attribute-value="8787"]', locateStrategy: 'xpath' },
        graphNeb: { selector: '//label[@data-product-attribute-value="8763"]', locateStrategy: 'xpath' },
        slteGry: { selector: '//label[@data-product-attribute-value="8764"]', locateStrategy: 'xpath' },
        cldNeb: { selector: '//label[@data-product-attribute-value="8795"]', locateStrategy: 'xpath' },
        whtNeb: { selector: '//label[@data-product-attribute-value="8796"]', locateStrategy: 'xpath' },
        plat: { selector: '//label[@data-product-attribute-value="8765"]', locateStrategy: 'xpath' },
        windBronze: { selector: '//label[@data-product-attribute-value="8780"]', locateStrategy: 'xpath' },
        pewt: { selector: '//label[@data-product-attribute-value="8781"]', locateStrategy: 'xpath' },
        timCopp: { selector: '//label[@data-product-attribute-value="8777"]', locateStrategy: 'xpath' },
        rust: { selector: '//label[@data-product-attribute-value="8778"]', locateStrategy: 'xpath' },
        aster: { selector: '//label[@data-product-attribute-value="8785"]', locateStrategy: 'xpath' },
        //Desk Size
        fortyTwoByThirty: { selector: '//label[@data-product-attribute-value="4186"]', locateStrategy: 'xpath' },
        fortyFourByThirty: { selector: '//label[@data-product-attribute-value="4187"]', locateStrategy: 'xpath' },
        fortyEightByThirty: { selector: '//label[@data-product-attribute-value="8731"]', locateStrategy: 'xpath' },
        fiftyByThirty: { selector: '//label[@data-product-attribute-value="8732"]', locateStrategy: 'xpath' },
        fiftyTwoByThirty: { selector: '//label[@data-product-attribute-value="8733"]', locateStrategy: 'xpath' },
        fiftyFourByThirty: { selector: '//label[@data-product-attribute-value="8734"]', locateStrategy: 'xpath' },
        fiftySixByThirty: { selector: '//label[@data-product-attribute-value="8735"]', locateStrategy: 'xpath' },
        fiftyEightByThirty: { selector: '//label[@data-product-attribute-value="8736"]', locateStrategy: 'xpath' },
        sixtyByThirty: { selector: '//label[@data-product-attribute-value="8737"]', locateStrategy: 'xpath' },
        sixtyTwoByThirty: { selector: '//label[@data-product-attribute-value="8738"]', locateStrategy: 'xpath' },
        sixtyFourByThirty: { selector: '//label[@data-product-attribute-value="8739"]', locateStrategy: 'xpath' },
        sixtySixByThirty: { selector: '//label[@data-product-attribute-value="8740"]', locateStrategy: 'xpath' },
        sixtyEightByThirty: { selector: '//label[@data-product-attribute-value="8741"]', locateStrategy: 'xpath' },
        seventyByThirty: { selector: '//label[@data-product-attribute-value="8742"]', locateStrategy: 'xpath' },
        seventyTwoByThirty: { selector: '//label[@data-product-attribute-value="4188"]', locateStrategy: 'xpath' },
        seventyFourByThirty: { selector: '//label[@data-product-attribute-value="8743"]', locateStrategy: 'xpath' },
        seventySixByThirty: { selector: '//label[@data-product-attribute-value="8744"]', locateStrategy: 'xpath' },
        seventyEightByThirty: { selector: '//label[@data-product-attribute-value="8745"]', locateStrategy: 'xpath' },
        eightyByThirty: { selector: '//label[@data-product-attribute-value="4189"]', locateStrategy: 'xpath' },
        //Frames
        blkFrame: { selector: '//label[@data-color="black"]', locateStrategy: 'xpath' },
        blkcFrame: { selector: '//label[@data-product-attribute-value="4849"]', locateStrategy: 'xpath' },
        blkcommcFrame: { selector: '//label[@data-product-attribute-value="4853"]', locateStrategy: 'xpath' },
        blktFrame: { selector: '//label[@data-product-attribute-value="7057"]', locateStrategy: 'xpath' },
        blkcommTFrame: { selector: '//label[@data-product-attribute-value="7061"]', locateStrategy: 'xpath' },
        whtFrame: { selector: '//label[@data-color="white"]', locateStrategy: 'xpath' },
        whtcFrame: { selector: '//label[@data-product-attribute-value="4852"]', locateStrategy: 'xpath' },
        whtcommcFrame: { selector: '//label[@data-product-attribute-value="4856"]', locateStrategy: 'xpath' },
        whttFrame: { selector: '//label[@data-product-attribute-value="7058"]', locateStrategy: 'xpath' },
        whtcommTFrame: { selector: '//label[@data-product-attribute-value="7062"]', locateStrategy: 'xpath' },
        gryFrame: { selector: '//label[@data-color="gray"]', locateStrategy: 'xpath' },
        grycFrame: { selector: '//label[@data-product-attribute-value="4851"]', locateStrategy: 'xpath' },
        grycommcFrame: { selector: '//label[@data-product-attribute-value="4855"]', locateStrategy: 'xpath' },
        grytFrame: { selector: '//label[@data-product-attribute-value="7059"]', locateStrategy: 'xpath' },
        grycommTFrame: { selector: '//label[@data-product-attribute-value="7063"]', locateStrategy: 'xpath' },
        mtlFrame: { selector: '//label[@data-color="metallic"]', locateStrategy: 'xpath' },
        mtlcFrame: { selector: '//label[@data-product-attribute-value="4850"]', locateStrategy: 'xpath' },
        mtlcommcFrame: { selector: '//label[@data-product-attribute-value="4854"]', locateStrategy: 'xpath' },
        mtltFrame: { selector: '//label[@data-product-attribute-value="7060"]', locateStrategy: 'xpath' },
        mtlcommTFrame: { selector: '//label[@data-product-attribute-value="7064"]', locateStrategy: 'xpath' },
        //Grommets
        blkGromm: { selector: '(//label[@data-color="BLK"])[1]', locateStrategy: 'xpath' },
        blkTwoWire: { selector: '//label[@data-product-attribute-value="3821"]', locateStrategy: 'xpath' },
        blkOneWireOnePower: { selector: '//label[@data-product-attribute-value="3822"]', locateStrategy: 'xpath' },
        blkTwoPower: { selector: '//label[@data-product-attribute-value="3823"]', locateStrategy: 'xpath' },
        blkOneStorOneWire: { selector: '//label[@data-product-attribute-value="6915"]', locateStrategy: 'xpath' },
        blkTwoStore: { selector: '//label[@data-product-attribute-value="6916"]', locateStrategy: 'xpath' },
        blkOneStoreOnePower: { selector: '//label[@data-product-attribute-value="6917"]', locateStrategy: 'xpath' },
        whtGromm: { selector: '(//label[@data-color="WHT"])[1]', locateStrategy: 'xpath' },
        whtTwoWire: { selector: '//label[@data-product-attribute-value="3941"]', locateStrategy: 'xpath' },
        whtOneWireOnePower: { selector: '//label[@data-product-attribute-value="3942"]', locateStrategy: 'xpath' },
        whtTwoPower: { selector: '//label[@data-product-attribute-value="3943"]', locateStrategy: 'xpath' },
        whtOneStorOneWire: { selector: '//label[@data-product-attribute-value="6921"]', locateStrategy: 'xpath' },
        whtTwoStore: { selector: '//label[@data-product-attribute-value="6922"]', locateStrategy: 'xpath' },
        whtOneStoreOnePower: { selector: '//label[@data-product-attribute-value="6923"]', locateStrategy: 'xpath' },
        gryGromm: { selector: '(//label[@data-color="GRY"])[1]', locateStrategy: 'xpath' },
        gryTwoWire: { selector: '//label[@data-product-attribute-value="3938"]', locateStrategy: 'xpath' },
        gryOneWireOnePower: { selector: '//label[@data-product-attribute-value="3939"]', locateStrategy: 'xpath' },
        gryTwoPower: { selector: '//label[@data-product-attribute-value="3940"]', locateStrategy: 'xpath' },
        gryOneStorOneWire: { selector: '//label[@data-product-attribute-value="6918"]', locateStrategy: 'xpath' },
        gryTwoStore: { selector: '//label[@data-product-attribute-value="6919"]', locateStrategy: 'xpath' },
        gryOneStoreOnePower: { selector: '//label[@data-product-attribute-value="6920"]', locateStrategy: 'xpath' },
        //Keypad
        blkKey: { selector: '(//label[@data-color="BLK"])[2]', locateStrategy: 'xpath' },
        blkBaseKey: { selector: '//label[@data-product-attribute-value="1543"]', locateStrategy: 'xpath' },
        blkDigKey: { selector: '//label[@data-product-attribute-value="4707"]', locateStrategy: 'xpath' },
        blkComKey: { selector: '//label[@data-product-attribute-value="5854"]', locateStrategy: 'xpath' },
        whtKey: { selector: '(//label[@data-color="WHT"])[2]', locateStrategy: 'xpath' },
        whtDigKey: { selector: '//label[@data-product-attribute-value="4706"]', locateStrategy: 'xpath' },
        whtComKey: { selector: '//label[@data-product-attribute-value="5855"]', locateStrategy: 'xpath' },
        gryKey: { selector: '(//label[@data-color="GRY"])[2]', locateStrategy: 'xpath' },
        gryDigKey: { selector: '//label[@data-product-attribute-value="4709"]', locateStrategy: 'xpath' },
        gryComKey: { selector: '//label[@data-product-attribute-value="5856"]', locateStrategy: 'xpath' },


        //Verifs
        //Desks
        UPL912: { selector: '//span[contains(text(), "UPL912")]', locateStrategy: 'xpath' },
        //mats
        desWhiteVer: { selector: '(//span[contains(text(), "Designer White")])[2]', locateStrategy: 'xpath' },
        mrkrFrostyVer: { selector: '(//span[contains(text(), "Markerboard Frosty White")])[2]', locateStrategy: 'xpath' },
        figMahogVer: { selector: '(//span[contains(text(), "Figured Mahogany")])[2]', locateStrategy: 'xpath' },
        colWalVer: { selector: '(//span[contains(text(), "Colombian Walnut")])[2]', locateStrategy: 'xpath' },
        walHeightVer: { selector: '(//span[contains(text(), "Walnut Heights")])[2]', locateStrategy: 'xpath' },
        uptWalVer: { selector: '(//span[contains(text(), "Uptown Walnut")])[2]', locateStrategy: 'xpath' },
        fusMapVer: { selector: '(//span[contains(text(), "Fusion Maple")])[2]', locateStrategy: 'xpath' },
        kensMapVer: { selector: '(//span[contains(text(), "Kensington Maple")])[2]', locateStrategy: 'xpath' },
        fawnCypVer: { selector: '(//span[contains(text(), "Fawn Cypress")])[2]', locateStrategy: 'xpath' },
        verTeakVer: { selector: '(//span[contains(text(), "Veranda Teak")])[2]', locateStrategy: 'xpath' },
        fontPearVer: { selector: '(//span[contains(text(), "Fonthill Pear")])[2]', locateStrategy: 'xpath' },
        wildChryVer: { selector: '(//span[contains(text(), "Wild Cherry")])[2]', locateStrategy: 'xpath' },
        blkVer: { selector: '(//span[contains(text(), "Black 1595")])[2]', locateStrategy: 'xpath' },
        shadAshVer: { selector: '(//span[contains(text(), "Shadow Ash")])[2]', locateStrategy: 'xpath' },
        phanCharVer: { selector: '(//span[contains(text(), "Phantom Charcoal")])[2]', locateStrategy: 'xpath' },
        sterAshVer: { selector: '(//span[contains(text(), "Sterling Ash")])[2]', locateStrategy: 'xpath' },
        asiaNightVer: { selector: '(//span[contains(text(), "Asian Night")])[2]', locateStrategy: 'xpath' },
        madaVer: { selector: '(//span[contains(text(), "Madagascar")])[2]', locateStrategy: 'xpath' },
        graphNebVer: { selector: '(//span[contains(text(), "Graphite Nebula")])[2]', locateStrategy: 'xpath' },
        slteGryVer: { selector: '(//span[contains(text(), "Slate Gray")])[2]', locateStrategy: 'xpath' },
        cldNebVer: { selector: '(//span[contains(text(), "Cloud Nebula")])[2]', locateStrategy: 'xpath' },
        whtNebVer: { selector: '(//span[contains(text(), "White Nebula")])[2]', locateStrategy: 'xpath' },
        platVer: { selector: '(//span[contains(text(), "Platinum")])[2]', locateStrategy: 'xpath' },
        windBronzeVer: { selector: '(//span[contains(text(), "Windswept Bronze")])[2]', locateStrategy: 'xpath' },
        pewtVer: { selector: '(//span[contains(text(), "Pewter Brush")])[2]', locateStrategy: 'xpath' },
        timCoppVer: { selector: '(//span[contains(text(), "Timeworn Copper")])[2]', locateStrategy: 'xpath' },
        rustVer: { selector: '(//span[contains(text(), "Milwaukee Jct. Rust")])[2]', locateStrategy: 'xpath' },
        asterVer: { selector: '(//span[contains(text(), "Aster")])[2]', locateStrategy: 'xpath' },
        //sizes
        fortyTwoByThirtyVer: { selector: `(//span[contains(text(), '42" x 30"')])[2]`, locateStrategy: 'xpath' },
        fortyFourByThirtyVer: { selector: `(//span[contains(text(), '44" x 30"')])[2]`, locateStrategy: 'xpath' },
        fortyEightByThirtyVer: { selector: `(//span[contains(text(), '48" x 30"')])[2]`, locateStrategy: 'xpath' },
        fiftyByThirtyVer: { selector: `(//span[contains(text(), '50" x 30"')])[2]`, locateStrategy: 'xpath' },
        fiftyTwoByThirtyVer: { selector: `(//span[contains(text(), '52" x 30"')])[2]`, locateStrategy: 'xpath' },
        fiftyFourByThirtyVer: { selector: `(//span[contains(text(), '54" x 30"')])[2]`, locateStrategy: 'xpath' },
        fiftySixByThirtyVer: { selector: `(//span[contains(text(), '56" x 30"')])[2]`, locateStrategy: 'xpath' },
        fiftyEightByThirtyVer: { selector: `(//span[contains(text(), '58" x 30"')])[2]`, locateStrategy: 'xpath' },
        sixtyByThirtyVer: { selector: `(//span[contains(text(), '60" x 30"')])[2]`, locateStrategy: 'xpath' },
        sixtyTwoByThirtyVer: { selector: `(//span[contains(text(), '62" x 30"')])[2]`, locateStrategy: 'xpath' },
        sixtyFourByThirtyVer: { selector: `(//span[contains(text(), '64" x 30"')])[2]`, locateStrategy: 'xpath' },
        sixtySixByThirtyVer: { selector: `(//span[contains(text(), '66" x 30"')])[2]`, locateStrategy: 'xpath' },
        sixtyEightByThirtyVer: { selector: `(//span[contains(text(), '68" x 30"')])[2]`, locateStrategy: 'xpath' },
        seventyByThirtyVer: { selector: `(//span[contains(text(), '70" x 30"')])[2]`, locateStrategy: 'xpath' },
        seventyTwoByThirtyVer: { selector: `(//span[contains(text(), '72" x 30"')])[2]`, locateStrategy: 'xpath' },
        seventyFourByThirtyVer: { selector: `(//span[contains(text(), '74" x 30"')])[2]`, locateStrategy: 'xpath' },
        seventySixByThirtyVer: { selector: `(//span[contains(text(), '76" x 30"')])[2]`, locateStrategy: 'xpath' },
        seventyEightByThirtyVer: { selector: `(//span[contains(text(), '78" x 30"')])[2]`, locateStrategy: 'xpath' },
        eightyByThirtyVer: { selector: `(//span[contains(text(), '80" x 30"')])[2]`, locateStrategy: 'xpath' },
        //frames
        blkcFrameVer: {selector: '//span[contains(text(), "V2 C-Frame - Black")]', locateStrategy: 'xpath'},
        blkcommcFrameVer: {selector: '//span[contains(text(), " V2-Commercial C-Frame - Black")]', locateStrategy: 'xpath'},
        blktFrameVer: {selector: '//span[contains(text(), " V2 T-Frame - Black")]', locateStrategy: 'xpath'},
        blkcommTFrameVer: {selector: '//span[contains(text(), " V2-Commercial T-Frame - Black")]', locateStrategy: 'xpath'},
        whtcFrameVer: {selector: '//span[contains(text(), "V2 C-Frame - White")]', locateStrategy: 'xpath'},
        whtcommcFrameVer: {selector: '//span[contains(text(), " V2-Commercial C-Frame - White")]', locateStrategy: 'xpath'},
        whttFrameVer: {selector: '//span[contains(text(), "V2 T-Frame - White")]', locateStrategy: 'xpath'},
        whtcommTFrameVer: {selector: '//span[contains(text(), "V2-Commercial T-Frame - White")]', locateStrategy: 'xpath'},
        grycFrameVer: {selector: '//span[contains(text(), "V2 C-Frame - Gray")]', locateStrategy: 'xpath'},
        grycommcFrameVer: {selector: '//span[contains(text(), "V2-Commercial C-Frame - Gray")]', locateStrategy: 'xpath'},
        grytFrameVer: {selector: '//span[contains(text(), "V2 T-Frame - Gray")]', locateStrategy: 'xpath'},
        grycommTFrameVer: {selector: '//span[contains(text(), " V2-Commercial T-Frame - Gray")]', locateStrategy: 'xpath'},
        mtlcFrameVer: {selector: '//span[contains(text(), "V2 C-Frame - Metallic")]', locateStrategy: 'xpath'},
        mtlcommcFrameVer: {selector: '//span[contains(text(), " V2-Commercial C-Frame - Metallic")]', locateStrategy: 'xpath'},
        mtltFrameVer: {selector: '//span[contains(text(), "V2 T-Frame - Metallic")]', locateStrategy: 'xpath'},
        mtlcommTFrameVer: {selector: '//span[contains(text(), "V2-Commercial T-Frame - Metallic")]', locateStrategy: 'xpath'},
        //grommets
        blkTwoWireVer: {selector: '//span[contains(text(), "Two Wire Grommets - Black")]', locateStrategy: 'xpath'},
        blkOneWireOnePowerVer: {selector: '//span[contains(text(), " One Wire Grommet and One Power Grommet - Black")]', locateStrategy: 'xpath'},
        blkTwoPowerVer: {selector: '//span[contains(text(), " Two Power Grommets - Black")]', locateStrategy: 'xpath'},
        blkOneStorOneWireVer: {selector: '//span[contains(text(), " One Storage and One Wire Grommet - Black")]', locateStrategy: 'xpath'},
        blkTwoStoreVer: {selector: '//span[contains(text(), " Two Storage Grommets - Black")]', locateStrategy: 'xpath'},
        blkOneStoreOnePowerVer: {selector: '//span[contains(text(), " One Storage and One Power Grommet - Black")]', locateStrategy: 'xpath'},
        whtTwoWireVer: {selector: '//span[contains(text(), "Two Wire Grommets - White")]', locateStrategy: 'xpath'},
        whtOneWireOnePowerVer: {selector: '//span[contains(text(), " One Wire Grommet and One Power Grommet - White")]', locateStrategy: 'xpath'},
        whtTwoPowerVer: {selector: '//span[contains(text(), " Two Power Grommets - White")]', locateStrategy: 'xpath'},
        whtOneStorOneWireVer: {selector: '//span[contains(text(), " One Storage and One Wire Grommet - White")]', locateStrategy: 'xpath'},
        whtTwoStoreVer: {selector: '//span[contains(text(), " Two Storage Grommets - White")]', locateStrategy: 'xpath'},
        whtOneStoreOnePowerVer: {selector: '//span[contains(text(), " One Storage and One Power Grommet - White")]', locateStrategy: 'xpath'},
        gryTwoWireVer: {selector: '//span[contains(text(), "Two Wire Grommets - Gray")]', locateStrategy: 'xpath'},
        gryOneWireOnePowerVer: {selector: '//span[contains(text(), " One Wire Grommet and One Power Grommet - Gray")]', locateStrategy: 'xpath'},
        gryTwoPowerVer: {selector: '//span[contains(text(), " Two Power Grommets - Gray")]', locateStrategy: 'xpath'},
        gryOneStorOneWireVer: {selector: '//span[contains(text(), " One Storage and One Wire Grommet - Gray")]', locateStrategy: 'xpath'},
        gryTwoStoreVer: {selector: '//span[contains(text(), " Two Storage Grommets - Gray")]', locateStrategy: 'xpath'},
        gryOneStoreOnePowerVer: {selector: '//span[contains(text(), " One Storage and One Power Grommet - Gray")]', locateStrategy: 'xpath'},
        //keys
        blkBaseKeyVer: {selector: '//span[contains(text(), "Basic Keypad")]', locateStrategy: 'xpath'},
        blkDigKeyVer: {selector: '//span[contains(text(), "Memory Keypad - Black")]', locateStrategy: 'xpath'},
        blkComKeyVer: {selector: '//span[contains(text(), "Comfort Keypad - Black")]', locateStrategy: 'xpath'},
        whtDigKeyVer: {selector: '//span[contains(text(), "Memory Keypad - White")]', locateStrategy: 'xpath'},
        whtComKeyVer: {selector: '//span[contains(text(), "Comfort Keypad - White")]', locateStrategy: 'xpath'},
        gryDigKeyVer: {selector: '//span[contains(text(), "Memory Keypad - Gray")]', locateStrategy: 'xpath'},
        gryComKeyVer: {selector: '//span[contains(text(), "Comfort Keypad - Gray")]', locateStrategy: 'xpath'},
    }
}