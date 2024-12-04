cd ~/../FSD_project
npm run build:prod

rm -rf ~/../var/www/FSD_project/html
mv ~/../FSD_project/build ~/../var/www/FSD_project/html