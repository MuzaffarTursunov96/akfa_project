# Generated by Django 3.2.18 on 2023-04-20 00:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aluminiytermo', '0007_characteristictitle_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='alufiletermo',
            name='file_type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]