# Generated by Django 3.0.1 on 2019-12-25 20:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('gsr_booking', '0003_auto_20191208_2144'),
    ]

    operations = [
        migrations.AddField(
            model_name='groupmembership',
            name='username',
            field=models.CharField(blank=True, default=None, max_length=127, null=True),
        ),
        migrations.AlterField(
            model_name='groupmembership',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='memberships', to=settings.AUTH_USER_MODEL),
        ),
    ]
