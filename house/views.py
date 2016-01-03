from django.shortcuts import render
from .models import Background 
from .models import Doll

def index(request):
    bg_object = Background.objects.get(bg_name='lake')
    bg_image = bg_object.bg_image
    doll_object = Doll.objects.get(doll_name='cinders')
    doll_image = doll_object.doll_image
    context = {'bg_image': bg_image, 'doll_image': doll_image}
    return render(request, 'house/index.html', context)

def new_image(request):
  return render(request, 'house/new_image.html', context)

# Create your views here.
