import { test, expect } from '@playwright/test';
import { LoginPage } from '../classes/loginPage';
import { LandingPage } from '../classes/landingPage';
import { ShoppingCartPage } from '../classes/shoppingCartPage';
import { InventoryItemPage } from '../classes/inventoryItemPage';
import { CheckoutInformationPage } from '../classes/checkoutInformationPage';
import { CheckoutPaymentPage } from '../classes/checkoutPaymentPage';
import { PaymentConfirmationPage } from '../classes/paymentConfirmationPage';

test.beforeEach(async ({ page }) => {
  // Login using standard credentials and arrive at LandingPage
  const loginPage = new LoginPage(page);
  const landingPage = new LandingPage(page);
  
  await page.goto('https://www.saucedemo.com/');
  await loginPage.LoginUser(0)
  await expect(landingPage.textLogo).toBeVisible()
});

test.describe('Pages contain all expected elements', () => {  
  test('Landing/Inventory page should contain all elements', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    // verify header, filter and menu
    expect(landingPage.textLogo).toBeVisible()
    expect(landingPage.textLogo).toHaveText('Swag Labs')
    expect(landingPage.textPageTitle).toHaveText('Products')
    expect(landingPage.buttonBurgerMenu).toBeEnabled()
    expect(landingPage.buttonFilter).toBeEnabled()

    // verify unique page contents
    expect(landingPage.buttonShoppingCart).toBeEnabled()
    expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
    expect(landingPage.buttonInventoryItemName).toHaveCount(6)
    expect(landingPage.textInventoryItemPrice).toHaveCount(6)
    expect(landingPage.textInventoryItemPrice).toHaveText('Add to cart')
    expect(landingPage.textInventoryItemDescription).toHaveCount(6)
    expect(landingPage.buttonAddToCart).toHaveCount(6)
    expect(landingPage.buttonRemoveFromCart).toBeHidden()

    // verify footer contents
    expect(landingPage.buttonTwitterIcon).toBeVisible()
    expect(landingPage.buttonFacebookIcon).toBeVisible()
    expect(landingPage.buttonLinkedInIcon).toBeVisible()
    expect(landingPage.textCopywright).toBeVisible()
    expect(landingPage.textCopywright).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
  });

  test('Shopping cart page should contain all elements', async ({ page }) => {
    const shoppingCartPage = new ShoppingCartPage(page);
    await page.goto('https://www.saucedemo.com/cart.html')

    // verify header, filter and menu
    expect(shoppingCartPage.textLogo).toBeVisible()
    expect(shoppingCartPage.textLogo).toHaveText('Swag Labs')
    expect(shoppingCartPage.textPageTitle).toHaveText('Your Cart')
    expect(shoppingCartPage.buttonBurgerMenu).toBeEnabled()
    expect(shoppingCartPage.buttonFilter).toBeHidden()

    // verify unique page contents
    expect(shoppingCartPage.buttonShoppingCart).toBeEnabled()
    expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
    expect(shoppingCartPage.buttonInventoryItemTitle).toBeVisible()
    expect(shoppingCartPage.textInventoryItemPrice).toBeVisible()
    expect(shoppingCartPage.textInventoryItemDescription).toBeVisible()
    expect(shoppingCartPage.buttonContinueShopping).toBeEnabled()
    expect(shoppingCartPage.buttonCheckout).toBeEnabled()

    // verify footer contents
    expect(shoppingCartPage.buttonTwitterIcon).toBeVisible()
    expect(shoppingCartPage.buttonFacebookIcon).toBeVisible()
    expect(shoppingCartPage.buttonLinkedInIcon).toBeVisible()
    expect(shoppingCartPage.textCopywright).toBeVisible()
    expect(shoppingCartPage.textCopywright).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });

  test('Checkout information page should contain all elements', async ({ page }) => {
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await page.goto('https://www.saucedemo.com/checkout-step-one.html')
    
    // verify header, filter and menu
    expect(checkoutInformationPage.textLogo).toBeVisible()
    expect(checkoutInformationPage.textLogo).toHaveText('Swag Labs')
    expect(checkoutInformationPage.textPageTitle).toHaveText('Checkout: Your Information')
    expect(checkoutInformationPage.buttonBurgerMenu).toBeEnabled()
    expect(checkoutInformationPage.buttonFilter).toBeHidden()

    // verify unique page contents
    expect(checkoutInformationPage.textboxFirstName).toBeEnabled()
    expect(checkoutInformationPage.textboxLastName).toBeEnabled()
    expect(checkoutInformationPage.textboxPostCode).toBeEnabled()
    expect(checkoutInformationPage.buttonCancel).toBeEnabled()
    expect(checkoutInformationPage.buttonContinue).toBeEnabled()
    expect(checkoutInformationPage.errorMessage).toBeHidden()
    
    // verify footer contents
    expect(checkoutInformationPage.buttonTwitterIcon).toBeVisible()
    expect(checkoutInformationPage.buttonFacebookIcon).toBeVisible()
    expect(checkoutInformationPage.buttonLinkedInIcon).toBeVisible()
    expect(checkoutInformationPage.textCopywright).toBeVisible()
    expect(checkoutInformationPage.textCopywright).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });   

  test('Checkout payment page should contain all elements', async ({ page }) => {
    const checkoutPaymentPage = new CheckoutPaymentPage(page);
    await page.goto('https://www.saucedemo.com/checkout-step-two.html')
    
    // verify header, filter and menu
    expect(checkoutPaymentPage.textLogo).toBeVisible()
    expect(checkoutPaymentPage.textLogo).toHaveText('Swag Labs')
    expect(checkoutPaymentPage.textPageTitle).toHaveText('Products')
    expect(checkoutPaymentPage.buttonBurgerMenu).toBeEnabled()
    expect(checkoutPaymentPage.buttonFilter).toBeEnabled()

    // verify unique page contents

    expect(checkoutPaymentPage.textItemCost).toBeVisible()
    expect(checkoutPaymentPage.textItemTax).toBeVisible()
    expect(checkoutPaymentPage.textTotalPayment).toBeVisible()
    expect(checkoutPaymentPage.buttonCancel).toBeEnabled()
    expect(checkoutPaymentPage.buttonFinish).toBeEnabled()
    // other buttons found in base class, e.g. burger menu, shopping total icon, logo
    // verify footer contents
    expect(checkoutPaymentPage.buttonTwitterIcon).toBeVisible()
    expect(checkoutPaymentPage.buttonFacebookIcon).toBeVisible()
    expect(checkoutPaymentPage.buttonLinkedInIcon).toBeVisible()
    expect(checkoutPaymentPage.textCopywright).toBeVisible()
    expect(checkoutPaymentPage.textCopywright).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });

  test('Payment confirmation page should contain all elements', async ({ page }) => {
    const paymentConfirmationPage = new PaymentConfirmationPage(page);
    await page.goto('https://www.saucedemo.com/checkout-complete.html')
    
    // verify header, filter and menu
    expect(paymentConfirmationPage.textLogo).toBeVisible()
    expect(paymentConfirmationPage.textLogo).toHaveText('Swag Labs')
    expect(paymentConfirmationPage.textPageTitle).toHaveText('Products')
    expect(paymentConfirmationPage.buttonBurgerMenu).toBeEnabled()
    expect(paymentConfirmationPage.buttonFilter).toBeEnabled()

    // verify unique page contents

    expect(paymentConfirmationPage.imgTickForOrderComplete).toBeVisible()
    expect(paymentConfirmationPage.textThanksForYourOrder).toBeVisible()
    expect(paymentConfirmationPage.textOrderDispatched).toBeVisible()
    expect(paymentConfirmationPage.buttonBackHome).toBeEnabled()
    // other buttons found in base class, e.g. burger menu, shopping total icon, logo
    // verify footer contents
    expect(paymentConfirmationPage.buttonTwitterIcon).toBeVisible()
    expect(paymentConfirmationPage.buttonFacebookIcon).toBeVisible()
    expect(paymentConfirmationPage.buttonLinkedInIcon).toBeVisible()
    expect(paymentConfirmationPage.textCopywright).toBeVisible()
    expect(paymentConfirmationPage.textCopywright).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });
  });

