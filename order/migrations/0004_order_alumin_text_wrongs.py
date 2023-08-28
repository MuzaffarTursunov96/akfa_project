# Generated by Django 3.2.20 on 2023-08-15 12:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('order', '0003_auto_20230815_1003'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='alumin_text_wrongs',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='aluminiy_text_work_wrong', to=settings.AUTH_USER_MODEL),
        ),
    ]