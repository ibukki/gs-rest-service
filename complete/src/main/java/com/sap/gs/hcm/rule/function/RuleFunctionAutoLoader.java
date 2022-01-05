package com.sap.gs.hcm.rule.function;

import com.sap.gs.hcm.rule.ApplicationContextProvider;
import com.sap.gs.hcm.rule.bean.RuleContext;
import com.sap.gs.hcm.rule.function.annotation.RuleContainer;
import com.sap.gs.hcm.rule.function.annotation.RuleFunction;
import lombok.SneakyThrows;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.type.filter.AnnotationTypeFilter;

import java.lang.reflect.Method;

public class RuleFunctionAutoLoader {

  static{
    loadRuleFunctionsIntoContext();
  }

  @SneakyThrows
  private static void loadRuleFunctionsIntoContext() {

    ClassPathScanningCandidateComponentProvider scanner =
            new ClassPathScanningCandidateComponentProvider(false);
    scanner.addIncludeFilter(new AnnotationTypeFilter(RuleContainer.class));

    for(BeanDefinition bd: scanner.findCandidateComponents("com.sap.gs.hcm.rule")){
      String beanClass = bd.getBeanClassName();
      Method[] methods = Class.forName(beanClass).getMethods();
      for (Method meth: methods){
        if(meth.getAnnotation(RuleFunction.class) != null){
          //rule function get

          System.out.println(meth.getName());
          RuleContext ruleContext = (RuleContext) ApplicationContextProvider.getApplicationContext().getBean("ruleContext");
          System.out.println(ruleContext);
        }
      }
    }
  }

  public static void main(String[] args) {
    new RuleFunctionAutoLoader();
  }
}
