function guigopy(){
    let layhoten = document.getElementById('hoten').value;
    let layemail = document.getElementById('email').value;
    let laygioitinh = document.getElementsByName('gioitinh');
    let chongioitinh;
    for(let i of laygioitinh)
    {
        if(i.checked)
        {
            chongioitinh = i.value;
            break;
        }
    }
    let laynghenghiep = document.getElementById('nghenghiep');
    let chonnghenghiep = laynghenghiep.value;
    let laygopy = document.getElementById('noidunggopy').value;

    let hienthira = document.getElementById('hienthi')
    hienthira.innerHTML = `<b>Họ và tên:</b> ${layhoten} <br>`  +
    `<b>Email:</b> ${layemail} <br>`   +
    `<b>Giới tính:</b> ${chongioitinh} <br>` +
    `<b>Nghề nghiệp:</b> ${chonnghenghiep} <br>` +
    `<b>Góp ý :</b> ${laygopy}`
} 