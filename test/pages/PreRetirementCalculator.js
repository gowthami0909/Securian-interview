import { By, PageElement } from '@serenity-js/web';

export class PreRetirementCalculator {

  constructor(){
    this.calculatorHeader = PageElement.located(By.css('#calculator-intro-section > h2'));
    this.currentAge = PageElement.located(By.id('current-age'));
    this.retirementAge = PageElement.located(By.id('retirement-age'));
    this.currentIncome = PageElement.located(By.id('current-income'));
    this.spouseIncome = PageElement.located(By.id('spouse-income'));
    this.currentTotalSavings = PageElement.located(By.id('current-total-savings'));
    this.currentAnnualSavings = PageElement.located(By.id('current-annual-savings'));
    this.savingsIncreaseRate = PageElement.located(By.id('savings-increase-rate'));
    this.calculateButton = PageElement.located(By.xpath('//button[@data-tag-id="submit"]'));
    this.socialSecurityOverride = PageElement.located(By.id('social-security-override'));
    this.container = PageElement.located(By.id("include-social-container"));
    this.single = PageElement.located(By.xpath("//*[@id='marital-status-ul']/li[1]/label"));
    this.scriptSelectorForSocialSecurityYesButton = 'document.querySelector("#include-social-container > ul > li:nth-child(1) > label").click()';
    this.scriptSelectorForCalculateButton = 'document.querySelector("#retirement-form > div:nth-child(7) > div:nth-child(2) > div.col-sm-4 > button").click()';
    this.requiredFieldAlert = PageElement.located(By.id('calculator-input-alert-desc'));
  }
}
