# Generated by Django 4.1.6 on 2023-02-10 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videoUpload', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imageframemodel',
            name='image',
            field=models.ImageField(upload_to='video_frames'),
        ),
        migrations.AlterField(
            model_name='referenceimagemodel',
            name='image',
            field=models.ImageField(upload_to='refImageUpload'),
        ),
    ]
