from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from djapy_app.managers import DjapyUserManager


# Create your models here.
class DjapyUser(AbstractUser):
    username = None
    email = models.EmailField(_("email address"), unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = DjapyUserManager()

    def __str__(self):
        return self.email


class Some(models.Model):
    f_name = models.CharField(max_length=55)
    l_name = models.CharField(max_length=55)

    class Meta:
        db_table = "some"
