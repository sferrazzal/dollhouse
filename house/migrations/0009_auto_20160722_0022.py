# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('house', '0008_auto_20160712_0039'),
    ]

    operations = [
        migrations.AddField(
            model_name='accessorypicture',
            name='name',
            field=models.CharField(default='defaultname', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='dollpicture',
            name='name',
            field=models.CharField(default='defaultname', max_length=100),
            preserve_default=False,
        ),
    ]
