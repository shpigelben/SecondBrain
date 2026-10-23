#Arduino

```cpp
void setup() {
	Serial.begin(9600)
}

void loop() {
	analogWrite(pin, value);
}
```

- why 5volts are read as 1023 ?


# Reading From Serial Monitor
- Integers - `Serial.parseInt()`
- Floats - `Serial.parseFloat()`
- Strings - `Serial.readString()`


# Example
Two projects that require interacting with the serial monitor, both work with the following circuit diagram 
![[circuit.svg]]
## Choosing an LED with numbers
```cpp

```



## Choosing an LED with a string

```cpp

int pinNum;
int delayTime = 500;
int blinkNum;
String ledColor;
  

void Blink(int pinNum, int delayTime) {
  digitalWrite(pinNum, HIGH);
  delay(delayTime);
  digitalWrite(pinNum, LOW);
  delay(delayTime);
}
  

void setup() {
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  pinMode(4, OUTPUT);
}

  
void loop() {
  Serial.print("LED Color: ");
  

  while ( Serial.available() == 0) {}
  

// this is assuming the blue LED is in pin 2 and the red in pin 3
  ledColor = Serial.readString();
  if (ledColor == "blue") {
    pinNum = 2;
  } else if (ledColor == "red") {
    pinNum = 4;

  }
  Serial.println(ledColor);
  Serial.print("Number of Blinks: ");  
  while ( Serial.available() == 0) {}  

  blinkNum = Serial.parseInt();
  Serial.println(blinkNum);  

  int j;
  for ( j=1 ; j <= blinkNum ; j = j + 1) {
    Blink(pinNum, delayTime);
  }

}

```

