# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('house', '0004_auto_20160711_0216'),
    ]

    operations = [
        migrations.RenameField(
            model_name='accessorypicture',
            old_name='Picture',
            new_name='picture',
        ),
        migrations.RenameField(
            model_name='dollpicture',
            old_name='Picture',
            new_name='picture',
        ),
        migrations.AlterModelOptions(
            'accessory',
            {'verbose_name_plural':'accessories'},
        )
    ]
