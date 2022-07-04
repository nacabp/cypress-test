describe('Smart apartment data testing - staging (Desktop view)', () => {

    before(function(){
      cy.visit('https://staging.smartapartmentdata.com/signin')
      cy.get('[placeholder="Enter your email"]').type('hienjiealavar01@gmail.com')     
      cy.get('[type="password"]').type('smart1234')
      cy.get('.auth-form-btn').click()
    })


    beforeEach(()=>{
        cy.visit('https://staging.smartapartmentdata.com/search')
    })

    it('Search by Name Properties Apartment Communities', () =>{
        cy.get(".widget__wrapper.d-flex.flex-column.justify-content-between").eq(0).click()
        cy.contains('Search by Name').click()
        cy.get('#mat-input-2').type('hil').type('{enter}')
        cy.get('.box__line-1.app-ellipsis').contains('Hillside Village').click()
        
    })

    context('Inspect the Hillside Village Properties', () =>{
        beforeEach(() =>{
            cy.get(".widget__wrapper.d-flex.flex-column.justify-content-between").eq(0).click()
            cy.contains('Search by Name').click()
            cy.get('#mat-input-2').type('hil').type('{enter}')
            cy.get('.box__line-1.app-ellipsis').contains('Hillside Village').click()
        })

        it('Check the data on Hillside Village', () =>{
            cy.contains('Listing 72298').should('exist')
            cy.get('.mat-icon.notranslate.copy.mat-icon-no-color.ng-star-inserted').click()
            cy.contains('Listing number copied to your clipboard').should('exist')
            cy.get('[icon="return"]').click()
            cy.contains('Hillside Village').should('exist')
            cy.contains('306 Vine Euless, TX 76040').should('exist')
            cy.contains('Built 1979. Renovated 2003 • 100 Units').should('exist')
            cy.contains('(817) 283 - 3373').should('exist')
            cy.contains('yajaria@hillsideuless.com').should('exist')
        })

        it('Check the buttons and links on Hillside Village', ()=>{
            cy.get('[icon="map"]').click()
            cy.get('.mapboxgl-canvas').should('be.visible')
            cy.wait(5000)
            cy.get('[icon="chevron"]').eq(0).click()
            cy.contains('Follow').click({ force: true })
            cy.contains('Following').should('be.visible')
            cy.contains('Following').click()
            cy.get('.box__header_image_default').click({ force: true })
            cy.get('#id-0').should('be.visible')
            cy.get('[data-mat-icon-name="less"]').click()
            cy.contains('Unselected').click()
            cy.contains('Selected').should('be.visible')
            cy.get('.mat-focus-indicator.ng-tns-c1080-4.mat-flat-button.mat-button-base.ng-trigger.ng-trigger-toggleSelection.active').contains('1').should('exist')
            cy.contains('Selected').click()
            cy.contains('Management Company').click({ force: true })
            cy.get('.mapboxgl-canvas').should('be.visible')
            cy.wait(5000)
            cy.get('[e2e-id="a8a06082-5cec-49f2-b188-8e6fe8ac8565"]').click()
        })
    })
  })


  describe('Smart apartment data testing - staging (Mobile view)', () => {

    before(function(){
      cy.viewport('iphone-3')
      cy.visit('https://staging.smartapartmentdata.com/signin')
      cy.get('[placeholder="Enter your email"]').type('hienjiealavar01@gmail.com')     
      cy.get('[type="password"]').type('smart1234')
      cy.get('.auth-form-btn').click()
    })


    beforeEach(()=>{
        cy.viewport('iphone-3')
        cy.visit('https://staging.smartapartmentdata.com/search')
    })

    it('Search by Name Properties Apartment Communities (Mobile view)', () =>{
        cy.get(".widget__wrapper.d-flex.flex-column.justify-content-between").eq(0).click()
        cy.contains('Search by Name').click()
        cy.get('#mat-input-0').type('hil').type('{enter}')
        cy.contains('843 Properties').click()
        cy.get('.box__line-1.app-ellipsis').contains('Hillside Village').click({ force: true })
        
    })

    context('Inspect the Hillside Village Properties (Mobile view)', () =>{
        beforeEach(() =>{
            cy.get(".widget__wrapper.d-flex.flex-column.justify-content-between").eq(0).click()
            cy.contains('Search by Name').click()
            cy.get('#mat-input-0').type('hil').type('{enter}')
            cy.contains('843 Properties').click()
            cy.get('.box__line-1.app-ellipsis').contains('Hillside Village').click({ force: true })
        })

        it('Check the data on Hillside Village (Mobile view)', () =>{
            cy.contains('Listing 72298').should('exist')
            cy.get('.mat-icon.notranslate.copy.mat-icon-no-color.ng-star-inserted').click()
            cy.contains('Listing number copied to your clipboard').should('exist')
            cy.get('[icon="return"]').click()
            cy.contains('Hillside Village').should('exist')
            cy.contains('306 Vine Euless, TX 76040').should('exist')
            cy.contains('Built 1979. Renovated 2003 • 100 Units').should('exist')
            cy.contains('(817) 283 - 3373').should('exist')
            cy.contains('yajaria@hillsideuless.com').should('exist')
        })

        it('Check the buttons and links on Hillside Village (Mobile view)', ()=>{
            cy.get('[icon="map"]').click()
            cy.get('.mapboxgl-canvas').should('be.visible')
            cy.wait(5000)
            cy.get('[icon="chevron"]').eq(0).click()
            cy.contains('Follow').click({ force: true })
            cy.contains('Following').should('be.visible')
            cy.wait(4000)
            cy.contains('Following').click()
            cy.get('.box__header_image_default').click({ force: true })
            cy.get('#id-0').should('be.visible')
            cy.get('[data-mat-icon-name="less"]').click()
            cy.contains('Unselected').click()
            cy.contains('Selected').should('be.visible')
            cy.contains('Selected').click()
            cy.contains('Management Company').click({ force: true })
            cy.get('[icon="arrowLeftNew"]').click()
        })
    })
})