# Generated by Django 5.0.4 on 2024-05-02 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aluminiytermo', '0021_messagefeedback_last_msg'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bazaprofiley',
            name='link',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
    ]