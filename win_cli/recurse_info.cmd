```
for /R %%I in (html\*.md.html) do (
	echo %%~dI	REM
	echo %%~pI	REM
	echo %%~nI	REM
	echo %%~xI	REM
)
```
