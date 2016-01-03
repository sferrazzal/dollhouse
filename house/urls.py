from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
#    url(r'^new_image^', views.submit_image, name='new_image')
]
