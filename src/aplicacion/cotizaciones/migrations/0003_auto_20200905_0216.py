# Generated by Django 3.1.1 on 2020-09-05 06:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cotizaciones', '0002_auto_20200905_0201'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cotizacion',
            name='empresa',
        ),
        migrations.DeleteModel(
            name='Cliente',
        ),
        migrations.DeleteModel(
            name='Cotizacion',
        ),
    ]
