#Arduino

> [!C++ current version]- Title
> ```cpp
> #include <Servo.h>
>
>int lowerPin = 9 , upperPin = 10 , delayTime = 300;
>Servo lowerServo, upperServo;
>long lowerRand, upperRand, lowerRandMin, lowerRandMax, upperRandMin, upperRandMax; 
>
>void setup() {
>  Serial.begin(9600);
>  lowerServo.attach(lowerPin);
>  upperServo.attach(upperPin);
>  pinMode(13, OUTPUT);
>} 
>// a simple function that pauses the program untill an input to serial has been made
>
>void serialWait() {
>  while (Serial.available() == 0) {}
>}
>
>void loop() {
>digitalWrite(13,LOW); //turns LASER off when exiting random mode
>Serial.println("upper: 1 \nlower: 2 \nrandom: 3");
>serialWait();
>
>  if (Serial.available() > 0) {
>    int mode = Serial.parseInt();
>    if (mode == 1) {  
>      Serial.print("upper servo (0-180 degrees): ");
>      serialWait();
>      int upperManual = Serial.parseInt();
>      Serial.println(upperManual);
>      upperServo.write(upperManual);
>    }
>
>    //----------------------- MANUAL --------------------------------//
>
>    else if (mode == 2) {
>      Serial.print("lower servo (0-180 degrees): ");
>      serialWait();
>      int lowerManual = Serial.parseInt();
>      Serial.println(lowerManual);
>      lowerServo.write(lowerManual);
>    }
>
>    //-------------------------- RANDOM --------------------------------//
>
>    else if (mode == 3) {
>      // the following while loop will repeat unless an input is given to the Serial monitor
>      while (Serial.available()==0) {
>        int delayRand = random(100,1700);
>        digitalWrite(13,HIGH);
>        lowerRand = random(60,120);
>        upperRand = random(80,100);
>        lowerServo.write(lowerRand);
>        upperServo.write(upperRand);
>        delay(delayRand);
>     }
>    }
>    else {Serial.println("invalid input");}
>  }
>}
>```

- [ ] Use the `Servo.read()` method in order to create a border making mode. By reading the servo angles at desired verices, we can append them to a list of vertices from which we can create polygon shaped borders
- [ ] Use the `analogRead()` function together with a potentiometer in order to physically controll the servos' positions.
- [ ] Finally - create a mode in which one can physically define borders that restrict the random movement of the LASER

___

- [x] find a suitable algorithm ([Point in Polygon](https://en.wikipedia.org/wiki/Point_in_polygon)) that can decide whether a randomly generated plot falls within the interior of the predefined boundary.

# Steps

- constant motion - predictable therefore boring
- add spatial randomness - improvement yet still monotonic
- add temporal randomness - better, but cats lose sight of laser point
- add acceleration - motion is more natural and traceable.

Still, straight lines are boring and unnatural

- Enter - Bezier curves.

Even now when the motions is much better, one thing that is still missing is a feedback of the laser pointer from the cat. 

- Enter - computer vision (The laser point tends away from the cat's position)

Bonus - as game begins let the laser point sway near a small speaker. When the camera detects a cat's arrival it will initiate a game. The speaker can emit playful sounds that match the movement of the laser pointer as the cat plays with the laser. It will also help take its mind away from the noise produced by the laser-moving servos.

==It is said that lasers are not a good game for the cat's self esteem due to its inability to actually catch the point. Assuming that really is true - how can one incorporate an additional improvement that will mimic the feeling of accomplishment and satisfaction?==

