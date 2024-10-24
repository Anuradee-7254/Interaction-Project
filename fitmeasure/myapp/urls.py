from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_login, name='login'),
    path('register/', views.register, name='register'),
    path('home/', views.homepage, name='homepage'),
    path('save-bmi/', views.save_bmi, name='save_bmi'),
    path('get-bmi-records/', views.get_bmi_records, name='get_bmi_records'),
]

