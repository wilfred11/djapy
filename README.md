An initial django configuration, with basic settings for usermanagement and static files. The project has its
dependencies managed by poetry.

A postgres database server should be available on your localhost.

A synced and an async restapi is available for an indivual.

For webpack support: make sure to install nodejs and NPM. NPM is included with nodejs.

To import bootstrap and the webpack libraries, use following command:

npm install

Webpack is configured to create template files, include external js libraries, generate css and js files. For every file
in
./src/djapy_app/pages/basic and ./src/djapy_app/pages/basic it creates a template file, and all static files needed to
serve this django template properly.
/dt directory contains files that are used to serve templates containing a datatable, /basic directory contains basic

To generate webpack js, css and template files, use the following command:

npm run build-dev

To watch the files in src/djapy_app/, use command:

npm run dev-watch

To install python packages use the poetry command

poetry update

To start or restart the application from scratch, execute the following command from the terminal. It should delete all
tables and (re)create them. It will also ask you for an e-mail address and password to create a superuser. Furthermore
some data is created too.

python ./manage.py startup

After this command, you can startup the server using

python ./manage.py runserver

