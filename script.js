/* =========================================================
   HANGMAN GAME - COMPLETE script.js
   OOP QUESTION GAME
   Created for Samarth Sakpal
   ========================================================= */


/* =========================================================
   MODE BASED QUESTION BANK
   100 QUESTIONS EACH
   20 LEVELS × 5 QUESTIONS
   ========================================================= */


/* =========================================================
   🟢 PEACEFUL MODE
   Very Basic / Practice
   ========================================================= */

const peacefulQuestions = [

    ["What is a blueprint for creating objects?", "CLASS", "OOP"],
    ["What is an instance of a class?", "OBJECT", "OOP"],
    ["Which concept wraps data and functions together?", "ENCAPSULATION", "OOP"],
    ["Which concept allows a child class to use parent features?", "INHERITANCE", "OOP"],
    ["Which concept means one interface can have many forms?", "POLYMORPHISM", "OOP"],

    ["Which concept hides unnecessary implementation details?", "ABSTRACTION", "OOP"],
    ["Which function runs when an object is created?", "CONSTRUCTOR", "C++"],
    ["Which function runs when an object is destroyed?", "DESTRUCTOR", "C++"],
    ["Which access specifier allows access from anywhere?", "PUBLIC", "C++"],
    ["Which access specifier restricts access to the class?", "PRIVATE", "C++"],

    ["Which access specifier is useful for derived classes?", "PROTECTED", "C++"],
    ["Same function name with different parameters is called?", "OVERLOADING", "OOP"],
    ["Redefining a parent function in a child class is called?", "OVERRIDING", "OOP"],
    ["What is another name for a parent class?", "BASE", "Inheritance"],
    ["What is another name for a child class?", "DERIVED", "Inheritance"],

    ["Inheritance from one base class is called?", "SINGLE", "Inheritance"],
    ["Inheritance from multiple base classes is called?", "MULTIPLE", "Inheritance"],
    ["Which keyword makes a variable constant?", "CONST", "C++"],
    ["Which operator accesses members of an object?", "DOT", "C++"],
    ["Which operator accesses members through a pointer?", "ARROW", "C++"],

    ["Which keyword refers to the current object?", "THIS", "C++"],
    ["Which keyword dynamically allocates memory?", "NEW", "Memory"],
    ["Which keyword releases dynamic memory?", "DELETE", "Memory"],
    ["What type of class cannot normally be instantiated?", "ABSTRACT", "OOP"],
    ["Which constructor has no parameters?", "DEFAULT", "C++"],

    ["Which constructor copies another object?", "COPY", "C++"],
    ["Which function can access private members?", "FRIEND", "C++"],
    ["Which pattern allows only one object?", "SINGLETON", "Design Pattern"],
    ["Which keyword is used for virtual functions?", "VIRTUAL", "C++"],
    ["Which keyword can prevent overriding?", "FINAL", "C++"],

    ["What is a collection of related data and functions called?", "CLASS", "OOP"],
    ["What is a real-world entity represented in OOP?", "OBJECT", "OOP"],
    ["Which OOP principle improves data security?", "ENCAPSULATION", "OOP"],
    ["Which OOP principle improves code reuse?", "INHERITANCE", "OOP"],
    ["Which OOP principle supports different behaviors?", "POLYMORPHISM", "OOP"],

    ["Which OOP principle focuses on essential features?", "ABSTRACTION", "OOP"],
    ["What is a special member function called during creation?", "CONSTRUCTOR", "C++"],
    ["What is a special member function called during destruction?", "DESTRUCTOR", "C++"],
    ["Which access specifier is most open?", "PUBLIC", "C++"],
    ["Which access specifier is most restrictive?", "PRIVATE", "C++"],

    ["Which access level can be inherited by derived classes?", "PROTECTED", "C++"],
    ["What is using the same function name with different arguments?", "OVERLOADING", "OOP"],
    ["What is replacing inherited behavior with a new implementation?", "OVERRIDING", "OOP"],
    ["Which class provides common features to another class?", "BASE", "Inheritance"],
    ["Which class receives features from another class?", "DERIVED", "Inheritance"],

    ["What inheritance has exactly one parent class?", "SINGLE", "Inheritance"],
    ["What inheritance has more than one parent class?", "MULTIPLE", "Inheritance"],
    ["What keyword prevents a value from being changed?", "CONST", "C++"],
    ["What operator accesses an object's member directly?", "DOT", "C++"],
    ["What operator accesses a member using a pointer?", "ARROW", "C++"],

    ["What does this keyword represent?", "THIS", "C++"],
    ["What keyword creates an object in dynamic memory?", "NEW", "C++"],
    ["What keyword destroys dynamic memory?", "DELETE", "C++"],
    ["What kind of class contains a pure virtual function?", "ABSTRACT", "OOP"],
    ["What constructor accepts zero arguments?", "DEFAULT", "C++"],

    ["What constructor creates an object from another object?", "COPY", "C++"],
    ["What special function gets access to private data?", "FRIEND", "C++"],
    ["What pattern restricts object creation to one instance?", "SINGLETON", "OOP"],
    ["What keyword enables dynamic polymorphism?", "VIRTUAL", "OOP"],
    ["What keyword can stop a virtual function from being overridden?", "FINAL", "C++"],

    ["Which concept is related to hiding data from outside code?", "ENCAPSULATION", "OOP"],
    ["Which concept is related to parent-child classes?", "INHERITANCE", "OOP"],
    ["Which concept is related to many forms?", "POLYMORPHISM", "OOP"],
    ["Which concept hides implementation?", "ABSTRACTION", "OOP"],
    ["Which concept helps protect member variables?", "ENCAPSULATION", "OOP"],

    ["Which function has the same name as its class?", "CONSTRUCTOR", "C++"],
    ["Which function normally has a tilde before its name?", "DESTRUCTOR", "C++"],
    ["Which keyword exposes class members publicly?", "PUBLIC", "C++"],
    ["Which keyword hides class members?", "PRIVATE", "C++"],
    ["Which keyword provides controlled inherited access?", "PROTECTED", "C++"],

    ["What is compile-time polymorphism commonly achieved using?", "OVERLOADING", "Polymorphism"],
    ["What is runtime polymorphism commonly achieved using?", "OVERRIDING", "Polymorphism"],
    ["What class is inherited from?", "BASE", "Inheritance"],
    ["What class inherits from another class?", "DERIVED", "Inheritance"],
    ["What inheritance uses one parent and one child?", "SINGLE", "Inheritance"],

    ["What inheritance uses several parent classes?", "MULTIPLE", "Inheritance"],
    ["Which operator is used with an object variable?", "DOT", "C++"],
    ["Which operator is used with an object pointer?", "ARROW", "C++"],
    ["Which keyword represents the calling object?", "THIS", "C++"],
    ["Which keyword dynamically allocates an object?", "NEW", "C++"],

    ["Which keyword deallocates dynamically allocated memory?", "DELETE", "C++"],
    ["Which constructor copies an existing object?", "COPY", "C++"],
    ["Which constructor has zero parameters?", "DEFAULT", "C++"],
    ["Which function can be declared as a friend?", "FRIEND", "C++"],
    ["Which design pattern has a single instance?", "SINGLETON", "OOP"],

    ["Which keyword declares a virtual member function?", "VIRTUAL", "C++"],
    ["Which keyword prevents overriding?", "FINAL", "C++"],
    ["Which class cannot be directly instantiated?", "ABSTRACT", "OOP"],
    ["What is the foundation of an object?", "CLASS", "OOP"],
    ["What is produced from a class?", "OBJECT", "OOP"],

    ["Which principle combines data with methods?", "ENCAPSULATION", "OOP"],
    ["Which principle enables reuse through parent classes?", "INHERITANCE", "OOP"],
    ["Which principle permits different implementations?", "POLYMORPHISM", "OOP"],
    ["Which principle hides implementation complexity?", "ABSTRACTION", "OOP"],
    ["Which access modifier allows unrestricted access?", "PUBLIC", "C++"],

    ["Which access modifier prevents outside access?", "PRIVATE", "C++"],
    ["Which access modifier supports inherited access?", "PROTECTED", "C++"],
    ["What is multiple functions with the same name called?", "OVERLOADING", "OOP"],
    ["What is redefining inherited behavior called?", "OVERRIDING", "OOP"],
    ["What is a parent class called?", "BASE", "OOP"],

    ["What is a child class called?", "DERIVED", "OOP"],
    ["Which inheritance uses one base class?", "SINGLE", "Inheritance"],
    ["Which inheritance uses multiple base classes?", "MULTIPLE", "Inheritance"],
    ["Which keyword makes data unmodifiable?", "CONST", "C++"],
    ["Which operator accesses an object's members?", "DOT", "C++"],

    ["Which operator works with pointers to objects?", "ARROW", "C++"],
    ["Which keyword points to the current object?", "THIS", "C++"],
    ["Which keyword requests dynamic memory?", "NEW", "C++"],
    ["Which keyword releases dynamic memory?", "DELETE", "C++"],
    ["Which constructor is used for copying?", "COPY", "C++"],

    ["Which constructor takes no arguments?", "DEFAULT", "C++"],
    ["Which function can access private data as a special privilege?", "FRIEND", "C++"],
    ["Which pattern restricts a class to one instance?", "SINGLETON", "OOP"],
    ["Which keyword supports runtime dispatch?", "VIRTUAL", "C++"],
    ["Which keyword can stop further overriding?", "FINAL", "C++"]

];


