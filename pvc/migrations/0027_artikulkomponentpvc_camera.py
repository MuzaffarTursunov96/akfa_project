# Generated by Django 4.0 on 2024-03-14 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pvc', '0026_artikulkomponentpvc_nazvaniye_sistem'),
    ]

    operations = [
        migrations.AddField(
            model_name='artikulkomponentpvc',
            name='camera',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
