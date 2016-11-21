from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from .models import Background 
from .models import Doll
from .models import Dollhouse
from .models import Accessory
from .models import DollPicture
from .models import AccessoryPicture
from .forms import * 
import json

def lobby(request):
    dollhouses = Dollhouse.objects.all()
    context = {'dollhouses': dollhouses}
    return render(request, 'house/lobby.html', context)

def dollhouse(request, dollhouse):
    workingdollhouse = Dollhouse.objects.get(id=dollhouse)
    doll_objects = Doll.objects.filter(dollhouse=workingdollhouse)
    background_objects = Background.objects.all()
    context = {'doll_objects': doll_objects, 'workingdollhouse': workingdollhouse, 'background_objects': background_objects}
    return render(request, 'house/dollhouse.html', context)

def loading_dock(request):
    form = None
    if request.method == 'POST':
        FormType = request.POST.get('FormType')
        FormDict = {'DollPictureForm': DollPictureForm,
                    'AccessoryPictureForm': AccessoryPictureForm,
                    'BackgroundForm': BackgroundForm,
                    }
        cls = FormDict[FormType]
        form = cls(request.POST, request.FILES)
        print("matched class {}!".format(cls))


    #print("formtype = {}!".format(FormType))
    #for cls in (DollPictureForm, AccessoryPictureForm, BackgroundForm):
    #    print("checking {}!".format(cls))
    #    if cls.formtype == FormType:
    #        form = cls(request.POST, request.FILES)
    #        print("matched formtype {}!".format(cls))
    #        break
    #if request.method == 'POST':
        if form.is_valid():
            form.save()
        else: print("it's not valid!")
    accessoryform = AccessoryPictureForm()
    dollform = DollPictureForm()
    backgroundform = BackgroundForm()
    context = {'form': form, 'accessoryform': accessoryform, 'dollform': dollform, 'backgroundform': backgroundform}
    return render(request, 'house/loading_dock.html', context)

def doll(request, dollid):
    if request.method == 'POST':
        workingdoll = Doll.objects.get(id=dollid)
        if request.POST.get('erase') == "true":
            workingdoll.delete()
            return HttpResponse("Doll Deleted!")
        else:
            data = (request.POST).dict()
            for key, value in data.items():
                setattr(workingdoll, key, value)
            workingdoll.save()
            return HttpResponse("success!")

def accessory(request, accessoryid):
    if request.method == 'POST':
        workingaccessory = Accessory.objects.get(id=accessoryid)
        if request.POST.get('erase') == "true":
            workingaccessory.delete()
            return HttpResponse("Accessory deleted!")
        else:
            data = (request.POST).dict()
            for key, value in data.items():
                setattr(workingaccessory, key, value)
            workingaccessory.save()
            return HttpResponse("Accessory {} saved!".format(workingaccessory.accessory_name))

def dollcreate(request):
    if request.method == 'POST':
        doll_name = request.POST.get('dollName')
        doll_image = request.POST.get('dollImage')
        doll_lpos = "1px"
        doll_tpos = "1px"
        dollhouse = request.POST.get('workingDollhouse')
        d = Doll(doll_name=doll_name, doll_image=doll_image, doll_lpos=doll_lpos, doll_tpos=doll_tpos)
        d.dollhouse_id = int(dollhouse)
        d.save()
        jsondata = json.dumps({'doll_name': doll_name, 'doll_image': doll_image, 'dollhouse': dollhouse})
    return JsonResponse({'doll_name': doll_name, 'doll_image': doll_image, 'dollhouse': dollhouse})


def accessorycreate(request):
    if request.method == 'POST':
        accessory_name = request.POST.get('accessoryName')
        accessory_image = request.POST.get('accessoryImage')
        accessory_lpos = "1px"
        accessory_tpos = "1px"
        a = Accessory(accessory_name=accessory_name, accessory_image=accessory_image, accessory_lpos = accessory_lpos, accessory_tpos = accessory_tpos)
        a.doll_id = int(request.POST.get('doll'))
        a.dollhouse_id = int(request.POST.get('workingDollhouse'))
        a.save()
        return HttpResponse("Accessory Created!")
       

def dressing_room(request, dollhouse):
    workingdollhouse = Dollhouse.objects.get(id=dollhouse)
    dollhouse_objects = Dollhouse.objects.prefetch_related('doll_set').get(id=dollhouse)
    doll_objects = dollhouse_objects.doll_set.all()
    doll_objects.prefetch_related('accessory_set') 
    accessory_objects = Accessory.objects.filter(dollhouse=workingdollhouse)
    accessorypicture_objects = AccessoryPicture.objects.all()
    accessory_objects = Accessory.objects.filter(dollhouse=workingdollhouse)
    dollpicture_objects = DollPicture.objects.all()
    context = {'accessory_objects': accessory_objects, 'dollpicture_objects': dollpicture_objects, 'accessorypicture_objects': accessorypicture_objects, 'doll_objects': doll_objects, 'workingdollhouse': workingdollhouse}
    return render(request, 'house/dressing_room.html', context)
