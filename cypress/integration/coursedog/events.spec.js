describe('Coursedog Events page', () => {
    beforeEach (() => {
        cy.visit('/')
    })
    
    {[
        {day: '20'},
        {day: '23'},
        {day: '1'},
        {day: '18'}
    ].forEach(scenario => {
        it(`selects a specific date from the calendar. Day ${scenario.day}`, ()=> {
            cy.get('.vc-grid-container.vc-weeks').contains(scenario.day).click()
            
            cy.get('#main-content h1').should('include.text', scenario.day)

            cy.get('section').then(($section) => {
                if ($section.find('[role="group"]').lenght > 0) {
                    $section.find('[role="group"] p').should('include.text', scenario.day)
                }
            })
        })          
    })}

    [
        {searchText: 'Tokyo'},
        {searchText: 'Test'}
    ].forEach(scenario => {
        it(`searches for event ${scenario.searchText}`, () => {
            cy.get('.search__input ').type(scenario.searchText + '{enter}')

            cy.get('#search-results-header').should('include.text', `Search results for "${scenario.searchText}"`)
            cy.get('#search-results').find('.card-content').should('include.text', scenario.searchText)
        })
    })

    it('shows todays events', ()=> {
        cy.get('[href="/today"]').click()

        cy.get('#main-content h1').should('include.text', 'Today’s events')
    })

    {[
        {filterBy: 'Model UN'},
        {filterBy: 'Anderson Collection at Stanford University'}
    ].forEach(scenario  => {
        describe(`filter events by organization ${scenario.filterBy}`, () => {
            it('filters using navigation', () => {
                cy.get('nav #orgSelect').select(scenario.filterBy)
    
                cy.get('[data-icon="spinner"]').should('not.be.visible')
                cy.get('.card-content').each(($card) => {
                    cy.wrap($card).find('a[href*="organization"]').should('include.text', scenario.filterBy)
                })
            })
            it('filters using search page', () => {
                cy.get('[data-icon="search"]').click()
                cy.get('#main-content #orgSelect').select(scenario.filterBy)
    
                cy.get('[data-icon="spinner"]').should('not.be.visible')
                cy.get('.card-content').each(($card) => {
                    cy.wrap($card).find('a[href*="organization"]').should('include.text', scenario.filterBy)
                })
            })
        })
    })
    }

    it('checks content of event card', () => {
        cy.get('.card-content').first().click()

        cy.get('article')
            .should('include.text', 'Add to calendar')
            .should('include.text', 'Add to Google Calendar')
            .should('include.text', 'Event Type')
            .should('include.text', 'Event Type')
            .should('include.text', 'Event Description')
    })
})
