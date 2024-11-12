1. What is the best way to define CSS?
2. How to reference stylesheet?
3. What is CSS class?

4. Inline
```CSS
<p style="color:#900;">Sample</p>
```
5. Internal
```CSS
<style type="text/css">
p.special_p {
color:#900;
}
</style>
<p class=”special_p”>Sample Styled Text</p>
```
6. External
```CSS
style.css

p.special_p {
color:#900;
}
```
```HTML
<link rel=”stylesheet” type=”text/css” href=”mystyle.css” media=”screen”/>
```