from django.shortcuts import render
from .models import Background 
from .models import Doll
from .models import Dollhouse

def index(request):
    return render(request, 'house/index.html')

def new_image(request):
  return render(request, 'house/new_image.html', context)

def dollhouse(request):
    # this needs to be replaced to load whichever dollhouse the user specifies:
    workingdollhouse = Dollhouse.objects.get(id=1)
    #endcomment.

    bg_object = workingdollhouse.dh_background 
    bg_image = bg_object.bg_image
    doll_object = Doll.objects.get(dollhouse=workingdollhouse)
    doll_image = doll_object.doll_image
    context = {'dollhouse': workingdollhouse, 'bg_image': bg_image, 'doll_image': doll_image}
    return render(request, 'house/dollhouse.html', context)

    



# Create your views here.
