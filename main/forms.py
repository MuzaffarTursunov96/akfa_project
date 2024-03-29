from django import forms
from .models import ExcelFiles,ExcelFilesOzmka


class FileForm(forms.ModelForm):
  def __init__(self, *args, **kwargs):
      super(FileForm, self).__init__(*args, **kwargs)
      self.fields['file'].widget.attrs.update({
          'class': 'form-control-file'
      })
  class Meta:
    model =ExcelFiles
    fields =['file']

class FileFormOZMKA(forms.ModelForm):
  def __init__(self, *args, **kwargs):
      super(FileFormOZMKA, self).__init__(*args, **kwargs)
      self.fields['file'].widget.attrs.update({
          'class': 'form-control-file'
      })
  class Meta:
    model =ExcelFilesOzmka
    fields =['file']