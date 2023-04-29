class DatepickerPage {

    selectDayFromCurrent(day) {
        let date = new Date()
        date.setDate(date.getDate() + day)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleString('default', {month: 'short'})
        let dateAssert = `${futureMonth} ${futureDay}, ${date.getFullYear()}`
        cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttr => {
            if (!dateAttr.includes(futureMonth)) {
                cy.get('button [data-name="chevron-right"]').click()
                this.selectDayFromCurrent(day)
            } else {
                cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
            }
        })
        return dateAssert
    }
    selectCommonDatePickerDateFromToday(dayFromToday) {
        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click({force: true})
            let dateAssert = this.selectDayFromCurrent(dayFromToday)
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
            cy.wrap(input).should('have.value', dateAssert)
        })
    }

    selectDatepickerWithRangeFromToday(firstDay, secondName) {
        cy.contains('nb-card', 'Datepicker With Range').find('input').then(input => {
            cy.wrap(input).click({force: true})
            let dateAssertFirst = this.selectDayFromCurrent(firstDay)
            let dateAssertSecond = this.selectDayFromCurrent(secondName)
            const finalDate = `${dateAssertFirst} - ${dateAssertSecond}`
            cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
            cy.wrap(input).should('have.value', finalDate)
        })
    }
}

export default new DatepickerPage()
