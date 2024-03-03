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
    public wrapperPageFooter: Locator;
    public buttonTwitterIcon: Locator;
    public buttonFacebookIcon: Locator;
    public buttonLinkedInIcon: Locator;
    public textCopywright: Locator;



    constructor(page: Page){
        super(page)
        this.textLogo = page.locator('div.app_logo');
        this.buttonShoppingCart = page.locator('a.shopping_cart_link');
        this.buttonBurgerMenu = page.locator('#react-burger-menu-btn');
        this.textInventoryItemName = page.locator('div.inventory_details_name.large_size')
        this.imageInventoryItem = page.locator('img.inventory_details_img');
        this.textInventoryItemPrice = page.locator('div.inventory_details_price')
        this.textInventoryItemDescription = page.locator('div.inventory_details_desc large_size')
        
        this.wrapperPageFooter = page.locator('footer.footer');
        this.buttonTwitterIcon = this.wrapperPageFooter.locator('li.social_twitter');
        this.buttonFacebookIcon = this.wrapperPageFooter.locator('li.social_facebook');
        this.buttonLinkedInIcon = this.wrapperPageFooter.locator('li.social_linkedin');
        this.textCopywright = this.wrapperPageFooter.locator('div.footer_copy');
    }
}



