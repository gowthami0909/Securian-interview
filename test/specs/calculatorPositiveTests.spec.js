import { actorCalled, Duration, Wait } from '@serenity-js/core';
import {  Enter, Text, Navigate, Press, isVisible, ExecuteScript, Clear, Click, Scroll, isClickable } from '@serenity-js/web';
import {  Ensure, equals } from '@serenity-js/assertions';

import  { Securian}  from '../pages/Securian.js';

describe('Retirement Calculator - Positive cases', () => {
  const baseUrl = browser.options.baseUrl;
  const securian = new Securian();

  it('Calculate the retirement amount with all fields', async () => {
    let actor = actorCalled('Gowthami');
    await actor.attemptsTo(Navigate.to(baseUrl));
    await securian.getCalculatorFormFilled(actor);
    await actor.attemptsTo(
      Press.the('1','0','0','0','0','0').in(securian.preRetirementCalculator.spouseIncome),
      ExecuteScript.sync(securian.preRetirementCalculator.scriptSelectorForCalculateButton),
      Wait.until(securian.calculatorResults.resultChart, isVisible())
    );
  });

  it('Calculate the retirement amount with only required fields', async () => {
    const actor = actorCalled('Gowthami');
    await actor.attemptsTo(Navigate.to(baseUrl));
    await securian.getCalculatorFormFilled(actor);
    await actor.attemptsTo(
        ExecuteScript.sync(securian.preRetirementCalculator.scriptSelectorForCalculateButton),
        Wait.until(securian.calculatorResults.resultChart, isVisible()),
    );
  });

  it('Calculate the retirement amount with Social security income', async () => {
    const actor = actorCalled('Gowthami');
    await actor.attemptsTo(Navigate.to(baseUrl));
    await securian.getCalculatorFormFilled(actor);
    await actor.attemptsTo(
      Press.the('1','0','0','0','0','0').in(securian.preRetirementCalculator.spouseIncome),
      ExecuteScript.sync(securian.preRetirementCalculator.scriptSelectorForSocialSecurityYesButton),
      Press.the('2','0','0').in(securian.preRetirementCalculator.socialSecurityOverride),
      ExecuteScript.sync(securian.preRetirementCalculator.scriptSelectorForCalculateButton),
      Wait.until(securian.calculatorResults.resultChart, isVisible()),
    );
  });

  it('Edit and update form', async () => {
    const actor = actorCalled('Gowthami');
    await actor.attemptsTo(Navigate.to(baseUrl));
    await securian.getCalculatorFormFilled(actor);
    await actor.attemptsTo(
        ExecuteScript.sync(securian.preRetirementCalculator.scriptSelectorForCalculateButton),
        Wait.until(securian.calculatorResults.resultChart, isVisible()),
        Wait.until(securian.calculatorResults.editInfo, isClickable()),
        //Edit, clear fields and resubmit the form
        ExecuteScript.sync(securian.calculatorResults.scriptSelectorForEditInfo),
        Ensure.that(
          Text.of(securian.preRetirementCalculator.calculatorHeader), 
          equals('Pre-retirement calculator')),
        Clear.theValueOf(securian.preRetirementCalculator.currentAge),
        Clear.theValueOf(securian.preRetirementCalculator.retirementAge),
        Clear.theValueOf(securian.preRetirementCalculator.currentIncome),
        Clear.theValueOf(securian.preRetirementCalculator.currentTotalSavings),
        Clear.theValueOf(securian.preRetirementCalculator.currentAnnualSavings),
        Clear.theValueOf(securian.preRetirementCalculator.savingsIncreaseRate),
    );
    await securian.getCalculatorFormFilled(actor);
    await actor.attemptsTo(
      ExecuteScript.sync(securian.preRetirementCalculator.scriptSelectorForCalculateButton),
      Wait.until(securian.calculatorResults.resultChart, isVisible()),
  );
  });
});