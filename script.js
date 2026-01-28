// GLOBAL VARIABLES & STATE

let currentStudent = null;
let currentQuiz = null;
let quizTimer = null;
let timeRemaining = 300;

let landingPage, loginScreen, dashboard, landingLoginBtn, getStartedBtn;
let backToLandingBtn, loginForm, logoutBtn, loggedInUser, welcomeName;
let progressCardsContainer, activityList, learningModulesContainer;
let themeToggleBtns;

// TOPIC LINKS
const topicLinks = {
    "dsa": {
        "Sliding Window Technique": "https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4657/",
        "Two Pointer Technique": "https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4658/",
        "GCD (Euclidean Algorithm)": "https://cp-algorithms.com/algebra/euclid-algorithm.html",
        "Binary Search": "https://leetcode.com/explore/learn/card/binary-search/",
        "Recursion": "https://leetcode.com/explore/learn/card/recursion-i/"
    },
    "javascript": {
        "Variables & Data Types": "https://javascript.info/variables",
        "Functions": "https://javascript.info/function-basics",
        "Arrays & Objects": "https://javascript.info/object",
        "Closures": "https://javascript.info/closure",
        "Promises & Async/Await": "https://javascript.info/async"
    },
    "linear-algebra": {
        "Vectors": "https://www.mathsisfun.com/algebra/vectors.html",
        "Matrices": "https://www.mathsisfun.com/algebra/matrix-introduction.html",
        "Matrix Multiplication": "https://www.mathsisfun.com/algebra/matrix-multiplying.html",
        "Determinants": "https://www.mathsisfun.com/algebra/matrix-determinant.html",
        "Eigen Values & Vectors": "https://www.mathsisfun.com/algebra/eigenvalue.html"
    },
    "python": {
        "Variables & Data Types": "https://www.w3schools.com/python/python_variables.asp",
        "Control Structures": "https://www.w3schools.com/python/python_conditions.asp",
        "Functions": "https://www.w3schools.com/python/python_functions.asp",
        "Lists & Dictionaries": "https://www.w3schools.com/python/python_lists.asp",
        "Object-Oriented Programming": "https://www.w3schools.com/python/python_classes.asp"
    }
};

