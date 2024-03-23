import { Page, Locator} from 'playwright';
import { Base } from './base';

export class CheckoutPaymentPage extends Base {
    public : Locator;
    public wrapperPaymentSummary: Locator;
    public textItemCost: Locator;
    public textItemTax: Locator;
    public textTotalPayment: Locator;
    public buttonCancel: Locator;
    public buttonFinish: Locator;


    constructor(page: Page){
        super(page)
        this.wrapperPaymentSummary = page.locator('div.checkout_summary_container');
        this.textItemCost = this.wrapperPaymentSummary.locator('div.summary_subtotal_label');
        this.textItemTax = this.wrapperPaymentSummary.locator('div.summary_tax_label');
        this.textTotalPayment = this.wrapperPaymentSummary.locator('div.summary_info_label.summary_total_label');
        this.buttonCancel = page.locator('button.btn.btn_secondary.back.btn_medium.cart_cancel_link');
        this.buttonFinish = page.locator('button.btn.btn_action.btn_medium.cart_button');
    }
}