/* =========================================================
   🟡 EASY MODE
   BASIC + MODERATE
   ========================================================= */

const easyQuestions = [

    ["What is the main purpose of a class?", "BLUEPRINT", "OOP"],
    ["What is created using a class?", "OBJECT", "OOP"],
    ["Which principle combines data and functions?", "ENCAPSULATION", "OOP"],
    ["Which principle provides code reuse?", "INHERITANCE", "OOP"],
    ["Which principle allows multiple behaviors?", "POLYMORPHISM", "OOP"],

    ["Which principle hides implementation details?", "ABSTRACTION", "OOP"],
    ["Which keyword defines a class?", "CLASS", "C++"],
    ["Which keyword allocates memory dynamically?", "NEW", "C++"],
    ["Which keyword releases dynamic memory?", "DELETE", "C++"],
    ["Which keyword refers to the current object?", "THIS", "C++"],

    ["Which access specifier is accessible everywhere?", "PUBLIC", "C++"],
    ["Which access specifier restricts access to a class?", "PRIVATE", "C++"],
    ["Which access specifier supports inheritance?", "PROTECTED", "C++"],
    ["What is same name with different parameters?", "OVERLOADING", "OOP"],
    ["What is redefining an inherited function?", "OVERRIDING", "OOP"],

    ["Which keyword supports runtime polymorphism?", "VIRTUAL", "C++"],
    ["What is called automatically when an object is created?", "CONSTRUCTOR", "C++"],
    ["What is called automatically when an object is destroyed?", "DESTRUCTOR", "C++"],
    ["Which constructor has no parameters?", "DEFAULT", "C++"],
    ["Which constructor initializes from another object?", "COPY", "C++"],

    ["What is a superclass also called?", "BASE", "Inheritance"],
    ["What is a subclass also called?", "DERIVED", "Inheritance"],
    ["What inheritance has one parent and one child?", "SINGLE", "Inheritance"],
    ["What inheritance has several parent classes?", "MULTIPLE", "Inheritance"],
    ["Which keyword prevents variable modification?", "CONST", "C++"],

    ["Which function can access private members?", "FRIEND", "C++"],
    ["Which operator accesses normal object members?", "DOT", "C++"],
    ["Which operator accesses pointer object members?", "ARROW", "C++"],
    ["Which relationship represents a strong whole-part structure?", "COMPOSITION", "OOP"],
    ["Which pattern permits only one instance?", "SINGLETON", "OOP"],

    ["What is a class without direct object creation called?", "ABSTRACT", "OOP"],
    ["Which keyword can prevent overriding?", "FINAL", "C++"],
    ["Which keyword allows overriding through virtual dispatch?", "VIRTUAL", "C++"],
    ["Which OOP concept protects internal data?", "ENCAPSULATION", "OOP"],
    ["Which OOP concept creates parent-child relationships?", "INHERITANCE", "OOP"],

    ["Which concept gives one interface many forms?", "POLYMORPHISM", "OOP"],
    ["Which concept exposes only important features?", "ABSTRACTION", "OOP"],
    ["Which function initializes object state?", "CONSTRUCTOR", "C++"],
    ["Which function performs object cleanup?", "DESTRUCTOR", "C++"],
    ["Which modifier gives maximum visibility?", "PUBLIC", "C++"],

    ["Which modifier gives minimum outside visibility?", "PRIVATE", "C++"],
    ["Which modifier permits derived-class access?", "PROTECTED", "C++"],
    ["Which polymorphism occurs during compilation?", "OVERLOADING", "Polymorphism"],
    ["Which polymorphism commonly occurs at runtime?", "OVERRIDING", "Polymorphism"],
    ["Which class contains common inherited features?", "BASE", "Inheritance"],

    ["Which class receives inherited features?", "DERIVED", "Inheritance"],
    ["What inheritance has exactly one base class?", "SINGLE", "Inheritance"],
    ["What inheritance has two or more base classes?", "MULTIPLE", "Inheritance"],
    ["Which operator uses an object directly?", "DOT", "C++"],
    ["Which operator uses a pointer to an object?", "ARROW", "C++"],

    ["Which keyword represents the calling object?", "THIS", "C++"],
    ["Which keyword allocates memory from the heap?", "NEW", "Memory"],
    ["Which keyword releases heap memory?", "DELETE", "Memory"],
    ["Which class usually contains pure virtual functions?", "ABSTRACT", "OOP"],
    ["Which constructor is used when no argument is supplied?", "DEFAULT", "C++"],

    ["Which constructor receives another object?", "COPY", "C++"],
    ["Which function receives special access to private data?", "FRIEND", "C++"],
    ["Which design pattern restricts object creation?", "SINGLETON", "Design Pattern"],
    ["Which keyword indicates a virtual function?", "VIRTUAL", "C++"],
    ["Which keyword prevents further inheritance or overriding?", "FINAL", "C++"],

    ["Which OOP principle improves maintainability by hiding data?", "ENCAPSULATION", "OOP"],
    ["Which OOP principle promotes reusable parent code?", "INHERITANCE", "OOP"],
    ["Which OOP principle enables dynamic behavior?", "POLYMORPHISM", "OOP"],
    ["Which OOP principle reduces implementation complexity?", "ABSTRACTION", "OOP"],
    ["What is the relationship between a class and its object?", "INSTANTIATION", "OOP"],

    ["What process creates an object from a class?", "INSTANTIATION", "OOP"],
    ["What does a constructor normally initialize?", "OBJECT", "C++"],
    ["What does a destructor normally clean up?", "OBJECT", "C++"],
    ["Which member access is available to all code?", "PUBLIC", "C++"],
    ["Which member access is limited to the class?", "PRIVATE", "C++"],

    ["Which member access is useful for derived classes?", "PROTECTED", "C++"],
    ["What is compile-time function selection called?", "OVERLOADING", "C++"],
    ["What is runtime function selection called?", "OVERRIDING", "C++"],
    ["What is the parent in an inheritance relationship?", "BASE", "Inheritance"],
    ["What is the child in an inheritance relationship?", "DERIVED", "Inheritance"],

    ["Which inheritance uses one base and many derived classes?", "HIERARCHICAL", "Inheritance"],
    ["Which inheritance creates a chain of classes?", "MULTILEVEL", "Inheritance"],
    ["Which inheritance combines different inheritance forms?", "HYBRID", "Inheritance"],
    ["Which operator accesses a member through an object?", "DOT", "C++"],
    ["Which operator accesses a member through a pointer?", "ARROW", "C++"],

    ["Which keyword stores the address of the current object?", "THIS", "C++"],
    ["Which keyword performs dynamic allocation?", "NEW", "Memory"],
    ["Which keyword performs dynamic deallocation?", "DELETE", "Memory"],
    ["Which type of class is designed for inheritance?", "ABSTRACT", "OOP"],
    ["Which constructor copies an object's values?", "COPY", "C++"],

    ["Which constructor is supplied when no parameters are used?", "DEFAULT", "C++"],
    ["Which special declaration grants access to private members?", "FRIEND", "C++"],
    ["Which pattern ensures a single instance?", "SINGLETON", "Design Pattern"],
    ["Which function can be dynamically dispatched?", "VIRTUAL", "Polymorphism"],
    ["Which keyword stops overriding?", "FINAL", "C++"],

    ["Which principle hides data behind methods?", "ENCAPSULATION", "OOP"],
    ["Which principle represents an IS-A relationship?", "INHERITANCE", "OOP"],
    ["Which principle allows different implementations of one interface?", "POLYMORPHISM", "OOP"],
    ["Which principle separates interface from implementation?", "ABSTRACTION", "OOP"],
    ["What is an object a runtime instance of?", "CLASS", "OOP"],

    ["Which function is automatically called first for an object?", "CONSTRUCTOR", "C++"],
    ["Which function is automatically called at object destruction?", "DESTRUCTOR", "C++"],
    ["Which specifier allows external access?", "PUBLIC", "C++"],
    ["Which specifier hides members from outside code?", "PRIVATE", "C++"],
    ["Which specifier exposes members to derived classes?", "PROTECTED", "C++"],

    ["What is multiple functions with different parameter lists?", "OVERLOADING", "Polymorphism"],
    ["What is redefining a base virtual function?", "OVERRIDING", "Polymorphism"],
    ["What is the class being inherited from?", "BASE", "Inheritance"],
    ["What is the class doing the inheriting?", "DERIVED", "Inheritance"],
    ["Which inheritance has one direct parent?", "SINGLE", "Inheritance"],

    ["Which inheritance has multiple direct parents?", "MULTIPLE", "Inheritance"],
    ["Which inheritance has several levels?", "MULTILEVEL", "Inheritance"],
    ["Which inheritance has one parent with several children?", "HIERARCHICAL", "Inheritance"],
    ["Which keyword makes a data member read-only after initialization?", "CONST", "C++"],
    ["Which operator is used with a regular object?", "DOT", "C++"],

    ["Which operator is used with a pointer to an object?", "ARROW", "C++"],
    ["Which keyword identifies the current instance?", "THIS", "C++"],
    ["Which keyword creates dynamic objects?", "NEW", "C++"],
    ["Which keyword destroys dynamic objects?", "DELETE", "C++"],
    ["Which class cannot be instantiated directly?", "ABSTRACT", "OOP"],

    ["Which constructor copies another instance?", "COPY", "C++"],
    ["Which constructor requires no arguments?", "DEFAULT", "C++"],
    ["Which declaration gives non-member access to private data?", "FRIEND", "C++"],
    ["Which pattern limits a class to one instance?", "SINGLETON", "OOP"],
    ["Which keyword enables late binding for a member function?", "VIRTUAL", "C++"],

    ["Which keyword can make a function non-overridable?", "FINAL", "C++"],
    ["Which principle keeps implementation details hidden?", "ABSTRACTION", "OOP"],
    ["Which principle keeps data and behavior together?", "ENCAPSULATION", "OOP"],
    ["Which principle supports code reuse?", "INHERITANCE", "OOP"],
    ["Which principle supports one interface and many behaviors?", "POLYMORPHISM", "OOP"]

];


