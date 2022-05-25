rm -rf ..\_projectSub\**
xcopy .\*.* ..\_projectSub /Q/Y
@REM xcopy .\.ebextensions\*.* ..\_projectSub\.ebextensions /E/Q/Y/I/H
@REM xcopy .\.elasticbeanstalk\*.* ..\_projectSub\.elasticbeanstalk /E/Q/Y/I/H
xcopy .\.next\*.* ..\_projectSub\.next /E/Q/Y/I/H
xcopy .\public\*.* ..\_projectSub\public /E/Q/Y/I/H

tar -a -c -f ..\project.zip ..\_projectSub
