# Generated by Django 5.0.4 on 2024-08-21 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('radiator', '0013_akpfile_prochiyefile'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderradiator',
            name='order_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
