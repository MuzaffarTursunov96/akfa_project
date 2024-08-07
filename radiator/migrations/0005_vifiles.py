# Generated by Django 5.0.4 on 2024-07-12 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('radiator', '0004_texcartabase'),
    ]

    operations = [
        migrations.CreateModel(
            name='ViFiles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(max_length=500, upload_to='uploads/vi/downloads')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
