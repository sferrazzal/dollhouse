from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.lobby, name='lobby'
    ),
    url(r'^dollhouse/(?P<dollhouse>[0-9]+)/$', 
        views.dollhouse, name='dollhouse'
    ),
    url(r'^dollhouse/(?P<dollhouse>[0-9]+)/dressing_room/$', 
        views.dressing_room, name='dressing_room'
    ),
    url(r'^dollhouse/dollhousecreate/$',
        views.dollhousecreate, name='dollhousecreate'
    ),
    url(r'^dollhouse/doll/(?P<dollid>[0-9]+)$', views.doll, name='doll'
    ),
    url(r'^dollhouse/accessory/(?P<accessoryid>[0-9]+)$', 
        views.accessory, name='accessory'
    ),
    url(r'^dollhouseupdate/(?P<dollhouseid>[0-9]+)$',
        views.dollhouseupdate, name='dollhouseupdate'
    ),
    url(r'^dollhouse/doll/create$', views.dollcreate, name='dollcreate'
    ),
    url(r'^dollhouse/accessory/create$', 
        views.accessorycreate, name='accessorycreate'
    ),
    url(r'^dollhouse/loading_dock/$', views.loading_dock, name='loading_dock'
    ),
]
