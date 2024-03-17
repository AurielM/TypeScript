import { Page, Locator} from 'playwright';
import { Base } from './base';

export class ShoppingCartOverviewPage extends Base {
    public textTitleYourCart: Locator;
    public buttonShoppingCart: Locator;
    public counterShoppingCartTotal: Locator;
    public buttonRemoveFromCartBackpack: Locator;
    public wrapperInventoryItem: Locator;
    public buttonInventoryItemTitle: Locator;
    public textInventoryItemPrice: Locator;
    public textInventoryItemDescription: Locator;
    public buttonContinueShopping: Locator;
    public buttonCheckout: Locator;


    constructor(page: Page){
        super(page)
        this.textTitleYourCart = page.locator('span.title');
        this.buttonShoppingCart = page.locator('a.shopping_cart_link');
        this.counterShoppingCartTotal = page.locator('span.shopping_cart_badge');
        this.buttonRemoveFromCartBackpack = page.locator('button#remove-sauce-labs-backpack');
        this.wrapperInventoryItem = page.locator('div.cart_item');
        this.buttonInventoryItemTitle = this.wrapperInventoryItem.locator('div.inventory_item_name'); 
        this.textInventoryItemPrice = this.wrapperInventoryItem.locator('div.inventory_item_price');
        this.textInventoryItemDescription = this.wrapperInventoryItem.locator('div.inventory_item_desc');
        this.buttonContinueShopping = page.locator('button#continue-shopping');
        this.buttonCheckout = page.locator('button#checkout');
    }
}



