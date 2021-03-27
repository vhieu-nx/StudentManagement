/*-------Xử lý------*/
// Date: 24 Sept 2017
// Author: ....
// ---------------------------------------------
// Requirements: 
// ---------------------------------------------
// Gồm :
// Phương thức : ThemSinhVien , ThemDiem
// Các hàm kiểm tra nhập vào thông tin và điểm SV
let dsSinhVien = new DanhSachSinhVien();
//Them phuong thuc xoa sinh vien vao prototype DanhSachSinhVien
DanhSachSinhVien.prototype.XoaDSSinhVien = function(dsSinhVienDuocChon)
{			
	// var soLuongSVDuocChon = dsSinhVienDuocChon.length;
	// var tongSoSV = dsSinhVien.DSSV.length;
	for(let i=0; i<dsSinhVienDuocChon.length; i++)
	{
		for(let j=0; j<dsSinhVien.DSSV.length; j++)
		{
			if(dsSinhVienDuocChon[i] == dsSinhVien.DSSV[j].MSSV)
			{
				dsSinhVien.DSSV.splice(j,1);
			}
		}
	}
}
// Thêm sinh viên
function ThemSinhVien(){
	//Them thuoc tinh masv
	SinhVien.prototype.MSSV = '';
	//Buoc 1: Lay du lieu tu nguoi dung nhap vao
	let hoten = document.getElementById('hoten').value;
	let cmnd = document.getElementById('cmnd').value;
	let sdt = document.getElementById('sdt').value;
	let email = document.getElementById('email').value;
	let masv = document.getElementById('masv').value;
	let thongbao = document.getElementById("pthongbao");
	//Buoc 2: Tao doi tuong sinh vien 
	let sv = new SinhVien(hoten,email,cmnd,sdt);
	sv.MSSV = masv;
	if(KiemTraSV() == false)
	{
		KiemTraSV();
	}
	else if(KiemTraMaSV() == false)
	{
		KiemTraMaSV();
	}
	else if(KiemTraHoTen() == false)
	{
		KiemTraHoTen();
	}
	else if(KiemTraCMND() == false)
	{
		KiemTraCMND();
	}
	else if(KiemTraEmail() ==false)
	{
		KiemTraEmail();
	}
	else if(KiemTraSoDT() == false)
	{
		KiemTraSoDT();
	}
	//Buoc 3: Dua doi tuong sinh vien vao mang sinh vien
	else{
		thongbao.innerHTML = "Thêm thành công";
		thongbao.style.cssText = "color:green;font-weight:bold";
		thongbao.classList.add('animated','fadeInRight');
		dsSinhVien.themSV(sv);
		CapNhatDSSinhVien1();
		CapNhatDSSinhVien2();	
	}

}


//Buoc 4: Xay dung ham capnhatDSsinhvien
function CapNhatDSSinhVien1()
{
	let lstBoxSinhVien1 = document.getElementById('lstDanhSachSinhVien1');
	//Clear tat ca option tren giao dien
	lstBoxSinhVien1.innerHTML = '';
	for(let i=0;i<dsSinhVien.DSSV.length;i++)
	{
		let optionSV = document.createElement('option');
		//Lay sinh vien thu i trong DSSV cua doi tuong dsSinhVien
		let svTam = dsSinhVien.DSSV[i];
		optionSV.value = svTam.MSSV;
		optionSV.innerHTML = svTam.HoTen;
		lstBoxSinhVien1.appendChild(optionSV);
	}
}

function CapNhatDSSinhVien2()
{
	let lstBoxSinhVien2 = document.getElementById('lstDanhSachSinhVien2');
	//Clear tat ca option tren giao dien
	lstBoxSinhVien2.innerHTML = '';
	for(let i=0;i<dsSinhVien.DSSV.length;i++)
	{
		let optionSV = document.createElement('option');
		//Lay sinh vien thu i trong DSSV cua doi tuong dsSinhVien
		let svTam = dsSinhVien.DSSV[i];
		optionSV.value = svTam.MSSV;
		optionSV.innerHTML = svTam.HoTen;
		lstBoxSinhVien2.appendChild(optionSV);
	}
}

