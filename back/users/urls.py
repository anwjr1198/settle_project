from django.urls import path,include
from .views import SignupView ,LoginView, UserView, LogoutView

urlpatterns = [
    path('signup', SignupView.as_view()),
    path('login', LoginView.as_view()),
    path('logged-in',UserView.as_view()),
    path('logout',LogoutView.as_view()),
]
