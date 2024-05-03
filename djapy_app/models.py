from django.db import models

# Create your models here.


class Individuals(models.Model):
    f_name = models.CharField(max_length=50)
    l_name = models.CharField(max_length=50)
    add_date = models.DateField()
