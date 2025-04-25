```python
import os  
  
print("I was at " + os.getcwd()) # get current working directory  
path = "C:/Study/7p"  
if not os.path.isdir(path):  
    os.mkdir(path)  
os.chdir(path) # change dir  
print("Now I am at " + os.getcwd())  
  
with open("message.txt", "w", encoding="utf8") as myfile:  
    myfile.write("Chulpan")
```

```
media
	images
		art
		photo
		ai
	video
		real
		generated
		created
	games
		rpg
		strategy
		simulators
```