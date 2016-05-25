# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Accessory',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('accessory_name', models.CharField(max_length=100)),
                ('accessory_image', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Background',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('bg_name', models.CharField(max_length=100)),
                ('bg_image', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Doll',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('doll_name', models.CharField(max_length=100)),
                ('doll_image', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Dollhouse',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('dollhouse_name', models.CharField(max_length=100)),
                ('dh_background', models.ForeignKey(to='house.Background')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('username', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='dollhouse',
            name='user',
            field=models.ForeignKey(to='house.User'),
        ),
        migrations.AddField(
            model_name='doll',
            name='dollhouse',
            field=models.ForeignKey(to='house.Dollhouse'),
        ),
        migrations.AddField(
            model_name='accessory',
            name='dollhouse',
            field=models.ForeignKey(to='house.Dollhouse'),
        ),
    ]
