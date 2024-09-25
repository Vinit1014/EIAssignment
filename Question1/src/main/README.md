# Assignment 1.

This repository contains a comprehensive implementation of six different software design patterns in Java, each demonstrated with practical use cases. The project covers two behavioral, two creational, and two structural patterns, focusing on modularity, reusability, and adherence to design principles.

## Features

- **Modular code structure**: Organized into separate folders for each design pattern category.
- **Extensibility**: Each design pattern is implemented in a way that can be easily extended or modified to handle new requirements.
- **Best practices**: Follows SOLID principles and design pattern best practices for better maintainability and scalability.

## Design Patterns Implemented

### 1. Behavioral Design Patterns

#### a. Observer Pattern
The Observer Pattern is used to demonstrate how objects (observers) can listen to state changes in another object (subject) and react accordingly. This is typically used in scenarios like notification systems.

**Key Decision**:
- The **Subject** class manages a list of observers and notifies them when its state changes, allowing dynamic addition and removal of observers.
- This pattern allows for easy scalability and real-time communication between components.

#### b. Strategy Pattern
This pattern is demonstrated by allowing dynamic switching between different algorithms (e.g., addition, subtraction) at runtime.

**Key Decision**:
- **Strategy** encapsulates each algorithm separately, making it easy to add or remove new strategies without affecting the overall system.

### 2. Creational Design Patterns

#### a. Singleton Pattern
The Singleton Pattern ensures that a class has only one instance and provides a global access point to it. It is demonstrated using a logger system that ensures only one logging service exists in the system.

**Key Decision**:
- The instance of the Singleton class is created lazily to improve resource usage, and a private constructor ensures that no additional instances can be created.

#### b. Factory Pattern
The Factory Pattern demonstrates how an object can be created without exposing the instantiation logic to the client, allowing for flexibility in object creation.

**Key Decision**:
- A **Factory** class is used to centralize the creation logic, making it easy to add new types of objects (e.g., different animals) without changing the core logic.

### 3. Structural Design Patterns

#### a. Adapter Pattern
The Adapter Pattern shows how to integrate incompatible interfaces by using an adapter to translate requests between systems. It demonstrates flexibility in supporting new communication protocols (e.g., integrating different media players).

**Key Decision**:
- The Adapter class wraps incompatible objects, allowing systems to work together without modifying existing code.

#### b. Decorator Pattern
This pattern is demonstrated by adding new functionality to objects dynamically at runtime without modifying their structure. It is useful for extending features in a flexible and scalable way (e.g., adding color to shapes).

**Key Decision**:
- Decorators are chained around the core functionality, making it easy to add or remove additional behaviors without altering the object itself.

## Requirements

- Java (JDK 8 or higher)
- Basic knowledge of design patterns

## How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/design-patterns-assignment.git
   cd design-patterns-assignment
   ```

2. **Compile the code**:
   ```bash
   javac main/**/*.java
   ```

3. **Run any demo**, for example:
   - **Observer Pattern**:
     ```bash
     java main.behavioral.observer.ObserverPatternDemo
     ```
   - **Singleton Pattern**:
     ```bash
     java main.creational.singleton.SingletonPatternDemo
     ```

## Folder Structure

```
design-patterns-assignment/
│
├── src/
│   ├── main/
│   │   ├── behavioral/
│   │   │   ├── observer/
│   │   │   └── strategy/
│   │   ├── creational/
│   │   │   ├── singleton/
│   │   │   └── factory/
│   │   ├── structural/
│   │   │   ├── adapter/
│   │   │   └── decorator/
│   └── test/   # Unit tests can be added here
└── README.md
```

## Key Decision-Making Process

The primary decisions taken during the implementation of this project include:

1. **Modularization**: Each pattern is placed in its own folder under `behavioral`, `creational`, or `structural` to ensure clean separation and maintainability.
2. **Creativity**: Practical use cases like notification systems, media players, and calculators were chosen to showcase each pattern in a real-world context.
3. **Spontaneity and Extensibility**: The code is designed with future scalability in mind. For example, new algorithms can be added easily to the strategy pattern or new types of shapes in the decorator pattern without altering existing code.
4. **Code Reusability**: Common patterns like Singleton and Factory are implemented with reusability in mind, allowing them to be easily integrated into other projects.
