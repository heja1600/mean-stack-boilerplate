parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

echo -e "\e[1;31m installing dependencies \e[0m"
npm install;
echo -e "\e[1;31m installed dependencies \e[0m"

echo -e "\e[1;31m installing angular app \e[0m"
(cd ${parent_path}/app; npm install);
echo -e "\e[1;31m angular app installed \e[0m"

echo -e "\e[1;31m installing server \e[0m"
(cd ${parent_path}/server; npm install);
echo -e "\e[1;31m installed server \e[0m"


echo -e "\e[1;31m Type 'npm run dev' to run everything :) \e[0m"