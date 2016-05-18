# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('house', '0002_auto_20150921_1532'),
    ]

    operations = [
        migrations.CreateModel(
            name='Accessory',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('accessory_name', models.CharField(max_length=100)),
                ('accessory_image', models.ImageField(upload_to='')),
                ('accessory_user', models.CharField(max_length=100)),
                ('accessory_dollhouse', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='background',
            name='bg_dollhouse',
            field=models.CharField(max_length=100, default='default'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='background',
            name='bg_user',
            field=models.CharField(max_length=100, default='default'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='doll',
            name='doll_dollhouse',
            field=models.CharField(max_length=100, default='default'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='doll',
            name='doll_user',
            field=models.CharField(max_length=100, default='default'),
            preserve_default=False,
        ),
    ]
