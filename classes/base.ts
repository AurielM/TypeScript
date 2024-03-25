import { Page, Browser, Locator} from 'playwright';

export class Base {
    public page: Page;
    public url: string;
    private browser: Browser;
    public buttonBurgerMenu: Locator;
    public buttonFilter: Locator;
    public textLogo: Locator;
    public textPageTitle: Locator;
    public wrapperPageFooter: Locator;
    public buttonTwitterIcon: Locator;
    public buttonFacebookIcon: Locator;
    public buttonLinkedInIcon: Locator;
    public textCopywright: Locator;

    constructor(page: Page) {
        this.page = page
        this.url = 'https://www.saucedemo.com/';
        this.buttonBurgerMenu = page.locator('#react-burger-menu-btn');
        this.buttonFilter = page.locator('select.product_sort_container');
        this.textLogo = page.locator('div.app_logo');
        this.textPageTitle = page.locator('span.title');
        this.wrapperPageFooter = page.locator('footer.footer');
        this.buttonTwitterIcon = this.wrapperPageFooter.locator('li.social_twitter');
        this.buttonFacebookIcon = this.wrapperPageFooter.locator('li.social_facebook');
        this.buttonLinkedInIcon = this.wrapperPageFooter.locator('li.social_linkedin');
        this.textCopywright = this.wrapperPageFooter.locator('div.footer_copy');
    }
    
    public getBaseUrl() {
        return this.url;
    }
    public async close() {
        await  this.browser.close();
    }
}