//Ham xoa sinh vien
/*function XoaSinhVien()
{
	if (confirm("Ban chac chan muon xoa?") == true) {
		var lstBoxSinhVien = document.getElementById('lstDanhSachSinhVien'); 
		var dsSinhVienDuocChon = new Array();
		var lstSinhVienDuocChon = lstBoxSinhVien.options;
		var soLuongSVDuocChon = lstBoxSinhVien.options.length;
		for(var i=0;i<soLuongSVDuocChon;i++)
		{
		//Lay gia tri nguoi dung chon dua vao mang dsSinhVienDuocChon
			if(lstSinhVienDuocChon[i].selected)
			{
				var masvDuocChon = lstSinhVienDuocChon[i].value;
				dsSinhVienDuocChon.push(masvDuocChon);
			}
		}
		dsSinhVien.XoaDSSinhVien(dsSinhVienDuocChon);
		CapNhatDSSinhVien();
	} 

} */

// Hàm Xóa Sinh Viên
function XoaSinhVien()
{
	let lstBoxSinhVien = document.getElementById('lstDanhSachSinhVien1');
	let dsSinhVienDuocChon = new Array();
	let lstSinhVienDuocChon = lstBoxSinhVien.options;
	let soLuongSVDuocChon = lstBoxSinhVien.options.length;
	for(let i=0;i<soLuongSVDuocChon;i++)
	{
		//Lay gia tri nguoi dung chon dua vao mang dsSinhVienDuocChon
		if(lstSinhVienDuocChon[i].selected)
		{
			let masvDuocChon = lstSinhVienDuocChon[i].value;
			dsSinhVienDuocChon.push(masvDuocChon);
		}
	}
	dsSinhVien.XoaDSSinhVien(dsSinhVienDuocChon);
	CapNhatDSSinhVien1();
	CapNhatDSSinhVien2();
}

//Hàm Thêm điểm Sinh Viên
function ThemDiem()
{
	SinhVien.prototype.DTB = '';
	SinhVien.prototype.XepLoai = '';
	let toan = parseFloat(document.getElementById('toan').value);
	let ly = parseFloat(document.getElementById('ly').value);
	let hoa = parseFloat(document.getElementById('hoa').value);
	let thongbaodiem = document.getElementById("pthongbaodiem");
	let svDaChon = document.getElementById("lstDanhSachSinhVien2").selectedIndex;
	if(dsSinhVien.DSSV[svDaChon] == undefined){
		thongbaodiem.innerHTML = "Vui lòng nhập chọn Sinh Viên để nhập điểm";
		thongbaodiem.classList.add('animated','fadeInRight');
	}
	else if(KiemTraDiem(toan,ly,hoa) == false)
	{
		KiemTraDiem(toan,ly,hoa);
	}
	else if(KiemTraToan() == false)
	{
		KiemTraToan();
	}
	else if(KiemTraLy() == false)
	{
		KiemTraLy();
	}
	else if(KiemTraHoa() == false)
	{
		KiemTraHoa();
	}
	else{
		let DTB = (toan+ly+hoa)/3;
		let dtb= DTB.toFixed(2);
		let lstBoxSV = document.getElementById('lstDanhSachSinhVien2');
		let lstSVDC = lstBoxSV.options;
		let slSVDC = lstBoxSV.options.length;
		for( let i = 0;i<slSVDC;i++)
		{
			if(lstSVDC[i].selected)
			{
				dsSinhVien.DSSV[i].DTB = dtb;
				thongbaodiem.innerHTML = "Thêm thành công";
				thongbaodiem.style.cssText = "color:green;font-weight:bold";
				thongbaodiem.classList.add('animated','fadeInRight');
			}
		}
		for( let i = 0; i < dsSinhVien.DSSV.length ; i++ )
		{
			if (dsSinhVien.DSSV[i].DTB >= 9){
				dsSinhVien.DSSV[i].XepLoai = "Xuất Sắc";
			}
			else if(dsSinhVien.DSSV[i].DTB >= 8){
				dsSinhVien.DSSV[i].XepLoai = "Giỏi";
			} 
			else if(dsSinhVien.DSSV[i].DTB >= 7){
				dsSinhVien.DSSV[i].XepLoai = "Khá";
			}
			else if(dsSinhVien.DSSV[i].DTB >= 6){
				dsSinhVien.DSSV[i].XepLoai = "Trung Bình Khá";
			}
			else if(dsSinhVien.DSSV[i].DTB >= 5){
				dsSinhVien.DSSV[i].XepLoai = "Trung Bình";
			}
			else if(dsSinhVien.DSSV[i].DTB >= 0){
				dsSinhVien.DSSV[i].XepLoai = "Yếu";
			}
		}		
	}
	
	//console.log(dsSinhVien);		
}

