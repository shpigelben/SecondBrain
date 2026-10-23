#Arduino

```cpp
int redPin = 11, greenPin = 10, bluePin = 9;  

void setup() {
  pinMode(A1, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
  Serial.begin(9600);
}  

void colorChange(int mainPin, int secondaryPin, int current, int goTo,float speed, float ratio) {
  if (current < goTo) {
    for (current ; current <= goTo ; current += speed) {
      analogWrite(mainPin, current);
      analogWrite(secondaryPin,round(current*ratio));
      delay(15);
    }
  }  

  else if (current >= goTo) {
    for (current ; current >= goTo ; current -= speed) {
      analogWrite(mainPin, current);
      analogWrite(secondaryPin,round(current*ratio));
      delay(15);
    }
  }
}
  
void loop() {

int currentRed, currentGreen, currentBlue;

int goTo = random(70,240);
int speed = random(1,3);
float ratio = 0.125;

colorChange(redPin, greenPin, currentRed, goTo, speed, ratio);
// analogWrite(redPin,80);
}
```

- [ ] implement inverse sampling from a normal distribution for the goTo value