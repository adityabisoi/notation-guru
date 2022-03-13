/* INFIX - PREFIX IN C++
Worst case time complexity is O(n) */

#include<iostream>
#include<stack>
#include<algorithm>
using namespace std;

//Check if it is an operator
bool isOperator(char c)
{
    return (!isalpha(c) && !isdigit(c));
}
//Function to return precedence of operators
int precedence(char x)
{
    if (x == '-' || x == '+')
        return 1;
    else if (x == '*' || x == '/')
        return 2;
    else if (x == '^')
        return 3;
    return 0;
}

string infixToPostfix(string infix)
{
    infix = '(' + infix + ')'; //Add two brackets in front and end of the string for easier evaluation.
    int l = infix.size();
    stack<char> char_stack;
    string res;

    for (int i = 0; i < l; i++) {

        /* If the scanned character is an operand, add it to output.*/
        if (isalpha(infix[i]) || isdigit(infix[i]))
            res += infix[i];

        /* If the scanned character is an ‘(‘, push it to the stack.*/
        else if (infix[i] == '(')
            char_stack.push('(');

        /* If the scanned character is an ‘)’, pop and output from the stack until an ‘(‘ is encountered.*/
        else if (infix[i] == ')') {
            while (char_stack.top() != '(') {
                res += char_stack.top();
                char_stack.pop();
            }

            // Remove '(' from the stack
            char_stack.pop();
        }

        // Operator found
        else
        {
            if (isOperator(char_stack.top()))
            {
                if(infix[i] == '^')
                {
                      while (precedence(infix[i]) <= precedence(char_stack.top()))
                       {
                         res += char_stack.top();
                         char_stack.pop();
                       }

                }
                else
                {
                    while (precedence(infix[i]) < precedence(char_stack.top()))
                       {
                         res += char_stack.top();
                         char_stack.pop();
                       }

                }

                // Push current Operator on stack
                char_stack.push(infix[i]);
            }
        }
    }
      while(!char_stack.empty()){
          res += char_stack.top();
        char_stack.pop();
    }
    return res;
}

string infixToPrefix(string infix)
{
    /* Reverse String -> Replace '(' with ')'and vice versa -> Get Postfix -> Reverse Postfix */
    int l = infix.size();

    // Reverse infix
    reverse(infix.begin(), infix.end());

    // Replace '(' with ')' and vice versa
    for (int i = 0; i < l; i++) {

        if (infix[i] == '(') {
            infix[i] = ')';
            i++;
        }
        else if (infix[i] == ')') {
            infix[i] = '(';
            i++;
        }
    }

    string prefix = infixToPostfix(infix);

    // Reverse postfix (algorithm c++ library)
    reverse(prefix.begin(), prefix.end());

    return prefix;
}
//The main function.
int main()
{
    string s;
    printf("\nEnter the infix expression : ");
    cin>>s;
    printf("\nThe prefix expression is : ");
    cout << infixToPrefix(s) << std::endl;
    return 0;
}
