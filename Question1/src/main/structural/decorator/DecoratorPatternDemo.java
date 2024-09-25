package main.structural.decorator;

public class DecoratorPatternDemo {
    public static void main(String[] args) {
        Shape circle = new Circle();
        Shape redCircle = new RedShapeDecorator(circle);

        System.out.println("Normal Circle:");
        circle.draw();

        System.out.println("\nRed Decorated Circle:");
        redCircle.draw();
    }
}