// Quiz data
const quizData = {
    "dsa": {
        "Sliding Window Technique": [
            {
                question: "Which type of problems is sliding window typically used for?",
                options: ["Array/string problems", "Graph problems", "Tree problems", "All of the above"],
                correctAnswer: 0,
                explanation: "Sliding window is mainly used for array/string problems with contiguous subarrays."
            },
            {
                question: "What is the time complexity of a typical sliding window algorithm?",
                options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
                correctAnswer: 0,
                explanation: "Sliding window achieves O(n) by avoiding nested loops through efficient window movement."
            },
            {
                question: "What principle does sliding window technique use?",
                options: ["Reuse previous computations", "Divide and conquer", "Greedy approach", "Dynamic programming"],
                correctAnswer: 0,
                explanation: "Sliding window reuses computations from previous windows to optimize performance."
            },
            {
                question: "Which of these is NOT a characteristic of sliding window problems?",
                options: ["Fixed window size", "Overlapping subproblems", "Contiguous elements", "Random access patterns"],
                correctAnswer: 3,
                explanation: "Sliding window deals with contiguous elements, not random access patterns."
            },
            {
                question: "When would you use a variable-size sliding window?",
                options: ["When looking for longest/shortest subarray meeting criteria", "When window size is fixed", "When data is sorted", "When using recursion"],
                correctAnswer: 0,
                explanation: "Variable-size windows are used for longest/shortest subarray problems."
            }
        ],
        "Two Pointer Technique": [
            {
                question: "Two pointer technique is most effective on:",
                options: ["Sorted arrays", "Unsorted arrays", "Linked lists", "All data structures"],
                correctAnswer: 0,
                explanation: "Two pointer technique works best on sorted arrays where pointers can move strategically."
            },
            {
                question: "What is a common use case for two pointers?",
                options: ["Finding pairs with given sum", "Sorting arrays", "Graph traversal", "Tree searches"],
                correctAnswer: 0,
                explanation: "Finding pairs with a given sum in sorted arrays is a classic two-pointer problem."
            },
            {
                question: "What time complexity does two pointer technique typically achieve?",
                options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
                correctAnswer: 0,
                explanation: "Two pointer technique often achieves O(n) by traversing the array only once."
            },
            {
                question: "Which pointer movement pattern is NOT used in two-pointer technique?",
                options: ["Both moving inward", "Both moving outward", "One moving faster", "Random movement"],
                correctAnswer: 3,
                explanation: "Two-pointer uses systematic movement patterns, not random movement."
            },
            {
                question: "What is a key advantage of two-pointer over brute force?",
                options: ["Reduced time complexity", "Simpler code", "Less memory usage", "Works on unsorted data"],
                correctAnswer: 0,
                explanation: "The main advantage is reducing time complexity from O(n²) to O(n)."
            }
        ],
        "GCD (Euclidean Algorithm)": [
            {
                question: "What does GCD stand for?",
                options: ["Greatest Common Divisor", "Greatest Common Denominator", "General Common Divisor", "Geometric Common Difference"],
                correctAnswer: 0,
                explanation: "GCD stands for Greatest Common Divisor."
            },
            {
                question: "What is the key principle of Euclidean algorithm?",
                options: ["gcd(a,b) = gcd(b, a mod b)", "gcd(a,b) = a*b/lcm(a,b)", "gcd(a,b) = min(a,b)", "Brute force checking"],
                correctAnswer: 0,
                explanation: "Euclidean algorithm uses gcd(a,b) = gcd(b, a mod b) recursively."
            },
            {
                question: "What is time complexity of Euclidean algorithm?",
                options: ["O(log min(a,b))", "O(min(a,b))", "O(a*b)", "O(n²)"],
                correctAnswer: 0,
                explanation: "Euclidean algorithm has O(log min(a,b)) time complexity."
            },
            {
                question: "What is extended Euclidean algorithm used for?",
                options: ["Finding coefficients x,y in ax+by=gcd(a,b)", "Finding LCM", "Prime factorization", "Modular inverse"],
                correctAnswer: 0,
                explanation: "Extended Euclidean algorithm finds coefficients for Bézout's identity."
            },
            {
                question: "What is gcd(0, a) where a > 0?",
                options: ["a", "0", "1", "Undefined"],
                correctAnswer: 0,
                explanation: "gcd(0, a) = a for any a > 0."
            }
        ],
        "Binary Search": [
            {
                question: "What is a prerequisite for binary search?",
                options: ["Sorted array", "Unsorted array", "Any array", "Linked list"],
                correctAnswer: 0,
                explanation: "Binary search requires the array to be sorted to work correctly."
            },
            {
                question: "What is the time complexity of binary search?",
                options: ["O(log n)", "O(n)", "O(n²)", "O(n log n)"],
                correctAnswer: 0,
                explanation: "Binary search halves the search space with each iteration, giving O(log n) complexity."
            },
            {
                question: "Which approach does binary search use?",
                options: ["Divide and conquer", "Greedy", "Dynamic programming", "Backtracking"],
                correctAnswer: 0,
                explanation: "Binary search uses divide and conquer by repeatedly dividing the search space in half."
            },
            {
                question: "What is the mid-point calculation in binary search?",
                options: ["mid = low + (high - low) / 2", "mid = (low + high) / 2", "mid = high / 2", "mid = low * 2"],
                correctAnswer: 0,
                explanation: "Using low + (high - low) / 2 prevents integer overflow."
            },
            {
                question: "When does binary search terminate?",
                options: ["When low > high", "When element is found", "Both A and B", "After n iterations"],
                correctAnswer: 2,
                explanation: "Binary search terminates either when the element is found or when search space is exhausted."
            }
        ],
        "Recursion": [
            {
                question: "What is the base case in recursion?",
                options: ["Condition to stop recursion", "First function call", "Last function call", "Recursive call"],
                correctAnswer: 0,
                explanation: "Base case provides the terminating condition to prevent infinite recursion."
            },
            {
                question: "What is recursion depth?",
                options: ["Number of recursive calls on stack", "Time complexity", "Space complexity", "Function parameters"],
                correctAnswer: 0,
                explanation: "Recursion depth refers to how many recursive calls are active on the call stack."
            },
            {
                question: "Which problem is NOT typically solved with recursion?",
                options: ["Tree traversal", "Fibonacci sequence", "Matrix multiplication", "Tower of Hanoi"],
                correctAnswer: 2,
                explanation: "Matrix multiplication is usually iterative; recursion is used for divide-and-conquer matrix multiplication."
            },
            {
                question: "What is tail recursion?",
                options: ["Recursive call is last operation", "First operation is recursive", "No base case", "Multiple recursive calls"],
                correctAnswer: 0,
                explanation: "Tail recursion occurs when the recursive call is the last operation in the function."
            },
            {
                question: "What can prevent stack overflow in recursion?",
                options: ["Proper base case", "Tail call optimization", "Both A and B", "Using loops"],
                correctAnswer: 2,
                explanation: "Both proper base case and tail call optimization help prevent stack overflow."
            }
        ]
    },
    "linear-algebra": {
        "Vectors": [
            {
                question: "A vector has both:",
                options: ["Magnitude and direction", "Only magnitude", "Only direction", "Neither"],
                correctAnswer: 0,
                explanation: "Vectors are defined by both magnitude (length) and direction."
            },
            {
                question: "What does the dot product of two vectors produce?",
                options: ["Scalar", "Vector", "Matrix", "Tensor"],
                correctAnswer: 0,
                explanation: "The dot product of two vectors produces a scalar value."
            },
            {
                question: "What is a unit vector?",
                options: ["Vector with magnitude 1", "Vector with magnitude 0", "Any vector", "Basis vector"],
                correctAnswer: 0,
                explanation: "A unit vector has a magnitude (length) of exactly 1."
            },
            {
                question: "What is the cross product of two vectors?",
                options: ["Another vector perpendicular to both", "A scalar value", "A matrix", "A complex number"],
                correctAnswer: 0,
                explanation: "Cross product produces a vector perpendicular to both input vectors."
            },
            {
                question: "What does vector normalization do?",
                options: ["Converts to unit vector", "Converts to zero vector", "Changes direction", "Rotates vector"],
                correctAnswer: 0,
                explanation: "Normalization converts a vector to a unit vector (magnitude 1) while preserving direction."
            }
        ],
        "Matrices": [
            {
                question: "What is a matrix?",
                options: ["A 2D array of numbers", "A 1D array", "A single number", "A vector"],
                correctAnswer: 0,
                explanation: "A matrix is a rectangular array of numbers arranged in rows and columns."
            },
            {
                question: "What is the order of a matrix?",
                options: ["Rows × Columns", "Columns × Rows", "Size × Size", "Length × Width"],
                correctAnswer: 0,
                explanation: "The order of a matrix is specified as rows × columns."
            },
            {
                question: "What is a square matrix?",
                options: ["Rows = Columns", "Rows > Columns", "Rows < Columns", "Any matrix"],
                correctAnswer: 0,
                explanation: "A square matrix has the same number of rows and columns."
            },
            {
                question: "What is an identity matrix?",
                options: ["Diagonal matrix with 1s on diagonal", "All zeros", "All ones", "Random numbers"],
                correctAnswer: 0,
                explanation: "Identity matrix has 1s on the main diagonal and 0s elsewhere."
            },
            {
                question: "What is matrix transposition?",
                options: ["Rows become columns", "Columns become rows", "Both A and B", "Rotating matrix 90 degrees"],
                correctAnswer: 2,
                explanation: "Transposition swaps rows with columns (Aᵀ[i][j] = A[j][i])."
            }
        ],
        "Matrix Multiplication": [
            {
                question: "What is required for matrix multiplication A × B?",
                options: ["Columns(A) = Rows(B)", "Rows(A) = Columns(B)", "Same dimensions", "Square matrices"],
                correctAnswer: 0,
                explanation: "Number of columns in A must equal number of rows in B for multiplication."
            },
            {
                question: "What is the result of multiplying m×n matrix with n×p matrix?",
                options: ["m×p matrix", "n×n matrix", "m×m matrix", "p×p matrix"],
                correctAnswer: 0,
                explanation: "Resulting matrix has dimensions: rows from first, columns from second."
            },
            {
                question: "Is matrix multiplication commutative?",
                options: ["No, AB ≠ BA generally", "Yes, always", "Only for square matrices", "Only for identity matrices"],
                correctAnswer: 0,
                explanation: "Matrix multiplication is not commutative in general (AB ≠ BA)."
            },
            {
                question: "What is associative property in matrix multiplication?",
                options: ["(AB)C = A(BC)", "AB = BA", "A(B+C) = AB + AC", "A⁻¹A = I"],
                correctAnswer: 0,
                explanation: "Matrix multiplication is associative: (AB)C = A(BC)."
            },
            {
                question: "What is distributive property of matrices?",
                options: ["A(B+C) = AB + AC", "AB = BA", "(AB)ᵀ = AᵀBᵀ", "A⁻¹A = I"],
                correctAnswer: 0,
                explanation: "Matrix multiplication distributes over addition: A(B+C) = AB + AC."
            }
        ],
        "Determinants": [
            {
                question: "What does determinant of a matrix represent?",
                options: ["Scaling factor of linear transformation", "Sum of elements", "Product of diagonals", "Trace of matrix"],
                correctAnswer: 0,
                explanation: "Determinant represents scaling factor of the linear transformation described by the matrix."
            },
            {
                question: "What is determinant of 2×2 matrix [[a,b],[c,d]]?",
                options: ["ad - bc", "a + d", "ab + cd", "ac - bd"],
                correctAnswer: 0,
                explanation: "For 2×2 matrix, determinant = ad - bc."
            },
            {
                question: "What does zero determinant indicate?",
                options: ["Matrix is singular", "Matrix is invertible", "Matrix is identity", "Matrix is symmetric"],
                correctAnswer: 0,
                explanation: "Zero determinant means matrix is singular (non-invertible)."
            },
            {
                question: "What is property of determinant under row swapping?",
                options: ["Changes sign", "Stays same", "Doubles", "Halves"],
                correctAnswer: 0,
                explanation: "Swapping two rows changes the sign of the determinant."
            },
            {
                question: "What is det(AB) for square matrices A and B?",
                options: ["det(A) × det(B)", "det(A) + det(B)", "det(A) - det(B)", "det(A)/det(B)"],
                correctAnswer: 0,
                explanation: "Determinant of product equals product of determinants: det(AB) = det(A)det(B)."
            }
        ],
        "Eigen Values & Vectors": [
            {
                question: "What is an eigenvector?",
                options: ["Vector that only scales when transformation applied", "Zero vector", "Any vector", "Basis vector"],
                correctAnswer: 0,
                explanation: "Eigenvector only gets scaled (not rotated) when linear transformation is applied."
            },
            {
                question: "What is eigenvalue?",
                options: ["Scaling factor for eigenvector", "Determinant", "Trace", "Matrix dimension"],
                correctAnswer: 0,
                explanation: "Eigenvalue is the factor by which eigenvector is scaled."
            },
            {
                question: "What equation defines eigenvalues?",
                options: ["Av = λv", "A = λI", "v = λA", "A² = λI"],
                correctAnswer: 0,
                explanation: "Eigenvalues satisfy Av = λv, where A is matrix, v is eigenvector, λ is eigenvalue."
            },
            {
                question: "What is characteristic equation for eigenvalues?",
                options: ["det(A - λI) = 0", "A + λI = 0", "A × λI = I", "tr(A) = Σλ"],
                correctAnswer: 0,
                explanation: "Eigenvalues λ satisfy det(A - λI) = 0, called characteristic equation."
            },
            {
                question: "What does multiplicity of eigenvalue mean?",
                options: ["Number of linearly independent eigenvectors", "Value of eigenvalue", "Size of matrix", "Determinant value"],
                correctAnswer: 0,
                explanation: "Multiplicity refers to number of linearly independent eigenvectors for that eigenvalue."
            }
        ]
    },
    "javascript": {
        "Variables & Data Types": [
            {
                question: "Which keyword declares a block-scoped constant?",
                options: ["const", "let", "var", "static"],
                correctAnswer: 0,
                explanation: "const declares a block-scoped constant that cannot be reassigned."
            },
            {
                question: "What does typeof null return?",
                options: ["object", "null", "undefined", "string"],
                correctAnswer: 0,
                explanation: "typeof null returns 'object' - this is a well-known JavaScript quirk."
            },
            {
                question: "Which is NOT a primitive data type in JavaScript?",
                options: ["Array", "String", "Number", "Boolean"],
                correctAnswer: 0,
                explanation: "Array is an object type, not a primitive data type."
            },
            {
                question: "What is the value of undefined == null?",
                options: ["true", "false", "undefined", "null"],
                correctAnswer: 0,
                explanation: "undefined == null returns true due to type coercion, but undefined === null returns false."
            },
            {
                question: "Which statement about let vs var is correct?",
                options: ["let has block scope, var has function scope", "let has function scope, var has block scope", "Both have global scope", "Both have block scope"],
                correctAnswer: 0,
                explanation: "let has block scope, while var has function scope."
            }
        ],
        "Functions": [
            {
                question: "What keyword is used to define a function?",
                options: ["function", "def", "fn", "func"],
                correctAnswer: 0,
                explanation: "The function keyword is used to define functions in JavaScript."
            },
            {
                question: "When were arrow functions introduced?",
                options: ["ES6", "ES5", "ES7", "ES8"],
                correctAnswer: 0,
                explanation: "Arrow functions were introduced in ES6 (ECMAScript 2015)."
            },
            {
                question: "In JavaScript, functions are:",
                options: ["First-class objects", "Second-class objects", "Special objects", "Primitives"],
                correctAnswer: 0,
                explanation: "Functions are first-class objects in JavaScript, meaning they can be passed as arguments, returned from functions, and assigned to variables."
            },
            {
                question: "What is a key difference between arrow functions and regular functions?",
                options: ["Arrow functions don't have their own 'this'", "Arrow functions can be used as constructors", "Arrow functions have arguments object", "Arrow functions can be named"],
                correctAnswer: 0,
                explanation: "Arrow functions don't have their own 'this' binding; they inherit 'this' from the surrounding scope."
            },
            {
                question: "What is function hoisting?",
                options: ["Function declarations are moved to the top of scope", "Functions are called automatically", "Functions are converted to arrow functions", "Functions are removed from code"],
                correctAnswer: 0,
                explanation: "Function declarations are hoisted - moved to the top of their containing scope during compilation."
            }
        ],
        "Arrays & Objects": [
            {
                question: "What method adds elements to end of array?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correctAnswer: 0,
                explanation: "push() adds elements to the end of an array."
            },
            {
                question: "How do you access object properties?",
                options: ["Dot notation or bracket notation", "Only dot notation", "Only bracket notation", "Arrow notation"],
                correctAnswer: 0,
                explanation: "Object properties can be accessed using dot notation (obj.property) or bracket notation (obj['property'])."
            },
            {
                question: "What does Array.map() do?",
                options: ["Creates new array with transformed elements", "Filters array elements", "Reduces array to single value", "Sorts array"],
                correctAnswer: 0,
                explanation: "map() creates a new array by applying a function to each element of the original array."
            },
            {
                question: "What is spread syntax (...) used for with arrays?",
                options: ["Copy or merge arrays", "Delete array elements", "Sort arrays", "Convert to object"],
                correctAnswer: 0,
                explanation: "Spread syntax can be used to copy arrays, merge arrays, or pass array elements as arguments."
            },
            {
                question: "What is object destructuring?",
                options: ["Extract values into variables", "Create new object", "Delete object properties", "Convert object to array"],
                correctAnswer: 0,
                explanation: "Object destructuring extracts values from objects into distinct variables."
            }
        ],
        "Closures": [
            {
                question: "What is a closure?",
                options: ["Function with access to parent scope", "Anonymous function", "Arrow function", "Callback function"],
                correctAnswer: 0,
                explanation: "A closure is a function that has access to variables from its outer (enclosing) scope even after that outer function has returned."
            },
            {
                question: "What is main benefit of closures?",
                options: ["Data encapsulation and privacy", "Faster execution", "Smaller file size", "Better syntax"],
                correctAnswer: 0,
                explanation: "Closures enable data encapsulation and creating private variables in JavaScript."
            },
            {
                question: "When is closure created?",
                options: ["When function is defined inside another function", "When function is called", "When function returns value", "When function is exported"],
                correctAnswer: 0,
                explanation: "Closure is created when a function is defined inside another function, capturing the outer function's variables."
            },
            {
                question: "What problem can closures help solve?",
                options: ["Creating private variables", "Memory leaks", "Slow performance", "Syntax errors"],
                correctAnswer: 0,
                explanation: "Closures can create private variables and functions that aren't accessible from outside."
            },
            {
                question: "What is a common use case for closures?",
                options: ["Module pattern and currying", "Array manipulation", "DOM event handling", "AJAX requests"],
                correctAnswer: 0,
                explanation: "Closures are used in module pattern, currying, and maintaining state in async operations."
            }
        ],
        "Promises & Async/Await": [
            {
                question: "What does a Promise represent?",
                options: ["Future value or operation", "Current value", "Synchronous operation", "Error handler"],
                correctAnswer: 0,
                explanation: "A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value."
            },
            {
                question: "What are Promise states?",
                options: ["Pending, fulfilled, rejected", "Started, running, finished", "Initial, processing, complete", "Open, closed, error"],
                correctAnswer: 0,
                explanation: "Promise has three states: pending, fulfilled (resolved), or rejected."
            },
            {
                question: "What does async keyword do?",
                options: ["Makes function return a Promise", "Makes function synchronous", "Creates callback", "Handles errors"],
                correctAnswer: 0,
                explanation: "async makes a function return a Promise, allowing use of await inside it."
            },
            {
                question: "What does await do?",
                options: ["Pauses execution until Promise settles", "Creates new Promise", "Throws error", "Converts to callback"],
                correctAnswer: 0,
                explanation: "await pauses the execution of an async function until the Promise settles, then returns the result."
            },
            {
                question: "What method handles Promise rejection?",
                options: ["catch()", "then()", "finally()", "resolve()"],
                correctAnswer: 0,
                explanation: "catch() method handles rejected promises (errors in async operations)."
            }
        ]
    },
    "python": {
        "Variables & Data Types": [
            {
                question: "How do you create a variable in Python?",
                options: ["x = 5", "let x = 5", "var x = 5", "int x = 5"],
                correctAnswer: 0,
                explanation: "Python variables are created by simply assigning a value using the = operator."
            },
            {
                question: "Which of these is a mutable data type in Python?",
                options: ["List", "Tuple", "String", "Integer"],
                correctAnswer: 0,
                explanation: "Lists are mutable, meaning they can be changed after creation."
            },
            {
                question: "How do you comment a single line in Python?",
                options: ["# This is a comment", "// This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
                correctAnswer: 0,
                explanation: "Python uses the # symbol for single-line comments."
            },
            {
                question: "What is the output of type(3.14)?",
                options: ["float", "int", "double", "decimal"],
                correctAnswer: 0,
                explanation: "3.14 is a floating-point number, so type() returns <class 'float'>."
            },
            {
                question: "Which of these is NOT a valid variable name in Python?",
                options: ["2variable", "_variable", "variable_name", "VariableName"],
                correctAnswer: 0,
                explanation: "Variable names cannot start with a number in Python."
            }
        ],
        "Control Structures": [
            {
                question: "What keyword starts a conditional statement in Python?",
                options: ["if", "when", "case", "check"],
                correctAnswer: 0,
                explanation: "if is used to start a conditional statement in Python."
            },
            {
                question: "How do you write a for loop that iterates 5 times?",
                options: ["for i in range(5):", "for (i=0; i<5; i++):", "for i in 5:", "loop 5 times:"],
                correctAnswer: 0,
                explanation: "for i in range(5): creates a loop that iterates 5 times (0 through 4)."
            },
            {
                question: "What is the purpose of the else clause in a while loop?",
                options: ["Executes when loop completes normally (no break)", "Executes if loop condition was false initially", "Executes on error", "Executes always"],
                correctAnswer: 0,
                explanation: "else clause in while loop executes when loop completes normally without encountering a break statement."
            },
            {
                question: "Which statement immediately exits a loop?",
                options: ["break", "continue", "exit", "return"],
                correctAnswer: 0,
                explanation: "break statement immediately exits the loop it's in."
            },
            {
                question: "What does the continue statement do in a loop?",
                options: ["Skips to next iteration", "Exits loop", "Restarts loop", "Pauses loop"],
                correctAnswer: 0,
                explanation: "continue skips the rest of current iteration and moves to the next iteration."
            }
        ],
        "Functions": [
            {
                question: "How do you define a function in Python?",
                options: ["def my_function():", "function my_function():", "func my_function():", "define my_function():"],
                correctAnswer: 0,
                explanation: "Functions in Python are defined using the def keyword."
            },
            {
                question: "What keyword is used to return a value from a function?",
                options: ["return", "break", "continue", "yield"],
                correctAnswer: 0,
                explanation: "The return statement is used to exit a function and return a value."
            },
            {
                question: "What is a lambda function?",
                options: ["A small anonymous function", "A large named function", "A recursive function", "An imported function"],
                correctAnswer: 0,
                explanation: "A lambda function is a small anonymous function defined with the lambda keyword."
            },
            {
                question: "What are *args used for in function definitions?",
                options: ["To pass variable number of positional arguments", "To pass keyword arguments", "To return multiple values", "To define default arguments"],
                correctAnswer: 0,
                explanation: "*args allows a function to accept any number of positional arguments."
            },
            {
                question: "What is function scope in Python?",
                options: ["Variables defined inside function are local", "All variables are global", "Variables can't be defined in functions", "Functions have no scope"],
                correctAnswer: 0,
                explanation: "Variables defined inside a function have local scope and cannot be accessed outside unless declared global."
            }
        ],
        "Lists & Dictionaries": [
            {
                question: "How do you create an empty list in Python?",
                options: ["list() or []", "new List()", "empty_list()", "[] only"],
                correctAnswer: 0,
                explanation: "Empty list can be created using list() or []."
            },
            {
                question: "What method adds an item to end of a list?",
                options: ["append()", "add()", "insert()", "push()"],
                correctAnswer: 0,
                explanation: "append() adds an item to the end of a list."
            },
            {
                question: "How do you access a value in a dictionary?",
                options: ["dict['key'] or dict.get('key')", "dict.key", "dict->key", "dict(key)"],
                correctAnswer: 0,
                explanation: "Dictionary values can be accessed using square brackets or the get() method."
            },
            {
                question: "What does list comprehension do?",
                options: ["Creates new list from existing iterable", "Sorts list", "Filters list", "Reverses list"],
                correctAnswer: 0,
                explanation: "List comprehension provides concise way to create lists from existing iterables."
            },
            {
                question: "How do you get all keys from a dictionary?",
                options: ["dict.keys()", "dict.get_keys()", "dict.key_list()", "dict.all_keys()"],
                correctAnswer: 0,
                explanation: "keys() method returns a view object containing dictionary keys."
            }
        ],
        "Object-Oriented Programming": [
            {
                question: "What keyword defines a class in Python?",
                options: ["class", "def", "struct", "object"],
                correctAnswer: 0,
                explanation: "The class keyword is used to define a new class in Python."
            },
            {
                question: "What is the __init__ method?",
                options: ["Constructor that initializes new object", "Destructor that cleans up object", "String representation method", "Comparison method"],
                correctAnswer: 0,
                explanation: "__init__ is the constructor method that initializes new objects of a class."
            },
            {
                question: "What does self refer to in class methods?",
                options: ["The instance of the class", "The class itself", "Parent class", "Module containing class"],
                correctAnswer: 0,
                explanation: "self refers to the instance of the class and is used to access instance variables and methods."
            },
            {
                question: "What is inheritance in OOP?",
                options: ["Creating new class from existing class", "Hiding implementation details", "Bundling data with methods", "Multiple forms of same method"],
                correctAnswer: 0,
                explanation: "Inheritance allows a new class to inherit attributes and methods from an existing class."
            },
            {
                question: "What is method overriding?",
                options: ["Redefining parent class method in child class", "Creating new method", "Hiding method", "Deleting method"],
                correctAnswer: 0,
                explanation: "Method overriding allows child class to provide specific implementation of a method already defined in parent class."
            }
        ]
    }
};

// Subject information
const subjects = {
    "dsa": {
        name: "Data Structures & Algorithms",
        icon: "fas fa-code",
        description: "Learn algorithms and data structures",
        color: "#4361ee"
    },
    "javascript": {
        name: "JavaScript",
        icon: "fab fa-js",
        description: "Master JavaScript programming from basics to advanced concepts",
        color: "#f0db4f",
        textColor: "#323330"
    },
    "linear-algebra": {
        name: "Linear Algebra",
        icon: "fas fa-square-root-alt",
        description: "Master vectors, matrices, and transformations with visual examples",
        color: "#3a0ca3"
    },
    "python": {
        name: "Python",
        icon: "fab fa-python",
        description: "Learn Python programming for data science and web development",
        color: "#3776ab"
    }
};

// Learning Modules data with subject mapping
const learningModules = [
    {
        id: "dsa-js",
        title: "DSA",
        subtitle: "Data Structures & Algorithms",
        description: "Master fundamental algorithms and data structures using interactive coding exercises and visualizations.",
        tags: ["Algorithms", "Data Structures", "Complexity Analysis"],
        color: "#4361ee",
        subjectId: "dsa"
    },
    {
        id: "linear-algebra",
        title: "Linear Algebra",
        subtitle: "Vectors, Matrices & Transformations",
        description: "Understand vectors, matrices, linear transformations, and their applications in computer graphics and machine learning.",
        tags: ["Vectors", "Matrices", "Transformations", "3D Graphics"],
        color: "#3a0ca3",
        subjectId: "linear-algebra"
    },
    {
        id: "javascript-fundamentals",
        title: "JavaScript",
        subtitle: "JavaScript Fundamentals & Modern ES6+",
        description: "Build a solid foundation in modern JavaScript programming including ES6+ features, DOM manipulation, and async programming.",
        tags: ["ES6+", "DOM", "Async Programming", "Web Development"],
        color: "#f0db4f",
        subjectId: "javascript",
        textColor: "#323330"
    },
    {
        id: "python-development",
        title: "Python",
        subtitle: "Python for Developers",
        description: "Learn Python programming for data science, web development, and automation with hands-on projects and exercises.",
        tags: ["Python", "Data Science", "Web Development", "Automation"],
        color: "#3776ab",
        subjectId: "python"
    }
];

// UTILITY FUNCTIONS

function showLoadingIndicator(container, message = "Loading...") {
    if (!container) {
        console.warn('showLoadingIndicator: Container not found');
        return;
    }

    try {
        container.innerHTML = `
            <div class="loading-indicator">
                <div class="loading-spinner"></div>
                <div class="loading-text">${message}</div>
            </div>
        `;
    } catch (error) {
        console.error('Error showing loading indicator:', error);
    }
}

function showUserError(message, duration = 5000) {
    try {
        const toast = document.createElement('div');
        toast.className = 'error-toast';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--danger);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
            z-index: 9999;
            max-width: 300px;
            animation: slideInRight 0.3s ease;
        `;

        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-exclamation-circle" style="font-size: 1.2rem;"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => toast.parentNode.removeChild(toast), 300);
            }
        }, duration);

        if (!document.querySelector('#toast-animations')) {
            const style = document.createElement('style');
            style.id = 'toast-animations';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    } catch (error) {
        console.error('Error showing user error:', error);
        alert(message);
    }
}

function showUserSuccess(message, duration = 3000) {
    try {
        const toast = document.createElement('div');
        toast.className = 'success-toast';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--success);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(74, 222, 128, 0.3);
            z-index: 9999;
            max-width: 300px;
            animation: slideInRight 0.3s ease;
        `;

        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => toast.parentNode.removeChild(toast), 300);
            }
        }, duration);
    } catch (error) {
        console.error('Error showing success message:', error);
    }
}

