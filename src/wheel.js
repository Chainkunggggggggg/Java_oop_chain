class WheeledRobot extends Robot {
    private int wheelCount;
    private double wearLevel;
    private double wearPerUnit;
    WheeledRobot (String name, int wheelCount, double wearPerUnit) {
    super(name);
    this.wheelCount = wheelCount;
    this.wearPerUnit = wearPerUnit;
    this.wearLevel = 0;
}
@Override
void moveForward(int units) {
    super.moveForward(units);
    wearLevel += units * wearPerUnit;
    if (wearLevel > 0.8) {
        System.out.println("Wear Level exceeded,robot can no longer work");
    }
}
double getWearLevel() {
    return wearLevel;
}
}