//Xuất ra bảng danh sách sinh viên
function XuatDSSV(dssvDaChon,id_Tablesv)
{
	let headTable = ["Tên","MSSV","ĐTB","Xếp loại"];
	let lstDanhSachXLSV = document.getElementById(id_Tablesv);
	let table = document.createElement("table");
	lstDanhSachXLSV.innerHTML = "";
	table.classList.add("table","table-striped","table-hover");
	lstDanhSachXLSV.appendChild(table);	
	//Tạo ô đầu trong table
	let tr = document.createElement("tr");
	for(let i=0 ; i< headTable.length ;i++ ){
		let thead = document.createElement("th");
		thead.innerHTML = headTable[i];
		tr.appendChild(thead);
	};
	table.appendChild(tr);
	//Danh sách xếp loại sinh viên
	for (let i = 0;i<dssvDaChon.length;i++)
	{
		let TR = document.createElement("tr");
		for(let j = 0;j< headTable.length;j++)
		{
			let TD = document.createElement("td");
			if(j == 0)
			{
				TD.innerHTML = dssvDaChon[i].HoTen;
			}
			else if(j == 1)
			{
				TD.innerHTML = dssvDaChon[i].MSSV;
			}
			else if(j == 2)
			{
				TD.innerHTML = dssvDaChon[i].DTB;
			}			
			else
			{
				TD.innerHTML = dssvDaChon[i].XepLoai;
			}
			TR.appendChild(TD);
			table.appendChild(TR);		
		}
	}
	table.border =1;
	lstDanhSachXLSV.appendChild(table);

}

//Bảng danh sách sinh viên
function showDSSV()
{
    function compare(sv1,sv2) {
        if (sv1.MSSV < sv2.MSSV )
            return -1;
        if (sv1.MSSV  > sv2.MSSV )
            return 1;
        return 0;
    };
    dsSinhVien.DSSV.sort(compare);	
	XuatDSSV(dsSinhVien.DSSV,"lstDanhSachXepLoaiSV1");
}

//Tìm top 1 và top 10 sinh viên điểm cao nhất
function Top1(){
	// if(dsSinhVien.DSSV.length>0){
	// 	var idx = 0;
	// 	var max = dsSinhVien.DSSV[0].DTB;	
	// 	for (var i = 1; i < dsSinhVien.DSSV.length; i++) {	
	// 		if (dsSinhVien.DSSV[i].DTB > max)
	// 		{
	// 			max =  dsSinhVien.DSSV[i].DTB;
	// 			idx = i;
	// 		}
	// 	}
	// 	var top1 = [];
	// 	top1.push(dsSinhVien.DSSV[idx]);
	function compare(sv1,sv2) {
			if (sv1.DTB > sv2.DTB )
			return -1;
			if (sv1.DTB  < sv2.DTB )
			return 1;
			return 0;
		};
	let top1 = dsSinhVien.DSSV.sort(compare).slice(0, 1);
		XuatDSSV(top1,"lstDanhSachXepLoaiSV2");
}

function Top10(){
	function compare(sv1,sv2) {
	  if (sv1.DTB < sv2.DTB )
	    return 1;
	  else if (sv1.DTB  > sv2.DTB )
	    return -1;
	  return 0;
	};
	let top10 = dsSinhVien.DSSV.sort(compare).slice(0, 10);
	XuatDSSV(top10,"lstDanhSachXepLoaiSV3");
}

