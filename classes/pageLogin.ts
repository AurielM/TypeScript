import { Page, Locator} from 'playwright';
import { Base } from './base';

export class PageLogin extends Base {
    public password: string;
    public usernames: string[];
    public buttonLogin: Locator;
    public textboxUsername: Locator;
    public textboxPassword: Locator;
    public errorMessage: Locator;


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
        this.errorMessage = page.locator('div.error-message-container.error')
    }

    public async LoginUser(n: number) {
        await this.textboxUsername.fill(this.usernames[n])
        await this.textboxPassword.fill(this.password)
        console.log(`Logging in with credentials\nUsername:    ${this.usernames[n]}\nPassword:    ${this.password}.`)
        await this.buttonLogin.click()
    }      
}



