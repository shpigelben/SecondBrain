#Arduino
# If, Else If
```cpp
if (condition) {
	execution of command;
} else if (another condition) {
	execution of different command;
}
```
# While

# For Loops
When you know exactly how many time you want your loop to run, for loops are the choice

```cpp
for (statement; condition; increment) {
	execution;
}
```
## example 1 (from 1 to 20, increments of +1)
```cpp
for (i = 1 ; i < 20 ; i = i + 1) {
	cout << "i = " << i
}
```
## example 2 (from 10 to 40, increments of +3)
```cpp
for (i = 10 ; i <= 40 ; i = i + 3) {
	cout << "i = " << i
}
```
## example 3 (from 20 to 0, increments of -2)
```cpp
for (i = 20 ; i >= 0 ; i = i - 2) {
	cout << "i = " << i
}
```