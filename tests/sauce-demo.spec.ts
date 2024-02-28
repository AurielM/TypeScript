import { test, Expect, type Page, expect } from '@playwright/test';
import { PageLogin } from '../classes/pageLogin';

test('Log in using credentials', async ({ page }) => {
    
    // Load login page (via inheritance of base class through PageLogin)
    const pageLogin = new PageLogin(page);
    // Use 1st credentials to login
    await pageLogin.LoginUser(0)
  });