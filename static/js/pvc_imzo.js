class BasePokritiya{
    constructor(
        full=false,//done
        id=NaN, //done
        nazvaniye_system=NaN,//done
        camera=NaN,//done
        base_artikul=NaN,//done
        kod_k_component=NaN,//done
        tip_pokritiya=NaN,//done
        nazvaniye_svet_zames=NaN,//done
        kod_svet_zames=NaN,//done
        dlina=NaN,//done
        svet_lamplonka_snaruji=NaN,//done
        kod_lam_sn=NaN,//done
        svet_lamplonka_vnutri=NaN,//done
        kod_lam_vn=NaN,//done
        svet_rezin=NaN,//done
        kod_svet_rezini=NaN,//done
        nadpis_nakleyki=NaN,
        kod_nakleyki=NaN,//done
        goods_group=NaN,//done
        tex_name=NaN,//done
        kratkiy_tekst=NaN,//done
        sap_code=NaN,//done
        krat=NaN,//done
        comment=NaN,//done
        sena=NaN,//done
        klaes_id=NaN,//done
        artikul=NaN,//done
        is_iklyuch=false,//done
        is_active=false//done

        ) {
      
        this.full=full;
        this.id=id;
        this.nazvaniye_system=nazvaniye_system;
        this.camera=camera;
        this.base_artikul=base_artikul;
        this.nazvaniye_svet_zames=nazvaniye_svet_zames;
        this.kod_k_component=kod_k_component;
        this.tip_pokritiya=tip_pokritiya;
        this.kod_svet_zames=kod_svet_zames;
        this.dlina=dlina;
        this.svet_lamplonka_snaruji=svet_lamplonka_snaruji;
        this.kod_lam_sn=kod_lam_sn;
        this.svet_lamplonka_vnutri=svet_lamplonka_vnutri;
        this.kod_lam_vn=kod_lam_vn;
        this.svet_rezin=svet_rezin;
        this.kod_svet_rezini=kod_svet_rezini;
        this.nadpis_nakleyki=nadpis_nakleyki;
        this.kod_nakleyki=kod_nakleyki;
        this.goods_group=goods_group;
        this.tex_name=tex_name;
        this.kratkiy_tekst=kratkiy_tekst;
        this.sap_code=sap_code;
        this.krat=krat;
        this.comment=comment;
        this.sena=sena;
        this.klaes_id=klaes_id;
        this.artikul=artikul;
        this.is_iklyuch=is_iklyuch;
        this.is_active=is_active;
    }
    get_kratkiy_tekst(){
        switch(this.id){
            case 1: if(this.is_iklyuch){
                if(this.dlina && this.kod_svet_zames && this.kod_nakleyki){
                    if(this.goods_group && this.sena && this.klaes_id){
                        return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  ' +this.kod_nakleyki,'accept':true} 
                    }else{
                        return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  ' +this.kod_nakleyki,'accept':false} 
    
                    }
        
                }else{
                    return {'text':'XXXXXXXX','accept':false}
                }
    
                }else{
        
                    if(this.kod_svet_rezini && this.dlina && this.kod_svet_zames && this.kod_nakleyki){
                        if(this.goods_group && this.sena && this.klaes_id){
                            return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  '+this.kod_svet_rezini +'  ' +this.kod_nakleyki,'accept':true}
                        }else{
                            return {'text':this.artikul + '  '+ this.kod_svet_zames + ' L' + this.dlina +'  '+this.kod_svet_rezini +'  ' +this.kod_nakleyki,'accept':false}
        
                        }
            
                    }else{
                        return {'text':'XXXXXXXX','accept':false}
                    }
                }break;
            case 2:if(this.is_iklyuch){
            
                console.log(this.dlina , this.kod_lam_vn , this.kod_lam_sn , this.kod_nakleyki , this.kod_svet_zames,this.kod_svet_rezini,'isklyuch')
                if(this.dlina && this.kod_lam_vn && this.kod_lam_sn && this.kod_nakleyki && this.kod_svet_zames){
                    console.log(this.dlina , this.kod_lam_vn , this.kod_lam_sn , this.kod_nakleyki , this.kod_svet_zames,this.kod_svet_rezini,'isklyuch1')
                    if(this.goods_group && this.sena && this.klaes_id){
                        console.log(this.dlina , this.kod_lam_vn , this.kod_lam_sn , this.kod_nakleyki , this.kod_svet_zames,this.kod_svet_rezini,'isklyuch2')
                        return {'text':this.artikul + '  '+this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  '+this.kod_nakleyki,'accept':true} 
                    }else{
                        console.log(this.dlina , this.kod_lam_vn , this.kod_lam_sn , this.kod_nakleyki , this.kod_svet_zames,this.kod_svet_rezini,'isklyuch3')
                        return {'text':this.artikul + '  '+this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  '+this.kod_nakleyki,'accept':false} 
                    }
        
                }else{
                    return {'text':'XXXXXXXX','accept':false}
                }
                }else{
                    console.log(this.dlina , this.kod_lam_vn , this.kod_lam_sn , this.kod_nakleyki , this.kod_svet_zames,this.kod_svet_rezini,'000000')
                    if(this.dlina && this.kod_lam_vn && this.kod_lam_sn && this.kod_nakleyki && this.kod_svet_rezini && this.kod_svet_zames){
                        console.log(this.dlina , this.kod_lam_vn , this.kod_lam_sn , this.kod_nakleyki , this.kod_svet_zames,this.kod_svet_rezini,'ee1')
                        if(this.goods_group && this.sena && this.klaes_id){
                            console.log(this.dlina , this.kod_lam_vn , this.kod_lam_sn , this.kod_nakleyki , this.kod_svet_zames,this.kod_svet_rezini,'ffsdfs33333sfffff')
                            return {'text':this.artikul + '  '+this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  '+this.kod_svet_rezini +'  '+this.kod_nakleyki,'accept':true} 
                        }else{
                            console.log(this.dlina , this.kod_lam_vn , this.kod_lam_sn , this.kod_nakleyki , this.kod_svet_zames,this.kod_svet_rezini,'77777777')
                            return {'text':this.artikul + '  '+this.kod_svet_zames + ' L' + this.dlina +'  ' + this.kod_lam_sn+'/'+this.kod_lam_vn + '  '+this.kod_svet_rezini +'  '+this.kod_nakleyki,'accept':false} 
                        }
            
                    }else{
                        return {'text':'XXXXXXXX','accept':false}
                    }
                }break;
        }
        
    }
  }




text =""

for (let i = 1; i <= 10; i++) {
    text +=`
    <tr id='table_tr` +String(i)+`' >                   
    <td >
        <div class="input-group input-group-sm mb-1">
            
            <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-warning btn-sm gradient-buttons" onclick="artukil_clear(`+String(i)+`)"  id='clear_btn`+String(i)+`'>Очистить</button>
            </div>
                
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1" style='width:150px;'>
            <span id ='nazvaniye_system` +String(i)+`'style="text-transform: uppercase;font-size: 10px; font-weight:700;padding:5px;width:150px" ></span>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
            <b><span id='camera` +String(i)+`'style="text-transform: uppercase; font-size:12px;padding-left:5px"></span></b>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
            <select class=" form-control basic_artikul" style="background-color:#ddebf7; width: 140px; font-size:10px " id="artikul`+String(i)+`" onchange='clear_artikul(`+String(i)+`)'></select>
        </div>
        <span style='display:none' id='artikul_pvc` +String(i)+`'></span>
        <span style='display:none' id='iskyucheniye` +String(i)+`'></span>
    </td>
    
    
    <td >
        <div class="input-group input-group-sm mb-1">
            <b><span  id ='kod_komponent` +String(i)+`'style="text-transform: uppercase;font-size: 12px;padding-left:5px;"></span></b>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 177px;text-transform: uppercase; font-size:12px; padding-right:0px;" onchange="tip_pokritiya_selected(`+String(i)+`,this.value)" disabled id='tip_pokritiya`+String(i)+`' required>
                <option  selected ></option>
                <option value="1" >Неламинированный</option>
                <option value="2" >Ламинированный</option>
              </select>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1" style="width: 190px;">
       
        <select class="form-select" aria-label="" style="width: 190px;"  disabled id='nazvaniye_svet_zames`+String(i)+`' onchange="nazvaniye_svet_zames_selected(`+String(i)+`,this.value)">
            <option  value="" selected ></option>
            <option value="F8" >Белый стандарт</option>
            <option value="PE" >Подоконник</option>
            <option value="EG1" >Белый ENGELBERG</option>
            <option value="LE" >Ламбри</option>
            <option value="BR1" >Тёмный коричневый</option>
            <option value="WT7" >Серый</option>
            <option value="BR10" >Светлый коричневый</option>
            <option value="N2" >Белый 6000 ECO</option>
        </select>
        
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
            <b><span  id ='kod_svet_zames` +String(i)+`'style="text-transform: uppercase;font-size: 12px;padding-left:5px;"></span></b>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
            <input type="text" class="form-control " style='width:50px' onkeyup='create_kratkiy_tekst(`+String(i)+`)' disabled aria-describedby="inputGroup-sizing-sm" name ='length`+String(i)+`' id="length`+String(i)+`"  >
        </div>
    </td>

    <td >
        <div class="input-group input-group-sm mb-1">    
        <select class="form-select" aria-label="" style="width: 220px;" onchange="svet_lamplonka_snaruji_selected(`+String(i)+`,this.value)" disabled id='svet_lamplonka_snaruji`+String(i)+`'>
            <option  value="" selected></option>
            <option value="0027">Золотой дуб IW</option>
            <option value="0300">Дуб мокко IW</option>
            <option value="0549">Красный Орех IW</option>
            <option value="0550">Орех IW</option>
            <option value="1004">Мет платин</option>
            <option value="1005">Мет серый кварц</option>
            <option value="1006">Мет серый антрацит</option>
            <option value="1012">Алюкс антрацит</option>
            <option value="1015">АЛЮКС БЕЛЫЙ АЛЮМИН</option>
            <option value="1016">Алюкс серый алюмин</option>
            <option value="2007">Красный орех</option>
            <option value="2012">Орех</option>
            <option value="2025">Светлый дуб</option>
            <option value="2036">Золотой дуб</option>
            <option value="2048">Дуб мокко</option>
            <option value="3001">Терновый дуб солод</option>
            <option value="3002">Шеф Альпийский дуб</option>
            <option value="3003">Гранитовый шеф дуб</option>
            <option value="3042">Дерево бальза</option>
            <option value="3043">Вишня амаретто</option>
            <option value="3059">Орех терра</option>
            <option value="3062">Грецкий орех</option>
            <option value="3077">Винчестер</option>
            <option value="3081">Шеф дуб светлый</option>
            <option value="3083">Сантана</option>
            <option value="3086">ШЕФ ДУБ СЕРЫЙ</option>
            <option value="3091">Шеф дуб</option>
            <option value="3094">Орех Ребраун</option>
            <option value="4687">Кенсингтон серый</option>
            <option value="5057">Бриллиантвейс</option>
            <option value="6700">Темный дуб</option>
            <option value="5F00">Шеф дуб серый LG</option>
            <option value="A508">Антрацит сер ADO п</option>
            <option value="EL01">Золотой дуб Элезго</option>
            <option value="EL02">Горный Элезго</option>
            <option value="KC01">Горный KCC</option>
            <option value="S103">Красный орех ADO п</option>
            <option value="S141">Дуб мокко ADO п</option>
            <option value="S150">Золотой дуб ADO п</option>
            <option value="S500">Золотой дуб ADO</option>
            <option value="S508">Антрацит серый ADO</option>
            <option value="S541">Дуб мокко ADO</option>
            <option value="5003">Темный Антрацит</option>
            <option value="S513">Красный орех ADO</option>
            <option value="S540">Золотой дуб S540</option>
            <option value="5F01">Шеф дуб сер 5F01</option>
            <option value="1022">Ocean Blue</option>
            <option value="ASA1128">ASA1128</option>
            <option value="6030">МАТОВЫЙ БЕЛЫЙ</option>
            <option value="6062">МАТОВЫЙ ЧЁРНЫЙ</option>
            <option value="2509">АНТРАЦИТ СЕРЫЙ LG</option>
            <option value="9252">Винчестер Renolit</option>
            <option value="XXXX">XXXX</option>
        </select>
        </div>
    </td>
    
    <td >
        <div class="input-group input-group-sm mb-1">
            <div>
                <span class =' text-center ' style="font-size: small; font-weight: bold; text-transform: uppercase;padding-left:35%;" id ='code_lamplonka_snaruji` +String(i)+`'></span>
            </div>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 220px;" onchange="svet_lamplonka_vnutri_selected(`+String(i)+`,this.value)" disabled id='svet_lamplonka_vnutri`+String(i)+`'>
                <option  value="" selected></option>
                <option value="0027">Золотой дуб IW</option>
                <option value="0300">Дуб мокко IW</option>
                <option value="0549">Красный Орех IW</option>
                <option value="0550">Орех IW</option>
                <option value="1004">Мет платин</option>
                <option value="1005">Мет серый кварц</option>
                <option value="1006">Мет серый антрацит</option>
                <option value="1012">Алюкс антрацит</option>
                <option value="1015">АЛЮКС БЕЛЫЙ АЛЮМИН</option>
                <option value="1016">Алюкс серый алюмин</option>
                <option value="2007">Красный орех</option>
                <option value="2012">Орех</option>
                <option value="2025">Светлый дуб</option>
                <option value="2036">Золотой дуб</option>
                <option value="2048">Дуб мокко</option>
                <option value="3001">Терновый дуб солод</option>
                <option value="3002">Шеф Альпийский дуб</option>
                <option value="3003">Гранитовый шеф дуб</option>
                <option value="3042">Дерево бальза</option>
                <option value="3043">Вишня амаретто</option>
                <option value="3059">Орех терра</option>
                <option value="3062">Грецкий орех</option>
                <option value="3077">Винчестер</option>
                <option value="3081">Шеф дуб светлый</option>
                <option value="3083">Сантана</option>
                <option value="3086">ШЕФ ДУБ СЕРЫЙ</option>
                <option value="3091">Шеф дуб</option>
                <option value="3094">Орех Ребраун</option>
                <option value="4687">Кенсингтон серый</option>
                <option value="5057">Бриллиантвейс</option>
                <option value="6700">Темный дуб</option>
                <option value="5F00">Шеф дуб серый LG</option>
                <option value="A508">Антрацит сер ADO п</option>
                <option value="EL01">Золотой дуб Элезго</option>
                <option value="EL02">Горный Элезго</option>
                <option value="KC01">Горный KCC</option>
                <option value="S103">Красный орех ADO п</option>
                <option value="S141">Дуб мокко ADO п</option>
                <option value="S150">Золотой дуб ADO п</option>
                <option value="S500">Золотой дуб ADO</option>
                <option value="S508">Антрацит серый ADO</option>
                <option value="S541">Дуб мокко ADO</option>
                <option value="5003">Темный Антрацит</option>
                <option value="S513">Красный орех ADO</option>
                <option value="S540">Золотой дуб S540</option>
                <option value="5F01">Шеф дуб сер 5F01</option>
                <option value="1022">Ocean Blue</option>
                <option value="ASA1128">ASA1128</option>
                <option value="6030">МАТОВЫЙ БЕЛЫЙ</option>
                <option value="6062">МАТОВЫЙ ЧЁРНЫЙ</option>
                <option value="2509">АНТРАЦИТ СЕРЫЙ LG</option>
                <option value="9252">Винчестер Renolit</option>
                <option value="XXXX">XXXX</option>
            </select>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
            <div>
                <span class =' text-center ' style="font-size: small; font-weight: bold; text-transform: uppercase;padding-left:35%" id='code_lamplonka_vnutri`+String(i)+`'></span>
            </div>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1" style="width: 150px;">
        <select class="form-select" aria-label="" style="width: 150px;border-color:red;display:none"   id='kod_svet_rezini`+String(i)+`' onchange="create_kratkiy_tekst(`+String(i)+`)">
            <option  value="" selected ></option>
            <option value="BR" >Чёрная резина</option>
            <option value="GR" >Серая резина</option>
            <option value="NR" >Без резины</option>
        </select>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
            
                <span class =' text-center ' style="font-size:12px; font-weight: 700; text-transform: uppercase; padding:5px" id='svet_rezin`+String(i)+`'></span>
            
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1" id="nakleyka`+String(i)+`">
        <div id='nakleyka_select`+String(i)+`' class='nak_select`+String(i)+`' style='display:none;'>
            <select class ='kod_nakleyki`+String(i)+`'  style='text-transform: uppercase; width: 145px;padding-left:35%' onchange="create_kratkiy_tekst(`+String(i)+`)"></select>
        </div>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
            
                <span class ='text-center ' style="font-size:12px; font-weight: bold; text-transform: uppercase;padding:5px" id='nadpis_nakleyki`+String(i)+`'></span>
            
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
        <select class="form-select" aria-label="" style="width: 150px;border-color:red;display:none"   id='goods_group`+String(i)+`' onchange="create_kratkiy_tekst(`+String(i)+`)">
            <option  value="" selected ></option>
            <option value="QLIK_PVC_PROF" >ПВХ профиль</option>
            <option value="QLIK_PDF" >Подоконник</option>
        </select>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
        <span class =' text-center ' style="font-size: small; font-weight: bold; text-transform: uppercase;" id='tex_name`+String(i)+`'></span>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
        <span class =' text-center ' style="font-size: small; width:250px; font-weight: bold; text-transform: uppercase;" id='kratkiy_tekst`+String(i)+`'></span>
        </div>
    </td>

    <td >
        <div class="input-group input-group-sm mb-1">
       
        <input type='text' class=" form-control " style=" width: 110px; font-size:10px; display:none; height:32px" id='sap_code_ruchnoy`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
    
        </div>
    </td> 
    <td >
        <div class="input-group input-group-sm mb-1">
        <input type='text' class=" form-control " style=" width: 220px; font-size:10px; display:none; height:32px"  id='kratkiy_tekst_ruchnoy`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
        </div>
    </td>
    
    <td >
        <div class="input-group input-group-sm mb-1">
       <textarea   rows='1' class=" form-control " style="width: 220px; font-size:10px;display:none;height:32px" id='comment`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></textarea >
       </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
        <input type='text' class=" form-control " style=" width: 220px; font-size:10px; display:none; height:32px; border-color:red"  id='sena`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
        </div>
    </td>
    <td >
        <div class="input-group input-group-sm mb-1">
        <input type='text' class=" form-control " style=" width: 220px; font-size:10px; display:none; height:32px; border-color:red"  id='klaes_id`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
        </div>
    </td>
   `
  }



var table = $('#table-artikul')

table.append(text)




for (let i = 1; i <= 10; i++) {
    $('#artikul'+String(i)).select2({
        ajax: {
            url: "/client/pvc-artikul-list",
            dataType: 'json',
            processResults: function(data){
                return {results: $.map(data, function(item){
                    return {id:item.id,text:item.artikul,component:item.component2,system:item.nazvaniye_sistem,camera:item.camera,kod_k_component:item.kod_k_component,iskyucheniye:item.iskyucheniye}
                })
            };
            }
        }
        });
    
    
    
    var artikulSelect = $('#artikul'+String(i));
    $.ajax({
        type: 'GET',
        url: "/client/pvc-artikul-list"
    }).then(function (data) {
        var option = new Option(data.artikul, data.id, true, true);
        artikulSelect.append(option).trigger('change');
    
        artikulSelect.trigger({
            type: 'select2:select',
            params: {
                data: data
            }
        });
    });
    
    
    $("#artikul"+String(i)).on("select2:select", function (e) { 
        var select_val = $(e.currentTarget).val();
        var nazvaniye_system =$('#nazvaniye_system'+String(i));
        var camera = $('#camera'+String(i));
        var kod_komponent = $('#kod_komponent'+String(i));
        var artikul_pvc = $('#artikul_pvc'+String(i));
        var iskyucheniye = $('#iskyucheniye'+String(i));
        var tip_pokritiya = $('#tip_pokritiya'+String(i));
        tip_pokritiya.attr("disabled",false);
        nazvaniye_system.text(e.params.data.system);
        artikul_pvc.text(e.params.data.component);
        iskyucheniye.text(e.params.data.iskyucheniye);
        camera.text(e.params.data.camera)
        kod_komponent.text(e.params.data.kod_k_component)
        
       
        var nakleyka_select = $('#nakleyka_select'+String(i));

        var length = $('#length'+String(i));
        length.attr('required',true)
        nakleyka_select.css('display','block')
        nakleyka_select.attr('required',true)
        get_nakleyka(String(i))
        
    });

}



data_base = {}


function get_nakleyka(i){
    $('.kod_nakleyki'+i).select2({
        ajax: {
            url: "/client/nakleyka-list-pvc",
            dataType: 'json',
            processResults: function(data){
                return {results: $.map(data, function(item){
                    return {id:item.name,text:item.nadpis,nadpis:item.name}
                })
            };
            }
        }
        });
        $(".kod_nakleyki"+String(i)).on("select2:select", function (e) { 
            var nadpis_nakleyki = $('#nadpis_nakleyki'+String(i));
            nadpis_nakleyki.text(e.params.data.nadpis);
            
            })
}





function artukil_clear(id){
    $('#artikul'+id).val(null).trigger('change');
    clear_artikul(id)
}



function clear_artikul(id){
    var table_tr =$('#table_tr'+id);
    $('#nazvaniye_system'+id).text('');
    var tip_pokritiya = $('#tip_pokritiya'+String(id));
    tip_pokritiya.val('0').change();
    tip_pokritiya.attr("disabled",true);
    var camera = $('#camera'+String(id));
    var kod_komponent = $('#kod_komponent'+String(id));
    var nazvaniye_svet_zames = $('#nazvaniye_svet_zames'+String(id));
    var kod_svet_zames = $('#kod_svet_zames'+String(id));
    var kod_svet_rezini = $('#kod_svet_rezini'+String(id));
    var svet_rezini = $('#svet_rezin'+String(id));
    var nakleyka_select = $('.kod_nakleyki'+String(id))
    nakleyka_select.val(null).trigger('change');
    var nakleyka_select_org = document.getElementById('nakleyka_select'+String(id))
    nakleyka_select_org.style.display='none';

    camera.text('')
    kod_komponent.text('')
    svet_rezini.text('')
    kod_svet_zames.text('')
    kod_svet_zames.attr('disabled',true)
    kod_svet_zames.css('border-color','#dedad9')
    
    nazvaniye_svet_zames.val('')
    kod_svet_rezini.val('')
    kod_svet_rezini.css('display','none')
       
    // var select_nakleyka = $('#nakleyka'+String(id));
    // select_nakleyka.children("span").remove();
    // select_nakleyka.children("select").remove();
    delete data_base[id]

    var kratkiy_tekst = document.getElementById('kratkiy_tekst'+String(id));
    kratkiy_tekst.innerText="";


    
    
    table_tr.css('background-color','white')
    




    
    var sena =$('#sena'+String(id));
    sena.val('');
    sena.css('display','none');
    var klaes_id =$('#klaes_id'+String(id));
    klaes_id.val('');
    klaes_id.css('display','none');

    var sap_code_ruchnoy =$('#sap_code_ruchnoy'+String(id));
    sap_code_ruchnoy.val('');
    sap_code_ruchnoy.css('display','none');
    var kratkiy_tekst_ruchnoy =$('#kratkiy_tekst_ruchnoy'+String(id));
    kratkiy_tekst_ruchnoy.val('');
    kratkiy_tekst_ruchnoy.css('display','none');
    var comment =$('#comment'+String(id));
    comment.val('');
    comment.css('display','none');
    var goods_group =$('#goods_group'+String(id));
    goods_group.val('');
    goods_group.css('display','none');
    var tex_name =$('#tex_name'+String(id));
    tex_name.text('');
    tex_name.css('display','none');


    var dlina =$('#length'+String(id));
    dlina.val('');
    dlina.attr("disabled",true);
    dlina.css("border-color",'#dedad9');

    var combination= $('#combination'+String(id));
    combination.text("");

    var svet_lamplonka_snaruji = $('#svet_lamplonka_snaruji'+String(id));
    svet_lamplonka_snaruji.val('0').change();
    svet_lamplonka_snaruji.attr("disabled",true);
    svet_lamplonka_snaruji.css("border-color",'#dedad9');
    var code_lamplonka_snaruji = $('#code_lamplonka_snaruji'+String(id));
    code_lamplonka_snaruji.text("")
    

    var svet_lamplonka_vnutri = $('#svet_lamplonka_vnutri'+String(id));
    svet_lamplonka_vnutri.val('0').change();
    svet_lamplonka_vnutri.attr("disabled",true);
    svet_lamplonka_vnutri.css("border-color",'#dedad9');
    var code_lamplonka_vnutri = $('#code_lamplonka_vnutri'+String(id));
    code_lamplonka_vnutri.text("")

   
   
   
    
}



function tip_pokritiya_selected(id,val){

    var element33 = document.getElementById("table_tr"+id);
    element33.style.backgroundColor='white';
    

    var dlina =$('#length'+String(id));
    dlina.attr("disabled",false);
    dlina.css("border-color",'#fc2003');

    var sap_code_ruchnoy =$('#sap_code_ruchnoy'+String(id));
    sap_code_ruchnoy.css('display','block');
    sap_code_ruchnoy.val('');
    var kratkiy_tekst_ruchnoy =$('#kratkiy_tekst_ruchnoy'+String(id));
    kratkiy_tekst_ruchnoy.css('display','block');
    kratkiy_tekst_ruchnoy.val('');
    var comment =$('#comment'+String(id));
    comment.css('display','block');;
    comment.val('');
    var sena =$('#sena'+String(id));
    sena.css('display','block');;
    sena.val('');
    var klaes_id =$('#klaes_id'+String(id));
    klaes_id.css('display','block');;
    klaes_id.val('');

    
   
    var kratkiy_tekst = $('#kratkiy_tekst'+String(id));
    kratkiy_tekst.text("");


    
  

    var nadpis_nakleyki = $('#nadpis_nakleyki'+String(id));
    nadpis_nakleyki.text('');
    var svet_lamplonka_snaruji = $('#svet_lamplonka_snaruji'+String(id));
    svet_lamplonka_snaruji.val('0').change();
    svet_lamplonka_snaruji.attr("disabled",true);
    svet_lamplonka_snaruji.css("border-color",'#dedad9');
    var code_lamplonka_snaruji = $('#code_lamplonka_snaruji'+String(id));
    code_lamplonka_snaruji.text("")
    code_lamplonka_snaruji.css("border-color",'#dedad9');

    var svet_lamplonka_vnutri = $('#svet_lamplonka_vnutri'+String(id));
    svet_lamplonka_vnutri.val('0').change();
    svet_lamplonka_vnutri.attr("disabled",true);
    svet_lamplonka_vnutri.css("border-color",'#dedad9');
    var code_lamplonka_vnutri = $('#code_lamplonka_vnutri'+String(id));
    code_lamplonka_vnutri.text("")
    code_lamplonka_vnutri.css("border-color",'#dedad9');

    

    var nakleyka_select = $('#nakleyka_select'+String(id));
    nakleyka_select.css('display','block');
    get_nakleyka(id)

    
    var iskyucheniye =$('#iskyucheniye'+id).text()
    
    if(String(val) == '1'){
        var goods_group = $('#goods_group'+String(id));
        goods_group.val('')
        goods_group.css('display','block');
        var tex_name = $('#tex_name'+String(id));
        tex_name.val('')
        tex_name.css('display','block');

        var nazvaniye_svet_zames = $('#nazvaniye_svet_zames'+String(id));
        nazvaniye_svet_zames.attr("disabled",false);
        nazvaniye_svet_zames.css("border-color",'#fc2003');
        data_base[id] = new BasePokritiya()
        data_base[id].id = 1;
        data_base[id].tip_pokritiya = 'Неламинированный';
        var artikul_pvc = $('#artikul_pvc'+String(id));
        data_base[id].artikul= artikul_pvc.text()

        var kod_svet_rezini = $('#kod_svet_rezini'+String(id));
        kod_svet_rezini.val('')
        kod_svet_rezini.css('display','block');
        var goods_group = $('#goods_group'+String(id));
        goods_group.val('')
        goods_group.css('display','block');

        const spanss =document.querySelector('.nak_select' +id+ ' .select2-container .select2-selection--single')
        spanss.style.borderColor='red';
        
        if(iskyucheniye =='1'){
            data_base[id].is_iklyuch=true
            kod_svet_rezini.css('display','none')
            kod_svet_rezini.css('border-color','#dedad9')
        }else{
            data_base[id].is_iklyuch=false
        }
        
    }else if(String(val) == '2'){
        
        data_base[id] = new BasePokritiya()
        data_base[id].id = 2;
        data_base[id].tip_pokritiya = 'Ламинированный';
        var artikul_pvc = $('#artikul_pvc'+String(id));
        data_base[id].artikul= artikul_pvc.text()

        
        var goods_group = $('#goods_group'+String(id));
        goods_group.val('')
        goods_group.css('display','block');
        var tex_name = $('#tex_name'+String(id));
        tex_name.val('')
        tex_name.css('display','block');

        var nazvaniye_svet_zames = $('#nazvaniye_svet_zames'+String(id));
        nazvaniye_svet_zames.attr("disabled",false);
        nazvaniye_svet_zames.css("border-color",'#fc2003');
        const spanss =document.querySelector('.nak_select' +id+ ' .select2-container .select2-selection--single')
        spanss.style.borderColor='red';

        var kod_svet_rezini = $('#kod_svet_rezini'+String(id));
        kod_svet_rezini.val('')
        

        var svet_lamplonka_snaruji = $('#svet_lamplonka_snaruji'+String(id));
        svet_lamplonka_snaruji.attr("disabled",false);
        svet_lamplonka_snaruji.attr("required",true);
        svet_lamplonka_snaruji.css("border-color",'#fc2003');
        var svet_lamplonka_vnutri = $('#svet_lamplonka_vnutri'+String(id));
        svet_lamplonka_vnutri.attr("disabled",false);
        svet_lamplonka_vnutri.attr("required",true);
        svet_lamplonka_vnutri.css("border-color",'#fc2003');

        if(iskyucheniye =='1'){
            data_base[id].is_iklyuch=true
            kod_svet_rezini.css('display','none')
        }else{
            data_base[id].is_iklyuch=false
            kod_svet_rezini.css('display','block');
        }
    }

    if(String(val) != ''){
        var base_artikul =$('#select2-artikul'+id+'-container')
        data_base[id].base_artikul = base_artikul.text()
        var nazvaniye_system = $('#nazvaniye_system'+id).text()
        var camera =$('#camera'+id).text()
        var kod_komponent =$('#kod_komponent'+id).text()
        data_base[id].nazvaniye_system = nazvaniye_system;
        data_base[id].camera = camera;
        data_base[id].kod_k_component = kod_komponent;
    }
    
    
    create_kratkiy_tekst(id);
}



function svet_lamplonka_snaruji_selected(id,val){
    var code_lamplonka_snaruji = $('#code_lamplonka_snaruji'+String(id));
    code_lamplonka_snaruji.text(String(val))
    
    var svet_lamplonka_snaruji = document.getElementById('svet_lamplonka_snaruji'+String(id))
    svet_lamplonka_snaruji.style.borderColor='red';
    // data_base[id].kod_lam_sn =NaN;
    create_kratkiy_tekst(id);
    

}
function svet_lamplonka_vnutri_selected(id,val){
    var code_lamplonka_vnutri = $('#code_lamplonka_vnutri'+String(id));
    code_lamplonka_vnutri.text(String(val));
    var svet_lamplonka_vnutri = document.getElementById('svet_lamplonka_vnutri'+String(id))
    svet_lamplonka_vnutri.style.borderColor='red';
    create_kratkiy_tekst(id);
    
}

function nazvaniye_svet_zames_selected(id,val){
    var kod_svet_zames = $('#kod_svet_zames'+String(id));
    kod_svet_zames.text(String(val));
    create_kratkiy_tekst(id);
}





function create_kratkiy_tekst(id){
    
    if(!data_base[id]){
        console.log('salom')
    }else{
    
    var kratkiy_tekst = $('#kratkiy_tekst'+String(id));
    var combination= $('#combination'+String(id));
    combination_text = combination.text();
    var val = $('#tip_pokritiya'+String(id)).val();
    var dlina = $('#length'+String(id));
    var sena = $('#sena'+String(id));
    var klaes_id = $('#klaes_id'+String(id));
    var sap_code_ruchnoy = $('#sap_code_ruchnoy'+String(id));
    var kratkiy_tekst_ruchnoy = $('#kratkiy_tekst_ruchnoy'+String(id));
    var comment = $('#comment'+String(id));

    
    if(comment.val()!=''){
        data_base[id].comment = comment.val();
    }else{
        data_base[id].comment = NaN;
    }
    if(kratkiy_tekst_ruchnoy.val()!=''){
        data_base[id].krat = kratkiy_tekst_ruchnoy.val();
    }else{
        data_base[id].krat = NaN;
    }
    if(sap_code_ruchnoy.val()!=''){
        data_base[id].sap_code = sap_code_ruchnoy.val();
    }else{
        data_base[id].sap_code = NaN;
    }
    if(dlina.val()!=''){
        dlina.css("border-color",'#dedad9');
        data_base[id].dlina = dlina.val();
    }else{
        dlina.css("border-color",'red');
        data_base[id].dlina = NaN;
    }
    if(sena.val()!=''){
        sena.css("border-color",'#dedad9');
        data_base[id].sena = sena.val();
    }else{
        sena.css("border-color",'red');
        data_base[id].sena = NaN;
    }
    if(klaes_id.val()!=''){
        klaes_id.css("border-color",'#dedad9');
        data_base[id].klaes_id = klaes_id.val();
    }else{
        klaes_id.css("border-color",'red');
        data_base[id].klaes_id = NaN;
    }
    
    var nazvaniye_svet_zames = $('#nazvaniye_svet_zames'+String(id));
    if(nazvaniye_svet_zames){
        if(nazvaniye_svet_zames.val()!='0' && nazvaniye_svet_zames.val()!='' && nazvaniye_svet_zames.val()!=null){
            var nazvaniye_svet_zames1 = $('#nazvaniye_svet_zames' +id +' option:selected').text()
            nazvaniye_svet_zames.css("border-color",'#dedad9');
            data_base[id].kod_svet_zames = nazvaniye_svet_zames.val()
            data_base[id].nazvaniye_svet_zames = nazvaniye_svet_zames1
        }else{
            data_base[id].nazvaniye_svet_zames = NaN
            data_base[id].kod_svet_zames = NaN;
            nazvaniye_svet_zames.css("border-color",'red');
        }
    }
    var goods_group = $('#goods_group'+String(id));
    if(goods_group.val()!='0' && goods_group.val()!='' && goods_group.val()!=null){
        goods_group.css("border-color",'#dedad9');
        var goods_group1 = $('#goods_group'+String(id)+' option:selected').text();
        var tex_name = $('#tex_name'+String(id));
        tex_name.text(goods_group.val())
        data_base[id].tex_name = goods_group.val()
        data_base[id].goods_group = goods_group1
    }else{
        data_base[id].tex_name = NaN;
        data_base[id].goods_group = NaN;
        var tex_name = $('#tex_name'+String(id));
        tex_name.text('')
        goods_group.css("border-color",'red');
    }
    
    
    
    var iskyucheniye =$('#iskyucheniye' +id).text()

    if(iskyucheniye =='1'){

        var kod_svet_rezini =$('#kod_svet_rezini' + id);
        if(kod_svet_rezini.val()!=''){
            var svet_rezin =$('#svet_rezin' + id);
            var selectedText = $("#kod_svet_rezini"+id + " option:selected");
            svet_rezin.text(kod_svet_rezini.val())
            kod_svet_rezini.css('border-color','#dedad9')
            data_base[id].kod_svet_rezini =kod_svet_rezini.val();
            data_base[id].svet_rezin =selectedText;
        }else{
            var svet_rezin =$('#svet_rezin' + id);
            svet_rezin.text('')
            data_base[id].svet_rezin = NaN;
            data_base[id].kod_svet_rezini = NaN
        }
        
    }else{
        
        var kod_svet_rezini =$('#kod_svet_rezini' + id);
        if(kod_svet_rezini.val()!=''){
            var svet_rezin =$('#svet_rezin' + id);
            var selectedText = $("#kod_svet_rezini"+id + " option:selected").text();
            svet_rezin.text(kod_svet_rezini.val())
            kod_svet_rezini.css('border-color','#dedad9')
            console.log(kod_svet_rezini.val(),selectedText,'rezzz')
            data_base[id].kod_svet_rezini =kod_svet_rezini.val();
            data_base[id].svet_rezin = selectedText;
        }else{
            var svet_rezin =$('#svet_rezin' + id);
            data_base[id].svet_rezin = NaN;
            svet_rezin.text('')
            kod_svet_rezini.css('border-color','red')
            data_base[id].kod_svet_rezini = NaN
        }
    }


    

    if(String(val) == '1'){

        const spanss = document.querySelector('.nak_select' +id+ ' .select2-container .select2-selection--single')
        var value_nak = document.querySelector('.kod_nakleyki'+String(id))
        var nadpis_nak= $('.kod_nakleyki'+String(id)+' option:selected').text()
        if(value_nak.value !=''){
            spanss.style.borderColor='#dedad9';
            data_base[id].kod_nakleyki = value_nak.value;
            data_base[id].nadpis_nakleyki = nadpis_nak;
            
        }else{
            data_base[id].kod_nakleyki = NaN
            data_base[id].nadpis_nakleyki = NaN;
        }

       
    }
    else if(String(val) == '2'){
       

       const spanss =document.querySelector('.nak_select' +id+ ' .select2-container .select2-selection--single')
       var value_nak= document.querySelector('.kod_nakleyki'+String(id))
       var nadpis_nak= $('.kod_nakleyki'+String(id)+' option:selected').text()
       if(value_nak.value !=''){
            spanss.style.borderColor='#dedad9';
            data_base[id].kod_nakleyki = value_nak.value;
            data_base[id].nadpis_nakleyki = nadpis_nak;
            
        }else{
            spanss.style.borderColor='red';
            data_base[id].kod_nakleyki = NaN
            data_base[id].nadpis_nakleyki = NaN;

        }

        
            
        var code_lamplonka_snaruji = document.getElementById('code_lamplonka_snaruji'+String(id))//.innerText;
        
        if(code_lamplonka_snaruji.innerText !=''){
            var svet_lamplonka_snaruji = document.getElementById('svet_lamplonka_snaruji'+String(id))//.innerText;
            var svet_lamplonka_snaruji1 = $('#svet_lamplonka_snaruji'+String(id)+' option:selected').text()//.innerText;
            svet_lamplonka_snaruji.style.borderColor='#dedad9';
            data_base[id].kod_lam_sn =code_lamplonka_snaruji.innerText;
            data_base[id].svet_lamplonka_snaruji = svet_lamplonka_snaruji1;
        }else{
            data_base[id].kod_lam_sn =NaN;
            data_base[id].svet_lamplonka_snaruji = NaN;
        }
        
        var code_lamplonka_vnutri = document.getElementById('code_lamplonka_vnutri'+String(id));
        

        if(code_lamplonka_vnutri.innerText !=''){
            var svet_lamplonka_vnutri = document.getElementById('svet_lamplonka_vnutri'+String(id))//.innerText;
            var svet_lamplonka_vnutri1 = $('#svet_lamplonka_vnutri'+String(id)+' option:selected').text()//.innerText;
           
            svet_lamplonka_vnutri.style.borderColor='#dedad9';
            data_base[id].kod_lam_vn =code_lamplonka_vnutri.innerText;
            data_base[id].svet_lamplonka_vnutri =svet_lamplonka_vnutri1;
        }else{
            data_base[id].kod_lam_vn =NaN;
            data_base[id].svet_lamplonka_vnutri =NaN;
        }

        
        

    }

    var data =data_base[id].get_kratkiy_tekst()
    
    if(data.accept){
        var table_tr =$('#table_tr'+id);
        table_tr.css('background-color','#2de319')
        data_base[id].full=true
        data_base[id].kratkiy_tekst = data.text
    }else{
        var table_tr =$('#table_tr'+id);
        table_tr.css('background-color','white')
        data_base[id].kratkiy_tekst=NaN
        data_base[id].full=false

    }
    
    kratkiy_tekst.text(data.text)

    }
}

function add_column(){
        
    text =""
    var sizee = Object.keys(data_base).length;
    console.log(sizee)
    var sizeee = $('#table-artikul tr').length;
    
    for (let i = sizeee + 1; i < sizeee+2; i++) {
        text +=`
        <tr id='table_tr` +String(i)+`' >
                                    
        <td >
            <div class="input-group input-group-sm mb-1">
                
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary btn-sm" onclick="create(`+String(i)+`)" id='create_btn`+String(i)+`' >Создание</button>
                <button type="button" class="btn btn-info btn-sm" onclick="activate(`+String(i)+`)" id='activate_btn`+String(i)+`'>Активация</button>
                <button type="button" class="btn btn-warning btn-sm gradient-buttons" onclick="artukil_clear(`+String(i)+`)"  id='clear_btn`+String(i)+`'>Очистить</button>
                </div>
                    
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                <div><span class ='nazvaniye_system` +String(i)+`'style="text-transform: uppercase;" style="font-size: 12px;"></span></div>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                <select class=" form-control basic_artikul" style="background-color:#ddebf7; width: 140px; font-size:10px " disabled id="artikul`+String(i)+`" onchange='clear_artikul(`+String(i)+`)'></select>
            </div>
        </td>
        
        
        <td >
            <div class="input-group input-group-sm mb-1">
                <input type="text" class="form-control " style='width:50px' onkeyup='create_kratkiy_tekst(`+String(i)+`)' disabled aria-describedby="inputGroup-sizing-sm" name ='length`+String(i)+`' id="length`+String(i)+`"  >
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                <select class="form-select" aria-label="" style="width: 165px;text-transform: uppercase; font-size:12px; padding-right:0px;" onchange="tip_pokritiya_selected(`+String(i)+`,this.value)" disabled id='tip_pokritiya`+String(i)+`' required>
                    <option  selected></option>
                    <option value="1" >Неокрашенный</option>
                    <option value="2">Белый</option>
                    <option value="3">Окрашенный</option>
                    <option value="4">Ламинированный</option>
                    <option value="5">Сублимированный</option>
                    <option value="6">Анодированный</option>
                  </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1" style="width: 60px;">
           
            <select class="form-select" aria-label="" style="width: 50px;"  disabled id='splav`+String(i)+`' onchange="create_kratkiy_tekst(`+String(i)+`)">
                <option  value="" selected ></option>
                <option value="63" >63</option>
            </select>
            
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1"  style="width: 60px;">
            <select class="form-select" aria-label="" style="width: 50px;!important"  disabled id='tip_zakalyonnosti`+String(i)+`'  onchange="create_kratkiy_tekst(`+String(i)+`)">
                <option  value="" selected></option>
                <option value="T4" >T4</option>
                <option value="T6" >T6</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1" style="font-size: small; text-transform: uppercase; width:130px">
                <div>
                    <span class =' text-center pl-1' style="font-size: small; text-transform: uppercase;" id ='combination` +String(i)+`'></span>
                </div>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1" >
            <div>
                <span class =' text-center' style="font-size: small;font-weight: bold; text-transform: uppercase;" id ='brand_kraski_snaruji` +String(i)+`'></span>
            </div>
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1" style="width: 100px;">
            <div>
                <span class =' text-center' style="font-size: small; font-weight: bold; text-transform: uppercase;width: 100px;" id ='code_kraski_snaruji` +String(i)+`'></span>
            </div>
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1">
            <div>
                <span class =' text-center' style="font-size: small;font-weight: bold; text-transform: uppercase;" id ='brand_kraski_vnutri` +String(i)+`'></span>
            </div>
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1" style="width: 100px;">
            <div>
                <span class =' text-center' style="font-size: small; font-weight: bold; text-transform: uppercase; width:100px" id ='code_kraski_vnutri` +String(i)+`'></span>
            </div>
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1">    
            <select class="form-select" aria-label="" style="width: 75px;" onchange="svet_dekplonka_snaruji_selected(`+String(i)+`,this.value)"  id='svet_dekplonka_snaruji`+String(i)+`' disabled>
                <option  value="" selected></option>
                <option value="Золотой Дуб 7777" >7777</option>
                <option value="Махагон 3701">3701</option>
                <option value="3D 3702">3702</option>
                <option value="Дуб мокко">8888</option>
                <option value="Шеф. сер. дуб">9999</option>
                <option value="XXXX">XXXX</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                <div>
                <em><span class =' text-center ' style="font-size: 10px;  font-weight: bold; text-transform: uppercase;" id ='code_dekplonka_snaruji` +String(i)+`' disabled ></span></em>
                </div>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1"  >    
            <select class="form-select" aria-label="" style="width: 75px;" onchange="svet_dekplonka_vnutri_selected(`+String(i)+`,this.value)"  id='svet_dekplonka_vnutri`+String(i)+`' disabled>
                <option  value="" selected></option>
                <option value="Золотой Дуб 7777" >7777</option>
                <option value="Махагон 3701">3701</option>
                <option value="3D 3702">3702</option>
                <option value="Дуб мокко">8888</option>
                <option value="Шеф. сер. дуб">9999</option>
                <option value="XXXX">XXXX</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                <div>
                <em><span class =' text-center ' style="font-size: 10px;  font-weight: bold; text-transform: uppercase;" id ='code_dekplonka_vnutri` +String(i)+`' disabled></span></em>
                </div>
            </div>
        </td>
    
        
    
        <td >
            <div class="input-group input-group-sm mb-1">    
            <select class="form-select" aria-label="" style="width: 220px;" onchange="svet_lamplonka_snaruji_selected(`+String(i)+`,this.value)" disabled id='svet_lamplonka_snaruji`+String(i)+`'>
                <option  value="" selected></option>
                <option value="2036" >Золотой дуб</option>
                <option value="2048">Дуб мокко</option>
                <option value="2007">Красный орех</option>
                <option value="2012">Орех</option>
                <option value="3086">Шеффелдский дуб серый</option>
                <option value="1012">Алюкс антрацит</option>
                <option value="3001">Терновый дуб</option>
                <option value="3002">Шеф Альпийский дуб</option>
                <option value="3003">Гранитовый шеф дуб</option>
                <option value="3042">Дерево бальза</option>
                <option value="3062">Грецкий орех</option>
                <option value="3043">Вишня амаретто</option>
                <option value="3059">Орех терра</option>
                <option value="3058">Грецкий орех амаретто</option>
                <option value="3077">Винчестер</option>
                <option value="3081">Шеффелдский дуб светлый</option>
                <option value="3094">Орех Ребраун</option>
                <option value="1004">Метбраш платин</option>
                <option value="1005">Метбраш серый кварц</option>
                <option value="1006">Метбраш серый антрацит</option>
                <option value="XXXX">XXXX</option>
            </select>
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1">
                <div>
                    <span class =' text-center ' style="font-size: small; font-weight: bold; text-transform: uppercase;padding-left:35%;" id ='code_lamplonka_snaruji` +String(i)+`'></span>
                </div>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                <select class="form-select" aria-label="" style="width: 220px;" onchange="svet_lamplonka_vnutri_selected(`+String(i)+`,this.value)" disabled id='svet_lamplonka_vnutri`+String(i)+`'>
                    <option  value="" selected></option>
                    <option value="2036" >Золотой дуб</option>
                <option value="2048">Дуб мокко</option>
                <option value="2007">Красный орех</option>
                <option value="2012">Орех</option>
                <option value="3086">Шеффелдский дуб серый</option>
                <option value="1012">Алюкс антрацит</option>
                <option value="3001">Терновый дуб</option>
                <option value="3002">Шеф Альпийский дуб</option>
                <option value="3003">Гранитовый шеф дуб</option>
                <option value="3042">Дерево бальза</option>
                <option value="3062">Грецкий орех</option>
                <option value="3043">Вишня амаретто</option>
                <option value="3059">Орех терра</option>
                <option value="3058">Грецкий орех амаретто</option>
                <option value="3077">Винчестер</option>
                <option value="3081">Шеффелдский дуб светлый</option>
                <option value="3094">Орех Ребраун</option>
                <option value="1004">Метбраш платин</option>
                <option value="1005">Метбраш серый кварц</option>
                <option value="1006">Метбраш серый антрацит</option>
                <option value="XXXX">XXXX</option>
                </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                <div>
                    <span class =' text-center ' style="font-size: small; font-weight: bold; text-transform: uppercase;padding-left:35%" id='code_lamplonka_vnutri`+String(i)+`'></span>
                </div>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1" >
            <div id='anod`+String(i)+`' class='anood'  ></div>            
            </div>
        </td> 
        <td >
            <div class="input-group input-group-sm mb-1" style="width: 60px;">
            <div id='anod_vnutr`+String(i)+`' class='anood' ></div>            
            </div>
            </div>
        </td> 
        <td >
            <div class="input-group input-group-sm mb-1" style="width: 60px;">
            <select class="form-select" aria-label=""   disabled id='contactnost_anodirovki`+String(i)+`'  onchange="create_kratkiy_tekst(`+String(i)+`)">
                <option  value=""></option>
                <option value="YC" >YC</option>
                <option value="NC">NC</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <div>
                <span class =' text-center ' style="font-size: small; font-weight: bold; text-transform: uppercase;" id='tip_anodirovki`+String(i)+`'></span>
            </div>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <div>
                <span class =' text-center ' style="font-size: small; width:250px; font-weight: bold; text-transform: uppercase;" id='sposob_anodirovki`+String(i)+`'></span>
            </div>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1" id="nakleyka`+String(i)+`">
            <span id='nakleyka_nt`+String(i)+`' style='display:none;padding-left:35%'>NT1</span>
            <span id='nakleyka_org`+String(i)+`' style='display:none;padding-left:35%'></span>
            <div id='nakleyka_select`+String(i)+`' style='display:none;padding-left:35%'>
                <select class ='kod_nakleyki`+String(i)+`'  style='text-transform: uppercase; width: 70px;padding-left:35%' onchange="create_kratkiy_tekst(`+String(i)+`)"></select>
            </div>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1">
                
            </div>
        </td> 
        <td >
            <div class="input-group input-group-sm mb-1">
            <span class =' text-center ' style="font-size: small; width:250px; font-weight: bold; text-transform: uppercase;" id='kratkiy_tekst`+String(i)+`'></span>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
           
            <input type='text' class=" form-control " style=" width: 110px; font-size:10px; display:none; " id='sap_code_ruchnoy`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
        
            </div>
        </td> 
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style=" width: 220px; font-size:10px; display:none; "  id='kratkiy_tekst_ruchnoy`+String(i)+`' onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        
        <td >
            <div class="input-group input-group-sm mb-1">
               
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 90px;text-transform: uppercase; font-size:12px; padding-right:0px; display:none;border-color:red;" onchange="create_kratkiy_tekst(`+String(i)+`)"  id='zavod`+String(i)+`' required>
                <option  selected></option>
                <option value="ZAVOD ALUMIN NAVOIY" >Benkam</option>
                <option value="ZAVOD ALUMIN">Jomiy</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 75px; font-size:10px; display:none;" id='online_savdo_id`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <textarea   rows='1' class=" form-control " style="border-color:red; width: 220px; font-size:10px; display:none; " id='nazvaniye_ruchnoy`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></textarea >
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 110px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;"  id='svet_product`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
            <option  selected></option>
            <option   value="LAM">LAM</option>
            <option   value="Anod">Anod</option>
            <option   value="COLOUR">COLOUR</option>
            <option   value="VAKUM &amp; 3D">VAKUM &amp; 3D</option>
            <option   value="WHITE">WHITE</option>
            <option   value="Без цвета">Без цвета</option>
          </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 230px;text-transform: uppercase; font-size:12px; padding-right:0px;  border-color:red;display:none;" id='group_zakup`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
            <option  selected></option>
            <option value="Kabina">Kabina</option>
            <option value="Alumin WHITE (B.N)">Alumin WHITE (B.N)</option>
            <option value="Aksessuar Import (SAP)">Aksessuar Import (SAP)</option>
            <option value="Alumin VAKUM (B.N)">Alumin VAKUM (B.N)</option>
            <option value="Metal">Metal</option>
            <option value="Aksessuar UZ Tapoich">Aksessuar UZ Tapoich</option>
            <option value="Alumin COLOUR (Navoiy)">Alumin COLOUR (Navoiy)</option>
            <option value="Alumin VAKUM (Navoiy)">Alumin VAKUM (Navoiy)</option>
            <option value="Alumin WHITE (Navoiy)">Alumin WHITE (Navoiy)</option>
            <option value="Alumin Anod (Navoiy)">Alumin Anod (Navoiy)</option>
            <option value="PVX OQ (Navoiy)">PVX OQ (Navoiy)</option>
            <option value="Butilchita">Butilchita</option>
            <option value="Aksessuar Rezina">Aksessuar Rezina</option>
            <option value="Radiator">Radiator</option>
            <option value="Aksessuar UZ">Aksessuar UZ</option>
            <option value="Alucobond">Alucobond</option>
            <option value="VITYAJNOYE USTROYSTVA">VITYAJNOYE USTROYSTVA</option>
            <option value="Aksessuar Import">Aksessuar Import</option>
            <option value="Radiator (IMPORT)">Radiator (IMPORT)</option>
            <option value="Radiator SAP (IMPORT)">Radiator SAP (IMPORT)</option>
            <option value="PVX LAM (Navoiy)">PVX LAM (Navoiy)</option>
            <option value="Rezina Tpv">Rezina Tpv</option>
            <option value="Granula">Granula</option>
            <option value="Granit">Granit</option>
            <option value="Setka">Setka</option>
            <option value="Kraska">Kraska</option>
            <option value="Gazoblok">Gazoblok</option>
            <option value="Paket">Paket</option>
            <option value="Alumin Lam">Alumin Lam</option>
            <option value="Alumin COLOUR">Alumin COLOUR</option>
            <option value="Alumin VAKUM">Alumin VAKUM</option>
            <option value="Alumin WHITE">Alumin WHITE</option>
            <option value="Radiator (Panel) AKFA (UZ)">Radiator (Panel) AKFA (UZ)</option>
            <option value="Radiator (Panel) ROYAL (UZ)">Radiator (Panel) ROYAL (UZ)</option>
            <option value="Radiator (Panel) Lider Line (UZ)" >Radiator (Panel) Lider Line (UZ)"</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1" id='group`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)'>
            <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;"  id='tipr`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)'required>
                <option  selected></option>
                <option value="Сырье">Сырье</option>
                <option value="Готовый продукт">Готовый продукт</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;"  id='tip`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)'required>
                <option  selected></option>
                <option value="Сырье">Сырье</option>
                <option value="Готовый продукт">Готовый продукт</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 145px;text-transform: uppercase; font-size:12px; padding-right:0px; display:none;" id='segment`+String(i)+`' required>
                <option  selected></option>
                <option value="Aldoks">Aldoks</option>
                <option value="Стандарт">Стандарт</option>
                <option value="Премиум">Премиум</option>
                <option value="Аксессуар">Аксессуар</option>
                <option value="Falcon">Falcon</option>
                <option value="Mebel">Mebel</option>
                <option value="RETPEN 8-10%">RETPEN 8-10%</option>
                <option value="RETPEN 10-12%">RETPEN 10-12%</option>
                <option value="RETPEN 17%">RETPEN 17%</option>
                <option value="Аксессуар 2">Аксессуар 2</option>
                <option value="Podokonnik EKO">Podokonnik EKO</option>
                <option value="Alumin arzon">Alumin arzon</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 520px;text-transform: uppercase; font-size:12px; padding-right:0px; display:none;" id='buxgalter_tovar`+String(i)+`' required>
                <option  selected></option>
                <option value='Профиль из ПВХ ламинированный'>Профиль из ПВХ ламинированный</option>
                <option value='Otvetka 153 (oq)'>Otvetka 153 (oq)</option>
                <option value='Ламбри из ПВХ'>Ламбри из ПВХ</option>
                <option value='Soedinitel OP.40.J05 L=10mm'>Soedinitel OP.40.J05 L=10mm</option>
                <option value='Soedinitel CL.X.W 14 (5mm)'>Soedinitel CL.X.W 14 (5mm)</option>
                <option value='BKT 78 Soed. (M11427-15.8mm)'>BKT 78 Soed. (M11427-15.8mm)</option>
                <option value='Soedinitel CL.X.W 14 (38mm)'>Soedinitel CL.X.W 14 (38mm)</option>
                <option value='BKT 70 Soed. W 02 (1=7.8)'>BKT 70 Soed. W 02 (1=7.8)</option>
                <option value='Otvetka 155 (rangli)'>Otvetka 155 (rangli)</option>
                <option value='Ruchka Dvernaya Fornaks (28mm) (rangli)'>Ruchka Dvernaya Fornaks (28mm) (rangli)</option>
                <option value='Petlya Dvernaya 2SK MASTER (rangli)'>Petlya Dvernaya 2SK MASTER (rangli)</option>
                <option value='Petlya (rangli)'>Petlya (rangli)</option>
                <option value='Soedinitel Chovush'>Soedinitel Chovush</option>
                <option value='Soedinitel (Bolshoy) CHEMPION'>Soedinitel (Bolshoy) CHEMPION</option>
                <option value='Petlya Dvernaya Chempion (rangli)'>Petlya Dvernaya Chempion (rangli)</option>
                <option value='Soedinitel (Bolshoy) (ALD-2)'>Soedinitel (Bolshoy) (ALD-2)</option>
                <option value='Krishka Podokonnik (ALYUMIN) (oq)'>Krishka Podokonnik (ALYUMIN) (oq)</option>
                <option value='Soedinitel Universal'>Soedinitel Universal</option>
                <option value='Ogranichitel (rangli)'>Ogranichitel (rangli)</option>
                <option value='Otvetka Mini 153 (rangli)'>Otvetka Mini 153 (rangli)</option>
                <option value='Ruchka Elegant (rangli)'>Ruchka Elegant (rangli)</option>
                <option value='Ruchka LUX Fortuna O (rangli)'>Ruchka LUX Fortuna O (rangli)</option>
                <option value='Petlya 100 mm (rangli)'>Petlya 100 mm (rangli)</option>
                <option value='Ruchka dvernaya "BELLA" (700) mm (rangli)'>Ruchka dvernaya "BELLA" (700) mm (rangli)</option>
                <option value='Soedinitel CL.X.W 34 (43mm)'>Soedinitel CL.X.W 34 (43mm)</option>
                <option value='Ruchka dvernaya "BELLA" (500) mm (oq)'>Ruchka dvernaya "BELLA" (500) mm (oq)</option>
                <option value='Ruchka dvernaya "BELLA" (600) mm (rangli)'>Ruchka dvernaya "BELLA" (600) mm (rangli)</option>
                <option value='Ruchka LUX Fortuna O (oq)'>Ruchka LUX Fortuna O (oq)</option>
                <option value='Otvetka Mini 155 (oq)'>Otvetka Mini 155 (oq)</option>
                <option value='Soedinitel CL.X.W 10 (25.8mm)'>Soedinitel CL.X.W 10 (25.8mm)</option>
                <option value='Termo soedinitel 19 mm'>Termo soedinitel 19 mm</option>
                <option value='Petlya 100 mm (oq)'>Petlya 100 mm (oq)</option>
                <option value='Petlya (ALD-2) (oq)'>Petlya (ALD-2) (oq)</option>
                <option value='Otvetnaya chast zamka A0275-K (155) (rangli)'>Otvetnaya chast zamka A0275-K (155) (rangli)</option>
                <option value='Petlya (ALD-2) (rangli)'>Petlya (ALD-2) (rangli)</option>
                <option value='Petlya Dvernaya 3SK MASTER (rangli)'>Petlya Dvernaya 3SK MASTER (rangli)</option>
                <option value='Petlya Dvernaya Alyumin (rangli)'>Petlya Dvernaya Alyumin (rangli)</option>
                <option value='Ruchka Kvadrat (rangli)'>Ruchka Kvadrat (rangli)</option>
                <option value='Chit-Chit PVH.uz (rangli)'>Chit-Chit PVH.uz (rangli)</option>
                <option value='Otvetka 153 (rangli)'>Otvetka 153 (rangli)</option>
                <option value='Ruchka LUX Fortuna Mini O (rangli)'>Ruchka LUX Fortuna Mini O (rangli)</option>
                <option value='Zashyolka Narujnyaya (rangli)'>Zashyolka Narujnyaya (rangli)</option>
                <option value='Shpingalet (rangli)'>Shpingalet (rangli)</option>
                <option value='Ruchka DELFIN (rangli)'>Ruchka DELFIN (rangli)</option>
                <option value='Otvetka Mini 155 (rangli)'>Otvetka Mini 155 (rangli)</option>
                <option value='Otvetnaya chast zamka A0275-K (153) (rangli)'>Otvetnaya chast zamka A0275-K (153) (rangli)</option>
                <option value='BKT 70 Soed. Impost (J01-52.5mm)'>BKT 70 Soed. Impost (J01-52.5mm)</option>
                <option value='BKT 70 Soed. Impost (J01-66.5mm)'>BKT 70 Soed. Impost (J01-66.5mm)</option>
                <option value='BKT 70 Soed. Impost (J02-13.6mm)'>BKT 70 Soed. Impost (J02-13.6mm)</option>
                <option value='BKT 70 Soed. Impost (J02-43.6mm)'>BKT 70 Soed. Impost (J02-43.6mm)</option>
                <option value='BKT 70 Soed. Impost (J03-66.6mm)'>BKT 70 Soed. Impost (J03-66.6mm)</option>
                <option value='BKT 70 Soed. Impost (J06-43.6mm)'>BKT 70 Soed. Impost (J06-43.6mm)</option>
                <option value='BKT 70 Soed. Impost (J06-66.5mm)'>BKT 70 Soed. Impost (J06-66.5mm)</option>
                <option value='BKT 70 Soed. W 01 (1=21.7)'>BKT 70 Soed. W 01 (1=21.7)</option>
                <option value='BKT 70 Soed. W 01 (1=5.1)'>BKT 70 Soed. W 01 (1=5.1)</option>
                <option value='BKT 70 Soed. W 01 (1=8.5)'>BKT 70 Soed. W 01 (1=8.5)</option>
                <option value='Krishka Podokonnik (ALYUMIN) (rangli)'>Krishka Podokonnik (ALYUMIN) (rangli)</option>
                <option value='Kreplenie moskitnoy setki (rangli)'>Kreplenie moskitnoy setki (rangli)</option>
                <option value='BKT 70 Soed. W 01 (1=8)'>BKT 70 Soed. W 01 (1=8)</option>
                <option value='BKT 78 Soed. (M11427-19.5mm)'>BKT 78 Soed. (M11427-19.5mm)</option>
                <option value='Kreplenie moskitnoy setki (oq)'>Kreplenie moskitnoy setki (oq)</option>
                <option value='BKT 78 Soed. (M11427-27mm)'>BKT 78 Soed. (M11427-27mm)</option>
                <option value='Ruchka LUX Pol (oq)'>Ruchka LUX Pol (oq)</option>
                <option value='Ruchka Sos. VENTURO (oq)'>Ruchka Sos. VENTURO (oq)</option>
                <option value='Montajnaya Planka 5200 (Metal)'>Montajnaya Planka 5200 (Metal)</option>
                <option value='Ламинированный термоуплотненный алюминиевый профиль'>Ламинированный термоуплотненный алюминиевый профиль</option>
                <option value='Термоуплотненный анодированный алюминиевый профиль (N)'>Термоуплотненный анодированный алюминиевый профиль (N)</option>
                <option value='Профиль из ПВХ с уплотнителем'>Профиль из ПВХ с уплотнителем</option>
                <option value='Алюминиевый профиль с декоративным покрытием'>Алюминиевый профиль с декоративным покрытием</option>
                <option value='Подоконник из ПВХ'>Подоконник из ПВХ</option>
                <option value='Дистанционная рамка'>Дистанционная рамка</option>
                <option value='Профиль из ПВХ ламинированный (Engelberg)'>Профиль из ПВХ ламинированный (Engelberg)</option>
                <option value='Профиль из ПВХ ламинированный с уплотнителем'>Профиль из ПВХ ламинированный с уплотнителем</option>
                <option value='Ламинированный алюминиевый профиль'>Ламинированный алюминиевый профиль</option>
                <option value='Неокрашенный алюминиевый профиль'>Неокрашенный алюминиевый профиль</option>
                <option value='Подоконник из ПВХ ламинированный'>Подоконник из ПВХ ламинированный</option>
                <option value='Уплотнитель для алюминиевых и ПВХ профилей'>Уплотнитель для алюминиевых и ПВХ профилей</option>
                <option value='Профиль из ПВХ'>Профиль из ПВХ</option>
                <option value='Алюминиевый профиль'>Алюминиевый профиль</option>
                <option value='Ламинированный термоуплотненный алюминиевый профиль (N)'>Ламинированный термоуплотненный алюминиевый профиль (N)</option>
                <option value='Металлический усилитель'>Металлический усилитель</option>
                <option value='Ламбри из ПВХ ламинированный'>Ламбри из ПВХ ламинированный</option>
                <option value='Профиль из ПВХ (Engelberg)'>Профиль из ПВХ (Engelberg)</option>
                <option value='Ламинированный алюминиевый профиль (N)'>Ламинированный алюминиевый профиль (N)</option>
                <option value='Алюминиевый профиль с декоративным покрытием (N)'>Алюминиевый профиль с декоративным покрытием (N)</option>
                <option value='Chit-Chit PVH.uz (oq)'>Chit-Chit PVH.uz (oq)</option>
                <option value='BKT 70 Soed. (M11148-13.6mm)'>BKT 70 Soed. (M11148-13.6mm)</option>
                <option value='Ruchka D (oq)'>Ruchka D (oq)</option>
                <option value='Ruchka Kvadrat Mini (oq)'>Ruchka Kvadrat Mini (oq)</option>
                <option value='Ruchka LUX (oq)'>Ruchka LUX (oq)</option>
                <option value='Soedinitel 114 D 400 (13mm)'>Soedinitel 114 D 400 (13mm)</option>
                <option value='Soedinitel 114 D 400 (52mm)'>Soedinitel 114 D 400 (52mm)</option>
                <option value='Petlya Dvernaya Chempion (oq)'>Petlya Dvernaya Chempion (oq)</option>
                <option value='Soedinitel BKH-001 (38mm)'>Soedinitel BKH-001 (38mm)</option>
                <option value='Soedinitel 5507 (6,5mm)'>Soedinitel 5507 (6,5mm)</option>
                <option value='Soedinitel BKH-001 (16mm)'>Soedinitel BKH-001 (16mm)</option>
                <option value='Soedinitel BKH-001 (5mm)'>Soedinitel BKH-001 (5mm)</option>
                <option value='Soedinitel AKF-107 (40mm)'>Soedinitel AKF-107 (40mm)</option>
                <option value='Soedinitel AKF-106 (37.5mm)'>Soedinitel AKF-106 (37.5mm)</option>
                <option value='Vstavka Dlya Zamka (rangli)'>Vstavka Dlya Zamka (rangli)</option>
                <option value='Soedinitel JP2186 (60mm)'>Soedinitel JP2186 (60mm)</option>
                <option value='T 6 Soed. (ST 10 255) C 9.5 Qanot Mal.'>T 6 Soed. (ST 10 255) C 9.5 Qanot Mal.</option>
                <option value='T 6 Soed. (ST 10 366) C 29.0 Qanot Bol.'>T 6 Soed. (ST 10 366) C 29.0 Qanot Bol.</option>
                <option value='T 6 Soed. (ST 10 366) P 27.5 Kosa Bol.'>T 6 Soed. (ST 10 366) P 27.5 Kosa Bol.</option>
                <option value='T 6 Soed. (ST 10 366) P 9.2 Kosa Mal.'>T 6 Soed. (ST 10 366) P 9.2 Kosa Mal.</option>
                <option value='T 6 Soed. (ST 10 565) B 26.0 Balkon Qanot Bol.'>T 6 Soed. (ST 10 565) B 26.0 Balkon Qanot Bol.</option>
                <option value='T 6 Soed. (ST 10 565) B 5.1 Balkon Qanot Mal.'>T 6 Soed. (ST 10 565) B 5.1 Balkon Qanot Mal.</option>
                <option value='Soedinitel AKF-107 (43.5mm)'>Soedinitel AKF-107 (43.5mm)</option>
                <option value='Vstavka Dlya Zamka (oq)'>Vstavka Dlya Zamka (oq)</option>
                <option value='Soedinitel 5505 (45mm)'>Soedinitel 5505 (45mm)</option>
                <option value='Zashyolka Narujnyaya (oq)'>Zashyolka Narujnyaya (oq)</option>
                <option value='Zashyolka Narujnyaya Mini (oq)'>Zashyolka Narujnyaya Mini (oq)</option>
                <option value='Ruchka Dvernaya Fornaks (35mm) (rangli)'>Ruchka Dvernaya Fornaks (35mm) (rangli)</option>
                <option value='Krishka Podokonnik 300 (rangli)'>Krishka Podokonnik 300 (rangli)</option>
                <option value='Ogranichitel PVH (rangli)'>Ogranichitel PVH (rangli)</option>
                <option value='Petlya Dvernaya 3D (rangli)'>Petlya Dvernaya 3D (rangli)</option>
                <option value='Petlya Dvernaya 3D (oq)'>Petlya Dvernaya 3D (oq)</option>
                <option value='Porog Soedinitel 7000 (1kom.) (L;P) (rangli)'>Porog Soedinitel 7000 (1kom.) (L;P) (rangli)</option>
                <option value='Petlya 100 mm (oq)'>Petlya 100 mm (oq)</option>
                <option value='Krishka Shtulp Dlya Adap 7000 (oq)'>Krishka Shtulp Dlya Adap 7000 (oq)</option>
                <option value='Krishka Shtulp Dlya Adap dvernaya 6000 (13 AKS) (rangli)'>Krishka Shtulp Dlya Adap dvernaya 6000 (13 AKS) (rangli)</option>
                <option value='Ruchka Dvernaya Fornaks (28mm) fiksator (rangli)'>Ruchka Dvernaya Fornaks (28mm) fiksator (rangli)</option>
                <option value='Ruchka Dvernaya Fornaks (35mm) fiksator (rangli)'>Ruchka Dvernaya Fornaks (35mm) fiksator (rangli)</option>
                <option value='Chit-Chit (aldocks).uz (rangli)'>Chit-Chit (aldocks).uz (rangli)</option>
                <option value='Ruchka Okonaya Roto (rangli)'>Ruchka Okonaya Roto (rangli)</option>
                <option value='Petlya 75 mm (rangli)'>Petlya 75 mm (rangli)</option>
                <option value='Soedinitel AKF-106 (36.5mm)'>Soedinitel AKF-106 (36.5mm)</option>
                <option value='Soedinitel 114 D 300 (13,2 mm)'>Soedinitel 114 D 300 (13,2 mm)</option>
                <option value='Soedinitel JP2002 (40mm)'>Soedinitel JP2002 (40mm)</option>
                <option value='Ruchka Kvadrat Mini (rangli)'>Ruchka Kvadrat Mini (rangli)</option>
                <option value='Shpingalet (oq)'>Shpingalet (oq)</option>
                <option value='Krishka Shtulp Dlya Adap dvernaya 6000 (13 AKS) (oq)'>Krishka Shtulp Dlya Adap dvernaya 6000 (13 AKS) (oq)</option>
                <option value='Krishka Shtulp Dlya Adap 7000 (rangli)'>Krishka Shtulp Dlya Adap 7000 (rangli)</option>
                <option value='(A0286) Petlya (Chempion) (rangli)'>(A0286) Petlya (Chempion) (rangli)</option>
                <option value='Otvetka 155 (oq)'>Otvetka 155 (oq)</option>
                <option value='(A0286) Petlya (Chempion) (oq)'>(A0286) Petlya (Chempion) (oq)</option>
                <option value='BKT 70 Soed. Impost (J01-66.6mm)'>BKT 70 Soed. Impost (J01-66.6mm)</option>
                <option value='Petlya Dvernaya MDF (oq)'>Petlya Dvernaya MDF (oq)</option>
                <option value='Petlya Dvernaya MDF (rangli)'>Petlya Dvernaya MDF (rangli)</option>
                <option value='Petlya Dvernaya PVH (rangli)'>Petlya Dvernaya PVH (rangli)</option>
                <option value='Soedinitel A 00018 (21mm)'>Soedinitel A 00018 (21mm)</option>
                <option value='Soedinitel CL.X.W 14 (18mm)'>Soedinitel CL.X.W 14 (18mm)</option>
                <option value='Soedinitel CL.X.W 14 (8mm)'>Soedinitel CL.X.W 14 (8mm)</option>
                <option value='Soedinitel CL.X.W 14 (9mm)'>Soedinitel CL.X.W 14 (9mm)</option>
                <option value='Soedinitel WDT 67 J 02 (44mm)'>Soedinitel WDT 67 J 02 (44mm)</option>
                <option value='Soedinitel CL.X.W 34 (25.6mm)'>Soedinitel CL.X.W 34 (25.6mm)</option>
                <option value='Soedinitel CL.X.W 14 (12.5mm)'>Soedinitel CL.X.W 14 (12.5mm)</option>
                <option value='Petlya Dvernaya 3SK MASTER (rangli)'>Petlya Dvernaya 3SK MASTER (rangli)</option>
                <option value='Klipsa 13mm JP'>Klipsa 13mm JP</option>
                <option value='Zaglushka (PVCC 031) (rangli)'>Zaglushka (PVCC 031) (rangli)</option>
                <option value='Zaglushka (PVCC 032) (rangli)'>Zaglushka (PVCC 032) (rangli)</option>
                <option value='Soedinitel CL.X.W 20 (25.8mm)'>Soedinitel CL.X.W 20 (25.8mm)</option>
                <option value='Krishka Podokonnik 350 (Ovolniy) (rangli)'>Krishka Podokonnik 350 (Ovolniy) (rangli)</option>
                <option value='Soedinitel CL.X.W 34 (17,7mm)'>Soedinitel CL.X.W 34 (17,7mm)</option>
                <option value='Soedinitel CL.X.W 34 (10mm)'>Soedinitel CL.X.W 34 (10mm)</option>
                <option value='Ruchka dvernaya "BELLA" (1000) mm (rangli)'>Ruchka dvernaya "BELLA" (1000) mm (rangli)</option>
                <option value='Petlya dvernaya Jocker (rangli)'>Petlya dvernaya Jocker (rangli)</option>
                <option value='Soedinitel CL.X.W 34 (6mm)'>Soedinitel CL.X.W 34 (6mm)</option>
                <option value='Soedinitel CL.X.W 10 (5mm)'>Soedinitel CL.X.W 10 (5mm)</option>
                <option value='Soedinitel CL.X.W 34 (18mm)'>Soedinitel CL.X.W 34 (18mm)</option>
                <option value='Soedinitel CL.X.W 34 (15,8mm)'>Soedinitel CL.X.W 34 (15,8mm)</option>
                <option value='Soedinitel A 00018 (25 mm)'>Soedinitel A 00018 (25 mm)</option>
                <option value='Petlya dvernaya Jocker (oq)'>Petlya dvernaya Jocker (oq)</option>
                <option value='Ruchka Dvernaya mini (rangli)'>Ruchka Dvernaya mini (rangli)</option>
                <option value='Ruchka Dvernaya Fornaks (30mm) (rangli)'>Ruchka Dvernaya Fornaks (30mm) (rangli)</option>
                <option value='Soedinitel WDT 67 J 03 (44mm)'>Soedinitel WDT 67 J 03 (44mm)</option>
                <option value='Soedinitel 114 D 300 (10mm)'>Soedinitel 114 D 300 (10mm)</option>
                <option value='Soedinitel 114 D 400 (14mm)'>Soedinitel 114 D 400 (14mm)</option>
                <option value='Soedinitel CL.X.W 10 (14mm)'>Soedinitel CL.X.W 10 (14mm)</option>
                <option value='Krishka Podokonnik 300 (Trapetsiya) (rangli)'>Krishka Podokonnik 300 (Trapetsiya) (rangli)</option>
                <option value='Soedinitel 148х125хх (60mm)'>Soedinitel 148х125хх (60mm)</option>
                <option value='Soedinitel CL.X.W 16 (10.8mm)'>Soedinitel CL.X.W 16 (10.8mm)</option>
                <option value='Soedinitel FST 50 JR 001 (30mm)'>Soedinitel FST 50 JR 001 (30mm)</option>
                <option value='Soedinitel FST 50 G 003 (100 mm)'>Soedinitel FST 50 G 003 (100 mm)</option>
                <option value='Soedinitel CL.X.W 40 (7.4mm)'>Soedinitel CL.X.W 40 (7.4mm)</option>
                <option value='Soedinitel 8000'>Soedinitel 8000</option>
                <option value='Soedinitel CL.X.W 20 (20,7mm)'>Soedinitel CL.X.W 20 (20,7mm)</option>
                <option value='Soedinitel CL.X.W 20 (20,6mm)'>Soedinitel CL.X.W 20 (20,6mm)</option>
                <option value='Soedinitel OP.40.J04 L=10mm'>Soedinitel OP.40.J04 L=10mm</option>
                <option value='Soedinitel CL.X.W 34 (7,4mm)'>Soedinitel CL.X.W 34 (7,4mm)</option>
                <option value='Ruchka dvernaya "BELLA" (800) mm (rangli)'>Ruchka dvernaya "BELLA" (800) mm (rangli)</option>
                <option value='Soedinitel CL.X.W 40 (5mm)'>Soedinitel CL.X.W 40 (5mm)</option>
                <option value='Ruchka dvernaya "BELLA" (2000) mm (oq)'>Ruchka dvernaya "BELLA" (2000) mm (oq)</option>
                <option value='Ruchka Dvernaya (28mm) Slim fiksator (rangli)'>Ruchka Dvernaya (28mm) Slim fiksator (rangli)</option>
                <option value='Soedinitel CL.X.W 40 (19mm)'>Soedinitel CL.X.W 40 (19mm)</option>
                <option value='Ruchka dvernaya "BELLA" (1800) mm (rangli)'>Ruchka dvernaya "BELLA" (1800) mm (rangli)</option>
                <option value='Soedinitel CLSW 16'>Soedinitel CLSW 16</option>
                <option value='Soedinitel CL.X.W 40 (18.9mm)'>Soedinitel CL.X.W 40 (18.9mm)</option>
                <option value='Soedinitel 148х125хх (90mm)'>Soedinitel 148х125хх (90mm)</option>
                <option value='BKT 70 Soed. List (A10-001)'>BKT 70 Soed. List (A10-001)</option>
                <option value='Soedinitel CL.X.W 40 (19.6mm)'>Soedinitel CL.X.W 40 (19.6mm)</option>
                <option value='Soedinitel AKF-106 (44mm)'>Soedinitel AKF-106 (44mm)</option>
                <option value='Soedinitel AKF-107 (37mm)'>Soedinitel AKF-107 (37mm)</option>
                <option value='Soedinitel 7000 ECO'>Soedinitel 7000 ECO</option>
                <option value='Ruchka dvernaya "Comfort" (oq)'>Ruchka dvernaya "Comfort" (oq)</option>
                <option value='Soedinitel 148х125хх (140mm)'>Soedinitel 148х125хх (140mm)</option>
                <option value='Soedinitel BKH-010 (38mm)'>Soedinitel BKH-010 (38mm)</option>
                <option value='Ruchka Dvernaya (28mm) Slim (rangli)'>Ruchka Dvernaya (28mm) Slim (rangli)</option>
                <option value='Ruchka dvernaya "Comfort" (rangli)'>Ruchka dvernaya "Comfort" (rangli)</option>
                <option value='Soedinitel BKH-010 (56mm)'>Soedinitel BKH-010 (56mm)</option>
                <option value='Soedinitel CLSW 12'>Soedinitel CLSW 12</option>
                <option value='Ruchka dvernaya "BELLA" (1500) mm (rangli)'>Ruchka dvernaya "BELLA" (1500) mm (rangli)</option>
                <option value='Soedinitel FST 50 G 004 (100 mm)'>Soedinitel FST 50 G 004 (100 mm)</option>
                <option value='Ruchka Okonnaya PVH (rangli)'>Ruchka Okonnaya PVH (rangli)</option>
                <option value='Soedinitel 110049 (20mm)'>Soedinitel 110049 (20mm)</option>
                <option value='Soedinitel 110048 (20mm)'>Soedinitel 110048 (20mm)</option>
                <option value='Soedinitel CL.X.W 38 (28.7mm)'>Soedinitel CL.X.W 38 (28.7mm)</option>
                <option value='Soedinitel FST 50 JR 001 (33mm)'>Soedinitel FST 50 JR 001 (33mm)</option>
                <option value='Soedinitel FST 50 JR 001 (97,5mm)'>Soedinitel FST 50 JR 001 (97,5mm)</option>
                <option value='Ruchka Dvernaya (28mm) Slim (oq)'>Ruchka Dvernaya (28mm) Slim (oq)</option>
                <option value='Zaglushka (PVCC 033) (rangli)'>Zaglushka (PVCC 033) (rangli)</option>
                <option value='Zaglushka (PVCC 036) (rangli)'>Zaglushka (PVCC 036) (rangli)</option>
                <option value='Soedinitel moskitnoy setki (rangli)'>Soedinitel moskitnoy setki (rangli)</option>
                <option value='Ruchka dvernaya "BELLA" (700) mm (oq)'>Ruchka dvernaya "BELLA" (700) mm (oq)</option>
                <option value='Soedinitel CL.X.W 14 (43.5mm)'>Soedinitel CL.X.W 14 (43.5mm)</option>
                <option value='Soedinitel A 00018 (44mm)'>Soedinitel A 00018 (44mm)</option>
                <option value='Ruchka Elegant (oq)'>Ruchka Elegant (oq)</option>
                <option value='Krishka Shtulp Dlya Adap 6000 (rangli)'>Krishka Shtulp Dlya Adap 6000 (rangli)</option>
                <option value='Ruchka Dvernaya Fornaks (30mm) fiksator (rangli)'>Ruchka Dvernaya Fornaks (30mm) fiksator (rangli)</option>
                <option value='Krishka Shtulp Dlya Adap 8000 (rangli)'>Krishka Shtulp Dlya Adap 8000 (rangli)</option>
                <option value='Soedinitel CL.X.W 20 (25.6mm)'>Soedinitel CL.X.W 20 (25.6mm)</option>
                <option value='BKT 70 Soed. W 01 (1=5)'>BKT 70 Soed. W 01 (1=5)</option>
                <option value='Soedinitel moskitnoy setki (oq)'>Soedinitel moskitnoy setki (oq)</option>
                <option value='Замок для профиля москитной сетки серии 10х20цветной'>Замок для профиля москитной сетки серии 10х20цветной</option>
                <option value='Замок для профиля москитной сетки серии 10х20'>Замок для профиля москитной сетки серии 10х20</option>
                <option value='Soedinitel CLSW 0243'>Soedinitel CLSW 0243</option>
                <option value='Klipsa 10.5 mm'>Klipsa 10.5 mm</option>
                <option value='BKT 70 Soed. Impost (J01-26.3mm)'>BKT 70 Soed. Impost (J01-26.3mm)</option>
                <option value='BKT 70 Soed. Impost (J02-23.6mm)'>BKT 70 Soed. Impost (J02-23.6mm)</option>
                <option value='BKT 70 Soed. Impost (J06-13.6mm)'>BKT 70 Soed. Impost (J06-13.6mm)</option>
                <option value='BKT 70 Soed. Impost (J06-23.6mm)'>BKT 70 Soed. Impost (J06-23.6mm)</option>
                <option value='BKT 70 Soed. W 01 (1=18.4)'>BKT 70 Soed. W 01 (1=18.4)</option>
                <option value='BKT 70 Soed. W 01 (1=26.3)'>BKT 70 Soed. W 01 (1=26.3)</option>
                <option value='BKT 70 Soed. W 01 (1=26.8)'>BKT 70 Soed. W 01 (1=26.8)</option>
                <option value='BKT 70 Soed. W 01 (1=7.8)'>BKT 70 Soed. W 01 (1=7.8)</option>
                <option value='BKT 78 Soed. (M11227-19.5mm)'>BKT 78 Soed. (M11227-19.5mm)</option>
                <option value='BKT 70 Soed. W 01 (1=10.8)'>BKT 70 Soed. W 01 (1=10.8)</option>
                <option value='BKT 70 Soed. W 02 (1=10.8)'>BKT 70 Soed. W 02 (1=10.8)</option>
                <option value='BKT 70 Soed. W 02 (1=23.6)'>BKT 70 Soed. W 02 (1=23.6)</option>
                <option value='BKT 70 Soed. W 03 (1=7.8)'>BKT 70 Soed. W 03 (1=7.8)</option>
                <option value='BKT 70 Soed. W 03 (1=10.8)'>BKT 70 Soed. W 03 (1=10.8)</option>
                <option value='BKT 70 Soed. (M11535-7.8mm)'>BKT 70 Soed. (M11535-7.8mm)</option>
                <option value='BKT 70 Soed. Impost (J01-13.6mm)'>BKT 70 Soed. Impost (J01-13.6mm)</option>
                <option value='BKT 70 Soed. W 02 (1=18.4)'>BKT 70 Soed. W 02 (1=18.4)</option>
                <option value='BKT 70 Soed. (M11055-13.6mm)'>BKT 70 Soed. (M11055-13.6mm)</option>
                <option value='BKT 70 Soed. Impost (J01-43.6mm)'>BKT 70 Soed. Impost (J01-43.6mm)</option>
                <option value='BKT 70 Soed. Impost (J05-43.6mm)'>BKT 70 Soed. Impost (J05-43.6mm)</option>
                <option value='BKT 78 Soed. (M11227-22.7mm)'>BKT 78 Soed. (M11227-22.7mm)</option>
                <option value='Chit-Chit (aldocks).uz (oq)'>Chit-Chit (aldocks).uz (oq)</option>
                <option value='Klipsa 12 mm'>Klipsa 12 mm</option>
                <option value='BKT 70 Soed. Impost (J05-23.6mm)'>BKT 70 Soed. Impost (J05-23.6mm)</option>
                <option value='Ogranichitel (oq)'>Ogranichitel (oq)</option>
                <option value='Otvetniy Plast. (rangli)'>Otvetniy Plast. (rangli)</option>
                <option value='Otvetniy Plast. (oq)'>Otvetniy Plast. (oq)</option>
                <option value='Petlya Dvernaya Alyumin (oq)'>Petlya Dvernaya Alyumin (oq)</option>
                <option value='Ruchka Kvadrat (oq)'>Ruchka Kvadrat (oq)</option>
                <option value='Soedinitel 114 D 300 (13mm)'>Soedinitel 114 D 300 (13mm)</option>
                <option value='Soedinitel 114 D 300 (6mm)'>Soedinitel 114 D 300 (6mm)</option>
                <option value='Soedinitel 114 D 400 (38mm)'>Soedinitel 114 D 400 (38mm)</option>
                <option value='Soedinitel 114 D 400 (46mm)'>Soedinitel 114 D 400 (46mm)</option>
                <option value='Soedinitel BKH-001 (6mm)'>Soedinitel BKH-001 (6mm)</option>
                <option value='Soedinitel BKH-002 (38mm)'>Soedinitel BKH-002 (38mm)</option>
                <option value='Soedinitel (Inja)'>Soedinitel (Inja)</option>
                <option value='Zashyolka Narujnyaya (new) (oq)'>Zashyolka Narujnyaya (new) (oq)</option>
                <option value='Soedinitel (Bolshoy)'>Soedinitel (Bolshoy)</option>
                <option value='Otvetniy Plast. (ALD-2) (rangli)'>Otvetniy Plast. (ALD-2) (rangli)</option>
                <option value='Otvetniy Plast. (ALD-2) (oq)'>Otvetniy Plast. (ALD-2) (oq)</option>
                <option value='BKT 70 Soed. List (A10-002)'>BKT 70 Soed. List (A10-002)</option>
                <option value='Montajnaya Planka 7000 (Metal)'>Montajnaya Planka 7000 (Metal)</option>
                <option value='Petlya (oq)'>Petlya (oq)</option>
                <option value='BKT 78 Soed. (M11227-26.9mm)'>BKT 78 Soed. (M11227-26.9mm)</option>
                <option value='Ruchka LUX Fortuna Mini O (oq)'>Ruchka LUX Fortuna Mini O (oq)</option>
                <option value='BKT 70 Soed. List (A10-003)'>BKT 70 Soed. List (A10-003)</option>
                <option value='Otvetnaya chast zamka A0275-K (155) (oq)'>Otvetnaya chast zamka A0275-K (155) (oq)</option>
                <option value='Soedinitel 114 D 400 (10mm)'>Soedinitel 114 D 400 (10mm)</option>
                <option value='Soedinitel 5505 (35mm)'>Soedinitel 5505 (35mm)</option>
                <option value='Soedinitel BKH-008 (14mm)'>Soedinitel BKH-008 (14mm)</option>
                <option value='Soedinitel BKH-008 (15mm)'>Soedinitel BKH-008 (15mm)</option>
                <option value='Soedinitel BKH-010 (6mm)'>Soedinitel BKH-010 (6mm)</option>
                <option value='Krishka Podokonnik 300 (Trapetsiya) (oq)'>Krishka Podokonnik 300 (Trapetsiya) (oq)</option>
                <option value='Ogranichitel PVH (oq)'>Ogranichitel PVH (oq)</option>
                <option value='Petlya 75 mm (oq)'>Petlya 75 mm (oq)</option>
                <option value='Petlya Dvernaya PVH (oq)'>Petlya Dvernaya PVH (oq)</option>
                <option value='Porog Soedinitel 6000 (1kom.) (L;P) (rangli)'>Porog Soedinitel 6000 (1kom.) (L;P) (rangli)</option>
                <option value='Porog Soedinitel 7000 (1kom.) (L;P) (oq)'>Porog Soedinitel 7000 (1kom.) (L;P) (oq)</option>
                <option value='Krishka Shtulp Dlya Adap 6000 (oq)'>Krishka Shtulp Dlya Adap 6000 (oq)</option>
                <option value='Krishka Podokonnik 300 (oq)'>Krishka Podokonnik 300 (oq)</option>
                <option value='Ruchka Dvernaya Fornaks (35mm) fiksator (oq)'>Ruchka Dvernaya Fornaks (35mm) fiksator (oq)</option>
                <option value='BKT 70 Soed. (M11535-22mm)'>BKT 70 Soed. (M11535-22mm)</option>
                <option value='Ruchka DELFIN (oq)'>Ruchka DELFIN (oq)</option>
                <option value='Zatsepka 5200'>Zatsepka 5200</option>
                <option value='Zatsepka 7000'>Zatsepka 7000</option>
                <option value='Zatsepka 6000'>Zatsepka 6000</option>
                <option value='Ruchka Okonaya Roto (oq)'>Ruchka Okonaya Roto (oq)</option>
                <option value='Ruchka Okonnaya PVH (oq)'>Ruchka Okonnaya PVH (oq)</option>
                <option value='Soedinitel 5200'>Soedinitel 5200</option>
                <option value='Soedinitel 6000 (TRIO)'>Soedinitel 6000 (TRIO)</option>
                <option value='Soedinitel 7000'>Soedinitel 7000</option>
                <option value='Ruchka Dvernaya Fornaks (35mm) (oq)'>Ruchka Dvernaya Fornaks (35mm) (oq)</option>
                <option value='Soedinitel 5800'>Soedinitel 5800</option>
                <option value='Soedinitel CL.X.W 38 (5.5 mm)'>Soedinitel CL.X.W 38 (5.5 mm)</option>
                <option value='Petlya Dvernaya 2SK MASTER (oq)'>Petlya Dvernaya 2SK MASTER (oq)</option>
                <option value='Soedinitel A 00018 (37mm)'>Soedinitel A 00018 (37mm)</option>
                <option value='Soedinitel CL.X.W 14 (40mm)'>Soedinitel CL.X.W 14 (40mm)</option>
                <option value='Ruchka Okonaya Rotto Swing (oq)'>Ruchka Okonaya Rotto Swing (oq)</option>
                <option value='BKT 70 Soed. Impost (J03-23.6mm)'>BKT 70 Soed. Impost (J03-23.6mm)</option>
                <option value='Ruchka Okonaya Rotto Swing (rangli)'>Ruchka Okonaya Rotto Swing (rangli)</option>
                <option value='Soedinitel CL.X.W 10 (27mm)'>Soedinitel CL.X.W 10 (27mm)</option>
                <option value='Soedinitel A 00018 (9mm)'>Soedinitel A 00018 (9mm)</option>
                <option value='Soedinitel A 00018 (25.8mm)'>Soedinitel A 00018 (25.8mm)</option>
                <option value='Soedinitel A 00018 (18mm)'>Soedinitel A 00018 (18mm)</option>
                <option value='Soedinitel CL.X.W 38 (5mm)'>Soedinitel CL.X.W 38 (5mm)</option>
                <option value='Soedinitel CL.X.W 28 (9mm)'>Soedinitel CL.X.W 28 (9mm)</option>
                <option value='Soedinitel CL.X.W 28 (25.8mm)'>Soedinitel CL.X.W 28 (25.8mm)</option>
                <option value='Soedinitel CL.X.W 28 (18mm)'>Soedinitel CL.X.W 28 (18mm)</option>
                <option value='Soedinitel CL.X.W 24 (5mm)'>Soedinitel CL.X.W 24 (5mm)</option>
                <option value='Soedinitel CL.X.W 38 (5.8mm)'>Soedinitel CL.X.W 38 (5.8mm)</option>
                <option value='Soedinitel CL.X.W 38 (6.8mm)'>Soedinitel CL.X.W 38 (6.8mm)</option>
                <option value='Soedinitel CL.X.W 14 (22.5mm)'>Soedinitel CL.X.W 14 (22.5mm)</option>
                <option value='Soedinitel CL.X.W 34 (34.3mm)'>Soedinitel CL.X.W 34 (34.3mm)</option>
                <option value='BKT 70 Soed. Impost (J01-16mm)'>BKT 70 Soed. Impost (J01-16mm)</option>
                <option value='Soedinitel CL.X.W 05 (13mm)'>Soedinitel CL.X.W 05 (13mm)</option>
                <option value='Soedinitel CL.X.W 20 (27mm)'>Soedinitel CL.X.W 20 (27mm)</option>
                <option value='Soedinitel CL.X.W 20 (18,8mm)'>Soedinitel CL.X.W 20 (18,8mm)</option>
                <option value='Soedinitel CL.X.W 20 (6mm)'>Soedinitel CL.X.W 20 (6mm)</option>
                <option value='Soedinitel CL.X.W 34 (18,8mm)'>Soedinitel CL.X.W 34 (18,8mm)</option>
                <option value='BKT 70 Soed. Impost (J01-23.6mm)'>BKT 70 Soed. Impost (J01-23.6mm)</option>
                <option value='Ruchka Dvernaya Fornaks (30mm) (oq)'>Ruchka Dvernaya Fornaks (30mm) (oq)</option>
                <option value='Ruchka Dvernaya mini (oq)'>Ruchka Dvernaya mini (oq)</option>
                <option value='Ruchka dvernaya "BELLA" (2250) mm (rangli)'>Ruchka dvernaya "BELLA" (2250) mm (rangli)</option>
                <option value='Otvetka Mini 153 (oq)'>Otvetka Mini 153 (oq)</option>
                <option value='Soedinitel CL.X.W 14 (6mm)'>Soedinitel CL.X.W 14 (6mm)</option>
                <option value='Soedinitel CLSW 22'>Soedinitel CLSW 22</option>
                <option value='Ruchka "Simple" (oq)'>Ruchka "Simple" (oq)</option>
                <option value='Soedinitel CL.X.W 10 (18,8mm)'>Soedinitel CL.X.W 10 (18,8mm)</option>
                <option value='Soedinitel CL.X.W 10 (6mm)'>Soedinitel CL.X.W 10 (6mm)</option>
                <option value='Ruchka "Simple"(rangli)'>Ruchka "Simple"(rangli)</option>
                <option value='Vstavka (PVCC 005) (rangli)'>Vstavka (PVCC 005) (rangli)</option>
                <option value='Zaglushka (PVCC 002) (rangli)'>Zaglushka (PVCC 002) (rangli)</option>
                <option value='Soedinitel (PVCC 022)'>Soedinitel (PVCC 022)</option>
                <option value='Krishka (PVCC 001) (rangli)'>Krishka (PVCC 001) (rangli)</option>
                <option value='Termo vstavka (PVCC 003) (rangli)'>Termo vstavka (PVCC 003) (rangli)</option>
                <option value='Termo vstavka (PVCC 004) (rangli)'>Termo vstavka (PVCC 004) (rangli)</option>
                <option value='Ruchka Dvernaya Fornaks (30mm) fiksator (oq)'>Ruchka Dvernaya Fornaks (30mm) fiksator (oq)</option>
                <option value='Soedinitel CL.X.W 10 (17mm)'>Soedinitel CL.X.W 10 (17mm)</option>
                <option value='Zaglushka (PVCC 035) (rangli)'>Zaglushka (PVCC 035) (rangli)</option>
                <option value='Ruchka dvernaya "BELLA" (750) mm (rangli)'>Ruchka dvernaya "BELLA" (750) mm (rangli)</option>
                <option value='Soedinitel CL.X.W 38 (44.4mm)'>Soedinitel CL.X.W 38 (44.4mm)</option>
                <option value='Soedinitel CL.X.W 16 (44.4mm)'>Soedinitel CL.X.W 16 (44.4mm)</option>
                <option value='Ruchka dvernaya "BELLA" (500) mm (rangli)'>Ruchka dvernaya "BELLA" (500) mm (rangli)</option>
                <option value='Krishka Podokonnik 350 (Ovolniy) (oq)'>Krishka Podokonnik 350 (Ovolniy) (oq)</option>
                <option value='Soedinitel CL.X.W 14 (21.5mm)'>Soedinitel CL.X.W 14 (21.5mm)</option>
                <option value='Ruchka dvernaya "BELLA" (2350) mm (rangli)'>Ruchka dvernaya "BELLA" (2350) mm (rangli)</option>
                <option value='Zaglushka (PVCC 034) (rangli)'>Zaglushka (PVCC 034) (rangli)</option>
                <option value='Ruchka dvernaya "BELLA" (2000) mm (rangli)'>Ruchka dvernaya "BELLA" (2000) mm (rangli)</option>
                <option value='Soedinitel CL.X.W 34 (28.7mm)'>Soedinitel CL.X.W 34 (28.7mm)</option>
                <option value='Ruchka dvernaya "BELLA" (1200) mm (rangli)'>Ruchka dvernaya "BELLA" (1200) mm (rangli)</option>
                <option value='Ruchka Dvernaya (28mm) Slim fiksator (oq)'>Ruchka Dvernaya (28mm) Slim fiksator (oq)</option>
                <option value='BKT 70 Soed. W 02 (1=25.8)'>BKT 70 Soed. W 02 (1=25.8)</option>
                <option value='Derjatel i ruchka-koltso dlya moskitnoy setki (rangli)'>Derjatel i ruchka-koltso dlya moskitnoy setki (rangli)</option>
                <option value='Ручка к конструкции москитной сетки серии 10х20. "AKBULUT" цветной'>Ручка к конструкции москитной сетки серии 10х20. "AKBULUT" цветной</option>
                <option value='Ручка к конструкции москитной сетки серии 10х20 "AKBULUT"белый'>Ручка к конструкции москитной сетки серии 10х20 "AKBULUT"белый</option>
                <option value='Ruchka dvernaya "BELLA" (2300) mm (rangli)'>Ruchka dvernaya "BELLA" (2300) mm (rangli)</option>
                <option value='Takos PVH'>Takos PVH</option>
                <option value='BKT 70 Soed. W 02 (1=26.3)'>BKT 70 Soed. W 02 (1=26.3)</option>
                <option value='BKT 70 Soed. W 02 (1=5.1)'>BKT 70 Soed. W 02 (1=5.1)</option>
                <option value='BKT 70 Soed. W 03 (1=18.4)'>BKT 70 Soed. W 03 (1=18.4)</option>
                <option value='BKT 70 Soed. W 03 (1=26.3)'>BKT 70 Soed. W 03 (1=26.3)</option>
                <option value='BKT 70 Soed. W 03 (1=5.1)'>BKT 70 Soed. W 03 (1=5.1)</option>
                <option value='Derjatel i ruchka-koltso dlya moskitnoy setki (oq)'>Derjatel i ruchka-koltso dlya moskitnoy setki (oq)</option>
                <option value='BKT 70 Soed. Impost (J03-13.6mm)'>BKT 70 Soed. Impost (J03-13.6mm)</option>
                <option value='Porog Soedinitel 6000 (1kom.) (L;P) (oq)'>Porog Soedinitel 6000 (1kom.) (L;P) (oq)</option>
                <option value='Montajnaya Planka 6000 (Metal)'>Montajnaya Planka 6000 (Metal)</option>
                <option value='BKT 70 Soed. Impost (J05-13.6mm)'>BKT 70 Soed. Impost (J05-13.6mm)</option>
                <option value='Soedinitel BKH-010 (42mm)'>Soedinitel BKH-010 (42mm)</option>
                <option value='Ruchka Dvernaya Fornaks (28mm) (oq)'>Ruchka Dvernaya Fornaks (28mm) (oq)</option>
                <option value='Otvetnaya chast zamka A0275-K (153) (oq)'>Otvetnaya chast zamka A0275-K (153) (oq)</option>
                <option value='Soedinitel CL.X.W 14 (25.8mm)'>Soedinitel CL.X.W 14 (25.8mm)</option>
                <option value='Soedinitel 114 D 300 (35mm)'>Soedinitel 114 D 300 (35mm)</option>
                <option value='Ruchka Dvernaya Fornaks (28mm) fiksator (oq)'>Ruchka Dvernaya Fornaks (28mm) fiksator (oq)</option>
                <option value='BKT 70 Soed. (M11535-18.4mm)'>BKT 70 Soed. (M11535-18.4mm)</option>
                <option value='Soedinitel CL.X.W 10 (10mm)'>Soedinitel CL.X.W 10 (10mm)</option>
                <option value='Soedinitel CL.X.W 20 (20mm)'>Soedinitel CL.X.W 20 (20mm)</option>
                <option value='EPDM L-65 угловой соединитель для уплотнителей'>EPDM L-65 угловой соединитель для уплотнителей</option>
                <option value='EPDM заглушка для штульпа "Чемпион"'>EPDM заглушка для штульпа "Чемпион"</option>
                <option value='EPDM адаптер крышка для Термо 78'>EPDM адаптер крышка для Термо 78</option>
                <option value='EPDM А01 105 угловой соединитель для уплотнителей'>EPDM А01 105 угловой соединитель для уплотнителей</option>
                <option value='EPDM ССЕР 0057 адаптер крышка'>EPDM ССЕР 0057 адаптер крышка</option>
                <option value='EPDM ССЕР 0058 адаптер крышка'>EPDM ССЕР 0058 адаптер крышка</option>
                <option value='EPDM D 017500 Decor Zaglushka'>EPDM D 017500 Decor Zaglushka</option>
                <option value='EPDM адаптер крышка для Термо 70 (BKT-70)'>EPDM адаптер крышка для Термо 70 (BKT-70)</option>
                <option value='EPDM крышка для штульпа АК-40'>EPDM крышка для штульпа АК-40</option>
                <option value='EPDM адаптер крышка 012'>EPDM адаптер крышка 012</option>
                <option value='EPDM epdc 004 дренажный носик'>EPDM epdc 004 дренажный носик</option>
                <option value='EPDM 5108 угловой соединитель для уплотнителей'>EPDM 5108 угловой соединитель для уплотнителей</option>
                <option value='Термоуплотненный окрашенный алюминиевый профиль'>Термоуплотненный окрашенный алюминиевый профиль</option>
                <option value='Неокрашенный алюминиевый профиль (N)'>Неокрашенный алюминиевый профиль (N)</option>
                <option value='Алюминиевый профиль (N)'>Алюминиевый профиль (N)</option>
                <option value='EPDM уплотнитель'>EPDM уплотнитель</option>
                <option value='Анодированный алюминиевый профиль (N)'>Анодированный алюминиевый профиль (N)</option>
                <option value='Термоуплотненный алюминиевый профиль (N)'>Термоуплотненный алюминиевый профиль (N)</option>
                <option value='Мебельный профиль из алюминия анодированный матовое серебро (N)'>Мебельный профиль из алюминия анодированный матовое серебро (N)</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px;display:none" id='buxgalter_uchot`+String(i)+`' required>
                <option  selected></option>
                <option  value="Штука">Штука</div>
                <option  value="Килограмм">Килограмм</div>
                <option  value="Квадратный метр">Квадратный метр</div>
                <option  value="Метр">Метр</div>
                <option  value="КМП">КМП</div>
                <option  value="Пачка">Пачка</div>
                <option  value="Секция">Секция</div>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;" id='bazoviy_edin`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option vlaue="Штука">Штука</div>
                <option vlaue="Килограмм">Килограмм</div>
                <option vlaue="Квадратный метр">Квадратный метр</div>
                <option vlaue="Метр">Метр</div>
                <option vlaue="КМП">КМП</div>
                <option vlaue="Пачка">Пачка</div>
                <option vlaue="Секция">Секция</div>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px;display:none" id='alter_edin`+ String(i)+`'  required>
                <option  selected></option>
                <option vlaue="Штука">Штука</div>
                <option vlaue="Килограмм">Килограмм</div>
                <option vlaue="Квадратный метр">Квадратный метр</div>
                <option vlaue="Метр">Метр</div>
                <option vlaue="КМП">КМП</div>
                <option vlaue="Пачка">Пачка</div>
                <option vlaue="Секция">Секция</div>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="width: 75px; font-size:10px; display:none;" id='stoimost_baza`+String(i)+`'  ></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="width: 75px; font-size:10px; display:none" id='stoimost_alter`+String(i)+`'  ></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px;text-transform: uppercase; font-size:12px; padding-right:0px; border-color:red;display:none;" id='status`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option value="Активный">Активный</option>
                <option value="Пассивный">Пассивный</option>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <span class =' text-center ' style="font-size: small; width:190px; font-weight: bold; text-transform: uppercase;" id='zavod_name`+String(i)+`'></span>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            
            </div>
        </td>
        </tr>`
    }



    
    var table = $('#table-artikul')
    table.append(text)




    for (let i = sizeee + 1; i < sizeee+2; i++) {
        $('#artikul'+String(i)).select2({
            ajax: {
                url: "/client/imzo-artikul-list",
                dataType: 'json',
                processResults: function(data){
                    return {results: $.map(data, function(item){
                        return {id:item.id,text:item.artikul,system:item.system,combination:item.combination,code_nakleyka:item.code_nakleyka}
                    })
                };
                }
            }
            });
        
        
        
        var artikulSelect = $('#artikul'+String(i));
        $.ajax({
            type: 'GET',
            url: "/client/imzo-artikul-list"
        }).then(function (data) {
            var option = new Option(data.artikul, data.id, true, true);
            artikulSelect.append(option).trigger('change');
        
            artikulSelect.trigger({
                type: 'select2:select',
                params: {
                    data: data
                }
            });
        });
        
        
        $("#artikul"+String(i)).on("select2:select", function (e) { 
        var select_val = $(e.currentTarget).val();
        console.log(select_val)
        var nazvaniye_system =$('.nazvaniye_system'+String(i));
        var combination = $('#combination'+String(i));
        var tip_pokritiya = $('#tip_pokritiya'+String(i));
        // tip_pokritiya.val('').change();
        console.log(tip_pokritiya)
        if(select_val!=''){

            tip_pokritiya.attr("disabled",false);
            
        }
        nazvaniye_system.text(e.params.data.system);
        combination.text(e.params.data.combination)

        var nakleyka_kode = e.params.data.code_nakleyka
        
        
        
        
        
        var nakleyka_nt1 = $('#nakleyka_nt'+String(i))
        var nakleyka_org =$('#nakleyka_org'+String(i));
        var nakleyka_select = $('#nakleyka_select'+String(i));

        var length = $('#length'+String(i));
        length.attr('required',true)
        var splav = $('#splav'+String(i));
        splav.attr('required',true)
        var tip_zakalyonnosti = $('#tip_zakalyonnosti'+String(i));
        tip_zakalyonnosti.attr('required',true)

        nakleyka_org.text("")
        if (nakleyka_kode =='NT1'){
            nakleyka_nt1.css('display','block')
            nakleyka_org.css('display','none')
            nakleyka_select.css('display','none')
        }
        else if( nakleyka_kode !=''){
            nakleyka_org.text(nakleyka_kode)
            nakleyka_nt1.css('display','none')
            nakleyka_org.css('display','block')
            nakleyka_select.css('display','none')
        }        
        else{
            nakleyka_nt1.css('display','none')
            nakleyka_org.css('display','none')
            nakleyka_select.css('display','block')
            nakleyka_select.attr('required',true)
            get_nakleyka(String(i))
        }
        
        
        
        // console.log(e.params.data.system)
        });

    }
    // clear_artikul(sizeee + 1);
}





