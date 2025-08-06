class Robot {
    private String name;
    private int x;
    private int y;
    private int orientation;

    Robot(String name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.orientation = 0;
}

void moveForward(int units) {
    switch (orientation) {
        case 0:
            y += units;
            break;
        case 90:
            x += units;
            break;
        case 180:
            y -= units;
            break;
        case 270:
            x -= units;
            break;
        default:
            System.out.println("Error");
            break;
    }
}

void rotate(int degrees) {
    orientation = (orientation + degrees) % 360;
    if (orientation < 0) orientation += 360;
}

String getLocation() {
    if (orientation == 0) return name +" is at (" + x + "," + y + "), orientation is North.";
    else if (orientation == 90) return name +" is at (" + x + "," + y + "), orientation is East.";
    else if (orientation == 180) return name +" is at (" + x + "," + y + "), orientation is South.";
    else if (orientation == 270) return name +" is at (" + x + "," + y + "), orientation is West.";
    else return "Error";
}
}