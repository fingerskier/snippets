# Connect to Shared Folder on Windows Computer

install smbclient

```
smbclient //8.8.8.8/Public -U dom\\flarn
```

Naturally the host, directory and user info will vary.
Don't forget the escaped backslash for differing domains.
