import { Page, Locator} from 'playwright';
import { Base } from './base';

export class LandingPage extends Base {
    public buttonShoppingCart: Locator;
    public wrapperInventoryList: Locator;
    public buttonInventoryItemName: Locator;
    public imageInventoryItem: Locator;
    public textInventoryItemPrice: Locator;
    public textInventoryItemDescription: Locator;
    public buttonAddToCart: Locator;
    public buttonRemoveFromCart: Locator;


    constructor(page: Page){
        super(page)
        this.buttonShoppingCart = page.locator('a.shopping_cart_link');
        this.wrapperInventoryList = page.locator('div#inventory_container');
        this.buttonInventoryItemName = this.wrapperInventoryList.locator('div.inventory_item_name');
        this.imageInventoryItem = this.wrapperInventoryList.locator('img.inventory_item_img');
        this.textInventoryItemPrice = this.wrapperInventoryList.locator('div.inventory_item_price');
        this.textInventoryItemDescription = this.wrapperInventoryList.locator('div.inventory_item_desc');
        this.buttonAddToCart = page.locator('button.button.btn.btn_primary.btn_small.btn_inventory');
        this.buttonRemoveFromCart = page.locator('button.btn.btn_secondary.btn_small.btn_inventory');
    }
}



