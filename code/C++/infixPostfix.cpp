/* INFIX - POSTFIX IN C++
Worst case time complexity is O(n)*/

#include<iostream>
#include<stack>
using namespace std;

//Function to return precedence of operators
int precedence(char c) {
    if(c == '^')
        return 3;
    else if(c == '/' || c=='*')
        return 2;
    else if(c == '+' || c == '-')
        return 1;
    else
        return -1;
}

/* The main function to convert infix expression to postfix expression */
void infixToPostfix(string s) {

    stack<char> st; //For stack operations, we are using C++ built in stack
    string res;

    for(int i = 0; i < s.length(); i++) {
        char c = s[i];

        /* If the scanned character is an operand, add it to output string */
        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
            res += c;

        /* If the scanned character is an ‘(‘, push it to the stack */
        else if(c == '(')
            st.push('(');

        /* If the scanned character is an ‘)’, pop and to output string from the stack until an ‘(‘ is encountered */
        else if(c == ')') {
            while(st.top() != '(')
            {
                res += st.top();
                st.pop();
            }
            st.pop();
        }

        //If an operator is scanned
        else {
            while(!st.empty() && precedence(s[i]) <= precedence(st.top())) {
                res += st.top();
                st.pop();
            }
            st.push(c);
        }
    }

    // Pop all the remaining elements from the stack
    while(!st.empty()) {
        res += st.top();
        st.pop();
    }

    cout << res << endl;
}

//The main function.

int main() {
    string expression;
    printf("\nEnter a valid infix expression : ");
    cin>>expression;
    printf("The postfix expression is : ");
    infixToPostfix(expression);
    return 0;
}
