# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('house', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='background',
            name='bg_name',
            field=models.CharField(max_length=100, default='defaultname'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='doll',
            name='doll_name',
            field=models.CharField(max_length=100, default='defaultdollname'),
            preserve_default=False,
        ),
    ]
