package com.sap.gs.hcm.rule.transform;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ScriptValidator {

  public String validate(String input){
    if(input.length() > Integer.MAX_VALUE){
      return input;
    }
    List<Integer> insertPos = new ArrayList<Integer>();
    for(int idx = 0; idx < input.length(); idx ++){
      if(input.charAt(idx) == '}'){
        for(int backIdx = idx - 1; backIdx > 0; backIdx --){
          String previousChar = String.valueOf(input.charAt(backIdx));
          if(previousChar.matches("\\S") && previousChar.equals("}")){
            break;
          }
          if (previousChar.matches("\\S") && !previousChar.equals("}") && !previousChar.equals(";")) {
            //missing ;
            insertPos.add(backIdx + 1);
            break;
          }
        }
      }
    }

    if(insertPos.size() > 0){
      for(int i = 0; i < insertPos.size(); i++){
        StringBuffer sb = new StringBuffer(input);
        sb.insert(insertPos.get(i) + i,";");
        input = sb.toString();
      }
    }

    return input;
  }

  public String traveseFunction(String input){
    Pattern pattern = Pattern.compile("([a-zA-Z_{1}][a-zA-Z0-9_.]+)\\s*\\(");
    Matcher matcher = pattern.matcher(input);
    List<String> functionList = new ArrayList<String>();
    while(matcher.find()){
      String functionTmp = matcher.group(1);
      if(!functionTmp.equalsIgnoreCase("if") && functionTmp.indexOf(".") < 0){
         functionList.add(functionTmp);
      }
    }
    return input;
  }

  public static void main(String[] args) {
    ScriptValidator validator = new ScriptValidator();
    String s = "if(cb.input1 > 5 && cb.input2 < 2){ rsb.value = ( cb.getInput1 () * cb.getInput2() + 20)  } else { sayHi ()}";

    s = validator.validate(s);
    s = validator.traveseFunction(s);
  }


}
