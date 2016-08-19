from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from .models import Background 
from .models import Doll
from .models import Dollhouse
from .models import Accessory
from .models import DollPicture
from .models import AccessoryPicture
import json

def index(request):
    return render(request, 'house/index.html')

def new_image(request):
  return render(request, 'house/new_image.html', context)

def dollhouse(request, dollhouse):
    workingdollhouse = Dollhouse.objects.get(id=dollhouse)
    doll_objects = Doll.objects.filter(dollhouse=workingdollhouse)
    context = {'doll_objects': doll_objects, 'workingdollhouse': workingdollhouse}
    return render(request, 'house/dollhouse.html', context)

#def doll(request, dollid):
#    if request.method == 'POST':
#        workingdoll = Doll.objects.get(id=dollid)
#        lpos = request.POST.get('lpos')
#        tpos = request.POST.get('tpos')
#        workingdoll.doll_lpos = lpos
#        workingdoll.doll_tpos = tpos
#        workingdoll.save()
#        jsondata = json.dumps({'lpos': lpos, 'tpos': tpos})
#        return JsonResponse({'lpos': lpos, 'tpos': tpos})

def doll(request, dollid):
    if request.method == 'POST':
        workingdoll = Doll.objects.get(id=dollid)
        data = (request.POST).dict()
        for key, value in data.items():
            setattr(workingdoll, key, value)
        workingdoll.save()
        return HttpResponse("success!")


def dollcreate(request):
    if request.method == 'POST':
        doll_name = request.POST.get('dollName')
        doll_image = request.POST.get('dollImage')
        doll_lpos = "1px"
        doll_tpos = "1px"
        dollhouse = request.POST.get('workingDollhouse')
        d = Doll(doll_name=doll_name, doll_image=doll_image, doll_lpos=doll_lpos, doll_tpos=doll_tpose)
        d.dollhouse_id = int(dollhouse)
        d.save()
        jsondata = json.dumps({'doll_name': doll_name, 'doll_image': doll_image, 'dollhouse': dollhouse})
    return JsonResponse({'doll_name': doll_name, 'doll_image': doll_image, 'dollhouse': dollhouse})

       

def dressing_room(request, dollhouse):
    workingdollhouse = Dollhouse.objects.get(id=dollhouse)
    accessory_objects = Accessory.objects.filter(dollhouse=workingdollhouse)
    accessorypicture_objects = AccessoryPicture.objects.all()
    doll_objects = Doll.objects.filter(dollhouse=workingdollhouse)
    dollpicture_objects = DollPicture.objects.all()
    context = {'dollpicture_objects': dollpicture_objects, 'accessorypicture_objects': accessorypicture_objects, 'doll_objects': doll_objects, 'workingdollhouse': workingdollhouse}
    return render(request, 'house/dressing_room.html', context)