function handleLocalStorageError(error, operation) {
    console.error(`LocalStorage ${operation} error:`, error);

    if (error.name === 'QuotaExceededError') {
        showUserError('Storage limit reached. Some data may not be saved.');
        try {
            const keysToKeep = ['currentStudent', 'theme'];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (!keysToKeep.includes(key) && key.startsWith('student_progress_')) {
                    localStorage.removeItem(key);
                }
            }
            showUserSuccess('Cleaned up old data. Please try again.');
        } catch (cleanupError) {
            console.error('Error cleaning up localStorage:', cleanupError);
        }
    } else if (error.name === 'SecurityError') {
        showUserError('Security error accessing browser storage. Please check your settings.');
    } else {
        showUserError(`Error saving data: ${error.message}`);
    }
}

function safeParseJSON(jsonString, fallback = {}) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error('Failed to parse JSON:', e);
        return fallback;
    }
}

function isValidEmail(email) {
    try {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).trim());
    } catch (error) {
        console.error('Error validating email:', error);
        return false;
    }
}

function initializeDOMElements() {
    try {
        landingPage = document.getElementById('landing-page');
        loginScreen = document.getElementById('login-screen');
        dashboard = document.getElementById('dashboard');
        landingLoginBtn = document.getElementById('landing-login-btn');
        getStartedBtn = document.getElementById('get-started-btn');
        backToLandingBtn = document.getElementById('back-to-landing');
        loginForm = document.getElementById('login-form');
        logoutBtn = document.getElementById('logout-btn');
        loggedInUser = document.getElementById('logged-in-user');
        welcomeName = document.getElementById('welcome-name');
        progressCardsContainer = document.querySelector('.progress-cards');
        activityList = document.querySelector('.activity-list');
        learningModulesContainer = document.querySelector('.learning-modules-grid');
        themeToggleBtns = document.querySelectorAll('.btn-theme-toggle');

        return true;
    } catch (error) {
        console.error('Error initializing DOM elements:', error);
        return false;
    }
}

