from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomListSerializer, RoomDetailSerializer
from .models import Room

class RoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomListSerializer

class RoomRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Room.objects.all()
    serializer_class = RoomDetailSerializer

class RoomCreateAPIView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomDetailSerializer