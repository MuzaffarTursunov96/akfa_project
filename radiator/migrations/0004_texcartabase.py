# Generated by Django 5.0.4 on 2024-07-11 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('radiator', '0003_korobka_kraska'),
    ]

    operations = [
        migrations.CreateModel(
            name='TexcartaBase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('material', models.CharField(max_length=25)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]