function initializeTheme() {
    try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            updateThemeIcons(true);
        } else {
            updateThemeIcons(false);
        }
    } catch (error) {
        console.error('Error initializing theme:', error);
    }
}

function toggleTheme() {
    try {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateThemeIcons(isDarkMode);
    } catch (error) {
        console.error('Error toggling theme:', error);
        showUserError('Could not change theme. Please try again.');
    }
}

function updateThemeIcons(isDarkMode) {
    try {
        if (!themeToggleBtns || themeToggleBtns.length === 0) return;

        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
                btn.title = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
            }
        });
    } catch (error) {
        console.error('Error updating theme icons:', error);
    }
}

function showLandingPage() {
    try {
        if (landingPage) landingPage.style.display = 'block';
        if (loginScreen) loginScreen.style.display = 'none';
        if (dashboard) dashboard.style.display = 'none';
    } catch (error) {
        console.error('Error showing landing page:', error);
    }
}

function showLoginScreen() {
    try {
        if (landingPage) landingPage.style.display = 'none';
        if (loginScreen) loginScreen.style.display = 'flex';
        if (dashboard) dashboard.style.display = 'none';

        if (loginForm) {
            loginForm.reset();
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(el => el.textContent = '');
        }
    } catch (error) {
        console.error('Error showing login screen:', error);
        showUserError('Could not load login screen. Please try again.');
    }
}

function getStudentStorageKey(email) {
    return `student_${email}`;
}

function saveProgressToLocalStorage() {
    if (!currentStudent || !currentStudent.email) return;
    const key = getStudentStorageKey(currentStudent.email);
    localStorage.setItem(key, JSON.stringify(currentStudent));
}

function loadStudentFromLocalStorage(email) {
    const key = getStudentStorageKey(email);
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : null;
}

