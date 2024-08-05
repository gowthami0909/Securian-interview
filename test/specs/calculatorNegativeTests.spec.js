import { actorCalled } from '@serenity-js/core';
import { Enter, Text, Navigate, ExecuteScript, Clear } from '@serenity-js/web';
import { Ensure, equals } from '@serenity-js/assertions';
import { Securian } from '../pages/Securian.js';

describe('Retirement Calculator - Positive cases', () => {
  const baseUrl = browser.options.baseUrl;
  const securian = new Securian();

  it('Calculate the retirement amount with all fields', async () => {
    const actor = actorCalled('Gowthami');
    await actor.attemptsTo(Navigate.to(baseUrl));
    await securian.getCalculatorFormFilled(actor);
    await actor.attemptsTo(  
          //Submit w/o current age and check the alert
        Clear.theValueOf(securian.preRetirementCalculator.currentAge),
        ExecuteScript.sync(securian.preRetirementCalculator.scriptSelectorForCalculateButton),
        Ensure.that(
          Text.of(securian.preRetirementCalculator.requiredFieldAlert), 
          equals('Please fill out all required fields')),
          Enter.theValue('30').into(securian.preRetirementCalculator.currentAge),
  
          //Submit w/o retirement age and check the alert
          Clear.theValueOf(securian.preRetirementCalculator.retirementAge),
          ExecuteScript.sync(securian.preRetirementCalculator.scriptSelectorForCalculateButton),
          Ensure.that(
          Text.of(securian.preRetirementCalculator.requiredFieldAlert), 
          equals('Please fill out all required fields')),
          Enter.theValue('60').into(securian.preRetirementCalculator.retirementAge),
          
          //Submit w/o annual savings and check the alert
          Clear.theValueOf(securian.preRetirementCalculator.currentAnnualSavings),
          ExecuteScript.sync(securian.preRetirementCalculator.scriptSelectorForCalculateButton),
          Ensure.that(
          Text.of(securian.preRetirementCalculator.requiredFieldAlert), 
          equals('Please fill out all required fields')),

    );
  });
});
