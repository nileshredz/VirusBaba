from django.urls import path
from . import views



urlpatterns = [
    path('', views.index),
    path('signUp/', views.signUp),
    path('logout/', views.logout, name="log"),
    path('profile/', views.profile),
    path('profile/maps/' ,views.maps),
    path('profile/final/', views.final),
    path('profiles/',views.signCompleted),


]
