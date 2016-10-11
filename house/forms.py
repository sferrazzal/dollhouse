from django import forms
from .models import DollPicture
from .models import AccessoryPicture
from .models import Background

class DollPictureForm(forms.ModelForm):
    name = forms.CharField(label = 'New Doll Name', max_length=100)
    picture = forms.FileField(label = 'New Doll Image')

    class Meta:
        model = DollPicture
        fields = ('name', 'picture')

class AccessoryPictureForm(forms.ModelForm):
    name = forms.CharField(label = 'New Accessory Name', max_length=100)
    picture = forms.FileField(label = 'New Accessory Image')

    class Meta:
        model = AccessoryPicture
        fields = ('name', 'picture')

class BackgroundForm(forms.ModelForm):
    bg_name = forms.CharField(label = 'New Background Name', max_length=100)
    bg_image= forms.FileField(label = 'New Background Image')

    class Meta:
        model = Background 
        fields = ('bg_name', 'bg_image')
