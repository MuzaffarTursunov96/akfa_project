from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from accounts.decorators import allowed_users
from .forms import NormaEpdmFileForm,TexcartaEpdmFileForm
from .models import NormaEpdm,EpdmFile,TexcartaFile,SiroEpdm
from config.settings import MEDIA_ROOT
import pandas as pd
from django.http import JsonResponse
from django.db.models import Q
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_exempt
import json
import random
import string
# Create your views here.

@login_required(login_url='/accounts/login/')
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user']) 
def create_siryo_from_file(request):
    if request.method == 'POST':
        data = request.POST.copy()
        data['type']='termo'
        form = NormaEpdmFileForm(data, request.FILES)
        if form.is_valid():
            # normaa =SiroEpdm.objects.all()
            # normaa.delete()
            form_file = form.save()
            file = form_file.file
            path =f'{MEDIA_ROOT}/{file}'
            
            df = pd.read_excel(path,sheet_name='sapcode')
            

            df = df.astype(str)
            df = df.replace('nan','')
            df = df.replace('0.0','')
            df = df.replace(' ','')
            
            columns = df.columns

            # SiroEpdm(data ={'columns':list(columns)}).save()

            for key, row in df.iterrows():
                norma_dict = {}
                
                for col in columns:
                    norma_dict[col]=row[col]
                if SiroEpdm.objects.filter(data__exact=norma_dict).exists():
                    siryoo = SiroEpdm.objects.filter(data__exact=norma_dict)[:1].get()
                    siryoo.data = norma_dict
                    
                else:
                    SiroEpdm(data =norma_dict).save()

    return render(request,'norma/benkam/main.html')

@login_required(login_url='/accounts/login/')
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user']) 
def create_siryo(request):
    if request.method =='POST':
        # data_j = dict(request.POST)
        data_json = request.POST.get('data',None)
        
        datas = json.loads(data_json)

        artikul_component = SiroEpdm(
            data=datas
            )   
            
        artikul_component.save()

        return JsonResponse({'status':201})
    return render(request,'epdm/add.html')




@csrf_exempt
@login_required(login_url='/accounts/login/')
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user']) 
def edit_siryo(request,id):
      sapcode_org = SiroEpdm.objects.get(id=id)
      if request.method =='POST':
            data_json = request.POST.get('data',None)
        
            datas = json.loads(data_json)
            sapcode_org.data = datas
            sapcode_org.save() 
            
            return JsonResponse({'status':201})
      else:
            context ={
                  'sapcode':sapcode_org,
                  'section':'Епдм сапкод'
            }
            return render(request,'epdm/edit.html',context)

@csrf_exempt
@login_required(login_url='/accounts/login/')
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user']) 
def siryo_bulk_delete(request):
    if request.method =='POST':
        ids = request.POST.get('ids',None)
        if ids:
            ids = ids.split(',')
            
            for id in ids:
                sapcode = SiroEpdm.objects.get(id=id)
                sapcode.delete()

        return JsonResponse({'msg':True})
    else:
        return JsonResponse({'msg':False})

@csrf_exempt
@login_required(login_url='/accounts/login/')
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user']) 
def delete_siryo(request,id):
      if request.method =='POST':
            if SiroEpdm.objects.filter(id=id).exists():
                SiroEpdm.objects.get(id=id).delete()
                return JsonResponse({'msg':True})
            else:
                return JsonResponse({'msg':False})

      else:
            return JsonResponse({'msg':False})

@login_required(login_url='/accounts/login/')
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user'])
def show_siryo(request):
     
      search_text = request.GET.get('search',None)

      if search_text:
            products = SiroEpdm.objects.filter(
                  Q(data__MATNR__icontains = search_text)
                  
            ).order_by('-created_at')
      else:
            products = SiroEpdm.objects.all().order_by('-created_at')

      paginator = Paginator(products, 25)

      if request.GET.get('page') != None:
            page_number = request.GET.get('page')
      else:
            page_number=1

      page_obj = paginator.get_page(page_number)

    
      

      context ={
            'section':'Епдм',
            'products':page_obj,
            'type':False,
            'search':search_text
      }

                  
      return render(request,'epdm/show_siryo.html',context)


