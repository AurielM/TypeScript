import { test, expect } from '@playwright/test';
import { PageLogin } from '../classes/pageLogin';
import { LandingPage } from '../classes/landingPage'

test('Log in using credentials', async ({ page }) => {
    // Load login page (via inheritance of base class through PageLogin)
    const pageLogin = new PageLogin(page);
    const landingPage = new LandingPage(page);

    // Use 1st credentials to login
    await pageLogin.LoginUser(0)
    //checking landingPage for Logo
    await expect(landingPage.textLogo).toBeVisible()
  });