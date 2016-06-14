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
    user = models.ForeignKey(User)
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

class Accessory(models.Model):
    accessory_name = models.CharField(max_length=100)
    accessory_image = models.ImageField(max_length=100)
    accessory_lpos = models.CharField(max_length=10)
    accessory_tops = models.CharField(max_length=10)
    dollhouse = models.ForeignKey(Dollhouse)
    def __str__(self):
        return self.accessory_name

# Create your models here.