/* =========================================================
   🔴 HARD MODE
   ADVANCED / TRICKY
   ========================================================= */

const hardQuestions = [

    ["Which feature allows one interface to represent multiple implementations?", "POLYMORPHISM", "OOP"],
    ["Which polymorphism is associated with function overloading?", "COMPILE TIME", "Polymorphism"],
    ["Which polymorphism is associated with virtual functions?", "RUNTIME", "Polymorphism"],
    ["Which keyword enables runtime polymorphism in C++?", "VIRTUAL", "C++"],
    ["Which principle separates interface from implementation?", "ABSTRACTION", "OOP"],

    ["Which principle prevents direct uncontrolled access to data?", "ENCAPSULATION", "OOP"],
    ["What is a derived class replacing a virtual function called?", "OVERRIDING", "Polymorphism"],
    ["Which constructor initializes an object from an existing object?", "COPY", "C++"],
    ["Which constructor is automatically available when no constructor is declared?", "DEFAULT", "C++"],
    ["Which operator accesses a member through an object pointer?", "ARROW", "C++"],

    ["Which pointer refers to the current object?", "THIS", "C++"],
    ["Which access specifier prevents normal outside access?", "PRIVATE", "C++"],
    ["Which access specifier allows derived classes to access members?", "PROTECTED", "C++"],
    ["Which inheritance has several base classes?", "MULTIPLE", "Inheritance"],
    ["Which inheritance creates a sequence of derived classes?", "MULTILEVEL", "Inheritance"],

    ["Which inheritance combines two or more inheritance structures?", "HYBRID", "Inheritance"],
    ["Which inheritance has one base class and many derived classes?", "HIERARCHICAL", "Inheritance"],
    ["Which function executes when a local object leaves its scope?", "DESTRUCTOR", "C++"],
    ["Which keyword allocates dynamic storage?", "NEW", "Memory"],
    ["Which keyword deallocates storage obtained using new?", "DELETE", "Memory"],

    ["Which non-member function may access private and protected members?", "FRIEND", "C++"],
    ["Which relationship represents a strong whole-part relationship?", "COMPOSITION", "OOP"],
    ["Which pattern restricts a class to a single instance?", "SINGLETON", "Design Pattern"],
    ["What is redefining a function with the same signature in a derived class?", "OVERRIDING", "Inheritance"],
    ["What is defining multiple functions with the same name and different parameters?", "OVERLOADING", "Polymorphism"],

    ["Which keyword prevents a virtual function from being overridden?", "FINAL", "C++"],
    ["Which class cannot normally be instantiated?", "ABSTRACT", "OOP"],
    ["Which mechanism binds a virtual call during execution?", "DYNAMIC BINDING", "Polymorphism"],
    ["Which mechanism binds a normal function call during compilation?", "STATIC BINDING", "Polymorphism"],
    ["Which principle supports substitution of derived objects for base objects?", "POLYMORPHISM", "OOP"],

    ["Which feature allows derived classes to reuse base implementation?", "INHERITANCE", "OOP"],
    ["Which feature hides implementation complexity from users?", "ABSTRACTION", "OOP"],
    ["Which feature groups state and behavior into one unit?", "ENCAPSULATION", "OOP"],
    ["Which feature allows different classes to respond differently to one call?", "POLYMORPHISM", "OOP"],
    ["Which concept represents an IS-A relationship?", "INHERITANCE", "OOP"],

    ["Which concept represents a HAS-A relationship?", "COMPOSITION", "OOP"],
    ["Which access level is inherited but not publicly accessible?", "PROTECTED", "C++"],
    ["Which access level prevents derived classes from direct access?", "PRIVATE", "C++"],
    ["Which access level provides unrestricted external access?", "PUBLIC", "C++"],
    ["Which function type is commonly used for runtime polymorphism?", "VIRTUAL", "C++"],

    ["Which type of function dispatch is determined during compilation?", "STATIC BINDING", "Polymorphism"],
    ["Which type of function dispatch is determined during execution?", "DYNAMIC BINDING", "Polymorphism"],
    ["Which concept allows compile-time selection based on parameters?", "OVERLOADING", "Polymorphism"],
    ["Which concept allows runtime selection through a virtual function?", "OVERRIDING", "Polymorphism"],
    ["Which constructor is invoked when an object is initialized from another object?", "COPY", "C++"],

    ["Which constructor may be generated by the compiler if none is declared?", "DEFAULT", "C++"],
    ["Which member function has the class name and no return type?", "CONSTRUCTOR", "C++"],
    ["Which member function uses a tilde before the class name?", "DESTRUCTOR", "C++"],
    ["Which keyword provides a pointer to the invoking object?", "THIS", "C++"],
    ["Which operator is used for direct object member access?", "DOT", "C++"],

    ["Which operator is used for pointer-to-object member access?", "ARROW", "C++"],
    ["Which keyword creates an object dynamically?", "NEW", "Memory"],
    ["Which keyword releases an object created dynamically?", "DELETE", "Memory"],
    ["Which keyword makes a variable immutable?", "CONST", "C++"],
    ["Which keyword can stop further inheritance of a class?", "FINAL", "C++"],

    ["Which class is intended to provide an interface for derived classes?", "ABSTRACT", "OOP"],
    ["What is a pure virtual function used to define?", "INTERFACE", "OOP"],
    ["Which principle reduces coupling by hiding implementation?", "ABSTRACTION", "OOP"],
    ["Which principle protects object state?", "ENCAPSULATION", "OOP"],
    ["Which principle promotes reuse through base classes?", "INHERITANCE", "OOP"],

    ["Which principle allows the same operation to have different results?", "POLYMORPHISM", "OOP"],
    ["Which inheritance has exactly one parent class?", "SINGLE", "Inheritance"],
    ["Which inheritance has more than one parent class?", "MULTIPLE", "Inheritance"],
    ["Which inheritance creates several generations of classes?", "MULTILEVEL", "Inheritance"],
    ["Which inheritance creates multiple children from one parent?", "HIERARCHICAL", "Inheritance"],

    ["Which inheritance combines multiple inheritance forms?", "HYBRID", "Inheritance"],
    ["Which relationship is stronger than simple association?", "COMPOSITION", "OOP"],
    ["Which pattern guarantees one shared instance?", "SINGLETON", "Design Pattern"],
    ["Which function can be granted special access without being a member?", "FRIEND", "C++"],
    ["Which keyword identifies a virtual member function?", "VIRTUAL", "C++"],

    ["Which keyword makes overriding optional but controlled?", "FINAL", "C++"],
    ["Which class cannot be directly constructed because it is abstract?", "ABSTRACT", "OOP"],
    ["Which binding is also called early binding?", "STATIC BINDING", "Polymorphism"],
    ["Which binding is also called late binding?", "DYNAMIC BINDING", "Polymorphism"],
    ["Which concept allows the base interface to work with derived objects?", "POLYMORPHISM", "OOP"],

    ["Which OOP principle is directly associated with data hiding?", "ENCAPSULATION", "OOP"],
    ["Which OOP principle is directly associated with specialization?", "INHERITANCE", "OOP"],
    ["Which OOP principle is directly associated with generalized interfaces?", "ABSTRACTION", "OOP"],
    ["Which OOP principle is directly associated with dynamic behavior?", "POLYMORPHISM", "OOP"],
    ["Which relationship describes one object containing another?", "COMPOSITION", "OOP"],

    ["Which access modifier is visible inside the class and friends?", "PRIVATE", "C++"],
    ["Which access modifier is visible to derived classes?", "PROTECTED", "C++"],
    ["Which access modifier is visible to general external code?", "PUBLIC", "C++"],
    ["Which special function has no return type and matches the class name?", "CONSTRUCTOR", "C++"],
    ["Which special function cannot normally be overloaded by return type alone?", "CONSTRUCTOR", "C++"],

    ["Which operation occurs when an object is copied into another object?", "COPY", "C++"],
    ["Which constructor handles object-to-object initialization?", "COPY", "C++"],
    ["Which keyword refers to the object currently executing a member function?", "THIS", "C++"],
    ["Which operator provides member access through a pointer?", "ARROW", "C++"],
    ["Which operator provides member access through a normal object?", "DOT", "C++"],

    ["Which keyword requests memory allocation at runtime?", "NEW", "C++"],
    ["Which keyword releases memory allocated by new?", "DELETE", "C++"],
    ["Which keyword prevents modification after initialization?", "CONST", "C++"],
    ["Which keyword can prevent a class from being inherited?", "FINAL", "C++"],
    ["Which keyword can prevent a virtual function from being overridden?", "FINAL", "C++"],

    ["Which design approach hides implementation behind an interface?", "ABSTRACTION", "OOP"],
    ["Which design approach bundles state and behavior?", "ENCAPSULATION", "OOP"],
    ["Which design approach reuses existing classes?", "INHERITANCE", "OOP"],
    ["Which design approach allows substitutable implementations?", "POLYMORPHISM", "OOP"],
    ["Which relationship is commonly described as HAS-A?", "COMPOSITION", "OOP"],

    ["Which relationship is commonly described as IS-A?", "INHERITANCE", "OOP"],
    ["Which polymorphism occurs without virtual functions through overloaded functions?", "COMPILE TIME", "Polymorphism"],
    ["Which polymorphism normally uses virtual functions?", "RUNTIME", "Polymorphism"],
    ["Which binding chooses an implementation before execution?", "STATIC BINDING", "Polymorphism"],
    ["Which binding chooses an implementation during execution?", "DYNAMIC BINDING", "Polymorphism"],

    ["Which type of class is useful as a common interface?", "ABSTRACT", "OOP"],
    ["Which member can be overridden when declared virtual?", "FUNCTION", "C++"],
    ["Which function is called automatically during destruction?", "DESTRUCTOR", "C++"],
    ["Which function is called automatically during construction?", "CONSTRUCTOR", "C++"],
    ["Which access modifier provides the widest visibility?", "PUBLIC", "C++"],

    ["Which access modifier provides the narrowest normal visibility?", "PRIVATE", "C++"],
    ["Which access modifier is designed for inherited access?", "PROTECTED", "C++"],
    ["Which inheritance structure has one root and multiple children?", "HIERARCHICAL", "Inheritance"],
    ["Which inheritance structure forms a chain?", "MULTILEVEL", "Inheritance"],
    ["Which inheritance structure combines patterns?", "HYBRID", "Inheritance"],

    ["Which inheritance allows more than one direct base class?", "MULTIPLE", "Inheritance"],
    ["Which inheritance uses one direct base class?", "SINGLE", "Inheritance"],
    ["Which concept allows implementation replacement in a subclass?", "OVERRIDING", "Inheritance"],
    ["Which concept allows several signatures for one function name?", "OVERLOADING", "Polymorphism"],
    ["Which concept determines calls at runtime?", "DYNAMIC BINDING", "Polymorphism"],

    ["Which concept determines calls at compile time?", "STATIC BINDING", "Polymorphism"],
    ["Which concept is essential for runtime polymorphism?", "VIRTUAL", "C++"],
    ["Which pattern guarantees only one object instance?", "SINGLETON", "Design Pattern"],
    ["Which relationship represents ownership of component objects?", "COMPOSITION", "OOP"],
    ["Which function receives access through a friend declaration?", "FRIEND", "C++"],

    ["Which class type is not directly instantiated?", "ABSTRACT", "OOP"],
    ["Which constructor duplicates object state?", "COPY", "C++"],
    ["Which constructor accepts zero arguments?", "DEFAULT", "C++"],
    ["Which keyword represents the current object address?", "THIS", "C++"],
    ["Which operator accesses members from an object pointer?", "ARROW", "C++"],

    ["Which operator accesses members from an object expression?", "DOT", "C++"],
    ["Which keyword allocates storage dynamically?", "NEW", "Memory"],
    ["Which keyword deallocates dynamic storage?", "DELETE", "Memory"],
    ["Which keyword prevents a value from changing?", "CONST", "C++"],
    ["Which keyword can prevent further overriding?", "FINAL", "C++"]

];


