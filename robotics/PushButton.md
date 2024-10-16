```
void setup() {
	pinMode(3, INPUT);
	pinMode(7, OUTPUT);
}

void loop() {
	digitalWrite(7, digitalRead(3));
}
```

Task for the medal: Make LED behave as a usual light
1. Button
2. Turn on
3. Button
4. Turn off