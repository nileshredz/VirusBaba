from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path(r'signUp/', views.signUp),
    path(r'logout/', views.logout, name="log"),
    path(r'profile/', views.profile),
    path(r'profile/maps/' ,views.maps),
    path(r'profile/final/', views.final),
    path(r'profiles/',views.signCompleted),


]
