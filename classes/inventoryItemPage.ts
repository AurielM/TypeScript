import { Page, Locator} from 'playwright';
import { Base } from './base';

export class InventoryItemPage extends Base {
    public textLogo: Locator;
    public buttonShoppingCart: Locator;
    public buttonBurgerMenu: Locator;
    public textInventoryItemName: Locator;
    public imageInventoryItem: Locator;
    public textInventoryItemPrice: Locator;
    public textInventoryItemDescription: Locator;
    public buttonAddToCart: Locator;
    public buttonRemoveFromCart: Locator;
    

    constructor(page: Page){
        super(page);
        this.url = this.url + 'inventory-item.html?id=';
        this.textLogo = page.locator('div.app_logo');
        this.buttonShoppingCart = page.locator('a.shopping_cart_link');
        this.buttonBurgerMenu = page.locator('#react-burger-menu-btn');
        this.textInventoryItemName = page.locator('div.inventory_details_name.large_size');
        this.imageInventoryItem = page.locator('img.inventory_details_img');
        this.textInventoryItemPrice = page.locator('div.inventory_details_price');
        this.textInventoryItemDescription = page.locator('div.inventory_details_desc.large_size');
        this.buttonAddToCart = page.locator('button.btn.btn_primary.btn_small.btn_inventory');
        this.buttonRemoveFromCart = page.locator('button.btn.btn_secondary.btn_small.btn_inventory');
    }
}