function initializeStudentProgress(studentEmail) {
    try {
        const progress = {};

        for (const subjectId in subjects) {
            progress[subjectId] = {
                completedTopics: [],
                quizScores: {},
                overallProgress: 0,
                quizAttempted: false,
                lastAccessed: new Date().toISOString()
            };

            if (topicLinks[subjectId]) {
                for (const topic in topicLinks[subjectId]) {
                    progress[subjectId].quizScores[topic] = {
                        attempts: 0,
                        bestScore: 0,
                        lastScore: 0,
                        lastAttempt: null
                    };
                }
            }
        }

        localStorage.setItem(`student_progress_${studentEmail}`, JSON.stringify(progress));
        return progress;
    } catch (error) {
        console.error('Error initializing student progress:', error);
        handleLocalStorageError(error, 'initialization');
        return {};
    }
}

function getStudentProgress(studentEmail) {
    try {
        const savedProgress = localStorage.getItem(`student_progress_${studentEmail}`);
        if (savedProgress) {
            return safeParseJSON(savedProgress, null);
        }
        return null;
    } catch (error) {
        console.error('Error getting student progress:', error);
        handleLocalStorageError(error, 'retrieval');
        return null;
    }
}

function saveStudentProgress(studentEmail, progress) {
    try {
        localStorage.setItem(`student_progress_${studentEmail}`, JSON.stringify(progress));
    } catch (error) {
        console.error('Error saving student progress:', error);
        handleLocalStorageError(error, 'save');
    }
}

function addActivityToStudent(email, activityText, activityType = 'quiz') {
    try {
        const student = loadStudentFromLocalStorage(email);
        if (!student) return;

        if (!student.activities) {
            student.activities = [];
        }

        student.activities.unshift({
            text: activityText,
            type: activityType,
            timestamp: new Date().toISOString()
        });

        if (student.activities.length > 10) {
            student.activities = student.activities.slice(0, 10);
        }

        saveProgressToLocalStorage();
    } catch (error) {
        console.error('Error adding activity:', error);
    }
}

function updateStudentProgress(subjectId, topicName, score, timeTaken) {
    try {
        if (!currentStudent) {
            console.error('No current student found');
            return;
        }

        let studentProgress = getStudentProgress(currentStudent.email);
        if (!studentProgress) {
            studentProgress = initializeStudentProgress(currentStudent.email);
        }

        if (!studentProgress[subjectId]) {
            studentProgress[subjectId] = {
                completedTopics: [],
                quizScores: {},
                overallProgress: 0,
                quizAttempted: false,
                lastAccessed: new Date().toISOString()
            };
        }

        if (!studentProgress[subjectId].quizScores[topicName]) {
            studentProgress[subjectId].quizScores[topicName] = {
                attempts: 0,
                bestScore: 0,
                lastScore: 0,
                lastAttempt: null
            };
        }

        const topicScore = studentProgress[subjectId].quizScores[topicName];
        topicScore.attempts++;
        topicScore.lastScore = score;
        topicScore.lastAttempt = new Date().toISOString();

        if (score > topicScore.bestScore) {
            topicScore.bestScore = score;
        }

        if (!studentProgress[subjectId].quizAttempted) {
            studentProgress[subjectId].quizAttempted = true;
        }

        if (score >= 70 && !studentProgress[subjectId].completedTopics.includes(topicName)) {
            studentProgress[subjectId].completedTopics.push(topicName);
        }

        const totalTopics = 5;
        const completedTopics = studentProgress[subjectId].completedTopics.length;
        studentProgress[subjectId].overallProgress = Math.round((completedTopics / totalTopics) * 100);

        studentProgress[subjectId].lastAccessed = new Date().toISOString();

        saveStudentProgress(currentStudent.email, studentProgress);

        const activityMessage = `Scored ${score}% on ${topicName} quiz`;
        addActivityToStudent(currentStudent.email, activityMessage, 'quiz');

        renderProgressCards();
        renderLearningModules();
        renderRecentActivity();
    } catch (error) {
        console.error('Error updating student progress:', error);
        handleLocalStorageError(error, 'progress update');
    }
}

// handleLogin function
function handleLogin() {
    try {
        const studentName = document.getElementById('student-name')?.value.trim();
        const studentEmail = document.getElementById('student-email')?.value.trim();

        if (studentName === undefined || studentEmail === undefined) {
            console.error("Form elements missing from DOM");
            return;
        }

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        if (nameError) nameError.textContent = '';
        if (emailError) emailError.textContent = '';

        let isValid = true;

        if (!studentName) {
            if (nameError) nameError.textContent = 'Full name is required';
            isValid = false;
        } else if (studentName.length < 2) {
            if (nameError) nameError.textContent = 'Name must be at least 2 characters';
            isValid = false;
        } else if (studentName.length > 50) {
            if (nameError) nameError.textContent = 'Name must be less than 50 characters';
            isValid = false;
        }

        if (!studentEmail) {
            if (emailError) emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(studentEmail)) {
            if (emailError) emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const email = studentEmail;
        const name = studentName;

        const existingStudent = loadStudentFromLocalStorage(email);

        if (existingStudent) {
            currentStudent = existingStudent;
        } else {
            currentStudent = {
                name: name,
                email: email,
                activities: [],
                progress: []
            };

            initializeStudentProgress(email);
            saveProgressToLocalStorage();
        }

        try {
            localStorage.setItem('currentStudent', JSON.stringify(currentStudent));

            showUserSuccess(`Welcome back, ${studentName}!`);
            showDashboard();

        } catch (storageError) {
            console.error("Storage error during login:", storageError);
            handleLocalStorageError(storageError, 'login');
            showDashboard();
        }

    } catch (error) {
        console.error('Error during login:', error);
        showUserError('Login failed. Please try again.');
    }
}

function handleLogout() {
    try {
        localStorage.removeItem('currentStudent');
        currentStudent = null;

        showUserSuccess("Logged out successfully!");
        showLandingPage();
    } catch (error) {
        console.error('Error during logout:', error);
        showUserError('Logout failed. Please refresh the page.');
    }
}

function showDashboard() {
    try {
        if (!dashboard) {
            console.error("Dashboard element not found!");
            showUserError("Dashboard not available. Please refresh.");
            return;
        }

        if (landingPage) landingPage.style.display = 'none';
        if (loginScreen) loginScreen.style.display = 'none';
        if (dashboard) dashboard.style.display = 'block';

        if (loggedInUser && currentStudent) loggedInUser.textContent = currentStudent.name;
        if (welcomeName && currentStudent) welcomeName.textContent = currentStudent.name;

        renderLearningModules();
        renderProgressCards();
        renderRecentActivity();

        const freshLogoutBtn = document.getElementById('logout-btn');
        if (freshLogoutBtn) {
            freshLogoutBtn.addEventListener('click', handleLogout);
        }

    } catch (error) {
        console.error('Error showing dashboard:', error);
        showUserError('Could not load dashboard. Please try logging in again.');
        showLoginScreen();
    }
}

function getQuizAttempts(studentProgress, subjectId) {
    try {
        if (!studentProgress[subjectId]) return 0;

        if (studentProgress[subjectId].quizAttempted) {
            return 1;
        }

        if (studentProgress[subjectId].quizScores) {
            for (const topic in studentProgress[subjectId].quizScores) {
                if (studentProgress[subjectId].quizScores[topic].attempts > 0) {
                    return 1;
                }
            }
        }

        return 0;
    } catch (error) {
        console.error('Error getting quiz attempts:', error);
        return 0;
    }
}

function renderLearningModules() {
    if (!learningModulesContainer) {
        console.error("Learning modules container not found!");
        return;
    }

    try {
        learningModulesContainer.innerHTML = '';

        if (!currentStudent) {
            showLoadingIndicator(learningModulesContainer, "Please log in to view modules");
            return;
        }

        const studentProgress = getStudentProgress(currentStudent.email);

        learningModules.forEach(module => {
            try {
                const subject = subjects[module.subjectId];
                if (!subject) {
                    console.warn(`Subject not found for module: ${module.subjectId}`);
                    return;
                }

                const moduleCard = document.createElement('div');
                moduleCard.className = 'learning-module-card';
                moduleCard.style.borderLeftColor = module.color;
                moduleCard.dataset.moduleId = module.id;
                moduleCard.dataset.subjectId = module.subjectId;

                const tagsHTML = module.tags.map(tag =>
                    `<span class="module-tag">${tag}</span>`
                ).join('');

                const subjectProgress = studentProgress?.[module.subjectId];
                const completedTopics = subjectProgress?.completedTopics?.length || 0;
                const totalTopics = 5;
                const progressPercent = Math.round((completedTopics / totalTopics) * 100);

                moduleCard.innerHTML = `
                    <div class="module-card-header">
                        <h4>${module.title}</h4>
                        <div class="module-subtitle">${module.subtitle}</div>
                    </div>
                    <div class="module-description">
                        ${module.description}
                    </div>
                    <div class="module-tags">
                        ${tagsHTML}
                    </div>
                    <div class="module-stats">
                        <div class="module-stat">
                            <i class="fas fa-check-circle"></i>
                            <span>${completedTopics}/${totalTopics} Topics</span>
                        </div>
                        <div class="module-stat">
                            <i class="fas fa-chart-line"></i>
                            <span>${progressPercent}% Complete</span>
                        </div>
                    </div>
                `;

                learningModulesContainer.appendChild(moduleCard);

                moduleCard.addEventListener('click', function (event) {
                    if (event.target.closest('.module-tag') || event.target.closest('.module-stat')) {
                        return;
                    }

                    try {
                        const subjectId = this.dataset.subjectId;
                        const moduleId = this.dataset.moduleId;
                        openTopicModal(subjectId, moduleId);
                    } catch (error) {
                        console.error('Error opening topic modal:', error);
                        showUserError('Could not open topics. Please try again.');
                    }
                });

            } catch (error) {
                console.error(`Error rendering module ${module?.title || 'unknown'}:`, error);
            }
        });

    } catch (error) {
        console.error('Error rendering learning modules:', error);
        learningModulesContainer.innerHTML = '<div class="error-message">Error loading modules. Please refresh.</div>';
    }
}

function renderProgressCards() {
    if (!progressCardsContainer) {
        console.error("Progress cards container not found!");
        return;
    }

    try {
        progressCardsContainer.innerHTML = '';

        if (!currentStudent) {
            showLoadingIndicator(progressCardsContainer, "Please log in to view progress");
            return;
        }

        const studentProgress = getStudentProgress(currentStudent.email);
        if (!studentProgress) {
            showLoadingIndicator(progressCardsContainer, "No progress data found");
            return;
        }

        for (const subjectId in subjects) {
            try {
                const subject = subjects[subjectId];
                if (!subject) continue;

                const progress = studentProgress[subjectId] || { overallProgress: 0 };
                const progressPercent = progress.overallProgress || 0;

                const progressCard = document.createElement('div');
                progressCard.className = 'progress-card';
                progressCard.innerHTML = `
                    <div class="progress-card-header">
                        <div class="progress-card-title">${subject.name}</div>
                        <div class="progress-percentage">${progressPercent}%</div>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%; background-color: ${subject.color};"></div>
                        </div>
                    </div>
                    <div class="progress-stats">
                        <!-- UPDATED: Changed from 8 to 5 topics -->
                        <span>${Math.round(progressPercent / 100 * 5)}/5 Topics</span>
                        <span>${getQuizAttempts(studentProgress, subjectId)} quizzes taken</span>
                    </div>
                `;

                progressCardsContainer.appendChild(progressCard);
            } catch (error) {
                console.error(`Error rendering progress card for ${subjectId}:`, error);
            }
        }

    } catch (error) {
        console.error('Error rendering progress cards:', error);
        progressCardsContainer.innerHTML = '<div class="error-message">Error loading progress. Please refresh.</div>';
    }
}

function getTimeAgo(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) === 1 ? '' : 's'} ago`;
    return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) === 1 ? '' : 's'} ago`;
}