/* =========================================================
   HANGMAN GAME
   PLAYER-WISE PROGRESS SYSTEM
   ========================================================= */


/* =========================================================
   GAME VARIABLES
========================================================= */

let selectedMode = "";
let selectedDevice = "";

let currentLevel = 1;
let currentQuestion = 0;

let score = 0;
let lives = 6;

let hiddenAnswer = "";
let wrongLetters = [];
let guessedLetters = [];

let soundOn = true;
let gameLocked = false;
let levelWasCompleted = false;


/* =========================================================
   PLAYER SYSTEM
========================================================= */

let currentPlayerName = "";
let currentPlayerKey = "";


/* Clean player name */
function normalizePlayerName(name) {

    return name
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 30);
}


/* Create unique localStorage key from player name */
function createPlayerKey(name) {

    return normalizePlayerName(name)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "") || "player";
}


/* Player + Mode specific progress key */
function getProgressKey() {

    if (!currentPlayerKey || !selectedMode) {
        return "";
    }

    return (
        "hangman_player_" +
        currentPlayerKey +
        "_" +
        selectedMode +
        "_level"
    );
}


/* =========================================================
   PLAYER SCREEN
========================================================= */

const playerScreenHTML = `

<section id="playerScreen" class="screen">

    <div class="welcome-box player-box">

        <img
            src="assets/hangman-logo.png"
            class="logo-image"
            alt="Hangman Game Logo"
        >

        <h2>🎮 ENTER PLAYER NAME</h2>

        <p>
            Your level progress will be saved separately.
        </p>

        <div class="player-input-wrapper">

            <input
                id="playerNameInput"
                type="text"
                maxlength="30"
                placeholder="Enter your name"
                autocomplete="off"
            >

        </div>

        <div
            id="playerNameMessage"
            class="player-message"
        ></div>

        <div class="button-group">

            <button
                id="playerContinueButton"
                class="main-button"
            >
                CONTINUE 🚀
            </button>

            <button
                id="playerBackButton"
                class="small-button"
            >
                ← BACK
            </button>

        </div>

    </div>

</section>

`;


/* Insert Player Screen */
const mainContainer =
    document.querySelector(".container");

if (mainContainer) {

    mainContainer.insertAdjacentHTML(
        "beforeend",
        playerScreenHTML
    );
}


/* =========================================================
   PLAYER SCREEN STYLE
========================================================= */

const playerStyle =
    document.createElement("style");

playerStyle.textContent = `

    .player-box {
        width: min(650px, 95%);
        padding: 35px;
        text-align: center;
    }

    .player-input-wrapper {
        width: min(450px, 100%);
        margin: 20px auto;
    }

    #playerNameInput {

        width: 100%;

        padding: 16px 18px;

        border-radius: 12px;

        border: 2px solid
            rgba(255, 65, 35, 0.40);

        outline: none;

        background:
            rgba(5, 0, 0, 0.82);

        color: white;

        font-size: 18px;

        text-align: center;

        transition: 0.25s ease;

        box-shadow:
            inset 0 0 15px
            rgba(255, 30, 0, 0.04);
    }

    #playerNameInput::placeholder {
        color:
            rgba(255, 210, 200, 0.45);
    }

    #playerNameInput:focus {

        border-color:
            #ff4b2c;

        box-shadow:
            0 0 15px
            rgba(255, 45, 15, 0.45);
    }

    .player-message {

        min-height: 25px;

        margin-top: 5px;

        color: #ff8065;

        font-weight: bold;
    }

    .current-player {

        display: inline-block;

        margin: 10px 0 5px;

        padding: 8px 16px;

        border-radius: 20px;

        background:
            rgba(120, 0, 0, 0.35);

        border:
            1px solid
            rgba(255, 70, 40, 0.40);

        color:
            #ff9c87;

        font-weight: bold;

        box-shadow:
            0 0 12px
            rgba(255, 30, 0, 0.12);
    }

    .change-player-button {

        margin-top: 5px;
    }

    @media (max-width: 700px) {

        .player-box {
            padding: 22px;
        }

        #playerNameInput {
            font-size: 16px;
        }

    }

`;

