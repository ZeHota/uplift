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
        confirm: {selector:'//span[contains(text(), "Confirm Selections")]', locateStrategy: 'xpath'},
        customize: {selector: '(//span[contains(text(), "Customize Desk")])[1]', locateStrategy: 'xpath'},
        noThanks: {selector: '//a[contains(text(), "No, Thank You")]', locateStrategy: 'xpath'},
        //Desk Selectors
        stand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/890/11640/product-image-thumbnail-v2-standing-desk-upl960__84337.1597247526.jpg?c=2"]', locateStrategy: 'xpath' },
        lamStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/671/11635/product-image-thumbnail-custom-laminate-desk-upl912__99852.1597247156.jpg?c=2"]', locateStrategy: 'xpath' },
        lStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/859/11636/product-image-thumbnail-l-shape-desk-upl934__78529.1597247323.jpg?c=2"]', locateStrategy: 'xpath' },
        curveStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/269/11634/product-image-thumbnail-curved-corner-upl933__78692.1597246960.jpg?c=2"]', locateStrategy: 'xpath' },
        deskConv: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/712/8078/e7-electric-thumbnail-UDA115__54743.1580846633.jpg?c=2"]', locateStrategy: 'xpath' },
        standFrame: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/254/10973/v2-standing-desk-frame__78971.1590188940.jpg?c=2"]', locateStrategy: 'xpath' },
        lStandFrame: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/279/11020/l-shaped-standing-desk-frame__38581.1590696207.jpg?c=2"]', locateStrategy: 'xpath' },
        fourFrame: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/280/11022/v2-standing-desk-frame__65907.1590696454.jpg?c=2"]', locateStrategy: 'xpath' },
        fourStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/281/11633/product-image-thumbnail-4-leg-desk-upl941__80798.1597246711.jpg?c=2"]', locateStrategy: 'xpath' },
        lLamStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/232/7759/product-image-thumbnail-custom-laminate-l-shape__16956.1576602297.jpg?c=2"]', locateStrategy: 'xpath' },
        solidStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/276/11637/product-image-thumbnail-special-order-wood-desk-upl922__26897.1597247351.jpg?c=2"]', locateStrategy: 'xpath' },
        lSolidStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/270/7154/image-thumbnail-v2-l-shaped-special-order-wood-desk__48043.1568298721.jpg?c=2"]', locateStrategy: 'xpath' },
        clampConv: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/307/2113/uplift-adapt-standing-desk-converter-uda100-18__11440.1503870832.jpg?c=2"]', locateStrategy: 'xpath' },
        atxConv: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/1156/8077/product-image-thumbnail-atx-desk-converter__84697.1580846594.jpg?c=2"]', locateStrategy: 'xpath' },
        ladybirdConv: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/1155/6793/product-image-lady-bird-desk-converter-1__92705.1565021696.jpg?c=2"]', locateStrategy: 'xpath' },
        compactConv: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/599/8110/uplift-e3-compact-converter-uda121-thumbnail__56374.1580917444.jpg?c=2"]', locateStrategy: 'xpath' },
        deepStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/278/11632/product-image-thumbnail-24in-standing-desk-upl926__58264.1597246641.jpg?c=2"]', locateStrategy: 'xpath' },
        thirtyConf: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/876/11641/product-image-thumbnail-conference-table-upl959__09874.1597252592.jpg?c=2"]', locateStrategy: 'xpath' },
        fourtytwoConf: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/1014/10945/product-image-bamboo-conference-table-thumbnail__38338.1590178278.jpg?c=2"]', locateStrategy: 'xpath' },
        sixtyConf: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/1007/11642/product-image-thumbnail-bamboo-ping-pong-table__77210.1597253477.jpg?c=2"]', locateStrategy: 'xpath' },
        degreeStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/519/11643/product-image-thumbmnail-120-desk__25787.1597253937.jpg?c=2"]', locateStrategy: 'xpath' },
        craftStand: { selector: '//img[@src="https://cdn11.bigcommerce.com/s-l85bzww3lo/images/stencil/361x195/products/774/6871/image-thumbnail-craft-table__96010.1565998720.jpg?c=2"]', locateStrategy: 'xpath' },
        SKU: { selector: '//span[contains(text(), "SKU")]', locateStrategy: 'xpath' },
        //Desk Mats
        walLam: { selector: '//label[@for="attribute_swatch_4275_4865"]', locateStrategy: 'xpath' },
        whtLam: { selector: '//label[@for="attribute_swatch_4275_4863"]', locateStrategy: 'xpath' },
        whtBrdLam: { selector: '//label[@for="attribute_swatch_4275_4864"]', locateStrategy: 'xpath' },
        blkLam: { selector: '//label[@for="attribute_swatch_4275_4862"]', locateStrategy: 'xpath' },
        ashGrayLam: { selector: '//label[@for="attribute_swatch_4275_4868"]', locateStrategy: 'xpath' },
        mapleLam: { selector: '//label[@for="attribute_swatch_4275_4867"]', locateStrategy: 'xpath' },
        cherryLam: { selector: '//label[@for="attribute_swatch_4275_4866"]', locateStrategy: 'xpath' },
        carbBamboo: { selector: '//label[@for="attribute_swatch_4275_4857"]', locateStrategy: 'xpath' },
        carbErgoBamboo: { selector: '//label[@for="attribute_swatch_4275_4909"]', locateStrategy: 'xpath' },
        blkErgo: { selector: '//label[@for="attribute_swatch_4275_4907"]', locateStrategy: 'xpath' },
        whtErgo: { selector: '//label[@for="attribute_swatch_4275_4908"]', locateStrategy: 'xpath' },
        natrubberWood: { selector: '//label[@for="attribute_swatch_4275_4859"]', locateStrategy: 'xpath' },
        drkBrnRubber: { selector: '//label[@for="attribute_swatch_4275_4860"]', locateStrategy: 'xpath' },
        recFir: { selector: '//label[@for="attribute_swatch_4275_6379"]', locateStrategy: 'xpath' },
        acacia: { selector: '//label[@for="attribute_swatch_4275_4873"]', locateStrategy: 'xpath' },
        pheasant: { selector: '//label[@for="attribute_swatch_4275_4876"]', locateStrategy: 'xpath' },
        ash: { selector: '//label[@for="attribute_swatch_4275_4871"]', locateStrategy: 'xpath' },
        mahogany: { selector: '//label[@for="attribute_swatch_4275_4872"]', locateStrategy: 'xpath' },
        walnut: { selector: '//label[@for="attribute_swatch_4275_4870"]', locateStrategy: 'xpath' },
        //Desk Size
        fortytwobythirty: { selector: '//label[@for="attribute_rectangle__4276_4654"]', locateStrategy: 'xpath' },
        fortyeightbythirty: { selector: '//label[@for="attribute_rectangle__4276_4655"]', locateStrategy: 'xpath' },
        sixtybythirty: { selector: '//label[@for="attribute_rectangle__4276_4656"]', locateStrategy: 'xpath' },
        seventytwobythirty: { selector: '//label[@for="attribute_rectangle__4276_4657"]', locateStrategy: 'xpath' },
        eightybythirty: { selector: '//label[@for="attribute_rectangle__4276_4658"]', locateStrategy: 'xpath' },
        //Frames
        blkFrame: { selector: '//label[@data-color="black"]', locateStrategy: 'xpath' },
        blkcFrame: { selector: '//label[@for="attribute_productlist_4278_4849"]', locateStrategy: 'xpath' },
        blkcommcFrame: { selector: '//label[@for="attribute_productlist_4278_4853"]', locateStrategy: 'xpath' },
        blktFrame: { selector: '//label[@for="attribute_productlist_4278_7057"]', locateStrategy: 'xpath' },
        blkcommTFrame: { selector: '//label[@for="attribute_productlist_4278_7061"]', locateStrategy: 'xpath' },
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
        UPL960: { selector: '//span[contains(text(), "UPL960")]', locateStrategy: 'xpath'},
        //mats
        walLamVer: {selector: '(//span[contains(text(), "Walnut - Laminate")])[2]', locateStrategy: 'xpath'},   
        whtBrdLamVer: {selector: '(//span[contains(text(), "Whiteboard - Laminate")])[2]', locateStrategy: 'xpath'},
        whtLamVer: {selector: '(//span[contains(text(), "White - Laminate")])[2]', locateStrategy: 'xpath'},
        blkLamVer: {selector: '(//span[contains(text(), "Black - Laminate")])[2]', locateStrategy: 'xpath'}, 
        ashGrayLamVer: {selector: '(//span[contains(text(), "Ash Gray - Laminate")])[2]', locateStrategy: 'xpath'},
        mapleLamVer: {selector: '(//span[contains(text(), "Maple - Laminate")])[2]', locateStrategy: 'xpath'},
        cherryLamVer: {selector: '(//span[contains(text(), "Cherry - Laminate")])[2]', locateStrategy: 'xpath'},
        carbBambooVer: {selector: '(//span[contains(text(), "Carbonized - Bamboo")])[2]', locateStrategy: 'xpath'},
        carbErgoBambooVer: {selector: '(//span[contains(text(), "Carbonized - Ergo Edge Curved - Bamboo")])[2]', locateStrategy: 'xpath'},
        blkErgoVer: {selector: '(//span[contains(text(), "Black - Ergo Edge Curved - Eco")])[2]', locateStrategy: 'xpath'},
        whtErgoVer: {selector: '(//span[contains(text(), "White Eco Ergo-Edge Curve")])[2]', locateStrategy: 'xpath'},
        natrubberWoodVer: {selector: '(//span[contains(text(), "Natural - Rubberwood - Solid Wood")])[2]', locateStrategy: 'xpath'},
        drkBrnRubberVer: {selector: '(//span[contains(text(), "Rubberwood Solid Wood - Dark Brown")])[2]', locateStrategy: 'xpath'},
        recFirVer: {selector: '(//span[contains(text(), "Reclaimed Fir - Solid Wood")])[2]', locateStrategy: 'xpath'},
        acaciaVer: {selector: '(//span[contains(text(), "Acacia - Solid Wood")])[2]', locateStrategy: 'xpath'},
        pheasantVer: {selector: '(//span[contains(text(), "Pheasantwood Solid Wood")])[2]', locateStrategy: 'xpath'},
        ashVer: {selector: '(//span[contains(text(), "Ash - Solid Wood")])[2]', locateStrategy: 'xpath'},
        mahoganyVer: {selector: '(//span[contains(text(), "African Mahogany - Solid Wood")])[2]', locateStrategy: 'xpath'},
        walnutVer: {selector: '(//span[contains(text(), "Walnut - Solid Wood")])[2]', locateStrategy: 'xpath'},
        //sizes
        fortytwobythirtyVer: {selector: `(//span[contains(text(), '42" x 30"')])[2]`, locateStrategy: 'xpath'},
        fortyeightbythirtyVer: {selector: `(//span[contains(text(), '48" x 30"')])[2]`, locateStrategy: 'xpath'},
        sixtybythirtyVer: {selector: `(//span[contains(text(), '60" x 30"')])[2]`, locateStrategy: 'xpath'},
        seventytwobythirtyVer: {selector: `(//span[contains(text(), '72" x 30"')])[2]`, locateStrategy: 'xpath'},
        eightybythirtyVer: {selector: `(//span[contains(text(), '80" x 30"')])[2]`, locateStrategy: 'xpath'},
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