function renderRecentActivity() {
    if (!activityList) {
        console.warn("Activity list element not found!");
        return;
    }

    try {
        activityList.innerHTML = '';

        if (!currentStudent) {
            showLoadingIndicator(activityList, "Please log in to view activity");
            return;
        }

        const studentProgress = getStudentProgress(currentStudent.email);
        const studentData = loadStudentFromLocalStorage(currentStudent.email);

        if (!studentProgress && !studentData) {
            showLoadingIndicator(activityList, "No activity data found");
            return;
        }

        const activities = [];

        if (studentData && studentData.activities && Array.isArray(studentData.activities)) {
            studentData.activities.forEach(activity => {
                try {
                    const activityDate = new Date(activity.timestamp);
                    const timeAgo = getTimeAgo(activityDate);

                    let icon = 'fa-check-circle';
                    if (activity.type === 'quiz') icon = 'fa-question-circle';
                    if (activity.type === 'topic') icon = 'fa-book';

                    activities.push({
                        icon: icon,
                        text: activity.text,
                        time: timeAgo,
                        date: activityDate
                    });
                } catch (error) {
                    console.error('Error processing student activity:', error);
                }
            });
        }

        if (studentProgress) {
            for (const subjectId in studentProgress) {
                const subject = subjects[subjectId];
                if (!subject) continue;

                const progress = studentProgress[subjectId];

                if (progress.quizScores && typeof progress.quizScores === 'object') {
                    for (const topic in progress.quizScores) {
                        const scoreData = progress.quizScores[topic];
                        if (scoreData && scoreData.attempts > 0 && scoreData.lastAttempt) {
                            try {
                                const lastAttempt = new Date(scoreData.lastAttempt);
                                const timeAgo = getTimeAgo(lastAttempt);

                                let icon = 'fa-check-circle';
                                let message = `Scored ${scoreData.lastScore}% on ${topic} quiz`;

                                if (scoreData.lastScore >= 90) {
                                    icon = 'fa-trophy';
                                    message = `Excelled in ${topic} quiz (${scoreData.lastScore}%)`;
                                } else if (scoreData.lastScore >= 70) {
                                    icon = 'fa-star';
                                    message = `Passed ${topic} quiz (${scoreData.lastScore}%)`;
                                }

                                activities.push({
                                    icon,
                                    text: message,
                                    time: timeAgo,
                                    date: lastAttempt
                                });
                            } catch (error) {
                                console.error(`Error processing quiz score for ${topic}:`, error);
                            }
                        }
                    }
                }

                if (progress.completedTopics && Array.isArray(progress.completedTopics) && progress.completedTopics.length > 0) {
                    const lastTopic = progress.completedTopics[progress.completedTopics.length - 1];
                    try {
                        activities.push({
                            icon: 'fa-check-circle',
                            text: `Completed "${lastTopic}" topic`,
                            time: 'Recently',
                            date: new Date()
                        });
                    } catch (error) {
                        console.error('Error adding topic completion activity:', error);
                    }
                }

                if (progress.lastAccessed) {
                    try {
                        const lastAccess = new Date(progress.lastAccessed);
                        const timeAgo = getTimeAgo(lastAccess);

                        activities.push({
                            icon: 'fa-book-open',
                            text: `Studied ${subject.name}`,
                            time: timeAgo,
                            date: lastAccess
                        });
                    } catch (error) {
                        console.error('Error processing lastAccessed date:', error);
                    }
                }
            }
        }

        activities.sort((a, b) => b.date - a.date);
        const recentActivities = activities.slice(0, 5);

        if (recentActivities.length === 0) {
            activityList.innerHTML = `
                <div class="activity-item">
                    <i class="fas fa-info-circle"></i>
                    <span>No recent activity. Start learning to see your progress here!</span>
                    <small>Just now</small>
                </div>
            `;
            return;
        }

        recentActivities.forEach(activity => {
            try {
                const activityItem = document.createElement('div');
                activityItem.className = 'activity-item';
                activityItem.innerHTML = `
                    <i class="fas ${activity.icon}"></i>
                    <span>${activity.text}</span>
                    <small>${activity.time}</small>
                `;
                activityList.appendChild(activityItem);
            } catch (error) {
                console.error('Error rendering activity item:', error);
            }
        });

    } catch (error) {
        console.error('Error rendering recent activity:', error);
        activityList.innerHTML = '<div class="error-message">Error loading activity. Please refresh.</div>';
    }
}

function openTopicModal(subjectId, moduleId) {
    try {
        const subject = subjects[subjectId];
        const topics = topicLinks[subjectId];

        if (!subject || !topics) {
            console.error("Subject or topics not found for:", subjectId);
            showUserError("Topics not available for this subject.");
            return;
        }

        let studentProgress = null;
        if (currentStudent) {
            studentProgress = getStudentProgress(currentStudent.email);
        }

        if (!studentProgress) {
            showUserError("Could not load your progress data.");
            return;
        }

        const modalTitle = document.getElementById('modal-title');
        if (modalTitle) {
            modalTitle.textContent = `${subject.name} Topics`;
        }

        const topicsList = document.querySelector('.topics-list');
        if (!topicsList) {
            console.error("Topics list element not found!");
            showUserError("Could not load topics list.");
            return;
        }

        topicsList.innerHTML = '';

        for (const topicName in topics) {
            try {
                const topicProgress = studentProgress[subjectId] || { completedTopics: [] };
                const isCompleted = topicProgress.completedTopics && topicProgress.completedTopics.includes(topicName);
                const hasQuiz = quizData[subjectId] && quizData[subjectId][topicName];

                const topicCard = document.createElement('div');
                topicCard.className = 'topic-card';
                topicCard.innerHTML = `
                    <div class="topic-header">
                        <h4>${topicName}</h4>
                        <span class="topic-status ${isCompleted ? 'completed' : ''}">
                            ${isCompleted ? 'Completed' : 'Not Started'}
                        </span>
                    </div>
                    <div class="topic-actions">
                        <a href="${topics[topicName]}" target="_blank" class="btn btn-primary external-link" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Learn
                        </a>
                        ${hasQuiz ? `
                        <button class="btn btn-success start-quiz" data-subject="${subjectId}" data-topic="${topicName}">
                            <i class="fas fa-play-circle"></i> Take Quiz
                        </button>
                        ` : ''}
                    </div>
                `;

                topicsList.appendChild(topicCard);
            } catch (error) {
                console.error(`Error creating topic card for ${topicName}:`, error);
            }
        }

        const topicModal = document.getElementById('topic-modal');
        if (topicModal) {
            topicModal.style.display = 'flex';
        }

        document.querySelectorAll('.start-quiz').forEach(button => {
            button.addEventListener('click', function () {
                try {
                    const subject = this.dataset.subject;
                    const topic = this.dataset.topic;
                    startQuiz(subject, topic);
                    const topicModal = document.getElementById('topic-modal');
                    if (topicModal) topicModal.style.display = 'none';
                } catch (error) {
                    console.error('Error starting quiz:', error);
                    showUserError('Could not start quiz. Please try again.');
                }
            });
        });

    } catch (error) {
        console.error('Error opening topic modal:', error);
        showUserError('Could not load topics. Please try again.');
    }
}

