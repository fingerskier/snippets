FOR /F %%I IN ('DIR *.* /B /O:-D') DO COPY %%I <<NewDir>> & EXIT
