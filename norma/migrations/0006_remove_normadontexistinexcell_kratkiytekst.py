# Generated by Django 3.2.18 on 2023-04-03 19:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('norma', '0005_normadontexistinexcell'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='normadontexistinexcell',
            name='kratkiytekst',
        ),
    ]