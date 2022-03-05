#include<stdio.h>
#include<conio.h>
#include<ctype.h>
#define MAX 100
float stack[MAX];
int top=-1;
void push(float stack[],float value);
float pop(float stack[]);
float evaluatePostfixExp(char exp[]);
void main()
{
float value;
char exp[100];
printf("\n Enter any postfix expression : ");
gets(exp);
value=evaluatePostfixExp(exp);
printf("\n Value of the postfix expression = %.2f",value);
getch();
}
float evaluatePostfixExp(char exp[])
{
int i=0;
float op1,op2,value;
while(exp[i]!='\0')
{
if(isdigit(exp[i]))
push(stack,(float)(exp[i]-'0'));
else
{
op2=pop(stack);
op1=pop(stack);
switch(exp[i])
{
case '+' :
value=op1+op2;
break;
case '-' :
value=op1-op2;
break;
case '*' :
value=op1*op2;
break;
case '/' :
value=op1/op2;
break;
case '%' :
value=(int)op1%(int)op2;
break;
}
push(stack,value);
}
i++;
}
return (pop(stack));
}
void push(float stack[],float value)
{
if(top==MAX-1)
printf("\n Stack overflow");
else
{
top=top+1;
stack[top]=value;
}
}
float pop(float stack[])
{
float value=-1;
if(top==-1)
printf("\n Stack underflow");
else
{
value=stack[top];
top=top-1;
}
return value;
}
