package com.sap.gs.hcm.rule.function.annotation;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.TYPE;

@Target({ TYPE })
@Retention(RetentionPolicy.RUNTIME)
public @interface RuleContainer {
}
