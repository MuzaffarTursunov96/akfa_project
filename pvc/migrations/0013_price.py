# Generated by Django 3.2.20 on 2023-10-13 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pvc', '0012_lengthofprofilepvc'),
    ]

    operations = [
        migrations.CreateModel(
            name='Price',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tip_pokritiya', models.CharField(max_length=150)),
                ('price', models.CharField(max_length=150)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]