//Tìm sinh viên
function Timsv(){
	let thongbaoTimSV =  document.getElementById('thongbaoTimSV');
	let divTableTimSV = document.getElementById('lstDanhSachXepLoaiSV4');
	let ten_mssv = document.getElementById('timSV').value;
	thongbaoTimSV.style.display = "none";
	let kqSV =  dsSinhVien.TimSV(ten_mssv);
	

	if(kqSV.length == 0){
		divTableTimSV.innerHTML = "";
		divTableTimSV.classList.remove('animated','fadeInRight');
		thongbaoTimSV.innerHTML = "Không tìm thấy Sinh Viên";
		thongbaoTimSV.classList.add('animated','fadeInRight');
		thongbaoTimSV.style.display = "block";
	}
	else{
		thongbaoTimSV.innerHTML="";
		thongbaoTimSV.classList.remove('animated','fadeInRight');
		XuatDSSV(kqSV,"lstDanhSachXepLoaiSV4");
		divTableTimSV.classList.add('animated','fadeInRight');
	}
}


// Các hàm kiểm tra đầu vào thông tin sinh viên
function KiemTraSV()
{
	let kq = true;
	let hoten = document.getElementById('hoten').value;
	let cmnd = document.getElementById('cmnd').value;
	let sdt = document.getElementById('sdt').value;
	let email = document.getElementById('email').value;
	let masv = document.getElementById('masv').value;
	let thongbao = document.getElementById("pthongbao");

	if(kiemTraRong(masv) && kiemTraRong(hoten) && kiemTraRong(cmnd) && kiemTraRong(email)  && kiemTraRong(sdt))
	{
		thongbao.innerHTML = "Không được để trống các ô nhập vào";
		thongbao.style.display = "block";
		thongbao.classList.add('animated','fadeInRight')
		kq = false;
	}
	return kq;

}

function KiemTraMaSV()
{
	let kq = true;
	let masv = document.getElementById('masv').value;
	let thongbao = document.getElementById("thongbaoMASV");
	if(kiemTraRong(masv))
	{
		thongbao.innerHTML = "Mã SV không được để trống";
		thongbao.style.display = "block";
		thongbao.classList.add('animated','fadeInRight')
		kq = false;
	}
	else{
		for(let i=0; i<dsSinhVien.DSSV.length;i++)
		{
			if(masv == dsSinhVien.DSSV[i].MSSV){
				thongbao.innerHTML = "Mã số sinh viên đã tồn tại,vui lòng nhập lại";
				thongbao.classList.add('animated','fadeInRight')
				thongbao.style.display = "block";
				kq = false;
			}
		}	
	}	
	return kq;
}

function KiemTraHoTen()
{
	let kq = true;
	let hoten = document.getElementById('hoten').value;
	let thongbao = document.getElementById("thongbaoHoTen");
	if(kiemTraRong(hoten))
	{
		thongbao.innerHTML = "Họ Tên không được để trống";
		thongbao.style.display = "block";
		thongbao.classList.add('animated','fadeInRight')
		kq = false;
	}
	if(kiemTraChu(hoten))
	{
		thongbao.innerHTML = "Họ và tên phải là chữ";
		thongbao.style.display = "block";
		thongbao.classList.add('animated','fadeInRight')
		kq = false;
	}
	else{
		for(let i=0; i<dsSinhVien.DSSV.length;i++)
		{
			if(hoten == dsSinhVien.DSSV[i].HoTen){
				thongbao.innerHTML = "Họ và tên sinh viên đã tồn tại,vui lòng nhập lại";
				thongbao.classList.add('animated','fadeInRight')
				thongbao.style.display = "block";
				kq = false;
			}
		}	
	}	
	return kq;
}

function KiemTraCMND()
{
	let kq = true;
	let cmnd = document.getElementById('cmnd').value;
	let thongbao = document.getElementById("thongbaoCMND");
	if(kiemTraRong(cmnd))
	{
		thongbao.innerHTML = "Số CMND không được để trống";
		thongbao.classList.add('animated','fadeInRight')
		thongbao.style.display = "block";
		kq = false;
	}
	else if(kiemTraSo(parseFloat(cmnd)))
	{
		thongbao.innerHTML = "CMND phải là số";
		thongbao.classList.add('animated','fadeInRight')
		thongbao.style.display = "block";
		kq = false;
	}
	else if(kiemTraSoLuongKyTu(cmnd,9,12)==false)
	{
		thongbao.innerHTML = "CMND phải từ 9 đến 12 ký tự";
		thongbao.classList.add('animated','fadeInRight')
		thongbao.style.display = "block";
		kq = false;
	}
	return kq;	
}

