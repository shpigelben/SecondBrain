#Arduino

```cpp
void setup() {
	pinMode(pin, INPUT)
}

void loop() {
 analogRead(pin, value);
}
```

- Analog reading pins are special ones and are marked A0 to A5

- analogRead is conveniently used in conjunction with [[Serial]] so that reading values can be displayed


> [!NOTE] Example Project
> Analog read receives data from the potentiometer and turns on a red LED when voltage threshold is arrived at

```cpp
int readPin = A1;
int ledPin = 4;
int reading = 0;
float voltage = 0;
float threshold = 3.5;
int delayTime = 100; //miliseconds

void setup() {
	pinMode(readPin, INPUT);
	pinMode(ledPin, OUTPUT);
	Serial.begin(9600);
}
  

void loop() {
	reading = analogRead(readPin);
	voltage = reading*(5./1023.);
	Serial.println(voltage);

	if (voltage > 2.5) {
	    digitalWrite(ledPin, HIGH);
    } else if (voltage < threshold) {
	    digitalWrite(ledPin, LOW);
    }

	delay(delayTime);
}
```