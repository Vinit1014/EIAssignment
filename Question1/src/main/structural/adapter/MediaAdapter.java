package main.structural.adapter;

public class MediaAdapter implements MediaPlayer {
    private Mp3Player mp3Player;

    public MediaAdapter() {
        this.mp3Player = new Mp3Player();
    }

    @Override
    public void play(String audioType, String fileName) {
        if ("mp3".equalsIgnoreCase(audioType)) {
            mp3Player.play(audioType, fileName);
        } else {
            System.out.println("Playing non-mp3 file: " + fileName + " via adapter");
        }
    }
}
