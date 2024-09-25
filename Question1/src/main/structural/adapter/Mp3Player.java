package main.structural.adapter;

public class Mp3Player implements MediaPlayer {
    @Override
    public void play(String audioType, String fileName) {
        if ("mp3".equalsIgnoreCase(audioType)) {
            System.out.println("Playing mp3 file: " + fileName);
        } else {
            System.out.println("Invalid format for Mp3Player.");
        }
    }
}
