# Generated by Django 5.0.4 on 2024-08-30 04:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('radiator', '0015_orderradiator_client_order_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='NormaAurora',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default=dict, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='RazlovkaRadiatorAurora',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('er_sap_code', models.CharField(max_length=100)),
                ('er_kratkiy', models.CharField(max_length=150)),
                ('pk_sap_code', models.CharField(max_length=100)),
                ('pk_kratkiy', models.CharField(max_length=150)),
                ('sap_code7', models.CharField(max_length=100)),
                ('kratkiy7', models.CharField(max_length=150)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]