#Arduino

```cpp
void setup() {
pinMode(1, OUTPUT);
pinMode(3, OUTPUT);
pinMode(5, OUTPUT);
}

void binary(int c, int b, int a) {

  if (a == 0) {
    a = LOW;
  } else if (a == 1) {
    a = HIGH; }  

  if (b == 0) {
    b = LOW;
  } else if (b == 1) {
    b = HIGH; }  

  if (c == 0) {
    c = LOW;
  } else if (c == 1) {
    c = HIGH; }

 digitalWrite(1, a);
 digitalWrite(3, b);
 digitalWrite(5, c);
 delay(500);
}

void loop() {
binary(0,0,0);
binary(0,0,1);
binary(0,1,0);
binary(0,1,1);
binary(1,0,0);
binary(1,0,1);
binary(1,1,0);
binary(1,1,1);
}
```
