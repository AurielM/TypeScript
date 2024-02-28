import { test, expect } from '@playwright/test';
import { PageLogin } from '../classes/pageLogin';
import { LandingPage } from '../classes/landingPage'

test('Log in using credentials', async ({ page }) => {
    // Create new instances of PageLogin and LandingPage
    const pageLogin = new PageLogin(page);
    const landingPage = new LandingPage(page);
    // Load login page
    await page.goto('https://www.saucedemo.com/')
    // Use 1st credentials to login
    await pageLogin.LoginUser(0)
    // Checking landingPage for Logo
    await expect(landingPage.textLogo).toBeVisible()
  });