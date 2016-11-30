from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    def __str__(self):
        return self.username

class Background(models.Model):
    bg_name = models.CharField(max_length=100)
    bg_image = models.ImageField(max_length=100)
    def __str__(self):
        return self.bg_name
 
class Dollhouse(models.Model):
    dollhouse_name = models.CharField(max_length=100)
    dh_background = models.ForeignKey(Background)
    def __str__(self):
        return self.dollhouse_name

class Doll(models.Model):
    doll_name = models.CharField(max_length=100)
    doll_image = models.ImageField(max_length=100)
    doll_lpos = models.CharField(max_length=10)
    doll_tpos = models.CharField(max_length=10)
    dollhouse = models.ForeignKey(Dollhouse)
    def __str__(self):
        return self.doll_name

class DollPicture(models.Model):
    picture = models.ImageField() 
    name = models.CharField(max_length=100)
    def __str__(self):
        return str(self.picture)

class Accessory(models.Model):
    accessory_name = models.CharField(max_length=100)
    accessory_image = models.ImageField(max_length=100)
    accessory_lpos = models.CharField(max_length=10)
    accessory_tpos = models.CharField(max_length=10)
    doll = models.ForeignKey(Doll)
    dollhouse = models.ForeignKey(Dollhouse)
    def __str__(self):
        return self.accessory_name
    class Meta:
        verbose_name_plural = "accessories"

class AccessoryPicture(models.Model):
    picture = models.ImageField(max_length=100)
    name = models.CharField(max_length=100)
    def __str__(self):
        return str(self.picture)
 

# Create your models here.