function startQuiz(subjectId, topicName) {
    try {
        if (!quizData[subjectId] || !quizData[subjectId][topicName]) {
            showUserError('No quiz available for this topic yet.');
            return;
        }

        currentQuiz = {
            subjectId: subjectId,
            topicName: topicName,
            questions: [...quizData[subjectId][topicName]],
            currentQuestionIndex: 0,
            userAnswers: new Array(quizData[subjectId][topicName].length).fill(null),
            startTime: new Date(),
            timeTaken: 0,
            score: 0,
            showFeedback: false,
            questionResults: []
        };

        timeRemaining = 300;
        updateTimerDisplay();

        const quizTitle = document.getElementById('quiz-title');
        if (quizTitle) quizTitle.textContent = `${topicName} Quiz`;

        const totalQuestions = document.getElementById('total-questions');
        if (totalQuestions) totalQuestions.textContent = currentQuiz.questions.length;

        const explanation = document.getElementById('quiz-explanation');
        if (explanation) explanation.style.display = 'none';

        const questionBreakdown = document.getElementById('question-breakdown');
        if (questionBreakdown) questionBreakdown.style.display = 'none';

        startQuizTimer();
        loadQuestion(0);

        const quizModal = document.getElementById('quiz-modal');
        if (quizModal) quizModal.style.display = 'flex';

        showUserSuccess(`Starting ${topicName} quiz. Good luck!`);
    } catch (error) {
        console.error('Error starting quiz:', error);
        showUserError('Could not start quiz. Please try again.');
    }
}

function startQuizTimer() {
    try {
        if (quizTimer) clearInterval(quizTimer);

        quizTimer = setInterval(() => {
            try {
                timeRemaining--;
                updateTimerDisplay();

                if (timeRemaining <= 0) {
                    stopQuizTimer();
                    submitQuiz();
                    showUserError('Time is up! Quiz submitted automatically.');
                }
            } catch (error) {
                console.error('Error in quiz timer:', error);
            }
        }, 1000);
    } catch (error) {
        console.error('Error starting quiz timer:', error);
    }
}

function stopQuizTimer() {
    try {
        if (quizTimer) {
            clearInterval(quizTimer);
            quizTimer = null;
        }
    } catch (error) {
        console.error('Error stopping quiz timer:', error);
    }
}

function updateTimerDisplay() {
    try {
        const timerElement = document.getElementById('timer');
        if (!timerElement) return;

        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining < 60) {
            timerElement.style.color = '#ef4444';
        } else if (timeRemaining < 120) {
            timerElement.style.color = '#f59e0b';
        } else {
            timerElement.style.color = '';
        }
    } catch (error) {
        console.error('Error updating timer display:', error);
    }
}

function loadQuestion(index) {
    try {
        if (!currentQuiz || index < 0 || index >= currentQuiz.questions.length) return;

        currentQuiz.currentQuestionIndex = index;
        const question = currentQuiz.questions[index];

        const progressPercent = ((index + 1) / currentQuiz.questions.length) * 100;
        const progressFill = document.getElementById('quiz-progress-fill');
        if (progressFill) progressFill.style.width = `${progressPercent}%`;

        const currentQuestionElement = document.getElementById('current-question');
        if (currentQuestionElement) currentQuestionElement.textContent = index + 1;

        const quizContainer = document.querySelector('.quiz-container');
        if (!quizContainer) return;

        const currentAnswer = currentQuiz.userAnswers[index];

        quizContainer.innerHTML = `
            <div class="quiz-question">
                <h4>${question.question}</h4>
                <div class="quiz-options">
                    ${question.options.map((option, i) => {
            const isSelected = currentAnswer === i;

            return `
                            <div class="option ${isSelected ? 'selected' : ''}" 
                                 data-index="${i}">
                                <div class="option-radio"></div>
                                <div class="option-label">${option}</div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-quiz-btn');

        if (prevBtn) prevBtn.style.display = index === 0 ? 'none' : 'inline-flex';
        if (nextBtn) nextBtn.style.display = index === currentQuiz.questions.length - 1 ? 'none' : 'inline-flex';
        if (submitBtn) submitBtn.style.display = index === currentQuiz.questions.length - 1 ? 'inline-flex' : 'none';

        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function () {
                try {
                    const selectedIndex = parseInt(this.dataset.index);

                    document.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });

                    this.classList.add('selected');
                    currentQuiz.userAnswers[currentQuiz.currentQuestionIndex] = selectedIndex;

                } catch (error) {
                    console.error('Error handling option click:', error);
                }
            });
        });
    } catch (error) {
        console.error('Error loading question:', error);
        showUserError('Error loading question. Please try again.');
    }
}

function submitQuiz() {
    try {
        stopQuizTimer();

        if (!currentQuiz) return;

        const unansweredQuestions = [];
        for (let i = 0; i < currentQuiz.questions.length; i++) {
            if (currentQuiz.userAnswers[i] === null) {
                unansweredQuestions.push(i + 1);
            }
        }

        if (unansweredQuestions.length > 0) {
            const confirmSubmit = confirm(`You haven't answered questions: ${unansweredQuestions.join(', ')}. Submit anyway?`);
            if (!confirmSubmit) {
                loadQuestion(unansweredQuestions[0] - 1);
                return;
            }
        }

        currentQuiz.questionResults = [];
        let correctCount = 0;

        for (let i = 0; i < currentQuiz.questions.length; i++) {
            const question = currentQuiz.questions[i];
            const userAnswer = currentQuiz.userAnswers[i];
            const isCorrect = userAnswer === question.correctAnswer;

            if (isCorrect) correctCount++;

            currentQuiz.questionResults.push({
                question: question.question,
                options: question.options,
                userAnswer: userAnswer,
                correctAnswer: question.correctAnswer,
                isCorrect: isCorrect,
                explanation: question.explanation
            });
        }

        const score = Math.round((correctCount / currentQuiz.questions.length) * 100);
        const timeTaken = 300 - timeRemaining;

        updateStudentProgress(currentQuiz.subjectId, currentQuiz.topicName, score, timeTaken);
        showQuizResults(score, correctCount, currentQuiz.questions.length, timeTaken);

        const quizModal = document.getElementById('quiz-modal');
        if (quizModal) quizModal.style.display = 'none';
    } catch (error) {
        console.error('Error submitting quiz:', error);
        showUserError('Error submitting quiz. Please try again.');
    }
}

