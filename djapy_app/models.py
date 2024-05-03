import datetime

import django
from django.db import models

# Create your models here.


class Individual(models.Model):
    last_name = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    add_date = models.DateField(default=django.utils.timezone.now)
