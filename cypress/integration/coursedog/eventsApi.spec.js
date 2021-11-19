describe('Coursedog Events API', () => {
    [
        {startDay: '2021-11-20', endDay: '2021-11-20', meetings: 1},
        {startDay: '2021-09-02', endDay: '2021-09-02', meetings: 0},
        {startDay: '2021-09-02', endDay: '2021-09-09', meetings: 2}
    ].forEach(scenario => {
        it(`tests /meetings endpoit, checks number of events returned from API when start day is ${scenario.startDay} and end day is ${scenario.endDay}`, () => {
            let url = `${Cypress.env('API_URL')}/api/v1/em/demoschool_ezra/meetings?includeRelatedData=true&skipSetupMeetings=true&skipTeardownMeetings=true&skipHiddenPublicMeetings=true&skipPrivateMeetings=true&excludeInvalidDates=true&excludeInvalidTimes=true&startDate=${scenario.startDay}&endDate=${scenario.endDay}&groupByEventAndDate=true&orderBy=startDate,startTime'`
            cy.request(url).then((response) => {
                expect(response).property('status').to.equal(200)
                expect(Object.keys(response.body.meetings).length).to.equal(scenario.meetings)         
            })
        })       
    })
})