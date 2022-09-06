/* PREFIX - INFIX IN C++
 Worst case time complexity is O(n) */

#include <iostream>
#include <stack>
using namespace std;

bool isOperator(char x){
    switch(x){
      case '+':
      case '-':
      case '/':
      case '*':
        return true;
    }
  return false;
}

string prefixToInfix(string exp) {
  stack<string> s;

  int l = exp.size();

  for(int i = l-1; i >= 0; i--){

    if(isOperator(exp[i])){

      string op1 = s.top();
      s.pop();
      string op2 = s.top();
      s.pop();

      string temp = "(" + op1 + exp[i] + op2 + ")";

      s.push(temp);
    }

    else{
      s.push(string(1, exp[i]));
    }
  }

  return s.top();
}

int main(){
  string expression;
  printf("\nEnter a valid prefix expression : ");
  cin>>expression;
  cout<<"Infix expression is : "<<prefixToInfix(expression);

  return 0;
}
