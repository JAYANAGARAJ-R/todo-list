

let but=document.getElementById("my_button");
but.addEventListener("click", doonclick);

function doonclick(){
    let lists = document.getElementById('lists');
    let li = document.createElement('li');

    let input = document.getElementById("task");
    if(input.value !== "") {
        //li.innerText = input.value;
        //lists.append(li);

        let text_div = document.createElement('div');
        text_div.innerText = input.value;
        //console.log(text_div);
        li.append(text_div);
        input.value = "";

        let del_button = document.createElement('button');
        del_button.type = 'button';
        del_button.innerText = "DELETE";
        function doOnDel() {
            li.remove();
        };
        del_button.addEventListener('click', doOnDel);
        li.append(del_button);

        let edit_button = document.createElement('button');
        edit_button.type = 'button';
        edit_button.innerText = 'EDIT';
        function doOnEdit() {
            //console.log(li.innerHTML);
            //console.log(li.childNodes[0].innerText);
            input.value = li.childNodes[0].innerText;
            doOnDel();
        }
        edit_button.addEventListener('click', doOnEdit);
        li.append(edit_button);
    }
    lists.append(li);
}