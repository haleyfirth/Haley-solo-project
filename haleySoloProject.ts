import { WebDriver } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { By } from "selenium-webdriver"


export class haleySoloProject extends BasePage{
    driver: WebDriver;
    url: string;
    constructor(){
        super({url: "https//google.com"})
    }
    //selector1: By = By.xpath()
    signInHomePage: By = By.xpath('//a[@id="cta_button_3306341_4dd7644d-b3ec-495f-9004-ee6f5b35d360"]');
    /** email box login */
    emailInputBox: By = By.xpath('//input[@class="form-control input-lg grey-light-bg p-lg text-center"]');
    /** next button at login page */
    nextBtn: By = By.xpath('//button[@class="btn btn-primary btn-lg w-100 mt-3 applicant-experience"]');
}