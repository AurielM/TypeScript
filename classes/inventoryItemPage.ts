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
    public dropdownFilterSortBy: Locator;
    

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
        this.buttonAddToCart = page.locator('div[data-test="inventory-item"] button.btn.btn_primary.btn_small.btn_inventory');
        this.buttonRemoveFromCart = page.locator('div[data-test="inventory-item"] button.btn.btn_secondary.btn_small.btn_inventory');
        this.dropdownFilterSortBy = page.locator('select.product_sort_container')
        
    }
// create a method that uses the buttonFilterIcon (as below) and uses coordinates to click the filter icon
// this.buttonFilterIcon = page.locator('span.select_container'); 
    public async clickFilterIcon() {
        // const box = (await this.dropdownFilterSortBy.boundingBox())!;
        // await this.dropdownFilterSortBy.click(box.x + box.width / 2, box.y + box.height - 5);
        await this.dropdownFilterSortBy.click({position: {x: 1, y: 1}});
    }

// create a method that uses the buttonFilterIcon (as below) and uses coordinates to click the sortby dropdown arrow icon
// this.buttonSortByDropdownArrow = page.locator('span.select_container');

// reasoning - these two elements are actually pseudo-elements linked to ::before and ::after respectively

}
