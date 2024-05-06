A first django configuration, with basic settings for usermanagement and static files. The project has its dependencies managed by poetry.
To start or restart the application, execute the following command from the terminal. It should delete all tables and (re)create them. It will also ask you for an e-mail address and password to create a superuser. 

python ./manage.py startup

After this command, you can startup the server using 

python ./manage.py runserver

