import { Page, Locator} from 'playwright';
import { Base } from './base';

export class ShoppingCartOverviewPage extends Base {
    public textTitleYourCart: Locator;
    public buttonShoppingCart: Locator;
    public counterShoppingCartTotal: Locator;
    public buttonRemoveFromCartBackpack: Locator;


    constructor(page: Page){
        super(page)
        this.textTitleYourCart = page.locator('span.title');
        this.buttonShoppingCart = page.locator('a.shopping_cart_link');
        this.counterShoppingCartTotal = page.locator('span.shopping_cart_badge');
        this.buttonRemoveFromCartBackpack = page.locator('button#remove-sauce-labs-backpack');
    }
}



