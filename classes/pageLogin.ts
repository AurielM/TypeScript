import { Page, Browser, chromium, Locator } from 'playwright';
import { Base } from './base';

export class PageLogin extends Base {
    public password: string;
    public usernames: string[];
    public buttonLogin: Locator;
    public textboxUsername: Locator;
    public textboxPassword: Locator;


    constructor(page: Page){
        super(page)
        this.password = 'secret_sauce';
        this.usernames = [
            'standard_user',
            'locked_out_user',
            'problem_user',
            'performance_glitch_user',
            'error_user',
            'visual_user'
        ];
        this.buttonLogin = page.locator('input.submit-button');
        this.textboxUsername = page.locator('#user-name');
        this.textboxPassword = page.locator('#password');
    }

    public async LoginUser(n: number) {
        await this.textboxUsername.fill(this.usernames[n])
        await this.textboxPassword.fill(this.password)
        await this.buttonLogin.click()
    }
        
    
}



