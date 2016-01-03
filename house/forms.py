from django import forms

class ImageForm(forms.Form):
    imagefile = forms.FileField(
        label='Select an image',
        help_text='Ideally I would require you to upload the right size image'
    )