function KiemTraEmail()
{
	let kq = true;
	let email = document.getElementById('email').value;
	let thongbao = document.getElementById("thongbaoEmail");
	let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(kiemTraRong(email))
	{
		thongbao.innerHTML = "Email không được để trống";
		thongbao.classList.add('animated','fadeInRight')
		thongbao.style.display = "block";
		kq = false;
	}
	else if(kiemTraEmail(filter,email)==false)
	{
		thongbao.innerHTML = "Email nhập không hợp lệ";
		thongbao.classList.add('animated','fadeInRight')
		thongbao.style.display = "block";
		kq = false;
	}
	return kq;
}

function KiemTraSoDT()
{
	let kq = true;
	let sdt = document.getElementById('sdt').value;
	let thongbao = document.getElementById("thongbaoSDT");
	if(kiemTraRong(sdt))
	{
		thongbao.innerHTML = "Số dt không được để trống";
		thongbao.classList.add('animated','fadeInRight')
		thongbao.style.display = "block";
		kq = false;		
	}
	else if(kiemTraSo(sdt))
	{
		thongbao.innerHTML = "Số dt phải là số";
		thongbao.classList.add('animated','fadeInRight')
		thongbao.style.display = "block";
		kq = false;		
	}
	else if(kiemTraSoLuongKyTu(sdt,10,18)==false)
	{
		thongbao.innerHTML = "Số dt phải từ 10 ký tự trở lên";
		thongbao.classList.add('animated','fadeInRight')
		thongbao.style.display = "block";
		kq = false;		
	}
	return kq;
}

//Hàm kiểm tra nhập vào điểm sinh viên
function KiemTraDiem(so1,so2,so3)
{
	let kq = true;
	let thongbaodiem = document.getElementById("pthongbaodiem");
	if(isNaN(so1) && isNaN(so2) && isNaN(so3) || isNaN(parseFloat(so1))&&isNaN(parseFloat(so2))&&isNaN(parseFloat(so3)))
	{
		thongbaodiem.innerHTML = "Mời bạn nhập vào điểm là số";
		thongbaodiem.classList.add('animated','fadeInRight');
		thongbaodiem.style.display = "block";
		kq = false;
	}	
	// else if(isNaN(so1) || isNaN(parseFloat(so1)))
	// {
	// 	thongbaodiem.innerHTML = "Mời bạn nhập điểm Toán là số";
	// 	thongbaodiem.style.display = "block";
	// 	kq = false;
	// }
	// else if(isNaN(so2) || isNaN(parseFloat(so2)))
	// {
	// 	thongbaodiem.innerHTML = "Mời bạn nhập điểm Lý là số";
	// 	thongbaodiem.style.display = "block";
	// 	kq = false;
	// }
	// else if(isNaN(so3) || isNaN(parseFloat(so3)))
	// {
	// 	thongbaodiem.innerHTML = "Mời bạn nhập điểm Hóa là số";
	// 	thongbaodiem.style.display = "block";
	// 	kq = false;
	// }			
	return kq;
}

function KiemTraToan(){
	let kq = true;
	let thongbaoToan = document.getElementById("thongbaoToan");
	let toan = document.getElementById('toan').value;
	if(isNaN(toan) || isNaN(parseFloat(toan)))
		{
			thongbaoToan.innerHTML = "Mời bạn nhập điểm Toán là số";
			thongbaoToan.classList.add('animated','fadeInRight');
			thongbaoToan.style.display = "block";
			kq = false;
		}
	if(parseFloat(toan)>10 || parseFloat(toan)<0){
		thongbaoToan.innerHTML = "Vui lòng nhập Điểm Toán từ 0-10 điểm";
		thongbaoToan.classList.add('animated','fadeInRight');
		thongbaoToan.style.display = "block";
		kq = false;			
	}
	return kq;			
}

