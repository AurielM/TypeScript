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
  
  await page.goto(loginPage.url);
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
    await page.goto(shoppingCartPage.url);

    // verify header, filter and menu
    expect(shoppingCartPage.textLogo).toBeVisible()
    expect(shoppingCartPage.textLogo).toHaveText('Swag Labs')
    expect(shoppingCartPage.textPageTitle).toHaveText('Your Cart')
    expect(shoppingCartPage.buttonBurgerMenu).toBeEnabled()
    expect(shoppingCartPage.buttonFilter).toBeHidden()

    // verify unique page contents
    expect(shoppingCartPage.buttonShoppingCart).toBeEnabled()
    expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
    expect(shoppingCartPage.buttonInventoryItemTitle).toBeHidden()
    expect(shoppingCartPage.textInventoryItemPrice).toBeHidden()
    expect(shoppingCartPage.textInventoryItemDescription).toBeHidden()
    expect(shoppingCartPage.buttonContinueShopping).toBeVisible()
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
    console.log(checkoutInformationPage.url)
    await page.goto(checkoutInformationPage.url);
    
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
    await page.goto(checkoutPaymentPage.url)
    
    // verify header, filter and menu
    expect(checkoutPaymentPage.textLogo).toBeVisible()
    expect(checkoutPaymentPage.textLogo).toHaveText('Swag Labs')
    expect(checkoutPaymentPage.textPageTitle).toHaveText('Checkout: Overview')
    expect(checkoutPaymentPage.buttonBurgerMenu).toBeEnabled()

    // verify unique page contents
    expect(checkoutPaymentPage.textItemCost).toBeVisible()
    expect(checkoutPaymentPage.textItemTax).toBeVisible()
    expect(checkoutPaymentPage.textTotalPayment).toBeVisible()
    expect(checkoutPaymentPage.buttonCancel).toBeEnabled()
    expect(checkoutPaymentPage.buttonFinish).toBeEnabled()
  
    // verify footer contents
    expect(checkoutPaymentPage.buttonTwitterIcon).toBeVisible()
    expect(checkoutPaymentPage.buttonFacebookIcon).toBeVisible()
    expect(checkoutPaymentPage.buttonLinkedInIcon).toBeVisible()
    expect(checkoutPaymentPage.textCopywright).toBeVisible()
    expect(checkoutPaymentPage.textCopywright).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });

  test('Payment confirmation page should contain all elements', async ({ page }) => {
    const paymentConfirmationPage = new PaymentConfirmationPage(page);
    await page.goto(paymentConfirmationPage.url)
    
    // verify header, filter and menu
    expect(paymentConfirmationPage.textLogo).toBeVisible()
    expect(paymentConfirmationPage.textLogo).toHaveText('Swag Labs')
    expect(paymentConfirmationPage.textPageTitle).toHaveText('Checkout: Complete!')
    expect(paymentConfirmationPage.buttonBurgerMenu).toBeEnabled()

    // verify unique page contents
    expect(paymentConfirmationPage.imgTickForOrderComplete).toBeVisible()
    expect(paymentConfirmationPage.textThanksForYourOrder).toBeVisible()
    expect(paymentConfirmationPage.textOrderDispatched).toBeVisible()
    expect(paymentConfirmationPage.buttonBackHome).toBeEnabled()

    // verify footer contents
    expect(paymentConfirmationPage.buttonTwitterIcon).toBeVisible()
    expect(paymentConfirmationPage.buttonFacebookIcon).toBeVisible()
    expect(paymentConfirmationPage.buttonLinkedInIcon).toBeVisible()
    expect(paymentConfirmationPage.textCopywright).toBeVisible()
    expect(paymentConfirmationPage.textCopywright).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });
  });

test.describe('Shopping cart accumulation', () => {
  test('Adding an item should update the Shopping cart (from landing page and inventory item page)', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const inventoryItemPage = new InventoryItemPage(page);

    // add item from landing/inventory page and check shopping cart total icon
    expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
    await inventoryItemPage.buttonAddToCart.nth(0).click()
    expect(shoppingCartPage.counterShoppingCartTotal).toHaveText("1")

    // Creating inventory item variables of first item added to shopping cart for later comparison
    const first_item = await inventoryItemPage.textInventoryItemName.nth(1).textContent()
    const first_price = await inventoryItemPage.textInventoryItemPrice.nth(1).textContent()
    const first_description = await inventoryItemPage.textInventoryItemDescription.nth(1).textContent()

    // add item from inventory item page and check shopping cart total icon
    await landingPage.buttonInventoryItemName.nth(1).click()
    await inventoryItemPage.buttonAddToCart.click()
    expect(shoppingCartPage.counterShoppingCartTotal).toHaveText("2")

    // Creating inventory item variables of second item added to shopping cart for later comparison
    const second_item = await landingPage.buttonInventoryItemName.nth(1).textContent()
    const second_price = await landingPage.textInventoryItemPrice.nth(1).textContent()
    const second_description = await landingPage.textInventoryItemDescription.nth(1).textContent()

    // check shoppingcart page for relevant items in cart
    await shoppingCartPage.buttonShoppingCart.click()
    expect(shoppingCartPage.buttonRemoveFromCartBackpack).toHaveCount(1)
    expect(shoppingCartPage.buttonInventoryItemTitle).toHaveCount(2)

    // checking variable values of first item in shopping cart
    expect(shoppingCartPage.buttonInventoryItemTitle.nth(1)).toHaveText(first_item)
    expect(shoppingCartPage.textInventoryItemDescription.nth(1)).toHaveText(first_description)
    expect(shoppingCartPage.textInventoryItemPrice.nth(1)).toHaveText(first_price)

    //Checking variable values of second item in shopping cart
    expect(shoppingCartPage.buttonInventoryItemTitle.nth(1)).toHaveText(second_item)
    expect(shoppingCartPage.textInventoryItemDescription.nth(1)).toHaveText(second_description)
    expect(shoppingCartPage.textInventoryItemPrice.nth(1)).toHaveText(second_price)

  });
  test('Adding multiple items to the shopping cart from landing page', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const inventoryItemPage = new InventoryItemPage(page);

    

    

    // Verifying expected item present
    expect(inventoryItemPage.textInventoryItemName).toHaveText(first_item)
    expect(inventoryItemPage.textInventoryItemPrice).toHaveText(first_price)
    expect(inventoryItemPage.textInventoryItemDescription).toHaveText(first_description)
    
    
    

    

    // Verify new item in shopping cart
    
    });
});

test.describe('Inventory item page behaviour', () => {
  test('', async ({ page }) => {
    const inventoryItemPage = new InventoryItemPage(page);

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
  });
});