@login_required(login_url='/accounts/login/') 
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user']) 
def find_norma(request):
    all_data = [ [] for i in range(17)]
    does_not_exists = []

    if request.method =='POST':
        ozmk =request.POST.get('ozmk',None)
        if ozmk:
            ozmks = ozmk.split()
            for ozm in ozmks:
                if SiroEpdm.objects.filter(data__MATNR__icontains=ozm).exists():
                    siryo = SiroEpdm.objects.filter(data__MATNR__icontains=ozm)[:1].get().data
                    all_data[0].append(siryo['Норма кг'])
                    all_data[1].append(siryo['MATNR'])
                    all_data[2].append(siryo['TEXT1'])
                    all_data[3].append(siryo['ШОР 1'])
                    all_data[4].append(siryo['SAP CODE1'])
                    all_data[5].append(siryo['Коробка внешняя'])
                    all_data[6].append(siryo['шт1'])
                    all_data[7].append(siryo['SAP CODE2'])
                    all_data[8].append(siryo['Коробка круглая'])
                    all_data[9].append(siryo['шт2'])
                    all_data[10].append(siryo['SAP CODE3'])
                    all_data[11].append(siryo['Наклейка'])
                    all_data[12].append(siryo['шт3'])
                    all_data[13].append(siryo['SAP CODE4'])
                    all_data[14].append(siryo['Пакет'])
                    all_data[15].append(siryo['кг'])
                else:
                    does_not_exists.append(ozm)
            data_df =pd.DataFrame({
                        'NORMA KG':all_data[0],
                        'MATNR':all_data[1],
                        'TEXT1':all_data[2],
                        'SHOP1':all_data[3],
                        'SAPCODE1':all_data[4],
                        'KOROBKA VNESH':all_data[5],
                        'SHT1':all_data[6],
                        'SAPCODE2':all_data[7],
                        'KOROBKA KRUG':all_data[8],
                        'SHT2':all_data[9],
                        'SAPCODE3':all_data[10],
                        'NAKLEYKA':all_data[11],
                        'SHT3':all_data[12],
                        'SAPCODE4':all_data[13],
                        'PAKET':all_data[14],
                        'KG':all_data[15],
                        })
            df_not = pd.DataFrame({'SAP CODE':does_not_exists})
            path = generate_norma_epdm(data_df,df_not)
            
            files =[File(file=path,filetype='obichniy',id=1)]
            context ={
                'files':files,
                'section':'Норма лист'
            }
        return render(request,'universal/generated_files.html',context)
    else:
        
        return render(request,'norma/character_find.html',{'section':'Норма','section2':'Генерация нормы'})




class File:
    def __init__(self,file,filetype,id):
        self.file =file
        self.filetype =filetype
        self.id = id

@login_required(login_url='/accounts/login/')
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user'])
def file_upload_epdm_tex(request): 
  if request.method == 'POST':
    data = request.POST.copy()
    data['type']='simple'
    form = TexcartaEpdmFileForm(data, request.FILES)
    if form.is_valid():
        file = form.save()
        context ={'files':[File(file=str(file.file),id=file.id,filetype='texcarta'),],
              'link':'/epdm/generate-epdm-texcarta/',
              'section':'Генерация техкарта файла',
              'type':'Радиатор',
              'file_type':'simple'
              }
    return render(request,'universal/file_list_norma.html',context)
  else:
      form =TexcartaEpdmFileForm()
      context ={
        'section':''
      }
  return render(request,'universal/main.html',context)

@login_required(login_url='/accounts/login/')
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user'])
def full_update_norm(request):
    if request.method == 'POST':
        data = request.POST.copy()
        data['type']='termo'
        form = NormaEpdmFileForm(data, request.FILES)
        if form.is_valid():
            normaa =NormaEpdm.objects.all()
            normaa.delete()
            form_file = form.save()
            file = form_file.file
            path =f'{MEDIA_ROOT}/{file}'
            
            df = pd.read_excel(path,sheet_name='Baza', header=0)
            

            df = df.astype(str)
            df = df.replace('nan','0')
            df = df.replace('0.0','0')
            df = df.replace(' ','0')
            
            columns = df.columns

            NormaEpdm(data ={'columns':list(columns)}).save()

            for key, row in df.iterrows():
                norma_dict = {}
                for col in columns:
                    norma_dict[col]=row[col]
                NormaEpdm(data =norma_dict).save()

    return render(request,'norma/benkam/main.html')

def generate_random_string(length=10):
    letters = string.ascii_letters + string.digits  # Includes uppercase, lowercase letters, and digits
    random_string = ''.join(random.choice(letters) for _ in range(length))
    return random_string


