# Install w/ apt-get

Command-line Installation
Run 

```wget http://archive.inductiveautomation.com/ia.public.key```

Run 

```sudo apt-key add ia.public.key```

Copy

```/etc/apt/sources.list```

to

```/etc/apt/sources.list.bak```

Edit 

```/etc/apt/sources.list```

and add the following lines (the ignition-beta line is optional):

```
deb http://archive.inductiveautomation.com/apt ignition non-free
deb http://archive.inductiveautomation.com/apt ignition-beta non-free
```

Run 

```$sudo apt-get update```

to update the download list within the APT utility.

Run 

```sudo apt-get install ignition```

to install the latest stable Ignition version or run 

```sudo apt-get install ignition-beta```

to install the latest beta Ignition version.

If you want to run the Gateway Command Utility or gwcmd right after installation, open a command shell in your home folder and run 
```source .profile```

This forces your command shell to reload the .profile script, which has been updated with a path to the Ignition executable during installation.
