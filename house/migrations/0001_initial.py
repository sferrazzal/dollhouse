# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Background',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('bg_image', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Doll',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('doll_image', models.ImageField(upload_to='')),
            ],
        ),
    ]
