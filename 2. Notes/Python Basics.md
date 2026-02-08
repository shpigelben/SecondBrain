---
type: note
tags:
  - rafael
---
[Python Playlist](https://www.youtube.com/watch?v=Qb5MU4aMLvA&list=PLRFJiCXId!1ClZESVpDW-dKXAMhTWEFDWj&index=5)


# Virtual Environment

Go to environments-containing directory
```bash
 cd Projects/Environments
```

Create a new specific directory with the project name (without the `'` )

 ```bash
 mkdr 'project_name'
 ```

go to that folder

 ```bash
 cd 'project_name'
 ```

create the venv with the project name

```bash
python3 -m venv 'project_name_venv'
```

activate venv

```bash
source 'project_name_venv'/bin/activate
```

install packages

```bash
python3 -m pip install '<package>'
```

deactivate when done

```bash
deactivate
```