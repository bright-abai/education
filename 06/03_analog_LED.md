 ```
const int LED = 3;

void setup() {
	pinMode(LED, OUTPUT);
}

void loop() {
	digitalWrite(LED, HIGH);
	delay(500);
	//Write yourself for LOW
}  

// After above
// analogWrite(LED, ?) // ? - a number from 0 to 255, the brightness of 
```