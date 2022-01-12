from django.shortcuts import render
from rest_framework import generics
from .serializers import KanjiListSerializer
from .models import Kanji

class KanjiListAPIView(generics.ListAPIView):
    queryset = Kanji.objects.all()
    serializer_class = KanjiListSerializer