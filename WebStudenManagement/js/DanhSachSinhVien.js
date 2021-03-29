
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
