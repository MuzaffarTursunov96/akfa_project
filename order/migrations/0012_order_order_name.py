# Generated by Django 5.0.4 on 2024-08-21 04:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0011_alter_orderpvx_work_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
