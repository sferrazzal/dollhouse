from django.db import models

class Background(models.Model):
    bg_name = models.CharField(max_length=100)
    bg_image = models.ImageField(max_length=100)
    def __str__(self):
        return self.bg_name

class Doll(models.Model):
    doll_name = models.CharField(max_length=100)
    doll_image = models.ImageField(max_length=100)
    def __str__(self):
        return self.doll_name

# Create your models here.
