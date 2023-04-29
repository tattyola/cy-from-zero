import NavigationPage from "../pages/navigation.page";
import FormLayoutsPage from "../pages/formLayouts.page";
import DatepickerPage from "../pages/datepicker.page";
import SmartTablePage from "../pages/smartTable.page";

describe('Tets with Page Object', function () {

    beforeEach('open application', function () {
        cy.openHomePage()
    })

    it('verify navigations across the pages ', function () {
        NavigationPage.formLayoutsPage()
        NavigationPage.datepickerPage()
        NavigationPage.toasterPage()
        NavigationPage.smartTablePage()
        NavigationPage.toolTipPage()
    });

    it('should submit Inline and Basic Form and select tomorrow date in calendar', function () {
        NavigationPage.formLayoutsPage()
        FormLayoutsPage.submitInlineFormWithNameAndEmail('Tatty', 'tatty@test.com')
        FormLayoutsPage.submitBasicFormWithNameAndEmail('tatty@test.com', 'test123!')
        NavigationPage.datepickerPage()
        DatepickerPage.selectCommonDatePickerDateFromToday(1)
        DatepickerPage.selectDatepickerWithRangeFromToday(7, 17)
        NavigationPage.smartTablePage()
        SmartTablePage.addNewRecordWithFirstAndLastName('Tatty', 'Ola')
        SmartTablePage.updateAgeByFirstName('Tatty', 18)
        SmartTablePage.deleteRowByIndex(2)
    });

});
