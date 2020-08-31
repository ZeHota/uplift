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
        //Desk Selectors
        stand: {selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/890/11640/product-image-thumbnail-v2-standing-desk-upl960__84337.1597247526.jpg?c=2"]', locateStrategy: 'xpath' },
        lamLDesk: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/232/7759/product-image-thumbnail-custom-laminate-l-shape__16956.1576602297.jpg?c=2"]', locateStrategy: 'xpath'},
        //Desk Mats
        wldChry: { selector: '//label[@data-product-attribute-value="1709"]', locateStrategy: 'xpath'},
        mahog: { selector: '//label[@data-product-attribute-value="1714"]', locateStrategy: 'xpath'},
        desWht: { selector: '//label[@data-product-attribute-value="1715"]', locateStrategy: 'xpath'},
        blk: { selector: '//label[@data-product-attribute-value="1716"]', locateStrategy: 'xpath'},
        fusMap: { selector: '//label[@data-product-attribute-value="1717"]', locateStrategy: 'xpath'},
        whtNeb: { selector: '//label[@data-product-attribute-value="1718"]', locateStrategy: 'xpath'},
        cldNeb: { selector: '//label[@data-product-attribute-value="1719"]', locateStrategy: 'xpath'},
        fontPear: { selector: '//label[@data-product-attribute-value="1720"]', locateStrategy: 'xpath'},
        //Sizes
        s6060: { selector: '//label[@data-product-attribute-value="2894"]', locateStrategy: 'xpath'},
        s6666: { selector: '//label[@data-product-attribute-value="2895"]', locateStrategy: 'xpath'},
        s7272: { selector: '//label[@data-product-attribute-value="2896"]', locateStrategy: 'xpath'},
        s7878: { selector: '//label[@data-product-attribute-value="2897"]', locateStrategy: 'xpath'},
        s8484: { selector: '//label[@data-product-attribute-value="2898"]', locateStrategy: 'xpath'},
        //Frames
        blkFrame: { selector: '//label[@data-color="black"]', locateStrategy: 'xpath' },
        blkcFrame: { selector: '//label[@data-product-attribute-value="5175"]', locateStrategy: 'xpath' },
        blkcommcFrame: { selector: '//label[@data-product-attribute-value="5179"]', locateStrategy: 'xpath' },
        whtFrame: { selector: '//label[@data-color="white"]', locateStrategy: 'xpath' },
        whtcFrame: { selector: '//label[@data-product-attribute-value="5177"]', locateStrategy: 'xpath' },
        whtcommcFrame: { selector: '//label[@data-product-attribute-value="5181"]', locateStrategy: 'xpath' },
        gryFrame: { selector: '//label[@data-color="gray"]', locateStrategy: 'xpath' },
        grycFrame: { selector: '//label[@data-product-attribute-value="5176"]', locateStrategy: 'xpath' },
        grycommcFrame: { selector: '//label[@data-product-attribute-value="5180"]', locateStrategy: 'xpath' },
        mtlFrame: { selector: '//label[@data-color="metallic"]', locateStrategy: 'xpath' },
        mtlcFrame: { selector: '//label[@data-product-attribute-value="5174"]', locateStrategy: 'xpath' },
        mtlcommcFrame: { selector: '//label[@data-product-attribute-value="5178"]', locateStrategy: 'xpath' },
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
        UPL931: { selector: '//span[contains(text(), "UPL931")]', locateStrategy: 'xpath' },
        //Mats
        wldChryVer: { selector: '(//span[contains(text(), "Wild Cherry")])[2]', locateStrategy: 'xpath' },
        mahogVer: { selector: '(//span[contains(text(), "Figured Mahogany")])[2]', locateStrategy: 'xpath' },
        desWhtVer: { selector: '(//span[contains(text(), "Designer White")])[2]', locateStrategy: 'xpath' },
        blkVer: { selector: '(//span[contains(text(), "Black")])[2]', locateStrategy: 'xpath' },
        fusMapVer: { selector: '(//span[contains(text(), "Fusion Maple")])[2]', locateStrategy: 'xpath' },
        whtNebVer: { selector: '(//span[contains(text(), "White Nebula")])[2]', locateStrategy: 'xpath' },
        cldNebVer: { selector: '(//span[contains(text(), "Cloud Nebula")])[2]', locateStrategy: 'xpath' },
        fontPearVer: { selector: '(//span[contains(text(), "Fonthill Pear")])[2]', locateStrategy: 'xpath' },
        //Sizes
        ver6060: { selector: `(//span[contains(text(), '60" x 60" x 30"')])[2]`, locateStrategy: 'xpath' },
        ver6666: { selector: `(//span[contains(text(), '66" x 66" x 30"')])[2]`, locateStrategy: 'xpath' },
        ver7272: { selector: `(//span[contains(text(), '72" x 72" x 30"')])[2]`, locateStrategy: 'xpath' },
        ver7878: { selector: `(//span[contains(text(), '78" x 78" x 30"')])[2]`, locateStrategy: 'xpath' },
        ver8484: { selector: `(//span[contains(text(), '84" x 84" x 30"')])[2]`, locateStrategy: 'xpath' },
        //Frames
        blkcFrameVer: {selector: '//span[contains(text(), "V2 C-Frame - Black")]', locateStrategy: 'xpath'},
        blkcommcFrameVer: {selector: '//span[contains(text(), " V2-Commercial C-Frame - Black")]', locateStrategy: 'xpath'},
        whtcFrameVer: {selector: '//span[contains(text(), "V2 C-Frame - White")]', locateStrategy: 'xpath'},
        whtcommcFrameVer: {selector: '//span[contains(text(), " V2-Commercial C-Frame - White")]', locateStrategy: 'xpath'},
        grycFrameVer: {selector: '//span[contains(text(), "V2 C-Frame - Gray")]', locateStrategy: 'xpath'},
        grycommcFrameVer: {selector: '//span[contains(text(), "V2-Commercial C-Frame - Gray")]', locateStrategy: 'xpath'},
        mtlcFrameVer: {selector: '//span[contains(text(), "V2 C-Frame - Metallic")]', locateStrategy: 'xpath'},
        mtlcommcFrameVer: {selector: '//span[contains(text(), " V2-Commercial C-Frame - Metallic")]', locateStrategy: 'xpath'},
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
        //Keypad
        blkBaseKeyVer: {selector: '//span[contains(text(), "Basic Keypad")]', locateStrategy: 'xpath'},
        blkDigKeyVer: {selector: '//span[contains(text(), "Memory Keypad - Black")]', locateStrategy: 'xpath'},
        blkComKeyVer: {selector: '//span[contains(text(), "Comfort Keypad - Black")]', locateStrategy: 'xpath'},
        whtDigKeyVer: {selector: '//span[contains(text(), "Memory Keypad - White")]', locateStrategy: 'xpath'},
        whtComKeyVer: {selector: '//span[contains(text(), "Comfort Keypad - White")]', locateStrategy: 'xpath'},
        gryDigKeyVer: {selector: '//span[contains(text(), "Memory Keypad - Gray")]', locateStrategy: 'xpath'},
        gryComKeyVer: {selector: '//span[contains(text(), "Comfort Keypad - Gray")]', locateStrategy: 'xpath'},
    }
}