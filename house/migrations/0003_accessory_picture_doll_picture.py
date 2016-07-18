# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('house', '0002_auto_20160609_2306'),
    ]

    operations = [
        migrations.CreateModel(
            name='Accessory_Picture',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('Picture', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Doll_Picture',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('Picture', models.ImageField(upload_to='')),
            ],
        ),
    ]
