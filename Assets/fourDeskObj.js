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
        fourStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/281/11633/product-image-thumbnail-4-leg-desk-upl941__80798.1597246711.jpg?c=2"]', locateStrategy: 'xpath' },
        //Desk Mats
        walLam: { selector: '//label[@data-product-attribute-value="4237"]', locateStrategy: 'xpath'},
        whtLam: { selector: '//label[@data-product-attribute-value="4265"]', locateStrategy: 'xpath'},
        whtBrdLam: { selector: '//label[@data-product-attribute-value="7671"]', locateStrategy: 'xpath'},
        blkLam: { selector: '//label[@data-product-attribute-value="4264"]', locateStrategy: 'xpath'},
        ashGryLam: { selector: '//label[@data-product-attribute-value="4236"]', locateStrategy: 'xpath'},
        mapLam: { selector: '//label[@data-product-attribute-value="2652"]', locateStrategy: 'xpath'},
        chryLam: { selector: '//label[@data-product-attribute-value="2651"]', locateStrategy: 'xpath'},
        bamboo: { selector: '//label[@data-product-attribute-value="2648"]', locateStrategy: 'xpath'},
        ergoBam: { selector: '//label[@data-product-attribute-value="8840"]', locateStrategy: 'xpath'},
        natRbbr: { selector: '//label[@data-product-attribute-value="4143"]', locateStrategy: 'xpath'},
        drkRbbr: { selector: '//label[@data-product-attribute-value="4263"]', locateStrategy: 'xpath'},
        recFir: { selector: '//label[@data-product-attribute-value="2653"]', locateStrategy: 'xpath'},
        rustFir: { selector: '//label[@data-product-attribute-value="7672"]', locateStrategy: 'xpath'},
        acacia: { selector: '//label[@data-product-attribute-value="5988"]', locateStrategy: 'xpath'},
        pheasant: { selector: '//label[@data-product-attribute-value="5991"]', locateStrategy: 'xpath'},
        ash: { selector: '//label[@data-product-attribute-value="5989"]', locateStrategy: 'xpath'},
        mahog: { selector: '//label[@data-product-attribute-value="5990"]', locateStrategy: 'xpath'},
        walnut: { selector: '//label[@data-product-attribute-value="5992"]', locateStrategy: 'xpath'},
        maple: { selector: '//label[@data-product-attribute-value="2659"]', locateStrategy: 'xpath'},
        drkAsh: { selector: '//label[@data-product-attribute-value="2657"]', locateStrategy: 'xpath'},
        natAsh: { selector: '//label[@data-product-attribute-value="2658"]', locateStrategy: 'xpath'},
        drkPecan: { selector: '//label[@data-product-attribute-value="2660"]', locateStrategy: 'xpath'},
        natPecan: { selector: '//label[@data-product-attribute-value="2661"]', locateStrategy: 'xpath'},
        whtOak: { selector: '//label[@data-product-attribute-value="2662"]', locateStrategy: 'xpath'},
        sipoMahog: { selector: '//label[@data-product-attribute-value="2663"]', locateStrategy: 'xpath'},
        cherry: { selector: '//label[@data-product-attribute-value="2664"]', locateStrategy: 'xpath'},
        custBam: { selector: '//label[@data-product-attribute-value="2665"]', locateStrategy: 'xpath'},
        custWal: { selector: '//label[@data-product-attribute-value="2666"]', locateStrategy: 'xpath'},
        custCed: { selector: '//label[@data-product-attribute-value="2667"]', locateStrategy: 'xpath'},
        frontCed: { selector: '//label[@data-product-attribute-value="3232"]', locateStrategy: 'xpath'},
        fabCed: { selector: '//label[@data-product-attribute-value="3233"]', locateStrategy: 'xpath'},
        mesq: { selector: '//label[@data-product-attribute-value="2670"]', locateStrategy: 'xpath'},
        frontMesq: { selector: '//label[@data-product-attribute-value="3234"]', locateStrategy: 'xpath'},
        fabMesq: { selector: '//label[@data-product-attribute-value="3235"]', locateStrategy: 'xpath'},
        //Sizes
        s63: { selector: '//label[@data-product-attribute-value="2936"]', locateStrategy: 'xpath'},
        s73: { selector: '//label[@data-product-attribute-value="2937"]', locateStrategy: 'xpath'},
        s83: { selector: '//label[@data-product-attribute-value="2938"]', locateStrategy: 'xpath'},
        //Frames
        blkFrame: { selector: '//label[@data-color="black"]', locateStrategy: 'xpath' },
        blkCFrame: { selector: '//label[@data-product-attribute-value="3922"]', locateStrategy: 'xpath' },
        blkCommCFrame: { selector: '//label[@data-product-attribute-value="6380"]', locateStrategy: 'xpath' },
        whtFrame: { selector: '//label[@data-color="white"]', locateStrategy: 'xpath' },
        whtCFrame: { selector: '//label[@data-product-attribute-value="3924"]', locateStrategy: 'xpath' },
        whtCommCFrame: { selector: '//label[@data-product-attribute-value="6381"]', locateStrategy: 'xpath' },
        gryFrame: { selector: '//label[@data-color="gray"]', locateStrategy: 'xpath' },
        gryCFrame: { selector: '//label[@data-product-attribute-value="3923"]', locateStrategy: 'xpath' },
        gryCommCFrame: { selector: '//label[@data-product-attribute-value="6382"]', locateStrategy: 'xpath' },
        mtlFrame: { selector: '//label[@data-color="metallic"]', locateStrategy: 'xpath' },
        mtlCFrame: { selector: '//label[@data-product-attribute-value="4432"]', locateStrategy: 'xpath' },
        mtlCommCFrame: { selector: '//label[@data-product-attribute-value="6383"]', locateStrategy: 'xpath' },
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
        UPL941: { selector: '//span[contains(text(), "UPL941")]', locateStrategy: 'xpath' },
        //Mats
        walLamVer: { selector: '(//span[contains(text(), "Walnut - Laminate")])[2]', locateStrategy: 'xpath'},
        whtLamVer: { selector: '(//span[contains(text(), "White - Laminate")])[2]', locateStrategy: 'xpath'},
        whtBrdLamVer: { selector: '(//span[contains(text(), "Whiteboard - Laminate")])[2]', locateStrategy: 'xpath'},
        blkLamVer: { selector: '(//span[contains(text(), "Black - Laminate")])[2]', locateStrategy: 'xpath'},
        ashGryLamVer: { selector: '(//span[contains(text(), "Ash Gray - Laminate")])[2]', locateStrategy: 'xpath'},
        mapLamVer: { selector: '(//span[contains(text(), "Maple - Laminate")])[2]', locateStrategy: 'xpath'},
        chryLamVer: { selector: '(//span[contains(text(), "Cherry - Laminate")])[2]', locateStrategy: 'xpath'},
        bambooVer: { selector: '(//span[contains(text(), "Carbonized - Bamboo")])[2]', locateStrategy: 'xpath'},
        ergoBamVer: { selector: '(//span[contains(text(), " Carbonized - Ergo Edge Curved - Bamboo")])[2]', locateStrategy: 'xpath'},
        natRbbrVer: { selector: '(//span[contains(text(), "Natural - Rubberwood - Solid Wood")])[2]', locateStrategy: 'xpath'},
        drkRbbrVer: { selector: '(//span[contains(text(), "Dark Brown - Rubberwood - Solid Wood")])[2]', locateStrategy: 'xpath'},
        recFirVer: { selector: '(//span[contains(text(), "Reclaimed Fir - Solid Wood")])[2]', locateStrategy: 'xpath'},
        rustFirVer: { selector: '(//span[contains(text(), "Rustic Reclaimed Fir")])[2]', locateStrategy: 'xpath'},
        acaciaVer: { selector: '(//span[contains(text(), "Acacia - Solid Wood")])[2]', locateStrategy: 'xpath'},
        pheasantVer: { selector: '(//span[contains(text(), "Pheasantwood - Solid Wood")])[2]', locateStrategy: 'xpath'},
        ashVer: { selector: '(//span[contains(text(), "Ash - Solid Wood")])[2]', locateStrategy: 'xpath'},
        mahogVer: { selector: '(//span[contains(text(), "African Mahogany - Solid Wood")])[2]', locateStrategy: 'xpath'},
        walnutVer: { selector: '(//span[contains(text(), "Walnut - Solid Wood")])[2]', locateStrategy: 'xpath'},
        mapleVer: { selector: '(//span[contains(text(), "Maple - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        drkAshVer: { selector: '(//span[contains(text(), "Dark - Ash - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        natAshVer: { selector: '(//span[contains(text(), "Natural - Ash - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        drkPecanVer: { selector: '(//span[contains(text(), "Dark - Pecan - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        natPecanVer: { selector: '(//span[contains(text(), "Natural - Pecan - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        whtOakVer: { selector: '(//span[contains(text(), "White - Oak - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        sipoMahogVer: { selector: '(//span[contains(text(), "Sipo Mahogany - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        cherryVer: { selector: '(//span[contains(text(), "Cherry - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        custBamVer: { selector: '(//span[contains(text(), "Bamboo - Custom Made")])[2]', locateStrategy: 'xpath'},
        custWalVer: { selector: '(//span[contains(text(), "Walnut - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        custCedVer: { selector: '(//span[contains(text(), "Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        frontCedVer: { selector: '(//span[contains(text(), "Cedar - Barkline Front - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        fabCedVer: { selector: '(//span[contains(text(), "Cedar - Barkline Front & Back - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        mesqVer: { selector: '(//span[contains(text(), "Mesquite - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        frontMesqVer: { selector: '(//span[contains(text(), "Mesquite - Barkline Front - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        fabMesqVer: { selector: '(//span[contains(text(), "Mesquite - Barkline Front & Back - Custom Solid Wood")])[2]', locateStrategy: 'xpath'},
        //Sizes
        ver63: { selector: `(//span[contains(text(), '60" x 30"')])[2]`, locateStrategy: 'xpath'},
        ver73: { selector: `(//span[contains(text(), '72" x 30"')])[2]`, locateStrategy: 'xpath'},
        ver83: { selector: `(//span[contains(text(), '80" x 30"')])[2]`, locateStrategy: 'xpath'},
        //Frames
        blkCFrameVer: { selector: '//span[contains(text(), "V2 - Black")]', locateStrategy: 'xpath' },
        blkCommCFrameVer: { selector: '//span[contains(text(), "V2-Commercial - Black")]', locateStrategy: 'xpath' },
        whtCFrameVer: { selector: '//span[contains(text(), "V2 - White")]', locateStrategy: 'xpath' },
        whtCommCFrameVer: { selector: '//span[contains(text(), "V2-Commercial - White")]', locateStrategy: 'xpath' },
        gryCFrameVer: { selector: '//span[contains(text(), "V2 - Gray")]', locateStrategy: 'xpath' },
        gryCommCFrameVer: { selector: '//span[contains(text(), "V2-Commercial - Gray")]', locateStrategy: 'xpath' },
        mtlCFrameVer: { selector: '//span[contains(text(), "V2 - Metallic - Industrial Style")]', locateStrategy: 'xpath' },
        mtlCommCFrameVer: { selector: '//span[contains(text(), "V2-Commercial - Metallic - Industrial Style")]', locateStrategy: 'xpath' },
        //Grommets
        blkTwoWireVer: { selector: '//span[contains(text(), "Two Wire Grommets - Black")]', locateStrategy: 'xpath' },
        blkOneWireOnePowerVer: { selector: '//span[contains(text(), " One Wire Grommet and One Power Grommet - Black")]', locateStrategy: 'xpath' },
        blkTwoPowerVer: { selector: '//span[contains(text(), " Two Power Grommets - Black")]', locateStrategy: 'xpath' },
        blkOneStorOneWireVer: { selector: '//span[contains(text(), " One Storage and One Wire Grommet - Black")]', locateStrategy: 'xpath' },
        blkTwoStoreVer: { selector: '//span[contains(text(), " Two Storage Grommets - Black")]', locateStrategy: 'xpath' },
        blkOneStoreOnePowerVer: { selector: '//span[contains(text(), " One Storage and One Power Grommet - Black")]', locateStrategy: 'xpath' },
        whtTwoWireVer: { selector: '//span[contains(text(), "Two Wire Grommets - White")]', locateStrategy: 'xpath' },
        whtOneWireOnePowerVer: { selector: '//span[contains(text(), " One Wire Grommet and One Power Grommet - White")]', locateStrategy: 'xpath' },
        whtTwoPowerVer: { selector: '//span[contains(text(), " Two Power Grommets - White")]', locateStrategy: 'xpath' },
        whtOneStorOneWireVer: { selector: '//span[contains(text(), " One Storage and One Wire Grommet - White")]', locateStrategy: 'xpath' },
        whtTwoStoreVer: { selector: '//span[contains(text(), " Two Storage Grommets - White")]', locateStrategy: 'xpath' },
        whtOneStoreOnePowerVer: { selector: '//span[contains(text(), " One Storage and One Power Grommet - White")]', locateStrategy: 'xpath' },
        gryTwoWireVer: { selector: '//span[contains(text(), "Two Wire Grommets - Gray")]', locateStrategy: 'xpath' },
        gryOneWireOnePowerVer: { selector: '//span[contains(text(), " One Wire Grommet and One Power Grommet - Gray")]', locateStrategy: 'xpath' },
        gryTwoPowerVer: { selector: '//span[contains(text(), " Two Power Grommets - Gray")]', locateStrategy: 'xpath' },
        gryOneStorOneWireVer: { selector: '//span[contains(text(), " One Storage and One Wire Grommet - Gray")]', locateStrategy: 'xpath' },
        gryTwoStoreVer: { selector: '//span[contains(text(), " Two Storage Grommets - Gray")]', locateStrategy: 'xpath' },
        gryOneStoreOnePowerVer: { selector: '//span[contains(text(), " One Storage and One Power Grommet - Gray")]', locateStrategy: 'xpath' },
        //Keypads
        blkBaseKeyVer: { selector: '//span[contains(text(), "Basic Keypad")]', locateStrategy: 'xpath' },
        blkDigKeyVer: { selector: '//span[contains(text(), "Memory Keypad - Black")]', locateStrategy: 'xpath' },
        blkComKeyVer: { selector: '//span[contains(text(), "Comfort Keypad - Black")]', locateStrategy: 'xpath' },
        whtDigKeyVer: { selector: '//span[contains(text(), "Memory Keypad - White")]', locateStrategy: 'xpath' },
        whtComKeyVer: { selector: '//span[contains(text(), "Comfort Keypad - White")]', locateStrategy: 'xpath' },
        gryDigKeyVer: { selector: '//span[contains(text(), "Memory Keypad - Gray")]', locateStrategy: 'xpath' },
        gryComKeyVer: { selector: '//span[contains(text(), "Comfort Keypad - Gray")]', locateStrategy: 'xpath' },
    }
}