def generate_norma_epdm(df_sapcodes,df_not_exists):
    df_sapcodes = df_sapcodes.astype(str)
    df_sapcodes = df_sapcodes.replace('nan','0')
    
    df = pd.DataFrame()
    df['counter'] = [0 for x in range(len(df_sapcodes)*25)]
    df['ID'] = ""
    df['MATNR'] = ""
    df['WERKS'] = ""
    df['TEXT1'] = ""
    df['STLAL'] = ""
    df['STLAN'] = ""
    df['ZTEXT'] = ""
    df['STKTX'] = ""
    df['BMENG'] = ""
    df['BMEIN'] = ""
    df['STLST'] = ""
    df['POSNR'] = ""
    df['POSTP'] = ""
    df['MATNR1'] = ""
    df['TEXT2'] = ""
    df['MEINS'] = ""
    df['MENGE'] = ""
    df['DATUV'] = ""
    df['PUSTOY'] = ""
    df['LGORT'] = ""
    
    count_2=0
    
    itogo = NormaEpdm.objects.filter(
                        Q(data__Краткий_текст__icontains='Итого')
                    )[:1].get().data
    
    for key, row in df_sapcodes.iterrows():
        print(key)
        
        df['ID'][count_2] ='1'
        df['MATNR'][count_2] = row['MATNR']
        df['WERKS'][count_2] = '4701'
        df['TEXT1'][count_2] = row['TEXT1']
        df['STLAL'][count_2] = '1'
        df['STLAN'][count_2] = '1'
        df['ZTEXT'][count_2] = row['TEXT1']
        df['STKTX'][count_2] = 'Упаковка'
        df['BMENG'][count_2] = '1000'
        df['BMEIN'][count_2] = 'ШТ'
        df['STLST'][count_2] = '1'
        df['POSNR'][count_2] = ''
        df['POSTP'][count_2] = ''
        df['MATNR1'][count_2] = ''
        df['TEXT2'][count_2] = ''
        df['MEINS'][count_2] = ''
        df['MENGE'][count_2] = ''
        df['DATUV'][count_2] = '01012023'
        df['PUSTOY'][count_2] = ''
        df['LGORT'][count_2] = ''


        count_2 +=1
        count = 1

        for ii in range(1,5):
            if ii == 1 and row['SAPCODE1'] != '':
                df['ID'][count_2] = '2'
                df['POSNR'][count_2] = count
                df['POSTP'][count_2] = 'L'
                df['MATNR1'][count_2] = str(int(float(row['SAPCODE1'])))
                df['TEXT2'][count_2] = row['KOROBKA VNESH']
                df['MEINS'][count_2] =  int(float(row['SHT1'])*1000)
                df['MENGE'][count_2] = 'ШТ'
                df['LGORT'][count_2] = 'PS01'
                count_2 +=1
                count +=1
            if ii == 2 and row['SAPCODE2'] != '':
                df['ID'][count_2] = '2'
                df['POSNR'][count_2] = count
                df['POSTP'][count_2] = 'L'
                df['MATNR1'][count_2] = str(int(float(row['SAPCODE2'])))
                df['TEXT2'][count_2] = row['KOROBKA KRUG']
                df['MEINS'][count_2] =  int(float(row['SHT2'])*1000)
                df['MENGE'][count_2] = 'ШТ'
                df['LGORT'][count_2] = 'PS01'
                count_2 +=1
                count +=1
            if ii == 3 and row['SAPCODE3'] != '':
                df['ID'][count_2] = '2'
                df['POSNR'][count_2] = count
                df['POSTP'][count_2] = 'L'
                df['MATNR1'][count_2] = str(int(float(row['SAPCODE3'])))
                df['TEXT2'][count_2] = row['NAKLEYKA']
                df['MEINS'][count_2] =  int(float(row['SHT3'])*1000)
                df['MENGE'][count_2] = 'ШТ'
                df['LGORT'][count_2] = 'PS01'
                count_2 +=1
                count +=1
            if ii == 4 and row['SAPCODE4'] != '':
                df['ID'][count_2] = '2'
                df['POSNR'][count_2] = count
                df['POSTP'][count_2] = 'L'
                df['MATNR1'][count_2] = str(int(float(row['SAPCODE4'])))
                df['TEXT2'][count_2] = row['PAKET']
                df['MEINS'][count_2] =  round(float(row['KG'])* 1000,3)
                df['MENGE'][count_2] = 'КГ'
                df['LGORT'][count_2] = 'PS01'
                count_2 +=1
                count +=1


        zagolovok = str(row['SHOP1'])
        
        result = NormaEpdm.objects.filter(
                        Q(data__has_key=zagolovok) & ~Q(data__contains={zagolovok: "0"}) & ~Q(data__contains={zagolovok: ""})
                    ).order_by('created_at').values('data')

    
        itogo_val =float(itogo[zagolovok])

        
        

        
        norma_kg = float(str(row['NORMA KG']).replace(',','.'))

        for norm in result:
            data = norm['data']
            
            if 'Итого' in data['Краткий_текст']:
                continue
            
            df['ID'][count_2] = '2'
            df['POSNR'][count_2] = count
            df['POSTP'][count_2] = 'L'
            df['MATNR1'][count_2] = str(data['SAP код']).replace('.0','')
            df['TEXT2'][count_2] = data['Краткий_текст']
            df['MEINS'][count_2] = round((float(data[zagolovok])/itogo_val) * norma_kg * 1000,3)
            df['MENGE'][count_2] = 'КГ'
            df['LGORT'][count_2] = 'PS01'
            count_2 +=1
            count +=1
            
        if 'PDM' in row['MATNR']:      
            df['ID'][count_2] = '2'
            df['POSNR'][count_2] = count
            df['POSTP'][count_2] = 'L'
            df['MATNR1'][count_2] = '1900012885'
            df['TEXT2'][count_2] = 'Тех отход EPDM годный брак'
            df['MEINS'][count_2] =  round(8.6 * norma_kg,3)*(-1)
            df['MENGE'][count_2] = 'КГ'
            df['LGORT'][count_2] = 'PS01'
            count_2 +=1
            count +=1
        if 'PDC' in row['MATNR']:      
            df['ID'][count_2] = '2'
            df['POSNR'][count_2] = count
            df['POSTP'][count_2] = 'L'
            df['MATNR1'][count_2] = '1900012885'
            df['TEXT2'][count_2] = 'Тех отход EPDM годный брак'
            df['MEINS'][count_2] = round(100 * norma_kg,3)*(-1)
            df['MENGE'][count_2] = 'КГ'
            df['LGORT'][count_2] = 'PS01'
            count_2 +=1
            count +=1
        if 'IDN' in row['MATNR']:      
            df['ID'][count_2] = '2'
            df['POSNR'][count_2] = count
            df['POSTP'][count_2] = 'L'
            df['MATNR1'][count_2] = '1900012885'
            df['TEXT2'][count_2] = 'Тех отход EPDM годный брак'
            df['MEINS'][count_2] = round(56 * norma_kg,3)*(-1)
            df['MENGE'][count_2] = 'КГ'
            df['LGORT'][count_2] = 'PS01'
            count_2 +=1
            count +=1



    del df['counter']

    string_rand = generate_random_string()
  
    path=f'{MEDIA_ROOT}\\uploads\\epdm\\norma_{string_rand}.xlsx'
    writer = pd.ExcelWriter(path,engine='openpyxl')
   
    df.to_excel(writer,index=False,sheet_name ='NORMA EPDM')
    df_not_exists.to_excel(writer,index=False,sheet_name ='SIRYO DOES NOT EXISTS')
    writer.close()
    
    return path


