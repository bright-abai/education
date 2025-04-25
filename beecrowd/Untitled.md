```python
# 3 8 
# 3 + 2 -> 5 7
# 4 8 
# 4 + 1 -> 5 7
a = int(input())
b = int(input())

sum = 0
n = 0

if a % 2 == 0:
	n = a + 1
else:
	n = a + 2

while(n < b):
	sum += n
	n += 2

print(sum)

```