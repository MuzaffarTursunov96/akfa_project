# Generated by Django 3.2.20 on 2023-10-10 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('norma', '0013_auto_20230830_1439'),
    ]

    operations = [
        migrations.AddField(
            model_name='norma',
            name='закалка_исключение',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='norma',
            name='краткий_текст_1',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='norma',
            name='краткий_текст_2',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='norma',
            name='краткий_текст_3',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='norma',
            name='краткий_текст_4',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='norma',
            name='наклейка_исключение',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
