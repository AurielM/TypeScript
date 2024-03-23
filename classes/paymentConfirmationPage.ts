import { Page, Locator} from 'playwright';
import { Base } from './base';

export class PaymentConfirmationPage extends Base {
    public imgTickForOrderComplete: Locator;
    public textThanksForYourOrder: Locator;
    public textOrderDispatched: Locator;
    public buttonBackHome: Locator;

    constructor(page: Page){
        super(page)
        this.imgTickForOrderComplete = page.locator('img.pony_express');
        this.textThanksForYourOrder = page.locator('h2.complete-header');
        this.textOrderDispatched = page.locator('div.complete-text');
        this.buttonBackHome = page.locator('button#back-to-products');
    }
}


