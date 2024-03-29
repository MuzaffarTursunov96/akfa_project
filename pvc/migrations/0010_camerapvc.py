# Generated by Django 3.2.20 on 2023-10-12 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pvc', '0009_auto_20231002_1657'),
    ]

    operations = [
        migrations.CreateModel(
            name='CameraPvc',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sap_code', models.CharField(blank=True, max_length=50, null=True)),
                ('coun_of_lam', models.CharField(blank=True, max_length=50, null=True)),
                ('coun_of_pvc', models.CharField(blank=True, max_length=50, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
