import django
from django.db import models


class Individual(models.Model):
    last_name = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, null=True)
    add_date = models.DateField(default=django.utils.timezone.now)

    class Meta:
        db_table = "individuals"
