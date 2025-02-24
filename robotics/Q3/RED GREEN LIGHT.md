
```C++
const int redPin = 3;
const int killPin = 5;
const int greenPin = 7;

const int btn = 11;
  
enum State {
  START,
  RED,
  GREEN
};

State state;

void setup() {
  pinMode(redPin, OUTPUT);  
  pinMode(killPin, OUTPUT);
  pinMode(greenPin, OUTPUT);  
  
  digitalWrite(redPin, HIGH);
  digitalWrite(killPin, HIGH);
  digitalWrite(greenPin, HIGH);
  
  pinMode(btn, INPUT);
  state = State::START;
}
  
void loop() {

}

void red() {
  digitalWrite(redPin, HIGH);
  digitalWrite(greenPin, LOW);
  state = State::RED;
}

void green() {
  digitalWrite(redPin, LOW);
  digitalWrite(greenPin, HIGH);
  state = State::GREEN;
}
  
void on(int state) {
  digitalWrite(redPin, state);
  digitalWrite(killPin, state);
  digitalWrite(greenPin, state);
}
```