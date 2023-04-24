from django.urls import include, path
from .views import *

urlpatterns = [
    path('userlist/', UserAPIView.as_view()),
    path('userlist/<int:pk>', UserAPIView.as_view()),
    path('tours/', TourAPIView.as_view()),
    path('tours/<int:pk>', TourAPIView.as_view()),

]