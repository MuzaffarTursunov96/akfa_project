# Generated by Django 3.2.20 on 2023-11-01 06:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pvc', '0021_rezinaisklyucheniye'),
    ]

    operations = [
        migrations.AddField(
            model_name='pvcproduct',
            name='brutto',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='pvcproduct',
            name='netto',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]