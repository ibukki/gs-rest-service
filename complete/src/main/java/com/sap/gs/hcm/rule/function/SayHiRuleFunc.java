package com.sap.gs.hcm.rule.function;

import com.sap.gs.hcm.rule.function.annotation.RuleFunction;
import org.springframework.stereotype.Component;

@Component
@RuleFunction(name="hiRule")
public class SayHiRuleFunc {

   public String sayHi(){
     System.out.println("I say hi");
     return "cool";
   }
}
