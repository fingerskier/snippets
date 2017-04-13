```
for /R %%I in (html\*.md.html) do (
	echo %%~dI	REM drive letter
	echo %%~pI	REM path
	echo %%~nI	REM file-name
	echo %%~xI	REM file-extension
)
```
