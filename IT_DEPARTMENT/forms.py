from django import forms
from .models import Assignment

class AssiignmentForm(forms.ModelForm):
    class Meta:
        model = Assignment
        fields = ('name', 'pdf','aid')
