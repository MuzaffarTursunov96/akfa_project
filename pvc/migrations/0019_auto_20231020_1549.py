# Generated by Django 3.2.20 on 2023-10-20 10:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pvc', '0018_buxgalterskiynazvaniye'),
    ]

    operations = [
        migrations.RenameField(
            model_name='characteristika',
            old_name='ch_klaes_optm',
            new_name='online_savdo_name',
        ),
        migrations.RemoveField(
            model_name='characteristika',
            name='ch_profile_type',
        ),
        migrations.RemoveField(
            model_name='characteristika',
            name='goods_group',
        ),
        migrations.RemoveField(
            model_name='characteristika',
            name='klaes',
        ),
        migrations.RemoveField(
            model_name='characteristika',
            name='kls_wast',
        ),
        migrations.RemoveField(
            model_name='characteristika',
            name='kls_wast_length',
        ),
    ]