document.head.appendChild(playerStyle);


/* =========================================================
   SCREEN SYSTEM
========================================================= */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });

    const target =
        document.getElementById(screenId);

    if (target) {

        target.classList.add("active");

    }
}


/* =========================================================
   PLAYER FUNCTIONS
========================================================= */

function showPlayerScreen() {

    const input =
        document.getElementById("playerNameInput");

    const message =
        document.getElementById("playerNameMessage");

    if (input) {

        input.value = "";

        setTimeout(function() {

            input.focus();

        }, 150);

    }

    if (message) {

        message.textContent = "";

    }

    showScreen("playerScreen");
}


/* Select player */
function selectPlayer() {

    const input =
        document.getElementById("playerNameInput");

    const message =
        document.getElementById("playerNameMessage");

    if (!input) {
        return;
    }

    const name =
        normalizePlayerName(input.value);

    if (name.length < 2) {

        if (message) {

            message.textContent =
                "⚠️ Please enter at least 2 characters.";

        }

        input.focus();

        return;
    }

    currentPlayerName = name;

    currentPlayerKey =
        createPlayerKey(name);

    /*
       Reset current session.
       Saved progress is NOT deleted.
    */

    selectedMode = "";
    selectedDevice = "";

    currentLevel = 1;
    currentQuestion = 0;
    score = 0;
    lives = 6;

    wrongLetters = [];
    guessedLetters = [];

    gameLocked = false;
    levelWasCompleted = false;

    if (message) {

        message.textContent =
            "✅ Welcome, " + currentPlayerName + "!";

    }

    setTimeout(function() {

        showScreen("deviceScreen");

    }, 350);
}


/* Change player */
function changePlayer() {

    currentPlayerName = "";
    currentPlayerKey = "";

    selectedMode = "";
    selectedDevice = "";

    currentLevel = 1;
    currentQuestion = 0;
    score = 0;
    lives = 6;

    wrongLetters = [];
    guessedLetters = [];

    gameLocked = false;
    levelWasCompleted = false;

    document.body.classList.remove("mobile-view");
    document.body.classList.remove("laptop-view");

    showPlayerScreen();
}


/* =========================================================
   DEVICE LAYOUT
========================================================= */

function changeDeviceLayout(device) {

    selectedDevice = device;

    document.body.classList.remove("mobile-view");
    document.body.classList.remove("laptop-view");

    if (device === "mobile") {

        document.body.classList.add("mobile-view");

    }

    if (device === "laptop") {

        document.body.classList.add("laptop-view");

    }
}


/* =========================================================
   PLAYER-SPECIFIC SAVED LEVEL
========================================================= */

function getSavedLevel() {

    if (!currentPlayerKey || !selectedMode) {

        return 1;

    }

    const storageKey =
        getProgressKey();

    const savedLevel =
        localStorage.getItem(storageKey);

    if (savedLevel === null) {

        return 1;

    }

    const level =
        Number(savedLevel);

    if (level < 1) {

        return 1;

    }

    if (level > 20) {

        return 20;

    }

    return level;
}


/* Save level */
function saveUnlockedLevel(level) {

    if (!currentPlayerKey || !selectedMode) {

        return;

    }

    const storageKey =
        getProgressKey();

    const oldLevel =
        getSavedLevel();

    if (level > oldLevel) {

        localStorage.setItem(
            storageKey,
            Math.min(level, 20)
        );

    }
}


/* =========================================================
   QUESTIONS
   Uses your existing question banks
========================================================= */

function getQuestionBank() {

    if (typeof peacefulQuestions !== "undefined" &&
        selectedMode === "peaceful") {

        return peacefulQuestions;

    }

    if (typeof easyQuestions !== "undefined" &&
        selectedMode === "easy") {

        return easyQuestions;

    }

    if (typeof hardQuestions !== "undefined" &&
        selectedMode === "hard") {

        return hardQuestions;

    }

    /*
       Compatibility with older version
    */

    if (typeof questions !== "undefined") {

        return questions;

    }

    return [];
}


/* =========================================================
   FIVE QUESTIONS PER LEVEL
========================================================= */

function getLevelQuestions() {

    const questionBank =
        getQuestionBank();

    if (!questionBank.length) {

        return [];

    }

    const startIndex =
        (currentLevel - 1) * 5;

    return questionBank.slice(
        startIndex,
        startIndex + 5
    );
}


/* =========================================================
   START GAME
========================================================= */

function startGame(mode) {

    if (!currentPlayerName ||
        !currentPlayerKey) {

        showPlayerScreen();

        return;

    }

    selectedMode = mode;

    levelWasCompleted = false;

    currentLevel =
        getSavedLevel();

    currentQuestion = 0;

    score = 0;

    gameLocked = false;

    if (selectedMode === "peaceful") {

        lives = 100;

    } else if (selectedMode === "easy") {

        lives = 6;

    } else {

        lives = 4;

    }

    const modeName =
        document.getElementById("modeName");

    const levelText =
        document.getElementById("levelText");

    if (modeName) {

        modeName.textContent =
            selectedMode.toUpperCase() +
            " MODE";

    }

    if (levelText) {

        levelText.textContent =
            "Level " +
            currentLevel +
            " of 20";

    }

    showScreen("levelProgressScreen");

    showLevelProgress();
}


/* =========================================================
   START SELECTED LEVEL
========================================================= */

function playSelectedLevel(levelNumber) {

    const savedLevel =
        getSavedLevel();

    if (levelNumber > savedLevel) {

        return;

    }

    currentLevel =
        levelNumber;

    currentQuestion = 0;

    score = 0;

    gameLocked = false;

    if (selectedMode === "peaceful") {

        lives = 100;

    } else if (selectedMode === "easy") {

        lives = 6;

    } else {

        lives = 4;

    }

    const modeName =
        document.getElementById("modeName");

    const levelText =
        document.getElementById("levelText");

    if (modeName) {

        modeName.textContent =
            selectedMode.toUpperCase() +
            " MODE";

    }

    if (levelText) {

        levelText.textContent =
            "Level " +
            currentLevel +
            " of 20";

    }

    showScreen("gameScreen");

    loadQuestion();
}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    const levelQuestions =
        getLevelQuestions();

    const questionData =
        levelQuestions[currentQuestion];

    if (!questionData) {

        document.getElementById("message").textContent =
            "No question available for this level.";

        return;

    }

    hiddenAnswer = "";

    wrongLetters = [];

    guessedLetters = [];

    gameLocked = false;

    const correctAnswer =
        questionData[1].toUpperCase();

    for (
        let i = 0;
        i < correctAnswer.length;
        i++
    ) {

        if (correctAnswer[i] === " ") {

            hiddenAnswer += " ";

        } else {

            hiddenAnswer += "_";

        }

    }

    const question =
        document.getElementById("question");

    const category =
        document.getElementById("category");

    const questionNumber =
        document.getElementById("questionNumber");

    const input =
        document.getElementById("guessInput");

    const message =
        document.getElementById("message");

    const hint =
        document.getElementById("hint");

    if (question) {

        question.textContent =
            questionData[0];

    }

    if (category) {

        category.textContent =
            questionData[2];

    }

    if (questionNumber) {

        questionNumber.textContent =
            (currentQuestion + 1) +
            "/5";

    }

    if (input) {

        input.value = "";

    }

    if (message) {

        message.textContent =
            "Type one letter or the complete answer.";

        message.style.color =
            "#ffb39f";

    }

    if (hint) {

        if (selectedMode === "hard") {

            hint.textContent =
                "Hint is disabled in Hard Mode.";

        } else {

            hint.textContent =
                "Hint: Answer contains " +
                correctAnswer.length +
                " characters.";

        }

    }

    updateGameScreen();

    if (input) {

        setTimeout(function() {

            input.focus();

        }, 100);

    }
}


/* =========================================================
   UPDATE GAME SCREEN
========================================================= */

