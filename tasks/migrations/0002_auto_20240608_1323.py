# Generated by Django 3.2.4 on 2024-06-08 13:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='category',
        ),
        migrations.RemoveField(
            model_name='task',
            name='priority',
        ),
        migrations.RemoveField(
            model_name='task',
            name='state',
        ),
        migrations.RemoveField(
            model_name='task',
            name='task_owners',
        ),
    ]