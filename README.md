A first django configuration, with basic settings for usermanagement and static files. The project has its dependencies managed by poetry.

For webpack support: make sure to install nodejs and NPM. NPM is included wit nodejs. 

To import bootstrap and the webpack libraries, use following command:

npm install

To generate webpack js and css files from input, use the following command:

npx webpack --config webpack.config.dev.js

To watch the files in src/djapy_app/, use command:

npm run dev


To install python packages use the poetry command

poetry update

To start or restart the application from scratch, execute the following command from the terminal. It should delete all tables and (re)create them. It will also ask you for an e-mail address and password to create a superuser. 

python ./manage.py startup

After this command, you can startup the server using 

python ./manage.py runserver

