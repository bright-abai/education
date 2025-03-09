int pins[8] = {2, 3, 4, 5, 6, 8, 9, 11};

byte numbers[10] = {
  B11111100,
  B01100000,
  B11011010,
  B11110010,
  B01100110,
  B10110110,
  B10111110,
  B11100000,
  B11111110,
  B11110110
};

int number = 0;

void setup()
{
    for (int i = 0; i < 8; i++) {
        pinMode(pins[i], OUTPUT);
    }
}

void loop()
{
  for (int i = 0; i < 8; i++) {
    digitalWrite(pins[i], bitRead(numbers[number], 7 - i);
  }
  delay(600)
  number = (number + 1) % 10;
}
