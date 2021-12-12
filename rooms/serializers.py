from rest_framework import serializers
from .models import Room

class RoomListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = [
            'id',
            'room_name',
            'description',
            'width',
            'length',
        ]