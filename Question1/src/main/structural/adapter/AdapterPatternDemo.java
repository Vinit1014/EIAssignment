package main.structural.adapter;

public class AdapterPatternDemo {
    public static void main(String[] args) {
        MediaPlayer adapter = new MediaAdapter();
        
        adapter.play("mp3", "song.mp3");
        adapter.play("mp4", "video.mp4");
    }
}
