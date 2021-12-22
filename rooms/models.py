from django.db import models
from django.core.validators import RegexValidator

class Room(models.Model):
    room_name = models.CharField(max_length=200, blank=False)
    description = models.TextField(blank=True)
    length = models.IntegerField(default=5)
    width = models.IntegerField(default=5)
    tile = models.ImageField(upload_to="roomImages", blank=True)

    def __str__(self):
        return "{}[{}x{}]: {}".format(self.room_name, self.length, self.width, self.description)