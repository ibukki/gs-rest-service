package com.sap.gs.hcm.rule;

import bsh.EvalError;
import bsh.Interpreter;
import com.sap.gs.hcm.rule.bean.CalBase;
import com.sap.gs.hcm.rule.bean.ResultBean;
import com.sap.gs.hcm.rule.transform.ScriptValidator;
import org.springframework.stereotype.Service;

@Service
public class BeanShellService {

  public static void main(String[] args) throws EvalError {
    Interpreter interpreter = new Interpreter();  // Construct an interpreter
    CalBase cb = new CalBase();
    cb.setInput1(10);
    cb.setInput2(1);

    ResultBean rsb = new ResultBean();


    interpreter.set("cb", cb);
    interpreter.set("rsb", rsb);

    if(cb.getInput1() < 5 && cb.getInput2() >2){
      rsb.setValue(1);
    }
    String condition = "if(cb.input1 > 5 && cb.input2 < 2){ rsb.value = ( cb.getInput1() * cb.getInput2() + 20)  } else { sayHi()}";
    ScriptValidator validator = new ScriptValidator();
    condition = validator.validate(condition);

// Eval a statement and get the result
    interpreter.eval(condition);
    System.out.println( rsb.getValue());
  }
}
