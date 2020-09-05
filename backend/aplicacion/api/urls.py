from django.urls import include
from django.conf.urls import url

from rest_framework import routers

from api import views

app_name = 'api'

router = routers.DefaultRouter()
# router.register(r'Person', views.PersonViewSet, basename='person')
# router.register(r'Movies', views.MovieViewSet, basename='movie')
# router.register(r'List', views.ListViewSet, basename='list')
# router.register(r'Quote', views.QuoteViewSet, basename='quote')

urlpatterns = [
    url(r'^', include(router.urls)),
]
