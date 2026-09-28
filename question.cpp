#include "question.h"
#include <algorithm>
#include <cctype>

using namespace std;

static vector<vector<Question> > levels = {
{
 {"OOP BASICS","What does OOP stand for?","OBJECT ORIENTED PROGRAMMING","It is a programming approach based on objects."},
 {"OOP BASICS","Which OOP feature hides data?","ENCAPSULATION","It wraps data and methods together."},
 {"OOP BASICS","Which OOP feature allows reuse?","INHERITANCE","A child class can reuse a parent class."},
 {"OOP BASICS","Which OOP concept gives one interface many forms?","POLYMORPHISM","It means many forms."},
 {"OOP BASICS","What is a blueprint for objects?","CLASS","Objects are created from it."}
},

{
 {"CLASSES & OBJECTS","An instance of a class is called what?","OBJECT","It is created from a class."},
 {"CLASSES & OBJECTS","Which keyword defines a class in C++?","CLASS","It starts a class declaration."},
 {"CLASSES & OBJECTS","Which keyword creates an object dynamically?","NEW","It allocates memory dynamically."},
 {"CLASSES & OBJECTS","Which operator accesses class members through an object?","DOT","Example: object.member"},
 {"CLASSES & OBJECTS","Which operator accesses members through a pointer?","ARROW","Example: pointer->member"}
},

{
 {"CONSTRUCTORS","Which function has the same name as the class?","CONSTRUCTOR","It is called automatically when an object is created."},
 {"CONSTRUCTORS","Which constructor takes no arguments?","DEFAULT CONSTRUCTOR","It can be called without arguments."},
 {"CONSTRUCTORS","Which constructor copies another object?","COPY CONSTRUCTOR","It initializes one object from another."},
 {"CONSTRUCTORS","Can constructors have a return type?","NO","A constructor has no return type."},
 {"CONSTRUCTORS","When is a constructor called?","OBJECT CREATION","It is called when the object is initialized."}
},

{
 {"DESTRUCTORS","Which symbol starts a destructor name?","TILDE","The destructor name starts with ~."},
 {"DESTRUCTORS","What is the name of a destructor based on?","CLASS NAME","It uses the class name after ~."},
 {"DESTRUCTORS","When is a destructor called?","OBJECT DESTRUCTION","It is called when an object is destroyed."},
 {"DESTRUCTORS","Can a destructor take parameters?","NO","A destructor cannot have parameters."},
 {"DESTRUCTORS","Can a class have more than one destructor?","NO","Only one destructor exists for a class."}
},

{
 {"ENCAPSULATION","What access specifier hides members from outside?","PRIVATE","Private members are not directly accessible from outside."},
 {"ENCAPSULATION","Which access specifier is available everywhere?","PUBLIC","Public members can be accessed through an object."},
 {"ENCAPSULATION","Which specifier is accessible to derived classes?","PROTECTED","Derived classes can access protected members."},
 {"ENCAPSULATION","Encapsulation combines data and what?","METHODS","Data and methods are kept together."},
 {"ENCAPSULATION","A getter is used to do what?","READ DATA","A getter normally returns a value."}
},

{
 {"INHERITANCE","Which symbol denotes inheritance in C++?","COLON","Example: class B : public A"},
 {"INHERITANCE","Inheritance creates a parent-child relationship between what?","CLASSES","Classes can inherit from other classes."},
 {"INHERITANCE","What is inheritance from one base class called?","SINGLE INHERITANCE","One base class is used."},
 {"INHERITANCE","What is inheritance from two base classes called?","MULTIPLE INHERITANCE","Two or more base classes are used."},
 {"INHERITANCE","What is inheritance through a chain called?","MULTILEVEL INHERITANCE","Example: A -> B -> C"}
},

{
 {"POLYMORPHISM","Polymorphism means what?","MANY FORMS","The same interface can behave differently."},
 {"POLYMORPHISM","Which polymorphism happens at compile time?","COMPILE TIME","Overloading is a common example."},
 {"POLYMORPHISM","Which polymorphism happens at runtime?","RUNTIME","Virtual functions support it."},
 {"POLYMORPHISM","Which keyword enables runtime overriding through a base pointer?","VIRTUAL","It is used for virtual functions."},
 {"POLYMORPHISM","Same function name with different parameters is called?","OVERLOADING","The parameter list changes."}
},

{
 {"FUNCTIONS","What keyword returns no value?","VOID","It is used when a function returns nothing."},
 {"FUNCTIONS","A function calling itself is called what?","RECURSION","The function repeats through self-calls."},
 {"FUNCTIONS","Values passed into a function are called what?","ARGUMENTS","They are supplied when calling a function."},
 {"FUNCTIONS","A function declaration is also called what?","PROTOTYPE","It tells the compiler about the function."},
 {"FUNCTIONS","What symbol ends a C++ statement?","SEMICOLON","The symbol is ;"}
},

{
 {"OPERATOR OVERLOADING","Which keyword is used for operator functions?","OPERATOR","It appears in operator function declarations."},
 {"OPERATOR OVERLOADING","Can + be overloaded in C++?","YES","Operators can be overloaded for user-defined types."},
 {"OPERATOR OVERLOADING","Can operators be given new meaning for user types?","YES","This is operator overloading."},
 {"OPERATOR OVERLOADING","Which operator accesses a member through pointer?","ARROW","The -> operator is used."},
 {"OPERATOR OVERLOADING","Which operator cannot be overloaded?","SCOPE RESOLUTION","The :: operator cannot be overloaded."}
},

{
 {"VIRTUAL FUNCTIONS","Which keyword declares a virtual function?","VIRTUAL","It supports dynamic dispatch."},
 {"VIRTUAL FUNCTIONS","Virtual functions support which binding?","DYNAMIC BINDING","The call is resolved at runtime."},
 {"VIRTUAL FUNCTIONS","A pure virtual function commonly uses which value?","ZERO","Example: virtual void f() = 0;"},
 {"VIRTUAL FUNCTIONS","A class with a pure virtual function is called what?","ABSTRACT CLASS","It cannot be instantiated directly."},
 {"VIRTUAL FUNCTIONS","Which pointer is commonly used for runtime polymorphism?","BASE POINTER","A base pointer can refer to a derived object."}
},

{
 {"ABSTRACT CLASSES","Can an abstract class be instantiated?","NO","It has at least one pure virtual function."},
 {"ABSTRACT CLASSES","What kind of function makes a class abstract?","PURE VIRTUAL FUNCTION","It is declared with = 0."},
 {"ABSTRACT CLASSES","What symbol represents a pure virtual function?","EQUALS ZERO","The declaration ends with = 0."},
 {"ABSTRACT CLASSES","An abstract class is mainly used as what?","INTERFACE","It defines behavior for derived classes."},
 {"ABSTRACT CLASSES","Can an abstract class have constructors?","YES","It can initialize its base part."}
},

{
 {"STATIC MEMBERS","Which keyword creates a static data member?","STATIC","It makes the member belong to the class."},
 {"STATIC MEMBERS","A static data member is shared by what?","ALL OBJECTS","There is one class-level copy."},
 {"STATIC MEMBERS","How many copies of a static data member exist per class?","ONE","The storage is shared."},
 {"STATIC MEMBERS","A static member function can directly access which members?","STATIC MEMBERS","It has no this pointer."},
 {"STATIC MEMBERS","Static data belongs to the class rather than what?","OBJECT","It is associated with the class."}
},

{
 {"FRIEND FUNCTIONS","Which keyword allows a non-member to access private data?","FRIEND","A friend can access private/protected members."},
 {"FRIEND FUNCTIONS","Is a friend function a class member?","NO","It is a non-member function."},
 {"FRIEND FUNCTIONS","Can a friend function access private members?","YES","Friendship grants access."},
 {"FRIEND FUNCTIONS","Friendship is declared inside which construct?","CLASS","The friend declaration is written in the class."},
 {"FRIEND FUNCTIONS","Friendship is granted by whom?","CLASS","The class decides who is a friend."}
},

{
 {"EXCEPTION HANDLING","Which block contains risky code?","TRY","Potentially failing code is placed in try."},
 {"EXCEPTION HANDLING","Which block handles an exception?","CATCH","It receives an exception."},
 {"EXCEPTION HANDLING","Which keyword raises an exception?","THROW","It sends an exception to a handler."},
 {"EXCEPTION HANDLING","Exception handling is used to handle what?","ERROR","It handles exceptional situations."},
 {"EXCEPTION HANDLING","Can multiple catch blocks be used?","YES","Different exception types can have different handlers."}
},

{
 {"FILE HANDLING","Which class writes to a file?","OFSTREAM","It is used for output file streams."},
 {"FILE HANDLING","Which class reads from a file?","IFSTREAM","It is used for input file streams."},
 {"FILE HANDLING","Which class handles both input and output files?","FSTREAM","It supports file input and output."},
 {"FILE HANDLING","Which function opens a file?","OPEN","The stream open() function opens a file."},
 {"FILE HANDLING","Which function closes a file?","CLOSE","The stream close() function closes it."}
},

{
 {"TEMPLATES","Templates support what kind of programming?","GENERIC PROGRAMMING","One definition can work with multiple types."},
 {"TEMPLATES","Which keyword starts a template declaration?","TEMPLATE","It introduces template parameters."},
 {"TEMPLATES","A template can work with different what?","DATA TYPES","For example int, float or class types."},
 {"TEMPLATES","Which bracket holds template parameters?","ANGLE BRACKETS","Example: template <class T>"},
 {"TEMPLATES","A class template creates a family of what?","CLASSES","The type is supplied as a parameter."}
},

{
 {"STL","What does STL stand for?","STANDARD TEMPLATE LIBRARY","It provides reusable C++ containers and algorithms."},
 {"STL","Which STL container stores a dynamic sequence of elements?","VECTOR","It is a dynamic array-like container."},
 {"STL","Which STL container follows FIFO?","QUEUE","First In First Out."},
 {"STL","Which STL container follows LIFO?","STACK","Last In First Out."},
 {"STL","Which STL container stores key-value pairs?","MAP","It stores keys mapped to values."}
},

{
 {"POINTERS & REFERENCES","Which symbol declares a pointer?","ASTERISK","Example: int *p;"},
 {"POINTERS & REFERENCES","Which symbol gets the address of a variable?","AMPERSAND","Example: &x"},
 {"POINTERS & REFERENCES","Which operator dereferences a pointer?","ASTERISK","It accesses the pointed value."},
 {"POINTERS & REFERENCES","A reference is an alias for what?","VARIABLE","It provides another name for an existing object."},
 {"POINTERS & REFERENCES","A null pointer points to what?","NOTHING","It does not point to a valid object."}
},

{
 {"MEMORY & OBJECTS","Which operator allocates dynamic memory?","NEW","It creates an object or array dynamically."},
 {"MEMORY & OBJECTS","Which operator releases memory allocated by new?","DELETE","It releases dynamically allocated memory."},
 {"MEMORY & OBJECTS","What should clean up an object when its lifetime ends?","DESTRUCTOR","The destructor performs object cleanup."},
 {"MEMORY & OBJECTS","Memory allocated at runtime is called what?","DYNAMIC MEMORY","It is requested while the program runs."},
 {"MEMORY & OBJECTS","A pointer referring to deleted memory is called what?","DANGLING POINTER","It should not be dereferenced."}
},

{
 {"C++ BASICS","Which header is commonly used for cout and cin?","IOSTREAM","It provides standard input and output streams."},
 {"C++ BASICS","Which object prints output to console?","COUT","It is the standard output stream."},
 {"C++ BASICS","Which object reads input from console?","CIN","It is the standard input stream."},
 {"C++ BASICS","Which namespace is commonly used in basic C++ programs?","STD","Standard library names are in std."},
 {"C++ BASICS","What is the standard C++ file extension?","CPP","C++ source files commonly use .cpp."}
}
};

vector<Question> getLevelQuestions(int level) {
    if (level < 1) level = 1;
    if (level > (int)levels.size()) level = (int)levels.size();

    return levels[level - 1];
}
