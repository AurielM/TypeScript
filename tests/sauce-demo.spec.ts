import { test, expect } from '@playwright/test';
import { LoginPage } from '../classes/loginPage';
import { LandingPage } from '../classes/landingPage';
import { ShoppingCartPage } from '../classes/shoppingCartPage';
import { InventoryItemPage } from '../classes/inventoryItemPage';
import { CheckoutInformationPage } from '../classes/checkoutInformationPage';
import { CheckoutPaymentPage } from '../classes/checkoutPaymentPage';
import { PaymentConfirmationPage } from '../classes/paymentConfirmationPage';
import { TIMEOUT } from 'dns';

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
    await expect(landingPage.textLogo).toBeVisible()
    await expect(landingPage.textLogo).toHaveText('Swag Labs')
    await expect(landingPage.textPageTitle).toHaveText('Products')
    await expect(landingPage.buttonBurgerMenu).toBeEnabled()
    await expect(landingPage.buttonFilter).toBeEnabled()

    // verify unique page contents
    await expect(landingPage.buttonShoppingCart).toBeEnabled()
    await expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
    await expect(landingPage.buttonInventoryItemName).toHaveCount(6)
    await expect(landingPage.textInventoryItemPrice).toHaveCount(6)
    await expect(landingPage.textInventoryItemDescription).toHaveCount(6)
    await expect(landingPage.buttonAddToCart).toHaveCount(6)
    await expect(landingPage.buttonRemoveFromCart).toBeHidden()

    // verify footer contents
    await expect(landingPage.buttonTwitterIcon).toBeVisible()
    await expect(landingPage.buttonFacebookIcon).toBeVisible()
    await expect(landingPage.buttonLinkedInIcon).toBeVisible()
    await expect(landingPage.textCopywright).toBeVisible()
    await expect(landingPage.textCopywright).toHaveText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
  });

  test('Shopping cart page should contain all elements', async ({ page }) => {
    const shoppingCartPage = new ShoppingCartPage(page);
    await page.goto(shoppingCartPage.url);

    // verify header, filter and menu
    await expect(shoppingCartPage.textLogo).toBeVisible()
    await expect(shoppingCartPage.textLogo).toHaveText('Swag Labs')
    await expect(shoppingCartPage.textPageTitle).toHaveText('Your Cart')
    await expect(shoppingCartPage.buttonBurgerMenu).toBeEnabled()
    await expect(shoppingCartPage.buttonFilter).toBeHidden()

    // verify unique page contents
    await expect(shoppingCartPage.buttonShoppingCart).toBeEnabled()
    await expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
    await expect(shoppingCartPage.buttonInventoryItemName).toBeHidden()
    await expect(shoppingCartPage.textInventoryItemPrice).toBeHidden()
    await expect(shoppingCartPage.textInventoryItemDescription).toBeHidden()
    await expect(shoppingCartPage.buttonContinueShopping).toBeVisible()
    await expect(shoppingCartPage.buttonCheckout).toBeEnabled()

    // verify footer contents
    await expect(shoppingCartPage.buttonTwitterIcon).toBeVisible()
    await expect(shoppingCartPage.buttonFacebookIcon).toBeVisible()
    await expect(shoppingCartPage.buttonLinkedInIcon).toBeVisible()
    await expect(shoppingCartPage.textCopywright).toBeVisible()
    await expect(shoppingCartPage.textCopywright).toHaveText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });

  test('Checkout information page should contain all elements', async ({ page }) => {
    const checkoutInformationPage = new CheckoutInformationPage(page);
    console.log(checkoutInformationPage.url)
    await page.goto(checkoutInformationPage.url);
    
    // verify header, filter and menu
    await expect(checkoutInformationPage.textLogo).toBeVisible()
    await expect(checkoutInformationPage.textLogo).toHaveText('Swag Labs')
    await expect(checkoutInformationPage.textPageTitle).toHaveText('Checkout: Your Information')
    await expect(checkoutInformationPage.buttonBurgerMenu).toBeEnabled()
    await expect(checkoutInformationPage.buttonFilter).toBeHidden()

    // verify unique page contents
    await expect(checkoutInformationPage.textboxFirstName).toBeEnabled()
    await expect(checkoutInformationPage.textboxLastName).toBeEnabled()
    await expect(checkoutInformationPage.textboxPostCode).toBeEnabled()
    await expect(checkoutInformationPage.buttonCancel).toBeEnabled()
    await expect(checkoutInformationPage.buttonContinue).toBeEnabled()
    await expect(checkoutInformationPage.errorMessage).toBeHidden()

    // verify footer contents
    await expect(checkoutInformationPage.buttonTwitterIcon).toBeVisible()
    await expect(checkoutInformationPage.buttonFacebookIcon).toBeVisible()
    await expect(checkoutInformationPage.buttonLinkedInIcon).toBeVisible()
    await expect(checkoutInformationPage.textCopywright).toBeVisible()
    await expect(checkoutInformationPage.textCopywright).toHaveText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });   

  test('Checkout payment page should contain all elements', async ({ page }) => {
    const checkoutPaymentPage = new CheckoutPaymentPage(page);
    await page.goto(checkoutPaymentPage.url)
    
    // verify header, filter and menu
    await expect(checkoutPaymentPage.textLogo).toBeVisible()
    await expect(checkoutPaymentPage.textLogo).toHaveText('Swag Labs')
    await expect(checkoutPaymentPage.textPageTitle).toHaveText('Checkout: Overview')
    await expect(checkoutPaymentPage.buttonBurgerMenu).toBeEnabled()

    // verify unique page contents
    await expect(checkoutPaymentPage.textItemCost).toBeVisible()
    await expect(checkoutPaymentPage.textItemTax).toBeVisible()
    await expect(checkoutPaymentPage.textPriceTotal).toBeVisible()
    await expect(checkoutPaymentPage.buttonCancel).toBeEnabled()
    await expect(checkoutPaymentPage.buttonFinish).toBeEnabled()
  
    // verify footer contents
    await expect(checkoutPaymentPage.buttonTwitterIcon).toBeVisible()
    await expect(checkoutPaymentPage.buttonFacebookIcon).toBeVisible()
    await expect(checkoutPaymentPage.buttonLinkedInIcon).toBeVisible()
    await expect(checkoutPaymentPage.textCopywright).toBeVisible()
    await expect(checkoutPaymentPage.textCopywright).toHaveText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });

  test('Payment confirmation page should contain all elements', async ({ page }) => {
    const paymentConfirmationPage = new PaymentConfirmationPage(page);
    await page.goto(paymentConfirmationPage.url)
    
    // verify header, filter and menu
    await expect(paymentConfirmationPage.textLogo).toBeVisible()
    await expect(paymentConfirmationPage.textLogo).toHaveText('Swag Labs')
    await expect(paymentConfirmationPage.textPageTitle).toHaveText('Checkout: Complete!')
    await expect(paymentConfirmationPage.buttonBurgerMenu).toBeEnabled()

    // verify unique page contents
    await expect(paymentConfirmationPage.imgTickForOrderComplete).toBeVisible()
    await expect(paymentConfirmationPage.textThanksForYourOrder).toBeVisible()
    await expect(paymentConfirmationPage.textOrderDispatched).toBeVisible()
    await expect(paymentConfirmationPage.buttonBackHome).toBeEnabled()

    // verify footer contents
    await expect(paymentConfirmationPage.buttonTwitterIcon).toBeVisible()
    await expect(paymentConfirmationPage.buttonFacebookIcon).toBeVisible()
    await expect(paymentConfirmationPage.buttonLinkedInIcon).toBeVisible()
    await expect(paymentConfirmationPage.textCopywright).toBeVisible()
    await expect(paymentConfirmationPage.textCopywright).toHaveText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    });
  });

