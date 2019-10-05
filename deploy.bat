"C:\Program Files\Git\bin\sh.exe" --login -i -c "git add ."
"C:\Program Files\Git\bin\sh.exe" --login -i -c "git commit -am \"Redeploying website\""
"C:\Program Files\Git\bin\sh.exe" --login -i -c "git push heroku master"
pause