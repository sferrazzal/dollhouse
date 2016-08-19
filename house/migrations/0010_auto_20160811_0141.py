# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('house', '0009_auto_20160722_0022'),
    ]

    operations = [
        migrations.RenameField(
            model_name='accessory',
            old_name='accessory_tops',
            new_name='accessory_tpos',
        ),
        migrations.AddField(
            model_name='accessory',
            name='doll',
            field=models.ForeignKey(default=0, to='house.Doll'),
            preserve_default=False,
        ),
    ]
