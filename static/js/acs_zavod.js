class BasePokritiya{
    constructor(
        full=false,//done
        id=NaN, //done
        base_artikul=NaN,
        kratkiy_tekst=NaN,
        gruppa_materialov=NaN,
        bei =NaN,
        aei=NaN,
        koefitsiyent=NaN,
        sklad_gp=NaN,
        bux_sena=NaN,

        comment=NaN,
        
        
        ) {
      
        this.full=full;
        this.id=id;
        this.base_artikul=base_artikul;
        this.kratkiy_tekst=kratkiy_tekst;
        this.gruppa_materialov=gruppa_materialov;
        this.bei=bei;
        this.aei=aei;
        this.koefitsiyent=koefitsiyent;
        this.sklad_gp=sklad_gp;
        this.bux_sena=bux_sena;
        this.comment=comment;
        
    }
    get_kratkiy_tekst(){
            switch(this.id){
                case 1:
            
                        if (this.base_artikul && this.kratkiy_tekst && this.bei){
        
                            return {'text':'','accept':true}
                        }else{
                            return {'text':'','accept':false}
                        }
                        break;
            }
        }
  }




var data_base = {}

function front_piece(start=1,end=6){
    var text =""

    for (let i = start; i < end; i++) {
        var buttons =''
        if(status_proccess1 == 'new'){
            buttons=`<td class="sticky-col"   style='left:0; padding-right:5px; background-color:white!important;' >
                    <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-secondary btn-sm" id='clear_btn`+String(i)+`' onclick="artukil_clear(`+String(i)+`)" data-bs-toggle='popover' title='Tozalab tashlash'><i class="bi bi-x-circle"></i></button>
                            <button type="button" class="btn btn-outline-secondary btn-sm"  onclick="copy_tr(`+String(i)+`)" data-bs-toggle='popover' title='Dubl qilish'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg></button>
                    </div>
                     </td>`
        }else{
            buttons=``
        }
        text +=`
        <tr id='table_tr` +String(i)+`' style='padding-bottom:0!important;margin-bottom:0!important;'>                   
        `+buttons+
         `
        <td >
            <div id='div_artikul`+String(i)+`'>
                <select class ='form-select base_artikul_org`+String(i)+`' id='base_artikul`+String(i)+`'  style=' padding-left:35%;height:27px!important;z-index:0;border-color:red' onchange="create_kratkiy_tekst(`+String(i)+`)" data-placeholder="..."></select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style="border-color:red; width: 200px; font-size:10px;height:27px;z-index:0 " id='kratkiy_tekst`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
                <select class="form-select" aria-label="" style="width: 110px; font-size:12px; padding-right:0px; z-index:0"  id='gruppa_materialov`+String(i)+`'  onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                    <option  ></option>
                    <option  selected value="ACSUZGP">ACSUZGP</option>
                </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px; font-size:12px; padding-right:0px;border-color:red;z-index:0" id='bei`+String(i)+`' onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option  value="Штука">Штука</div>
                <option  value="Килограмм">Килограмм</div>
                <option  value="Квадратный метр">Квадратный метр</div>
                <option  value="Метр">Метр</div>
                <option  value="КМП">КМП</div>
                <option  value="Пачка">Пачка</div>
                <option  value="Секция">Секция</div>
                <option  value="Коробка">Коробка</div>
                <option  value="Грам">Грам</div>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <select class="form-select" aria-label="" style="width: 155px; font-size:12px; padding-right:0px;z-index:0" id='aei`+String(i)+`' onchange='create_kratkiy_tekst(`+String(i)+`)' required>
                <option  selected></option>
                <option  value="Штука">Штука</div>
                <option  value="Килограмм">Килограмм</div>
                <option  value="Квадратный метр">Квадратный метр</div>
                <option  value="Метр">Метр</div>
                <option  value="КМП">КМП</div>
                <option  value="Пачка">Пачка</div>
                <option  value="Секция">Секция</div>
                <option  value="Коробка">Коробка</div>
                <option  value="Грам">Грам</div>
            </select>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style=" width: 75px; font-size:10px;height:27px;z-index:0 " id='koefitsiyent`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style=" width: 75px; font-size:10px;height:27px;z-index:0 " id='sklad_gp`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style=" width: 75px; font-size:10px;height:27px;z-index:0 " id='bux_sena`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>
        <td >
            <div class="input-group input-group-sm mb-1">
            <input type='text' class=" form-control " style=" width: 170px; font-size:10px;height:27px;z-index:0 " id='comment`+String(i)+`'  onkeyup='create_kratkiy_tekst(`+String(i)+`)'></input>
            </div>
        </td>

        </tr>`
        
    }
    return text
}

text = front_piece()


var table = $('#table-artikul')

// table.append(text)

if(status_proccess1 == 'new'){
    table.append(text)
    artikul_list_add()

}else{
    var jsonData = JSON.parse(jsonData);
    // var jsonData ='{{order}}'

    // var ii= 1

    for(var key1 in jsonData){
        data_base[key1] = new BasePokritiya()
        for(var key2 in jsonData[key1]){
            data_base[key1][key2] = jsonData[key1][key2]
        }
        // ii += 1
    }



    var text2 =''
    for(var key1 in jsonData){
        // console.log(key1,'lllsdsafasfads')
        text2 += front_piece( parseInt(key1),parseInt(key1)+1)
    }



    var table = $('#table-artikul')

    table.append(text2)

    // var i = 1
    console.log(data_base,'kkkkk')
    for(key2 in data_base){
        copy_tr(key2,key2)
        // i += 1
    }
}



function artikul_list_add(start=1,end=6){

    for (let i = start; i < end; i++) {
        set_base_artikul(artikul_list,'.base_artikul_org'+i,value='')
        if(status_proccess1 == 'new'){
            data_base[i] = new BasePokritiya()
            data_base[i].id = 1
        }
    }
}


function copy_tr(id,ii=1){
    if(!data_base[id]){
        console.log('salom2222 copy')
    }else{
        if(status_proccess1 == 'new'){
            text =""
            var size = $('#table-artikul tr').length;
            text = front_piece(start = size+1, end = size+2)
            var table = $('#table_tr'+id)
            var new_tr =$(text)
    
            table.after(new_tr)
            
            
            var data = new BasePokritiya()
            for(key in data_base[id]){
                data[key] = data_base[id][key]
            }
                
            
    
            
    
            data_base[size+1] = data
            
            var s = size+1
        }else{
            var data = data_base[id]
            var s = ii
            artikul_list_add(start = s, end = s+1)
        }

        var base_artikul = data.base_artikul;
        var kratkiy_tekst = data.kratkiy_tekst;
        var gruppa_materialov = data.gruppa_materialov;
        var bei = data.bei;
        var aei = data.aei;
        var koefitsiyent = data.koefitsiyent;
        var sklad_gp = data.sklad_gp;
        var bux_sena = data.bux_sena;
        var comment = data.comment;
        
        
        set_base_artikul(artikul_list,'.base_artikul_org'+s,base_artikul)
       

        check_input_and_change(kratkiy_tekst,'#kratkiy_tekst'+s,dis=false,is_req=true,is_req_simple=false)
        check_input_and_change(gruppa_materialov,'#gruppa_materialov'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(bei,'#bei'+s,dis=false,is_req=true,is_req_simple=false)
        check_input_and_change(aei,'#aei'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(koefitsiyent,'#koefitsiyent'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(sklad_gp,'#sklad_gp'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(bux_sena,'#bux_sena'+s,dis=false,is_req=false,is_req_simple=true)
        check_input_and_change(comment,'#comment'+s,dis=false,is_req=false,is_req_simple=true)
        
        
    }


}



function check_input_and_change(val,selector,dis=false,is_req=false,is_req_simple=false){
    if(is_req){
        
        // $(selector).attr('disabled',false)
        $(selector).css('display','block')
        $(selector).css('border-color','red')

    }
    if(is_req_simple){
        
        // $(selector).attr('disabled',false)
        $(selector).css('display','block')
        $(selector).css('border-color','#dedad9')

    }
    if(val !=NaN && val !='' && String(val) != 'NaN'){
        var sel = $(selector)
        // sel.attr('disabled',dis)
        sel.css('display','block')
        sel.css('border-color','#dedad9')
        sel.val(val)
        // console.log(val,typeof(val),selector)
    }
    
}

function check_text_and_change(val,selector){
    if(val !=NaN && val !='' && String(val) != 'NaN'){
        var sel = $(selector)
        sel.css('display','block')
        sel.text(val)
    }
}





function artukil_clear(id){
    
    var table_tr =$('#table_tr'+id);
    
    delete data_base[id]

    
    table_tr.css('background-color','white')
    


    set_base_artikul(artikul_list,'.base_artikul_org'+id,value='',add=false)
    var div_artikul =$('#div_artikul'+id);
    var kratkiy_tekst =$('#kratkiy_tekst'+id);
    var gruppa_materialov =$('#gruppa_materialov'+id);
    var bei =$('#bei'+id);
    var aei =$('#aei'+id);
    var koefitsiyent =$('#koefitsiyent'+id);
    var sklad_gp =$('#sklad_gp'+id);
    var bux_sena =$('#bux_sena'+id);
    var comment =$('#comment'+id);

    
    div_artikul.css('display','none')
    kratkiy_tekst.css('display','none')
    gruppa_materialov.css('display','none')
    bei.css('display','none')
    aei.css('display','none')
    koefitsiyent.css('display','none')
    sklad_gp.css('display','none')
    bux_sena.css('display','none')
    comment.css('display','none')
    

  
    kratkiy_tekst.css('border-color','red')
    bei.css('border-color','red')
    
    kratkiy_tekst.val('')
    gruppa_materialov.val('')
    bei.val('')
    aei.val('')
    koefitsiyent.val('')
    sklad_gp.val('')
    bux_sena.val('')
    comment.val('')


}


function create_kratkiy_tekst(id){
    
    if(!data_base[id]){
        console.log('salom')
    }else{
        
        var base_artikul =$('#base_artikul'+id)
        var kratkiy_tekst =$('#kratkiy_tekst'+id)
        var gruppa_materialov =$('#gruppa_materialov'+id)
        var bei =$('#bei'+id)
        var aei =$('#aei'+id)
        var koefitsiyent =$('#koefitsiyent'+id)
        var sklad_gp =$('#sklad_gp'+id)
        var bux_sena =$('#bux_sena'+id)
        var comment =$('#comment'+id);
        console.log(kratkiy_tekst.val())
        
        
        
        if(base_artikul.val()!=''){
            data_base[id].base_artikul = base_artikul.val();
            base_artikul.css('border-color','#dedad9')
        }else{
            base_artikul.css('border-color','#dedad9')
            data_base[id].base_artikul = NaN;
        }
        if(kratkiy_tekst.val()!=''){
            data_base[id].kratkiy_tekst = kratkiy_tekst.val();
            kratkiy_tekst.css('border-color','#dedad9')
        }else{
            kratkiy_tekst.css('border-color','red')
            data_base[id].kratkiy_tekst = NaN;
        }
        if(gruppa_materialov.val()!=''){
            data_base[id].gruppa_materialov = gruppa_materialov.val();
            gruppa_materialov.css('border-color','#dedad9')
        }else{
            gruppa_materialov.css('border-color','#dedad9')
            data_base[id].gruppa_materialov = NaN;
        }
        if(bei.val()!=''){
            data_base[id].bei = bei.val();
            bei.css('border-color','#dedad9')
        }else{
            bei.css('border-color','red')
            data_base[id].bei = NaN;
        }
        if(aei.val()!=''){
            data_base[id].aei = aei.val();
            aei.css('border-color','#dedad9')
        }else{
            aei.css('border-color','#dedad9')
            data_base[id].aei = NaN;
        }
        if(koefitsiyent.val()!=''){
            data_base[id].koefitsiyent = koefitsiyent.val();
            koefitsiyent.css('border-color','#dedad9')
        }else{
            koefitsiyent.css('border-color','#dedad9')
            data_base[id].koefitsiyent = NaN;
        }
        if(sklad_gp.val()!=''){
            data_base[id].sklad_gp = sklad_gp.val();
            sklad_gp.css('border-color','#dedad9')
        }else{
            sklad_gp.css('border-color','#dedad9')
            data_base[id].sklad_gp = NaN;
        }
        if(bux_sena.val()!=''){
            data_base[id].bux_sena = bux_sena.val();
            bux_sena.css('border-color','#dedad9')
        }else{
            bux_sena.css('border-color','#dedad9')
            data_base[id].bux_sena = NaN;
        }
        if(comment.val()!=''){
            data_base[id].comment = comment.val();
            comment.css('border-color','#dedad9')
        }else{
            comment.css('border-color','#dedad9')
            data_base[id].comment = NaN;
        }


    var data = data_base[id].get_kratkiy_tekst()
    
    if(data.accept){
        var table_tr =$('#table_tr'+id);
        table_tr.css('background-color','#2de319')
        data_base[id].full =true
    }else{
        var table_tr =$('#table_tr'+id);
        table_tr.css('background-color','white')
        data_base[id].full =false

    }
    }
}

function add_column(){
        
    text =""
    var sizeee = $('#table-artikul tr').length;
    
    text = front_piece(start = sizeee+1, end = sizeee+2)

    
    var table = $('#table-artikul')
    table.append(text)
    


}