function updateGameScreen() {

    let displayAnswer = "";

    for (
        let i = 0;
        i < hiddenAnswer.length;
        i++
    ) {

        displayAnswer +=
            hiddenAnswer[i] + " ";

    }

    const answerDisplay =
        document.getElementById("answerDisplay");

    const wrongLettersElement =
        document.getElementById("wrongLetters");

    const livesElement =
        document.getElementById("lives");

    const scoreElement =
        document.getElementById("score");

    const progressElement =
        document.getElementById("progress");

    if (answerDisplay) {

        answerDisplay.textContent =
            displayAnswer;

    }

    if (wrongLettersElement) {

        wrongLettersElement.textContent =
            wrongLetters.length
                ? wrongLetters.join(", ")
                : "None";

    }

    if (livesElement) {

        livesElement.textContent =
            selectedMode === "peaceful"
                ? "∞"
                : lives;

    }

    if (scoreElement) {

        scoreElement.textContent =
            score;

    }

    if (progressElement) {

        progressElement.style.width =
            ((currentQuestion / 5) * 100) +
            "%";

    }

    drawHangman();
}


/* =========================================================
   CHECK GUESS
========================================================= */

function checkGuess() {

    if (gameLocked) {

        return;

    }

    const input =
        document.getElementById("guessInput");

    if (!input) {

        return;

    }

    const userGuess =
        input.value
            .toUpperCase()
            .trim();

    input.value = "";

    if (!userGuess) {

        showMessage(
            "Please type a letter or word.",
            "wrong"
        );

        return;

    }

    if (!/^[A-Z ]+$/.test(userGuess)) {

        showMessage(
            "Please use letters only.",
            "wrong"
        );

        return;

    }

    const levelQuestions =
        getLevelQuestions();

    if (!levelQuestions[currentQuestion]) {

        return;

    }

    const correctAnswer =
        levelQuestions[currentQuestion][1]
            .toUpperCase();


    /* Full answer */
    if (userGuess.length > 1) {

        if (userGuess === correctAnswer) {

            hiddenAnswer =
                correctAnswer;

            score += 20;

            showMessage(
                "Correct full answer! +20 points",
                "correct"
            );

            playSound("correct");

            updateGameScreen();

            answerComplete();

        } else {

            wrongGuess(userGuess);

        }

        return;

    }


    /* Single letter */
    if (
        guessedLetters.includes(userGuess) ||
        wrongLetters.includes(userGuess)
    ) {

        showMessage(
            "You already used this letter.",
            "wrong"
        );

        return;

    }


    if (correctAnswer.includes(userGuess)) {

        guessedLetters.push(userGuess);

        let newHiddenAnswer = "";

        for (
            let i = 0;
            i < correctAnswer.length;
            i++
        ) {

            if (correctAnswer[i] === " ") {

                newHiddenAnswer += " ";

            } else if (
                correctAnswer[i] === userGuess
            ) {

                newHiddenAnswer +=
                    userGuess;

            } else {

                newHiddenAnswer +=
                    hiddenAnswer[i];

            }

        }

        hiddenAnswer =
            newHiddenAnswer;

        score += 5;

        showMessage(
            "Correct letter! +5 points",
            "correct"
        );

        playSound("correct");

        updateGameScreen();

        if (
            hiddenAnswer ===
            correctAnswer
        ) {

            answerComplete();

        }

    } else {

        wrongGuess(userGuess);

    }
}


/* =========================================================
   WRONG GUESS
========================================================= */

function wrongGuess(userGuess) {

    wrongLetters.push(userGuess);

    if (selectedMode !== "peaceful") {

        lives--;

    }

    showMessage(
        "Wrong guess!",
        "wrong"
    );

    playSound("wrong");

    updateGameScreen();

    if (
        selectedMode !== "peaceful" &&
        lives <= 0
    ) {

        gameLocked = true;

        const levelQuestions =
            getLevelQuestions();

        const correctAnswer =
            levelQuestions[currentQuestion][1];

        const message =
            document.getElementById("message");

        if (message) {

            message.textContent =
                "Game Over! Answer: " +
                correctAnswer;

        }

        setTimeout(function() {

            alert(
                "You lost Level " +
                currentLevel +
                ". Try again."
            );

            playSelectedLevel(
                currentLevel
            );

        }, 1500);

    }
}


/* =========================================================
   ANSWER COMPLETE
========================================================= */

function answerComplete() {

    gameLocked = true;

    const message =
        document.getElementById("message");

    if (message) {

        message.textContent =
            "Correct! Next question is loading...";

    }

    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion < 5) {

            loadQuestion();

        } else {

            levelComplete();

        }

    }, 1000);
}


/* =========================================================
   LEVEL COMPLETE
   PLAYER-SPECIFIC SAVE
========================================================= */

function levelComplete() {

    playSound("win");

    levelWasCompleted = true;

    if (currentLevel < 20) {

        const nextUnlockedLevel =
            currentLevel + 1;

        saveUnlockedLevel(
            nextUnlockedLevel
        );

    } else {

        saveUnlockedLevel(20);

    }

    showLevelProgress();
}


/* =========================================================
   LEVEL PROGRESS SCREEN
========================================================= */

const levelScreenHTML = `

<section
    id="levelProgressScreen"
    class="screen"
>

    <div class="level-progress-box">

        <img
            src="assets/level-complete.jpg"
            class="level-complete-image"
            alt="Level Completed"
        >

        <div
            id="currentPlayerDisplay"
            class="current-player"
        ></div>

        <h2 id="levelProgressTitle">
            SELECT LEVEL
        </h2>

        <p id="levelProgressText">
            Choose an unlocked level to play.
        </p>

        <div
            id="levelCards"
            class="level-cards"
        ></div>

        <button
            id="continueLevelButton"
            class="main-button"
            style="display:none;"
        >
            CONTINUE
        </button>

        <button
            id="levelMenuButton"
            class="small-button"
        >
            MAIN MENU
        </button>

        <br>

        <button
            id="changePlayerButton"
            class="small-button change-player-button"
        >
            👤 CHANGE PLAYER
        </button>

    </div>

</section>

`;


/* Insert only once */
if (!document.getElementById("levelProgressScreen")) {

    const container =
        document.querySelector(".container");

    if (container) {

        container.insertAdjacentHTML(
            "beforeend",
            levelScreenHTML
        );

    }

}


/* =========================================================
   SHOW LEVELS
========================================================= */

function showLevelProgress() {

    if (!currentPlayerName ||
        !currentPlayerKey) {

        showPlayerScreen();

        return;

    }

    const savedLevel =
        getSavedLevel();

    const levelCards =
        document.getElementById(
            "levelCards"
        );

    const title =
        document.getElementById(
            "levelProgressTitle"
        );

    const text =
        document.getElementById(
            "levelProgressText"
        );

    const completeImage =
        document.querySelector(
            ".level-complete-image"
        );

    const playerDisplay =
        document.getElementById(
            "currentPlayerDisplay"
        );


    if (playerDisplay) {

        playerDisplay.textContent =
            "👤 Player: " +
            currentPlayerName +
            "  •  " +
            selectedMode.toUpperCase();

    }


    if (!levelCards) {

        return;

    }

    levelCards.innerHTML = "";


    if (levelWasCompleted) {

        if (completeImage) {

            completeImage.style.display =
                "block";

        }

        if (title) {

            title.textContent =
                "🎉 Level " +
                currentLevel +
                " Completed!";

        }

        if (text) {

            if (currentLevel < 20) {

                text.textContent =
                    "Great job! Level " +
                    savedLevel +
                    " is now unlocked.";

            } else {

                text.textContent =
                    "🏆 Congratulations! You completed all 20 levels.";

            }

        }

    } else {

        if (completeImage) {

            completeImage.style.display =
                "none";

        }

        if (title) {

            title.textContent =
                "SELECT LEVEL";

        }

        if (text) {

            text.textContent =
                "Choose an unlocked level to play.";

        }

    }


    /* Create 20 levels */

    for (
        let number = 1;
        number <= 20;
        number++
    ) {

        const card =
            document.createElement("button");

        card.classList.add(
            "level-card"
        );


        if (number <= savedLevel) {

            card.textContent =
                "🔓 Level " +
                number;

            card.style.background =
                "#277d48";

            card.style.color =
                "white";

            card.style.border =
                "2px solid #8cf5a2";

            card.style.cursor =
                "pointer";

            card.disabled = false;

            card.addEventListener(
                "click",
                function() {

                    playSelectedLevel(
                        number
                    );

                }
            );

        } else {

            card.textContent =
                "🔒 Level " +
                number;

            card.style.background =
                "#303030";

            card.style.color =
                "#a8a8a8";

            card.style.border =
                "2px solid #555";

            card.style.cursor =
                "not-allowed";

            card.disabled = true;

        }


        levelCards.appendChild(card);

    }


    const continueButton =
        document.getElementById(
            "continueLevelButton"
        );

    if (continueButton) {

        continueButton.style.display =
            "none";

    }


    showScreen(
        "levelProgressScreen"
    );
}


