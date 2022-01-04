package com.example.restservice.transform;

import java.util.ArrayList;
import java.util.List;

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

  public static void main(String[] args) {
    ScriptValidator validator = new ScriptValidator();
    String s = "if(cb.input1 > 2 && cb.input2 > 5) { { cb.output = 5 } } else { { cb.output = 4   } }";

    System.out.println(validator.validate(s));
  }


}
