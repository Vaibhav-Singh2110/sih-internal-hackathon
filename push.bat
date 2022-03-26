@echo off
echo GETTING UPDATES
git pull
echo ===========
echo COMMITING
git add .
git commit -m "%username% edit"
echo ===========
echo PUSHPA
git push
echo ===========
echo DONE
pause