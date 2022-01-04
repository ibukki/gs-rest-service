package com.example.restservice;

import bsh.EvalError;
import bsh.Interpreter;
import com.example.restservice.bean.CalBase;
import com.example.restservice.bean.ResultBean;
import org.springframework.stereotype.Service;

import java.util.Date;

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
    String condition = "if(cb.getInput1() > 5 && cb.getInput2() < 2){ rsb.setValue( cb.getInput1() * cb.getInput2() ); }";

// Eval a statement and get the result
    interpreter.eval(condition);
    System.out.println( rsb.getValue());
  }
}
