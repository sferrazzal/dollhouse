from django.shortcuts import render
from .models import Background 
from .models import Doll
from .models import Dollhouse

def index(request):
    return render(request, 'house/index.html')

def new_image(request):
  return render(request, 'house/new_image.html', context)

def dollhouse(request):
    # this needs to be replaced to load whichever dollhouse the user specifies.
    # Make it URL based?
    workingdollhouse = Dollhouse.objects.get(id=1)

    doll_objects = Doll.objects.filter(dollhouse=workingdollhouse)
    context = {'doll_objects': doll_objects, 'workingdollhouse': workingdollhouse}
    return render(request, 'house/dollhouse.html', context)

    



# Create your views here.
