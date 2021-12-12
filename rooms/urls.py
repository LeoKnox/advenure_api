from django.urls import path
from . import views

urlpatterns = [
    path('', views.RoomListAPIView.as_view(), name='room_list'),
    path('<int:id>/', views.RoomRetrieveAPIView.as_view(), name='room_detail'),
    path('create/', views.RoomCreateAPIView.as_view(), name='room_create'),
]