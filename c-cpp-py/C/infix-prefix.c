/*INFIX - PREFIX
Time complexity - O(n^2)*/

#define SIZE 100            /* Size of Stack */
#include<string.h>
#include <ctype.h>
char s[SIZE];
int top=-1;       /* Global declarations */

push(char elem)
{                       /* Function for PUSH operation */
    s[++top]=elem;
}

char pop()
{                      /* Function for POP operation */
    return(s[top--]);
}

int pr(char elem)
{                 /* Function for precedence */
    switch(elem)
    {
    case '#': return 0;
    case ')': return 1;
    case '+':
    case '-': return 2;
    case '*':
    case '/': return 3;
    }
}

main()
{                         /* Main Program */
    char infx[100],prfx[100],ch,elem;
    int i=0,k=0;
    printf("\nInput the Infix Expression :");
    scanf("%s",infx);
    push('#');
    strrev(infx);
    while( (ch=infx[i++]) != '\0')
    {
        if( ch == ')') push(ch);
        else
            if(isalnum(ch)) prfx[k++]=ch;
            else
                if( ch == '(')
                {
                    while( s[top] != ')')
                        prfx[k++]=pop();
                    elem=pop(); /* Remove ) */
                }
                else
                {       /* Operator */
                    while( pr(s[top]) >= pr(ch) )
                        prfx[k++]=pop();
                    push(ch);
                }
    }
    while( s[top] != '#')     /* Pop from stack till empty */
        prfx[k++]=pop();
    prfx[k]='\0';          /* Make prfx as valid string */
    strrev(prfx);
    strrev(infx);
    printf("\n\nGiven Infix Expn: %s  Prefix Expn: %s\n",infx,prfx);
}
