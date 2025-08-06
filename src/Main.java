public class Robot {
    protected String name;
    protected double x = 0, y = 0;
    protected double direction = 0; // 0 = right, 90 = up

    public Robot(String name) {
        this.name = name;
    }

    public void moveForward(double distance) {
        double rad = Math.toRadians(direction);
        x += distance * Math.cos(rad);
        y += distance * Math.sin(rad);
    }

    public void rotate(double angle) {
        direction = (direction + angle) % 360;
    }

    public String getLocation() {
        return String.format("%s at (%.2f, %.2f)", name, x, y);
    }
}