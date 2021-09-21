
<?
if($_POST['tel']){
  $znach = array(
    1 => $_POST['name'],
    2 => $_POST['tel'],
  );
  mail("anna.sovpel97@mail.ru", "Заявка с сайта ".$_SERVER['HTTP_REFERER'], $znach[2]." ".$znach[1]); 
}
Header("Refresh: 8; URL=".$_SERVER['HTTP_REFERER']); 
?>

<!DOCTYPE html>
<title><? print "$znach[1]"; ?></title>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<meta name="robots" content="noindex"/>
<style>
body {background: #232E30;}
body > div {
  position: absolute;
  top: 50%; left: 50%;
  -ms-transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);
  padding: .5% 1% 1%;
  font-size: 35px;
  font-weight: 600px;
  color: black;
  text-align: right;
  text-shadow: -1px -1px #666;
  color: white;
  text-align: center;
}
label:hover {
  color: #dbeaf9;
  cursor: pointer;
}
body > div > div {padding-top: 3%;}
</style

<div>

<div><? print "$znach[1]"; ?> Ваше сообщение успешно отправлено.</div>
</div>

<script> 
document.getElementsByTagName('label')[0].onclick = function() {
  window.location.href="<? print $_SERVER['HTTP_REFERER']; ?>"
}
</script>