# Generated by Django 4.2.1 on 2023-08-07 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aluminiy', '0020_razlovkaobichniy_fkratkiy_razlovkaobichniy_fsap_code_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='LengthOfProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artikul', models.CharField(max_length=100)),
                ('length', models.IntegerField()),
                ('ves_za_shtuk', models.FloatField()),
                ('ves_za_metr', models.FloatField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Price',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tip_pokritiya', models.CharField(max_length=150)),
                ('tip', models.CharField(max_length=150)),
                ('price', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
