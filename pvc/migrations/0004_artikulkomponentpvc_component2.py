# Generated by Django 3.2.20 on 2023-09-28 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pvc', '0003_artikulkomponentpvc'),
    ]

    operations = [
        migrations.AddField(
            model_name='artikulkomponentpvc',
            name='component2',
            field=models.CharField(default=None, max_length=50),
        ),
    ]
