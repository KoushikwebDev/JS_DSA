# Fibonacci Recursion Flow (Step-by-Step)

Here is a step-by-step visual breakdown of how the functions are created and called one by one, mimicking the drawing process from your screenshot.

Use the arrows below to click through the steps!

````carousel
### Step 1: The Initial Call
The program starts by calling `f(4)`. It needs to calculate `last = f(3)` and `slast = f(2)`.

```mermaid
graph TD
    classDef functionCall fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff,font-weight:bold,border-radius:8px;
    f4["f(4)"]:::functionCall
    f3["f(3)"]:::functionCall
    f2_right["f(2)"]:::functionCall
    f4 -->|"last = f(3)"| f3
    f4 -->|"slast = f(2)"| f2_right
```

<!-- slide -->
### Step 2: Expanding f(3)
`f(3)` now executes and splits into its own `last = f(2)` and `slast = f(1)`.

```mermaid
graph TD
    classDef functionCall fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff,font-weight:bold,border-radius:8px;
    f4["f(4)"]:::functionCall
    f3["f(3)"]:::functionCall
    f2_right["f(2)"]:::functionCall
    f4 -->|"last = f(3)"| f3
    f4 -->|"slast = f(2)"| f2_right
    f2_left["f(2)"]:::functionCall
    f1_mid["f(1)"]:::functionCall
    f3 -->|"last = f(2)"| f2_left
    f3 -->|"slast = f(1)"| f1_mid
```

<!-- slide -->
### Step 3: Expanding f(2)
All `f(2)` calls expand into their base cases `f(1)` and `f(0)`. The tree is now fully built!

```mermaid
graph TD
    classDef functionCall fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff,font-weight:bold,border-radius:8px;
    f4["f(4)"]:::functionCall
    f3["f(3)"]:::functionCall
    f2_right["f(2)"]:::functionCall
    f4 -->|"last = f(3)"| f3
    f4 -->|"slast = f(2)"| f2_right
    f2_left["f(2)"]:::functionCall
    f1_mid["f(1)"]:::functionCall
    f3 -->|"last = f(2)"| f2_left
    f3 -->|"slast = f(1)"| f1_mid
    f1_left["f(1)"]:::functionCall
    f0_left["f(0)"]:::functionCall
    f2_left -->|"last = f(1)"| f1_left
    f2_left -->|"slast = f(0)"| f0_left
    f1_right["f(1)"]:::functionCall
    f0_right["f(0)"]:::functionCall
    f2_right -->|"last = f(1)"| f1_right
    f2_right -->|"slast = f(0)"| f0_right
```

<!-- slide -->
### Step 4: Reaching Base Cases
The nodes `f(1)` and `f(0)` are base cases (`n <= 1`), so they immediately return `1` and `0` respectively back to their parent nodes.

```mermaid
graph TD
    classDef functionCall fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff,font-weight:bold,border-radius:8px;
    classDef baseCase fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,border-radius:8px;

    f4["f(4)"]:::functionCall
    f3["f(3)"]:::functionCall
    f2_right["f(2)"]:::functionCall
    f4 -->|"last = f(3)"| f3
    f4 -->|"slast = f(2)"| f2_right
    
    f2_left["f(2)"]:::functionCall
    f1_mid["f(1)"]:::baseCase
    f3 -->|"last = f(2)"| f2_left
    f3 -->|"slast = f(1)"| f1_mid
    
    f1_left["f(1)"]:::baseCase
    f0_left["f(0)"]:::baseCase
    f2_left -->|"last = f(1)"| f1_left
    f2_left -->|"slast = f(0)"| f0_left
    
    f1_right["f(1)"]:::baseCase
    f0_right["f(0)"]:::baseCase
    f2_right -->|"last = f(1)"| f1_right
    f2_right -->|"slast = f(0)"| f0_right

    f1_left -.->|"returns 1"| f2_left
    f0_left -.->|"returns 0"| f2_left

    f1_mid -.->|"returns 1"| f3
    f1_right -.->|"returns 1"| f2_right
    f0_right -.->|"returns 0"| f2_right
```

<!-- slide -->
### Step 5: Resolving Intermediate Returns
Now the `f(2)` nodes have received both returns (`1` and `0`). They calculate `1 + 0 = 1` and pass this value up to their parent nodes.

```mermaid
graph TD
    classDef functionCall fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff,font-weight:bold,border-radius:8px;
    classDef baseCase fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,border-radius:8px;

    f4["f(4)"]:::functionCall
    f3["f(3)"]:::functionCall
    f2_right["f(2)"]:::functionCall
    f4 -->|"last = f(3)"| f3
    f4 -->|"slast = f(2)"| f2_right
    
    f2_left["f(2)"]:::functionCall
    f1_mid["f(1)"]:::baseCase
    f3 -->|"last = f(2)"| f2_left
    f3 -->|"slast = f(1)"| f1_mid
    
    f1_left["f(1)"]:::baseCase
    f0_left["f(0)"]:::baseCase
    f2_left -->|"last = f(1)"| f1_left
    f2_left -->|"slast = f(0)"| f0_left
    
    f1_right["f(1)"]:::baseCase
    f0_right["f(0)"]:::baseCase
    f2_right -->|"last = f(1)"| f1_right
    f2_right -->|"slast = f(0)"| f0_right

    f1_left -.->|"returns 1"| f2_left
    f0_left -.->|"returns 0"| f2_left
    f2_left -.->|"returns 1 + 0 = 1"| f3

    f1_mid -.->|"returns 1"| f3

    f1_right -.->|"returns 1"| f2_right
    f0_right -.->|"returns 0"| f2_right
    f2_right -.->|"returns 1 + 0 = 1"| f4
```

<!-- slide -->
### Step 6: Final Calculation
Finally, `f(3)` returns `1 + 1 = 2` back to `f(4)`. `f(4)` adds `2` (from `last`) and `1` (from `slast`) to return the final answer: `3`.

```mermaid
graph TD
    classDef functionCall fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff,font-weight:bold,border-radius:8px;
    classDef baseCase fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff,border-radius:8px;
    classDef returnVal fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff,stroke-dasharray: 5 5,border-radius:8px;

    f4["f(4)"]:::functionCall
    f3["f(3)"]:::functionCall
    f2_right["f(2)"]:::functionCall
    f4 -->|"last = f(3)"| f3
    f4 -->|"slast = f(2)"| f2_right
    
    f2_left["f(2)"]:::functionCall
    f1_mid["f(1)"]:::baseCase
    f3 -->|"last = f(2)"| f2_left
    f3 -->|"slast = f(1)"| f1_mid
    
    f1_left["f(1)"]:::baseCase
    f0_left["f(0)"]:::baseCase
    f2_left -->|"last = f(1)"| f1_left
    f2_left -->|"slast = f(0)"| f0_left
    
    f1_right["f(1)"]:::baseCase
    f0_right["f(0)"]:::baseCase
    f2_right -->|"last = f(1)"| f1_right
    f2_right -->|"slast = f(0)"| f0_right

    f1_left -.->|"returns 1"| f2_left
    f0_left -.->|"returns 0"| f2_left
    f2_left -.->|"returns 1 + 0 = 1"| f3

    f1_mid -.->|"returns 1"| f3
    f3 -.->|"returns 1 + 1 = 2"| f4

    f1_right -.->|"returns 1"| f2_right
    f0_right -.->|"returns 0"| f2_right
    f2_right -.->|"returns 1 + 0 = 1"| f4

    f4 -.->|"returns 2 + 1 = 3"| Result(["Result: 3"]):::returnVal
```
````
