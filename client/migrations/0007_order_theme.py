# Generated by Django 5.0.4 on 2024-06-13 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0006_order_partner'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='theme',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
