public class ObserverPatternDemo {
    public static void main(String[] args) {
        Subject subject = new Subject();

        Observer observer1 = new Observer() {
            @Override
            public void update(String message) {
                System.out.println("Observer 1: " + message);
            }
        };
        
        Observer observer2 = new Observer() {
            @Override
            public void update(String message) {
                System.out.println("Observer 2: " + message);
            }
        };

        subject.attach(observer1);
        subject.attach(observer2);

        subject.setMessage("First message!");
        subject.setMessage("Second message!");
    }
}