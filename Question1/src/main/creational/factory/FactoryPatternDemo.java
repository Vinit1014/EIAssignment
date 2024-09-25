package main.creational.factory;

public class FactoryPatternDemo {
    public static void main(String[] args) {
        AnimalFactory factory = new AnimalFactory();

        Animal dog = factory.getAnimal("Dog");
        dog.speak();

        Animal cat = factory.getAnimal("Cat");
        cat.speak();
    }
}
