from rest_framework import serializers
from .models import Room
from. models import Image
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

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'image', 'image_title', 'uploaded_at']
        model = Image

class RoomDetailSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()
    room_images = ImageSerializer(many=True, required=False)

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
            'room_images',
        ]
    
    def get_update(self, obj):
        return reverse('room_update', args=(obj.pk,))
    
    def get_delete(self, obj):
        return reverse('room_delete', args=(obj.pk,))