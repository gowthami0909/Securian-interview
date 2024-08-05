import { Ensure, equals } from '@serenity-js/assertions';
import { CalculatorResults } from '../pages/CalculatorResults.js';
import { PreRetirementCalculator } from '../pages/PreRetirementCalculator.js';
import {  Enter, Text, Press} from '@serenity-js/web';


export class Securian {

  constructor() {
    this.calculatorResults = new CalculatorResults();
    this.preRetirementCalculator = new PreRetirementCalculator();
  }

  /*
  ** Fiils up form mandatory fields
  */
  async getCalculatorFormFilled(actor) {
  return await actor.attemptsTo(
    Ensure.that(
      Text.of(this.preRetirementCalculator.calculatorHeader), 
      equals('Pre-retirement calculator')),
    Enter.theValue('30').into(this.preRetirementCalculator.currentAge),
    Enter.theValue('60').into(this.preRetirementCalculator.retirementAge),
    //With Enter.theValue Amount overrides the '$' in the text area, so used Press.the
    Press.the('7','0','0','0','0').in(this.preRetirementCalculator.currentIncome),
    Press.the('1','0','0','0','0','0').in(this.preRetirementCalculator.currentTotalSavings),
    Enter.theValue('5').into(this.preRetirementCalculator.currentAnnualSavings),
    Enter.theValue('2').into(this.preRetirementCalculator.savingsIncreaseRate),
    );
    }
}
