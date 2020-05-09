from django.urls import path
from . import views


#urls of Hindi
urlpatterns = [
    path('', views.index_hi),
    path(r'^signUphi/', views.signUp_hi),
    path(r'^logouthi/', views.logout_hi, name="log"),
    path(r'^profilehi/', views.profile_hi),
    path(r'^profilehi/maps/' ,views.maps_hi),
    path(r'^profilehi/final/', views.final_hi),
    path(r'^profileshi/',views.signCompleted_hi),


]


