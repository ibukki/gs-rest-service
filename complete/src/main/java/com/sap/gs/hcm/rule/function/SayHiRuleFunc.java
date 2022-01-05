package com.sap.gs.hcm.rule.function;

import com.sap.gs.hcm.rule.function.annotation.RuleContainer;
import com.sap.gs.hcm.rule.function.annotation.RuleFunction;
import org.springframework.stereotype.Component;

@Component
@RuleContainer
public class SayHiRuleFunc {

  @RuleFunction(name="sayHi")
   public String sayHi(){
     System.out.println("I say hi");
     return "cool";
   }
}
