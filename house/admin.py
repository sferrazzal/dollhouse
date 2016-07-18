from django.contrib import admin

from .models import * 
admin.site.register(User)
admin.site.register(Background)
admin.site.register(Dollhouse)
admin.site.register(Doll)
admin.site.register(DollPicture)
admin.site.register(Accessory)
admin.site.register(AccessoryPicture)


# Register your models here.
