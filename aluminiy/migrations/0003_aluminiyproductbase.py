# Generated by Django 3.2.15 on 2023-03-07 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aluminiy', '0002_alufile'),
    ]

    operations = [
        migrations.CreateModel(
            name='AluminiyProductBase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('material', models.CharField(max_length=250)),
                ('material_group', models.CharField(max_length=50)),
                ('ktarkiy_tekst_materiala', models.CharField(max_length=250)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
