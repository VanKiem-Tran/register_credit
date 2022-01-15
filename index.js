const tabContent = document.querySelector(".tab-content div");
tabContent.insertAdjacentHTML(
  "beforebegin",
  `<div id="loadingAddClick" style="position: relative" class="nhapmadk vn">
<div class="content cont-vn">
  <div class="form-group">
    <div class="col-sm-2 control-label">Mã Đăng ký</div>
    <div class="col-sm-2">
      <input
        name="ctl00$PlaceHolderContentArea$ctl00$ctl01$txt_ClassID"
        type="text"
        id="ctl00_PlaceHolderContentArea_ctl00_ctl01_txt_ClassID"
        class="txt txt-vn"
        mathfirstmark="true"
      />
      <input
        type="hidden"
        name="ctl00$PlaceHolderContentArea$ctl00$ctl01$hidClassRegCode"
        id="ctl00_PlaceHolderContentArea_ctl00_ctl01_hidClassRegCode"
      />
    </div>
    <div
      class="col-sm-2 control-label"
      style="text-align: left; width: 100px"
    >
      Mã xác nhận
    </div>
    <div class="col-sm-2">
      <input
        name="ctl00$PlaceHolderContentArea$ctl00$ctl01$txtCaptchar"
        type="text"
        id="ctl00_PlaceHolderContentArea_ctl00_ctl01_txtCaptchar"
        class="txt txt-vn"
      />
    </div>
    <div class="col-sm-2">
      <div id="loadCaptchaHere">
        <title> </title>
        <script>
          document.getElementById("imgCapt").src =
            "../Modules/portal/JpegImage.aspx?" + new Date().getTime();
        </script>

        <form
          name="form1"
          method="post"
          action="./LoadCaptcha.aspx?cdate=150202294621"
          id="form1"
        >
          <div>
            <input
              type="hidden"
              name="__VIEWSTATE"
              id="__VIEWSTATE"
              value="ASSqeqbrhLQFMZCisMHjig2T8yJC4MzRUXei0mo4bp0JaNkAEIqupUfw00af0N3RuONJ2v22pE9I6XIBPHy8szBAPHs/XcHMlkJj/HLkPzzXyTmlisyzImABRBI="
            />
          </div>

          <div>
            <input
              type="hidden"
              name="__VIEWSTATEGENERATOR"
              id="__VIEWSTATEGENERATOR"
              value="0E6543BE"
            />
          </div>
          <div>
            <img
              src="../Modules/portal/JpegImage.aspx?1642214783908"
              id="imgCapt"
              width="100%"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10" style="text-align: center">
      <input
        class="btn-dangky btn-dangky-vn"
        type="button"
        name="btnadd"
        onclick="Add_Click('Bạn có muốn Đăng ký Lớp này?    ',74,76,24201216454,'614    ','AMINHAKEYTEM32NYTES1234567891234    ','7061737323313233    ')"
        value=""
      />
    </div>
  </div>

  <a href="#" class="help help-vn">Hướng dẫn đăng ký</a>
</div>
<div align="center" id="idloading" class="loading" style="display: none">
  <img src="../images/ajax-loader.gif" />Đang xử lý...
</div>
</div>
`
);
