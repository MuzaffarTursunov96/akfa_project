from django.urls import path,re_path
from . import views


urlpatterns = [
  path('home',views.index, name='index'),
  path('',views.home, name='home'),
  path('list',views.show_list,name='show_list'),
  path('file-upload',views.file_upload,name='file-upload'),
  path('file-upload-for-ozmka',views.file_upload_for_get_ozmka,name='file-upload-ozmka'),
  path('file-list',views.file_list,name='file_list'),
  path('file-list-ozmka',views.file_list_ozmka,name='file_list_ozmka'),
  path('import-and-merge/<int:id>',views.import_file,name='import_and_merge'),
  path('add-data/<int:id>',views.read_and_write,name='add_data'),
  path('download/<int:id>',views.download,name='download'),
  path('len-gen/<int:id>',views.lenght_generate,name='lenght_generate'),
  path('delete-file/<int:id>',views.delete_file,name='delete_file'),
  path('work-wast',views.work_wast,name ='work_wast'),
  path('get-ozmka/<int:id>',views.get_ready_ozmka,name ='get_ready_ozmka'),


  path('file-upload-org',views.file_upload_org,name='file-upload-org'),
  path('file-upload-for-ozmka-org',views.file_upload_for_get_ozmka_org,name='file-upload-ozmka-org'),
  path('file-list-org',views.file_list_org,name='file_list_org'),
  path('len-gen-org/<int:id>',views.lenght_generate_org,name='lenght_generate_org'),
  path('open-in-explorer',views.open_folder_path_in_explorer,name='open-explorer'),
  path('list-history',views.show_list_history,name='show_list_history'),
  # path('downloading-razlovka',views.downloading_razlovka,name ='downloading_razlovka'),

 


  
]