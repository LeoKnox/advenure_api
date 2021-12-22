from rest_framework import serializers
from .models import Room
from rest_framework.reverse import reverse

class RoomListSerializer(serializers.ModelSerializer):
    absolute = serializers.SerializerMethodField()

    class Meta:
        model = Room
        fields = [
            'id',
            'room_name',
            'description',
            'width',
            'length',
            'absolute'
        ]

    def get_absolute(self, obj):
        return reverse('room_detail', args=(obj.pk,))

class RoomDetailSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()

    class Meta:
        model = Room
        fields = [
            'id',
            'room_name',
            'description',
            'length',
            'width',
            'tile',
            'update',
            'delete',
        ]
    
    def get_update(self, obj):
        return reverse('room_update', args=(obj.pk,))
    
    def get_delete(self, obj):
        return reverse('room_delete', args=(obj.pk,))