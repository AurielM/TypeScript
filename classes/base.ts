import { Page, Browser} from 'playwright';

export class Base {
    public page: Page;
    private browser: Browser;

    constructor(page: Page) {
        this.page = page
    }
   
    public async setup() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    public async close() {
        await  this.browser.close();
    }
}