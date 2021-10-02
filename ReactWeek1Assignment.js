class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentParam) {
        if (this.students.some(iteratedStudent => iteratedStudent.email === studentParam.email)) {
            console.log(`Cannot register ${studentParam.email} because he/she is already registered.`);
        } else {
            this.students.push(studentParam);
            console.log(`Registering ${studentParam.email} to the bootcamp ${this.name}.`);
        }
        return this.students;
    }
}

const student1 = new Student ("Wen","Wen@gmail.com","USA");
const bootcamp = new Bootcamp ("Nucamp Web Dev Fundamentals","React");

bootcamp.registerStudent(student1)


// Directions to this workshop assignment

// Task 1
// In ReactWeek1Assignment.js, you will create two classes: Student and Bootcamp.
// The Student class should include:
// a constructor;
// the constructor parameters: "name", "email", and "community";
// the constructor should assign the parameters' values to class properties of the same name using the this keyword.
// The Bootcamp class should include:
// a constructor;
// the constructor parameters: "name", "level", and a third parameter "students" which is an array initialized as empty (using default function parameters syntax);
// the constructor should assign the parameters values to class properties of the same name using the this keyword.
// Write the code for the Bootcamp class so that if it the "students" parameter is not passed in, it is by default initialized to be an empty array from within the constructor parameter list itself.


// Task 2
// In this task, you will add the method registerStudent() to the Bootcamp class.
// The method registerStudent():

// Should have a single parameter, which takes an object created from the Student class as its argument
// (so a name like student or studentToRegister would be a sensible name to use as the parameter)
// Checks if any student with the same email address already exists in the Bootcamp's students array. 
// Use an Array method to verify if the student's email address is already registered. There are multiple ways to make this verification, including a method you have learned this week. Research and find one way. 
// Adds the passed-in students object to the end of the Bootcamp's students array only if not already registered. There should be no duplicate emails in the students array.
// Using console.log, writes the outcome of the registration (e.g. "Registering neo@matrix.com to the bootcamp Web Dev Fundamentals.")
// At the end of the method, returns the current Bootcamp students array. 


// Task 3
// Open the HTML page in your browser, then open the developer console on that page.
// in the developer console:
// Create a new bootcamp using the Bootcamp class. Follow the examples given in the video for this lesson, or create your own. 
// Create one or more student object using the Student class. Follow the examples given in the video for this assignment, or create your own. 
// Register the student object(s) to one of the bootcamp objects you created. Verify that registration succeeded. 
// Verify that you cannot register the same student twice to a Bootcamp.
// If any of the above instructions in this task are confusing to you, watch the assignment video for clarification. 