function KiemTraLy(){
	let kq = true;
	let thongbaoLy = document.getElementById("thongbaoLy");
	let ly = document.getElementById('ly').value;
	if(isNaN(ly) || isNaN(parseFloat(ly)))
		{
			thongbaoLy.innerHTML = "Mời bạn nhập điểm Lý là số";
			thongbaoLy.classList.add('animated','fadeInRight');
			thongbaoLy.style.display = "block";
			kq = false;
		}
	if(parseFloat(ly)>10 || parseFloat(ly)<0){
		thongbaoLy.innerHTML = "Vui lòng nhập Điểm Lý từ 0-10 điểm";
		thongbaoLy.classList.add('animated','fadeInRight');
		thongbaoLy.style.display = "block";
		kq = false;			
	}
	return kq;			
}

function KiemTraHoa(){
	let kq = true;
	let thongbaoHoa = document.getElementById("thongbaoHoa");
	let hoa = document.getElementById('hoa').value;
	if(isNaN(hoa) || isNaN(parseFloat(hoa)))
		{
			thongbaoHoa.innerHTML = "Mời bạn nhập điểm Hóa là số";
			thongbaoHoa.classList.add('animated','fadeInRight');
			thongbaoHoa.style.display = "block";
			kq = false;
		}
	if(parseFloat(hoa)>10 || parseFloat(hoa)<0){
		thongbaoHoa.innerHTML = "Vui lòng nhập Điểm Hóa từ 0-10 điểm";
		thongbaoHoa.classList.add('animated','fadeInRight');
		thongbaoHoa.style.display = "block";
		kq = false;			
	}
	return kq;			
}

// function KiemTraChinhXacDiem(so1,so2,so3)
// {
// 	var kq = true;
// 	var thongbaodiem = document.getElementById("pthongbaodiem");
// 	if(parseFloat(so1)>10 || parseFloat(so1)<0){
// 		thongbaodiem.innerHTML = "Vui lòng nhập Điểm Toán từ 1-10 điểm";
// 		thongbaodiem.style.display = "block";
// 		kq = false;			
// 	}
// 	else if(parseFloat(so2)>10 || parseFloat(so2)<0){
// 		thongbaodiem.innerHTML = "Vui lòng nhập Điểm Lý từ 1-10 điểm";
// 		thongbaodiem.style.display = "block";
// 		kq = false;			
// 	}
// 	else if(parseFloat(so3)>10 || parseFloat(so3)<0){
// 		thongbaodiem.innerHTML = "Vui lòng nhập Điểm Hóa từ 1-10 điểm";
// 		thongbaodiem.style.display = "block";
// 		kq = false;			
// 	}
// 	return kq;
// }


// Reset thông báo điểm
function RsTB(idtb){
	let reset = document.getElementById(idtb);
	let tb  = document.getElementById('pthongbao');
	tb.innerHTML ="";
	tb.classList.remove('animated','fadeInRight')
	reset.innerHTML ="";
	reset.classList.remove('animated','fadeInRight')
}

function RsTBD(idtbd){
	let reset = document.getElementById(idtbd);
	let tb  = document.getElementById('pthongbaodiem');
	tb.innerHTML ="";
	tb.classList.remove('animated','fadeInRight')
	reset.innerHTML ="";
	reset.classList.remove('animated','fadeInRight')
}

//Reset để nhập lại thêm sinh viên và thêm điểm
function rsThemSV(){
	document.getElementById('themsv').reset();
	document.getElementById('pthongbao').innerHTML = "";
	document.getElementById("thongbaoMASV").innerHTML = "";
	document.getElementById("thongbaoHoTen").innerHTML = "";
	document.getElementById("thongbaoCMND").innerHTML = "";
	document.getElementById("thongbaoEmail").innerHTML = "";
	document.getElementById("thongbaoSDT").innerHTML = "";
}

function rsThemDiem(){
	document.getElementById('themdiem').reset();
	document.getElementById("pthongbaodiem").innerHTML = "";
	document.getElementById("thongbaoToan").innerHTML = "";
	document.getElementById("thongbaoLy").innerHTML = "";
	document.getElementById("thongbaoHoa").innerHTML = "";
}
