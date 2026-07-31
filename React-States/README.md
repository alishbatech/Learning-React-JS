# Rules of Hooks

## Rule 1: Only call Hooks at the top level

-Do not call Hooks:
-Inside loops
-Inside conditions (if/else)
-Inside nested functions
-Inside try/catch blocks

### Reason:
- Hooks must be called in the same order on every render.

## Rule 2: Only call Hooks from React functions

-You can call Hooks only:
-Inside React function components
-Inside custom Hooks

### Reason: 
-React needs to manage the Hook's state and lifecycle correctly.