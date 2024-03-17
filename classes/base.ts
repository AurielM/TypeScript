import { Page, Browser} from 'playwright';

export class Base {
    public page: Page;
    private browser: Browser;
    public wrapperPageFooter: Locator;
    public buttonTwitterIcon: Locator;
    public buttonFacebookIcon: Locator;
    public buttonLinkedInIcon: Locator;
    public textCopywright: Locator;

    constructor(page: Page) {
        this.page = page
        this.wrapperPageFooter = page.locator('footer.footer');
        this.buttonTwitterIcon = this.wrapperPageFooter.locator('li.social_twitter');
        this.buttonFacebookIcon = this.wrapperPageFooter.locator('li.social_facebook');
        this.buttonLinkedInIcon = this.wrapperPageFooter.locator('li.social_linkedin');
        this.textCopywright = this.wrapperPageFooter.locator('div.footer_copy');
    }

    public async close() {
        await  this.browser.close();
    }
}