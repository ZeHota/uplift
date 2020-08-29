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
        lStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/859/11636/product-image-thumbnail-l-shape-desk-upl934__78529.1597247323.jpg?c=2"]', locateStrategy: 'xpath'},
        //Desk Mats
        walLam: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        whtLam: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        blkLam: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        carbBamLam: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        natRubr: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        //Desk Sizes
        s6732: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        s7732: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        s8732: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        //Frames
        blkCFrame: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        blkCommCFrame: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        whtCFrame: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        whtCommCFrame: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        gryCFrame: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        gryCommCFrame: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        mtlCFrame: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
        mtlCommCFrame: { selector: '//label[@data-product-attribute-value=""]', locateStrategy: 'xpath'},
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
        UPL934: { selector: '//span[contains(text(), "UPL934")]', locateStrategy: 'xpath'},
        //Mats
        walLamVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        whtLamVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        blkLamVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        carbBamLamVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        natRubrVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        //Sizes
        ver6732: { selector: ``, locateStrategy: 'xpath'},
        ver7732: { selector: ``, locateStrategy: 'xpath'},
        ver8732: { selector: ``, locateStrategy: 'xpath'},
        //Frames
        blkCFrameVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        blkCommCFrameVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        whtCFrame: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        whtCommCFrameVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        gryCFrameVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        gryCommCFrameVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        mtlCFrameVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        mtlCommCFrameVer: { selector: '//span[contains(text(), "")]', locateStrategy: 'xpath'},
        //Grommets
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
        //Keys
        blkBaseKeyVer: {selector: '//span[contains(text(), "Basic Keypad")]', locateStrategy: 'xpath'},
        blkDigKeyVer: {selector: '//span[contains(text(), "Memory Keypad - Black")]', locateStrategy: 'xpath'},
        blkComKeyVer: {selector: '//span[contains(text(), "Comfort Keypad - Black")]', locateStrategy: 'xpath'},
        whtDigKeyVer: {selector: '//span[contains(text(), "Memory Keypad - White")]', locateStrategy: 'xpath'},
        whtComKeyVer: {selector: '//span[contains(text(), "Comfort Keypad - White")]', locateStrategy: 'xpath'},
        gryDigKeyVer: {selector: '//span[contains(text(), "Memory Keypad - Gray")]', locateStrategy: 'xpath'},
        gryComKeyVer: {selector: '//span[contains(text(), "Comfort Keypad - Gray")]', locateStrategy: 'xpath'},
    }
}