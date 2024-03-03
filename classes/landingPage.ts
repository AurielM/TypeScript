import { Page, Locator} from 'playwright';
import { Base } from './base';

export class LandingPage extends Base {
    public textLogo: Locator;
    public buttonShoppingCart: Locator;
    public buttonBurgerMenu: Locator;
    public buttonFilter: Locator;
    public wrapperInventoryList: Locator;
    public buttonInventoryItemName: Locator;
    public imageInventoryItem: Locator;
    public textInventoryItemPrice: Locator;
    public textInventoryItemDescription: Locator;
    public buttonAddToCartBackpack: Locator;
    public buttonRemoveFromCartBackpack: Locator;


    constructor(page: Page){
        super(page)
        this.textLogo = page.locator('div.app_logo');
        this.buttonShoppingCart = page.locator('a.shopping_cart_link');
        this.buttonBurgerMenu = page.locator('#react-burger-menu-btn');
        this.buttonFilter = page.locator('select.product_sort_container');
        this.wrapperInventoryList = page.locator('div#inventory_container');
        this.buttonInventoryItemName = this.wrapperInventoryList.locator('div.inventory_item_name')
        this.imageInventoryItem = this.wrapperInventoryList.locator('img.inventory_item_img');
        this.textInventoryItemPrice = this.wrapperInventoryList.locator('div.inventory_item_price');
        this.textInventoryItemDescription = this.wrapperInventoryList.locator('div.inventory_item_desc');
        this.buttonAddToCartBackpack = page.locator('button#add-to-cart-sauce-labs-backpack');
        this.buttonRemoveFromCartBackpack = page.locator('button#remove-sauce-labs-backpack');
    }
}