test.describe('Adding items to shopping cart', () => {
  test('Adding item should update shoppping cart total icon', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const inventoryItemPage = new InventoryItemPage(page);

    // Creating inventory item variables for later comparison
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
    expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
    await inventoryItemPage.buttonAddToCart.click()

    // Verify button changes when adding/removing item from shopping cart
    expect(inventoryItemPage.buttonAddToCart).toBeHidden()
    expect(inventoryItemPage.buttonRemoveFromCart).toBeEnabled()
    expect(shoppingCartPage.counterShoppingCartTotal).toHaveText("1")

    await inventoryItemPage.buttonRemoveFromCart.click()

    expect(inventoryItemPage.buttonAddToCart).toBeEnabled
    expect(inventoryItemPage.buttonRemoveFromCart).toBeHidden()
    expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()

    await inventoryItemPage.buttonAddToCart.click()

    expect(inventoryItemPage.buttonAddToCart).toBeHidden()
    expect(inventoryItemPage.buttonRemoveFromCart).toBeEnabled()
    expect(shoppingCartPage.counterShoppingCartTotal).toHaveText("1")

    // Verify new item in shopping cart
    expect(shoppingCartPage.buttonInventoryItemTitle).toHaveText(first_item)
    expect(shoppingCartPage.textInventoryItemDescription).toHaveText(first_description)
    expect(shoppingCartPage.textInventoryItemPrice).toHaveText(first_price)
    expect(inventoryItemPage.buttonAddToCart).toBeHidden()
    expect(shoppingCartPage.buttonRemoveFromCartBackpack).toBeEnabled()
    });
});