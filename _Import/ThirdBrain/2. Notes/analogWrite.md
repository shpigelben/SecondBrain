#Arduino

```cpp
void setup() {
	pinMode(pin, OUTPUT)
}

void loop() {
	analogWrite(pin, value);
}
```

- The arduino pins can output anywhere from 0 volts to 5 volts. Input value ranges from 0 to 255. This corresponds to the __8bit__ resolution of the arduino ($2^{8\text{-bit}}$). The 0-5 volt range can be represented by 256 values in between

- arduino pins that output variable voltage are marks by a dash or a tilde

* The analogWrite works with what is called [[Pulse Width Modulation]]


# Controlling an LED with variable voltage

![[circuit(1).svg]]

```cpp
int readPin = A1;
int writePin = 5;
int warningPin = 4;
int reading = 0;
float voltageReading;
float voltageWriting;
float threshold = 2.1;
int delayTime = 100; //miliseconds  

void setup() {
  pinMode(readPin, INPUT);
  pinMode(writePin, OUTPUT);
  pinMode(warningPin, OUTPUT);
  Serial.begin(9600);
}

  
void loop() {
  reading = analogRead(readPin);
  voltageReading = reading*(5./1023.);  //analogRead values to voltage
  voltageWriting = reading*(255./1023.); //analogRead values to analogWrite
  Serial.println(voltageReading);

  analogWrite(writePin, voltageWriting);
  
  if (voltageReading > threshold) {
    digitalWrite(warningPin, HIGH);
  } else if (voltageReading < threshold) {
    digitalWrite(warningPin, LOW);
  }

}

```