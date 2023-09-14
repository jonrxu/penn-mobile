# Generated by Django 3.2.18 on 2023-05-22 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("penndata", "0006_fitnesssnapshot_capacity"),
        ("user", "0008_remove_notificationtoken_dev"),
    ]

    operations = [
        migrations.AddField(
            model_name="profile",
            name="fitness_preferences",
            field=models.ManyToManyField(blank=True, to="penndata.FitnessRoom"),
        ),
    ]