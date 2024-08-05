import { By, ExecuteScript, PageElement } from '@serenity-js/web';


export class CalculatorResults {

  constructor(){
    this.resultsText = PageElement.located(By.id('results'));
    this.resultChart = PageElement.located(By.id('results-chart'));
    this.editInfo = PageElement.located(By.xpath("//*[@id='calculator-results-container']/div[2]/div[2]/div[2]/div/div[2]/div/button"));
    this.scriptSelectorForEditInfo = 'document.querySelector("#calculator-results-container > div.dsg-row-wrapper > div:nth-child(2) > div.col-lg-4 > div > div:nth-child(2) > div > button").click()'
  }
}