/* INFIX - POSTFIX
Time complexity - O(n^2)*/

#include<stdio.h>
#include<ctype.h>

char stack[100];
int top = -1;

void push(char x)
{
    stack[++top] = x;
}

char pop()
{
    if(top == -1)
        return -1;
    else
        return stack[top--];
}

int priorityOperator(char x)
{
    if(x == '(')
        return 0;
    if(x == '+' || x == '-')
        return 1;
    if(x == '*' || x == '/')
        return 2;
    return 0;
}

int main()
{
    char expression[100];
    char *i, x;
    printf("\nEnter the expression : ");
    scanf("%s",expression);
    printf("\n");
    i = expression;

    while(*i != '\0')
    {
        if(isalnum(*i))
            printf("%c ",*i);
        else if(*i == '(')
            push(*i);
        else if(*i == ')')
        {
            while((x = pop()) != '(')
                printf("%c ", x);
        }
        else
        {
            while(priorityOperator(stack[top]) >= priorityOperator(*i))
                printf("%c ",pop());
            push(*i);
        }
        i++;
    }

    while(top != -1)
    {
        printf("%c ",pop());
    }return 0;
}
