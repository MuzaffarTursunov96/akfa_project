# Generated by Django 4.0 on 2024-04-03 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0004_alter_order_status_alter_orderdetail_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderdetail',
            name='message',
            field=models.TextField(blank=True, default=''),
        ),
    ]
