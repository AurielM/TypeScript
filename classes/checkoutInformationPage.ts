import { Page, Locator} from 'playwright';
import { Base } from './base';

export class CheckoutInformationPage extends Base {
    public textboxFirstName: Locator;
    public textboxLastName: Locator;
    public textboxPostCode: Locator;
    public errorMessage: Locator;
    public buttonCancel: Locator;
    public buttonContinue: Locator;

    constructor(page: Page){
        super(page)
        this.textboxFirstName = page.locator('input#first-name');
        this.textboxLastName = page.locator('input#last-name');
        this.textboxPostCode = page.locator('input#postal-code');
        this.errorMessage = page.locator('div.error-message-container.error');
        this.buttonCancel = page.locator('button.btn.btn_secondary.back.btn_medium.cart_cancel_link');
        this.buttonContinue = page.locator('input.submit-button.btn.btn_primary.cart_button.btn_action');
    }
}