@login_required(login_url='/accounts/login/')
@allowed_users(allowed_roles=['admin','moderator','epdm','universal_user'])
def lenght_generate_texcarta(request,id):
    file = TexcartaFile.objects.get(id=id).file
    # path = f'D:\\Users\\Muzaffar.Tursunov\\Desktop\\NORMA\\NORM_EPDM\\tex_sapcode.xlsx'
    
    data = pd.read_excel(f'{MEDIA_ROOT}/{file}')
  


    # data = pd.read_excel(path,header=0)
    counter = len(data)

    df_new = pd.DataFrame()
    df_new['counter'] =[ '' for i in range(0,counter*2)]
    df_new['ID']=''
    df_new['MATNR']=''
    df_new['WERKS']=''
    df_new['PLNNR']=''
    df_new['STTAG']=''
    df_new['PLNAL']=''
    df_new['KTEXT']=''
    df_new['VERWE']=''
    df_new['STATU']=''
    df_new['LOSVN']=''
    df_new['LOSBS']=''
    df_new['VORNR']=''
    df_new['ARBPL']=''
    df_new['WERKS1']=''
    df_new['STEUS']=''
    df_new['LTXA1']=''
    df_new['BMSCH']=''
    df_new['MEINH']=''
    df_new['VGW01']=''
    df_new['VGE01']=''
    df_new['ACTTYPE_01']=''
    df_new['CKSELKZ']=''
    df_new['UMREZ']=""
    df_new['UMREN']=''
    df_new['USR00']=''
    df_new['USR01']=''


    counter_2 = 0
    for key,row in data.iterrows():
        if 'pdm' in str(row['MATNR']).lower():
            for i in range(1,3):
                if i ==1:
                    df_new['ID'][counter_2] ='1'
                    df_new['MATNR'][counter_2] = row['MATNR']
                    df_new['WERKS'][counter_2] ='4701'
                    df_new['STTAG'][counter_2] ='01012024'
                    df_new['PLNAL'][counter_2] ='1'
                    df_new['KTEXT'][counter_2] =row['TEXT1']
                    df_new['VERWE'][counter_2] ='1'
                    df_new['STATU'][counter_2] ='4'
                    df_new['LOSVN'][counter_2] ='1'
                    df_new['LOSBS'][counter_2] ='99999999'
                elif i == 2:
                    df_new['ID'][counter_2]='2'
                    df_new['VORNR'][counter_2] ='0010'
                    df_new['ARBPL'][counter_2] ='4701EX01'
                    df_new['WERKS1'][counter_2] ='4701'
                    df_new['STEUS'][counter_2] ='ZK01'
                    df_new['LTXA1'][counter_2] ='Упаковка'
                    df_new['BMSCH'][counter_2] = '1000'
                    df_new['MEINH'][counter_2] ='ST'
                    df_new['VGW01'][counter_2] ='24'
                    df_new['VGE01'][counter_2] ='STD'
                    df_new['ACTTYPE_01'][counter_2] ='200162'
                    df_new['CKSELKZ'][counter_2] ='X'
                    df_new['UMREZ'][counter_2] = '1'
                    df_new['UMREN'][counter_2] = '1'
                    df_new['USR00'][counter_2] = '1'
                    df_new['USR01'][counter_2] = '60'
                    
                counter_2 +=1
        
        elif 'pdc' in str(row['MATNR']).lower() or 'idn' in str(row['MATNR']).lower():
            for i in range(1,3):
                if i ==1:
                    df_new['ID'][counter_2] ='1'
                    df_new['MATNR'][counter_2] = row['MATNR']
                    df_new['WERKS'][counter_2] ='4701'
                    df_new['STTAG'][counter_2] ='01012024'
                    df_new['PLNAL'][counter_2] ='1'
                    df_new['KTEXT'][counter_2] =row['TEXT1']
                    df_new['VERWE'][counter_2] ='1'
                    df_new['STATU'][counter_2] ='4'
                    df_new['LOSVN'][counter_2] ='1'
                    df_new['LOSBS'][counter_2] ='99999999'
                elif i == 2:
                    df_new['ID'][counter_2]='2'
                    df_new['VORNR'][counter_2] ='0010'
                    df_new['ARBPL'][counter_2] ='4701PU01'
                    df_new['WERKS1'][counter_2] ='4701'
                    df_new['STEUS'][counter_2] ='ZK01'
                    df_new['LTXA1'][counter_2] ='Упаковка'
                    df_new['BMSCH'][counter_2] = '1000'
                    df_new['MEINH'][counter_2] ='ST'
                    df_new['VGW01'][counter_2] ='24'
                    df_new['VGE01'][counter_2] ='STD'
                    df_new['ACTTYPE_01'][counter_2] ='200003'
                    df_new['CKSELKZ'][counter_2] ='X'
                    df_new['UMREZ'][counter_2] = '1'
                    df_new['UMREN'][counter_2] = '1'
                    df_new['USR00'][counter_2] = '1'
                    df_new['USR01'][counter_2] = '60'
                    
                counter_2 +=1
        
    string_rand = generate_random_string()

    del df_new['counter']
    path2=f'{MEDIA_ROOT}\\uploads\\epdm\\texcarta_epdm_{string_rand}.xlsx'
    df_new.to_excel(path2,index=False)

    context ={
            'file1':path2,
            'section':'Техкарта',

        }

   
    return render(request,'norma/radiator/generated_files_texcarta.html',context)

