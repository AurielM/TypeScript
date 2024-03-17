import { test, expect } from '@playwright/test';
import { LoginPage } from '../classes/loginPage';
import { LandingPage } from '../classes/landingPage';
import { ShoppingCartOverviewPage } from '../classes/shoppingCartOverviewPage';
import { InventoryItemPage } from '../classes/inventoryItemPage';

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
    const inventoryItemPage = new InventoryItemPage(page);
    
    // Verify landing page
    expect(landingPage.buttonBurgerMenu).toBeEnabled()
    expect(landingPage.buttonFilter).toBeEnabled()
    expect(landingPage.textLogo).toBeVisible()
    expect(landingPage.textLogo).toHaveText('Swag Labs')
    expect(shoppingCartOverviewPage.counterShoppingCartTotal).toBeHidden()
    expect(landingPage.buttonTwitterIcon).toBeVisible()
    expect(landingPage.buttonFacebookIcon).toBeVisible()
    expect(landingPage.buttonLinkedInIcon).toBeVisible()
    expect(landingPage.textCopywright).toBeVisible()
    expect(landingPage.textCopywright).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    
    // Creating variables comparison
    const first_item = await landingPage.buttonInventoryItemName.nth(0).textContent()
    const first_price = await landingPage.textInventoryItemPrice.nth(0).textContent()
    const first_description = await landingPage.textInventoryItemDescription.nth(0).textContent()

    // Navigate to intenvtory item page
    await landingPage.buttonInventoryItemName.nth(0).click()

    // Verifying expected item present
    expect(inventoryItemPage.textInventoryItemName).toHaveText(first_item)
    expect(inventoryItemPage.textInventoryItemPrice).toHaveText(first_price)
    expect(inventoryItemPage.textInventoryItemDescription).toHaveText(first_description)
    
    // Add item to shopping list 
    expect(shoppingCartOverviewPage.counterShoppingCartTotal).toBeHidden()
    await inventoryItemPage.buttonAddToCart.click()

    // Verify button changes when adding/removing item from shopping cart
    expect(inventoryItemPage.buttonAddToCart).toBeHidden()
    expect(inventoryItemPage.buttonRemoveFromCart).toBeEnabled()
    expect(shoppingCartOverviewPage.counterShoppingCartTotal).toHaveText("1")

    await inventoryItemPage.buttonRemoveFromCart.click()

    expect(inventoryItemPage.buttonAddToCart).toBeEnabled
    expect(inventoryItemPage.buttonRemoveFromCart).toBeHidden()
    expect(shoppingCartOverviewPage.counterShoppingCartTotal).toBeHidden()

    await inventoryItemPage.buttonAddToCart.click()

    expect(inventoryItemPage.buttonAddToCart).toBeHidden()
    expect(inventoryItemPage.buttonRemoveFromCart).toBeEnabled()
    expect(shoppingCartOverviewPage.counterShoppingCartTotal).toHaveText("1")

    // Verify shopping cart page
    await inventoryItemPage.buttonShoppingCart.click()
    expect(shoppingCartOverviewPage.counterShoppingCartTotal).toBeVisible()
    expect(shoppingCartOverviewPage.textTitleYourCart).toHaveText('Your Cart')
    expect(shoppingCartOverviewPage.buttonContinueShopping).toBeEnabled()
    expect(shoppingCartOverviewPage.buttonCheckout).toBeEnabled()

    // Verify new item in shopping cart
    expect(shoppingCartOverviewPage.buttonInventoryItemTitle).toHaveText(first_item)
    expect(shoppingCartOverviewPage.textInventoryItemDescription).toHaveText(first_description)
    expect(shoppingCartOverviewPage.textInventoryItemPrice).toHaveText(first_price)
    expect(inventoryItemPage.buttonAddToCart).toBeHidden()
    expect(shoppingCartOverviewPage.buttonRemoveFromCartBackpack).toBeEnabled()


    })
})