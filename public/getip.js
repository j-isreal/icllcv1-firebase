<script type="application/javascript">
  function getIP(json) {
    document.write("My public IP address is: ", json.ip);
  }
</script>
<script type="application/javascript" src="http://ipinfo.io/?format=jsonp&callback=getIP"></script>
