### [Docs](http://www.xlitx.com/datasheet/5161AS.pdf)

# pastebin.com/raw/MKHwcm6W

| Arduino   | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
| --------- | --- | --- | --- | --- | --- | --- | --- |
| **Digit** | 7   | 6   | 4   | 2   | 1   | 9   | 10  |
	  __
	| __ |
	| __ |
   
```
int pins[8] = {2, 3, 4, 5, 6, 7, 8, 9};

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
```

http://www.xlitx.com/datasheet/5161AS.pdf