/* =========================================================
   NEXT LEVEL
========================================================= */

function nextLevel() {

    levelWasCompleted = false;

    showLevelProgress();
}


/* =========================================================
   MESSAGE
========================================================= */

function showMessage(
    text,
    type
) {

    const message =
        document.getElementById(
            "message"
        );

    if (!message) {

        return;

    }

    message.textContent =
        text;

    if (type === "correct") {

        message.style.color =
            "#69f4bd";

    } else if (type === "wrong") {

        message.style.color =
            "#ff799e";

    } else {

        message.style.color =
            "#ffb39f";

    }
}


/* =========================================================
   SOUND
========================================================= */

function playSound(type) {

    if (!soundOn) {

        return;

    }

    try {

        const AudioClass =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioClass) {

            return;

        }

        const audio =
            new AudioClass();

        const oscillator =
            audio.createOscillator();

        const gain =
            audio.createGain();

        if (type === "correct") {

            oscillator.frequency.value =
                700;

        } else if (type === "wrong") {

            oscillator.frequency.value =
                180;

        } else if (type === "win") {

            oscillator.frequency.value =
                1000;

        }

        gain.gain.value =
            0.08;

        oscillator.connect(gain);

        gain.connect(
            audio.destination
        );

        oscillator.start();

        oscillator.stop(
            audio.currentTime + 0.15
        );

    } catch (error) {

        console.log(
            "Sound cannot play."
        );

    }
}


/* =========================================================
   HANGMAN CANVAS
========================================================= */

function drawHangman() {

    const canvas =
        document.getElementById(
            "hangmanCanvas"
        );

    if (!canvas) {

        return;

    }

    const context =
        canvas.getContext("2d");

    if (!context) {

        return;

    }

    context.clearRect(
        0,
        0,
        260,
        260
    );

    context.strokeStyle =
        "#55d9ff";

    context.lineWidth = 5;

    context.lineCap =
        "round";


    /* Gallows */

    context.beginPath();

    context.moveTo(
        25,
        235
    );

    context.lineTo(
        220,
        235
    );

    context.moveTo(
        65,
        235
    );

    context.lineTo(
        65,
        25
    );

    context.lineTo(
        170,
        25
    );

    context.lineTo(
        170,
        55
    );

    context.stroke();


    const wrongCount =
        wrongLetters.length;


    /* Head */

    if (wrongCount >= 1) {

        context.beginPath();

        context.arc(
            170,
            78,
            22,
            0,
            Math.PI * 2
        );

        context.stroke();

    }


    /* Body */

    if (wrongCount >= 2) {

        context.beginPath();

        context.moveTo(
            170,
            100
        );

        context.lineTo(
            170,
            155
        );

        context.stroke();

    }


    /* Left Arm */

    if (wrongCount >= 3) {

        context.beginPath();

        context.moveTo(
            170,
            118
        );

        context.lineTo(
            138,
            140
        );

        context.stroke();

    }


    /* Right Arm */

    if (wrongCount >= 4) {

        context.beginPath();

        context.moveTo(
            170,
            118
        );

        context.lineTo(
            202,
            140
        );

        context.stroke();

    }


    /* Left Leg */

    if (wrongCount >= 5) {

        context.beginPath();

        context.moveTo(
            170,
            155
        );

        context.lineTo(
            142,
            195
        );

        context.stroke();

    }


    /* Right Leg */

    if (wrongCount >= 6) {

        context.beginPath();

        context.moveTo(
            170,
            155
        );

        context.lineTo(
            198,
            195
        );

        context.stroke();

    }

}


/* =========================================================
   BUTTON HELPER
========================================================= */

function addClick(
    id,
    callback
) {

    const element =
        document.getElementById(id);

    if (element) {

        element.addEventListener(
            "click",
            callback
        );

    }
}


/* =========================================================
   PLAYER BUTTONS
========================================================= */

addClick(
    "playerContinueButton",
    selectPlayer
);


addClick(
    "playerBackButton",
    function() {

        showScreen(
            "welcomeScreen"
        );

    }
);


/* Enter key for player name */

const playerInput =
    document.getElementById(
        "playerNameInput"
    );

if (playerInput) {

    playerInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                selectPlayer();

            }

        }
    );

}


/* =========================================================
   START BUTTON
========================================================= */

addClick(
    "startButton",
    function() {

        showPlayerScreen();

    }
);


/* =========================================================
   HOW TO PLAY
========================================================= */

addClick(
    "howToPlayButton",
    function() {

        showScreen(
            "instructionScreen"
        );

    }
);


/* =========================================================
   INSTRUCTION BACK
========================================================= */

addClick(
    "instructionBackButton",
    function() {

        showScreen(
            "welcomeScreen"
        );

    }
);


/* =========================================================
   DEVICE BACK
========================================================= */

addClick(
    "deviceBackButton",
    function() {

        showPlayerScreen();

    }
);


/* =========================================================
   MODE BACK
========================================================= */

addClick(
    "modeBackButton",
    function() {

        showScreen(
            "deviceScreen"
        );

    }
);


/* =========================================================
   LAPTOP
========================================================= */

addClick(
    "laptopButton",
    function() {

        changeDeviceLayout(
            "laptop"
        );

        showScreen(
            "modeScreen"
        );

    }
);


/* =========================================================
   MOBILE
========================================================= */

addClick(
    "mobileButton",
    function() {

        changeDeviceLayout(
            "mobile"
        );

        showScreen(
            "modeScreen"
        );

    }
);


/* =========================================================
   MODES
========================================================= */

addClick(
    "peacefulButton",
    function() {

        startGame(
            "peaceful"
        );

    }
);


addClick(
    "easyButton",
    function() {

        startGame(
            "easy"
        );

    }
);


addClick(
    "hardButton",
    function() {

        startGame(
            "hard"
        );

    }
);


/* =========================================================
   GUESS
========================================================= */

addClick(
    "guessButton",
    function() {

        checkGuess();

    }
);


/* =========================================================
   GUESS ENTER
========================================================= */

const guessInput =
    document.getElementById(
        "guessInput"
    );

if (guessInput) {

    guessInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                checkGuess();

            }

        }
    );

}


/* =========================================================
   GAME MENU
========================================================= */

addClick(
    "menuButton",
    function() {

        levelWasCompleted =
            false;

        showLevelProgress();

    }
);


/* =========================================================
   COMPLETE MENU
========================================================= */

addClick(
    "completeMenuButton",
    function() {

        showScreen(
            "welcomeScreen"
        );

    }
);


/* =========================================================
   NEXT LEVEL
========================================================= */

addClick(
    "nextLevelButton",
    function() {

        nextLevel();

    }
);


/* =========================================================
   LEVEL CONTINUE
========================================================= */

addClick(
    "continueLevelButton",
    function() {

        nextLevel();

    }
);


/* =========================================================
   LEVEL MENU
========================================================= */

addClick(
    "levelMenuButton",
    function() {

        showScreen(
            "modeScreen"
        );

    }
);


/* =========================================================
   CHANGE PLAYER
========================================================= */

addClick(
    "changePlayerButton",
    function() {

        changePlayer();

    }
);


/* =========================================================
   SOUND
========================================================= */

addClick(
    "soundButton",
    function() {

        soundOn =
            !soundOn;

        const button =
            document.getElementById(
                "soundButton"
            );

        if (!button) {

            return;

        }

        button.textContent =
            soundOn
                ? "🔊"
                : "🔇";

    }
);


/* =========================================================
   MOBILE EXTRA STYLE
========================================================= */

const mobileStyle =
    document.createElement("style");

mobileStyle.textContent = `

    body.mobile-view .game-area {
        grid-template-columns: 1fr;
    }

    body.mobile-view .game-header {
        flex-direction: column;
        align-items: flex-start;
    }

    body.mobile-view .input-area {
        flex-direction: column;
    }

    body.mobile-view .input-area button {
        width: 100%;
    }

    body.mobile-view .answer-display {
        letter-spacing: 4px;
    }

`;

document.head.appendChild(
    mobileStyle
);


/* =========================================================
   LOGO SYSTEM - FIXED
========================================================= */

function addLogoToAllScreens() {

    const allScreens = document.querySelectorAll(".screen");

    allScreens.forEach(function(screen) {

        if (screen.querySelector(".side-game-logo")) {
            return;
        }

        const logo = document.createElement("img");

        logo.src = "./assets/hangman-logo.png";
        logo.alt = "Hangman Game Logo";
        logo.classList.add("side-game-logo");

        screen.appendChild(logo);

    });
}


