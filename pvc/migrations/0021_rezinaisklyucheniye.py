# Generated by Django 3.2.20 on 2023-10-30 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pvc', '0020_dliniytext'),
    ]

    operations = [
        migrations.CreateModel(
            name='RezinaIsklyucheniye',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artikul', models.CharField(blank=True, max_length=150, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
