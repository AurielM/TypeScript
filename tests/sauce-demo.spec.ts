import { test, expect } from '@playwright/test';
import { LoginPage } from '../classes/loginPage';
import { LandingPage } from '../classes/landingPage';
import { ShoppingCartOverviewPage } from '../classes/shoppingCartOverviewPage';

test.beforeEach(async ({ page }) => {
  // Login using standard credentials and arrive at LandingPage
  const loginPage = new LoginPage(page);
  const landingPage = new LandingPage(page);
  
  await page.goto('https://www.saucedemo.com/');
  await loginPage.LoginUser(0)
  await expect(landingPage.textLogo).toBeVisible()
});

test.describe('Shopping cart', () => {
  test('Adding an item to shopping cart from landing page', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const shoppingCartOverviewPage = new ShoppingCartOverviewPage(page);

    await expect(shoppingCartOverviewPage.counterShoppingCartTotal).toBeHidden()
    await landingPage.buttonAddToCartBackpack.click()
    await expect(shoppingCartOverviewPage.counterShoppingCartTotal).toContainText("1")
    // add in section that opens shoping cart page and checks items
    // check button to change from add to remove

    });

  test('Add item to shopping cart from item page', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const shoppingCartOverviewPage = new ShoppingCartOverviewPage(page);
    
    await expect(shoppingCartOverviewPage.counterShoppingCartTotal).toBeHidden()
    await landingPage.buttonInventoryItemName.click()
    // check button 'add item' is present and 'remove' is not. 
    
    //check countershoppingcarttotal is correct

    //click said button and ensure buttons toggle ('remove' is present and 'add' is now hidden)

    //check countershoppingcarttotal is correct

    // add in section that opens shoping cart page and checks items

    })
})