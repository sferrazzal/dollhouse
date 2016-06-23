from django.shortcuts import render
from django.http import JsonResponse
from .models import Background 
from .models import Doll
from .models import Dollhouse
import json

def index(request):
    return render(request, 'house/index.html')

def new_image(request):
  return render(request, 'house/new_image.html', context)

def dollhouse(request):
    # this needs to be updated to load whichever dollhouse the user specifies.
    workingdollhouse = Dollhouse.objects.get(id=1)

    doll_objects = Doll.objects.filter(dollhouse=workingdollhouse)
    context = {'doll_objects': doll_objects, 'workingdollhouse': workingdollhouse}
    return render(request, 'house/dollhouse.html', context)

def doll(request, dollid):
    if request.method == 'POST':
        workingdoll = Doll.objects.get(id=dollid)
        lpos = request.POST.get('lpos')
        tpos = request.POST.get('tpos')
        workingdoll.doll_lpos = lpos
        workingdoll.doll_tpos = tpos
        workingdoll.save()
        jsondata = json.dumps({'lpos': lpos, 'tpos': tpos})
        return JsonResponse({'lpos': lpos, 'tpos': tpos})
