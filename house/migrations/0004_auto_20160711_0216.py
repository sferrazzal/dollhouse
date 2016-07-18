# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('house', '0003_accessory_picture_doll_picture'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Accessory_Picture',
            new_name='AccessoryPicture',
        ),
        migrations.RenameModel(
            old_name='Doll_Picture',
            new_name='DollPicture',
        ),
    ]
