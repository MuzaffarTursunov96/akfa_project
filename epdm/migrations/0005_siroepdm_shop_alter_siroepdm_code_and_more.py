# Generated by Django 5.0.4 on 2024-09-17 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('epdm', '0004_siroepdm'),
    ]

    operations = [
        migrations.AddField(
            model_name='siroepdm',
            name='shop',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='siroepdm',
            name='code',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='siroepdm',
            name='kratkiy',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='siroepdm',
            name='sapcode',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