/* =========================================================
   STARTUP LOGO ANIMATION - SAFE VERSION
========================================================= */

function showStartLogoAnimation() {

    try {

        const backgroundLogo =
            document.querySelector(".side-game-logo");

        /*
         * IMPORTANT:
         * If logo does not exist, DO NOT leave the page hidden.
         */

        if (!backgroundLogo) {

            finishLogoAnimation();
            return;

        }


        const startRect =
            backgroundLogo.getBoundingClientRect();


        /*
         * If logo has no size, skip animation safely.
         */

        if (
            startRect.width <= 0 ||
            startRect.height <= 0
        ) {

            finishLogoAnimation();
            return;

        }


        const logo =
            document.createElement("img");

        logo.src =
            backgroundLogo.src;

        logo.alt =
            "Hangman Game";

        logo.className =
            "startup-moving-logo";


        document.body.appendChild(logo);


        document.documentElement.classList.add(
            "logo-opening"
        );


        backgroundLogo.style.opacity =
            "0";


        logo.style.position =
            "fixed";

        logo.style.zIndex =
            "99999";

        logo.style.left =
            startRect.left + "px";

        logo.style.top =
            startRect.top + "px";

        logo.style.width =
            startRect.width + "px";

        logo.style.height =
            startRect.height + "px";


        const ratio =
            backgroundLogo.naturalWidth &&
            backgroundLogo.naturalHeight
                ? backgroundLogo.naturalWidth /
                  backgroundLogo.naturalHeight
                : 1;


        const targetWidth =
            Math.min(
                850,
                window.innerWidth * 0.78
            );


        const targetHeight =
            targetWidth / ratio;


        const targetLeft =
            (window.innerWidth -
                targetWidth) / 2;


        const targetTop =
            (window.innerHeight -
                targetHeight) / 2;


        /*
         * Force browser to register initial position.
         */

        logo.getBoundingClientRect();


        requestAnimationFrame(function() {

            logo.style.transition =
                "left 900ms cubic-bezier(.16,1,.3,1)," +
                "top 900ms cubic-bezier(.16,1,.3,1)," +
                "width 900ms cubic-bezier(.16,1,.3,1)," +
                "height 900ms cubic-bezier(.16,1,.3,1)," +
                "transform 900ms cubic-bezier(.16,1,.3,1)";


            logo.style.left =
                targetLeft + "px";

            logo.style.top =
                targetTop + "px";

            logo.style.width =
                targetWidth + "px";

            logo.style.height =
                targetHeight + "px";

            logo.style.transform =
                "scale(1.08) rotate(2deg)";

        });


        /*
         * Small bounce.
         */

        setTimeout(function() {

            if (!logo.isConnected) {
                return;
            }

            logo.style.transition =
                "transform 350ms ease-in-out";

            logo.style.transform =
                "scale(0.96) rotate(-1deg)";

        }, 950);


        setTimeout(function() {

            if (!logo.isConnected) {
                return;
            }

            logo.style.transform =
                "scale(1) rotate(0deg)";

        }, 1300);


        /*
         * Return logo to original position.
         */

        setTimeout(function() {

            if (!logo.isConnected) {
                return;
            }

            logo.style.transition =
                "left 900ms cubic-bezier(.7,0,.84,0)," +
                "top 900ms cubic-bezier(.7,0,.84,0)," +
                "width 900ms cubic-bezier(.7,0,.84,0)," +
                "height 900ms cubic-bezier(.7,0,.84,0)," +
                "transform 900ms cubic-bezier(.7,0,.84,0)";


            logo.style.left =
                startRect.left + "px";

            logo.style.top =
                startRect.top + "px";

            logo.style.width =
                startRect.width + "px";

            logo.style.height =
                startRect.height + "px";

            logo.style.transform =
                "scale(1) rotate(0deg)";

        }, 1700);


        /*
         * FINISH.
         *
         * This is the important part.
         */

        setTimeout(function() {

            finishLogoAnimation(logo);

        }, 2650);


    } catch (error) {

        console.error(
            "Logo animation error:",
            error
        );

        /*
         * NEVER leave screen blank.
         */

        finishLogoAnimation();

    }

}


/* =========================================================
   FINISH LOGO ANIMATION
   NEVER LEAVE PAGE BLANK
========================================================= */

function finishLogoAnimation(logo) {

    /*
     * Remove hidden state.
     */

    document.documentElement.classList.remove(
        "logo-opening"
    );


    /*
     * Remove moving logo.
     */

    if (logo && logo.parentNode) {

        logo.parentNode.removeChild(logo);

    }


    /*
     * Restore all visual elements.
     */

    const backgroundLogos =
        document.querySelectorAll(
            ".side-game-logo"
        );

    backgroundLogos.forEach(function(item) {

        item.style.opacity = "0.95";

    });


    const container =
        document.querySelector(".container");

    if (container) {

        container.style.opacity = "1";
        container.style.visibility = "visible";

    }


    const video =
        document.getElementById(
            "gameVideoBackground"
        );

    if (video) {

        video.style.opacity = "1";

        video.play().catch(function() {});

    }


    const overlay =
        document.getElementById(
            "videoOverlay"
        );

    if (overlay) {

        overlay.style.opacity = "1";

    }


    /*
     * Remove black intro layer.
     */

    const blackout =
        document.getElementById(
            "logoBlackout"
        );

    if (blackout) {

        blackout.classList.add("reveal");

        setTimeout(function() {

            blackout.style.display = "none";

        }, 1000);

    }


    /*
     * MOST IMPORTANT:
     * Show welcome screen.
     */

    showScreen("welcomeScreen");

}


/* =========================================================
   EMERGENCY BLANK-SCREEN PREVENTION
========================================================= */

function emergencyScreenFix() {

    document.documentElement.classList.remove(
        "logo-opening"
    );


    const container =
        document.querySelector(".container");

    if (container) {

        container.style.opacity = "1";
        container.style.visibility = "visible";

    }


    const video =
        document.getElementById(
            "gameVideoBackground"
        );

    if (video) {

        video.style.opacity = "1";

    }


    const overlay =
        document.getElementById(
            "videoOverlay"
        );

    if (overlay) {

        overlay.style.opacity = "1";

    }


    const blackout =
        document.getElementById(
            "logoBlackout"
        );

    if (blackout) {

        blackout.classList.add("reveal");

        blackout.style.pointerEvents =
            "none";

    }


    const welcome =
        document.getElementById(
            "welcomeScreen"
        );

    if (welcome) {

        document
            .querySelectorAll(".screen")
            .forEach(function(screen) {

                screen.classList.remove("active");

            });

        welcome.classList.add("active");

    }

}


/* =========================================================
   GAME INITIALIZATION
========================================================= */

function initializeGame() {

    try {

        /*
         * First make all screens ready.
         */

        addLogoToAllScreens();


        /*
         * Make welcome screen active.
         */

        showScreen(
            "welcomeScreen"
        );


        /*
         * Make container visible.
         */

        const container =
            document.querySelector(
                ".container"
            );

        if (container) {

            container.style.opacity = "1";
            container.style.visibility = "visible";

        }


        /*
         * Start background video.
         */

        const video =
            document.getElementById(
                "gameVideoBackground"
            );

        if (video) {

            video.style.opacity = "1";

            const playPromise =
                video.play();

            if (
                playPromise &&
                typeof playPromise.catch === "function"
            ) {

                playPromise.catch(function() {

                    console.log(
                        "Video autoplay waiting for browser permission."
                    );

                });

            }

        }


        /*
         * Overlay visible.
         */

        const overlay =
            document.getElementById(
                "videoOverlay"
            );

        if (overlay) {

            overlay.style.opacity = "1";

        }


        /*
         * Start logo animation.
         */

        setTimeout(function() {

            showStartLogoAnimation();

        }, 100);


    } catch (error) {

        console.error(
            "Game initialization error:",
            error
        );

        emergencyScreenFix();

    }

}


/* =========================================================
   GLOBAL FAILSAFE
   If anything goes wrong, page becomes visible.
========================================================= */

setTimeout(function() {

    const opening =
        document.documentElement.classList.contains(
            "logo-opening"
        );

    const welcome =
        document.getElementById(
            "welcomeScreen"
        );

    /*
     * If logo animation is still running
     * after 4 seconds, force finish.
     */

    if (opening) {

        console.warn(
            "Logo animation timeout - forcing finish."
        );

        finishLogoAnimation();

    }


    /*
     * If no screen is active,
     * show welcome screen.
     */

    if (
        welcome &&
        !document.querySelector(
            ".screen.active"
        )
    ) {

        emergencyScreenFix();

    }

}, 4500);


/* =========================================================
   FINAL START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeGame,
        {
            once: true
        }
    );

} else {

    initializeGame();

}