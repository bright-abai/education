## Time Conversion #1019
  
```python
seconds = int(input())

hours = seconds // 3600
seconds = seconds - hours * 3600
minutes = seconds // 60
seconds = seconds - minutes * 60

print("%d:%d:%d" % (hours, minutes, seconds))
```

C:\Games\Legacy\TL.exe
 192.168.72.77