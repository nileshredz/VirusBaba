# Generated by Django 3.0.5 on 2020-04-30 08:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_login_new'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='login_new',
            name='image_url',
        ),
    ]
