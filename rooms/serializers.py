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

class RoomDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = [
            'id',
            'room_name',
            'description',
            'length',
            'width',
        ]

class RoomRetrieveUpdateAPIView(serializers.ModelSerializer):
    lookup_field="id"
    queryset = Room.objects.all()
    serializer_class = RoomDetailSerializer