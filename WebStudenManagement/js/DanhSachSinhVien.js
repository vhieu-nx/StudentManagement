
// Gồm :
// Mảng DSSV và phương thức themSV , TimSV
function DanhSachSinhVien (){
	this.DSSV = [];
	this.themSV = function(SinhVienThem){
		this.DSSV.push(SinhVienThem);
	};
	// this.XoaSinhVien = function(dsSinhVienDuocChon)
	// {
	// 	for(var i=0;dsSinhVienDuocChon.length;i++)
	// 	{
	// 		if(dsSinhVienDuocChon[i]==this.DSSV[i])
	// 		{
	// 			this.DSSV[i].splice(i,1);
	// 		}
	// 	}
	// }
	this.TimSV = function(NameOrMSSV){		
		let svTim = [];
		for (let i = 0 ; i < this.DSSV.length ; i++){
			let ds1 = this.DSSV[i].MSSV;
			let ds2 = this.DSSV[i].HoTen;
			if(NameOrMSSV == ds1){
				svTim.push(this.DSSV[i]);
			}
			else if(NameOrMSSV == ds2){
				svTim.push(this.DSSV[i]);
			}
		}
		return svTim;
	};
}


//LOCALSTORAGE
let name = document.getElementById('name');
let pw = document.getElementById('pw');

// storing input from register-form
function store() {
	localStorage.setItem('name', name.value);
	localStorage.setItem('pw', pw.value);

}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

	// stored data from the register-form
	let storedName = localStorage.getItem('name');
	let storedPw = localStorage.getItem('pw');

	// entered data from the login-form
	let userName = document.getElementById('userName');
	let userPw = document.getElementById('userPw');

	// check if stored data from register-form is equal to data from login form
	if(userName.value == storedName && userPw.value == storedPw) {
		document.getElementById('shownameid').innerText = localStorage.getItem('name');
		alert('Login success.');
	}else {
		alert('Goo to  fix bug.');
	}
}