test.describe('Shopping cart accumulation', () => {
  test('Adding an item to the Shopping cart (from landing page and inventory item page)', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const inventoryItemPage = new InventoryItemPage(page);

    // add item from landing/inventory page and check shopping cart total icon
    await expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
    await inventoryItemPage.buttonAddToCart.nth(0).click()
    await expect(shoppingCartPage.counterShoppingCartTotal).toHaveText("1")

    // Creating inventory item variables of first item added to shopping cart for later comparison
    const first_item = await landingPage.buttonInventoryItemName.nth(1).textContent() ?? "Null text"
    const first_price = await landingPage.textInventoryItemPrice.nth(1).textContent() ?? "Null text"
    const first_description = await landingPage.textInventoryItemDescription.nth(1).textContent() ?? "Null text"

    // add item from inventory item page and check shopping cart total icon
    await landingPage.buttonInventoryItemName.nth(1).click()
    await inventoryItemPage.buttonAddToCart.click()
    await expect(shoppingCartPage.counterShoppingCartTotal).toHaveText("2")
    await page.waitForLoadState('networkidle')
    await page.waitForLoadState('load')

    // Creating inventory item variables of second item added to shopping cart for later comparison
    const second_item = await inventoryItemPage.textInventoryItemName.textContent() ?? "Null text"
    const second_price = await inventoryItemPage.textInventoryItemPrice.textContent() ?? "Null text"
    const second_description = await inventoryItemPage.textInventoryItemDescription.textContent() ?? "Null text"

    // check shoppingcart page for relevant items in cart
    await shoppingCartPage.buttonShoppingCart.click()
    await expect(shoppingCartPage.buttonRemoveFromCart).toHaveCount(2)
    await expect(shoppingCartPage.buttonInventoryItemName).toHaveCount(2)

    // checking variable values of first item in shopping cart
    await expect(shoppingCartPage.buttonInventoryItemName.nth(1)).toHaveText(first_item)
    await expect(shoppingCartPage.textInventoryItemDescription.nth(1)).toHaveText(first_description)
    await expect(shoppingCartPage.textInventoryItemPrice.nth(1)).toHaveText(first_price)

    //Checking variable values of second item in shopping cart
    await expect(shoppingCartPage.buttonInventoryItemName.nth(1)).toHaveText(second_item)
    await expect(shoppingCartPage.textInventoryItemDescription.nth(1)).toHaveText(second_description)
    await expect(shoppingCartPage.textInventoryItemPrice.nth(1)).toHaveText(second_price)

  });
  test('Adding multiple items to the shopping cart from landing page', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const inventoryItemPage = new InventoryItemPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    // Creating inventory item variables of first item added to shopping cart for later comparison
    const first_item = await landingPage.buttonInventoryItemName.nth(0).textContent() ?? "Null text"
    const first_price = await landingPage.textInventoryItemPrice.nth(0).textContent() ?? "Null text"
    const first_description = await landingPage.textInventoryItemDescription.nth(0).textContent() ?? "Null text"

    // Creating inventory item variables of second item added to shopping cart for later comparison
    const second_item = await landingPage.buttonInventoryItemName.nth(1).textContent() ?? "Null text"
    const second_price = await landingPage.textInventoryItemPrice.nth(1).textContent() ?? "Null text"
    const second_description = await landingPage.textInventoryItemDescription.nth(1).textContent() ?? "Null text"

    // Creating inventory item variables of third item added to shopping cart for later comparison
    const third_item = await landingPage.buttonInventoryItemName.nth(2).textContent() ?? "Null text"
    const third_price = await landingPage.textInventoryItemPrice.nth(2).textContent() ?? "Null text"
    const third_description = await landingPage.textInventoryItemDescription.nth(2).textContent() ?? "Null text"

    // add 3 items from landing/inventory page and check shopping cart total icon
    // locators reset once names of buttons change following being clicked, thus nth must be 0 on all counts
    await expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
    await inventoryItemPage.buttonAddToCart.nth(0).click()
    await expect(shoppingCartPage.counterShoppingCartTotal).toHaveText("1")
    await inventoryItemPage.buttonAddToCart.nth(0).click()
    await expect(shoppingCartPage.counterShoppingCartTotal).toHaveText("2")
    await inventoryItemPage.buttonAddToCart.nth(0).click()
    await expect(shoppingCartPage.counterShoppingCartTotal).toHaveText("3")
    
    // check shoppingcart page for relevant items in cart
    await shoppingCartPage.buttonShoppingCart.click()
    await expect(shoppingCartPage.buttonRemoveFromCart).toHaveCount(3)
    await expect(shoppingCartPage.buttonInventoryItemName).toHaveCount(3)
    await expect(shoppingCartPage.buttonContinueShopping).toBeEnabled()
    await expect(shoppingCartPage.buttonCheckout).toBeEnabled()

    // Verifying expected items present
    await expect(shoppingCartPage.buttonInventoryItemName.nth(0)).toHaveText(first_item)
    await expect(shoppingCartPage.textInventoryItemPrice.nth(0)).toHaveText(first_price)
    await expect(shoppingCartPage.textInventoryItemDescription.nth(0)).toHaveText(first_description)

    await expect(shoppingCartPage.buttonInventoryItemName.nth(1)).toHaveText(second_item)
    await expect(shoppingCartPage.textInventoryItemPrice.nth(1)).toHaveText(second_price)
    await expect(shoppingCartPage.textInventoryItemDescription.nth(1)).toHaveText(second_description)

    await expect(shoppingCartPage.buttonInventoryItemName.nth(2)).toHaveText(third_item)
    await expect(shoppingCartPage.textInventoryItemPrice.nth(2)).toHaveText(third_price)
    await expect(shoppingCartPage.textInventoryItemDescription.nth(2)).toHaveText(third_description)

    await expect(shoppingCartPage.buttonRemoveFromCart).toHaveCount(3)
    
    });
});

