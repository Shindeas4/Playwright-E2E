import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page :Page ;
    readonly signInLink : Locator ;
    readonly emailPlaceholder : Locator ;
    readonly password : Locator ;
    readonly signInBtn: Locator;
    readonly userActionDropDown : Locator ;
    readonly signOutBtn : Locator ;

    constructor(page :Page){
        this.page = page ;
        this.signInLink = page.getByText("Sign In");
        this.emailPlaceholder = page.getByLabel('email');
        this.password = page.getByLabel('password');
        this.signInBtn = page.locator('button:has-text("Sign In")'); 
        this.userActionDropDown =  page.locator("button:has-text('Change')")
        this.signOutBtn = page.getByText("Sign Out");

    }

    async login (email : string , password : string){
        await this.signInLink.nth(0).click();
        await this.emailPlaceholder.fill(email);
        await this.password.fill(password);
        await this.signInBtn.click();
        
    }

  

    async logOut(){
        await this.userActionDropDown.nth(0).click();
        await this.signOutBtn.nth(0).click();
        await this.page.waitForTimeout(40000);
    }

   
}

