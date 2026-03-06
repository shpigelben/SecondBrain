---
type: note
subject:
  - python
---
Whenever a python interpreter gets a file it creates a `__name__` variable and sets it to the file's name without the .py extension.

If the interpreter is passed a file DIRECTLY it sets `__name__ = "__main__"`. This can be used to make sure that when running a file, only it runs and non of the imported modules or other .py files get executed as well.