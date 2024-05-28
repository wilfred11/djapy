from django.core import management
from django.core.management.base import BaseCommand
from django.core.management.commands import makemigrations, migrate
from django.utils import timezone
from django_extensions.management.commands import reset_db


class Command(BaseCommand):
    help = "This command drops all tables, then it makes migrations and migrates the djapy_app and rest_app. It also asks you for an e-mailaddrress and password to create a superuser."

    def handle(self, *args, **kwargs):
        time = timezone.now().strftime("%X")
        self.stdout.write("It's now %s" % time)
        self.stdout.write(self.help)
        management.call_command(
            reset_db.Command(), "--close-sessions", verbosity=1, interactive=False
        )
        management.call_command(makemigrations.Command(), "rest_app", verbosity=1)
        management.call_command(migrate.Command(), "rest_app", verbosity=1)
        management.call_command(makemigrations.Command(), "djapy_app", verbosity=1)
        management.call_command(migrate.Command(), "djapy_app", verbosity=1)
        management.call_command(makemigrations.Command(), "sessions", verbosity=1)
        management.call_command(migrate.Command(), "sessions", verbosity=1)
        management.call_command(makemigrations.Command(), "admin", verbosity=1)
        management.call_command(migrate.Command(), "admin", verbosity=1)
        self.stdout.write(
            "Please enter an e-mailaddress and password. These will be used to create superuser."
        )
        management.call_command("createsuperuser", interactive=True)
        management.call_command("loaddata", "families.json", verbosity=1)
        management.call_command("loaddata", "individuals.json", verbosity=1)
