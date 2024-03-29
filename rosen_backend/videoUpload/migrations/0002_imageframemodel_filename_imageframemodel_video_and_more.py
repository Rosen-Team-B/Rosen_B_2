# Generated by Django 4.1.2 on 2023-04-02 16:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("videoUpload", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="imageframemodel",
            name="filename",
            field=models.CharField(default="null", max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="imageframemodel",
            name="video",
            field=models.ForeignKey(
                default=10,
                on_delete=django.db.models.deletion.PROTECT,
                to="videoUpload.videomodel",
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="videomodel",
            name="name",
            field=models.CharField(default="", max_length=100),
        ),
        migrations.AlterField(
            model_name="imageframemodel",
            name="timestamp",
            field=models.CharField(max_length=100),
        ),
    ]
