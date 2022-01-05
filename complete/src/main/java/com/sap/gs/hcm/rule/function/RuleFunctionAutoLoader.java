package com.sap.gs.hcm.rule.function;

import com.sap.gs.hcm.rule.function.annotation.RuleFunction;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.type.filter.AnnotationTypeFilter;

public class RuleFunctionAutoLoader {

  static{
    loadRuleFunctionsIntoContext();
  }

  private static void loadRuleFunctionsIntoContext() {

    ClassPathScanningCandidateComponentProvider scanner =
            new ClassPathScanningCandidateComponentProvider(false);
    scanner.addIncludeFilter(new AnnotationTypeFilter(RuleFunction.class));

    for(BeanDefinition bd: scanner.findCandidateComponents("com.sap.gs.hcm.rule")){
      System.out.println(bd.getBeanClassName());
    }
  }

  public static void main(String[] args) {
    new RuleFunctionAutoLoader();
  }
}