function showQuizResults(score, correct, total, timeTaken) {
    try {
        const resultScore = document.getElementById('result-score');
        if (resultScore) {
            resultScore.textContent = `${score}%`;

            resultScore.classList.remove('excellent', 'good', 'needs-improvement');

            if (score >= 90) {
                resultScore.classList.add('excellent');
            } else if (score >= 70) {
                resultScore.classList.add('good');
            } else {
                resultScore.classList.add('needs-improvement');
            }
        }

        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        const timeTakenElement = document.getElementById('time-taken');
        if (timeTakenElement) {
            timeTakenElement.textContent =
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        let message = '';
        let iconClass = '';

        if (score >= 90) {
            message = 'Excellent! You have mastered this topic! 🎉';
            iconClass = 'fas fa-trophy';
        } else if (score >= 70) {
            message = 'Good job! You have a solid understanding. 👍';
            iconClass = 'fas fa-star';
        } else if (score >= 50) {
            message = 'Not bad, but you might want to review the material. 📚';
            iconClass = 'fas fa-book';
        } else {
            message = 'Keep practicing! Review the learning materials and try again. 💪';
            iconClass = 'fas fa-redo';
        }

        const resultMessage = document.getElementById('result-message');
        const resultIcon = document.querySelector('.result-icon i');

        if (resultMessage) resultMessage.textContent = message;
        if (resultIcon) resultIcon.className = iconClass;

        renderQuestionBreakdown();

        const retakeQuizBtn = document.getElementById('retake-quiz');
        if (retakeQuizBtn) {
            retakeQuizBtn.onclick = () => {
                const resultsModal = document.getElementById('results-modal');
                if (resultsModal) resultsModal.style.display = 'none';
                startQuiz(currentQuiz.subjectId, currentQuiz.topicName);
            };
        }

        const backToTopicsBtn = document.getElementById('back-to-topics');
        if (backToTopicsBtn) {
            backToTopicsBtn.onclick = () => {
                const resultsModal = document.getElementById('results-modal');
                if (resultsModal) resultsModal.style.display = 'none';
                openTopicModal(currentQuiz.subjectId);
            };
        }

        const backToDashboardBtn = document.getElementById('back-to-dashboard');
        if (backToDashboardBtn) {
            backToDashboardBtn.onclick = () => {
                const resultsModal = document.getElementById('results-modal');
                if (resultsModal) resultsModal.style.display = 'none';
            };
        }

        const resultsModal = document.getElementById('results-modal');
        if (resultsModal) {
            resultsModal.style.display = 'flex';
        }

        showUserSuccess(`Quiz completed! Final score: ${score}%`, 3000);
    } catch (error) {
        console.error('Error showing quiz results:', error);
        showUserError('Error showing quiz results. Please try again.');
    }
}

function renderQuestionBreakdown() {
    try {
        const breakdownContainer = document.getElementById('question-breakdown');
        if (!breakdownContainer) return;

        breakdownContainer.innerHTML = '';

        const breakdownTitle = document.createElement('h3');
        breakdownTitle.textContent = 'Question Breakdown';
        breakdownTitle.style.cssText = `
            font-size: 1.5rem;
            margin: 0 0 25px 0;
            color: var(--dark);
            border-bottom: 2px solid var(--primary);
            padding-bottom: 10px;
        `;
        breakdownContainer.appendChild(breakdownTitle);

        currentQuiz.questionResults.forEach((result, index) => {
            const questionNumber = index + 1;
            const userAnswerText = result.userAnswer !== null ?
                result.options[result.userAnswer] : 'Not answered';
            const correctAnswerText = result.options[result.correctAnswer];

            let userAnswerStatus = 'Not answered';
            let userAnswerClass = '';
            let statusIcon = '';

            if (result.userAnswer !== null) {
                if (result.isCorrect) {
                    userAnswerStatus = 'Correct ✅';
                    userAnswerClass = 'correct';
                    statusIcon = '✅';
                } else {
                    userAnswerStatus = 'Incorrect ❌';
                    userAnswerClass = 'incorrect';
                    statusIcon = '❌';
                }
            }

            const breakdownItem = document.createElement('div');
            breakdownItem.className = 'breakdown-item';
            breakdownItem.innerHTML = `
                <h4>Question ${questionNumber}: ${result.question}</h4>
                <div class="breakdown-details">
                    <div class="breakdown-answer user-answer ${userAnswerClass}">
                        <span class="answer-label">Your answer:</span>
                        <span class="answer-text">${userAnswerText}</span>
                        <span class="answer-status">${userAnswerStatus}</span>
                    </div>
                    <div class="breakdown-answer correct-answer">
                        <span class="answer-label">Correct answer:</span>
                        <span class="answer-text">${correctAnswerText}</span>
                        <span class="answer-status">Correct ✅</span>
                    </div>
                </div>
                <div class="breakdown-explanation">
                    <i class="fas fa-lightbulb"></i>
                    <strong>Explanation:</strong> ${result.explanation}
                </div>
            `;

            breakdownContainer.appendChild(breakdownItem);
        });

        breakdownContainer.style.display = 'block';

    } catch (error) {
        console.error('Error rendering question breakdown:', error);
    }
}

function setupEventListeners() {
    try {
        if (themeToggleBtns && themeToggleBtns.length > 0) {
            themeToggleBtns.forEach(btn => {
                btn.addEventListener('click', toggleTheme);
            });
        }

        if (landingLoginBtn) {
            landingLoginBtn.addEventListener('click', function () {
                showLoginScreen();
            });
        }

        if (getStartedBtn) {
            getStartedBtn.addEventListener('click', function () {
                showLoginScreen();
            });
        }

        if (backToLandingBtn) {
            backToLandingBtn.addEventListener('click', function () {
                showLandingPage();
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();
                handleLogin();
            });
        } else {
            console.error("Login form not found!");
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }

        const closeModalButtons = document.querySelectorAll('.close-modal');
        if (closeModalButtons.length > 0) {
            closeModalButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const topicModal = document.getElementById('topic-modal');
                    if (topicModal) topicModal.style.display = 'none';
                });
            });
        }

        const closeResultsButton = document.querySelector('.close-results');
        if (closeResultsButton) {
            closeResultsButton.addEventListener('click', () => {
                const resultsModal = document.getElementById('results-modal');
                if (resultsModal) resultsModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            try {
                const topicModal = document.getElementById('topic-modal');
                const quizModal = document.getElementById('quiz-modal');
                const resultsModal = document.getElementById('results-modal');

                if (e.target === topicModal && topicModal) {
                    topicModal.style.display = 'none';
                }
                if (e.target === quizModal && quizModal) {
                    quizModal.style.display = 'none';
                    stopQuizTimer();
                }
                if (e.target === resultsModal && resultsModal) {
                    resultsModal.style.display = 'none';
                }
            } catch (error) {
                console.error('Error handling modal click:', error);
            }
        });

        document.addEventListener('click', function (e) {
            const externalLink = e.target.closest('.external-link');
            if (externalLink && externalLink.href && externalLink.target === '_blank') {
                e.preventDefault();

                try {
                    externalLink.classList.add('loading');
                    showUserSuccess('Opening external resource...', 2000);

                    setTimeout(() => {
                        try {
                            window.open(externalLink.href, '_blank', 'noopener,noreferrer');
                        } catch (error) {
                            console.error('Error opening external link:', error);
                            showUserError('Could not open link. Please try again.');
                        } finally {
                            externalLink.classList.remove('loading');
                        }
                    }, 500);
                } catch (error) {
                    console.error('Error handling external link click:', error);
                    externalLink.classList.remove('loading');
                    window.open(externalLink.href, '_blank', 'noopener,noreferrer');
                }
            }
        });

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-quiz-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                if (!currentQuiz || currentQuiz.currentQuestionIndex <= 0) return;
                loadQuestion(currentQuiz.currentQuestionIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                if (!currentQuiz) return;

                const currentIndex = currentQuiz.currentQuestionIndex;
                if (currentIndex < currentQuiz.questions.length - 1) {
                    loadQuestion(currentIndex + 1);
                }
            });
        }

        if (submitBtn) {
            submitBtn.addEventListener('click', function () {
                if (currentQuiz) {
                    submitQuiz();
                }
            });
        }

    } catch (error) {
        console.error('Error setting up event listeners:', error);
        showUserError('Some features may not work properly. Please refresh the page.');
    }
}

function checkBrowserCompatibility() {
    const requiredFeatures = [
        'localStorage',
        'addEventListener'
    ];

    const missingWindowFeatures = requiredFeatures.filter(feature => !window[feature]);

    let missingDOMFeatures = [];
    try {
        const testElement = document.createElement('div');

        if (!document.querySelector) {
            missingDOMFeatures.push('querySelector');
        }

        if (!testElement.classList) {
            missingDOMFeatures.push('classList');
        }
    } catch (error) {
        console.error('Error checking DOM features:', error);
        missingDOMFeatures = ['querySelector', 'classList'];
    }

    const allMissingFeatures = [...missingWindowFeatures, ...missingDOMFeatures];

    if (allMissingFeatures.length > 0) {
        console.warn('Missing browser features:', allMissingFeatures);

        if (missingWindowFeatures.includes('localStorage') || missingWindowFeatures.includes('addEventListener')) {
            console.error("Critical browser features missing. Application may not work properly.");
        }
    }
}

window.addEventListener('online', () => {
    showUserSuccess('You are back online!', 2000);
});

window.addEventListener('offline', () => {
    showUserError('You are offline. Some features may not work.', 5000);
});

document.addEventListener('visibilitychange', () => {
    const quizModal = document.getElementById('quiz-modal');
    if (document.hidden && quizModal && quizModal.style.display === 'flex') {
        showUserError('Quiz timer paused (tab not visible)', 2000);
    } else if (!document.hidden && quizModal && quizModal.style.display === 'flex') {
        showUserSuccess('Quiz timer resumed', 2000);
    }
});

window.addEventListener('beforeunload', (e) => {
    const quizModal = document.getElementById('quiz-modal');
    if (quizModal && quizModal.style.display === 'flex') {
        e.preventDefault();
        e.returnValue = 'You have a quiz in progress. Are you sure you want to leave?';
        return e.returnValue;
    }
});

function initializeApplication() {
    try {
        const domInitialized = initializeDOMElements();
        if (!domInitialized) {
            console.error("Failed to initialize DOM elements");
            showUserError("Failed to load application. Please refresh the page.");
            return;
        }

        checkBrowserCompatibility();
        initializeTheme();

        const savedStudent = localStorage.getItem('currentStudent');

        if (savedStudent) {
            try {
                currentStudent = safeParseJSON(savedStudent);
                showDashboard();
            } catch (e) {
                console.error("Error parsing saved student data:", e);
                localStorage.removeItem('currentStudent');
                showLandingPage();
            }
        } else {
            showLandingPage();
        }

        setupEventListeners();

    } catch (error) {
        console.error('Error during application initialization:', error);
        showUserError('Application failed to initialize. Please refresh the page.');
        showLandingPage();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApplication);
} else {
    initializeApplication();
}