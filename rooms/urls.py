from django.urls import path
from . import views

urlpatterns = [
    path('', views.RoomListAPIView.as_view(), name='room_list'),
]