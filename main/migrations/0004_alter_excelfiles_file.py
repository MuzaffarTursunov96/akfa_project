# Generated by Django 3.2.18 on 2023-04-10 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_alter_product_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='excelfiles',
            name='file',
            field=models.FileField(upload_to='uploads/delovoyotxod/downloads/'),
        ),
    ]