test.describe('Inventory item page behaviour', () => {
  test('Adding and removing all items from the inventory item page', async ({ page }) => {
    const inventoryItemPage = new InventoryItemPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    var buttonaddorremove:number = 1
    var buttonrange = await inventoryItemPage.buttonAddToCart.count()

    
    // adding all items to the cart and verifying
    for ( buttonaddorremove; buttonaddorremove <= buttonrange ; buttonaddorremove++) {

      await inventoryItemPage.buttonAddToCart.nth(0).click()
      await expect(inventoryItemPage.buttonAddToCart).toHaveCount(buttonrange-buttonaddorremove)
      await expect(inventoryItemPage.buttonRemoveFromCart).toHaveCount(buttonaddorremove)

      if (buttonrange < 6) {
        await expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
      } else {
        await expect(shoppingCartPage.counterShoppingCartTotal).toHaveText(`${buttonaddorremove}`)
      }
    }

    await shoppingCartPage.buttonShoppingCart.click()
    await expect(shoppingCartPage.buttonRemoveFromCart).toHaveCount(6)
    await expect(shoppingCartPage.buttonInventoryItemName).toHaveCount(6)


    // removing all items from the cart and verifying
    for ( buttonaddorremove; buttonaddorremove <= buttonrange ; buttonaddorremove++) {

      await inventoryItemPage.buttonRemoveFromCart.nth(0).click()
      await expect(inventoryItemPage.buttonAddToCart).toHaveCount(buttonrange-buttonaddorremove)
      await expect(inventoryItemPage.buttonRemoveFromCart).toHaveCount(buttonaddorremove)

      if (buttonrange < 6) {
        await expect(shoppingCartPage.counterShoppingCartTotal).toBeHidden()
      } else {
        await expect(shoppingCartPage.counterShoppingCartTotal).toHaveText(`${buttonaddorremove}`)
      }

    await shoppingCartPage.buttonShoppingCart.click()
    await expect(shoppingCartPage.buttonRemoveFromCart).toHaveCount(0)
    await expect(shoppingCartPage.buttonInventoryItemName).toHaveCount(0)
    }

  });
  test('Sortby page beahviour', async ({ page }) => {
    const inventoryItemPage = new InventoryItemPage(page);

    //click sortby label
    await inventoryItemPage.dropdownFilterSortBy.click()

    // verify page order (function in class, e.g. A-z = list)

    // select next dropdown element by text: first filter, verify page order (function in class, e.g. A-z = list)
    // create for loop in function (in class) to check and input list comparison per use of this loop

});
  test('', async ({ page }) => {
    const inventoryItemPage = new InventoryItemPage(page);

    // test results of page for filter in dropdown - A to Z
    await inventoryItemPage.dropdownFilterSortBy.selectOption("Name (A to Z)")

    // test results of page for filter in dropdown - Z to A
    await inventoryItemPage.dropdownFilterSortBy.selectOption("Name (Z to A)")

    // test results of page for filter in dropdown - low to high
    await inventoryItemPage.dropdownFilterSortBy.selectOption("Price (low to high)")

    // test results of page for filter in dropdown - high to low
    await inventoryItemPage.dropdownFilterSortBy.selectOption("Price (high to low)")



});
});
